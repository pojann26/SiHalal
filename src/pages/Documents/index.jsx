import React from 'react';
import { Check, FileText, ExternalLink, Info } from 'lucide-react';
import { StatusBadge } from '../../components/common/Badge';

export function Documents({ onNotify }) {
  const checklist = [
    'Profil usaha',
    'Self-assessment fasilitas',
    'Matriks bahan SJPH',
    'Hasil validasi bahan',
    'Data proses produksi',
  ];

  return (
    <div className="page">
      {/* Hero Strip */}
      <section className="hero-strip document-hero">
        <div>
          <span className="eyebrow">APPLY · DOCUMENT GENERATOR</span>
          <h2>Dokumen SJPH</h2>
          <p>Gunakan data yang sudah disiapkan untuk menghasilkan draf dokumen sebelum pengajuan resmi.</p>
        </div>
        <div className="document-status">
          <StatusBadge status="verified" label="Siap dibuat" />
        </div>
      </section>

      {/* Content Grid */}
      <section className="content-grid">
        {/* Checklist Panel */}
        <div className="panel checklist-panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">REQUIREMENTS</span>
              <h3>Kesiapan dokumen</h3>
            </div>
            <span className="completion">92%</span>
          </div>

          {checklist.map((label) => (
            <div className="check-row" key={label}>
              <span className="check">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>{label}</span>
              <span className="check-status">Lengkap</span>
            </div>
          ))}

          <div className="generate-card">
            <div className="document-icon">
              <FileText size={20} strokeWidth={2} />
            </div>
            <div>
              <strong>Draf SJPH</strong>
              <span>Terakhir dibuat 20 Sep 2026 · 10:42</span>
            </div>
            <button
              className="primary-btn"
              onClick={() => onNotify('Draf SJPH berhasil dibuat pada prototype.')}
            >
              Generate PDF
            </button>
          </div>
        </div>

        {/* Paper Preview Panel */}
        <div className="panel preview-panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">PREVIEW</span>
              <h3>Pratinjau dokumen</h3>
            </div>
            <button
              className="ghost-button flex items-center gap-1"
              onClick={() => onNotify('Preview PDF dibuka pada prototype.')}
            >
              Buka preview <ExternalLink size={12} />
            </button>
          </div>

          <div className="paper">
            <div className="paper-kicker">SISTEM JAMINAN PRODUK HALAL</div>
            <h4>Dokumen SJPH</h4>
            <div className="paper-line" />
            <div className="paper-grid">
              <span>Nama Usaha</span>
              <strong>Fauzan Culinary</strong>
              <span>Status</span>
              <strong>Draft Pre-Audit</strong>
              <span>Tanggal</span>
              <strong>20 September 2026</strong>
            </div>
            <div className="paper-block" />
            <div className="paper-block short" />
            <div className="paper-block" />
          </div>

          <div className="preview-actions">
            <button
              className="secondary-btn full"
              onClick={() => onNotify('File PDF contoh belum benar-benar dihasilkan.')}
            >
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="validation-note">
        <span className="inline-flex items-center justify-center">
          <Info size={13} />
        </span>
        <div>
          <strong>Penting</strong>
          <p>
            Dokumen yang dibuat aplikasi ini adalah draf persiapan dan bukan bukti penerbitan sertifikat halal.
          </p>
        </div>
      </div>
    </div>
  );
}
