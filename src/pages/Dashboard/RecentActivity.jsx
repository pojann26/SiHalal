import React from 'react';
import { Boxes, Check, FileText } from 'lucide-react';
import { recentActivities } from '../../data/mockData';

const iconMap = {
  Boxes: Boxes,
  Check: Check,
  FileText: FileText,
};

export function ActivityRow({ iconType, title, desc, status, time, tone }) {
  const IconComp = iconMap[iconType] || Check;

  return (
    <div className="activity-row">
      <div className={`activity-icon ${tone}`}>
        <IconComp size={15} strokeWidth={2.2} />
      </div>
      <div className="activity-copy">
        <strong>{title}</strong>
        <span>{desc}</span>
      </div>
      <span className={`status-text ${tone}`}>{status}</span>
      <span className="activity-time">{time}</span>
    </div>
  );
}

export function RecentActivity({ onNotify }) {
  return (
    <section className="panel recent-panel">
      <div className="panel-header">
        <div>
          <span className="eyebrow">RECENT ACTIVITY</span>
          <h3>Aktivitas terbaru</h3>
        </div>
        <button
          className="text-button"
          onClick={() => onNotify('Filter aktivitas belum diaktifkan pada prototype.')}
        >
          Filter
        </button>
      </div>
      <div className="activity-table">
        {recentActivities.map((act) => (
          <ActivityRow key={act.title} {...act} />
        ))}
      </div>
    </section>
  );
}
