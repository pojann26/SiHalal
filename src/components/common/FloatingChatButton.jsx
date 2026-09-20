import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

export function FloatingChatButton({ activeTab, onNavigate }) {
  const isChatActive = activeTab === 'assistant';

  return (
    <div className="floating-chat-wrapper">
      <button
        type="button"
        className={`floating-ai-btn ${isChatActive ? 'active' : ''}`}
        onClick={() => onNavigate(isChatActive ? 'dashboard' : 'assistant')}
        aria-label="Buka Asisten Chatbot AI Halal"
        title="Tanya Asisten Halal"
      >
        <div className="floating-pulse-ring" />
        <div className="floating-btn-content">
          <Bot size={22} strokeWidth={2.2} className="floating-bot-icon" />
          <span className="floating-ai-badge">AI</span>
        </div>
      </button>
    </div>
  );
}
