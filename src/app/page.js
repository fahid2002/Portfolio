'use client'
import { useState } from 'react'
import Hero          from '@/components/Hero'
import MarqueeBar    from '@/components/MarqueeBar'
import WaveDivider   from '@/components/WaveDivider'
import About         from '@/components/About'
import Skills        from '@/components/Skills'
import Projects      from '@/components/Projects'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'
import LetsTalkModal from '@/components/LetsTalkModal'
import BackToTop     from '@/components/BackToTop'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <main>
        <Hero />
        <MarqueeBar />
        <WaveDivider from="#080808" to="#0d0d0d" />
        <About />
        <WaveDivider from="#0d0d0d" to="#080808" flip />
        <Skills />
        <WaveDivider from="#080808" to="#0d0d0d" />
        <Projects />
        <WaveDivider from="#0d0d0d" to="#080808" flip />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <LetsTalkModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
