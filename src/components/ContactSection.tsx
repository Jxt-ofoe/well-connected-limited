import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';


export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Collect form data
    const name = nameRef.current?.value || '';
    const company = companyRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const message = messageRef.current?.value || '';
    // Format WhatsApp message (nicely, no % encoding)
    const text = [
      'New Contact Form Submission',
      '',
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Message: ${message}`
    ].join('\n');
    const phone = '233530153065';
    // Use encodeURIComponent only for the URL, not for the message formatting
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Visual Trust */}
      <div className="md:w-1/2 relative min-h-[400px] md:min-h-screen">
        <img
          src="/working.jpg"
          alt="Our Team"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/40" />
        <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-12 rounded-2xl border border-white/20 max-w-md"
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">15+ Years of Experience.</h2>
            <p className="text-xl text-gold italic font-serif">Your Partner in Global Trade.</p>
            <div className="w-16 h-1 bg-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </div>

      {/* Right Side: Connection */}
      <div className="md:w-1/2 bg-white p-8 md:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8">Get in Touch</h2>
          
          <div className="space-y-6 mb-8 sm:mb-12">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-off-white rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal/40">Phone</p>
                <p className="text-lg font-medium text-navy">+233 244 612516 <br /> +233 551 434 224</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-off-white rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal/40">Email</p>
                 <p className="text-lg font-medium text-navy">wellconnected@gmail.com, eofoe02@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-off-white rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal/40">Headquarters</p>
                <p className="text-lg font-medium text-navy">HQ4J+98H, Graphic Rd, Accra, Ghana</p>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 mb-8 sm:mb-12"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-off-white border-none rounded-xl p-4 focus:ring-2 focus:ring-gold transition-all outline-none"
                      placeholder="John Doe"
                      ref={nameRef}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Company</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-off-white border-none rounded-xl p-4 focus:ring-2 focus:ring-gold transition-all outline-none"
                      placeholder="Acme Corp"
                      ref={companyRef}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-off-white border-none rounded-xl p-4 focus:ring-2 focus:ring-gold transition-all outline-none"
                    placeholder="john@example.com"
                    ref={emailRef}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-off-white border-none rounded-xl p-4 focus:ring-2 focus:ring-gold transition-all outline-none resize-none"
                    placeholder="How can we help your business grow?"
                    ref={messageRef}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-4 rounded-xl uppercase tracking-widest flex items-center justify-center space-x-3 transition-all shadow-lg group"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gold/10 border border-gold/20 p-12 rounded-3xl text-center mb-12"
              >
                <CheckCircle size={64} className="text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-bold text-navy mb-4">Message Sent</h3>
                <p className="text-charcoal/70">
                  Thank you for reaching out. A dedicated partnership manager will contact you within 24 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Google Maps Embed */}
          <div className="w-full h-64 sm:h-80 bg-off-white rounded-2xl overflow-hidden relative border border-charcoal/5 shadow-inner">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=HQ4J+98H,Graphic+Rd,Accra,Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              title="Well Connected HQ Location"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-2 border-gold/10 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
