import { DM_Sans, Press_Start_2P, Bebas_Neue } from 'next/font/google'
import './globals.css'

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

export const metadata = {
  title: 'fahid. — MERN Stack Developer & Designer',
  description:
    'Portfolio of Fahid Hasan Khan — MERN Stack Developer, Software Engineer, UI/UX Designer & Graphics Designer from Dhaka, Bangladesh.',
  keywords: [
    'Fahid Hasan', 'MERN Stack', 'Next.js', 'React', 'Node.js',
    'MongoDB', 'UI UX Designer', 'Graphics Designer', 'Bangladesh Developer',
  ],
  authors: [{ name: 'Fahid Hasan Khan' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'fahid. — MERN Stack Developer & Designer',
    description: 'Portfolio of Fahid Hasan Khan — MERN Stack Developer & Designer from Dhaka, Bangladesh.',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Fahid Hasan Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'fahid. — MERN Stack Developer & Designer',
    description: 'Portfolio of Fahid Hasan Khan — MERN Stack Developer & Designer.',
    images: ['/og-image.svg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${pressStart.variable} ${bebasNeue.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
