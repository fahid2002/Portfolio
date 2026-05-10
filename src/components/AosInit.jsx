'use client'
import { useEffect } from 'react'

export default function AosInit() {
  useEffect(() => {
    const init = async () => {
      const AOS = (await import('aos')).default
      await import('aos/dist/aos.css')
      AOS.init({
        duration: 700,
        once: true,
        offset: 60,
        easing: 'ease-out-cubic',
      })
    }
    init()
  }, [])

  return null
}
