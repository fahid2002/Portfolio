'use client'
import { marqueeItems } from '@/libs/utils'

export default function MarqueeBar() {

  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="bg-bg2 overflow-hidden py-[0.9rem] border-t border-b border-[var(--border)]">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-5 px-8 font-pixel text-[0.38rem] text-op-dim whitespace-nowrap tracking-widest"
          >
            <span>{item}</span>
            <span className="w-[5px] h-[5px] bg-red flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
