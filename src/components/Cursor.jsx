'use client'
import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Cursor() {
  const [isFlipped, setIsFlipped] = useState(false)

  const cursorX = useMotionValue(80) 
  const cursorY = useMotionValue(40)
  
  const springConfig = { damping: 25, stiffness: 80, mass: 0.5 }
  const shipX = useSpring(cursorX, springConfig)
  const shipY = useSpring(cursorY, springConfig)

  const velocityX = useMotionValue(0)
  const velocityY = useMotionValue(0)

  const scaleYVelocity = useTransform(velocityX, [-3000, 0, 3000], [0.9, 1, 0.9])
  const scaleXVelocity = useTransform(velocityX, [-3000, 0, 3000], [1.1, 1, 1.1])

  const pitch = useTransform(velocityY, [-50, 0, 50], [25, 0, -25])
  
  const translateZ = useTransform(velocityX, [-50, 0, 50], [40, 0, 40])

  useEffect(() => {
    let lastX = 0;
    let lastY = 0; 
    
    const updatePosition = (clientX, clientY) => {
      cursorX.set(clientX - 15) 
      cursorY.set(clientY - 15)
      
      velocityX.set(clientX - lastX)
      velocityY.set(clientY - lastY)
      
      if (clientX < lastX) setIsFlipped(true)
      else if (clientX > lastX) setIsFlipped(false)
      
      lastX = clientX;
      lastY = clientY;
    }

    const handleMouseMove = (e) => updatePosition(e.clientX, e.clientY)
    const handleTouch = (e) => {
      if (e.touches.length > 0) updatePosition(e.touches[0].clientX, e.touches[0].clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouch)
    window.addEventListener('touchstart', handleTouch)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouch)
      window.removeEventListener('touchstart', handleTouch)
    }
  }, [cursorX, cursorY, velocityX, velocityY])

  return (
    <motion.div

    className="fixed top-0 left-0 z-[9999] pointer-events-none origin-center perspective-[800px]"
      style={{ 
        x: shipX, 
        y: shipY,
        scaleX: scaleXVelocity,
        scaleY: scaleYVelocity,
        z: translateZ 
      }}
    >
      <motion.img 
        src="image/merry.png" 
        alt="Going Merry Cursor" 
        className="w-[30px] h-auto origin-center [transform-style:preserve-3d]"
        
        style={{ rotateX: pitch }}
        
        animate={{ 
          y: [0, -8, 0], 
          rotateZ: [-4, 4, -4], 
          rotateY: isFlipped ? 180 : 0, 
          
          filter: [
            'drop-shadow(0px 8px 4px rgba(192,18,43,0.2))',
            'drop-shadow(0px 16px 10px rgba(192,18,43,0.5))',
            'drop-shadow(0px 8px 4px rgba(192,18,43,0.2))'
          ],
        }}
        
        transition={{ 
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          filter: { duration: 3, repeat: Infinity, ease: "linear" },
          rotateY: { duration: 0.5, type: "spring", stiffness: 80, damping: 12 } 
        }}
      />
    </motion.div>
  )
}