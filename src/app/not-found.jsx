import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg px-5 text-center">
      <div className="font-pixel text-[0.6rem] text-red tracking-widest mb-4">
        [ SYSTEM_ERROR ]
      </div>

      <h1 className="font-display text-[8rem] md:text-[12rem] text-cream leading-none mb-2">
        4<span className="text-red-b">0</span>4
      </h1>

      <div className="text-op-dim text-[1rem] md:text-[1.1rem] mb-10 max-w-[400px]">
        Looks like you wandered off the treasure map. This page could not be found.
      </div>

      <Link 
        href="/" 
        className="inline-flex items-center gap-2 font-pixel text-[0.45rem] tracking-widest px-6 py-3 bg-red text-cream transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px]"
        style={{ boxShadow: '4px 4px 0 #6a000e' }}
      >
        ← BACK TO HOME
      </Link>
    </div>
  )
}