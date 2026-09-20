import React from 'react';
import {
  User,
  LayoutDashboard,
  Boxes,
  ScanLine,
  FileText,
  Bot
} from 'lucide-react';
import { mobileNavItems } from '../../data/navigation';

const iconMap = {
  User,
  LayoutDashboard,
  Boxes,
  ScanLine,
  FileText,
  Bot,
};

export function BottomNav({ active, onNavigate }) {
  return (
    <nav className="mobile-bottom-nav" aria-label="Navigasi Mobile">
      <div className="mobile-nav-container">
        {mobileNavItems.map((item) => {
          const IconComp = iconMap[item.iconName] || LayoutDashboard;
          const isActive = active === item.id;

          if (item.isCenterFab) {
            return (
              <div key={item.id} className="mobile-fab-wrapper">
                <button
                  type="button"
                  className={`mobile-fab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                  aria-label="Pindai Bahan Baku dengan AI"
                  title="Pindai Bahan Baku"
                >
                  <div className="fab-pulse-ring" />
                  <IconComp size={24} strokeWidth={2.4} className="fab-icon" />
                  <span className="fab-label">Scan AI</span>
                </button>
              </div>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="mobile-nav-icon">
                <IconComp size={19} strokeWidth={isActive ? 2.5 : 1.9} />
              </span>
              <span className="mobile-nav-label">{item.label}</span>
              {isActive && <span className="mobile-active-dot" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
