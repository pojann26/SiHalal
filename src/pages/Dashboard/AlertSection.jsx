import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export function AlertItem({ title, text, onClick }) {
  return (
    <button className="alert-item" onClick={onClick}>
      <div className="alert-icon">
        <AlertTriangle size={13} strokeWidth={2.5} />
      </div>
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
      <span className="arrow">
        <ArrowRight size={13} />
      </span>
    </button>
  );
}

export function AlertSection({ onNavigate }) {
  return (
    <div className="panel alert-panel">
      <div className="panel-header">
        <div>
          <span className="eyebrow">ATTENTION</span>
          <h3>Perlu perhatian</h3>
        </div>
        <span className="count-badge">2</span>
      </div>
      <div className="alert-list">
        <AlertItem
          title="Saus Tiram ABC"
          text="Nama dagang belum cocok sempurna dengan database."
          onClick={() => onNavigate('validation')}
        />
        <AlertItem
          title="Sodium Benzoate"
          text="Perlu pemeriksaan sumber bahan tambahan."
          onClick={() => onNavigate('validation')}
        />
      </div>
      <button
        className="secondary-btn full"
        onClick={() => onNavigate('validation')}
      >
        Tinjau semua masalah
      </button>
    </div>
  );
}
