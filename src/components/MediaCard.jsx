export default function MediaCard({ title, text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="media-card"
    >
      <div className="media-card__badge">
        Media Coverage
      </div>

      <h3 className="media-card__title">
        {title}
      </h3>

      <p className="media-card__text">
        {text}
      </p>
    </a>
  )
}