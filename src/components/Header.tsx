import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ChevronDown, ShoppingBag, Globe, Smartphone, Code, Cpu, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onViewServiceDetail: (serviceId: string) => void;
  onOpenPrivacy: () => void;
}

export default function Header({ activeSection, onNavigate, onViewServiceDetail, onOpenPrivacy }: HeaderProps) {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProgramExpanded, setIsMobileProgramExpanded] = useState(false);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 20) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'program', label: 'Program' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const ecomDropdownLinks = [
    { id: 'amazon', title: 'Amazon FBA & FBM', desc: 'Listing SEO & PPC scaling', icon: ShoppingBag },
    { id: 'shopify', title: 'Premium Shopify', desc: 'Bespoke Liquid & speed optimization', icon: Sparkles },
    { id: 'walmart', title: 'Walmart & eBay', desc: 'Multi-channel feeds & advertising', icon: Globe },
  ];

  const techDropdownLinks = [
    { id: 'web-dev', title: 'Website Development', desc: 'High-speed React & Next.js', icon: Code },
    { id: 'mobile-app', title: 'Mobile Applications', desc: 'Cross-platform native performance', icon: Smartphone },
    { id: 'software-dev', title: 'Custom SaaS & AWS', desc: 'Enterprise apps & serverless cloud', icon: Cpu },
  ];

  return (
    <header
  id="main-navigation-header"
  className="fixed top-0 left-0 right-0 z-50 py-4 border-b shadow-md backdrop-blur-md"
  style={{
    backgroundColor: "rgba(240,249,255,0.95)",
    borderColor: "#bae6fd",
  }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)', boxShadow: '0 4px 14px rgba(14,165,233,0.3)' }}
            >
              <Sparkles id="sparkles-logo-icon" className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block font-sans font-bold text-lg tracking-tight leading-none" style={{ color: '#0c1a2e' }}>
                Doctor Commerce
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-widest font-semibold leading-none mt-1" style={{ color: '#0ea5e9' }}>
                E-com & Tech Advisors
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isProgram = link.id === 'program';

              if (isProgram) {
                return (
                  <div
                    key={link.id}
                    className="relative group py-2 px-1 flex items-center"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      id={`nav-link-${link.id}`}
                      onClick={() => handleLinkClick(link.id)}
                      className="relative py-1.5 px-2.5 font-sans text-sm font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1"
                      style={{ color: activeSection === link.id ? '#0ea5e9' : '#475569' }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className="w-3.5 h-3.5 transition-transform duration-250"
                        style={{ color: isDropdownOpen ? '#0ea5e9' : '#94a3b8' }}
                      />
                      {activeSection !== link.id && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-250 ease-out" style={{ backgroundColor: '#38bdf8' }} />
                      )}
                      {activeSection === link.id && (
                        <motion.div
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-2.5 right-2.5 h-0.5"
                          style={{ backgroundColor: '#0ea5e9' }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-130 backdrop-blur-lg rounded-2xl shadow-2xl p-5 grid grid-cols-2 gap-5 z-50 text-left border"
                          style={{ backgroundColor: 'rgba(240,249,255,0.97)', borderColor: '#bae6fd' }}
                        >
                          {/* Column 1: E-commerce */}
                          <div className="space-y-3.5">
                            <span className="block font-mono text-[10px] uppercase tracking-wider font-bold px-2" style={{ color: '#0ea5e9' }}>
                              E-Commerce Scale
                            </span>
                            <div className="flex flex-col gap-1">
                              {ecomDropdownLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <button
                                    key={item.id}
                                    onClick={() => { onViewServiceDetail(item.id); setIsDropdownOpen(false); }}
                                    className="w-full text-left p-2 rounded-xl border border-transparent transition-all duration-200 cursor-pointer group/item flex items-start gap-3 hover:border-sky-100"
                                    style={{ ['--hover-bg' as string]: '#e0f2fe' }}
                                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e0f2fe')}
                                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
                                  >
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-105" style={{ backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', color: '#0ea5e9' }}>
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <span className="block font-sans font-bold text-xs transition-colors" style={{ color: '#0c1a2e' }}>
                                        {item.title}
                                      </span>
                                      <span className="block font-sans text-[10px] mt-0.5 leading-snug" style={{ color: '#94a3b8' }}>
                                        {item.desc}
                                      </span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Column 2: Tech Services */}
                          <div className="space-y-3.5">
                            <span className="block font-mono text-[10px] uppercase tracking-wider font-bold px-2" style={{ color: '#38bdf8' }}>
                              Tech Department
                            </span>
                            <div className="flex flex-col gap-1">
                              {techDropdownLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <button
                                    key={item.id}
                                    onClick={() => { onViewServiceDetail(item.id); setIsDropdownOpen(false); }}
                                    className="w-full text-left p-2 rounded-xl border border-transparent transition-all duration-200 cursor-pointer group/item flex items-start gap-3"
                                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e0f2fe')}
                                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
                                  >
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-105" style={{ backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', color: '#38bdf8' }}>
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <span className="block font-sans font-bold text-xs transition-colors" style={{ color: '#0c1a2e' }}>
                                        {item.title}
                                      </span>
                                      <span className="block font-sans text-[10px] mt-0.5 leading-snug" style={{ color: '#94a3b8' }}>
                                        {item.desc}
                                      </span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Bottom View All */}
                          <div className="col-span-2 pt-3 border-t flex justify-between items-center px-2" style={{ borderColor: '#bae6fd' }}>
                            <span className="font-sans text-[10px]" style={{ color: '#94a3b8' }}>Select a program to view its blueprint.</span>
                            <button
                              onClick={() => { handleLinkClick('program'); setIsDropdownOpen(false); }}
                              className="inline-flex items-center gap-1 font-sans text-xs font-bold transition-colors cursor-pointer"
                              style={{ color: '#0ea5e9' }}
                            >
                              View All Services
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else {
                return (
                  <div key={link.id} className="relative group py-2 px-1">
                    <button
                      id={`nav-link-${link.id}`}
                      onClick={() => handleLinkClick(link.id)}
                      className="relative py-1.5 px-2.5 font-sans text-sm font-medium transition-colors duration-200 cursor-pointer"
                      style={{ color: activeSection === link.id ? '#0ea5e9' : '#475569' }}
                    >
                      <span>{link.label}</span>
                      {activeSection !== link.id && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-250 ease-out" style={{ backgroundColor: '#38bdf8' }} />
                      )}
                      {activeSection === link.id && (
                        <motion.div
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-2.5 right-2.5 h-0.5"
                          style={{ backgroundColor: '#0ea5e9' }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </div>
                );
              }
            })}
          </nav>

          {/* Right action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border transition-colors cursor-pointer flex items-center justify-center"
              style={{ borderColor: '#bae6fd', backgroundColor: 'transparent' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" style={{ color: '#f59e0b' }} /> : <Moon className="w-4 h-4" style={{ color: '#0c1a2e' }} />}
            </button>

            <button
              id="cta-contact-btn-header"
              onClick={() => handleLinkClick('contact')}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-sans text-sm font-semibold transition-all duration-300 cursor-pointer hover:shadow-lg group"
              style={{ backgroundColor: '#0ea5e9', color: '#ffffff', boxShadow: '0 4px 14px rgba(14,165,233,0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0284c7')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0ea5e9')}
            >
              Get Started
              <ArrowUpRight id="arrow-up-right-header" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border cursor-pointer flex items-center justify-center"
              style={{ borderColor: '#bae6fd' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" style={{ color: '#f59e0b' }} /> : <Moon className="w-5 h-5" style={{ color: '#0c1a2e' }} />}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg focus:outline-none"
              style={{ color: '#0c1a2e' }}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X id="mobile-menu-close-icon" className="w-6 h-6" />
              ) : (
                <Menu id="mobile-menu-open-icon" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden backdrop-blur-md border-b"
            style={{ backgroundColor: 'rgba(240,249,255,0.95)', borderColor: '#bae6fd' }}
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => {
                const isProgram = link.id === 'program';

                if (isProgram) {
                  return (
                    <div key={link.id} className="space-y-1">
                      <div className="flex items-center justify-between w-full px-4 py-3 rounded-lg" style={{ ['--hover-bg' as string]: '#e0f2fe' }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e0f2fe')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}>
                        <button
                          id={`mobile-nav-link-${link.id}`}
                          onClick={() => handleLinkClick(link.id)}
                          className="text-left font-sans text-base font-medium transition-all cursor-pointer grow"
                          style={{ color: activeSection === link.id ? '#0ea5e9' : '#475569' }}
                        >
                          {link.label}
                        </button>
                        <button
                          id="mobile-nav-program-toggle"
                          onClick={(e) => { e.stopPropagation(); setIsMobileProgramExpanded(!isMobileProgramExpanded); }}
                          className="p-1 rounded-md cursor-pointer"
                          style={{ color: '#94a3b8' }}
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileProgramExpanded ? 'rotate-180' : ''}`}
                            style={{ color: isMobileProgramExpanded ? '#0ea5e9' : '#94a3b8' }} />
                        </button>
                      </div>

                      <AnimatePresence>
                        {isMobileProgramExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 pr-4 space-y-1 overflow-hidden text-left"
                          >
                            <span className="block font-mono text-[9px] uppercase tracking-wider font-bold pt-2 pb-1" style={{ color: '#0ea5e9' }}>
                              E-Commerce
                            </span>
                            {ecomDropdownLinks.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => { onViewServiceDetail(item.id); setIsMobileMenuOpen(false); }}
                                className="w-full text-left py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer"
                                style={{ color: '#475569' }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#e0f2fe'; e.currentTarget.style.color = '#0ea5e9'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#475569'; }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#38bdf8' }} />
                                {item.title}
                              </button>
                            ))}

                            <span className="block font-mono text-[9px] uppercase tracking-wider font-bold pt-3 pb-1" style={{ color: '#38bdf8' }}>
                              Tech Department
                            </span>
                            {techDropdownLinks.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => { onViewServiceDetail(item.id); setIsMobileMenuOpen(false); }}
                                className="w-full text-left py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer"
                                style={{ color: '#475569' }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#e0f2fe'; e.currentTarget.style.color = '#0ea5e9'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#475569'; }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#0ea5e9' }} />
                                {item.title}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                } else {
                  return (
                    <button
                      key={link.id}
                      id={`mobile-nav-link-${link.id}`}
                      onClick={() => handleLinkClick(link.id)}
                      className="block w-full text-left px-4 py-3 rounded-lg font-sans text-base font-medium transition-all cursor-pointer"
                      style={{ color: activeSection === link.id ? '#0ea5e9' : '#475569', backgroundColor: activeSection === link.id ? '#e0f2fe' : '' }}
                      onMouseEnter={e => { if (activeSection !== link.id) e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
                      onMouseLeave={e => { if (activeSection !== link.id) e.currentTarget.style.backgroundColor = ''; }}
                    >
                      {link.label}
                    </button>
                  );
                }
              })}
              <div className="pt-4 border-t flex flex-col gap-3" style={{ borderColor: '#bae6fd' }}>
                <button
                  id="mobile-cta-btn"
                  onClick={() => handleLinkClick('contact')}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-sans text-base font-semibold transition-all text-white"
                  style={{ backgroundColor: '#0ea5e9' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0284c7')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0ea5e9')}
                >
                  Start Project Consult
                  <ArrowUpRight id="mobile-arrow" className="w-4 h-4" />
                </button>
                <button
                  id="mobile-privacy-btn"
                  onClick={() => { onOpenPrivacy(); setIsMobileMenuOpen(false); }}
                  className="text-center font-sans text-xs py-1 transition-colors"
                  style={{ color: '#94a3b8' }}
                >
                  Corporate Privacy Policy
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}