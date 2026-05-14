'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let n = 0
    const step  = Math.max(1, Math.ceil(target / 60))
    const timer = setInterval(() => {
      n += step
      if (n >= target) { setCount(target); clearInterval(timer) }
      else setCount(n)
    }, 18)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { n: 8,  s: '+', label: 'Projects'     },
  { n: 15, s: '+', label: 'Technologies' },
  { n: 2,  s: '+', label: 'Yrs Building' },
]

const chips = [
  '📍 Dhaka, BD',
  '🎓 CSE @ DIU',
  '💼 Open to Freelance',
  '🏴‍☠️ MERN Stack',
  '🎨 UI/UX Design',
  '🖥 VS Code',
]

export default function About() {
  return (
    <section id="about" className="relative bg-bg2 px-[5vw] py-24 overflow-hidden">
      {/* Skull watermark */}
      <div
        className="absolute right-[-4rem] bottom-[-4rem] text-[20rem] pointer-events-none leading-none select-none"
        style={{ color: 'var(--red)', opacity: 0.018 }}
      >☠</div>

      {/* Eyebrow */}
      <div className="eyebrow" data-aos="fade-up">
        <span className="eyebrow-text">⚓ CAPTAIN&apos;S LOG</span>
        <div className="eyebrow-line" />
      </div>

      {/* ── Two-column grid: left = text, right = quote ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

        {/* LEFT — Captain's Log text */}
        <div>
          <h2
            data-aos="fade-right"
            className="font-display text-cream mb-5"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', lineHeight: 1.1 }}
          >
            The Dev Behind<br />The <span className="text-red-b">Grand Line</span>
          </h2>

          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-op-text text-[0.88rem] leading-[1.85] mb-4"
          >
            I&apos;m Fahid Hasan Ifty — a CSE student at Daffodil International University, Dhaka.
            My voyage spans the full stack: building powerful Next.js apps, crafting clean APIs
            in Node + Express, managing data in MongoDB &amp; MySQL, and designing pixel-perfect
            UIs in Figma.
          </p>

          <p
            data-aos="fade-right"
            data-aos-delay="150"
            className="text-op-text text-[0.88rem] leading-[1.85]"
          >
            When I&apos;m not writing code, I&apos;m designing posters, creating visual experiences,
            and building products for real businesses — like the Twilight Thread crochet brand and
            TileHaus, a full-stack tile gallery live on Vercel.
          </p>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid grid-cols-3 gap-[1px] mt-8"
            style={{ background: 'var(--border)' }}
          >
            {stats.map(s => (
              <div
                key={s.label}
                className="bg-bg2 p-4 text-center transition-all duration-300 hover:bg-[rgba(192,18,43,0.07)]"
              >
                <div className="font-display text-red-b text-[2.6rem] leading-none">
                  <CountUp target={s.n} suffix={s.s} />
                </div>
                <div className="font-pixel text-[0.32rem] text-op-dim tracking-widest mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Quote + chips */}
        <div data-aos="fade-left">
          <div
            className="bg-bg3 p-8 relative"
            style={{ border: '1px solid var(--border)', borderLeft: '3px solid var(--red)' }}
          >
            <div
              className="absolute left-0 top-0 w-[3px] h-full pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, var(--red), transparent)' }}
            />
            <blockquote className="font-display text-cream text-[1.6rem] leading-[1.3] mb-3">
              &ldquo;People&apos;s dreams never end.<br />That&apos;s why I keep building.&rdquo;
            </blockquote>
            <cite className="font-pixel text-[0.33rem] text-red not-italic tracking-widest">
              — Inspired by the Grand Line Philosophy
            </cite>

            <div className="flex flex-wrap gap-2 mt-7">
              {chips.map(chip => (
                <motion.span
                  key={chip}
                  whileHover={{ borderColor: 'var(--red)', color: 'var(--cream)' }}
                  className="font-pixel text-[0.32rem] px-3 py-[0.4rem] border text-op-dim tracking-widest cursor-default transition-colors duration-300"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
