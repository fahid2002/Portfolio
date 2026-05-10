'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from '@/data/personal'

const links = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Projects',href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onTalk }) {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[800] flex items-center justify-between px-[5vw] py-[1.1rem] transition-all duration-300 ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-[20px] border-b border-[var(--border)] shadow-[0_4px_30px_rgba(192,18,43,0.1)]'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); handleNav('#home') }}
          className="font-display text-[2.1rem] text-cream leading-none hover:opacity-90 transition-opacity"
        >
          {personal.logo.replace('.', '')}<span className="text-red-b">.</span>
          <span className="text-[0.6rem] ml-1 opacity-40">☠</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-pixel text-[0.42rem] text-op-dim tracking-widest relative group transition-colors duration-300 hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* Let's Talk + Mobile toggle */}
        <div className="flex items-center gap-4">
          <button className="nav-talk hidden md:block" onClick={onTalk}>
            Let&apos;s Talk ✦
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[62px] left-0 right-0 z-[799] bg-bg2/98 backdrop-blur-[20px] border-b border-[var(--border)] px-[5vw] py-6 md:hidden"
          >
            <ul className="list-none flex flex-col gap-5">
              {links.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-pixel text-[0.5rem] text-op-dim tracking-widest hover:text-cream transition-colors w-full text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button className="nav-talk mt-2" onClick={() => { setMenuOpen(false); onTalk() }}>
                  Let&apos;s Talk ✦
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
