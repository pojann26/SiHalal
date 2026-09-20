import React, { useState } from 'react';
import { ShieldCheck, LogIn, UserPlus, ArrowRight, Building2, Phone, FileText, CheckCircle2 } from 'lucide-react';

export function LoginView({ onLogin, onRegister }) {
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  // Register Form State
  const [regData, setRegData] = useState({
    name: '',
    phone: '',
    businessName: '',
    nib: '',
    productCategory: 'Makanan Ringan & Bumbu',
    kitchenAddress: '',
  });

  // Handle Demo Quick Login
  const handleDemoLogin = () => {
    onLogin({
      name: 'Fauzan Akbar',
      email: 'fauzan@culinary.id',
      phone: '081234567890',
      businessName: 'SpiegDit',
      nib: '1234567890123',
      kitchenAddress: 'Jl. Tembalang Raya No. 45, Semarang',
      halalSupervisor: 'Ahmad Dahlan',
      productCategory: 'Olahan Makanan Ringan & Bumbu (KBLI 10799)',
      avatarText: 'SP',
    });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    onLogin({
      name: identifier.includes('@') ? identifier.split('@')[0] : 'Pengusaha Kuliner',
      email: identifier.includes('@') ? identifier : 'umkm@halal.id',
      phone: '081234567890',
      businessName: 'SpiegDit',
      nib: identifier.length === 13 ? identifier : '1234567890123',
      kitchenAddress: 'Fasilitas Dapur Utama, Semarang',
      halalSupervisor: 'Ahmad Dahlan',
      productCategory: 'Makanan & Minuman Olahan',
      avatarText: 'SP',
    });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (onRegister) {
      onRegister({
        name: regData.name || 'Pengusaha Baru',
        email: 'pengusaha@halal.id',
        phone: regData.phone || '081234567890',
        businessName: regData.businessName || 'SpiegDit',
        nib: regData.nib || '1234567890123',
        kitchenAddress: regData.kitchenAddress || 'Alamat Fasilitas Produksi',
        halalSupervisor: regData.name || 'Penyelia Halal',
        productCategory: regData.productCategory,
        avatarText: (regData.businessName ? regData.businessName.slice(0, 2) : 'SP').toUpperCase(),
      });
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        {/* Brand Header */}
        <div className="auth-brand-header">
          <div className="auth-logo-badge">
            <span>H</span>
          </div>
          <h2>SiHalal</h2>
          <p>Portal Asisten Pra-Pengajuan Sertifikasi Halal UMKM</p>
        </div>

        {/* Quick Demo Login Banner */}
        <div className="demo-login-box">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 size={15} className="text-emerald-700" />
            <strong className="text-xs text-emerald-900">Akses Cepat Pengujian</strong>
          </div>
          <p className="text-xs text-emerald-800 mb-2">
            Masuk langsung sebagai <strong>SpiegDit (UMKM Kuliner)</strong> untuk mencoba seluruh alur:
          </p>
          <button
            type="button"
            className="demo-login-btn"
            onClick={handleDemoLogin}
          >
            <span>Masuk Cepat Demo (SpiegDit)</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="auth-tab-bar">
          <button
            type="button"
            className={`auth-tab-btn ${authMode === 'login' ? 'active' : ''}`}
            onClick={() => setAuthMode('login')}
          >
            <LogIn size={14} />
            <span>Masuk Akun</span>
          </button>
          <button
            type="button"
            className={`auth-tab-btn ${authMode === 'register' ? 'active' : ''}`}
            onClick={() => setAuthMode('register')}
          >
            <UserPlus size={14} />
            <span>Daftar Usaha Baru</span>
          </button>
        </div>

        {/* Mode 1: Login Form */}
        {authMode === 'login' ? (
          <form onSubmit={handleSubmitLogin} className="auth-form">
            <div className="form-group">
              <label>Nomor WhatsApp, NIB, atau Email</label>
              <input
                type="text"
                placeholder="Contoh: 08123456789 atau 1234567890123"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Kata Sandi</label>
              <input
                type="password"
                placeholder="Masukkan kata sandi akun"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 my-2">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" defaultChecked />
                <span>Ingat saya di perangkat ini</span>
              </label>
              <a href="#forgot" className="text-emerald-700 hover:underline">Lupa sandi?</a>
            </div>

            <button type="submit" className="primary-btn full auth-submit-btn">
              <span>Masuk ke Dashboard</span>
              <ArrowRight size={14} />
            </button>
          </form>
        ) : (
          /* Mode 2: Register Form */
          <form onSubmit={handleSubmitRegister} className="auth-form">
            <div className="form-group">
              <label>Nama Lengkap Pemilik</label>
              <input
                type="text"
                placeholder="Nama penanggung jawab usaha"
                value={regData.name}
                onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Nama Merek / Usaha Kuliner</label>
              <div className="input-with-icon">
                <Building2 size={14} className="input-icon" />
                <input
                  type="text"
                  placeholder="Contoh: Sambal Berkah, Dapur Rasa"
                  value={regData.businessName}
                  onChange={(e) => setRegData({ ...regData, businessName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Nomor Induk Berusaha (NIB 13 Digit)</label>
              <div className="input-with-icon">
                <FileText size={14} className="input-icon" />
                <input
                  type="text"
                  placeholder="13 digit NIB dari OSS"
                  maxLength={13}
                  value={regData.nib}
                  onChange={(e) => setRegData({ ...regData, nib: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Nomor WhatsApp Aktif</label>
              <div className="input-with-icon">
                <Phone size={14} className="input-icon" />
                <input
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={regData.phone}
                  onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit" className="primary-btn full auth-submit-btn">
              <span>Daftarkan Usaha & Mulai Pre-Audit</span>
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <div className="auth-footer-disclaimer">
          <span>SiHalal Assistant · Portal Mandiri UMKM Kuliner</span>
        </div>
      </div>
    </div>
  );
}
