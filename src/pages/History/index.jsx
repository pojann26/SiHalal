import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { historyRows } from '../../data/mockData';

export function History() {
  return (
    <div className="page">
      <section className="panel history-panel">
        <div className="panel-header wide">
          <div>
            <span className="eyebrow">AUDIT TRAIL</span>
            <h2>Riwayat Aktivitas</h2>
            <p>Jejak aktivitas untuk proses pre-audit dan penyusunan SJPH.</p>
          </div>
          <button className="secondary-btn">Export</button>
        </div>

        {historyRows.map((row) => (
          <div className="history-row" key={row.date + row.title}>
            <div className="history-time">{row.date}</div>
            <div className="history-event">
              <strong>{row.title}</strong>
              <span>{row.desc}</span>
            </div>
            <span className={`history-status ${row.tone}`}>{row.status}</span>
            <button className="row-more" aria-label="Aksi lainnya">
              <MoreHorizontal size={16} />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
