import React from 'react';

export function ProgressRing({ percentage = 72, label = "72%", sublabel = "siap" }) {
  return (
    <div className="ring" style={{
      background: `conic-gradient(var(--green, #1f7a57) 0 ${percentage}%, #d7e5dd ${percentage}% 100%)`
    }}>
      <div className="ring-inner">
        <strong>{label}</strong>
        <span>{sublabel}</span>
      </div>
    </div>
  );
}
