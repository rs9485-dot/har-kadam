import TimelineNode from './TimelineNode'
import './Timeline.css'

const locations = [
  {
    name: 'Angul',
    year: 'Odisha',
    image: '/cam1.png',
    left: '8%',
    top: '62%',
  },
  {
    name: 'Raigarh',
    year: 'Chhattisgarh',
    image: '/cam2.png',
    left: '22%',
    top: '48%',
  },
  {
    name: 'Barbil',
    year: 'Odisha',
    image: '/cam3.png',
    left: '36%',
    top: '38%',
  },
  {
    name: 'Patratu',
    year: 'Jharkhand',
    image: '/cam4.png',
    left: '50%',
    top: '42%',
  },
  {
    name: 'Tamnar',
    year: 'Chhattisgarh',
    image: '/cam5.png',
    left: '64%',
    top: '52%',
  },
  {
    name: 'Taloja',
    year: 'Maharashtra',
    image: '/cam6.png',
    left: '78%',
    top: '44%',
  },
  {
    name: 'Hisar',
    year: 'Haryana',
    image: '/cam7.png',
    left: '90%',
    top: '58%',
  },
]

export default function Timeline() {
  return (
    <section className="timeline">
      <div className="timeline__map">
        <svg
          className="timeline__path"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
        >
          <path
            d="M 40 280 Q 120 200, 200 220 T 380 160 T 560 200 T 740 170 T 920 240"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="12 8"
            strokeLinecap="round"
          />
        </svg>

        {locations.map((loc) => (
          <TimelineNode
            key={loc.name}
            {...loc}
          />
        ))}
      </div>
    </section>
  )
}