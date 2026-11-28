const LOGO = () => {
  return (
    <div className="text-center mb-10">
      <div className="flex justify-center mb-4">
        <svg
          className="h-10 text-[#1D1D1F] transition-opacity hover:opacity-90"
          viewBox="0 0 540 100"
          fill="currentColor"
        >
          {/* Power Icon */}
          <g transform="translate(10, 10)">
            <path
              d="M 40 12 A 32 32 0 1 0 56 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <line
              x1="48"
              y1="4"
              x2="48"
              y2="36"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </g>
          {/* CIVIC TECH SAINT JOHN */}
          <text
            x="110"
            y="46"
            fontFamily="system-ui, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
            fontSize="28"
            fontWeight="600"
            letterSpacing="1.5"
            fill="currentColor"
          >
            CIVIC TECH SAINT JOHN
          </text>
          {/* Technology + Social Good */}
          <text
            x="112"
            y="74"
            fontFamily="system-ui, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
            fontSize="18"
            fontWeight="600"
            letterSpacing="0.5"
            fill="currentColor"
          >
            Technology + Social Good
          </text>
        </svg>
      </div>
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
        Volunteer & Community Intake
      </h1>
      <p className="text-xs sm:text-sm text-[#86868B] mt-1.5 font-normal">
        Build open-source solutions for Greater Saint John.
      </p>
    </div>
  );
};

export default LOGO;
