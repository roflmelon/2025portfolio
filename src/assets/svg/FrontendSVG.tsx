const FrontendSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="relative group size-14">
      <circle
        className="transition-all duration-500 group-hover:fill-[#61DAFB] fill-white"
        cx="12" cy="12" r="2.5"
      />
      <g stroke="white" strokeWidth="1.5" fill="none">
        <ellipse
          className="transition-all duration-500 group-hover:stroke-[#61DAFB] stroke-white"
          rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60, 12, 12)"
        />
        <ellipse
          className="transition-all duration-500 group-hover:stroke-[#61DAFB] stroke-white"
          rx="10" ry="4.5" cx="12" cy="12" transform="rotate(-60, 12, 12)"
        />
        <ellipse
          className="transition-all duration-500 group-hover:stroke-[#61DAFB] stroke-white"
          rx="10" ry="4.5" cx="12" cy="12"
        />
      </g>
    </svg>
  )
}

export default FrontendSVG
