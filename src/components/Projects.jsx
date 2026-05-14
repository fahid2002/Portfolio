'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projectCategories } from '@/data/projects'

function ProjectCard({ project, i }) {
  return (
    <motion.div
      className="pj-card group"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-bg4 overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(45deg,transparent,transparent 8px,rgba(192,18,43,0.04) 8px,rgba(192,18,43,0.04) 9px)',
          }}
        />
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={e => { e.target.style.display = 'none' }}
          />
        ) : (
          <span className="font-pixel text-[0.36rem] text-op-dim relative z-10">
            [ Screenshot ]
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-display text-[1.4rem] text-cream mb-1">{project.name}</h3>
        <p className="font-pixel text-[0.33rem] text-red tracking-widest mb-3 leading-[1.9]">
          {project.stack}
        </p>
        <p className="text-op-text text-[0.82rem] leading-[1.65] mb-4">{project.desc}</p>
        <div className="flex gap-3 flex-wrap">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-pixel text-[0.36rem] px-3 py-2 bg-red text-cream tracking-widest transition-all duration-200 hover:-translate-x-[1px] hover:-translate-y-[1px]"
              style={{ boxShadow: '2px 2px 0 #6a000e' }}
            >
              <FiExternalLink size={11} /> Live
            </a>
          )}
          {project.github && project.github !== 'YOUR_GITHUB_LINK' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-pixel text-[0.36rem] px-3 py-2 border border-[var(--border)] text-op-dim tracking-widest transition-all duration-300 hover:border-red hover:text-cream"
            >
              <FiGithub size={11} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function FigmaCard({ design, i }) {
  return (
    <motion.div
      className="figma-ph"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      {design.image ? (
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src={design.image}
            alt={design.title}
            className="w-full h-full object-cover"
            onError={e => { e.target.parentElement.style.display = 'none' }}
          />
        </div>
      ) : (
        <div className="text-[2.2rem] opacity-30">🖼️</div>
      )}
      <div className="font-display text-[1.2rem] text-op-dim">{design.title}</div>
      <div
        className="font-pixel text-[0.33rem] leading-[2.2] tracking-widest text-center"
        style={{ color: 'rgba(200,240,74,0.5)' }}
      >
        {design.desc}<br />
        <span className="text-op-dim">[ Add image / video manually ]</span>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-bg2 px-[5vw] py-24">
      {/* Eyebrow */}
      <div className="eyebrow" data-aos="fade-up">
        <span className="eyebrow-text">🗺 TREASURE MAP</span>
        <div className="eyebrow-line" />
      </div>
      <h2 className="sec-h mb-14" data-aos="fade-up">
        My <span className="text-red-b">Projects</span>
      </h2>

      {projectCategories.map(cat => (
        <div key={cat.id} className="mb-16">
          {/* Category header */}
          <div
            className="flex items-center gap-3 mb-7 pb-4 border-b border-[var(--border)]"
            data-aos="fade-up"
          >
            <span className="text-[1.4rem]">{cat.icon}</span>
            <span className="font-display text-[2rem] text-cream tracking-[0.04em]">{cat.title}</span>
            <span
              className={`font-pixel text-[0.36rem] border px-2 py-1 ${
                cat.isFigma
                  ? 'text-accent border-[rgba(200,240,74,0.25)]'
                  : 'text-red border-[var(--border)]'
              }`}
            >
              {cat.isFigma ? '— Add Yours' : String(cat.projects?.length).padStart(2, '0')}
            </span>
            <div className="flex-1 h-[1px] bg-[var(--border)]" />
          </div>

          {/* Project Grid — column boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.isFigma
              ? cat.designs.map((d, i) => <FigmaCard key={d.id} design={d} i={i} />)
              : cat.projects.map((p, i) => <ProjectCard key={p.id} project={p} i={i} />)
            }
          </div>
        </div>
      ))}
    </section>
  )
}
