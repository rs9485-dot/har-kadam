import { useState } from 'react'
import './FeaturedCarousel.css'

const carouselImages = [
  '/cam1.png',
  '/cam2.png',
  '/cam3.png',
  '/cam4.png',
  '/cam5.png',
  '/cam6.png',
  '/cam7.png',
]

export default function FeaturedCarousel() {
  const [offset, setOffset] = useState(0)

  const visibleCount = 5
  const maxOffset = carouselImages.length - visibleCount

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1))

  return (
    <section className="featured">
      <div className="featured__split">

        {/* LEFT SIDE */}
        <div className="featured__left">
          <h2 className="featured__heading">
            Empowering over{' '}
            <span className="featured__highlight">
              2.7 million women and girls
            </span>{' '}
            across rural and semi-urban India.
          </h2>

          <p className="featured__subtext">
            Creating opportunities through education, healthcare,
            digital literacy, skill development and community-led
            initiatives that help women build independent, confident,
            and sustainable futures.
          </p>

          <p className="featured__text">
            Every step taken through <strong>HER Kadam</strong> empowers
            women to transform not only their own lives but also those
            of their families and communities. Through flagship
            initiatives like <strong>Kishori Express</strong>,
            <strong> Vatsalya</strong>, <strong> Yashasvi</strong>,
            <strong> Anjor Digital Literacy</strong>,
            <strong> Swawlamban</strong>, and
            <strong> Aakriti</strong>, the Foundation continues to
            create pathways for education, healthcare, livelihood,
            entrepreneurship and long-term social impact.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="featured__right">
          <div className="featured__poster-wrap">
            <img
              src="/ambulance.png"
              alt="HER Kadam Ambulance"
              className="featured__poster"
            />
          </div>
        </div>

      </div>

      {/* CAROUSEL */}
      {/* CAROUSEL SECTION */}
<div className="featured__gallery">

  <div className="featured__gallery-header">
    <h2 className="featured__gallery-title">
      Ongoing Campaigns
    </h2>

    <p className="featured__gallery-subtitle">
      Explore our ongoing initiatives dedicated to empowering women,
      improving healthcare, promoting education, and creating
      sustainable opportunities across communities.
    </p>
  </div>

  <div className="featured__carousel-wrap">

    <button
      className="featured__nav featured__nav--prev"
      onClick={prev}
      disabled={offset === 0}
      aria-label="Previous"
    >
      &#8249;
    </button>

    <div className="featured__carousel-viewport">
      <div
        className="featured__carousel-track"
        style={{
          transform: `translateX(-${offset * (100 / visibleCount)}%)`,
        }}
      >
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className="featured__thumb"
          >
            <img
              src={src}
              alt={`Campaign ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>

    <button
      className="featured__nav featured__nav--next"
      onClick={next}
      disabled={offset >= maxOffset}
      aria-label="Next"
    >
      &#8250;
    </button>

  </div>

</div>

    </section>
  )
}