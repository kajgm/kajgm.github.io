export function Content() {
  return (
    <div className="relative top-14 space-y-5 group">
      <div className="flex">
        <div className="mx-auto">
          <a href={"https://canonical.com/"}>
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
        </div>
      </div>
      <div className="flex desktop:opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
        <div className="mx-auto">
          <p className="ml-5 mr-5 desktop:ml-0 desktop:mr-0 font-medium text-light-content-text-color dark:text-dark-content-text-color transition duration-500">
            Currently a Cloud Support Associate Engineer @ <b>Canonical</b>
          </p>
        </div>
      </div>
    </div>
  );
}
