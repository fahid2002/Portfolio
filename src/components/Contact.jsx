'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaWhatsapp, FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { personal } from '@/data/personal'

const SVC = 'portfolio_contact'
const TPL = 'template_iaahw7s'
const KEY = 'lBxVNHzTLuf-OpVjJ'

const infoItems = [
  { Icon: FiPhone,    label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}`,     cls: 'text-red bg-[rgba(192,18,43,0.12)]'     },
  { Icon: FaWhatsapp, label: 'WhatsApp', value: personal.phone,    href: personal.whatsapp,            cls: 'text-[#25d366] bg-[rgba(37,211,102,0.1)]' },
  { Icon: FiMail,     label: 'Email',    value: personal.email,    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`,  cls: 'text-red bg-[rgba(192,18,43,0.12)]'     },
  { Icon: FiMapPin,   label: 'Location', value: personal.location, href: null,                        cls: 'text-red bg-[rgba(192,18,43,0.12)]'     },
]

const socials = [
  { Icon: FaGithub,    label: 'GitHub',    href: personal.socials.github    },
  { Icon: FaLinkedin,  label: 'LinkedIn',  href: personal.socials.linkedin  },
  { Icon: FaFacebook,  label: 'Facebook',  href: personal.socials.facebook  },
  { Icon: FaTwitter,   label: 'Twitter',   href: personal.socials.twitter   },
  { Icon: FaInstagram, label: 'Instagram', href: personal.socials.instagram },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [form,   setForm  ] = useState({ name: '', email: '', subject: '', message: '' })

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.sendForm(SVC, TPL, formRef.current, KEY)
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-bg px-[5vw] py-24">
      {/* Eyebrow */}
      <div className="eyebrow" data-aos="fade-up">
        <span className="eyebrow-text">✉ SEND A PIGEON</span>
        <div className="eyebrow-line" />
      </div>

      <h2
        data-aos="fade-up"
        className="font-display text-cream leading-[1.05] max-w-[520px] mb-14"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
      >
        Let&apos;s Build<br />
        <span className="text-red-b">Something</span><br />Together.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start">

        {/* LEFT — contact info */}
        <div>
          {infoItems.map(({ Icon, label, value, href, cls }) => {
            const inner = (
              <div className="flex gap-4 items-start w-full">
                <div className={`w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center ${cls}`}>
                  <Icon size={16} />
                </div>
                <div>
                  <div className="font-pixel text-[0.33rem] text-op-dim tracking-widest mb-1">{label}</div>
                  <div className="text-op-text text-[0.87rem]">{value}</div>
                </div>
              </div>
            )
            return (
              <motion.div
                key={label}
                data-aos="fade-right"
                whileHover={href ? { x: 4 } : {}}
                className="py-4 border-b border-[var(--border)]"
              >
                {href
                  ? <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
                  : inner
                }
              </motion.div>
            )
          })}

          <div className="font-pixel text-[0.4rem] text-accent tracking-widest mt-7 mb-4">
            Find Me Online ✦
          </div>
          <div className="flex flex-wrap gap-2">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                className="flex items-center gap-2 font-pixel text-[0.33rem] px-3 py-2 border border-[var(--border)] text-op-dim tracking-widest transition-all duration-300 hover:border-red hover:text-cream hover:bg-[rgba(192,18,43,0.07)]"
              >
                <Icon size={11} /> {label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — contact form */}
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="flex flex-col gap-5"
          data-aos="fade-left"
        >
          <div className="font-display text-cream text-[2.2rem]">Send a Message</div>
          <p className="text-op-dim text-[0.82rem] leading-[1.7] -mt-2">
            Have a project in mind or want to collaborate? Drop me a message —
            I&apos;ll get back to you as soon as the wind allows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-pixel text-[0.33rem] text-op-dim tracking-widest">Your Name</label>
              <input name="name" value={form.name} onChange={onChange} required
                placeholder="Rahim Ahmed" className="cf-input" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-pixel text-[0.33rem] text-op-dim tracking-widest">Your Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required
                placeholder="rahim@email.com" className="cf-input" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-pixel text-[0.33rem] text-op-dim tracking-widest">Subject</label>
            <input name="subject" value={form.subject} onChange={onChange} required
              placeholder="Project Inquiry / Collaboration" className="cf-input" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-pixel text-[0.33rem] text-op-dim tracking-widest">Message</label>
            <textarea name="message" value={form.message} onChange={onChange} required
              rows={5} placeholder="Tell me about your project or idea..."
              className="cf-textarea resize-y" />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-btn px-btn-red self-start flex items-center gap-3 disabled:opacity-60"
          >
            <FiSend size={13} />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-pixel text-[0.38rem] tracking-widest"
              style={{ color: '#44ff88' }}
            >
              ✓ Message sent! I&apos;ll reply soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-pixel text-[0.38rem] text-red-b tracking-widest"
            >
              ✗ Something went wrong. Email me directly.
            </motion.p>
          )}
        </form>
      </div>
    </section>
  )
}
