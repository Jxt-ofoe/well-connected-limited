import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-navy text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => onNavigate?.('home')}>
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy font-serif font-bold text-sm">WC</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">WELL CONNECTED</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed mb-8">
              The world's premier B2B partner for bulk food sourcing and global distribution. 
              Excellence in every shipment, reliability in every partnership.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-serif font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-gold transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate?.('products')} className="hover:text-gold transition-colors">Products</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-gold transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate?.('contact')} className="hover:text-gold transition-colors">Contact</button></li>
              <li><button onClick={() => onNavigate?.('contact')} className="hover:text-gold transition-colors">Bulk Quotes</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-serif font-bold mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-white/60">
              <li><button onClick={() => onNavigate?.('privacy')} className="hover:text-gold transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate?.('terms')} className="hover:text-gold transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onNavigate?.('shipping')} className="hover:text-gold transition-colors">Shipping Policy</button></li>
              <li><button onClick={() => onNavigate?.('compliance')} className="hover:text-gold transition-colors">Compliance</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs uppercase tracking-widest">
          <p>© 2026 Well Connected Limited. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Sourced with Integrity. Delivered with Precision.</p>
        </div>
      </div>
    </footer>
  );
}
