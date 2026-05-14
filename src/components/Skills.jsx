'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { skillGroups } from '@/data/skills'

const tagVar = {
  hidden:  { opacity: 0, y: 10 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.055, duration: 0.4, ease: 'easeOut' },
  }),
}

export default function Skills() {
  const [active, setActive] = useState('frontend')

  return (
    <section id="skills" className="bg-bg px-[5vw] py-24">
      {/* Eyebrow */}
      <div className="eyebrow" data-aos="fade-up">
        <span className="eyebrow-text">⚔ PIRATE&apos;S ARSENAL</span>
        <div className="eyebrow-line" />
      </div>
      <h2 className="sec-h mb-12" data-aos="fade-up">
        Skills &amp; <span className="text-red-b">Technologies</span>
      </h2>

      {/* Layout: sidebar + content */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-14">

        {/* Sidebar nav */}
        <aside className="md:w-[180px] flex-shrink-0 md:sticky md:top-28 self-start">
          <ul className="list-none flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-0 pb-2 md:pb-0">
            {skillGroups.map(g => (
              <li key={g.id}>
                <button
                  onClick={() => setActive(g.id)}
                  className={`
                    flex items-center font-pixel text-[0.55rem] tracking-widest px-3 py-[0.75rem]
                    w-full text-left whitespace-nowrap transition-all duration-300
                    border-b-2 md:border-b-0 md:border-l-2
                    ${active === g.id
                      ? g.accent
                        ? 'text-accent border-accent bg-[rgba(200,240,74,0.06)] md:pl-5'
                        : 'text-cream border-red bg-[rgba(192,18,43,0.07)] md:pl-5'
                      : 'text-op-dim border-transparent hover:text-cream hover:border-red hover:md:pl-4'
                    }
                  `}
                >
                  <span className="text-[0.7rem] font-sans mr-2 leading-none">{g.icon}</span> 
                  <span className="leading-none mt-[2px]">{g.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Skills content */}
        <div className="flex-1 flex flex-col gap-10">
          {skillGroups.map(g => (
            <div
              key={g.id}
              className={`transition-opacity duration-300 ${active === g.id ? 'opacity-100' : 'opacity-40'}`}
            >
              {/* Group heading */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[var(--border)]">
                <span
                  className="font-display text-[2rem] leading-none"
                  style={{ color: 'rgb(150 20 47)' }}
                >
                  {g.num}
                </span>
                <span className={`font-display text-[1.7rem] tracking-[0.04em] ${g.accent ? 'text-accent' : 'text-cream'}`}>
                  {g.label}
                </span>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-[0.65rem]">
                {g.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={tagVar}
                    className={`sk-tag ${g.accent ? 'sk-tag-acc' : ''} text-[0.75rem] md:text-[0.5rem] px-4 py-[0.6rem]`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
