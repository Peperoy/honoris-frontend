import { useState, useRef } from 'react';
import { ChevronRight, X, ChevronDown } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface Brand {
  id: string;
  name: string;
  description: string;
  image: string;
  origin: string;
  products: Product[];
}

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1080&q=80';

const brands: Brand[] = [
  { id: 'talking-wall', name: 'talking wall', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'roberto-collina', name: 'Roberto Collina', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'siyu', name: 'SIYU', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'blonde-8', name: 'Blonde n°8', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'rrd', name: 'RRD', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'la-bruket', name: 'L:A BRUKET', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'ugg', name: 'UGG', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'philippe-model', name: 'Philippe Model', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'ibeliv', name: 'ibeliv', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'yves-salomon', name: 'Yves Salomon', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'bella-dahl', name: 'Bella Dahl', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'montagut', name: 'Montagut', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: '5-octobre', name: '5 Octobre', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'barbara-bui', name: 'Barbara Bui', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'forte-forte', name: 'Forte Forte', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'vanessa-bruno', name: 'Vanessa Bruno', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'faliero-sarti', name: 'Faliero Sarti', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'jerome-dreyfuss', name: 'Jérôme Dreyfuss', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'masons', name: "Mason's", description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'seven', name: 'Seven', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'rails', name: 'Rails', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
  { id: 'majestic-filatures', name: 'Majestic Filatures', description: 'Une marque que nous avons le plaisir de vous proposer en boutique.', image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [] },
];

const INITIAL_COUNT = 6;

export function BrandsSection() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const visibleBrands = showAllBrands ? brands : brands.slice(0, INITIAL_COUNT);
  const hasMoreBrands = brands.length > INITIAL_COUNT;

  return (
    <section id="brands" className="py-24 md:py-32 bg-zinc-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            className="text-xs tracking-[0.3em] text-amber-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            NOS MARQUES
          </motion.span>
          <motion.div 
            className="h-px w-16 bg-amber-400 mt-4 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl tracking-[0.1em] font-light mt-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nos Partenaires de Luxe
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Une sélection exclusive des plus grandes maisons de couture internationales
          </motion.p>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleBrands.map((brand, index) => (
            <motion.button
              key={brand.id}
              onClick={() => setSelectedBrand(brand)}
              className="group relative bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <motion.img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl tracking-[0.2em] font-light mb-2">{brand.name}</h3>
                <div className="flex items-center gap-2 text-sm opacity-80">
                  <span>Découvrir</span>
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Voir plus */}
        {hasMoreBrands && !showAllBrands && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button
              onClick={() => setShowAllBrands(true)}
              className="group px-8 py-4 border-2 border-amber-600 text-amber-600 tracking-[0.2em] text-sm font-light transition-all duration-300 hover:bg-amber-600 hover:text-white flex items-center gap-2"
            >
              Voir plus
              <ChevronDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        )}

        {/* Brand Detail Modal */}
        {selectedBrand && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80"
            onClick={() => setSelectedBrand(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Brand Header */}
              <div className="grid md:grid-cols-2">
                <div className="aspect-[3/4] md:aspect-auto">
                  <img
                    src={selectedBrand.image}
                    alt={selectedBrand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="text-xs tracking-[0.3em] text-amber-600">MARQUE</span>
                    <div className="h-px w-16 bg-amber-400 mt-4"></div>
                  </div>
                  <h3 className="text-4xl tracking-[0.2em] font-light mb-4">
                    {selectedBrand.name}
                  </h3>
                  <p className="text-sm text-amber-600 tracking-[0.2em] mb-6">
                    {selectedBrand.origin}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {selectedBrand.description}
                  </p>
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="px-8 py-3 border border-black tracking-[0.2em] text-sm transition-all duration-300 hover:bg-black hover:text-white self-start flex items-center gap-2"
                  >
                    <X size={16} />
                    FERMER
                  </button>
                </div>
              </div>

              {/* Products Gallery */}
              {selectedBrand.products.length > 0 ? (
                <div className="border-t border-gray-200 p-8 md:p-12">
                  <div className="mb-8">
                    <h4 className="text-2xl tracking-[0.2em] font-light mb-2">Sélection de Produits</h4>
                    <p className="text-gray-600 text-sm">Découvrez quelques pièces emblématiques de la collection</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {selectedBrand.products.map((product, index) => (
                      <motion.div
                        key={product.id}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
                          <motion.img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-amber-600 tracking-[0.2em]">{product.category}</p>
                          <h5 className="font-light">{product.name}</h5>
                          <p className="text-sm text-gray-600">{product.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="border-t border-gray-200 p-8 md:p-12 text-center">
                  <p className="text-gray-600">Découvrez les créations {selectedBrand.name} en boutique.</p>
                  <p className="text-sm text-amber-600 mt-2 tracking-[0.2em]">44 avenue d&apos;Amsterdam — 59300 Valenciennes</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
