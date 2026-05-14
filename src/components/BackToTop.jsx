'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0    }}
          exit={{ opacity: 0, scale: 0.8, y: 20    }}
          transition={{ duration: 0.3 }}
          onClick={scrollTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-[700] w-10 h-10 bg-red text-cream flex items-center justify-center font-pixel text-[0.9rem]"
          style={{ boxShadow: '3px 3px 0 #6a000e' }}
          whileHover={{ x: -2, y: -2, boxShadow: '5px 5px 0 #6a000e' }}
          whileTap={{ scale: 0.95 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}
