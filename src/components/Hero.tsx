import { ArrowUpRight, Code, ShoppingBag, CheckCircle, Flame, Star } from 'lucide-react';
import { motion, Variants } from 'motion/react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // We reference our real generated hero background image:
  const heroImgSrc = '/src/assets/images/hero_bg_1779270511792.png';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 100 }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-32 pb-20 flex items-center overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: '#f0f9ff' }}
    >
      {/* Background Graphic Pattern Layer */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
        <img
          src={heroImgSrc}
          alt="Abstract Digital Streamline Graphics background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(240,249,255,0.95), transparent, rgba(240,249,255,0.95))' }} />
      </div>

      {/* Ambient color blobs to match Contact section */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: '#0ea5e9' }} />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-10" style={{ backgroundColor: '#38bdf8' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content Block */}
          <motion.div
            id="hero-text-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Tagline / Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 self-start">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider font-semibold border"
                style={{ color: '#0ea5e9', backgroundColor: '#e0f2fe', borderColor: '#bae6fd' }}
              >
                <Flame className="w-3.5 h-3.5 animate-pulse" style={{ color: '#0ea5e9' }} />
                Double-Niche Powerhouse
              </span>
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold border"
                style={{ color: '#16a34a', backgroundColor: '#dcfce7', borderColor: '#bbf7d0' }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-ping inline-block mr-1" style={{ backgroundColor: '#16a34a' }}></span>
                Q2 Open Slots
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
              style={{ color: '#0c1a2e' }}
            >
              We Architect{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r" style={{ backgroundImage: 'linear-gradient(to right, #0284c7, #0ea5e9, #38bdf8)' }}>
                E-Commerce Scale
              </span>{' '}
              & Custom{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r" style={{ backgroundImage: 'linear-gradient(to right, #0c1a2e, #0ea5e9)' }}>
                Tech Solutions
              </span>
            </motion.h1>

            {/* Sub-headline description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 font-sans text-base sm:text-lg max-w-2xl leading-relaxed"
              style={{ color: '#475569' }}
            >
              Doctor Commerce is a premier full-service digital portfolio partner and design agency.
              We specialize in delivering high-converting operations across leading retail channels and building beautifully-engineered mobile apps, cloud systems, and native user ecosystems.
            </motion.p>

            {/* Highlighted core niches points list */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl text-sm font-medium"
              style={{ color: '#475569' }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#16a34a' }} />
                <span>E-Com Optimization (Shopify, Amazon, Walmart)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#16a34a' }} />
                <span>Custom Software & Cloud Engineering (AWS)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#16a34a' }} />
                <span>Interactive Mobile Programs & Websites</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#16a34a' }} />
                <span>Modern Figma UI/UX & Digital Brand Assets</span>
              </div>
            </motion.div>

            {/* CTA Actions Panel */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                id="hero-cta-contact"
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-sans text-base font-bold active:scale-98 cursor-pointer shadow-xl transition-all group text-white"
                style={{ backgroundColor: '#0ea5e9', boxShadow: '0 20px 25px -5px rgba(14,165,233,0.2)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0284c7'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
              >
                Launch Your Project
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                id="hero-secondary-explore"
                onClick={() => onNavigate('program')}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-sans text-base font-semibold border active:scale-98 cursor-pointer transition-all shadow-xs"
                style={{ backgroundColor: '#ffffff', color: '#0c1a2e', borderColor: '#bae6fd' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0f2fe'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                Explore Services & Niches
              </button>
            </motion.div>

            {/* Social Trust Stat indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-6 border-t pt-8"
              style={{ borderColor: '#bae6fd' }}
            >
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 object-cover" style={{ borderColor: '#ffffff' }} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100" alt="Avatar client" referrerPolicy="no-referrer" />
                <img className="w-10 h-10 rounded-full border-2 object-cover" style={{ borderColor: '#ffffff' }} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" alt="Avatar client" referrerPolicy="no-referrer" />
                <img className="w-10 h-10 rounded-full border-2 object-cover" style={{ borderColor: '#ffffff' }} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100" alt="Avatar client" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <div className="flex" style={{ color: '#f59e0b' }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-sans font-bold text-sm" style={{ color: '#0c1a2e' }}>5.0 / 5.0</span>
                </div>
                <p className="font-sans text-xs" style={{ color: '#94a3b8' }}>Trusted by 150+ international businesses and brands</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Graphical/Interactive Showcase Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">

            {/* Absolute Ambient Halo */}
            <div className="absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -top-10 -right-10" style={{ background: 'linear-gradient(to top right, #38bdf8, #0ea5e9)' }} />
            <div className="absolute w-60 h-60 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-10 -left-10" style={{ backgroundColor: '#bae6fd' }} />

            {/* Dynamic Glassmorphic Workspace Canvas wrapper */}
            <motion.div
              id="hero-glass-canvas"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', damping: 20 }}
              className="relative w-full aspect-square max-w-105 backdrop-blur-xl border rounded-[40px] shadow-2xl p-6 flex flex-col justify-between overflow-hidden"
              style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}
            >
              {/* Top Banner inside Card */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fb7185' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fbbf24' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#16a34a' }} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: '#94a3b8' }}>DR_COMMERCE_ENG_ONLINE</span>
              </div>

              {/* Central Project Stat Card / Visual Core */}
              <div className="my-auto space-y-6">

                {/* Floating Badge (E-Commerce) */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 p-3 backdrop-blur-md border rounded-2xl shadow-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#bae6fd' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#e0f2fe', borderColor: '#bae6fd', color: '#0ea5e9' }}>
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold" style={{ color: '#64748b' }}>E-commerce Lift</span>
                    <span className="block font-sans font-bold" style={{ color: '#0c1a2e' }}>+145% Avg Sales</span>
                  </div>
                </motion.div>

                {/* Floating Badge (Tech Dev) */}
                <motion.div
                  initial={{ x: 25, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-3 p-3 backdrop-blur-md border rounded-2xl shadow-lg ml-auto max-w-60"
                  style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#bae6fd' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#e0f2fe', borderColor: '#bae6fd', color: '#0ea5e9' }}>
                    <Code className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block font-sans text-xs font-semibold" style={{ color: '#64748b' }}>AWS & Code Performance</span>
                    <span className="block font-sans font-bold" style={{ color: '#0c1a2e' }}>99.9% Uptime SLA</span>
                  </div>
                </motion.div>

                {/* Simulated Interactive Pipeline Graphic */}
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center text-xs font-semibold" style={{ color: '#64748b' }}>
                    <span>Active Digital Sprints</span>
                    <span className="font-mono" style={{ color: '#16a34a' }}>100% Verified</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: '#e0f2fe' }}>
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '92%' }}
                      transition={{ delay: 1, duration: 2, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(to right, #0ea5e9, #0284c7)' }}
                    />
                  </div>
                </div>

              </div>

              {/* Footer status bar within interactive mock */}
              <div className="border-t pt-3 flex items-center justify-between text-[11px] font-mono" style={{ borderColor: '#bae6fd', color: '#94a3b8' }}>
                <span className="flex items-center gap-1.5 font-sans">
                  <span className="w-2 h-2 rounded-full inline-block animate-ping" style={{ backgroundColor: '#16a34a' }}></span>
                  Ready to deploy assets
                </span>
                <span>v3.5.2</span>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}