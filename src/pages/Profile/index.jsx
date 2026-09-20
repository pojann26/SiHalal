import React, { useState } from 'react';
import { Building2, FileText, MapPin, UserCheck, Phone, Mail, LogOut, Check, ShieldCheck } from 'lucide-react';

export function Profile({ user, onUpdateUser, onLogout, onNotify }) {
  const [formData, setFormData] = useState({
    name: user?.name || 'Fauzan Akbar',
    email: user?.email || 'fauzan@culinary.id',
    phone: user?.phone || '081234567890',
    businessName: user?.businessName || 'Fauzan Culinary',
    nib: user?.nib || '1234567890123',
    kitchenAddress: user?.kitchenAddress || 'Jl. Tembalang Raya No. 45, Semarang',
    halalSupervisor: user?.halalSupervisor || 'Ahmad Dahlan',
    productCategory: user?.productCategory || 'Olahan Makanan Ringan & Bumbu (KBLI 10799)',
  });

  const handleSave = (e) => {
    e.preventDefault();
    if (onUpdateUser) {
      onUpdateUser({
        ...user,
        ...formData,
        avatarText: (formData.name ? formData.name.slice(0, 2) : 'FA').toUpperCase(),
      });
    }
    if (onNotify) {
      onNotify('Profil dan data legalitas usaha berhasil diperbarui!');
    }
  };

  return (
    <div className="page narrow-page">
      {/* Header Banner */}
      <section className="profile-hero-card">
        <div className="profile-avatar-large">
          <span>{(formData.name ? formData.name.slice(0, 2) : 'FA').toUpperCase()}</span>
        </div>
        <div className="profile-hero-copy">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="kms-badge store">KMS: STORE</span>
            <span className="text-xs text-emerald-800 font-bold flex items-center gap-1">
              <ShieldCheck size={14} /> Terverifikasi NIB
            </span>
          </div>
          <h2>{formData.businessName}</h2>
          <p>
            {formData.name} · {formData.productCategory}
          </p>
        </div>
      </section>

      {/* Profile Form */}
      <form onSubmit={handleSave} className="panel profile-form-panel">
        <div className="panel-header">
          <div>
            <span className="eyebrow">PENGORGANISASIAN UMKM</span>
            <h3>Data Legalitas & Fasilitas Usaha</h3>
            <p>Data ini digunakan sebagai identitas pada draf Dokumen SJPH format BPJPH.</p>
          </div>
        </div>

        <div className="profile-fields-grid">
          {/* Business Name */}
          <div className="form-group">
            <label className="flex items-center gap-1.5">
              <Building2 size={14} className="text-emerald-700" />
              <span>Nama Merek / Usaha Kuliner</span>
            </label>
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              required
            />
          </div>

          {/* NIB */}
          <div className="form-group">
            <label className="flex items-center gap-1.5">
              <FileText size={14} className="text-emerald-700" />
              <span>Nomor Induk Berusaha (NIB)</span>
            </label>
            <input
              type="text"
              maxLength={13}
              value={formData.nib}
              onChange={(e) => setFormData({ ...formData, nib: e.target.value })}
              required
            />
          </div>

          {/* Owner Name */}
          <div className="form-group">
            <label className="flex items-center gap-1.5">
              <UserCheck size={14} className="text-emerald-700" />
              <span>Nama Penanggung Jawab / Pemilik</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          {/* Halal Supervisor */}
          <div className="form-group">
            <label className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-700" />
              <span>Nama Penyelia Halal Internal</span>
            </label>
            <input
              type="text"
              value={formData.halalSupervisor}
              onChange={(e) => setFormData({ ...formData, halalSupervisor: e.target.value })}
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label className="flex items-center gap-1.5">
              <Phone size={14} className="text-emerald-700" />
              <span>Nomor WhatsApp Usaha</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="flex items-center gap-1.5">
              <Mail size={14} className="text-emerald-700" />
              <span>Email Resmi Usaha</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Product Category */}
          <div className="form-group full-width">
            <label>Kategori Produk & Klasifikasi KBLI</label>
            <input
              type="text"
              value={formData.productCategory}
              onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
              required
            />
          </div>

          {/* Kitchen Address */}
          <div className="form-group full-width">
            <label className="flex items-center gap-1.5">
              <MapPin size={14} className="text-emerald-700" />
              <span>Alamat Lengkap Fasilitas Dapur / Produksi</span>
            </label>
            <textarea
              rows={2}
              value={formData.kitchenAddress}
              onChange={(e) => setFormData({ ...formData, kitchenAddress: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="profile-form-actions">
          <button
            type="button"
            className="logout-btn"
            onClick={onLogout}
          >
            <LogOut size={14} />
            <span>Keluar Akun (Logout)</span>
          </button>

          <button type="submit" className="primary-btn flex items-center gap-1.5">
            <Check size={14} strokeWidth={3} />
            <span>Simpan Perubahan Usaha</span>
          </button>
        </div>
      </form>
    </div>
  );
}
