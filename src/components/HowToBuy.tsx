import { motion } from 'motion/react';
import { ShoppingBag, FileText } from 'lucide-react';

interface HowToBuyProps {
  onNavigate?: (page: string) => void;
}

export default function HowToBuy({ onNavigate }: HowToBuyProps) {
  return (
    <section id="how-to-buy" className="py-12 sm:py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">How to Partner With Us</h2>
          <p className="text-white/60 uppercase tracking-widest text-sm">Choose the path that fits your scale</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Card 1: E-commerce */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-3xl h-[400px] sm:h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1534483909714-d40ad1df62f4?auto=format&fit=crop&q=80&w=1000"
              alt="Shop Online"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300" />
            
            <div className="relative h-full p-6 sm:p-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <ShoppingBag size={40} className="text-navy" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">E-Commerce Shop</h3>
              <p className="text-white/80 mb-10 max-w-xs">
                Perfect for smaller recurring orders and immediate fulfillment. Browse our live inventory and checkout securely.
              </p>
              <a 
                href="https://well-connected-company-limited-vip6.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold/90 text-navy font-bold py-4 px-10 rounded-full uppercase tracking-widest transition-all shadow-xl inline-block"
              >
                Shop Online Now
              </a>
            </div>
          </motion.div>

          {/* Card 2: Bulk Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-3xl h-[400px] sm:h-[500px] border border-gold/30"
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000"
              alt="Custom Quote"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors duration-300" />
            
            <div className="relative h-full p-6 sm:p-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <FileText size={40} className="text-gold" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Bulk Custom Quotes</h3>
              <p className="text-white/80 mb-10 max-w-xs">
                For large-scale distribution and enterprise partnerships. Get tailored pricing and dedicated logistics support.
              </p>
              <button 
                onClick={() => onNavigate?.('contact')}
                className="border-2 border-gold text-gold hover:bg-gold hover:text-navy font-bold py-4 px-10 rounded-full uppercase tracking-widest transition-all shadow-xl"
              >
                Request a Custom Quote
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
