import { motion } from 'motion/react';

const categories = [
  {
    title: "Grains",
    image: "/grains.jpg",
    description: "Premium rice, maize, cassava flour, and plantain flour sourced for quality."
  },
  {
    title: "Canned Goods",
    image: "/cannedfoods.jpg",
    description: "High-grade sardines, beans, and preserved vegetables for long-term scale."
  },
  {
    title: "Snacks",
    image: "/snacks.jpg",
    description: "A variety of biscuits, premium nuts, and crunchy groundnuts."
  },
  {
    title: "Spreads",
    image: "/spreads.jpg",
    description: "Creamy and natural peanut butter, perfect for wholesale distribution."
  },
  {
    title: "Dried Goods",
    image: "/driedfoods.jpg",
    description: "Essential pasta, oats, and high-quality dried fish."
  },
  {
    title: "Frozen Foods",
    image: "/frozenfoods.jpg",
    description: "Chicken, fish (tilapia, mackerel), and vegetables like okra and carrots."
  },
  {
    title: "Local Provisions",
    image: "/localprovisions.jpg",
    description: "Authentic gonzago, kontomire (cocoyam leaves), and fufu powder."
  }
];

export default function ProductCatalog() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-navy mb-6">Our Premium Products</h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto italic font-light">
            A visual journey through the world's finest provisions, sourced with integrity and delivered with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                const element = document.getElementById('how-to-buy');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative group h-[300px] sm:h-[400px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-serif font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {category.title}
                </h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {category.description}
                </p>
                <div className="w-12 h-1 bg-gold mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
