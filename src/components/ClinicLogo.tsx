import React, { useId } from 'react';

interface ClinicLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  /** Primary navy/slate color for outer rings, dots and typography */
  navyColor?: string;
  /** Accent medical teal/cyan color for the center continuous line tooth illustration */
  accentColor?: string;
}

/**
 * ODONTOLOGY - The Dental Clinic Circular Brand Logo
 * Features:
 * - Transparent background
 * - Outer concentric rings and circular typography in deep professional navy/slate (#1E293B)
 * - Center continuous-line tooth illustration in medical teal/cyan (#0284C7)
 * - Scalable vector graphic maintaining crispness at any dimension
 */
export function ClinicLogo({
  size = 46,
  className = '',
  navyColor = '#1E293B',
  accentColor = '#0284C7',
  ...props
}: ClinicLogoProps) {
  const rawId = useId();
  const idPrefix = rawId.replace(/[^a-zA-Z0-9]/g, '');
  const topArcId = `top-arc-${idPrefix}`;
  const bottomArcId = `bottom-arc-${idPrefix}`;

  return (
    <svg
      id="clinic-brand-logo"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="ODONTOLOGY - The Dental Clinic Logo"
      {...props}
    >
      <defs>
        {/* Top Arc for "ODONTOLOGY" (Left to Right along the upper curve) */}
        <path
          id={topArcId}
          d="M 23 100 A 77 77 0 0 1 177 100"
          fill="none"
        />
        {/* Bottom Arc for "The DENTAL Clinic" (Left to Right along the lower curve, upright text) */}
        <path
          id={bottomArcId}
          d="M 24 102 A 77 77 0 0 0 176 102"
          fill="none"
        />
      </defs>

      {/* Outer Ring */}
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke={navyColor}
        strokeWidth="3.6"
      />

      {/* Inner Concentric Ring */}
      <circle
        cx="100"
        cy="100"
        r="68"
        stroke={navyColor}
        strokeWidth="2.4"
      />

      {/* Top Typography: ODONTOLOGY */}
      <text
        fill={navyColor}
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="16.5"
        fontWeight="800"
        letterSpacing="0.14em"
      >
        <textPath href={`#${topArcId}`} startOffset="50%" textAnchor="middle">
          ODONTOLOGY
        </textPath>
      </text>

      {/* Decorative Lateral Dots */}
      <circle cx="23" cy="100" r="3.2" fill={navyColor} />
      <circle cx="177" cy="100" r="3.2" fill={navyColor} />

      {/* Bottom Typography: The DENTAL Clinic */}
      <text
        fill={navyColor}
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="12.5"
        letterSpacing="0.04em"
      >
        <textPath href={`#${bottomArcId}`} startOffset="50%" textAnchor="middle">
          <tspan fontWeight="600">The </tspan>
          <tspan fontWeight="800">DENTAL</tspan>
          <tspan fontWeight="600"> Clinic</tspan>
        </textPath>
      </text>

      {/* Center Continuous-Line Tooth Illustration in Medical Teal/Cyan (#0284C7) */}
      {/* 
        Graceful single continuous-line art forming the tooth crown lobes,
        central occlusal fossa, bilateral roots, and an expressive fluid flourish loop.
      */}
      <g stroke={accentColor} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Primary Tooth Contour with Continuous Ribbon Flourish */}
        <path
          d="M 80 134
             C 74 124 70 106 70 90
             C 70 74 76 64 86 62
             C 93 60 98 66 102 67
             C 106 68 111 60 119 60
             C 129 60 135 70 134 88
             C 133 103 125 118 115 133
             C 108 141 99 143 94 135
             C 89 125 93 109 103 95
             C 114 79 127 72 137 77
             C 146 83 150 100 143 115
             C 136 129 119 136 105 135
             C 93 134 85 120 81 106
             C 77 92 78 78 86 63"
        />
        {/* Subtle Inner Micro-Detail Line for Tooth Pulp/Canal Articulation */}
        <path
          d="M 102 67 C 102 85 106 108 118 126"
          strokeWidth="1.8"
          strokeOpacity="0.85"
        />
      </g>
    </svg>
  );
}
