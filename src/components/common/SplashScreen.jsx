import React, { useState, useEffect } from 'react';

export function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(20);
  const [statusText, setStatusText] = useState('Memuat sistem pre-audit...');
  const [isExiting, setIsExiting] = useState(false);

  // Trigger smooth exit transition
  const triggerExit = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      onFinish();
    }, 350); // Fast, silky smooth 350ms fade-out
  };

  useEffect(() => {
    // Smooth progress animation over ~2 seconds
    const t1 = setTimeout(() => {
      setProgress(55);
      setStatusText('Memuat database bahan halal BPJPH...');
    }, 500);

    const t2 = setTimeout(() => {
      setProgress(85);
      setStatusText('Menyiapkan mesin NLP Semantic Matcher...');
    }, 1100);

    const t3 = setTimeout(() => {
      setProgress(100);
      setStatusText('Sistem siap');
    }, 1700);

    const t4 = setTimeout(() => {
      triggerExit();
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div
      className={`minimal-splash-container ${isExiting ? 'fade-out' : ''}`}
      onClick={triggerExit}
      role="button"
      tabIndex={0}
      title="Klik untuk langsung masuk"
    >
      {/* Main Center Content */}
      <div className="minimal-splash-center">
        {/* App Icon */}
        <div className="minimal-app-icon-wrapper">
          <svg
            className="minimal-app-icon"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="halalSquircleBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="35%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <linearGradient id="halalLaserGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
              </linearGradient>
              <filter id="halalIconShadow" x="-15%" y="-10%" width="130%" height="135%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#059669" floodOpacity="0.38" />
              </filter>
            </defs>

            {/* Squircle Background */}
            <rect
              x="6"
              y="6"
              width="108"
              height="108"
              rx="32"
              fill="url(#halalSquircleBg)"
              filter="url(#halalIconShadow)"
            />

            {/* 4 Corner Scanner Brackets */}
            <path
              d="M26 38 V32 C26 28.686 28.686 26 32 26 H38"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M82 26 H88 C91.314 26 94 28.686 94 32 V38"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M26 82 V88 C26 91.314 28.686 94 32 94 H38"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M82 94 H88 C91.314 94 94 91.314 94 88 V82"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Center Halal & Food Ingredient Emblem */}
            <circle cx="60" cy="60" r="28" fill="#ffffff" fillOpacity="0.18" />

            <g transform="translate(42, 38)">
              <path
                d="M18 4 C10 4 4 12 4 22 C4 32 12 40 22 40 C28 40 33 36 36 31 C32 33 27 33 22 30 C15 26 13 18 16 11 C18 7 21 5 25 4 C22 4 20 4 18 4 Z"
                fill="#ffffff"
              />
              <path
                d="M22 10 C22 10 32 12 34 22 C34 30 26 34 26 34 C26 34 28 26 24 20 C21 16 22 10 22 10 Z"
                fill="#ecfdf5"
              />
              <path
                d="M14 23 L18 27 L28 17"
                stroke="#047857"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Laser Scanner Horizontal Beam */}
            <line
              x1="18"
              y1="60"
              x2="102"
              y2="60"
              stroke="url(#halalLaserGlow)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Brand Name */}
        <h1 className="minimal-splash-title">
          <span>Si</span>Halal
        </h1>

        {/* Subtitle / Tagline from Paper */}
        <p className="minimal-splash-tagline">
          Asisten Pre-Audit & Otomatisasi SJPH UMKM
        </p>
      </div>

      {/* Bottom Progress Bar & Loading Indicator */}
      <div className="minimal-splash-footer">
        <div className="minimal-progress-track">
          <div
            className="minimal-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="minimal-loading-text">{statusText}</span>
      </div>

      {/* Bottom Home Indicator */}
      <div className="minimal-home-indicator" />
    </div>
  );
}
