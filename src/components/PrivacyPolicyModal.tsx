import { X, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { privacyPolicyContent } from '../data';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="privacy-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">

          {/* Subtle Ambient dark backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 backdrop-blur-xs"
            style={{ backgroundColor: 'rgba(12,26,46,0.6)' }}
          />

          {/* Privacy content Card */}
          <motion.div
            id="privacy-modal-box"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            className="relative backdrop-blur-xl border w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] text-left z-10"
            style={{ backgroundColor: 'rgba(255,255,255,0.75)', borderColor: '#bae6fd' }}
          >
            {/* Modal Navigation header */}
            <div className="flex items-center justify-between p-6 border-b backdrop-blur-md" style={{ borderColor: '#bae6fd', backgroundColor: 'rgba(255,255,255,0.4)' }}>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" style={{ color: '#0ea5e9' }} />
                <h3 className="font-sans font-bold text-lg" style={{ color: '#0c1a2e' }}>Corporate Privacy & Compliance Terms</h3>
              </div>
              <button
                id="close-privacy-btn"
                onClick={onClose}
                className="p-2 rounded-xl transition-all cursor-pointer"
                style={{ color: '#94a3b8' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#0c1a2e'; e.currentTarget.style.backgroundColor = '#e0f2fe'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                aria-label="Close privacy modal"
              >
                <X id="privacy-close-icon" className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Document Details */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1 font-sans text-sm sm:text-base leading-relaxed" style={{ color: '#475569' }}>

              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b" style={{ color: '#94a3b8', borderColor: '#bae6fd' }}>
                <span>Effective Date: {privacyPolicyContent.effectiveDate}</span>
                <span>Jurisdiction: Delaware Commercial Governance</span>
              </div>

              {/* Introduction statement */}
              <p className="font-medium italic" style={{ color: '#475569' }}>
                {privacyPolicyContent.introduction}
              </p>

              {/* Loop sections */}
              <div className="space-y-6 pt-2">
                {privacyPolicyContent.sections.map((section, id) => (
                  <div key={id} className="space-y-1.5">
                    <h4 className="font-sans font-extrabold text-sm uppercase tracking-wide" style={{ color: '#0c1a2e' }}>
                      {section.title}
                    </h4>
                    <p className="text-xs sm:text-sm" style={{ color: '#475569' }}>
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom quick compliance badge */}
              <div className="p-4 rounded-2xl border flex items-start gap-3 mt-8" style={{ backgroundColor: '#e0f2fe', borderColor: '#bae6fd' }}>
                <HelpCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#0ea5e9' }} />
                <div className="space-y-0.5 text-xs" style={{ color: '#0c1a2e' }}>
                  <span className="font-bold">Information Integrity Pledge</span>
                  <p className="leading-normal" style={{ color: '#475569' }}>
                    Doctor Commerce guarantees absolute compliance with international metrics. We verify that no collected contact parameters or estimative values are logged to any public syndications.
                  </p>
                </div>
              </div>

            </div>

            {/* Footer Action segment */}
            <div className="p-5 border-t backdrop-blur-md flex justify-end" style={{ borderColor: '#bae6fd', backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <button
                id="confirm-privacy-close"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-white font-sans text-sm font-semibold cursor-pointer transition-colors"
                style={{ backgroundColor: '#0c1a2e' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0ea5e9'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0c1a2e'}
              >
                Close Compliance Terms
              </button>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}