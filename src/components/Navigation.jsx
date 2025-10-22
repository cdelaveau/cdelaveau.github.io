
import React from 'react';
import { motion } from 'framer-motion';
import { Image, DollarSign, Mail } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'gallery', icon: Image, label: 'Galerie' },
    { id: 'pricing', icon: DollarSign, label: 'Tarifs' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-full px-6 py-3 flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden md:inline text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
