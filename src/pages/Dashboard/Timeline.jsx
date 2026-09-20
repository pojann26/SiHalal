import React from 'react';
import { Check } from 'lucide-react';

export function TimelineItem({ number, title, subtitle, status, action, onClick }) {
  return (
    <div className={`timeline-item ${status}`}>
      <div className="timeline-node">
        {status === 'done' ? <Check size={14} strokeWidth={3} /> : number}
      </div>
      <div className="timeline-copy">
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>
      <button
        className={`timeline-action ${status}`}
        onClick={onClick}
        disabled={status === 'locked'}
      >
        {action}
      </button>
    </div>
  );
}

export function Timeline({ onNavigate }) {
  return (
    <div className="panel large-panel">
      <div className="panel-header">
        <div>
          <span className="eyebrow">WORKFLOW</span>
          <h3>Progres persiapan</h3>
        </div>
        <button className="ghost-button" onClick={() => onNavigate('history')}>
          Lihat riwayat
        </button>
      </div>
      <div className="timeline">
        <TimelineItem
          number="01"
          title="Self-Assessment Fasilitas"
          subtitle="Kesiapan dapur & fasilitas halal"
          status="done"
          action="Selesai"
        />
        <TimelineItem
          number="02"
          title="Input & Pemindaian Bahan"
          subtitle="18 bahan baku berhasil dicatat via OCR"
          status="done"
          action="Selesai"
        />
        <TimelineItem
          number="03"
          title="Validasi Semantik AI"
          subtitle="16 bahan lolos pencocokan BPJPH"
          status="done"
          action="Selesai"
        />
        <TimelineItem
          number="04"
          title="Resolusi Bahan & Alternatif"
          subtitle="2 bahan kritis memerlukan rekomendasi alternatif"
          status="current"
          action="Periksa"
          onClick={() => onNavigate('validation')}
        />
        <TimelineItem
          number="05"
          title="Generate Dokumen SJPH"
          subtitle="Draf PDF otomatis siap unggah ke SIHALAL"
          status="locked"
          action="Terkunci"
        />
      </div>
    </div>
  );
}
