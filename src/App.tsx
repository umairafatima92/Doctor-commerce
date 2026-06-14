import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeTeasers from './components/HomeTeasers';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  // Native Multi-Page Transition and Instant Scroll to Top
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    setSelectedServiceId(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Handler for deep-linking into specific service blueprints
  const handleViewServiceDetail = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setActiveSection('program');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Inquire service trigger connecting Services -> Contact estimate page
  const handleInquireService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setActiveSection('contact');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div id="applet-master-container" className="min-h-screen bg-white dark:bg-slate-950 select-none relative flex flex-col justify-between font-sans text-gray-950 dark:text-white transition-colors duration-300">
      
      {/* Top sticky blur Header navbar */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onViewServiceDetail={handleViewServiceDetail}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Main structural blocks formatted for Page Routing */}
      <main id="ax-main-scrollable" className="flex-1 w-full pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="w-full"
          >
            {activeSection === 'home' && (
              <>
                <Hero onNavigate={handleNavigate} />
                <HomeTeasers
                  onNavigate={handleNavigate}
                  onViewServiceDetail={handleViewServiceDetail}
                />
              </>
            )}
            {activeSection === 'program' && (
              selectedServiceId === null ? (
                <Services
                  onSelectServiceAndInquire={handleInquireService}
                  onViewServiceDetail={handleViewServiceDetail}
                />
              ) : (
                <ServiceDetail
                  serviceId={selectedServiceId}
                  onBack={() => {
                    setSelectedServiceId(null);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  onInquire={handleInquireService}
                />
              )
            )}
            {activeSection === 'portfolio' && (
              <Portfolio onInquireAboutProject={handleInquireService} />
            )}
            {activeSection === 'testimonials' && (
              <Testimonials />
            )}
            {activeSection === 'about' && (
              <About />
            )}
            {activeSection === 'contact' && (
              <Contact 
                preselectedService={preselectedService} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Custom Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Corporate Compliance Policy Overlay Dialog Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Floating WhatsApp Quick-Connect Widget with animated pulse */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group pointer-events-none">
        {/* Hover / Auto Tooltip Box */}
        <div className="bg-white text-gray-850 shadow-2xl border border-emerald-100 px-4 py-2.5 rounded-2xl text-xs font-semibold font-sans pointer-events-auto flex items-center gap-2 relative opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-emerald-500/5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Chat on WhatsApp (0319 4924056)</span>
          <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-emerald-100 rotate-45" />
        </div>

        {/* Pulsing Green Circle Button */}
        <a
          href="https://wa.me/923194924056?text=Hello%20Doctor%20Commerce!%20I'm%20writing%20to%20arrange%20a%20project%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-emerald-200 hover:scale-105 active:scale-95 transition-all relative cursor-pointer"
          aria-label="Direct WhatsApp Support Contact"
          title="Direct WhatsApp Consultation"
        >
          {/* Simulated Outer Ring Waveform */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/35 animate-ping opacity-75 pointer-events-none" />
          
          {/* WhatsApp Direct SVG */}
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-white relative z-10" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
