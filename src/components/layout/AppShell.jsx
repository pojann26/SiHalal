import React from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { BottomNav } from './BottomNav';
import { Footer } from './Footer';
import { Toast } from '../common/Toast';
import { FloatingChatButton } from '../common/FloatingChatButton';

export function AppShell({
  children,
  activeTab,
  currentTitle,
  onNavigate,
  toastMessage,
  onNotify,
  user
}) {
  return (
    <div className="app-shell">
      {/* Desktop Sidebar */}
      <Sidebar active={activeTab} onNavigate={onNavigate} user={user} />

      {/* Main Content Area */}
      <main className="main-content">
        <Topbar
          title={currentTitle}
          onNotify={onNotify}
          onOpenHelp={() => onNavigate('assistant')}
          user={user}
          onOpenProfile={() => onNavigate('profile')}
        />

        <div className="page-body-container">
          {children}
        </div>

        <Footer />
      </main>

      {/* Floating AI Chat Button at Bottom-Right Corner */}
      <FloatingChatButton activeTab={activeTab} onNavigate={onNavigate} />

      {/* Mobile 5-Slot Bottom Navigation with Center FAB (Profil on leftmost) */}
      <BottomNav active={activeTab} onNavigate={onNavigate} />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
