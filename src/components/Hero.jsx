'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { personal } from '@/data/personal'

const socials = [
  { Icon: FiGithub,   href: personal.socials.github,   label: 'GitHub'   },
  { Icon: FiLinkedin, href: personal.socials.linkedin,  label: 'LinkedIn' },
  { Icon: FaFacebook, href: personal.socials.facebook,  label: 'Facebook' },
  { Icon: FaTwitter,  href: personal.socials.twitter,   label: 'Twitter'  },
]

export default function Hero() {
  const ref   = useRef(null)
  const [imgOk, setImgOk] = useState(!!personal.profileImage)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(['.gs-poster','.gs-badge','.gs-name','.gs-desg','.gs-bio','.gs-btns','.gs-soc','.gs-deco'], { clearProps: 'all' })
      gsap.set('.gs-poster', { x: -70, opacity: 0 })
      gsap.set(['.gs-badge','.gs-name','.gs-desg','.gs-bio','.gs-btns','.gs-soc'], { y: 28, opacity: 0 })
      gsap.set('.gs-deco', { scale: 0, opacity: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to('.gs-poster', { x: 0, opacity: 1, duration: 1    })
        .to('.gs-badge',  { y: 0, opacity: 1, duration: 0.5  }, '-=0.55')
        .to('.gs-name',   { y: 0, opacity: 1, duration: 0.75 }, '-=0.35')
        .to('.gs-desg',   { y: 0, opacity: 1, duration: 0.5  }, '-=0.38')
        .to('.gs-bio',    { y: 0, opacity: 1, duration: 0.5  }, '-=0.3')
        .to('.gs-btns',   { y: 0, opacity: 1, duration: 0.45 }, '-=0.25')
        .to('.gs-soc',    { y: 0, opacity: 1, duration: 0.45 }, '-=0.2')
        .to('.gs-deco',   { scale: 1, opacity: 1, stagger: 0.12, duration: 0.4 }, '-=0.3')
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 px-[5vw] pt-28 pb-16 overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="hero-grid-bg" />
      <div className="scanlines absolute inset-0 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 65% at 12% 50%, rgba(192,18,43,.13) 0%, transparent 70%),
            radial-gradient(ellipse 35% 45% at 85% 15%, rgba(192,18,43,.07) 0%, transparent 60%),
            radial-gradient(ellipse 25% 25% at 90% 82%, rgba(200,240,74,.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Skull watermark */}
      <div
        className="absolute right-[-1rem] top-1/2 -translate-y-1/2 pointer-events-none leading-none select-none text-[18rem]"
        style={{ color: 'var(--red)', opacity: 0.018 }}
      >☠</div>

      {/* Pixel decorations */}
      <div className="gs-deco absolute top-[22%] right-[32%] animate-float"><div className="px-coin" /></div>
      <div className="gs-deco absolute top-[68%] right-[29%] opacity-60 animate-float2"><div className="px-coin" /></div>
      <div className="gs-deco absolute top-[17%] left-[45%] opacity-70 animate-float3"><div className="px-star" /></div>
      <div className="gs-deco absolute bottom-[22%] left-[47%] opacity-50 animate-float2"><div className="px-star" /></div>
      <div className="gs-deco absolute top-[13%] right-[8%] font-pixel text-[0.3rem] text-accent opacity-40 animate-float">★ ★ ★</div>
      <div className="gs-deco absolute bottom-[17%] right-[38%] font-pixel text-[0.26rem] text-red opacity-30 animate-float3">▲ ▲</div>

      {/* LEFT — WANTED POSTER */}
      <div className="gs-poster flex flex-col items-center gap-5 z-10">
        <div className="wanted-poster px-corners animate-breath">
          <div className="wanted-img-area">
            {imgOk && personal.profileImage ? (
              <img
                src={personal.profileImage}
                alt={personal.fullName}
                className="absolute inset-0 w-full h-full object-cover object-top z-10"
                onError={() => setImgOk(false)}
              />
            ) : (
              <span className="font-pixel text-[0.38rem] text-op-dim text-center leading-[3] relative z-10 select-none">
                [ YOUR<br />PHOTO<br />HERE ]
              </span>
            )}
          </div>
          <div className="wanted-foot">
            <div className="font-pixel text-[0.7rem] tracking-[0.2em] mb-2">
              DEAD OR ALIVE
            </div>
  
              <div className="wanted-foot-name !text-[1.5rem]">{personal.fullName.toUpperCase()}</div>
              <div className="wanted-foot-bounty !text-[0.38rem] mt-2">BOUNTY: 3,000,000,000 BERRY</div>
            </div>
        </div>

        {/* Location badge */}
        <div className="flex items-center gap-2">
          <span>🗺</span>
          <span className="font-pixel text-[0.3rem] text-op-dim tracking-[0.12em]">
            {personal.location} 🇧🇩
          </span>
        </div>
      </div>

      {/* RIGHT INFO */}
      <div className="z-10">

        {/* Available badge */}
        <div
          className="gs-badge inline-flex items-center gap-[0.6rem] font-pixel text-[0.38rem] tracking-[0.12em] border border-[#44ff88]/20 text-[#44ff88] px-3 py-[0.4rem] mb-5"
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse-g bg-[#44ff88]"
          />
          Available for Work
        </div>

        {/* Name */}
        <h1
          className="gs-name font-display font-bold text-cream mb-2 animate-flicker text-[clamp(3.4rem,7.5vw,7.5rem)] leading-[0.92]"
        >
          FAHID<br />
          <span className="text-red-b">HASAN</span>
        </h1>

        {/* Designation */}
        <p className="gs-desg font-pixel text-[0.42rem] text-op-dim tracking-[0.1em] leading-[2.4] mb-5 ">
          Software Engineer <span className="text-red mx-1">|</span> MERN Stack Developer<br />
          Graphics Designer <span className="text-red mx-1">|</span> UI / UX Designer
        </p>

        {/* Bio */}
        <p
          className="gs-bio text-op-text text-[0.88rem] leading-[1.82] max-w-[430px] mb-7 border-l-2 border-red pl-4"
          style={{ background: 'linear-gradient(to right, rgba(192,18,43,0.05), transparent)' }}
        >
          {personal.bio}
        </p>

        {/* Buttons */}
        <div className="gs-btns flex gap-3 flex-wrap mb-7">
          <a
            href={personal.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-btn px-btn-red"
          >
            ⬇&nbsp;&nbsp;Resume
          </a>
        </div>

        {/* Socials */}
        <div className="gs-soc flex gap-3 items-center flex-wrap">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="w-[38px] h-[38px] flex items-center justify-center border text-op-dim relative overflow-hidden group transition-colors duration-300"
              style={{ borderColor: 'var(--border)' }}
            >
              <span className="absolute inset-0 bg-red translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Icon size={16} className="relative z-10 group-hover:text-cream transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
