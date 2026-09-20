# 🍃 SiHalal — AI Pre-Audit Assistant & Document Generator SJPH

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![jsPDF](https://img.shields.io/badge/PDF_Engine-jsPDF_%26_html2canvas-red)](https://github.com/parallax/jsPDF)
[![BPJPH Standard](https://img.shields.io/badge/BPJPH-Kepkaban_No._57/2021-emerald)](https://halal.go.id/)

> **Sistem Validasi Bahan Baku dan Otomatisasi Dokumen SJPH Berbasis AI untuk Pre-Audit Sertifikasi Halal UMKM (Jalur Self-Declare)**  
> *Studi Kasus UMKM: SpiegDit (Olahan Makanan Ringan & Bumbu)*

---

## 📌 Tentang Proyek

**SiHalal** adalah aplikasi *pre-audit assistant* berbasis web yang dirancang untuk membantu pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) mempersiapkan berkas sertifikasi halal secara mandiri, cepat, dan presisi sebelum diajukan ke portal resmi **SIHALAL BPJPH**.

Aplikasi ini mengatasi kendala administratif yang sering dihadapi UMKM:
1. **Validasi Titik Kritis Bahan**: Membantu memilah bahan yang *Terverifikasi*, *Perlu Pemeriksaan*, hingga *Berisiko* serta memberikan rekomendasi substitusi halal.
2. **Self-Assessment Fasilitas**: Pemeriksaan mandiri kesiapan dapur, peralatan, dan sanitasi.
3. **Auto-Generate Dokumen SJPH**: Menghasilkan draf dokumen Sistem Jaminan Produk Halal (SJPH) lengkap standar **Kepkaban BPJPH No. 57/2021** yang dapat diunduh langsung ke format **PDF (A4)**.

---

## ✨ Fitur Utama

- 📊 **Dashboard & Progres Persiapan**: Pantau tahapan persiapan SJPH secara berurutan dengan indikator garis penghubung progres.
- 🔍 **Validasi Titik Kritis Bahan (AI OCR + NLP Simulation)**: Analisis komposisi bahan, status kehalalan, dan rekomendasi alternatif bahan aman.
- 📦 **Matriks Bahan Halal**: Repositori bahan baku yang tersimpan dan tervalidasi lengkap dengan nomor sertifikat halal BPJPH/MUI.
- 📝 **Self-Assessment Kesiapan**: Kuesioner interaktif kesiapan operasional dapur dan bebas najis.
- 📑 **Generator Dokumen SJPH Resmi (Format A4 BPJPH)**:
  - **Cover & Bab I**: Identitas Usaha (SpiegDit), NIB, Pimpinan Usaha, dan Penyelia Halal.
  - **Bab II**: Penerapan 5 Kriteria SJPH (Komitmen, Bahan, PPH, Produk, Pemantauan).
  - **Lampiran 1**: Surat Penetapan Kebijakan Halal.
  - **Lampiran 3**: Surat Keputusan (SK) Penetapan Penyelia Halal.
  - **Lampiran 5**: Daftar Bahan Halal & Dokumen Pendukung.
  - **Lampiran 6**: Matriks Penggunaan Bahan pada Setiap Produk/Menu.
  - **Lampiran 9**: Surat Pernyataan Bebas Babi & Najis (Format Materai Rp 10.000).
  - **Lampiran 16**: Format Checklist Hasil Audit Internal Mandiri.
  - **Ekspor PDF & Cetak A4**: Menggunakan engine `jspdf` & `html2canvas` dengan proteksi rasio di perangkat mobile.
- 🤖 **Asisten Halal (AI Chatbot)**: Konsultasi cepat mengenai regulasi dan persiapan pra-audit.
- 📱 **Mobile-First Responsive Design**: Tampilan nyaman diakses melalui smartphone maupun komputer desktop.

---

## 🚀 Cara Menjalankan Proyek di Komputer Lokal

Pastikan Anda telah menginstal **[Node.js](https://nodejs.org/)** (disarankan versi 18 atau lebih baru) dan **npm** di komputer Anda.

### 1. Clone Repositori
Buka terminal / PowerShell dan jalankan perintah:
```bash
git clone https://github.com/pojann26/SiHalal.git
cd SiHalal
```

### 2. Install Dependensi
Install semua pustaka yang dibutuhkan:
```bash
npm install
```

### 3. Jalankan Development Server
Mulai server lokal:
```bash
npm run dev
```

Setelah perintah dijalankan, terminal akan menampilkan URL lokal (biasanya `http://localhost:5173/`). Buka tautan tersebut di browser Anda (Google Chrome / Edge / Safari).

---

## 🛠️ Perintah Lainnya

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan aplikasi pada mode development dengan fitur hot-reload |
| `npm run build` | Melakukan compile dan bundling kode untuk rilis produksi |
| `npm run preview` | Menjalankan preview lokal dari hasil build produksi |

---

## 📂 Struktur Direktori Proyek

```plaintext
halal-preaudit-ui/
├── public/                  # Aset statis & logo
├── src/
│   ├── components/
│   │   ├── common/          # Komponen UI umum (Badge, MetricCard, ProgressRing)
│   │   └── layout/          # Layout utama (AppShell, Sidebar, Topbar, BottomNav)
│   ├── data/
│   │   └── mockData.js      # Data acuan bahan, kriteria validasi, & preset OCR
│   ├── pages/
│   │   ├── Assessment/      # Halaman Self-Assessment fasilitas dapur
│   │   ├── Assistant/       # Halaman AI Chatbot Asisten Halal
│   │   ├── Auth/            # Halaman Login & Registrasi UMKM
│   │   ├── Dashboard/       # Halaman Beranda utama & Timeline progres
│   │   ├── Documents/       # Generator SJPH, SJPHDocument (A4), & SJPHModal
│   │   ├── History/         # Riwayat aktivitas pra-audit
│   │   ├── Ingredients/     # Repositori Matriks Bahan Halal
│   │   ├── Profile/         # Pengaturan profil pelaku usaha & penyelia halal
│   │   └── Validation/      # Halaman simulasi scan OCR & validasi AI
│   ├── App.jsx              # Komponen utama & state management
│   ├── index.css            # Styling desain sistem, mobile layout, & print A4
│   └── main.jsx             # Entry point React
├── index.html               # Halaman HTML utama
├── package.json             # Konfigurasi dependensi dan skrip proyek
├── tailwind.config.js       # Konfigurasi TailwindCSS
└── vite.config.js           # Konfigurasi Vite
```

---

## 👥 Disusun Oleh

Proyek ini dikembangkan oleh **Kelompok 10** — Departemen Informatika, Fakultas Sains dan Matematika, Universitas Diponegoro:

- **Rahmat Argyandha Aminuddin** (24060124130061)
- **Muhammad Fauzan Akbar** (24060124140139)
- **Aditya Sultonul Ulya** (24060124120006)

---

## 📄 Lisensi
Proyek ini dibuat untuk keperluan akademis dan penelitian sistem informasi pra-audit sertifikasi halal UMKM.
