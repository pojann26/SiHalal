import React from 'react';
import { statusMeta } from '../../data/mockData';

export function StatusBadge({ status, label: customLabel }) {
  const meta = statusMeta[status] || {
    label: customLabel || status,
    className: 'neutral',
    bg: 'bg-gray-100',
    text: 'text-gray-700',
  };

  return (
    <span className={`badge ${meta.className}`}>
      <span className="dot" />
      {customLabel || meta.label}
    </span>
  );
}

export function Pill({ children, variant = 'neutral' }) {
  return (
    <span className={`pill ${variant}`}>
      {children}
    </span>
  );
}
