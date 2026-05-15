'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false)
  const [isMobile, setIsMobile] = useState(false) 
  
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches)
    }
    
    checkMobile() 

    const handleMouseMove = (e) => {
      if (window.matchMedia("(pointer: coarse)").matches) return

      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const target = e.target
      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        window.getComputedStyle(target).cursor === 'pointer'

      setIsPointer(!!isClickable)
    }

    if (!window.matchMedia("(pointer: coarse)").matches) {
      const style = document.createElement("style")
      style.id = "hide-cursor-style"
      style.innerHTML = `* { cursor: none !important; } a, button { cursor: none !important; }`
      document.head.appendChild(style)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      const style = document.getElementById("hide-cursor-style")
      if (style) document.head.removeChild(style)
    }
  }, [mouseX, mouseY])

  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ 
        x: mouseX, 
        y: mouseY,
        translateX: "-5%", 
        translateY: "-5%" 
      }}
    >
      {!isPointer ? (
        <img
          src="/image/LuffyArrow.png"
          alt="Luffy Normal"
          className="w-[40px] h-auto"
        />
      ) : (
        <img
          src="/image/luffypointer.png" 
          alt="Luffy Pointer"
          className="w-[40px] h-auto"
        />
      )}
    </motion.div>
  )
}