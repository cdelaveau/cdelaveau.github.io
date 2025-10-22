
    import React, { useState, useEffect, useRef } from 'react';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import Gallery from '@/components/Gallery';
    import Pricing from '@/components/Pricing';
    import Contact from '@/components/Contact';
    import Navigation from '@/components/Navigation';
    import { Toaster } from '@/components/ui/toaster';
    import ScrollToTopButton from '@/components/ScrollToTopButton';

    function App() {
      const [activeSection, setActiveSection] = useState('gallery');
      
      const galleryRef = useRef(null);
      const pricingRef = useRef(null);
      const contactRef = useRef(null);

      useEffect(() => {
        const sectionRefs = [
          { id: 'gallery', ref: galleryRef },
          { id: 'pricing', ref: pricingRef },
          { id: 'contact', ref: contactRef },
        ];
    
        const handleScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight / 2;
    
          const currentSection = sectionRefs.find(({ ref }) => {
            if (ref.current) {
              const { offsetTop, offsetHeight } = ref.current;
              return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
            }
            return false;
          });
    
          if (currentSection && currentSection.id !== activeSection) {
            setActiveSection(currentSection.id);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [activeSection]);


      return (
        <>
          <Helmet>
            <title>Portfolio Artistique - Dessinateur Professionnel</title>
            <meta name="description" content="Découvrez le portfolio d'un jeune artiste dessinateur talentueux. Commandes personnalisées, illustrations uniques et créations originales." />
          </Helmet>
          
          <div className="min-h-screen relative overflow-hidden">
            <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 -z-10" />
            
            <div className="fixed inset-0 opacity-20 -z-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
              <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700" />
              <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
            </div>

            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="pt-24"
            >
              <div ref={galleryRef}><Gallery /></div>
              <div ref={pricingRef}><Pricing /></div>
              <div ref={contactRef}><Contact /></div>
            </motion.div>

            <Toaster />
            <ScrollToTopButton setActiveSection={setActiveSection} />
          </div>
        </>
      );
    }

    export default App;
  