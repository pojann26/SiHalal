import React, { useState } from 'react';
import { Check, FileText, ExternalLink, Info, ShieldCheck, Download, Printer } from 'lucide-react';
import { StatusBadge } from '../../components/common/Badge';
import { SJPHModal } from './SJPHModal';

export function Documents({ onNotify, user }) {
  const [showModal, setShowModal] = useState(false);

  const checklist = [
    'Profil usaha (NIB & KBLI)',
    'Self-assessment fasilitas & dapur',
    'Matriks bahan SJPH (10 bahan lolos)',
    'Hasil validasi titik kritis AI (OCR+NLP)',
    'Surat Pernyataan Bebas Babi & Tim Halal',
  ];

  const businessName = user?.businessName || 'SpiegDit';

  const handleOpenPreview = () => {
    setShowModal(true);
    onNotify('Membuka pratinjau dokumen resmi SJPH format BPJPH.');
  };

  return (
    <div className="page">
      {/* Hero Strip */}
      <section className="hero-strip document-hero">
        <div>
          <span className="eyebrow">APPLY · DOCUMENT GENERATOR (BPJPH FORMAT)</span>
          <h2>Dokumen SJPH</h2>
          <p>Draf dokumen Sistem Jaminan Produk Halal standar Kepkaban BPJPH No. 57/2021 siap diunduh dalam format PDF resmi.</p>
        </div>
        <div className="document-status">
          <StatusBadge status="verified" label="100% Siap Dibuat" />
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
            <span className="completion">100%</span>
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
              <strong>Draf SJPH Resmi · {businessName}</strong>
              <span>Format Kepkaban BPJPH No. 57/2021 (5 Halaman)</span>
            </div>
            <button
              className="primary-btn flex items-center gap-1.5"
              onClick={handleOpenPreview}
            >
              <FileText size={14} /> Generate & Review
            </button>
          </div>
        </div>

        {/* Paper Preview Panel */}
        <div className="panel preview-panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">OFFICIAL PREVIEW (A4)</span>
              <h3>Pratinjau dokumen</h3>
            </div>
            <button
              className="ghost-button flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
              onClick={handleOpenPreview}
            >
              Buka preview penuh <ExternalLink size={12} />
            </button>
          </div>

          <div
            className="paper cursor-pointer hover:border-emerald-500/50 transition-all group"
            onClick={handleOpenPreview}
            title="Klik untuk melihat dokumen penuh format BPJPH"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="paper-kicker flex items-center gap-1 text-emerald-800">
                <ShieldCheck size={12} /> BPJPH KEPKABAN NO. 57/2021
              </div>
              <span className="text-[8px] font-bold text-gray-500 bg-gray-200/80 px-1.5 py-0.5 rounded">
                DRAFT RESMI
              </span>
            </div>

            <h4 className="group-hover:text-emerald-800 transition-colors">
              Dokumen SJPH
            </h4>
            <div className="paper-line" />
            <div className="paper-grid">
              <span>Nama Usaha</span>
              <strong className="text-emerald-900">{businessName}</strong>
              <span>Skala Usaha</span>
              <strong>Usaha Mikro & Kecil (UMK)</strong>
              <span>Pimpinan Usaha</span>
              <strong>{user?.name || 'Fauzan Akbar'}</strong>
              <span>Penyelia Halal</span>
              <strong>{user?.halalSupervisor || 'Ahmad Dahlan'}</strong>
              <span>Nomor NIB</span>
              <strong className="font-mono">{user?.nib || '1234567890123'}</strong>
              <span>Status Pre-Audit</span>
              <strong className="text-emerald-700">Lolos Verifikasi AI</strong>
            </div>

            <div className="mt-3 pt-2.5 border-t border-gray-200 flex items-center justify-between text-[8px] text-gray-500">
              <span>5 Halaman: Bab I, Bab II, Lampiran 1, 3, 5, 6, 9 & 16</span>
              <span className="font-bold text-emerald-700 group-hover:underline">Klik untuk Buka →</span>
            </div>
          </div>

          <div className="preview-actions grid grid-cols-2 gap-2 mt-3">
            <button
              className="secondary-btn flex items-center justify-center gap-1.5"
              onClick={handleOpenPreview}
            >
              <Printer size={13} /> Cetak (A4)
            </button>
            <button
              className="primary-btn flex items-center justify-center gap-1.5"
              onClick={handleOpenPreview}
            >
              <Download size={13} /> Unduh PDF
            </button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="validation-note">
        <span className="inline-flex items-center justify-center text-emerald-400">
          <Info size={14} />
        </span>
        <div>
          <strong>Informasi Standar BPJPH</strong>
          <p>
            Dokumen yang dihasilkan sistem ini telah disesuaikan dengan format resmi <em>FORMAT_TEMPLATE_SJPH</em> (Kepkaban BPJPH No. 57/2021) dan siap dicetak atau diunggah langsung ke portal resmi <strong>SIHALAL BPJPH</strong> untuk pengajuan sertifikasi halal.
          </p>
        </div>
      </div>

      {/* Official SJPH Modal */}
      <SJPHModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        user={user}
        onNotify={onNotify}
      />
    </div>
  );
}

