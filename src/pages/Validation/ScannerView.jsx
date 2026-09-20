import React, { useState } from 'react';
import {
  Camera,
  Upload,
  ScanLine,
  Check,
  AlertTriangle,
  X,
  Edit3,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  RefreshCw,
  Info
} from 'lucide-react';
import { ocrPresets } from '../../data/mockData';
import { StatusBadge } from '../../components/common/Badge';

export function ScannerView({ onSaveIngredient, onCancel, onNotify }) {
  const [selectedPresetId, setSelectedPresetId] = useState(ocrPresets[0].id);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState('ready'); // ready -> preprocessing -> ocr -> completed
  const [isEditingRawText, setIsEditingRawText] = useState(false);

  // Active preset data
  const currentPreset = ocrPresets.find((p) => p.id === selectedPresetId) || ocrPresets[0];
  const [customRawText, setCustomRawText] = useState(currentPreset.rawText);

  // Handle Preset Change
  const handlePresetSelect = (presetId) => {
    setSelectedPresetId(presetId);
    const chosen = ocrPresets.find((p) => p.id === presetId);
    if (chosen) {
      setCustomRawText(chosen.rawText);
      setScanStep('ready');
      setIsEditingRawText(false);
    }
  };

  // Trigger Scanning Simulation
  const handleStartScan = () => {
    setIsScanning(true);
    setScanStep('preprocessing');

    setTimeout(() => {
      setScanStep('ocr');
      setTimeout(() => {
        setScanStep('completed');
        setIsScanning(false);
        if (onNotify) {
          onNotify(`Ekstraksi OCR & Validasi NLP berhasil untuk ${currentPreset.productName}.`);
        }
      }, 1100);
    }, 900);
  };

  return (
    <div className="scanner-container">
      {/* Header with KMS Indicator */}
      <div className="scanner-header-strip">
        <div className="flex items-center gap-2">
          <span className="kms-badge capture">KMS: CAPTURE</span>
          <span className="kms-sub-badge">INBOUND LOGISTICS</span>
        </div>
        <h2>Pemindai Bahan Baku & OCR</h2>
        <p>
          Foto label kemasan atau nota belanja bahan. Sistem akan mengekstraksi teks komposisi secara otomatis.
        </p>
      </div>

      {/* Preset Selector for Demonstration */}
      <div className="preset-selector-bar">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
          Pilih Contoh Kemasan (Simulasi Input):
        </span>
        <div className="preset-buttons">
          {ocrPresets.map((preset) => (
            <button
              key={preset.id}
              className={`preset-btn ${selectedPresetId === preset.id ? 'active' : ''}`}
              onClick={() => handlePresetSelect(preset.id)}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Camera Viewfinder View */}
      <div className="viewfinder-card">
        <div className="viewfinder-overlay">
          {/* Target Focus Corners */}
          <div className="corner top-left" />
          <div className="corner top-right" />
          <div className="corner bottom-left" />
          <div className="corner bottom-right" />

          {/* Laser Scanning Line Animation */}
          {isScanning && <div className="laser-scanning-line" />}

          {/* Center Guide Frame */}
          <div className="viewfinder-guide-box">
            <div className="product-tag-preview">
              <Camera size={14} className="inline mr-1" />
              <span>{currentPreset.productName} ({currentPreset.category})</span>
            </div>
            <p className="guide-text">
              Posisikan teks komposisi kemasan di dalam area kotak fokus
            </p>
          </div>

          {/* Preprocessing Notification (Bottleneck 1 Solution) */}
          {scanStep === 'preprocessing' && (
            <div className="preprocessing-toast">
              <RefreshCw size={14} className="animate-spin text-emerald-300" />
              <span>
                <strong>Image Pre-processing:</strong> Koreksi distorsi, penajaman tepi, dan optimasi rasio kontras...
              </span>
            </div>
          )}

          {scanStep === 'ocr' && (
            <div className="preprocessing-toast">
              <Sparkles size={14} className="animate-pulse text-emerald-300" />
              <span>
                <strong>OCR Engine:</strong> Membaca dan mengekstrak teks komposisi kemasan...
              </span>
            </div>
          )}
        </div>

        {/* Viewfinder Controls */}
        <div className="viewfinder-controls">
          <label className="upload-btn-label">
            <Upload size={16} />
            <span>Upload Foto</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={() => handleStartScan()}
            />
          </label>

          <button
            className="capture-shutter-btn"
            onClick={handleStartScan}
            disabled={isScanning}
            title="Ambil Foto & Scan OCR"
            aria-label="Ambil Foto & Scan OCR"
          >
            <div className="shutter-inner">
              <ScanLine size={24} />
            </div>
          </button>

          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Tutup
          </button>
        </div>
      </div>

      {/* Extracted OCR & Validation Results (Shows after completed scan) */}
      {scanStep === 'completed' && (
        <div className="scan-results-wrapper animate-fadeIn">
          {/* Extracted Text with Fallback Option (Bottleneck 1 Fallback) */}
          <section className="panel ocr-extracted-panel">
            <div className="panel-header flex-col sm:flex-row sm:items-center items-start justify-between gap-3 mb-4">
              <div>
                <span className="eyebrow text-emerald-700">HASIL EKSTRAKSI OCR</span>
                <h3 className="text-base font-bold text-gray-900 mt-1">Teks Komposisi Terbaca</h3>
              </div>
              <button
                className="ghost-button flex items-center gap-1.5 text-emerald-800 text-xs self-end sm:self-auto py-1 px-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-100 transition-colors"
                onClick={() => setIsEditingRawText(!isEditingRawText)}
              >
                <Edit3 size={13} />
                <span>{isEditingRawText ? 'Selesai Edit' : 'Koreksi Teks (Fallback)'}</span>
              </button>
            </div>

            {isEditingRawText ? (
              <div className="fallback-edit-box">
                <textarea
                  className="fallback-textarea"
                  value={customRawText}
                  onChange={(e) => setCustomRawText(e.target.value)}
                  rows={4}
                  placeholder="Koreksi teks komposisi jika terdapat kesalahan baca OCR..."
                />
                <small className="text-gray-500 block mt-2">
                  💡 <em>Mekanisme fallback:</em> Koreksi manual memastikan proses pre-audit tidak terhenti akibat foto buram.
                </small>
              </div>
            ) : (
              <div className="ocr-text-display">
                <p>{customRawText}</p>
              </div>
            )}
          </section>

          {/* NLP Semantic Matcher & Critical Points (Bottleneck 2 Solution) */}
          <section className="panel nlp-analysis-panel">
            <div className="panel-header flex-col sm:flex-row sm:items-center items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="kms-badge share">KMS: SHARE</span>
                  <span className="eyebrow">NLP SEMANTIC MATCHER</span>
                </div>
                <h3 className="text-base font-bold text-gray-900">Hasil Analisis Semantik & Titik Kritis</h3>
              </div>
              <div className="self-start sm:self-auto">
                <StatusBadge status={currentPreset.status} />
              </div>
            </div>

            {/* Matched DB Result */}
            <div className="matched-db-box">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-3.5 mb-3.5 border-b border-gray-200/70">
                <div className="bg-white/90 p-3.5 rounded-xl border border-gray-100 shadow-2xs">
                  <span className="text-xs text-gray-500 block mb-1 font-medium">Nama Dagang Terdeteksi</span>
                  <strong className="text-sm font-bold text-gray-900 block">{currentPreset.productName}</strong>
                </div>
                <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-100 shadow-2xs">
                  <span className="text-xs text-emerald-800 block mb-1 font-medium">Pencocokan Semantik BPJPH</span>
                  <strong className="text-sm font-bold text-emerald-800 block">{currentPreset.matchedDbName}</strong>
                </div>
              </div>

              {/* Confidence Score Bar */}
              <div className="confidence-meter pt-1">
                <div className="flex justify-between text-xs mb-1.5 font-medium text-gray-700">
                  <span>Confidence Score AI</span>
                  <span className="font-bold text-gray-900">{currentPreset.confidence}%</span>
                </div>
                <div className="bar">
                  <div
                    style={{ width: `${currentPreset.confidence}%` }}
                    className={
                      currentPreset.status === 'verified'
                        ? 'bg-emerald-600'
                        : currentPreset.status === 'review'
                        ? 'bg-amber-500'
                        : 'bg-red-500'
                    }
                  />
                </div>
              </div>
            </div>

            {/* Critical Points Breakdown */}
            <div className="critical-points-section">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">
                Pemetaan Titik Kritis Komposisi:
              </h4>
              <div className="critical-points-list">
                {currentPreset.criticalAnalysis.map((item, idx) => (
                  <div key={idx} className={`critical-item ${item.status}`}>
                    <div className="critical-icon">
                      {item.status === 'safe' ? (
                        <Check size={14} strokeWidth={3} className="text-emerald-700" />
                      ) : item.status === 'warning' || item.status === 'critical' ? (
                        <AlertTriangle size={14} strokeWidth={2.5} className="text-amber-700" />
                      ) : (
                        <X size={14} strokeWidth={3} className="text-red-700" />
                      )}
                    </div>
                    <div className="critical-copy">
                      <strong>{item.ingredient}</strong>
                      <p>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternative Recommendations (Procurement Module / Bottleneck 2 Solution) */}
            {currentPreset.recommendations && currentPreset.recommendations.length > 0 && (
              <div className="alternatives-box">
                <div className="flex items-center gap-1.5 mb-2">
                  <ShieldCheck size={16} className="text-emerald-700" />
                  <h4 className="text-xs font-bold text-gray-900 uppercase">
                    Rekomendasi Bahan Pengganti Halal (Procurement)
                  </h4>
                </div>
                <p className="text-xs text-gray-600 mb-3">
                  Gunakan bahan alternatif berikut yang telah terverifikasi resmi oleh BPJPH untuk mempercepat proses persetujuan:
                </p>

                <div className="alternatives-list">
                  {currentPreset.recommendations.map((alt, idx) => (
                    <div key={idx} className="alt-item-card">
                      <div>
                        <strong>{alt.name}</strong>
                        <span className="text-xs text-gray-500 block">
                          Merek: {alt.brand} · ID Halal: <span className="font-mono text-emerald-800">{alt.bpjphId}</span>
                        </span>
                      </div>
                      <button
                        className="secondary-btn text-xs"
                        onClick={() => {
                          if (onNotify) {
                            onNotify(`Rekomendasi "${alt.name}" dipilih sebagai bahan rujukan.`);
                          }
                        }}
                      >
                        Gunakan Ini
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Save to Matriks Bahan (KMS: Store) */}
          <div className="scanner-action-footer">
            <button
              className="secondary-btn"
              onClick={handleStartScan}
            >
              Scan Ulang
            </button>
            <button
              className="primary-btn flex items-center gap-1.5"
              onClick={() => {
                if (onSaveIngredient) {
                  onSaveIngredient({
                    name: currentPreset.productName,
                    category: currentPreset.category,
                    status: currentPreset.status,
                    source: 'Hasil OCR + NLP',
                    date: 'Hari ini',
                    bpjphId: currentPreset.status === 'verified' ? 'ID00110000012340121' : '-'
                  });
                }
              }}
            >
              <span>Simpan ke Matriks Bahan SJPH [KMS: Store]</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
