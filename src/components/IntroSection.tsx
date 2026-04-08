import { motion } from 'motion/react';
import { Globe, Shield, Award, Truck } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-12 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
              Uncompromising Quality, <br />
              <span className="text-gold">Global Scale.</span>
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              At Well Connected Limited, we don't just supply food; we build bridges between continents. 
              Our commitment to excellence has made us the preferred partner for major retailers 
              and wholesalers worldwide. From the finest spices to bulk grains and premium meats, 
              we ensure every shipment meets the highest international standards.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-navy">15+</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-charcoal/60">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-navy">50+</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-charcoal/60">Countries Served</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-navy">10k+</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-charcoal/60">Tons Delivered</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000"
              alt="Global Logistics"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold p-4 sm:p-8 rounded-2xl shadow-xl hidden md:block">
              <Truck size={48} className="text-navy" />
            </div>
          </motion.div>
        </div>

        {/* Logo Cloud / Trust Section */}
        <div className="border-t border-charcoal/10 pt-12 sm:pt-16">
          <p className="text-center text-sm uppercase tracking-[0.4em] text-charcoal/40 mb-12">
            Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <Globe size={32} className="md:w-10 md:h-10" />
            <Shield size={32} className="md:w-10 md:h-10" />
            <Award size={32} className="md:w-10 md:h-10" />
            <div className="text-xl md:text-2xl font-serif font-bold">MARITIME</div>
            <div className="text-xl md:text-2xl font-serif font-bold">AGRO-CORP</div>
            <div className="text-xl md:text-2xl font-serif font-bold">VANGUARD</div>
          </div>
        </div>
      </div>
    </section>
  );
}
