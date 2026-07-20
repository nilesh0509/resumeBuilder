const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#logoGradient)" />
    <path
      d="M16 8L20 12L16 16L12 12L16 8Z"
      fill="white"
      opacity="0.9"
    />
    <path
      d="M10 16L14 20L10 24L6 20L10 16Z"
      fill="white"
      opacity="0.6"
    />
    <path
      d="M22 16L26 20L22 24L18 20L22 16Z"
      fill="white"
      opacity="0.8"
    />
    <path
      d="M16 20L18 22L16 24L14 22L16 20Z"
      fill="white"
      opacity="0.5"
    />
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="32" y2="32">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;