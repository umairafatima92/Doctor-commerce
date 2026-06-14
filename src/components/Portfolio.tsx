import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ArrowUpRight, ShieldCheck, Zap, BarChart3, Minimize } from 'lucide-react';
import { portfolioProjects } from '../data';
import { Project } from '../types';

interface PortfolioProps {
  onInquireAboutProject: (projectTitle: string) => void;
}

export default function Portfolio({ onInquireAboutProject }: PortfolioProps) {
  const [filter, setFilter] = useState<'all' | 'ecommerce' | 'tech'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = portfolioProjects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="portfolio" className="py-24 relative scroll-mt-20" style={{ backgroundColor: '#f0f9ff' }}>

      {/* Decorative Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#bae6fd' }} />

      {/* Ambient color blobs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: '#0ea5e9' }} />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-10" style={{ backgroundColor: '#38bdf8' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full" style={{ color: '#0ea5e9', backgroundColor: '#e0f2fe' }}>
              Case Studies & Deliverables
            </span>
            <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#0c1a2e' }}>
              Selected Projects that Drive Commercial Success
            </h2>
            <p className="mt-4 font-sans text-base" style={{ color: '#475569' }}>
              Browse our portfolio of bespoke, high-performance executions spanning integrated marketplace logistics, serverless mobile builds, and responsive business platforms.
            </p>
          </div>

          {/* Filtering Toggles */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            <button
              id="filter-proj-all"
              onClick={() => setFilter('all')}
              className="px-4 py-2 rounded-xl font-sans text-sm font-semibold transition-all duration-200 cursor-pointer border"
              style={filter === 'all'
                ? { backgroundColor: '#0ea5e9', color: '#ffffff', borderColor: '#0ea5e9', boxShadow: '0 10px 15px -3px rgba(14,165,233,0.2)' }
                : { backgroundColor: '#ffffff', color: '#475569', borderColor: '#bae6fd' }
              }
              onMouseEnter={e => { if (filter !== 'all') e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
              onMouseLeave={e => { if (filter !== 'all') e.currentTarget.style.backgroundColor = '#ffffff'; }}
            >
              All Projects
            </button>
            <button
              id="filter-proj-ecommerce"
              onClick={() => setFilter('ecommerce')}
              className="px-4 py-2 rounded-xl font-sans text-sm font-semibold transition-all duration-200 cursor-pointer border"
              style={filter === 'ecommerce'
                ? { backgroundColor: '#0ea5e9', color: '#ffffff', borderColor: '#0ea5e9', boxShadow: '0 10px 15px -3px rgba(14,165,233,0.2)' }
                : { backgroundColor: '#ffffff', color: '#475569', borderColor: '#bae6fd' }
              }
              onMouseEnter={e => { if (filter !== 'ecommerce') e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
              onMouseLeave={e => { if (filter !== 'ecommerce') e.currentTarget.style.backgroundColor = '#ffffff'; }}
            >
              E-Commerce Stores
            </button>
            <button
              id="filter-proj-tech"
              onClick={() => setFilter('tech')}
              className="px-4 py-2 rounded-xl font-sans text-sm font-semibold transition-all duration-200 cursor-pointer border"
              style={filter === 'tech'
                ? { backgroundColor: '#0ea5e9', color: '#ffffff', borderColor: '#0ea5e9', boxShadow: '0 10px 15px -3px rgba(14,165,233,0.2)' }
                : { backgroundColor: '#ffffff', color: '#475569', borderColor: '#bae6fd' }
              }
              onMouseEnter={e => { if (filter !== 'tech') e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
              onMouseLeave={e => { if (filter !== 'tech') e.currentTarget.style.backgroundColor = '#ffffff'; }}
            >
              SaaS & Mobile Apps
            </button>
          </div>
        </div>

        {/* Portfolio Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col justify-between backdrop-blur-md border rounded-3xl overflow-hidden shadow-lg transition-all cursor-pointer text-left"
                style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#7dd3fc'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#bae6fd'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)'; }}
              >
                {/* Dynamic Image Container */}
                <div className="relative aspect-video w-full overflow-hidden" style={{ backgroundColor: '#e0f2fe' }}>
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Category Accent Tag */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-lg backdrop-blur-md shadow-xs font-mono text-[10px] tracking-wide uppercase font-semibold" style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#0c1a2e' }}>
                    {project.serviceType}
                  </span>
                </div>

                {/* Info and Statistics Wrapper */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="block font-mono text-[10px] uppercase font-bold tracking-widest mb-1" style={{ color: '#0ea5e9' }}>
                      {project.client}
                    </span>
                    <h3 className="font-sans font-bold text-lg transition-colors" style={{ color: '#0c1a2e' }}>
                      {project.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-sm line-clamp-2" style={{ color: '#94a3b8' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Mini Grid */}
                  {project.stats && (
                    <div className="mt-6 pt-4 border-t grid grid-cols-3 gap-1 divide-x" style={{ borderColor: '#bae6fd' }}>
                      {project.stats.map((st, i) => (
                        <div key={i} className="px-1 text-center" style={{ borderColor: '#e0f2fe' }}>
                          <span className="block font-sans font-extrabold text-sm" style={{ color: '#0ea5e9' }}>
                            {st.value}
                          </span>
                          <span className="block font-sans text-[9px] uppercase tracking-wider font-semibold mt-0.5" style={{ color: '#94a3b8' }}>
                            {st.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Read Case Study CTA button */}
                  <div className="mt-6 pt-4 border-t flex items-center justify-between" style={{ borderColor: '#bae6fd' }}>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-md font-mono text-[10px]" style={{ backgroundColor: '#e0f2fe', color: '#64748b' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="flex items-center gap-1 font-sans text-xs font-bold transition-colors" style={{ color: '#0c1a2e' }}>
                      View details
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Study Details Modal (Overlay) */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              {/* Dark Ambient Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 backdrop-blur-xs"
                style={{ backgroundColor: 'rgba(12,26,46,0.6)' }}
              />

              {/* Case Study Content Box */}
              <motion.div
                id="case-study-modal-box"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 150 }}
                className="relative backdrop-blur-xl border w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] text-left z-10"
                style={{ backgroundColor: 'rgba(255,255,255,0.75)', borderColor: '#bae6fd' }}
              >
                {/* Modal Navigation/Headline bar */}
                <div className="flex items-center justify-between p-6 border-b backdrop-blur-md" style={{ borderColor: '#bae6fd', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border font-mono text-[10px] uppercase font-semibold" style={{ backgroundColor: '#e0f2fe', borderColor: '#bae6fd', color: '#0ea5e9' }}>
                      Featured Corporate Case Study
                    </span>
                    <h4 className="font-sans font-bold text-lg" style={{ color: '#0c1a2e' }}>
                      {selectedProject.client}
                    </h4>
                  </div>
                  <button
                    id="close-case-study"
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl transition-colors"
                    style={{ color: '#94a3b8' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#0c1a2e'; e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <X id="modal-close-icon" className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal scroll contents */}
                <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">

                  {/* Hero Graphic inside Modal */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-inner" style={{ backgroundColor: '#e0f2fe' }}>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,26,46,0.2), transparent)' }} />
                  </div>

                  {/* Performance stats band */}
                  {selectedProject.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 text-white rounded-2xl" style={{ backgroundColor: '#0ea5e9' }}>
                      {selectedProject.stats.map((st, i) => (
                        <div key={i} className="text-center sm:text-left space-y-1">
                          <span className="block font-mono text-[11px] uppercase tracking-widest" style={{ color: '#e0f2fe' }}>
                            {st.label}
                          </span>
                          <span className="block font-sans font-extrabold text-2xl">
                            {st.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Core Content Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Primary Study Description Card */}
                    <div className="lg:col-span-8 space-y-6">
                      <div className="space-y-2">
                        <span className="font-sans font-bold text-lg block" style={{ color: '#0c1a2e' }}>Project Title</span>
                        <h3 className="font-sans font-bold text-2xl" style={{ color: '#0c1a2e' }}>{selectedProject.title}</h3>
                      </div>

                      <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed" style={{ color: '#475569' }}>
                        <div className="p-4 border-l-4 rounded-r-xl space-y-1" style={{ backgroundColor: '#e0f2fe', borderColor: '#16a34a' }}>
                          <span className="font-mono text-[11px] uppercase font-extrabold" style={{ color: '#16a34a' }}>The Challenge & Requirement</span>
                          <p className="text-sm" style={{ color: '#475569' }}>Create a secure, streamlined digital presence with elite optimization and robust conversion flows.</p>
                        </div>
                        <p>{selectedProject.longDescription}</p>
                      </div>
                    </div>

                    {/* Metadata Side Info list */}
                    <div className="lg:col-span-4 space-y-6 backdrop-blur-sm p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.4)', borderColor: '#bae6fd' }}>

                      {/* Specifications list */}
                      <div className="space-y-1">
                        <span className="block font-mono text-[11px] uppercase font-semibold" style={{ color: '#94a3b8' }}>Service Type</span>
                        <span className="block font-sans font-semibold text-sm" style={{ color: '#0c1a2e' }}>{selectedProject.serviceType}</span>
                      </div>

                      <div className="space-y-1 pt-4 border-t" style={{ borderColor: '#e0f2fe' }}>
                        <span className="block font-mono text-[11px] uppercase font-semibold" style={{ color: '#94a3b8' }}>Deployment & Stack</span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {selectedProject.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 rounded border font-mono text-xs" style={{ backgroundColor: '#ffffff', borderColor: '#bae6fd', color: '#475569' }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1 pt-4 border-t" style={{ borderColor: '#e0f2fe' }}>
                        <span className="block font-mono text-[11px] uppercase font-semibold" style={{ color: '#94a3b8' }}>Security Framework</span>
                        <span className="flex items-center gap-1.5 mt-1 font-sans text-xs font-semibold border px-2.5 py-1.5 rounded-lg max-w-max" style={{ color: '#16a34a', backgroundColor: '#dcfce7', borderColor: '#bbf7d0' }}>
                          <ShieldCheck className="w-3.5 h-3.5" />
                          SOC2 Protected
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Footer and call actions */}
                <div className="p-6 border-t backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: '#bae6fd', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                  <span className="font-sans text-xs" style={{ color: '#94a3b8' }}>Need a similar design structure for your brand?</span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      id="close-modal-footer"
                      onClick={() => setSelectedProject(null)}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border font-sans text-sm font-semibold cursor-pointer text-center"
                      style={{ borderColor: '#bae6fd', backgroundColor: '#ffffff', color: '#475569' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0f2fe'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                    >
                      Close Details
                    </button>
                    <button
                      id="inquire-this-modal-b"
                      onClick={() => {
                        onInquireAboutProject(`Project Case Area: ${selectedProject.title}`);
                        setSelectedProject(null);
                      }}
                      className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-white font-sans text-sm font-semibold cursor-pointer shadow-md inline-flex items-center justify-center gap-1"
                      style={{ backgroundColor: '#0ea5e9' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0284c7'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
                    >
                      Request Similar Build
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}