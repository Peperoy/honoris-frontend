import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <motion.img
                  src="/images/about.jpg"
                  alt="Intérieur boutique"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 border border-amber-400/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6">
                <motion.span 
                  className="text-xs tracking-[0.3em] text-amber-600"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  À PROPOS
                </motion.span>
                <motion.div 
                  className="h-px w-16 bg-amber-400 mt-4"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 64 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                ></motion.div>
              </div>
              <motion.h2 
                className="text-4xl md:text-5xl tracking-[0.1em] font-light mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                L'Excellence Incarnée
              </motion.h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Honoris Cosa est bien plus qu'une boutique de vêtements. C'est un sanctuaire
                  dédié à l'élégance et au raffinement, où chaque pièce est sélectionnée avec
                  soin pour sa qualité exceptionnelle.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Nous proposons une sélection exclusive des plus grandes maisons de mode
                  internationales, réunissant tradition, savoir-faire et innovation dans un
                  écrin élégant.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Notre mission est de vous offrir une expérience d'achat unique, où le luxe
                  rencontre le confort, et où chaque visite devient un moment privilégié.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}