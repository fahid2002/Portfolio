import { DM_Sans, Press_Start_2P, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import AosInit from '@/components/AosInit'

// 1. Configure Fonts to match your One Piece mockup
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
  display: 'swap',
})

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  variable: '--font-pixel',
  weight: '400',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
  display: 'swap',
})

// 2. SEO Metadata
export const metadata = {
  title: 'fahid. — MERN Stack Developer & Designer',
  description: 'Portfolio of Fahid Hasan Khan — MERN Stack Developer, Software Engineer, UI/UX Designer & Graphics Designer from Dhaka, Bangladesh.',
  keywords: [
    'Fahid Hasan', 'MERN Stack', 'Next.js', 'React', 'One Piece Portfolio',
    'UI UX Designer', 'Graphics Designer', 'Bangladesh Developer',
  ],
  authors: [{ name: 'Fahid Hasan Khan' }],
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${dmSans.variable} ${pressStart.variable} ${bebasNeue.variable} scroll-smooth`}
    >
      <body className="bg-bg text-text font-body selection:bg-red-b selection:text-cream antialiased">
        {/* AosInit: This is the client component that starts your scroll animations.
          If you haven't created this file yet, create it at src/components/AosInit.jsx
        */}
        <AosInit />
        <Navbar />

        <div className="min-h-screen relative overflow-hidden">
          {children}
        </div>

        {/* Global Grainy Overlay (Optional - based on your mockup vibe) */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-noise" />
      </body>
    </html>
  )
}