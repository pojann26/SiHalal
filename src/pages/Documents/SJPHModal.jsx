import React, { useState, useRef, useEffect } from 'react';
import { X, Download, Printer, FileText, CheckCircle2, Loader2, ZoomIn, ZoomOut, Smartphone, Monitor } from 'lucide-react';
import { SJPHDocument } from './SJPHDocument';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export function SJPHModal({ isOpen, onClose, user, onNotify }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [zoom, setZoom] = useState(1);
  const previewDocRef = useRef(null);
  const offscreenDocRef = useRef(null);

  const businessName = user?.businessName || 'SpiegDit';

  // Responsive auto-fit zoom for mobile screens
  useEffect(() => {
    if (!isOpen) return;

    const autoFit = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 850) {
        // Fit within screen with padding: 794px is base A4 width
        const availableWidth = Math.max(300, screenWidth - 36);
        const fitScale = Math.min(1, Math.max(0.38, availableWidth / 820));
        setZoom(Number(fitScale.toFixed(2)));
      } else {
        setZoom(0.95);
      }
    };

    autoFit();
    window.addEventListener('resize', autoFit);
    return () => window.removeEventListener('resize', autoFit);
  }, [isOpen]);

  if (!isOpen) return null;

  // Direct PDF Download using html2canvas & jsPDF with fixed standard A4 offscreen canvas
  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    onNotify('Sedang meng-generate dokumen PDF resmi SJPH...');

    try {
      // Use off-screen document container to guarantee standard A4 dimensions on ALL devices
      const docElement = offscreenDocRef.current || previewDocRef.current;
      if (!docElement) throw new Error('Elemen dokumen tidak ditemukan');

      const pages = docElement.querySelectorAll('.a4-page');
      if (!pages || pages.length === 0) throw new Error('Halaman A4 tidak ditemukan');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = 210; // A4 standard width in mm

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        // Render high-resolution canvas from fixed unscaled A4 page
        const canvas = await html2canvas(page, {
          scale: 2, // 300 DPI equivalent
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          windowWidth: 1200, // Force standard desktop viewport during capture
          width: 794,
          height: 1123,
        });

        const imgData = canvas.toDataURL('image/png');
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        if (i > 0) {
          pdf.addPage('a4', 'p');
        }

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);
      }

      pdf.save(`SJPH_${businessName}_2026.pdf`);
      onNotify(`Dokumen "SJPH_${businessName}_2026.pdf" berhasil diunduh!`);
    } catch (err) {
      console.error('PDF generation error:', err);
      onNotify('Gagal mengunduh PDF otomatis. Gunakan tombol "Cetak / Simpan PDF".');
    } finally {
      setIsGenerating(false);
    }
  };

  // Direct Print / Save as PDF via browser
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#181d1a] border border-[#2d3830] rounded-2xl w-full max-w-5xl max-h-[96vh] flex flex-col shadow-2xl overflow-hidden animate-fadeIn">
        {/* Modal Header */}
        <div className="p-3 sm:p-5 border-b border-[#2d3830] flex flex-wrap items-center justify-between gap-3 bg-[#131714]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                  Dokumen SJPH Resmi · {businessName}
                </h3>
                <span className="hidden xs:inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 size={10} /> Standar BPJPH
                </span>
              </div>
              <p className="text-[11px] text-gray-400 line-clamp-1">
                Format Kepkaban BPJPH No. 57/2021 (5 Halaman Lengkap · A4)
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrint}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-semibold rounded-lg bg-[#242c26] hover:bg-[#2e3931] text-gray-200 border border-[#37443a] flex items-center gap-1.5 transition-colors"
              title="Cetak atau Simpan PDF via Browser"
            >
              <Printer size={13} /> <span className="hidden xs:inline">Cetak /</span> Save PDF
            </button>

            <button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-lg shadow-emerald-900/30 transition-all disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={13} className="animate-spin" /> Menyiapkan...
                </>
              ) : (
                <>
                  <Download size={13} /> Unduh PDF (.pdf)
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Tutup"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Viewport Control Bar */}
        <div className="px-3 sm:px-4 py-2 bg-[#1b211d] border-b border-[#2d3830] flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1 text-gray-300 overflow-x-auto py-0.5">
            <span className="text-gray-500 mr-1 text-[11px] hidden sm:inline">Navigasi:</span>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap transition-colors ${
                activeTab === 'all' ? 'bg-emerald-600 text-white font-bold' : 'hover:bg-white/5 text-gray-400'
              }`}
            >
              Semua (5 Hlm)
            </button>
            <button
              onClick={() => setActiveTab('cover')}
              className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap transition-colors ${
                activeTab === 'cover' ? 'bg-emerald-600 text-white font-bold' : 'hover:bg-white/5 text-gray-400'
              }`}
            >
              Cover & Bab I
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap transition-colors ${
                activeTab === 'materials' ? 'bg-emerald-600 text-white font-bold' : 'hover:bg-white/5 text-gray-400'
              }`}
            >
              Matriks Bahan (Hal 4)
            </button>
            <button
              onClick={() => setActiveTab('statements')}
              className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap transition-colors ${
                activeTab === 'statements' ? 'bg-emerald-600 text-white font-bold' : 'hover:bg-white/5 text-gray-400'
              }`}
            >
              Bebas Babi (Hal 5)
            </button>
          </div>

          <div className="flex items-center gap-2 text-gray-400 ml-auto">
            <span className="text-[11px] hidden xs:inline">Zoom:</span>
            <button
              onClick={() => setZoom((z) => Math.max(0.3, Number((z - 0.1).toFixed(2))))}
              className="p-1 hover:bg-white/5 rounded"
              title="Perkecil"
            >
              <ZoomOut size={13} />
            </button>
            <span className="font-mono text-gray-200 text-[11px] w-9 text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.min(1.5, Number((z + 0.1).toFixed(2))))}
              className="p-1 hover:bg-white/5 rounded"
              title="Perbesar"
            >
              <ZoomIn size={13} />
            </button>
          </div>
        </div>

        {/* Modal Body - Document Preview Canvas */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-8 bg-[#0e110f] flex justify-center">
          <div
            ref={previewDocRef}
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'top center',
              marginBottom: `${Math.max(0, (1 - zoom) * -800)}px`,
            }}
            className="transition-transform duration-200"
          >
            <SJPHDocument user={user} />
          </div>
        </div>
      </div>

      {/* ====================================================
          ISOLATED OFF-SCREEN STANDARD A4 CONTAINER FOR PDF EXPORT
          This guarantees exact standard A4 proportions (794x1123px)
          on ANY mobile/desktop device, immune to screen width or zoom!
          ==================================================== */}
      <div
        ref={offscreenDocRef}
        style={{
          position: 'fixed',
          left: '-9999px',
          top: 0,
          width: '794px',
          zIndex: -9999,
          pointerEvents: 'none',
          opacity: 0,
        }}
      >
        <SJPHDocument user={user} />
      </div>
    </div>
  );
}

