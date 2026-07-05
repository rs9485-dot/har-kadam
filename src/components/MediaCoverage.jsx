import MediaCard from './MediaCard'
import './MediaCoverage.css'

const articles = [
  {
    title: 'National Launch of HER Kadam',
    text: 'Jindal Foundation introduced HER Kadam as a unified platform bringing together its flagship women-centric initiatives to strengthen education, healthcare, livelihood, and digital empowerment for women and girls across India.',
  },
  {
    title: 'Empowering Over 2.7 Million Women',
    text: 'The campaign highlights the collective impact of HER Kadam, which has empowered more than 2.7 million women and girls through community-driven programmes focused on sustainable social development.',
  },
  {
    title: 'Building Sustainable Communities',
    text: 'Media coverage recognized HER Kadam for integrating programmes such as Kishori Express, Vatsalya, Yashasvi, Anjor Digital Literacy, Swawlamban, and Aakriti under one identity to create lasting community impact.',
  },
]

export default function MediaCoverage() {
  return (
    <section className="media-coverage">
      <div className="section-container">

        <h2 className="section-heading">
          Media Coverage
        </h2>

        <p className="media-coverage__intro">
          HER Kadam received widespread attention for unifying Jindal Foundation's
          women-centric initiatives under a single platform, reinforcing its
          commitment to empowering women through education, healthcare, digital
          inclusion, entrepreneurship, and sustainable livelihoods.
        </p>

        <div className="media-coverage__grid">
          {articles.map((article, index) => (
            <MediaCard
              key={index}
              title={article.title}
              text={article.text}
            />
          ))}
        </div>

      </div>
    </section>
  )
}