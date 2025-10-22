
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 text-purple-400">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">Artiste Dessinateur</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Créations
            <span className="gradient-text block">Artistiques</span>
            Uniques
          </h1>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Bienvenue dans mon univers créatif ! Je transforme vos idées en œuvres d'art personnalisées. 
            Du portrait au character design, chaque création est unique et réalisée avec passion.
          </p>

          <div className="flex gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
            >
              Voir la Galerie
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass-effect rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Me Contacter
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative floating">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30" />
            <div className="relative glass-effect rounded-3xl p-8 flex items-center justify-center">
              <Palette className="w-64 h-64 text-purple-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
  