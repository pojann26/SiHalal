import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { assessmentQuestions } from '../../data/mockData';

export function Assessment({
  progress,
  step,
  setStep,
  answers,
  setAnswers,
  onNotify
}) {
  const current = assessmentQuestions[step - 1];
  const answer = answers[step];

  const choose = (value) => setAnswers((prev) => ({ ...prev, [step]: value }));

  const next = () => {
    if (!answer) return onNotify('Pilih salah satu jawaban terlebih dahulu.');
    if (step < assessmentQuestions.length) {
      setStep(step + 1);
    } else {
      onNotify('Self-assessment berhasil disimpan.');
    }
  };

  return (
    <div className="page narrow-page">
      <section className="panel workflow-panel">
        <div className="workflow-head">
          <div>
            <span className="eyebrow">CAPTURE · 01</span>
            <h2>Self-Assessment Kesiapan</h2>
            <p>Jawab pertanyaan berikut untuk memetakan kesiapan dapur dan fasilitas usaha.</p>
          </div>
          <div className="mini-progress">
            <strong>{progress}%</strong>
            <span>selesai</span>
          </div>
        </div>

        {/* Stepper Header */}
        <div className="stepper">
          <div className="stepper-line">
            <div style={{ width: `${Math.max(0, progress)}%` }} />
          </div>
          {assessmentQuestions.map((_, idx) => (
            <div
              key={idx}
              className={`step-dot ${idx + 1 <= step ? 'current' : ''}`}
            >
              {idx + 1 < step ? <Check size={12} strokeWidth={3} /> : idx + 1}
            </div>
          ))}
        </div>

        {/* Current Question */}
        <div className="question-card">
          <span className="question-number">
            Pertanyaan {step} dari {assessmentQuestions.length}
          </span>
          <h3>{current}</h3>
          <div className="choice-stack">
            {['Ya', 'Tidak'].map((option) => (
              <button
                key={option}
                className={`choice ${answer === option ? 'selected' : ''}`}
                onClick={() => choose(option)}
              >
                <span className="radio">
                  {answer === option ? <Check size={12} strokeWidth={3} /> : null}
                </span>
                {option}
                <span className="choice-arrow">
                  <ArrowRight size={14} />
                </span>
              </button>
            ))}
          </div>

          <p className="helper">
            <span className="inline-flex items-center justify-center">
              <Info size={12} />
            </span>
            Pilih jawaban sesuai kondisi usaha saat ini. Kamu dapat meninjau kembali jawaban sebelum dokumen digenerate.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="workflow-actions">
          <button
            className="secondary-btn"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
          >
            Sebelumnya
          </button>
          <button className="primary-btn flex items-center gap-1.5" onClick={next}>
            {step === assessmentQuestions.length ? 'Simpan assessment' : 'Lanjutkan'}
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* Info Strip */}
      <section className="info-strip">
        <div className="info-icon">
          <Check size={14} strokeWidth={3} />
        </div>
        <div>
          <strong>Tujuan tahap ini</strong>
          <span>Hasil assessment menjadi bagian dari data yang digunakan saat menyiapkan draf SJPH.</span>
        </div>
      </section>
    </div>
  );
}
