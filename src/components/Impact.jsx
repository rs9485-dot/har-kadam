import ImpactStat from './ImpactStat'
import './Impact.css'

const stats = [
  {
    value: '2.7M+',
    title: 'Women & Girls Empowered',
    description:
      'Over 2.7 million women and girls have been empowered through HER Kadam by Jindal Foundation, creating opportunities in education, healthcare, digital literacy, and sustainable livelihoods.',
  },
  {
    value: '6',
    title: 'Flagship Initiatives',
    description:
      'HER Kadam unifies six flagship programmes—Kishori Express, Vatsalya, Yashasvi, Anjor Digital Literacy, Swawlamban, and Aakriti—under a single platform for greater collective impact.',
  },
  {
    value: '5+',
    title: 'Core Focus Areas',
    description:
      'The initiative focuses on education, healthcare, digital literacy, skill development, entrepreneurship, and community empowerment to enable long-term social change.',
  },
  {
    value: 'Pan India',
    title: 'Community Reach',
    description:
      'Through partnerships with communities and local stakeholders, HER Kadam extends its impact across multiple states, empowering women and strengthening families nationwide.',
  },
]

export default function Impact() {
  return (
    <section className="impact">
      <div className="section-container">
        <h2 className="section-heading">Our Impact</h2>

        <p className="section-subheading">
          HER Kadam by Jindal Foundation brings together women-centric
          initiatives under one unified platform, creating lasting impact
          through education, healthcare, livelihood generation, digital
          inclusion, and community-led development.
        </p>

        <div className="impact__grid">
          {stats.map((stat) => (
            <ImpactStat
              key={stat.title}
              value={stat.value}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}