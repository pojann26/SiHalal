import React from 'react';
import { Bell, HelpCircle } from 'lucide-react';

export function Topbar({ title, onNotify, onOpenHelp, user, onOpenProfile }) {
  return (
    <header className="topbar">
      <div
        className="topbar-brand-group cursor-pointer"
        onClick={onOpenProfile}
        role="button"
        tabIndex={0}
        title="Buka Profil Usaha"
      >
        <div className="mobile-brand-mark">
          {user?.avatarText || 'H'}
        </div>
        <div>
          <div className="eyebrow flex items-center gap-1.5">
            <span>{user?.businessName || 'SpiegDit'}</span>
            <span className="mobile-only-pill">UMKM</span>
          </div>
          <h1>{title}</h1>
        </div>
      </div>

      <div className="topbar-actions">
        <button
          className="icon-button"
          title="Notifikasi"
          onClick={() => onNotify('Tidak ada notifikasi baru.')}
          aria-label="Notifikasi"
        >
          <Bell size={16} />
        </button>
        <button
          className="help-button"
          title="Bantuan"
          onClick={onOpenHelp}
          aria-label="Bantuan"
        >
          <HelpCircle size={16} />
        </button>
      </div>
    </header>
  );
}
