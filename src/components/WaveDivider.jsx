export default function WaveDivider({ from = '#080808', to = '#0d0d0d', flip = false }) {
  const d = flip
    ? 'M0,24 C360,0 720,48 1080,24 C1260,12 1380,36 1440,24 L1440,48 L0,48 Z'
    : 'M0,24 C360,48 720,0 1080,24 C1260,36 1380,12 1440,24 L1440,48 L0,48 Z'

  return (
    <div className="wave-div" style={{ background: from }}>
      <svg
        viewBox="0 0 1440 48"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', background: from }}
      >
        <path d={d} fill={to} />
      </svg>
    </div>
  )
}
