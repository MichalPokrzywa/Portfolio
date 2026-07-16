// src/components/ShaderBackground.js
// Tło "neon street": fioletowa mgła + dwie warstwy techno-ornamentów
// (kafelki SVG w index.css) dryfujące wolno w dół i w bok.
import React from 'react';

export default function ShaderBackground() {
  return (
    <div className="city-bg" aria-hidden="true">
      <span className="city-bg__glow city-bg__glow--violet" />
      <span className="city-bg__glow city-bg__glow--lime" />
      <div className="city-bg__ornaments">
        <div className="city-bg__ornaments-inner">
          <span className="city-bg__pattern city-bg__pattern--a" />
          <span className="city-bg__pattern city-bg__pattern--b" />
        </div>
      </div>
      <span className="city-bg__edge city-bg__edge--left" />
      <span className="city-bg__edge city-bg__edge--right" />
    </div>
  );
}
