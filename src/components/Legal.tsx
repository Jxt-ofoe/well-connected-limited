import { motion } from 'motion/react';

interface LegalProps {
  section: 'privacy' | 'terms' | 'shipping' | 'compliance';
}

export default function Legal({ section }: LegalProps) {
  const content = {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "April 8, 2026",
      sections: [
        {
          heading: "1. Information We Collect",
          body: "We collect information that you provide directly to us, such as when you create an account, request a quote, or contact our support team. This may include your name, email address, company details, and phone number."
        },
        {
          heading: "2. How We Use Your Information",
          body: "We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about your orders and partnerships."
        },
        {
          heading: "3. Data Security",
          body: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "April 8, 2026",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          body: "By accessing and using the services of Well Connected Limited, you agree to be bound by these Terms of Service and all applicable laws and regulations."
        },
        {
          heading: "2. Use License",
          body: "Permission is granted to temporarily download one copy of the materials on Well Connected Limited's website for personal, non-commercial transitory viewing only."
        },
        {
          heading: "3. Disclaimer",
          body: "The materials on Well Connected Limited's website are provided on an 'as is' basis. Well Connected Limited makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties."
        }
      ]
    },
    shipping: {
      title: "Shipping Policy",
      lastUpdated: "April 8, 2026",
      sections: [
        {
          heading: "1. Global Distribution",
          body: "Well Connected Limited provides global shipping services to over 50 countries. We partner with leading maritime and air freight carriers to ensure timely and safe delivery of all provisions."
        },
        {
          heading: "2. Delivery Times",
          body: "Delivery times vary depending on the destination and the nature of the goods. Bulk provisions typically have a lead time of 14-21 business days for international shipping."
        },
        {
          heading: "3. Customs and Duties",
          body: "Customers are responsible for all customs duties, taxes, and fees associated with their orders. We provide all necessary documentation to facilitate smooth customs clearance."
        }
      ]
    },
    compliance: {
      title: "Compliance & Standards",
      lastUpdated: "April 8, 2026",
      sections: [
        {
          heading: "1. Food Safety Standards",
          body: "We adhere to the highest international food safety standards, including HACCP and ISO 22000. Our facilities and partners are regularly audited to ensure compliance."
        },
        {
          heading: "2. Ethical Sourcing",
          body: "Well Connected Limited is committed to ethical sourcing practices. We work closely with our producers to ensure fair labor practices and sustainable farming methods."
        },
        {
          heading: "3. Regulatory Compliance",
          body: "We comply with all local and international regulations governing the trade and distribution of food products, ensuring that every shipment is fully documented and legal."
        }
      ]
    }
  };

  const current = content[section];

  return (
    <div className="bg-off-white py-12 sm:py-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy mb-4">{current.title}</h1>
          <p className="text-charcoal/40 text-sm uppercase tracking-widest mb-12">Last Updated: {current.lastUpdated}</p>
          
          <div className="space-y-12">
            {current.sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-2xl font-serif font-bold text-navy mb-4">{s.heading}</h2>
                <p className="text-charcoal/80 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
