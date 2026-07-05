import './Celebrating.css'

function Trophy({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 20h60v8c0 22-12 40-30 48-18-8-30-26-30-48v-8z"
        fill="url(#glass)"
        stroke="#5b9bd5"
        strokeWidth="1.5"
      />
      <rect x="48" y="76" width="24" height="28" rx="2" fill="#8fa8c8" />
      <path d="M36 104h48l-6 20H42l-6-20z" fill="#5b9bd5" />
      <rect x="28" y="124" width="64" height="10" rx="2" fill="#c0c0c0" />
      <rect x="22" y="134" width="76" height="14" rx="3" fill="#a8a8a8" />
      <text
        x="60"
        y="52"
        textAnchor="middle"
        fill="#1a3a6b"
        fontSize="14"
        fontWeight="700"
      >
        ★
      </text>

      <defs>
        <linearGradient id="glass" x1="60" y1="20" x2="60" y2="76">
          <stop stopColor="#d4e8f7" />
          <stop offset="1" stopColor="#7eb8e0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Celebrating() {
  return (
    <section className="celebrating">
      <div className="section-container celebrating__inner">
        <div className="celebrating__awards">
          <Trophy className="celebrating__trophy celebrating__trophy--left" />
          <Trophy className="celebrating__trophy celebrating__trophy--right" />
        </div>

        <div className="celebrating__content">
          <h2 className="section-heading">
            A Unified Movement for Women's Empowerment
          </h2>

          <p className="celebrating__subtitle">
            HER Kadam by Jindal Foundation
          </p>

          <p className="celebrating__text">
            HER Kadam brings together Jindal Foundation's flagship
            women-centric initiatives under one unified identity,
            strengthening its commitment to empowering women and girls
            across India.
          </p>

          <p className="celebrating__text">
            Through programmes focused on education, healthcare, digital
            literacy, entrepreneurship, skill development, and sustainable
            livelihoods, HER Kadam has created opportunities for more than
            <strong> 2.7 million women and girls</strong>, enabling them to
            build brighter futures for themselves, their families, and
            their communities.
          </p>
        </div>
      </div>
    </section>
  )
}