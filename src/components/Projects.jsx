'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import { projectCategories } from '@/data/projects'

function ProjectCard({ project, i, onOpenMedia }) {
  const isVideo = project.image?.endsWith('.mp4') || project.image?.endsWith('.webm')

  return (
    <motion.div
      className="pj-card group rounded-xl overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      {/* Thumbnail */}
      <div 
        className="relative w-full aspect-video bg-bg4 overflow-hidden flex items-center justify-center shrink-0 cursor-pointer group"
        onClick={() => project.image && onOpenMedia({ src: project.image, isVideo })}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(45deg,transparent,transparent 8px,rgba(192,18,43,0.04) 8px,rgba(192,18,43,0.04) 9px)',
          }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-pixel text-[0.45rem] tracking-widest bg-black/50 px-3 py-2 rounded-md">
            [ CLICK TO EXPAND ]
          </span>
        </div>

        {project.image ? (
          isVideo ? (
            <video
              src={project.image}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline 
              suppressHydrationWarning
            />
          ) : (
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={e => { e.target.style.display = 'none' }}
            />
          )
        ) : (
          <span className="font-pixel text-[0.36rem] text-op-dim relative z-10">
            [ Screenshot ]
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display text-[1.4rem] text-cream mb-1">{project.name}</h3>
        <p className="font-pixel text-[0.35rem] text-red tracking-widest mb-3 leading-[1.9]">
          {project.stack}
        </p>
        <p className="text-op-text text-[0.82rem] leading-[1.65] mb-4">{project.desc}</p>
        <div className="flex gap-3 flex-wrap mt-auto pt-2">
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

function FigmaCard({ design, i, onOpenMedia }) {
  const isVideo = design.image?.endsWith('.mp4') || design.image?.endsWith('.webm')

  return (
    <motion.div
      className="figma-ph rounded-xl overflow-hidden flex flex-col h-full bg-bg4 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      {/* Upper Div: Thumbnail */}
      {design.image ? (
        <div 
          className="relative w-full aspect-[4/3] bg-black/20 overflow-hidden flex items-center justify-center shrink-0 cursor-pointer"
          onClick={() => onOpenMedia({ src: design.image, isVideo })}
        >
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-pixel text-[0.45rem] tracking-widest bg-black/60 px-3 py-2 rounded-md">
              [ VIEW FULL ]
            </span>
          </div>

          {isVideo ? (
            <video
              src={design.image}
              // 👇 Removed p-2, changed to object-cover, added hover zoom
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              suppressHydrationWarning
            />
          ) : (
            <img
              src={design.image}
              alt={design.title}
              // 👇 Removed p-2, changed to object-cover, added hover zoom
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={e => { e.target.parentElement.style.display = 'none' }}
            />
          )}
        </div>
      ) : (
        <div className="text-[2.2rem] opacity-30 aspect-[4/3] flex items-center justify-center">🖼️</div>
      )}
      
      {/* Lower Div: Text Area */}
      <div className="p-5 flex flex-col flex-grow text-center">
        <div className="font-display text-[1.4rem] text-cream mb-2">{design.title}</div>
        <div
          className="font-pixel text-[0.35rem] leading-[2.2] tracking-widest mt-auto pt-2"
          style={{ color: 'rgba(200,240,74,0.7)' }}
        >
          {design.desc}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeMedia, setActiveMedia] = useState(null)

  return (
    <>
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
                className={`font-pixel text-[1.36rem] border px-2 py-1 ${
                  cat.isFigma
                    ? 'text-accent border-[rgba(200,240,74,0.25)]'
                    : 'text-red border-[var(--border)]'
                }`}
              >
                {cat.isFigma ? '☠' : String(cat.projects?.length).padStart(2, '0')}
              </span>
              <div className="flex-1 h-[1px] bg-[var(--border)]" />
            </div>

            {/* Project Grid — column boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.isFigma
                ? cat.designs.map((d, i) => <FigmaCard key={d.id} design={d} i={i} onOpenMedia={setActiveMedia} />)
                : cat.projects.map((p, i) => <ProjectCard key={p.id} project={p} i={i} onOpenMedia={setActiveMedia} />)
              }
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMedia(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white hover:text-red transition-colors p-2 bg-black/50 rounded-full"
              onClick={() => setActiveMedia(null)}
            >
              <FiX size={28} />
            </button>

            {/* Media Container */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-full max-h-full flex items-center justify-center cursor-default shadow-2xl"
            >
              {activeMedia.isVideo ? (
                <video
                  src={activeMedia.src}
                  className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg border border-white/10"
                  autoPlay
                  loop
                  controls 
                  playsInline
                />
              ) : (
                <img
                  src={activeMedia.src}
                  alt="Expanded view"
                  className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg border border-white/10"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}