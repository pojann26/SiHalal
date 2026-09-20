import React from 'react';
import { Bot, Send } from 'lucide-react';

export function Assistant({ chat, setChat, input, setInput }) {
  const suggestions = [
    'Apa arti bahan perlu pemeriksaan?',
    'Bagaimana menyiapkan SJPH?',
    'Apa langkah berikutnya?'
  ];

  const send = (text = input) => {
    const clean = text.trim();
    if (!clean) return;

    setChat((prev) => [
      ...prev,
      { role: 'user', text: clean },
      {
        role: 'ai',
        text: 'Untuk kebutuhan pre-audit, saya sarankan memeriksa status bahan yang ditandai “Perlu pemeriksaan”, lalu pastikan data pendukungnya tersedia sebelum membuat draf SJPH.'
      }
    ]);
    setInput('');
  };

  return (
    <div className="page assistant-page">
      <section className="assistant-shell panel">
        {/* Header */}
        <div className="assistant-header">
          <div className="assistant-avatar">
            <Bot size={20} strokeWidth={2.2} />
          </div>
          <div>
            <strong>Asisten Halal</strong>
            <span>Online · AI guidance</span>
          </div>
          <span className="ai-badge">AI</span>
        </div>

        {/* Chat Body */}
        <div className="chat-body">
          {chat.map((m, i) => (
            <div className={`message-row ${m.role}`} key={i}>
              <div className={`message ${m.role}`}>{m.text}</div>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="suggestions">
          {suggestions.map((q) => (
            <button key={q} onClick={() => send(q)}>
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Tulis pertanyaan tentang persiapan halal..."
          />
          <button onClick={() => send()} aria-label="Kirim pesan">
            <Send size={15} />
          </button>
        </div>

        <div className="assistant-disclaimer">
          Asisten memberikan panduan umum untuk pre-audit dan bukan keputusan sertifikasi resmi.
        </div>
      </section>
    </div>
  );
}
