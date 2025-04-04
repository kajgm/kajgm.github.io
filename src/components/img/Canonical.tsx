export function Canonical() {
  return (
    <a href="https://canonical.com/" target="_blank">
      <svg
        className="w-16 h-16 group-hover:drop-shadow-xl duration-500 group-hover:duration-500 group-hover:ease-in-out transition-all group-hover:scale-110"
        viewBox="0 0 100 100"
      >
        <circle fill="#f47421" cy="50" cx="50" r="45" />
        <circle
          fill="none"
          stroke="#ffffff"
          strokeWidth="8.55"
          cx="50"
          cy="50"
          r="21.825"
        />
        <g id="friend">
          <circle fill="#f47421" cx="19.4" cy="50" r="8.4376" />
          <path stroke="#f47421" strokeWidth="3.2378" d="M67,50H77" />
          <circle fill="#ffffff" cx="19.4" cy="50" r="6.00745" />
        </g>
        <use xlinkHref="#friend" transform="rotate(120,50,50)" />
        <use xlinkHref="#friend" transform="rotate(240,50,50)" />
      </svg>
    </a>
  );
}
