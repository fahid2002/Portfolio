/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg':      '#080808',
        'bg2':     '#0d0d0d',
        'bg3':     '#131313',
        'bg4':     '#181818',
        'red':     '#c0122b',
        'red-b':   '#e8142f',
        'accent':  '#c8f04a',
        'gold':    '#c8a050',
        'gold-d':  '#7a5e22',
        'cream':   '#f0ece0',
        'op-text': '#c4c0b8',
        'op-dim':  '#58544e',
      },
      fontFamily: {
        pixel:   ['var(--font-pixel)',   'monospace'],
        display: ['var(--font-display)', 'cursive'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      animation: {
        'float':     'float 4s ease-in-out infinite',
        'float2':    'float 4s ease-in-out 1.2s infinite',
        'float3':    'float 4s ease-in-out 2.4s infinite',
        'pulse-g':   'pulseGreen 2s infinite',
        'marquee':   'marquee 28s linear infinite',
        'flicker':   'flicker 9s infinite 3s',
        'breath':    'breath 5s ease-in-out infinite',
        'coin':      'coinSpin 2s ease-in-out infinite',
        'blink':     'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        pulseGreen: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(68,255,136,0.7)' },
          '50%':     { boxShadow: '0 0 0 8px rgba(68,255,136,0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%,94%,100%': { textShadow: '0 0 18px rgba(232,20,47,0.3)' },
          '95%':          { textShadow: '0 0 50px rgba(232,20,47,0.9), 0 0 100px rgba(232,20,47,0.4)' },
        },
        breath: {
          '0%,100%': { boxShadow: '0 0 20px rgba(192,18,43,0.2)' },
          '50%':     { boxShadow: '0 0 40px rgba(192,18,43,0.5), 0 0 80px rgba(192,18,43,0.2)' },
        },
        coinSpin: {
          '0%,100%': { transform: 'scaleX(1)' },
          '50%':     { transform: 'scaleX(0.1)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
