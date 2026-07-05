export default function ImpactStat({ value, title, description }) {
  return (
    <div className="impact-stat">
      <div className="impact-stat__value">{value}</div>
      <h3 className="impact-stat__title">{title}</h3>
      <p className="impact-stat__desc">{description}</p>
    </div>
  )
}
