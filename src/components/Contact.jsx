
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Instagram, Facebook, Youtube } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleContactClick = (type) => {
    toast({
      title: "Contact rapide! 🚀",
      description: `Cliquez sur l'icône pour me contacter via ${type}!`,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute question, commande personnalisée ou collaboration. 
            Je suis toujours ravi de discuter de nouveaux projets créatifs!
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex items-center justify-center gap-4">
              <Mail className="w-6 h-6 text-purple-400" />
              <a 
                href="mailto:stopmotiondraw61@gmail.com" 
                className="text-lg text-gray-200 hover:text-white transition-colors"
                onClick={() => handleContactClick('email')}
              >
                stopmotiondraw61@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Globe className="w-6 h-6 text-purple-400" />
              <a 
                href="https://my-univers.art" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-gray-200 hover:text-white transition-colors"
                onClick={() => handleContactClick('site web')}
              >
                my-univers.art
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-8 pt-8">
            <motion.a
              href="https://www.facebook.com/profile.php?id=61581135437307"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-blue-500 transition-all"
              onClick={() => handleContactClick('Facebook')}
            >
              <Facebook className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/stopmotion_draw/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-pink-500 transition-all"
              onClick={() => handleContactClick('Instagram')}
            >
              <Instagram className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@StopMotionDraw"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-red-600 transition-all"
              onClick={() => handleContactClick('YouTube')}
            >
              <Youtube className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
