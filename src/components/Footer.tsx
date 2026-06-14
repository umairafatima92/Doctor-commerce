import React from 'react';
import { Sparkles, Mail, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenWhatsApp?: () => void;
}

export default function Footer({ onNavigate, onOpenPrivacy, onOpenWhatsApp }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="corporate-footer" className="text-slate-700 pt-14 pb-8 text-left relative overflow-hidden" style={{ backgroundColor: '#f0f9ff' }}>

      <div className="absolute left-1/4 bottom-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: '#0ea5e9' }} />
      <div className="absolute right-1/4 top-0 w-60 h-60 rounded-full filter blur-3xl pointer-events-none opacity-15" style={{ backgroundColor: '#38bdf8' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b pb-10" style={{ borderColor: '#bae6fd' }}>

          {/* Logo & Brief */}
          <div className="md:col-span-4 space-y-5">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 cursor-pointer text-left">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-md" style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)' }}>
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-sans font-bold text-base tracking-tight leading-none" style={{ color: '#0c1a2e' }}>Doctor Commerce</span>
                <span className="block font-mono text-[9px] uppercase tracking-widest font-bold leading-none mt-1" style={{ color: '#0ea5e9' }}>
                  E-com & Tech Advisors
                </span>
              </div>
            </button>

            <p className="font-sans text-sm leading-relaxed max-w-sm" style={{ color: '#475569' }}>
              We engineer scalable e-commerce systems and custom software builds designed to optimize user engagement and maximize corporate ROAS returns globally.
            </p>

            <div className="space-y-2.5 text-sm font-sans" style={{ color: '#475569' }}>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" style={{ color: '#0ea5e9' }} />
                <a href="mailto:hello@doctorcommerce.co" className="transition-colors hover:text-sky-600">hello@doctorcommerce.co</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" style={{ color: '#0ea5e9' }} />
                <a href="tel:+18005553726" className="transition-colors hover:text-sky-600">+1 (800) 555-DR-COMMERCE</a>
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" style={{ color: '#0ea5e9' }} xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                </svg>
                <a href="https://wa.me/923194924056?text=Hello%20Doctor%20Commerce!%20I'm%20writing%20to%20inquire%20about%20your%20expert%20services."
                  target="_blank" rel="noopener noreferrer"
                  className="font-bold flex items-center gap-1 transition-all cursor-pointer text-sm hover:text-sky-600" style={{ color: '#0c1a2e' }}>
                  WhatsApp: 0319 4924056
                  <ExternalLink className="w-3 h-3" style={{ color: '#94a3b8' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-4">
            <span className="block font-mono text-xs uppercase tracking-widest font-bold" style={{ color: '#0ea5e9' }}>Quick Nav Menu</span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-sm" style={{ color: '#475569' }}>
              {[
                { label: 'Home Banner', id: 'home' },
                { label: 'Expertise Program', id: 'program' },
                { label: 'Case Studies', id: 'portfolio' },
                { label: 'Client Feedback', id: 'testimonials' },
                { label: 'About Us', id: 'about' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => onNavigate(item.id)} className="hover:text-sky-600 transition-colors cursor-pointer">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Niches */}
          <div className="md:col-span-4 space-y-4">
            <span className="block font-mono text-xs uppercase tracking-widest font-bold" style={{ color: '#0ea5e9' }}>Our Prime Niches</span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm" style={{ color: '#475569' }}>
              {['Amazon Seller', 'Mobile Build', 'Walmart Seller', 'React & Node', 'Shopify Store', 'WordPress WP', 'eBay Automation', 'UI/UX Figma', 'Facebook Market', 'AWS Cloud'].map((n) => (
                <span key={n} className="hover:text-sky-600 cursor-default">• {n}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-sm" style={{ color: '#94a3b8' }}>
          <span>© {currentYear} Doctor Commerce. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <button id="footer-open-privacy-btn" onClick={onOpenPrivacy} className="hover:text-sky-600 underline transition-colors cursor-pointer">
              Privacy Policy & GDPR
            </button>
            <span className="font-mono" style={{ color: '#38bdf8' }}>SOC2 Type II Protected</span>
          </div>
        </div>

      </div>
    </footer>
  );
}