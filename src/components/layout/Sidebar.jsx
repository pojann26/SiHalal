import React from 'react';
import {
  LayoutDashboard,
  ClipboardCheck,
  Boxes,
  Sparkles,
  FileText,
  Bot,
  History,
  HelpCircle,
  MoreHorizontal,
  ArrowRight
} from 'lucide-react';
import { navItems } from '../../data/navigation';

const iconMap = {
  LayoutDashboard,
  ClipboardCheck,
  Boxes,
  Sparkles,
  FileText,
  Bot,
  History,
};

export function Sidebar({ active, onNavigate, user }) {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <div
        className="brand"
        onClick={() => onNavigate('dashboard')}
        role="button"
        tabIndex={0}
      >
        <div className="brand-mark">H</div>
        <div>
          <div className="brand-title">SiHalal</div>
          <div className="brand-subtitle">Pre-Audit Assistant UMKM</div>
        </div>
      </div>

      {/* Navigation section */}
      <div className="sidebar-section-label">WORKSPACE</div>
      <nav className="nav-list">
        {navItems.map((item) => {
          const IconComp = iconMap[item.iconName] || LayoutDashboard;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="icon" aria-hidden="true">
                <IconComp size={16} strokeWidth={isActive ? 2.5 : 2} />
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-spacer" />

      {/* Side help card */}
      <div className="side-card">
        <div className="side-card-icon">
          <HelpCircle size={15} />
        </div>
        <div>
          <div className="side-card-title">Butuh bantuan?</div>
          <div className="side-card-text">
            Tanyakan persyaratan halal pada Asisten Halal.
          </div>
          <button
            className="text-button flex items-center gap-1"
            onClick={() => onNavigate('assistant')}
          >
            Buka asisten <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Profile */}
      <div
        className="profile cursor-pointer hover:bg-white/5 transition-colors rounded-lg p-2"
        onClick={() => onNavigate('profile')}
        role="button"
        tabIndex={0}
        title="Buka Pengaturan Profil Usaha"
      >
        <div className="avatar">{user?.avatarText || 'FA'}</div>
        <div className="profile-copy">
          <strong>{user?.name || 'Fauzan Akbar'}</strong>
          <span>{user?.businessName || 'UMKM Kuliner'}</span>
        </div>
        <span className="profile-menu">
          <MoreHorizontal size={16} />
        </span>
      </div>
    </aside>
  );
}
