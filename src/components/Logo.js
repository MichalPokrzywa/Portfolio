// src/components/Logo.js
// Autorski znak: ligatura MP (wspólna kreska M i P) w ściętej ramce,
// limonkowy diament na ścięciu — spójny z motywem chamfer całej strony.
import React from 'react';

export default function Logo({ size = 44 }) {
  return (
    <svg
      className="logo"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Logo MP"
    >
      <defs>
        <linearGradient id="logoFrame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7d39eb" />
          <stop offset="1" stopColor="#b79cff" />
        </linearGradient>
      </defs>
      <path
        d="M5 5 H35 L43 13 V43 H5 Z"
        fill="#16121f"
        stroke="url(#logoFrame)"
        strokeWidth="2"
      />
      <path d="M39 6 L42 9 L39 12 L36 9 Z" fill="#c6ff33" />
      <polyline
        points="11,33 11,16 17.5,23.5 24,16 24,33"
        fill="none"
        stroke="#f5f4fa"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
      <path
        d="M24 17.5 H31.5 L34.5 20.5 V22 L31.5 25 H24"
        fill="none"
        stroke="#f5f4fa"
        strokeWidth="3"
      />
      <path d="M11 38 H21" stroke="#c6ff33" strokeWidth="2.5" />
    </svg>
  );
}
