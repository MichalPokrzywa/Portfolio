// src/pages/Experience.js
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SiUnity, SiGit, SiBlender, SiDotnet, SiAndroid, SiCplusplus } from 'react-icons/si';
import { TbBrandCSharp, TbCpu } from 'react-icons/tb';
import { FaSteam, FaTrophy } from 'react-icons/fa';
import { experienceCategories, experienceItems } from '../data/experienceData';

const PX_PER_MONTH = 13;
const AXIS_PADDING_MONTHS = 1;
const LANE_ORDER = ['work', 'education', 'activity'];

const TECH_ICONS = {
  unity: { Icon: SiUnity, label: 'Unity' },
  csharp: { Icon: TbBrandCSharp, label: 'C#' },
  cpp: { Icon: SiCplusplus, label: 'C++' },
  git: { Icon: SiGit, label: 'Git' },
  blender: { Icon: SiBlender, label: 'Blender' },
  dotnet: { Icon: SiDotnet, label: '.NET' },
  steam: { Icon: FaSteam, label: 'Steam' },
  android: { Icon: SiAndroid, label: 'Mobile' },
  hardware: { Icon: TbCpu, label: 'Hardware' },
};

const categoryLabels = experienceCategories.reduce(
  (acc, cat) => ({ ...acc, [cat.id]: cat.label }),
  {}
);

