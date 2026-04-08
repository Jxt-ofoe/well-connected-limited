import { motion } from 'motion/react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Logistics and Provisions"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/60 backdrop-brightness-75" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-serif font-bold mb-6 leading-tight drop-shadow-2xl">
            The Trusted Source for <br />
            <span className="text-gold italic">Global Provisions</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Sourcing & Delivering Quality Bulk Foods Across Borders for Over 15 Years.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          onClick={onExplore}
          className="bg-gold hover:bg-gold/90 text-navy font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg uppercase tracking-widest shadow-xl transition-all"
        >
          Explore Our Products
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
