import { DM_Sans, Press_Start_2P, Bebas_Neue } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
  display: 'swap',
})

const pressStart2P = Press_Start_2P({
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
  title: 'Fahid Hasan | MERN Stack Developer & Designer',
  description:
    'Portfolio of Fahid Hasan Khan — MERN Stack Developer, Software Engineer, UI/UX Designer & Graphics Designer from Dhaka, Bangladesh.',
  keywords: [
    'Fahid Hasan', 'MERN Stack', 'Next.js', 'React', 'Node.js', 'MongoDB',
    'UI UX Designer', 'Graphics Designer', 'Bangladesh Developer',
  ],
  authors: [{ name: 'Fahid Hasan Khan' }],
  openGraph: {
    title: 'Fahid Hasan — MERN Stack Developer & Designer',
    description: 'Portfolio of Fahid Hasan Khan — MERN Stack Developer & Designer from Dhaka, Bangladesh.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${pressStart2P.variable} ${bebasNeue.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
