import { motion } from 'motion/react';
import { Ship, Package, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <Ship size={40} />,
    title: "Global Logistics",
    description: "Seamless door-to-door delivery across oceans and borders with real-time tracking and compliance management."
  },
  {
    icon: <Package size={40} />,
    title: "Bulk Sourcing",
    description: "Direct relationships with producers worldwide ensuring competitive pricing and consistent supply chains."
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Quality Assurance",
    description: "Rigorous multi-stage inspection processes that exceed international food safety and quality standards."
  }
];

export default function ServicesHighlights() {
  return (
    <section className="py-12 sm:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Our Expertise</h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-charcoal/5 group"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-4">{service.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
