import React from 'react';
import { ArrowRight, Check, Boxes, FileText, AlertTriangle } from 'lucide-react';
import { Pill } from '../../components/common/Badge';
import { MetricCard } from '../../components/common/MetricCard';
import { ProgressRing } from '../../components/common/ProgressRing';
import { Timeline } from './Timeline';
import { AlertSection } from './AlertSection';
import { RecentActivity } from './RecentActivity';

export function Dashboard({ onNavigate, onNotify, user }) {
  return (
    <div className="page">
      {/* Hero Welcome Card */}
      <section className="hero-card">
        <div className="hero-copy">
          <Pill variant="neutral">{user?.businessName || 'SpiegDit'} · Pra-audit sertifikasi halal</Pill>
          <h2>Selamat datang, {user?.name ? user.name.split(' ')[0] : 'Fauzan'}.</h2>
          <p>
            Siapkan data usaha <strong>{user?.businessName || 'SpiegDit'}</strong>, validasi bahan baku, dan hasilkan draf SJPH sebelum proses pengajuan resmi.
          </p>
          <div className="hero-actions">
            <button
              className="primary-btn flex items-center gap-1.5"
              onClick={() => onNavigate('assessment')}
            >
              Lanjutkan persiapan <ArrowRight size={14} />
            </button>
            <button
              className="secondary-btn"
              onClick={() => onNavigate('ingredients')}
            >
              Kelola bahan
            </button>
          </div>
        </div>

        <div className="hero-progress">
          <ProgressRing percentage={72} label="72%" sublabel="siap" />
          <div className="progress-copy">
            <strong>Persiapan SJPH</strong>
            <span>3 dari 5 tahapan selesai</span>
          </div>
        </div>
      </section>

      {/* Metric Cards Grid */}
      <div className="stats-grid">
        <MetricCard
          icon={<Check size={18} strokeWidth={2.5} />}
          label="Self-Assessment"
          value="100%"
          caption="Selesai"
          tone="green"
        />
        <MetricCard
          icon={<Boxes size={18} strokeWidth={2.2} />}
          label="Bahan tervalidasi"
          value="8 / 10"
          caption="2 perlu perhatian"
          tone="blue"
        />
        <MetricCard
          icon={<FileText size={18} strokeWidth={2.2} />}
          label="Dokumen SJPH"
          value="1"
          caption="Draf tersedia"
          tone="purple"
        />
        <MetricCard
          icon={<AlertTriangle size={18} strokeWidth={2.2} />}
          label="Perlu perhatian"
          value="2"
          caption="1 review · 1 berisiko"
          tone="orange"
        />
      </div>

      {/* Content Grid: Workflow & Attention */}
      <section className="content-grid">
        <Timeline onNavigate={onNavigate} />
        <AlertSection onNavigate={onNavigate} />
      </section>

      {/* Recent Activity Section */}
      <RecentActivity onNotify={onNotify} />
    </div>
  );
}
