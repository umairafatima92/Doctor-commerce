import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, MapPin, Check, Zap, ArrowRight, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  preselectedService: string;
  onOpenWhatsApp?: () => void;
}

export default function Contact({ preselectedService, onOpenWhatsApp }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('ecommerce');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const [tier, setTier] = useState<'standard' | 'enterprise' | 'custom'>('standard');
  const [selectedSpec, setSelectedSpec] = useState<string[]>(['ui-ux', 'aws']);
  const [sprintEstimate, setSprintEstimate] = useState('2-3 Sprints');
  const [timeEstimate, setTimeEstimate] = useState('4-6 weeks');
  const [complexityLevel, setComplexityLevel] = useState('Focused MVP Delivery');

  const extraSpecs = [
    { id: 'ui-ux', label: 'Bespoke Figma UI/UX Design System', complexity: 'Core Creative Asset' },
    { id: 'payment', label: 'Stripe & Payment Integrations', complexity: 'Secure API Gateway' },
    { id: 'aws', label: 'Full AWS Devops & Cloud Architecture', complexity: 'Infrastructure Layer' },
    { id: 'seo', label: 'Advanced Listings Design & SEO Optimization', complexity: 'Market Reach & Visibility' },
    { id: 'database', label: 'Multi-Tenant Auth & Database Setup', complexity: 'Data Core Sync' },
  ];

  useEffect(() => {
    let duration = '4-6 weeks';
    let sprints = '2-3 Sprints';
    if (tier === 'standard') { sprints = '2-3 Sprints'; duration = '4-6 weeks'; }
    else if (tier === 'enterprise') { sprints = '4-6 Sprints'; duration = '8-12 weeks'; }
    else { sprints = '8+ Sprints'; duration = '16+ weeks'; }

    let complexity = 'Focused MVP Delivery';
    const numSelected = selectedSpec.length;
    if (tier === 'custom' || numSelected >= 4) complexity = 'High-Integrity Global Scale';
    else if (tier === 'enterprise' || numSelected >= 2) complexity = 'Advanced Strategic Architecture';
    else complexity = 'Focused MVP Delivery';

    setSprintEstimate(sprints);
    setTimeEstimate(duration);
    setComplexityLevel(complexity);
  }, [category, tier, selectedSpec]);

  useEffect(() => {
    if (preselectedService) {
      if (preselectedService.toLowerCase().includes('consult') || preselectedService.toLowerCase().includes('audit')) {
        setCategory('consultation');
      } else if (preselectedService.toLowerCase().includes('amazon') || preselectedService.toLowerCase().includes('shop') || preselectedService.toLowerCase().includes('walmart') || preselectedService.toLowerCase().includes('ebay')) {
        setCategory('ecommerce');
      } else {
        setCategory('tech');
      }
      setMessage(`Inquiry regarding specialize service: "${preselectedService}". Let's arrange a brief consultation to review milestones and scope.`);
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [preselectedService]);

  const toggleSpec = (id: string) => {
    if (selectedSpec.includes(id)) setSelectedSpec(selectedSpec.filter((it) => it !== id));
    else setSelectedSpec([...selectedSpec, id]);
  };

  const handleApplyEstimateToForm = () => {
    const specLabels = selectedSpec.map((id) => extraSpecs.find((sp) => sp.id === id)?.label).filter(Boolean).join(', ');
    const estimateText = `Selected Tier: ${tier.toUpperCase()} Level\nCategory: ${category.toUpperCase()}\nExtra specifications: [${specLabels || 'None selected'}]\nSystem generated baseline estimate: ${sprintEstimate} (${timeEstimate}) with ${complexityLevel} planning.\n\nHi Doctor Commerce Team, I configured this specific project profile using your interactive scope & blueprint planner. Let's touch base regarding our enterprise objectives.`;
    setMessage(estimateText);
    const contactFormNode = document.getElementById('contact-intake-form');
    if (contactFormNode) contactFormNode.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      setName(''); setEmail(''); setMessage(''); setSelectedSpec([]);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-20 overflow-hidden" style={{ backgroundColor: '#f0f9ff' }}>

      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: '#0ea5e9' }} />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-10" style={{ backgroundColor: '#38bdf8' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full" style={{ color: '#0ea5e9', backgroundColor: '#e0f2fe' }}>
            Intake Portal & Project Consultation
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#0c1a2e' }}>
            Configure Your Project Requirements
          </h2>
          <p className="mt-4 font-sans text-base" style={{ color: '#475569' }}>
            Customize your service tier, align spec modules in real time, and request a detailed strategic program roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">

          {/* Left Estimator Widget */}
          <div className="lg:col-span-12 xl:col-span-7 backdrop-blur-xl rounded-3xl p-6 sm:p-8 space-y-6 text-left shadow-lg border" style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}>

            <div className="flex items-center gap-2 border-b pb-4" style={{ borderColor: '#bae6fd' }}>
              <Sparkles className="w-5 h-5" style={{ color: '#0ea5e9' }} />
              <h3 className="font-sans font-bold text-lg" style={{ color: '#0c1a2e' }}>Interactive Project Scope & Blueprint Planner</h3>
            </div>

            {/* Service Department */}
            <div className="space-y-3">
              <span className="block font-sans text-xs font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>01. Service Department</span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'ecommerce', label: 'E-Commerce Scale' },
                  { id: 'tech', label: 'Tech Department' },
                  { id: 'consultation', label: 'General Consult' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className="p-3 rounded-xl border font-sans text-xs font-bold text-center transition-all cursor-pointer"
                    style={category === cat.id
                      ? { backgroundColor: '#0ea5e9', color: '#ffffff', borderColor: '#0ea5e9', boxShadow: '0 4px 14px rgba(14,165,233,0.3)' }
                      : { backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#bae6fd', color: '#475569' }
                    }
                    onMouseEnter={e => { if (category !== cat.id) e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
                    onMouseLeave={e => { if (category !== cat.id) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)'; }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tier Scope */}
            <div className="space-y-3">
              <span className="block font-sans text-xs font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>02. Operational Tier Scope</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Standard Startup', desc: 'Core deployment pathways & channels.' },
                  { id: 'enterprise', label: 'Enterprise High-Scale', desc: 'Robust integrations, auto-scaling & full SEO channels.' },
                  { id: 'custom', label: 'Elite Global', desc: 'Bespoke software suite, multi-user DB databases.' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTier(t.id as any)}
                    className="p-4 rounded-xl border text-left transition-all cursor-pointer"
                    style={tier === t.id
                      ? { backgroundColor: 'rgba(255,255,255,0.95)', borderColor: '#0ea5e9', boxShadow: '0 0 0 1px #0ea5e9' }
                      : { backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }
                    }
                    onMouseEnter={e => { if (tier !== t.id) e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
                    onMouseLeave={e => { if (tier !== t.id) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)'; }}
                  >
                    <span className="block font-sans font-bold text-xs" style={{ color: '#0c1a2e' }}>{t.label}</span>
                    <span className="block font-sans text-[11px] mt-1" style={{ color: '#94a3b8' }}>{t.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-3">
              <span className="block font-sans text-xs font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>03. Project Specifications & Integrations</span>
              <div className="flex flex-col gap-2">
                {extraSpecs.map((spec) => {
                  const hasSelected = selectedSpec.includes(spec.id);
                  return (
                    <button
                      key={spec.id}
                      onClick={() => toggleSpec(spec.id)}
                      className="p-3 rounded-xl border text-left flex items-center justify-between font-sans text-xs font-semibold transition-all cursor-pointer"
                      style={hasSelected
                        ? { backgroundColor: '#e0f2fe', borderColor: '#7dd3fc', color: '#0c1a2e' }
                        : { backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#bae6fd', color: '#475569' }
                      }
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-sm border flex items-center justify-center" style={hasSelected ? { backgroundColor: '#0ea5e9', borderColor: '#0ea5e9', color: '#fff' } : { borderColor: '#94a3b8' }}>
                          {hasSelected && <Check className="w-3 h-3" />}
                        </div>
                        <span>{spec.label}</span>
                      </div>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md" style={{ color: '#0ea5e9', backgroundColor: '#e0f2fe' }}>{spec.complexity}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Output Panel */}
            <div className="p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border" style={{ backgroundColor: '#0c1a2e', borderColor: '#1e3a5f' }}>
              <div className="space-y-1 text-center sm:text-left">
                <span className="block font-mono text-[10px] uppercase font-bold" style={{ color: '#38bdf8' }}>Configured Workflow Matrix</span>
                <span className="block font-sans font-extrabold text-2xl tracking-tight text-white">
                  {sprintEstimate} <span className="text-xs font-normal" style={{ color: '#7dd3fc' }}>({timeEstimate})</span>
                </span>
                <span className="block font-sans text-xs font-semibold mt-1" style={{ color: '#bae6fd' }}>
                  Blueprint Type: <span className="font-bold" style={{ color: '#38bdf8' }}>{complexityLevel}</span>
                </span>
              </div>
              <button
                onClick={handleApplyEstimateToForm}
                className="px-5 py-3 rounded-xl font-sans text-sm font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-md border"
                style={{ backgroundColor: '#ffffff', color: '#0c1a2e', borderColor: '#bae6fd' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0f2fe'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                Apply Profile to Message Form
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Contact Form */}
          <div id="contact-intake-form" className="lg:col-span-12 xl:col-span-5 space-y-8 w-full">

            <div className="backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl text-left space-y-6 relative border" style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}>
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase font-bold block" style={{ color: '#0ea5e9' }}>Secure Client Intake</span>
                <h3 className="font-sans font-bold text-xl" style={{ color: '#0c1a2e' }}>Intake Submission Form</h3>
              </div>

              <AnimatePresence mode="wait">
                {isDone ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-75 border"
                    style={{ backgroundColor: '#e0f2fe', borderColor: '#bae6fd' }}
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: '#bae6fd', color: '#0ea5e9' }}>
                      <Check className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-sans font-extrabold text-lg block" style={{ color: '#0c1a2e' }}>Intake Received Successfully!</span>
                      <p className="font-sans text-sm" style={{ color: '#475569' }}>
                        Our executive project manager has compiled your parameters and will respond within 4 business hours to lock in a private video review slot.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl w-full text-left space-y-1 font-mono text-[10px] border" style={{ backgroundColor: '#ffffff', borderColor: '#bae6fd', color: '#64748b' }}>
                      <span className="block font-sans font-bold text-[11px] uppercase" style={{ color: '#0c1a2e' }}>Interactive Receipt:</span>
                      <span>• Token: DRCOM-INTAKE-{Math.floor(Math.random() * 900000 + 100000)}</span>
                      <br />
                      <span>• SLA Response Priority: HIGH</span>
                    </div>
                    <button
                      onClick={() => setIsDone(false)}
                      className="px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all w-full text-center text-white"
                      style={{ backgroundColor: '#0ea5e9' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0284c7'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
                    >
                      Fill New Intake Form
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold font-mono uppercase tracking-wider" style={{ color: '#64748b' }}>Full Name *</label>
                      <input
                        type="text" required value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="Abdul Saboor"
                        className="w-full px-4 py-2.5 rounded-xl font-sans text-sm outline-none border"
                        style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                        onFocus={e => e.currentTarget.style.borderColor = '#0ea5e9'}
                        onBlur={e => e.currentTarget.style.borderColor = '#bae6fd'}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold font-mono uppercase tracking-wider" style={{ color: '#64748b' }}>Corporate Business Email *</label>
                      <input
                        type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="abdulsaboor1956@gmail.com"
                        className="w-full px-4 py-2.5 rounded-xl font-sans text-sm outline-none border"
                        style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                        onFocus={e => e.currentTarget.style.borderColor = '#0ea5e9'}
                        onBlur={e => e.currentTarget.style.borderColor = '#bae6fd'}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold font-mono uppercase tracking-wider" style={{ color: '#64748b' }}>Inquiry Category</label>
                      <select
                        value={category} onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl font-sans text-sm outline-none border"
                        style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                      >
                        <option value="ecommerce">E-Commerce Niche Projects</option>
                        <option value="tech">Tech Department Software Builds</option>
                        <option value="consultation">General Corporate Intake / Audit Slot</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <label className="block text-[11px] font-bold font-mono uppercase tracking-wider" style={{ color: '#64748b' }}>Project Scope Details</label>
                        <span className="font-sans text-[10px]" style={{ color: '#94a3b8' }}>Apply estimator values above</span>
                      </div>
                      <textarea
                        rows={5} required value={message} onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly detail your channel platform parameters..."
                        className="w-full px-4 py-2.5 rounded-xl font-sans text-sm outline-none border text-left"
                        style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                        onFocus={e => e.currentTarget.style.borderColor = '#0ea5e9'}
                        onBlur={e => e.currentTarget.style.borderColor = '#bae6fd'}
                      />
                    </div>

                    <div className="space-y-4 pt-2">
                      <button
                        type="submit" disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-1.5 py-4 rounded-xl font-sans text-sm font-bold transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-md text-white"
                        style={{ backgroundColor: '#0ea5e9' }}
                        onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.backgroundColor = '#0284c7'; }}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-1"></span>
                            Compiling Project Parameters...
                          </>
                        ) : (
                          <>
                            Submit Secured Intake Request
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <div className="flex items-center gap-1.5 justify-center text-[10px] font-mono" style={{ color: '#94a3b8' }}>
                        <AlertCircle className="w-3.5 h-3.5" style={{ color: '#bae6fd' }} />
                        <span>SSL Secure Channel • SOC2 Standard Governance</span>
                      </div>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <a href="mailto:hello@doctorcommerce.co"
                className="p-5 rounded-2xl backdrop-blur-md flex items-center gap-3.5 text-left shadow-sm transition-all cursor-pointer group border"
                style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)'}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all shrink-0 border" style={{ backgroundColor: '#e0f2fe', borderColor: '#bae6fd', color: '#0ea5e9' }}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-[10px] uppercase font-semibold tracking-wider" style={{ color: '#94a3b8' }}>Email us</span>
                  <span className="block font-sans font-bold text-xs select-all" style={{ color: '#0c1a2e' }}>hello@doctorcommerce.co</span>
                </div>
              </a>

              <a href="https://wa.me/923194924056?text=Hi%20Doctor%20Commerce!%20We'd%20love%20to%20discuss%20our%20project%20requirements%20directly."
                target="_blank" rel="noopener noreferrer"
                className="p-5 rounded-2xl backdrop-blur-md flex items-center gap-3.5 text-left shadow-sm transition-all cursor-pointer group border"
                style={{ backgroundColor: 'rgba(240,253,244,0.8)', borderColor: '#bbf7d0' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(240,253,244,0.8)'}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all shrink-0 border" style={{ backgroundColor: '#dcfce7', borderColor: '#bbf7d0', color: '#16a34a' }}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                  </svg>
                </div>
                <div>
                  <span className="block font-sans text-[10px] uppercase font-bold tracking-wider" style={{ color: '#16a34a' }}>WhatsApp chat</span>
                  <span className="block font-sans font-bold text-xs select-all" style={{ color: '#0c1a2e' }}>0319 4924056</span>
                </div>
              </a>

              <a href="tel:+18005553726"
                className="p-5 rounded-2xl backdrop-blur-md flex items-center gap-3.5 text-left shadow-sm transition-all cursor-pointer group border"
                style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)'}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all shrink-0 border" style={{ backgroundColor: '#e0f2fe', borderColor: '#bae6fd', color: '#0ea5e9' }}>
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-[10px] uppercase font-semibold tracking-wider" style={{ color: '#94a3b8' }}>Global Sales</span>
                  <span className="block font-sans font-bold text-xs" style={{ color: '#0c1a2e' }}>+1 (800) 555-DR-COMMERCE</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}