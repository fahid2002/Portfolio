/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(8 8 8)', bg2: 'rgb(13 13 13)', bg3: 'rgb(19 19 19)', bg4: 'rgb(24 24 24)',
        red: 'rgb(192 18 43)', 'red-b': 'rgb(232 20 47)', accent: 'rgb(200 240 74)',
        cream: 'rgb(240 236 224)', text: 'rgb(196 192 184)', 'text-d': 'rgb(88 84 78)',
        border: 'rgba(192,18,43,0.18)', 'border-b': 'rgba(192,18,43,0.38)',
        op: { text: 'rgb(196 192 184)', dim: 'rgb(88 84 78)' }
      },
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        pixel: ['var(--font-pixel)', 'monospace'], 
        display: ['var(--font-display)', 'cursive']
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float2': 'float 4s ease-in-out infinite 0.8s',
        'float3': 'float 3.8s ease-in-out infinite 0.3s',
        breath: 'red-breath 4s ease-in-out infinite',
        'pulse-g': 'pulse-g 2s infinite',
        flicker: 'flicker 9s infinite 3s',
        marquee: 'marquee 28s linear infinite'
      }
    }
  },
  plugins: [],
}