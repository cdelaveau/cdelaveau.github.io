
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const artworks = [
    {
      id: 1,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/e04c40a9a3dc2fd0af160083e83080a5.png',
      title: 'Archer Mystique',
      category: 'Character Design'
    },
    {
      id: 2,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/691167bb7faa851f0a60310f08b1d8ba.png',
      title: 'Guerrier Bestial',
      category: 'Fantasy'
    },
    {
      id: 3,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/909541a60cda554d5e5277474bbac83a.png',
      title: 'Guerrière Futuriste',
      category: 'Sci-Fi'
    },
    {
      id: 4,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/1e467a220246e66345480fbdee8c99d2.png',
      title: 'Duo Masqué',
      category: 'Character Design'
    },
    {
      id: 5,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/06691d198f186c9619f62378ce30e9a7.png',
      title: 'Héros Déterminé',
      category: 'Manga'
    },
    {
      id: 6,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/e001650867dd791aa1485afc801f9511.png',
      title: 'Guerrier Épique',
      category: 'Action'
    },
    {
      id: 7,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/a1128058e2342dc65990bf7322862241.png',
      title: 'Fée Nature',
      category: 'Fantasy'
    },
    {
      id: 8,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/b9d0e65790e3ce1fa6526beccb7a5258.png',
      title: 'Demoiselle Féline',
      category: 'Character Design'
    },
    {
      id: 9,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/0629879e6fdaf443c940b918720fbb03.png',
      title: 'Jeune Aventurière',
      category: 'Kawaii'
    },
    {
      id: 10,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/98592ac333acde27d728324996afb2fe.png',
      title: 'Héros Bicolore',
      category: 'Manga'
    },
    {
      id: 11,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/bce888d9fed94ddc3b01f1b0ec38e15b.png',
      title: 'Aventurière Steampunk',
      category: 'Steampunk'
    },
    {
      id: 12,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/e23988ee9c4f558b31ef4b930553a196.png',
      title: 'Guerrier Vert',
      category: 'Character Design'
    },
    {
      id: 13,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/684fca810970ebf6cf392ebf877a4721.png',
      title: 'Luxure',
      category: 'Péchés Capitaux'
    },
    {
      id: 14,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/36dbbe5f6fe0147f533bcec62c56f706.png',
      title: 'Paresse',
      category: 'Péchés Capitaux'
    },
    {
      id: 15,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/bdbc8a0e506a00fb34116c0456de5a4a.png',
      title: 'Orgueil',
      category: 'Péchés Capitaux'
    },
    {
      id: 16,
      url: 'https://horizons-cdn.hostinger.com/85b65129-cf37-4d30-a021-3bd8378493f8/e6c862aa5bcae5a785d09bc18d3272da.png',
      title: 'Zenitsu - Deux Faces',
      category: 'Fan Art'
    }
  ];

  return (
    <section id="gallery" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Ma <span className="gradient-text">Galerie</span>
          </h2>
          <p className="text-gray-400 text-lg">Découvrez mes créations artistiques</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="artwork-card cursor-pointer group"
              onClick={() => setSelectedImage(artwork)}
            >
              <div className="relative overflow-hidden rounded-2xl glass-effect">
                <img
                  src={artwork.url}
                  alt={artwork.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-1">{artwork.title}</h3>
                  <p className="text-purple-400 text-sm">{artwork.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-purple-400">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
