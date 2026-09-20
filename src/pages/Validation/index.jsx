import React, { useState } from 'react';
import { Check, AlertTriangle, X, ArrowRight, Info, Camera, ListFilter } from 'lucide-react';
import { validationItems, statusMeta } from '../../data/mockData';
import { StatusBadge } from '../../components/common/Badge';
import { MetricCard } from '../../components/common/MetricCard';
import { ScannerView } from './ScannerView';

export function Validation({ onNavigate, onNotify, initialMode = 'scanner' }) {
  const [viewMode, setViewMode] = useState(initialMode); // 'scanner' | 'summary'

  const handleSaveIngredient = (newIngredient) => {
    if (onNotify) {
      onNotify(`"${newIngredient.name}" berhasil disimpan ke Matriks Bahan SJPH [KMS: Store]!`);
    }
    // Navigate to ingredients matrix view
    if (onNavigate) {
      onNavigate('ingredients');
    }
  };

  return (
    <div className="page">
      {/* Top Mode Switcher Bar */}
      <div className="validation-tab-bar">
        <button
          className={`validation-tab-btn ${viewMode === 'scanner' ? 'active' : ''}`}
          onClick={() => setViewMode('scanner')}
        >
          <Camera size={15} />
          <span>Pemindai OCR (Kamera)</span>
        </button>
        <button
          className={`validation-tab-btn ${viewMode === 'summary' ? 'active' : ''}`}
          onClick={() => setViewMode('summary')}
        >
          <ListFilter size={15} />
          <span>Hasil Validasi Keseluruhan</span>
        </button>
      </div>

      {/* Mode 1: Interactive Scanner View */}
      {viewMode === 'scanner' ? (
        <ScannerView
          onSaveIngredient={handleSaveIngredient}
          onCancel={() => setViewMode('summary')}
          onNotify={onNotify}
        />
      ) : (
        /* Mode 2: Summary Validation Results */
        <div className="validation-summary-view">
          {/* Header Strip with KMS indicator */}
          <section className="hero-strip">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="kms-badge share">KMS: SHARE</span>
                <span className="eyebrow">NLP SEMANTIC MATCHER</span>
              </div>
              <h2>Hasil Validasi Bahan</h2>
              <p>
                AI mencocokkan nama bahan, istilah teknis, dan nama dagang dengan data rujukan BPJPH untuk mendeteksi titik kritis.
              </p>
            </div>
            <div className="validation-score">
              <strong>18/20</strong>
              <span>bahan siap</span>
            </div>
          </section>

          {/* Stats Grid */}
          <section className="stats-grid compact">
            <MetricCard
              icon={<Check size={18} strokeWidth={2.5} />}
              label="Terverifikasi"
              value="18"
              caption="90% dari bahan"
              tone="green"
            />
            <MetricCard
              icon={<AlertTriangle size={18} strokeWidth={2.2} />}
              label="Perlu review"
              value="1"
              caption="Periksa sebelum lanjut"
              tone="orange"
            />
            <MetricCard
              icon={<X size={18} strokeWidth={2.5} />}
              label="Berisiko"
              value="1"
              caption="Butuh tindakan"
              tone="red"
            />
          </section>

          {/* Validation Panel */}
          <section className="panel validation-panel">
            <div className="panel-header">
              <div>
                <span className="eyebrow">AI REVIEW</span>
                <h3>Daftar hasil pencocokan</h3>
              </div>
              <button
                className="secondary-btn flex items-center gap-1"
                onClick={() => setViewMode('scanner')}
              >
                <Camera size={14} />
                <span>Pindai Bahan Baru</span>
              </button>
            </div>

            {validationItems.map((item) => (
              <div className="validation-item" key={item.name}>
                <div className="validation-name">
                  <div className={`status-icon ${statusMeta[item.status].className}`}>
                    {item.status === 'verified' ? (
                      <Check size={16} strokeWidth={3} />
                    ) : item.status === 'review' ? (
                      <AlertTriangle size={16} strokeWidth={2.5} />
                    ) : (
                      <X size={16} strokeWidth={3} />
                    )}
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>Referensi BPJPH: {item.ref}</span>
                    {item.criticalPoints && (
                      <small className="text-gray-500 block mt-0.5">
                        {item.criticalPoints}
                      </small>
                    )}
                  </div>
                </div>

                <div className="confidence">
                  <div className="confidence-top">
                    <span>Confidence</span>
                    <strong>{item.confidence}%</strong>
                  </div>
                  <div className="bar">
                    <div style={{ width: `${item.confidence}%` }} />
                  </div>
                </div>

                <StatusBadge status={item.status} />

                {item.status !== 'verified' ? (
                  <button
                    className="text-button flex items-center gap-1"
                    onClick={() => onNavigate('ingredients')}
                  >
                    Detail <ArrowRight size={12} />
                  </button>
                ) : (
                  <span className="muted">Tidak ada tindakan</span>
                )}
              </div>
            ))}
          </section>

          {/* Validation Note */}
          <div className="validation-note">
            <span className="inline-flex items-center justify-center">
              <Info size={13} />
            </span>
            <div>
              <strong>Catatan Pre-Audit Jaminan Produk Halal</strong>
              <p>
                Hasil AI adalah alat bantu pemeriksaan awal untuk mencegah penolakan berkas di SIHALAL. Bahan yang memerlukan pemeriksaan tetap perlu diverifikasi bukti sertifikat halalnya.
              </p>
            </div>
          </div>

          {/* Sticky Actions */}
          <div className="sticky-actions">
            <button className="secondary-btn" onClick={() => onNavigate('ingredients')}>
              Kembali ke Bahan
            </button>
            <button
              className="primary-btn flex items-center gap-1.5"
              onClick={() => onNavigate('documents')}
            >
              Lanjutkan ke Dokumen SJPH [KMS: Apply] <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
