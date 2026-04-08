import { motion } from 'motion/react';
import { Target, Heart, Shield, Users } from 'lucide-react';

const values = [
  {
    icon: <Target size={32} />,
    title: "Precision Sourcing",
    description: "We leave no stone unturned in our quest for the finest provisions, ensuring every product meets our exacting standards."
  },
  {
    icon: <Heart size={32} />,
    title: "Integrity First",
    description: "Honesty and transparency are the bedrock of our relationships with producers and partners alike."
  },
  {
    icon: <Shield size={32} />,
    title: "Unwavering Quality",
    description: "Our multi-stage quality control process ensures that only the best products reach our clients' shelves."
  },
  {
    icon: <Users size={32} />,
    title: "Global Partnership",
    description: "We believe in the power of collaboration, building long-term bridges between global markets."
  }
];

interface AboutUsProps {
  onNavigate?: (page: string) => void;
}

export default function AboutUs({ onNavigate }: AboutUsProps) {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/wellconnected.png"
          alt="Our Journey"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gold italic font-serif"
          >
            Building Bridges Through Quality Since 2011
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 sm:py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4 sm:mb-8">A Legacy of Excellence</h2>
            <div className="space-y-6 text-charcoal/80 leading-relaxed">
              <p>
                Founded in 2011, Well Connected Limited began with a simple yet ambitious vision: to streamline the global food supply chain without compromising on quality. What started as a small boutique sourcing firm in New York has grown into a global powerhouse in the provisions industry.
              </p>
              <p>
                Over the past 15 years, we have navigated the complexities of international trade, built direct relationships with artisanal producers, and established a logistics network that spans over 50 countries. Our journey has been defined by a relentless pursuit of perfection and a commitment to our partners' success.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
              alt="Team Collaboration"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-6 -left-6 bg-gold w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-navy font-serif font-bold text-xl sm:text-2xl">15y</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 sm:mb-8">Our Mission</h2>
            <p className="text-lg sm:text-2xl font-serif italic text-gold/90 leading-relaxed mb-8 sm:mb-12">
              "To empower global businesses by providing seamless access to the world's finest provisions, driven by innovation, integrity, and an unwavering commitment to quality."
            </p>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">Our Core Values</h2>
          <p className="text-charcoal/60 uppercase tracking-widest text-[10px] sm:text-sm">The principles that guide every shipment</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow"
            >
              <div className="text-gold mb-6">{value.icon}</div>
              <h3 className="text-xl font-serif font-bold text-navy mb-4">{value.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24 bg-off-white border-t border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-6 sm:mb-8">Ready to Connect?</h2>
          <p className="text-base sm:text-lg text-charcoal/70 mb-8 sm:mb-10">
            Join the hundreds of businesses that trust Well Connected Limited for their global provisioning needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onNavigate?.('contact')}
              className="bg-navy text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest hover:bg-navy/90 transition-all shadow-lg"
            >
              Partner With Us
            </button>
            <button 
              onClick={() => onNavigate?.('products')}
              className="border-2 border-navy text-navy font-bold py-4 px-10 rounded-full uppercase tracking-widest hover:bg-navy hover:text-white transition-all"
            >
              View Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
