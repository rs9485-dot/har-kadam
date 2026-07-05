export default function FootprintIcon({
  className = '',
  style = {},
  left = false,
}) {
  return (
    <svg
      className={className}
      style={{
        ...style,
        transform: `${style.transform || ''} ${left ? 'scaleX(-1)' : ''}`,
      }}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="#F58220">
        {/* Heel */}
        <ellipse
          cx="31"
          cy="42"
          rx="10"
          ry="16"
          transform="rotate(-18 31 42)"
        />

        {/* Toes */}
        <circle cx="18" cy="14" r="4.3" />
        <circle cx="25" cy="10" r="4.8" />
        <circle cx="33" cy="9" r="5.1" />
        <circle cx="41" cy="12" r="4.4" />
        <circle cx="47" cy="18" r="3.8" />
      </g>
    </svg>
  )
}