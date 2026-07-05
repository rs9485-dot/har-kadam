export default function TimelineNode({ name, year, image, left, top }) {
  return (
    <div className="timeline-node" style={{ left, top }}>
      <div className="timeline-node__photo-wrap">
        <img src={image} alt={name} className="timeline-node__photo" />
      </div>
      <div className="timeline-node__label">
        <span className="timeline-node__name">{name}</span>
        <span className="timeline-node__year">({year})</span>
      </div>
    </div>
  )
}
