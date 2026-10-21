type WaveDividerProps = {
  className?: string;
  flip?: boolean;
  from?: string;
  to?: string;
};

export function WaveDivider({
  className = "",
  flip = false,
  from = "#FDF6E3",
  to = "#F7E9C8",
}: WaveDividerProps) {
  return (
    <div
      className={`relative h-16 w-full overflow-hidden md:h-24 ${className}`}
      aria-hidden="true"
      style={{ background: from }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full ${flip ? "rotate-180" : ""}`}
      >
        <path d={WAVE_PATH} fill={to} />
      </svg>
    </div>
  );
}

const WAVE_PATH =
  "M0,64 C240,120 480,0 720,40 C960,80 1200,100 1440,48 L1440,120 L0,120 Z";

export function WavyPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="duo-waves"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(35)"
        >
          <path
            d="M0 25 Q 12.5 10 25 25 T 50 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#duo-waves)" />
    </svg>
  );
}
