'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 3500 means 3.5 seconds.
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    const handleLoad = () => {
      // Small delay
      setTimeout(() => setIsLoading(false), 1500)
    }
    
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"

          initial={{ opacity: 1 }}

          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg px-5"
        >
          {/* Pixelated System Text */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-pixel text-[0.6rem] text-red tracking-widest mb-6 animate-pulse"
          >
            [ SYSTEM_BOOT_SEQUENCE ]
          </motion.div>

          {/* Name / Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-display text-[3rem] md:text-[5rem] text-cream leading-none mb-8"
          >
            Fahid<span className="text-red-b">.</span>
          </motion.div>

          {/* The Loading Bar Container */}
          <div className="w-[200px] md:w-[300px] h-[3px] bg-[var(--border)] overflow-hidden rounded-full">
            {/* The Red Progress Bar */}
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}

              transition={{ duration: 1.5, ease: 'circOut' }}
              className="h-full bg-red"
              style={{ boxShadow: '0 0 10px #c0122b' }}
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="fixed top-0 left-0 w-screen h-dvh z-[9999] flex flex-col items-center justify-center bg-bg overflow-hidden px-5"
          >
            LOADING ASSETS...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}