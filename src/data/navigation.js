export const desktopNavItems = [
  { id: 'dashboard', label: 'Dashboard', iconName: 'LayoutDashboard', section: 'WORKSPACE' },
  { id: 'assessment', label: 'Self-Assessment', iconName: 'ClipboardCheck', section: 'WORKSPACE' },
  { id: 'ingredients', label: 'Bahan Baku', iconName: 'Boxes', section: 'WORKSPACE' },
  { id: 'validation', label: 'Validasi AI', iconName: 'Sparkles', section: 'WORKSPACE' },
  { id: 'documents', label: 'Dokumen SJPH', iconName: 'FileText', section: 'WORKSPACE' },
  { id: 'profile', label: 'Profil Usaha', iconName: 'Building2', section: 'WORKSPACE' },
  { id: 'assistant', label: 'Asisten Halal', iconName: 'Bot', section: 'ASSISTANT' },
  { id: 'history', label: 'Riwayat', iconName: 'History', section: 'ASSISTANT' },
];

export const mobileNavItems = [
  { id: 'dashboard', label: 'Beranda', iconName: 'LayoutDashboard' },
  { id: 'ingredients', label: 'Bahan', iconName: 'Boxes' },
  { id: 'validation', label: 'Scan AI', iconName: 'ScanLine', isCenterFab: true },
  { id: 'documents', label: 'SJPH', iconName: 'FileText' },
  { id: 'profile', label: 'Profil', iconName: 'User' },
];

export const navItems = desktopNavItems;
