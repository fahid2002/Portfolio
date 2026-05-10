import { personal } from '@/data/personal'

const footerLinks = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#040404] px-[5vw] pt-10 pb-7 border-t border-[var(--border)]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 mb-6 border-b border-[rgba(192,18,43,0.08)]">
        <div className="font-display text-[2rem] text-cream">
          {personal.logo.replace('.', '')}
          <span className="text-red-b">.</span>
        </div>
        <nav className="flex flex-wrap gap-5">
          {footerLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-pixel text-[0.36rem] text-op-dim tracking-widest transition-colors duration-300 hover:text-red"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <span className="font-pixel text-[0.3rem] text-op-dim tracking-widest">
          © {year} {personal.fullName} · All Rights Reserved
        </span>
        <span className="font-pixel text-[0.3rem] text-op-dim tracking-widest">
          Built by <span className="text-red">Fahid Hasan</span> · MERN Stack Developer &amp; Designer
        </span>
      </div>
    </footer>
  )
}
