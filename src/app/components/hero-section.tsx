import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1765009433753-c7462637d21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA1NjIzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Boutique Honoris Cosa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.div 
          className="mb-4 h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.div>
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] font-light mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          HONORIS COSA
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl tracking-[0.3em] font-light mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          L'EXCELLENCE À VOTRE PORTÉE
        </motion.p>
        <motion.div 
          className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        ></motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-xs tracking-[0.2em]">DÉCOUVRIR</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/80 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}