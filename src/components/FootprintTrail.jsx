import FootprintIcon from './FootprintIcon'
import './FootprintTrail.css'

export default function FootprintTrail({
  className = '',
  count = 4,
  direction = 'down-right',
}) {
  return (
    <div className={`footprint-trail ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <FootprintIcon
          key={i}
          left={i % 2 === 0}
          className={`footprint footprint-${direction}`}
          style={{
            top: `${i * 34}px`,
            left:
              direction === 'down-right'
                ? `${(i % 2 === 0 ? 0 : 18) + i * 8}px`
                : 'auto',
            right:
              direction === 'down-left'
                ? `${(i % 2 === 0 ? 0 : 18) + i * 8}px`
                : 'auto',
            transform: `rotate(${i % 2 === 0 ? -18 : 18}deg)`,
          }}
        />
      ))}
    </div>
  )
}