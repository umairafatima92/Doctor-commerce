import { useState, FormEvent } from 'react';
import { Star, MessageSquareQuote, Check, ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../data';

export default function Testimonials() {
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

  return (
    <section id="testimonials" className="py-24 relative scroll-mt-20 overflow-hidden" style={{ backgroundColor: '#f0f9ff' }}>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full filter blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: '#38bdf8' }} />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full filter blur-3xl pointer-events-none opacity-15" style={{ backgroundColor: '#0ea5e9' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full" style={{ color: '#0ea5e9', backgroundColor: '#e0f2fe' }}>
            Client Loyalty & Case Success
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#0c1a2e' }}>
            Trusted by Leaders Across the Digital Sphere
          </h2>
          <p className="mt-4 font-sans text-base" style={{ color: '#94a3b8' }}>
            Real results from real clients — across e-commerce channels and advanced technical builds.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {[
            { value: '99.6%', label: 'Satisfaction Rate' },
            { value: '150+', label: 'Client Reviews' },
            { value: '5★', label: 'Average Rating' },
            { value: '3 Yrs+', label: 'Avg. Relationship' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 px-5 py-3 rounded-2xl border backdrop-blur-md shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}>
              <span className="font-sans font-extrabold text-lg" style={{ color: '#0ea5e9' }}>{stat.value}</span>
              <span className="font-sans text-xs" style={{ color: '#64748b' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {allReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative flex flex-col justify-between p-6 rounded-3xl border backdrop-blur-md shadow-sm hover:shadow-md transition-shadow text-left"
              style={{ backgroundColor: 'rgba(255,255,255,0.65)', borderColor: '#bae6fd' }}
            >
              {/* Quote Icon */}
              <div className="absolute top-5 right-5" style={{ color: '#e0f2fe' }}>
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4" style={{ color: '#f59e0b' }}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="font-sans text-sm leading-relaxed flex-1 mb-6" style={{ color: '#475569' }}>
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#e0f2fe' }}>
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border-2 shadow-sm shrink-0"
                  style={{ borderColor: '#bae6fd' }}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="block font-sans font-extrabold text-xs" style={{ color: '#0c1a2e' }}>
                    {review.name}
                  </span>
                  <span className="block font-sans text-[10px] mt-0.5" style={{ color: '#94a3b8' }}>
                    {review.role} · <span style={{ color: '#0ea5e9' }}>{review.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submit Feedback */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isFormOpen ? (
              <motion.div
                key="cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="inline-flex flex-col items-center gap-3 p-8 rounded-3xl border backdrop-blur-md shadow-sm w-full" style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}>
                  <MessageSquareQuote className="w-8 h-8" style={{ color: '#0ea5e9' }} />
                  <div>
                    <p className="font-sans font-bold text-base" style={{ color: '#0c1a2e' }}>Worked with us?</p>
                    <p className="font-sans text-xs mt-1" style={{ color: '#94a3b8' }}>We'd love to hear about your experience and results.</p>
                  </div>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-sm font-semibold font-sans transition-all cursor-pointer"
                    style={{ backgroundColor: '#0ea5e9' }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0284c7'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
                  >
                    Submit Your Feedback
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="backdrop-blur-md border p-6 sm:p-8 rounded-3xl shadow-xl text-left space-y-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderColor: '#bae6fd' }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-xl" style={{ color: '#0c1a2e' }}>Your Project Experience</h3>
                    <p className="font-sans text-xs mt-1" style={{ color: '#94a3b8' }}>Share your results — existing clients & partners welcome.</p>
                  </div>
                  <button onClick={() => setIsFormOpen(false)} className="text-xs font-sans cursor-pointer" style={{ color: '#94a3b8' }}>Close</button>
                </div>

                {isSuccess ? (
                  <div className="p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 border" style={{ backgroundColor: '#dcfce7', borderColor: '#bbf7d0', color: '#16a34a' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#bbf7d0' }}>
                      <Check className="w-6 h-6" />
                    </div>
                    <span className="font-sans font-bold text-base">Feedback Submitted!</span>
                    <p className="font-sans text-xs">Thank you for sharing your experience.</p>
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
                          className="w-full px-4 py-2.5 rounded-xl border outline-hidden font-sans text-sm"
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
                          className="w-full px-4 py-2.5 rounded-xl border outline-hidden font-sans text-sm"
                          style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                          onFocus={e => e.currentTarget.style.borderColor = '#0ea5e9'}
                          onBlur={e => e.currentTarget.style.borderColor = '#bae6fd'}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold font-sans uppercase" style={{ color: '#64748b' }}>Rating</label>
                      <select
                        value={mockRating}
                        onChange={(e) => setMockRating(parseInt(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl border outline-hidden font-sans text-sm"
                        style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                      >
                        <option value="5">5 Stars — Elite</option>
                        <option value="4">4 Stars — Great</option>
                        <option value="3">3 Stars — Good</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold font-sans uppercase" style={{ color: '#64748b' }}>Your Feedback</label>
                      <textarea
                        required
                        rows={3}
                        value={mockMessage}
                        onChange={(e) => setMockMessage(e.target.value)}
                        placeholder="Share your experience with our team..."
                        className="w-full px-4 py-2.5 rounded-xl border outline-hidden font-sans text-sm resize-none"
                        style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd', color: '#0c1a2e' }}
                        onFocus={e => e.currentTarget.style.borderColor = '#0ea5e9'}
                        onBlur={e => e.currentTarget.style.borderColor = '#bae6fd'}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl text-white font-sans text-sm font-bold transition-all cursor-pointer"
                      style={{ backgroundColor: '#0ea5e9' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0284c7'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
                    >
                      Submit Feedback
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