// 'YYYY-MM' -> liczba miesięcy od roku 0 (klucz pozycji na osi)
const monthIndex = (ym) => {
  const [year, month] = ym.split('-').map(Number);
  return year * 12 + (month - 1);
};

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [pinnedId, setPinnedId] = useState(null);
  const [progress, setProgress] = useState(0);
  const bodyRef = useRef(null);

  // zakres osi + linie lat, wspólne dla wszystkich widoków
  const { maxIdx, chartHeight, years } = useMemo(() => {
    let min = Infinity;
    let max = -Infinity;
    experienceItems.forEach((item) => {
      min = Math.min(min, monthIndex(item.start));
      max = Math.max(max, monthIndex(item.end));
    });
    min -= AXIS_PADDING_MONTHS;
    max += AXIS_PADDING_MONTHS;
    const height = (max - min + 1) * PX_PER_MONTH;

    const yearLines = [];
    for (let year = Math.floor(min / 12); year <= Math.floor(max / 12) + 1; year += 1) {
      const januaryIdx = year * 12;
      if (januaryIdx >= min && januaryIdx <= max) {
        yearLines.push({ year, top: (max - januaryIdx) * PX_PER_MONTH });
      }
    }
    return { maxIdx: max, chartHeight: height, years: yearLines };
  }, []);

  // tory z pozycjami pasków; nakładające się okresy trafiają do sąsiednich kolumn
  const isSingle = activeCategory !== 'all';
  const lanes = useMemo(() => {
    const visible = isSingle ? [activeCategory] : LANE_ORDER;
    // w widoku jednej kategorii paski są szersze, mocniej rozsunięte
    // i przesunięte w stronę środka toru
    const colStep = isSingle ? 100 : 30;
    const barWidth = isSingle ? 26 : 20;
    return visible.map((cat) => {
      const columnEnds = [];
      const items = experienceItems
        .filter((item) => item.category === cat)
        .map((item) => ({ ...item, startIdx: monthIndex(item.start), endIdx: monthIndex(item.end) }))
        .sort((a, b) => a.startIdx - b.startIdx)
        .map((item) => {
          let col = columnEnds.findIndex((end) => end < item.startIdx);
          if (col === -1) col = columnEnds.length;
          columnEnds[col] = item.endIdx;
          const top = (maxIdx - item.endIdx) * PX_PER_MONTH;
          const isPoint = item.startIdx === item.endIdx;
          return {
            ...item,
            col,
            top,
            height: (item.endIdx - item.startIdx + 1) * PX_PER_MONTH,
            isPoint,
            btnTop: isPoint ? top + PX_PER_MONTH / 2 - 11 : top,
          };
        });

      // etykiety: wspólna kolumna na prawo od najszerszego stosu pasków,
      // rozsuwane w pionie, gdy wypadłyby na tej samej wysokości
      const maxCol = items.reduce((acc, item) => Math.max(acc, item.col), 0);
      let lastLabelBottom = -Infinity;
      [...items]
        .sort((a, b) => a.btnTop - b.btnTop)
        .forEach((item) => {
          const labelTop = Math.max(item.btnTop, lastLabelBottom + 2);
          item.labelDy = labelTop - item.btnTop;
          item.labelDx = barWidth + 8 + (maxCol - item.col) * colStep;
          item.left = isSingle ? `calc(32% + ${item.col * colStep}px)` : 6 + item.col * colStep;
          lastLabelBottom = labelTop + 15;
        });

      return { cat, items };
    });
  }, [activeCategory, isSingle, maxIdx]);

  // postęp rysowania osi zależny od scrolla
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return undefined;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = bodyRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.92 - rect.top) / rect.height));
      setProgress((prev) => (Math.abs(prev - p) > 0.004 ? p : prev));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const selectCategory = (id) => {
    setActiveCategory(id);
    setPinnedId(null);
  };

  // panel pokazuje tylko wpis wybrany kliknięciem; hover jedynie podświetla
  const activeId = pinnedId;
  const activeItem = activeId ? experienceItems.find((item) => item.id === activeId) : null;

  return (
    <section className="section">
      <div className="section__header fade-in">
        <h1 className="section__title">Experience</h1>
        <p className="section__subtitle">
          My path through work, university and everything around game dev, drawn to scale.
          Click an entry on the timeline to see the details.
        </p>
      </div>

      <div className="timeline-filters fade-in" role="tablist" aria-label="Experience categories">
        {experienceCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`timeline-filter ${activeCategory === cat.id ? 'is-active' : ''}`}
            onClick={() => selectCategory(cat.id)}
          >
            {cat.color && (
              <span className="timeline-filter__dot" style={{ background: cat.color }} />
            )}
            {cat.label}
          </button>
        ))}
      </div>

      <div className="tl-layout fade-in">
        <div className="tl-chart">
          <div className="tl-chart__heads" key={`heads-${activeCategory}`}>
            {lanes.map((lane) => (
              <span key={lane.cat} className={`tl-lane-head tl-lane-head--${lane.cat}`}>
                {categoryLabels[lane.cat]}
              </span>
            ))}
          </div>

          <div className="tl-body" ref={bodyRef} style={{ height: chartHeight }}>
            <div className="tl-gutter" aria-hidden="true">
              {years.map(({ year, top }) => (
                <span key={year} className="tl-year" style={{ top }}>
                  {year}
                </span>
              ))}
            </div>

            {years.map(({ year, top }) => (
              <span key={year} className="tl-gridline" style={{ top }} aria-hidden="true" />
            ))}

            <div className="tl-axis" aria-hidden="true">
              <span className="tl-axis__fill" style={{ height: `${progress * 100}%` }} />
            </div>

            <div className="tl-lanes" key={`lanes-${activeCategory}`}>
              {lanes.map((lane) => (
                <div
                  key={lane.cat}
                  className={`tl-lane tl-lane--${lane.cat} ${isSingle ? 'tl-lane--single' : ''}`}
                >
                  {lane.items.map((item, index) => {
                    const isPinned = pinnedId === item.id;
                    const drawn = item.top <= progress * chartHeight + 1;
                    // przypinamy na pointerdown: rosnący panel potrafi „ukraść”
                    // mouseup i zdarzenie click nie doszłoby do przycisku
                    const togglePin = () => setPinnedId(isPinned ? null : item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`tl-item ${drawn ? 'is-visible' : ''} ${
                          activeId === item.id ? 'is-active' : ''
                        }`}
                        style={{
                          top: item.btnTop,
                          height: item.isPoint ? 22 : item.height,
                          left: item.left,
                          '--delay': `${index * 90}ms`,
                        }}
                        onPointerDown={(e) => {
                          if (e.button === 0) togglePin();
                        }}
                        onClick={(e) => {
                          if (e.detail === 0) togglePin();
                        }}
                        aria-pressed={isPinned}
                        aria-label={`${item.title}, ${item.org}, ${item.period}`}
                      >
                        <span className={item.isPoint ? 'tl-item__diamond' : 'tl-item__bar'} />
                        <span
                          className="tl-item__label"
                          style={{ left: item.labelDx, top: item.labelDy }}
                        >
                          {item.shortName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside
          className={`tl-panel ${activeItem ? `is-open tl-panel--${activeItem.category}` : ''}`}
          aria-live="polite"
        >
          {activeItem && (
            <div className="tl-panel__content" key={activeItem.id}>
              {activeItem.image && (
                <img
                  className="tl-panel__image"
                  src={activeItem.image}
                  alt={activeItem.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <div className="tl-panel__meta">
                <span className="tl-panel__cat">{categoryLabels[activeItem.category]}</span>
                <span className="tl-panel__period">{activeItem.period}</span>
              </div>
              <h2 className="tl-panel__title">{activeItem.title}</h2>
              <p className="tl-panel__org">
                {activeItem.org}
                {activeItem.place ? ` · ${activeItem.place}` : ''}
              </p>
              <p className="tl-panel__desc">{activeItem.description}</p>
              {activeItem.achievement && (
                <p className="tl-panel__achievement">
                  <FaTrophy aria-hidden="true" /> {activeItem.achievement}
                </p>
              )}
              {activeItem.tech && activeItem.tech.length > 0 && (
                <div className="tl-panel__tech">
                  {activeItem.tech.map((key) => {
                    const tech = TECH_ICONS[key];
                    if (!tech) return null;
                    return (
                      <span key={key} className="tl-tech">
                        <tech.Icon aria-hidden="true" /> {tech.label}
                      </span>
                    );
                  })}
                </div>
              )}
              {activeItem.link && (
                <Link to={activeItem.link} className="btn btn--ghost tl-panel__link">
                  View project →
                </Link>
              )}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
