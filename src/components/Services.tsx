import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  TrendingUp,
  Globe,
  Sparkles,
  Users,
  Smartphone,
  Code,
  Cpu,
  Grid,
  Layers,
  Video,
  Palette,
  Cloud,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { servicesCategories } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectServiceAndInquire: (serviceTitle: string) => void;
  onViewServiceDetail: (serviceId: string) => void;
}

// Icon mapper helper
const renderServiceIcon = (iconName: string, className = 'w-6 h-6') => {
  switch (iconName) {
    case 'ShoppingBag':
      return <ShoppingBag className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Code':
      return <Code className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Grid':
      return <Grid className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Video':
      return <Video className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    case 'Cloud':
      return <Cloud className={className} />;
    default:
      return <Code className={className} />;
  }
};

export default function Services({ onSelectServiceAndInquire, onViewServiceDetail }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'ecommerce' | 'tech'>('all');

  const filteredCategories = servicesCategories.filter((cat) => {
    if (activeTab === 'all') return true;
    return cat.id === activeTab;
  });

  return (
    <section id="program" className="py-24 border-y relative scroll-mt-20 transition-colors duration-300" style={{ backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }}>
      
      {/* Visual Ambient Background Detail */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: '#0ea5e9' }} />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none opacity-10" style={{ backgroundColor: '#38bdf8' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border" style={{ color: '#0ea5e9', backgroundColor: '#e0f2fe', borderColor: '#bae6fd' }}>
            Our Program & Expertise Custom Niches
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#0c1a2e' }}>
            High-Impact Services Engineered to Scale Your Business
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg" style={{ color: '#475569' }}>
            We operate across two dedicated niches: premium E-commerce platform scaling and enterprise Tech services, ensuring tailored growth pathways for corporate projects.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 backdrop-blur-md border rounded-2xl shadow-md" style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}>
            <button
              id="tab-all-services"
              onClick={() => setActiveTab('all')}
              className="px-5 py-2.5 rounded-xl font-sans text-sm font-semibold transition-all duration-300 cursor-pointer border"
              style={activeTab === 'all'
                ? { backgroundColor: 'rgba(255,255,255,0.9)', color: '#0ea5e9', boxShadow: '0 4px 6px -1px rgba(14,165,233,0.1)', borderColor: 'rgba(255,255,255,0.4)' }
                : { color: '#475569', borderColor: 'transparent', backgroundColor: 'transparent' }
              }
              onMouseEnter={e => { if (activeTab !== 'all') e.currentTarget.style.color = '#0c1a2e'; }}
              onMouseLeave={e => { if (activeTab !== 'all') e.currentTarget.style.color = '#475569'; }}
            >
              All Programs
            </button>
            <button
              id="tab-ecommerce-services"
              onClick={() => setActiveTab('ecommerce')}
              className="px-5 py-2.5 rounded-xl font-sans text-sm font-semibold transition-all duration-300 cursor-pointer border"
              style={activeTab === 'ecommerce'
                ? { backgroundColor: 'rgba(255,255,255,0.9)', color: '#0ea5e9', boxShadow: '0 4px 6px -1px rgba(14,165,233,0.1)', borderColor: 'rgba(255,255,255,0.4)' }
                : { color: '#475569', borderColor: 'transparent', backgroundColor: 'transparent' }
              }
              onMouseEnter={e => { if (activeTab !== 'ecommerce') e.currentTarget.style.color = '#0c1a2e'; }}
              onMouseLeave={e => { if (activeTab !== 'ecommerce') e.currentTarget.style.color = '#475569'; }}
            >
              E-Commerce Niches
            </button>
            <button
              id="tab-tech-services"
              onClick={() => setActiveTab('tech')}
              className="px-5 py-2.5 rounded-xl font-sans text-sm font-semibold transition-all duration-300 cursor-pointer border"
              style={activeTab === 'tech'
                ? { backgroundColor: 'rgba(255,255,255,0.9)', color: '#0ea5e9', boxShadow: '0 4px 6px -1px rgba(14,165,233,0.1)', borderColor: 'rgba(255,255,255,0.4)' }
                : { color: '#475569', borderColor: 'transparent', backgroundColor: 'transparent' }
              }
              onMouseEnter={e => { if (activeTab !== 'tech') e.currentTarget.style.color = '#0c1a2e'; }}
              onMouseLeave={e => { if (activeTab !== 'tech') e.currentTarget.style.color = '#475569'; }}
            >
              Tech Department
            </button>
          </div>
        </div>

        {/* Loop Categories and Services */}
        <div className="mt-16 space-y-20">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className="border-l-4 pl-4 py-1 text-left" style={{ borderColor: '#0ea5e9' }}>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold" style={{ color: '#0c1a2e' }}>
                    {category.name}
                  </h3>
                  <p className="mt-2 font-sans text-sm sm:text-base max-w-4xl leading-relaxed" style={{ color: '#94a3b8' }}>
                    {category.description}
                  </p>
                </div>

                {/* Grid of Services (Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, index) => {
                    // Check if it's dynamic highlights
                    const isEcom = category.id === 'ecommerce';
                    const iconColorStyle = isEcom
                      ? { color: '#ea580c', backgroundColor: '#fff7ed', borderColor: '#fed7aa' }
                      : { color: '#0ea5e9', backgroundColor: '#e0f2fe', borderColor: '#bae6fd' };

                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="group flex flex-col justify-between p-6 backdrop-blur-md border rounded-3xl transition-all text-left"
                        style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderColor: '#bae6fd' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#7dd3fc'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(14,165,233,0.08)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#bae6fd'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.boxShadow = 'none'; }}
                      >
                        {/* Upper Segment */}
                        <div>
                          <div className="w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 transition-transform group-hover:scale-105" style={iconColorStyle}>
                            {renderServiceIcon(service.icon)}
                          </div>
                          
                          <h4 className="font-sans font-bold text-lg transition-colors" style={{ color: '#0c1a2e' }}>
                            {service.title}
                          </h4>
                          
                          <p className="mt-3 font-sans text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                            {service.description}
                          </p>
                        </div>

                        {/* Lower Active Action Trigger */}
                        <div className="mt-8 pt-4 border-t flex items-center justify-between gap-2.5" style={{ borderColor: '#bae6fd' }}>
                          <button
                            id={`view-details-btn-${service.id}`}
                            onClick={() => onViewServiceDetail(service.id)}
                            className="inline-flex items-center gap-1 px-1.5 py-2.5 rounded-xl font-sans text-xs font-bold cursor-pointer transition-all border"
                            style={{ backgroundColor: '#e0f2fe', color: '#0ea5e9', borderColor: '#bae6fd' }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#bae6fd'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#e0f2fe'}
                          >
                            View Blueprint
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                          
                          <button
                            id={`inquire-btn-${service.id}`}
                            onClick={() => onSelectServiceAndInquire(service.title)}
                            className="flex items-center gap-1 font-sans text-xs font-bold cursor-pointer hover:underline transition-all"
                            style={{ color: '#0c1a2e' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#0ea5e9'}
                            onMouseLeave={e => e.currentTarget.style.color = '#0c1a2e'}
                          >
                            Quick Inquire
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic call to action at service foot */}
        <div className="mt-20 p-8 rounded-3xl backdrop-blur-md border flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}>
          <div className="space-y-1">
            <h4 className="font-sans font-bold text-lg" style={{ color: '#0c1a2e' }}>Not sure which program matches your requirements?</h4>
            <p className="font-sans text-sm" style={{ color: '#475569' }}>Give us brief details of your parameters, and we will advise the optimal layout blueprint.</p>
          </div>
          <button
            id="advisor-niche-cta"
            onClick={() => onSelectServiceAndInquire('General Consultation / Dynamic Audit')}
            className="px-6 py-3 rounded-xl text-white font-sans text-sm font-semibold transition-all select-none cursor-pointer"
            style={{ backgroundColor: '#0c1a2e' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0c1a2e'}
          >
            Schedule Assessment
          </button>
        </div>

      </div>
    </section>
  );
}