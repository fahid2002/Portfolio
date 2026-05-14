'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { personal } from '@/data/personal'

const contacts = [
  {
    icon: FiPhone,
    iconClass: 'text-red bg-[rgba(192,18,43,0.12)]',
    label: 'PHONE',
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: FaWhatsapp,
    iconClass: 'text-[#25d366] bg-[rgba(37,211,102,0.1)]',
    label: 'WHATSAPP',
    value: personal.phone,
    href: personal.whatsapp,
  },
  {
    icon: FiMail,
    iconClass: 'text-red bg-[rgba(192,18,43,0.12)]',
    label: 'EMAIL',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: FaLinkedin,
    iconClass: 'text-[#0a66c2] bg-[rgba(10,102,194,0.1)]',
    label: 'LINKEDIN',
    value: personal.socials.linkedin,
    href: personal.socials.linkedin,
  },
]

export default function LetsTalkModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[900] bg-black/90 backdrop-blur-[16px] flex items-center justify-center p-4"
          onClick={e => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            key="modal-box"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{ opacity: 0, y: 20, scale: 0.96    }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="modal-corners relative bg-bg3 border border-[var(--border-b)] w-full max-w-[460px] p-10"
            style={{ boxShadow: '0 0 80px rgba(192,18,43,0.22)' }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-op-dim hover:text-red-b transition-colors text-lg"
              aria-label="Close"
            >
              <FiX />
            </button>

            <p className="font-pixel text-[0.4rem] text-accent tracking-[0.2em] mb-2">
              ☠ STRAW HAT COMMUNICATIONS
            </p>
            <h2 className="font-display text-cream text-[3rem] leading-none mb-7">
              Let&apos;s Talk
            </h2>

            <div className="flex flex-col gap-3">
              {contacts.map(({ icon: Icon, iconClass, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 bg-bg2 border border-[var(--border)] transition-colors duration-300 hover:border-red hover:bg-[rgba(192,18,43,0.05)]"
                >
                  <div className={`w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center ${iconClass}`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="font-pixel text-[0.3rem] text-op-dim tracking-widest mb-1">{label}</div>
                    <div className="text-op-text text-[0.84rem]">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
