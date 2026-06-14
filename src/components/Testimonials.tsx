import { useState, FormEvent } from 'react';
import { Star, MessageSquareQuote, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Mock interactive feedback system inside testimonials to engage users
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [mockName, setMockName] = useState('');
  const [mockRole, setMockRole] = useState('');
  const [mockMessage, setMockMessage] = useState('');
  const [mockRating, setMockRating] = useState(5);
  const [addedReviews, setAddedReviews] = useState<typeof testimonials>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    if (!mockName || !mockMessage) return;

    const newReview = {
      id: `custom-review-${Date.now()}`,
      name: mockName,
      role: mockRole || 'Digital Specialist',
      company: 'Enterprise Partner',
      content: mockMessage,
      rating: mockRating,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200'
    };

    setAddedReviews([newReview, ...addedReviews]);
    setIsSuccess(true);
    setMockName('');
    setMockRole('');
    setMockMessage('');
    setMockRating(5);

    setTimeout(() => {
      setIsSuccess(false);
      setIsFormOpen(false);
    }, 3000);
  };

  const allReviews = [...addedReviews, ...testimonials];
  const activeReview = allReviews[activeIndex] || testimonials[0];

  return (
    <section id="testimonials" className="py-24 relative scroll-mt-20 overflow-hidden" style={{ backgroundColor: '#f0f9ff' }}>

      {/* Decorative Blur Ambient Sphere */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full filter blur-3xl opacity-30 pointer-events-none" style={{ backgroundColor: '#38bdf8' }} />
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: '#0ea5e9' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full" style={{ color: '#0ea5e9', backgroundColor: '#e0f2fe' }}>
            Client Loyalty & Case Success
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#0c1a2e' }}>
            Trusted by Leaders Across the Digital Sphere
          </h2>
          <p className="mt-4 font-sans text-base" style={{ color: '#94a3b8' }}>
            Read corporate reviews detailing active commercial growth achievements across our custom e-commerce stores and advanced technical builds.
          </p>
        </div>

        {/* Carousel & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Brand Stats Focus */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="p-8 rounded-3xl backdrop-blur-md border text-white min-h-75 flex flex-col justify-between shadow-xl" style={{ backgroundColor: 'rgba(12,26,46,0.85)', borderColor: '#1e3a5f' }}>
              <div className="space-y-4">
                <div className="flex" style={{ color: '#f59e0b' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <h3 className="font-sans font-bold text-3xl">99.6% Success Rating</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#bae6fd' }}>
                  Calculated based on 150+ completed client reviews across integrated platform delivery, custom CMS code solutions, and backend API infrastructures.
                </p>
              </div>

              {/* Leave review trigger */}
              <button
                id="toggle-client-review-form"
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="inline-flex items-center gap-1 text-xs font-semibold backdrop-blur-md border px-4 py-2.5 rounded-xl cursor-pointer transition-all self-start text-white"
                style={{ backgroundColor: 'rgba(14,165,233,0.2)', borderColor: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#0c1a2e'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(14,165,233,0.2)'; e.currentTarget.style.color = '#ffffff'; }}
              >
                {isFormOpen ? 'Close Intake Form' : 'Submit Your Feedback'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Active Slider OR Intake form */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {isFormOpen ? (
                <motion.div
                  key="feedback-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="backdrop-blur-md border p-6 sm:p-8 rounded-3xl shadow-xl text-left space-y-6"
                  style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}
                >
                  <div className="space-y-1">
                    <h3 className="font-sans font-bold text-xl" style={{ color: '#0c1a2e' }}>Your Project Experience</h3>
                    <p className="font-sans text-xs" style={{ color: '#94a3b8' }}>Are you an existing client or partner? We welcome your metrics.</p>
                  </div>

                  {isSuccess ? (
                    <div className="p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 border" style={{ backgroundColor: '#dcfce7', borderColor: '#bbf7d0', color: '#16a34a' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#bbf7d0', color: '#16a34a' }}>
                        <Check className="w-6 h-6" />
                      </div>
                      <span className="font-sans font-bold text-base">Feedback Submitted Successfully</span>
                      <p className="font-sans text-xs">Thank you for leaving detailed notes on your project sprint.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <label className="block text-xs font-bold font-sans uppercase" style={{ color: '#64748b' }}>Full Name</label>
                          <input
                            type="text"
                            required
                            value={mockName}
                            onChange={(e) => setMockName(e.target.value)}
                            placeholder="Sarah Jenkins"
                            className="w-full px-4 py-2.5 rounded-xl border backdrop-blur-xs outline-hidden font-sans text-sm"
                            style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                            onFocus={e => e.currentTarget.style.borderColor = '#0ea5e9'}
                            onBlur={e => e.currentTarget.style.borderColor = '#bae6fd'}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-xs font-bold font-sans uppercase" style={{ color: '#64748b' }}>Role & Company</label>
                          <input
                            type="text"
                            value={mockRole}
                            onChange={(e) => setMockRole(e.target.value)}
                            placeholder="VP of E-commerce, Aura"
                            className="w-full px-4 py-2.5 rounded-xl border backdrop-blur-xs outline-hidden font-sans text-sm"
                            style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                            onFocus={e => e.currentTarget.style.borderColor = '#0ea5e9'}
                            onBlur={e => e.currentTarget.style.borderColor = '#bae6fd'}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold font-sans uppercase" style={{ color: '#64748b' }}>Rating Star Index</label>
                        <select
                          value={mockRating}
                          onChange={(e) => setMockRating(parseInt(e.target.value))}
                          className="w-full px-4 py-2.5 rounded-xl border backdrop-blur-xs outline-hidden font-sans text-sm"
                          style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                        >
                          <option value="5">5 Stars (Elite Deliverables)</option>
                          <option value="4">4 Stars (Great Quality)</option>
                          <option value="3">3 Stars (Good Performance)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold font-sans uppercase" style={{ color: '#64748b' }}>Detailed Feedback</label>
                        <textarea
                          required
                          rows={3}
                          value={mockMessage}
                          onChange={(e) => setMockMessage(e.target.value)}
                          placeholder="Detail our code integration speed or channel management metrics..."
                          className="w-full px-4 py-2.5 rounded-xl border backdrop-blur-xs outline-hidden font-sans text-sm"
                          style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                          onFocus={e => e.currentTarget.style.borderColor = '#0ea5e9'}
                          onBlur={e => e.currentTarget.style.borderColor = '#bae6fd'}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl text-white font-sans text-sm font-bold transition-all cursor-pointer text-center"
                        style={{ backgroundColor: '#0ea5e9' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0284c7'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
                      >
                        Publish Feedback Parameters
                      </button>
                    </form>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="feedback-slider"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="backdrop-blur-xl border p-8 sm:p-12 rounded-3xl shadow-lg relative text-left flex flex-col justify-between min-h-87.5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}
                >
                  {/* Quote decoration */}
                  <div className="absolute top-8 right-8 p-2" style={{ color: '#e0f2fe' }}>
                    <MessageSquareQuote className="w-16 h-16 drop-shadow-xs" />
                  </div>

                  <div className="space-y-6">
                    {/* Rating Banner */}
                    <div className="flex" style={{ color: '#f59e0b' }}>
                      {Array.from({ length: activeReview.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    {/* Content statement */}
                    <p className="font-sans text-base sm:text-lg leading-relaxed font-medium italic" style={{ color: '#475569' }}>
                      "{activeReview.content}"
                    </p>
                  </div>

                  {/* Client Metadata and Slide Switches */}
                  <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: '#bae6fd' }}>
                    <div className="flex items-center gap-3 self-start">
                      <img
                        src={activeReview.avatar}
                        alt={activeReview.name}
                        className="w-12 h-12 rounded-full object-cover border-2 shadow-md"
                        style={{ borderColor: '#ffffff' }}
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="block font-sans font-extrabold text-sm" style={{ color: '#0c1a2e' }}>
                          {activeReview.name}
                        </span>
                        <span className="block font-sans text-xs" style={{ color: '#94a3b8' }}>
                          {activeReview.role} • <span className="font-medium" style={{ color: '#0ea5e9' }}>{activeReview.company}</span>
                        </span>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-2 self-end">
                      <button
                        id="testimonial-prev-btn"
                        onClick={handlePrev}
                        className="p-2.5 rounded-xl border backdrop-blur-xs transition-colors shadow-xs cursor-pointer"
                        style={{ borderColor: '#bae6fd', backgroundColor: 'rgba(255,255,255,0.7)', color: '#475569' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'; e.currentTarget.style.color = '#0c1a2e'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#475569'; }}
                        aria-label="Previous testimonial"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        id="testimonial-next-btn"
                        onClick={handleNext}
                        className="p-2.5 rounded-xl border backdrop-blur-xs transition-colors shadow-xs cursor-pointer"
                        style={{ borderColor: '#bae6fd', backgroundColor: 'rgba(255,255,255,0.7)', color: '#475569' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'; e.currentTarget.style.color = '#0c1a2e'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#475569'; }}
                        aria-label="Next testimonial"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}