import { ArrowRight, Code, ShoppingBag, Terminal, Sparkles, Phone, Mail, Kanban, Award, Shield, Target, MessageSquareQuote, BadgeDollarSign, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { servicesCategories, portfolioProjects, testimonials, companyStats } from '../data';

interface HomeTeasersProps {
  onNavigate: (sectionId: string) => void;
  onViewServiceDetail: (serviceId: string) => void;
}

export default function HomeTeasers({ onNavigate, onViewServiceDetail }: HomeTeasersProps) {
  // Select top-tier featured stories for the teasers
  const featuredProject = portfolioProjects[0]; // Aura Cosmetics
  const featuredTestimonial = testimonials[2]; // Elena Rostova, customized highlight

  return (
    <div className="w-full pb-24 space-y-24" style={{ backgroundColor: '#f0f9ff' }}>

      {/* 1. Services & Program Teaser Segment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="backdrop-blur-xl border rounded-[40px] p-8 sm:p-12 shadow-2xl relative overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}>
          {/* Neon background light spots */}
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none opacity-30" style={{ backgroundColor: '#38bdf8' }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left side summary block */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider font-semibold border" style={{ color: '#0ea5e9', backgroundColor: '#e0f2fe', borderColor: '#bae6fd' }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: '#0ea5e9' }} />
                Specialties & Capabilities
              </span>
              <h3 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight" style={{ color: '#0c1a2e' }}>
                Our Program & Dual-Niche Focus
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#475569' }}>
                Doctor Commerce bridges the gap between high-converting global retail marketplace syndications and custom-designed React mobile/web code infrastructure. Explore our native specialties:
              </p>

              <div className="pt-2 text-left">
                <button
                  id="teaser-goto-services"
                  onClick={() => onNavigate('program')}
                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl font-sans text-sm font-bold transition-all cursor-pointer shadow-lg group text-white"
                  style={{ backgroundColor: '#0ea5e9' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0284c7'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
                >
                  Explore Complete Services
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right side bento preview cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                id="teaser-goto-amazon-blueprint"
                onClick={() => onViewServiceDetail('amazon')}
                className="group p-6 rounded-3xl text-left space-y-4 shadow-sm cursor-pointer transition-all border focus:outline-hidden focus:ring-2"
                style={{ backgroundColor: '#ffffff', borderColor: '#bae6fd' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#7dd3fc'; e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#bae6fd'; e.currentTarget.style.backgroundColor = '#ffffff'; }}
              >
                <div className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-105" style={{ backgroundColor: '#e0f2fe', borderColor: '#bae6fd', color: '#0ea5e9' }}>
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base flex items-center gap-1 transition-colors" style={{ color: '#0c1a2e' }}>
                    E-Commerce Niche Scale
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" style={{ color: '#0ea5e9' }} />
                  </h4>
                  <p className="mt-2 font-sans text-xs leading-relaxed" style={{ color: '#94a3b8' }}>
                    Advanced multi-channel storefront operations across Amazon FBA, Walmart Merchant, and headless custom Shopify developments.
                  </p>
                </div>
              </button>

              <button
                id="teaser-goto-webdev-blueprint"
                onClick={() => onViewServiceDetail('web-dev')}
                className="group p-6 rounded-3xl text-left space-y-4 shadow-sm cursor-pointer transition-all border focus:outline-hidden focus:ring-2"
                style={{ backgroundColor: '#ffffff', borderColor: '#bae6fd' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#7dd3fc'; e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#bae6fd'; e.currentTarget.style.backgroundColor = '#ffffff'; }}
              >
                <div className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-105" style={{ backgroundColor: '#e0f2fe', borderColor: '#bae6fd', color: '#0ea5e9' }}>
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base flex items-center gap-1 transition-colors" style={{ color: '#0c1a2e' }}>
                    Software & Core Tech
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" style={{ color: '#0ea5e9' }} />
                  </h4>
                  <p className="mt-2 font-sans text-xs leading-relaxed" style={{ color: '#94a3b8' }}>
                    Native React & Next.js applications, fully type-safe server nodes, AWS cloud orchestration, and optimized UX journey maps.
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Flagship Portfolio Showcase Teaser Segment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest font-bold block" style={{ color: '#0ea5e9' }}>
              Case Deliverables Preview
            </span>
            <h3 className="font-sans text-3xl font-extrabold tracking-tight" style={{ color: '#0c1a2e' }}>
              Flagship Client Studies
            </h3>
          </div>
          <button
            id="teaser-goto-portfolio"
            onClick={() => onNavigate('portfolio')}
            className="flex-none font-sans text-sm font-bold hover:underline flex items-center gap-1 cursor-pointer"
            style={{ color: '#0ea5e9' }}
            onMouseEnter={e => e.currentTarget.style.color = '#0284c7'}
            onMouseLeave={e => e.currentTarget.style.color = '#0ea5e9'}
          >
            View Entire Case Gallery
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Flagship spotlight display layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Flagship spotlight primary card */}
          <div className="lg:col-span-8 rounded-4xl overflow-hidden shadow-lg flex flex-col md:flex-row text-left border" style={{ backgroundColor: '#ffffff', borderColor: '#bae6fd' }}>
            <div className="md:w-1/2 relative aspect-video md:aspect-auto" style={{ backgroundColor: '#e0f2fe' }}>
              {/* Highlight image */}
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-white font-mono text-[10px] uppercase font-bold rounded-lg tracking-widest" style={{ backgroundColor: 'rgba(12,26,46,0.9)' }}>
                  E-Commerce Scale
                </span>
              </div>
            </div>

            <div className="md:w-1/2 p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold block" style={{ color: '#0ea5e9' }}>
                  {featuredProject.client}
                </span>
                <h4 className="font-sans font-bold text-xl" style={{ color: '#0c1a2e' }}>
                  {featuredProject.title}
                </h4>
                <p className="font-sans text-xs leading-relaxed" style={{ color: '#94a3b8' }}>
                  We designed and launched a lightning-fast custom storefront interface matching global security guidelines, leading to a major boost in core operational metrics.
                </p>
              </div>

              {/* Spotlight metrics grid */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t" style={{ borderColor: '#bae6fd' }}>
                {(featuredProject.stats || []).map((st, i) => (
                  <div key={i} className="text-left">
                    <span className="block font-sans font-extrabold text-lg sm:text-xl" style={{ color: '#0ea5e9' }}>
                      {st.value}
                    </span>
                    <span className="block font-sans text-[9px] uppercase tracking-wider font-bold" style={{ color: '#94a3b8' }}>
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side card - Next level tech study */}
          <div className="lg:col-span-4 text-white rounded-4xl p-8 text-left flex flex-col justify-between shadow-lg relative overflow-hidden" style={{ backgroundColor: '#0c1a2e' }}>
            <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full filter blur-xl pointer-events-none opacity-20" style={{ backgroundColor: '#0ea5e9' }} />

            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1e3a5f', color: '#7dd3fc' }}>
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest block font-bold" style={{ color: '#7dd3fc' }}>PulseFit Global & VeloBi</span>
              <h4 className="font-sans font-bold text-lg text-white">Interactive SaaS & Mobile Tech Hubs</h4>
              <p className="font-sans text-xs leading-relaxed" style={{ color: '#bae6fd' }}>
                Unlock robust, beautifully-engineered platforms. Our tech studies include enterprise business intelligence tools processing billions of data inputs.
              </p>
            </div>

            <button
              id="teaser-read-tech-studies"
              onClick={() => onNavigate('portfolio')}
              className="mt-8 px-5 py-3 rounded-xl text-white font-sans text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 self-start"
              style={{ backgroundColor: '#0ea5e9' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0284c7'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
            >
              Browse Tech Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. About Company Blueprint Segment Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] p-8 sm:p-12 text-white text-left relative overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(to bottom right, #0c1a2e, #1e3a5f, #0c1a2e)' }}>
          <div className="absolute -left-12 -bottom-12 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-10" style={{ backgroundColor: '#38bdf8' }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider font-semibold" style={{ backgroundColor: '#1e3a5f', color: '#7dd3fc' }}>
                <Award className="w-3.5 h-3.5 animate-pulse" style={{ color: '#38bdf8' }} />
                Doctor Commerce Credentials
              </span>
              <h3 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Engineering Integrity Built On Real Metrics
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#bae6fd' }}>
                Whether PPC bidding, checkout optimization or AWS cloud scale integration, we measure engineering sprints. Doctor Commerce guarantees SOC2 standards alignment and GDPR parameters across every single project delivery.
              </p>

              {/* Stats counts banner inline */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border-l-2 pl-4" style={{ borderColor: '#0ea5e9' }}>
                  <span className="block font-sans font-extrabold text-2xl text-white">250+</span>
                  <span className="block font-sans text-[10px] font-bold uppercase" style={{ color: '#7dd3fc' }}>Projects Complete</span>
                </div>
                <div className="border-l-2 pl-4" style={{ borderColor: '#0ea5e9' }}>
                  <span className="block font-sans font-extrabold text-2xl text-white">99.6%</span>
                  <span className="block font-sans text-[10px] font-bold uppercase" style={{ color: '#7dd3fc' }}>Client Loyalty Rating</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl border space-y-2 text-left" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <Shield className="w-5 h-5" style={{ color: '#38bdf8' }} />
                <h4 className="font-sans font-bold text-sm text-white">SOC2 & GDPR Compliance Standard</h4>
                <p className="font-sans text-xs leading-relaxed" style={{ color: '#bae6fd' }}>
                  Every pipeline is isolated. We guarantee zero database leak vectors for contact details and commercial inventory tokens.
                </p>
              </div>

              <div className="p-6 rounded-2xl border space-y-3 text-left" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <p className="font-sans text-xs italic" style={{ color: '#e0f2fe' }}>
                  "Doctor Commerce bridged our retail sync with our customized native interface flawlessly under tight schedules."
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-sans font-bold text-xs text-white">Elena Rostova</span>
                  <span className="font-sans text-[10px]" style={{ color: '#7dd3fc' }}>VP of Experience, VeloBi</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="teaser-goto-about"
                  onClick={() => onNavigate('about')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl font-sans text-sm font-bold transition-all cursor-pointer shadow-md"
                  style={{ backgroundColor: '#ffffff', color: '#0c1a2e' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0f2fe'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  Discover Our Strategic Blueprint
                  <ArrowRight className="w-4 h-4" style={{ color: '#0ea5e9' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Client Testimonials Marquee Teaser Segment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full inline-block" style={{ color: '#0ea5e9', backgroundColor: '#e0f2fe' }}>
            Client Loyalty Proof
          </span>
          <h3 className="mt-4 font-sans text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: '#0c1a2e' }}>
            Loved By Ambitious Founders
          </h3>
          <p className="mt-2 text-xs" style={{ color: '#94a3b8' }}>
            Real feedback collected from our integrated client databases and active platform workflows.
          </p>
        </div>

        {/* Highlight quote showcase */}
        <div className="rounded-4xl p-8 text-left relative overflow-hidden shadow-md max-w-4xl mx-auto border" style={{ backgroundColor: '#ffffff', borderColor: '#bae6fd' }}>
          <div className="absolute top-6 right-6" style={{ color: '#e0f2fe' }}>
            <MessageSquareQuote className="w-24 h-24" />
          </div>

          <div className="space-y-6 relative z-10 max-w-2xl">
            <p className="font-sans text-base sm:text-lg font-medium leading-relaxed italic" style={{ color: '#0c1a2e' }}>
              "{featuredTestimonial.content}"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={featuredTestimonial.avatar}
                alt={featuredTestimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2"
                style={{ borderColor: '#bae6fd' }}
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="block font-sans font-bold text-sm" style={{ color: '#0c1a2e' }}>
                  {featuredTestimonial.name}
                </span>
                <span className="block font-sans text-xs" style={{ color: '#94a3b8' }}>
                  {featuredTestimonial.role} • <span className="font-semibold" style={{ color: '#0ea5e9' }}>{featuredTestimonial.company}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t flex justify-center sm:justify-end" style={{ borderColor: '#bae6fd' }}>
            <button
              id="teaser-goto-testimonials"
              onClick={() => onNavigate('testimonials')}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl border font-sans text-xs font-bold transition-all cursor-pointer"
              style={{ borderColor: '#bae6fd', color: '#475569' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0f2fe'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Read All Platform Reviews
              <ArrowRight className="w-4 h-4" style={{ color: '#0ea5e9' }} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Scope Blueprint & Intake Teaser Segment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white rounded-[40px] p-8 sm:p-12 text-left relative overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(to bottom right, #0284c7, #0c1a2e, #1e3a5f)' }}>
          <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: '#38bdf8' }} />

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border font-mono text-xs uppercase tracking-wider font-semibold" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#7dd3fc' }}>
              <Kanban className="w-3.5 h-3.5" />
              Strategic BlueprintING
            </span>
            <h3 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Design Your Custom Strategic Blueprint?
            </h3>
            <p className="font-sans text-sm sm:text-base leading-relaxed font-normal" style={{ color: '#bae6fd' }}>
              We developed an interactive scope and blueprint planning matrix directly inside our inquiry portal. Define your team specs, select your core features, estimate deliverable timeframes in real time, and instantly submit them securely.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-semibold" style={{ color: '#bae6fd' }}>
              <div className="p-4 rounded-xl border text-left" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <span className="block font-bold text-white mb-1">Standard Scale</span>
                <span>Focused MVP (2-3 Sprints)</span>
              </div>
              <div className="p-4 rounded-xl border text-left" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <span className="block font-bold text-white mb-1">Enterprise Scale</span>
                <span>Complex Integration (4-6 Sprints)</span>
              </div>
              <div className="p-4 rounded-xl border text-left" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <span className="block font-bold text-white mb-1">Elite Global Niche</span>
                <span>Custom Architecture (8+ Sprints)</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                id="teaser-goto-contact"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-sans text-base font-bold transition-all cursor-pointer"
                style={{ backgroundColor: '#ffffff', color: '#0c1a2e' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#e0f2fe'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Access Strategic Scope Planner
                <ArrowRight className="w-5 h-5" style={{ color: '#0ea5e9' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}