
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const pricingPlans = [
    {
      name: 'Line-art',
      price: '20€',
      description: 'Dessin au trait pur',
      features: [
        '1 personnage',
        'Format A4 portrait',
        'Sans droits d\'auteurs'
      ],
      popular: false
    },
    {
      name: 'Flat-color',
      price: '40€',
      description: 'Dessin au trait avec couleurs plates',
      features: [
        '1 personnage',
        'Fond uni',
        'Format A4 portrait ou paysage',
        'Sans droits d\'auteurs'
      ],
      popular: true
    },
    {
      name: 'Line-art + Flat-color + Shades',
      price: '60€',
      description: 'Dessin complet avec ombrages',
      features: [
        '1 personnage',
        'Fond uni',
        'Format A4 portrait ou paysage',
        'Sans droits d\'auteurs',
        'Pose en perspective'
      ],
      popular: false
    }
  ];

  const handleOrder = (planName) => {
    toast({
      title: "Commande initiée! 🎨",
      description: `Vous avez sélectionné: ${planName}. Contactez-me pour finaliser votre commande!`,
    });
  };

  return (
    <section id="pricing" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Mes <span className="gradient-text">Tarifs</span>
          </h2>
          <p className="text-gray-400 text-lg">Des prix adaptés à tous les projets</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass-effect rounded-3xl p-8 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-semibold">Populaire</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="text-5xl font-bold gradient-text mb-2">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center glass-effect rounded-2xl p-8"
        >
          <p className="text-gray-300">
            💡 <strong>Tarifs personnalisés disponibles</strong> pour les projets spéciaux, 
            les commandes en volume ou les collaborations à long terme. N'hésitez pas à me contacter!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
