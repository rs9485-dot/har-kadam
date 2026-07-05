import './VideoSection.css'

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="section-container">
        <div className="video-section__player">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/wZB5PwmPw90"
            title="HER Kadam"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}