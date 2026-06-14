import { useState } from 'react';
import { Shield, Sparkles, Target, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { companyStats } from '../data';

export default function About() {
  const [selectedPipelineStep, setSelectedPipelineStep] = useState(0);

  const pipelineSteps = [
    {
      step: '01',
      title: 'Structural Planning & intake',
      description: 'We audit active channels, evaluate your codebase or database requirements, and draft custom proposal parameters tailored to your corporate goals.',
      meta: '2-4 Business Days'
    },
    {
      step: '02',
      title: 'Interactive Design Blueprinting',
      description: 'Our UI/UX creatives map out full-fidelity Figma layout systems, interactive components, responsive frameworks, and asset templates.',
      meta: 'Done in Figma'
    },
    {
      step: '03',
      title: 'Development & Type-Safe Coding',
      description: 'Our software specialists write semantic, highly legible TypeScript code. We configure clean state management and modular page assets.',
      meta: 'GitHub & CI/CD Tracking'
    },
    {
      step: '04',
      title: 'AWS Cloud Integration & Setup',
      description: 'We deploy web architectures on serverless infrastructure, set up auto-scaling policies, and structure secure cloud data databases.',
      meta: 'AWS Enterprise Support'
    },
    {
      step: '05',
      title: 'Performance Launch & ROAS Optimization',
      description: 'We activate conversion trackers, finalize marketplace PPC bidding formulas, audit page weights for <1.5s load speeds, and hand off keys.',
      meta: 'On-Go Optimization Support'
    }
  ];

  return (
    <section id="about" className="py-24 relative scroll-mt-20 overflow-hidden" style={{ backgroundColor: '#f0f9ff' }}>

      <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#bae6fd' }} />
      <div className="absolute left-1/4 bottom-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: '#0ea5e9' }} />
      <div className="absolute right-1/4 top-0 w-60 h-60 rounded-full filter blur-3xl pointer-events-none opacity-10" style={{ backgroundColor: '#38bdf8' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Text Block */}
          <div className="lg:col-span-12 xl:col-span-5 text-left space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full inline-block" style={{ color: '#0ea5e9', backgroundColor: '#e0f2fe' }}>
              Corporate Overview & Vision
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15]" style={{ color: '#0c1a2e' }}>
              Double the Technical Focus. Double the Corporate Velocity.
            </h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#475569' }}>
              Doctor Commerce was founded to resolve a critical developmental bottleneck: companies having to hire separate agencies for e-commerce management and engineering solutions.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#475569' }}>
              We provide unmatched, deep dual-niche expertise. By housing world-class software developers and elite retail channel store operators under one banner, we integrate your business assets, web databases, and product distributions seamlessly.
            </p>

            {/* Trait Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 backdrop-blur-md rounded-2xl space-y-2 text-left shadow-sm border" style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#bae6fd' }}>
                <Shield className="w-5 h-5" style={{ color: '#0ea5e9' }} />
                <h4 className="font-sans font-bold text-sm" style={{ color: '#0c1a2e' }}>Compliance & Security</h4>
                <p className="font-sans text-xs" style={{ color: '#64748b' }}>Every applet build and database connection is constructed according to SOC2 and GDPR standard metrics.</p>
              </div>
              <div className="p-5 backdrop-blur-md rounded-2xl space-y-2 text-left shadow-sm border" style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#bae6fd' }}>
                <Target className="w-5 h-5" style={{ color: '#0ea5e9' }} />
                <h4 className="font-sans font-bold text-sm" style={{ color: '#0c1a2e' }}>ROAS & Metric Focus</h4>
                <p className="font-sans text-xs" style={{ color: '#64748b' }}>Whether PPC bidding or checkout loops, we measure every engineering Sprint by concrete revenue outputs.</p>
              </div>
            </div>
          </div>

          {/* Right Statistics & Roadmap Block */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-12 w-full">

            {/* Stats Band Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {companyStats.map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl backdrop-blur-md text-left space-y-2 transition-all shadow-sm border" style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#bae6fd' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#7dd3fc'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.95)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#bae6fd'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)'; }}>
                  <span className="block font-sans font-extrabold text-2xl sm:text-3xl tracking-tight" style={{ color: '#0ea5e9' }}>
                    {stat.value}
                  </span>
                  <span className="block font-sans font-bold text-xs" style={{ color: '#0c1a2e' }}>
                    {stat.label}
                  </span>
                  <p className="font-sans text-[10px] leading-normal" style={{ color: '#64748b' }}>
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Flow Roadmap */}
            <div className="backdrop-blur-xl rounded-3xl p-6 sm:p-8 space-y-6 text-left shadow-xl border" style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd', boxShadow: '0 20px 40px rgba(14,165,233,0.08)' }}>
              <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: '#bae6fd' }}>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase font-bold" style={{ color: '#0ea5e9' }}>Client Pipeline</span>
                  <h3 className="font-sans font-bold text-lg" style={{ color: '#0c1a2e' }}>How We Execute Your Project</h3>
                </div>
                <span className="font-sans text-xs hidden sm:inline" style={{ color: '#94a3b8' }}>Click steps to preview workflow tasks</span>
              </div>

              {/* Step Tab selectors */}
              <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none font-mono">
                {pipelineSteps.map((step, idx) => (
                  <button
                    key={idx}
                    id={`pipeline-step-tab-${idx}`}
                    onClick={() => setSelectedPipelineStep(idx)}
                    className="flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer"
                    style={selectedPipelineStep === idx
                      ? { backgroundColor: '#0ea5e9', color: '#ffffff', borderColor: '#0ea5e9', boxShadow: '0 4px 14px rgba(14,165,233,0.3)' }
                      : { backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#bae6fd', color: '#475569' }
                    }
                    onMouseEnter={e => { if (selectedPipelineStep !== idx) e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
                    onMouseLeave={e => { if (selectedPipelineStep !== idx) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)'; }}
                  >
                    {step.step} • {step.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Step Description */}
              <div className="backdrop-blur-md rounded-2xl p-5 min-h-40 flex flex-col justify-between border" style={{ backgroundColor: 'rgba(240,249,255,0.8)', borderColor: '#bae6fd' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPipelineStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="font-sans font-extrabold text-sm uppercase" style={{ color: '#0ea5e9' }}>
                          Step {pipelineSteps[selectedPipelineStep].step}
                        </span>
                        <h4 className="font-sans font-bold text-base" style={{ color: '#0c1a2e' }}>
                          {pipelineSteps[selectedPipelineStep].title}
                        </h4>
                      </div>
                      <span className="font-mono text-[10px] font-bold px-2 py-1 rounded-md border" style={{ color: '#64748b', borderColor: '#bae6fd', backgroundColor: '#ffffff' }}>
                        {pipelineSteps[selectedPipelineStep].meta}
                      </span>
                    </div>

                    <p className="font-sans text-sm leading-relaxed" style={{ color: '#475569' }}>
                      {pipelineSteps[selectedPipelineStep].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="border-t mt-4 pt-3 flex items-center gap-1.5 text-xs" style={{ borderColor: '#bae6fd', color: '#64748b' }}>
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#0ea5e9' }} />
                  <span>Fully collaborative process with daily metrics logs</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}