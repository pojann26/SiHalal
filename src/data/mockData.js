export const ingredientsData = [
  { name: 'Tempe Segar (Kedelai)', category: 'Bahan utama', status: 'verified', source: 'Database bahan halal', date: '20 Sep 2026', bpjphId: 'ID3311000012345' },
  { name: 'Minyak Goreng Sawit', category: 'Bahan utama', status: 'verified', source: 'Database bahan halal', date: '20 Sep 2026', bpjphId: 'ID0041000005678' },
  { name: 'Tepung Terigu', category: 'Bahan utama', status: 'verified', source: 'Database bahan halal', date: '20 Sep 2026', bpjphId: 'ID0011000001234' },
  { name: 'Tepung Tapioka', category: 'Bahan tambahan', status: 'verified', source: 'Database bahan halal', date: '20 Sep 2026', bpjphId: 'ID0021000007890' },
  { name: 'Gula Pasir', category: 'Pemanis', status: 'verified', source: 'Database bahan halal', date: '20 Sep 2026', bpjphId: 'ID0011000004567' },
  { name: 'Garam Beriodium', category: 'Bumbu', status: 'verified', source: 'Database bahan halal', date: '20 Sep 2026', bpjphId: 'ID0011000009876' },
  { name: 'Bawang Putih Bubuk', category: 'Bumbu', status: 'verified', source: 'Database bahan halal', date: '20 Sep 2026', bpjphId: 'ID0021000003412' },
  { name: 'Ketumbar Bubuk', category: 'Bumbu', status: 'verified', source: 'Database bahan halal', date: '20 Sep 2026', bpjphId: 'ID0031000006543' },
  { name: 'Saus Tiram ABC', category: 'Bumbu', status: 'review', source: 'Hasil OCR + NLP', date: '20 Sep 2026', bpjphId: 'Perlu Verifikasi' },
  { name: 'Sodium Benzoate', category: 'Bahan tambahan', status: 'risk', source: 'Hasil OCR + NLP', date: '19 Sep 2026', bpjphId: 'Tidak Ditemukan' },
];

export const statusMeta = {
  verified: { label: 'Terverifikasi', className: 'success', bg: 'bg-halal-green-soft', text: 'text-halal-green' },
  review: { label: 'Perlu pemeriksaan', className: 'warning', bg: 'bg-halal-orange-soft', text: 'text-halal-orange' },
  risk: { label: 'Berisiko', className: 'danger', bg: 'bg-halal-red-soft', text: 'text-halal-red' },
};

export const validationItems = [
  {
    name: 'Tempe Segar (Kedelai)',
    ref: 'Kedelai fermentasi nabati',
    status: 'verified',
    confidence: 99,
    criticalPoints: 'Bahan alami nabati (non-GMO). Ragi tempe menggunakan biakan murni halal.',
    bpjphId: 'ID3311000012345'
  },
  {
    name: 'Minyak Goreng Sawit',
    ref: 'Minyak kelapa sawit RBD',
    status: 'verified',
    confidence: 99,
    criticalPoints: 'Berasal dari minyak nabati murni. Proses pemurnian bebas karbon aktif hewani non-halal.',
    bpjphId: 'ID0041000005678'
  },
  {
    name: 'Tepung Terigu',
    ref: 'Tepung gandum',
    status: 'verified',
    confidence: 98,
    criticalPoints: 'Titik kritis rendah (berasal dari nabati/gandum). Fortifikasi vitamin telah terdaftar.',
    bpjphId: 'ID0011000001234'
  },
  {
    name: 'Tepung Tapioka',
    ref: 'Pati singkong murni',
    status: 'verified',
    confidence: 99,
    criticalPoints: 'Bahan nabati murni dari umbi singkong tanpa penambahan bahan hewani.',
    bpjphId: 'ID0021000007890'
  },
  {
    name: 'Gula Pasir',
    ref: 'Gula kristal tebu',
    status: 'verified',
    confidence: 99,
    criticalPoints: 'Proses pemutihan tidak menggunakan arang aktif tulang hewani non-halal.',
    bpjphId: 'ID0011000004567'
  },
  {
    name: 'Garam Beriodium',
    ref: 'Natrium klorida pangan',
    status: 'verified',
    confidence: 99,
    criticalPoints: 'Bahan mineral murni dengan fortifikasi iodium terdaftar SNI & BPOM.',
    bpjphId: 'ID0011000009876'
  },
  {
    name: 'Bawang Putih Bubuk',
    ref: 'Bawang putih dehidrasi',
    status: 'verified',
    confidence: 97,
    criticalPoints: '100% bawang putih murni kering tanpa campuran perisa atau pewarna sintetis.',
    bpjphId: 'ID0021000003412'
  },
  {
    name: 'Ketumbar Bubuk',
    ref: 'Biji ketumbar giling',
    status: 'verified',
    confidence: 98,
    criticalPoints: 'Rempah nabati murni tanpa bahan tambahan pangan berisiko.',
    bpjphId: 'ID0031000006543'
  },
  {
    name: 'Saus Tiram ABC',
    ref: 'Bumbu Ekstrak Tiram',
    status: 'review',
    confidence: 74,
    criticalPoints: 'Mengandung Penguat Rasa (E621) dan perisa tiram yang memerlukan bukti sertifikat produsen.',
    bpjphId: 'Perlu Verifikasi',
    alternatives: [
      { name: 'Saus Tiram Saori Ajinomoto', brand: 'Ajinomoto', bpjphId: 'ID00310000089120620', matchScore: 99 },
      { name: 'Saus Tiram Lee Kum Kee Halal', brand: 'Lee Kum Kee', bpjphId: 'ID00410000123450921', matchScore: 96 },
    ]
  },
  {
    name: 'Sodium Benzoate',
    ref: 'Natrium Benzoat E211',
    status: 'risk',
    confidence: 61,
    criticalPoints: 'Bahan tambahan sintetis tanpa dokumen asal-usul distributor. Berpotensi kontaminasi silang.',
    bpjphId: 'Tidak Ditemukan',
    alternatives: [
      { name: 'Natrium Benzoat Food Grade Halal', brand: 'Koepoe Koepoe', bpjphId: 'ID00210000034120822', matchScore: 95 },
      { name: 'Pengawet Alami Ekstrak Cuka Apel', brand: 'Bragg Halal', bpjphId: 'ID00410000145210123', matchScore: 91 }
    ]
  },
];

export const ocrPresets = [
  {
    id: 'saus-tiram',
    label: 'Contoh 1: Saus Tiram Kemasan (Perlu Cek)',
    productName: 'Saus Tiram ABC',
    category: 'Bumbu Masak',
    rawText: 'KOMPOSISI: AIR, GULA, GARAM, EKSTRAK TIRAM (8%), PENGUAT RASA MONONATRIUM GLUTAMAT (E621), PENGENTAL NABATI, PEWARNA ALAMI KARAMEL III, PENGAWET NATRIUM BENZOAT.',
    status: 'review',
    confidence: 78,
    matchedDbName: 'Bumbu Ekstrak Tiram / Oyster Sauce',
    criticalAnalysis: [
      { ingredient: 'Ekstrak Tiram (8%)', status: 'safe', note: 'Hewan laut (halal murni)' },
      { ingredient: 'Penguat Rasa E621', status: 'critical', note: 'Titik kritis: Media fermentasi mikrobial memerlukan bukti sertifikat' },
      { ingredient: 'Pengawet Natrium Benzoat', status: 'warning', note: 'Perlu pengecekan distributor resmi' }
    ],
    recommendations: [
      { name: 'Saus Tiram Saori Ajinomoto', brand: 'Ajinomoto', bpjphId: 'ID00310000089120620' },
      { name: 'Saus Tiram Lee Kum Kee Halal', brand: 'Lee Kum Kee', bpjphId: 'ID00410000123450921' }
    ]
  },
  {
    id: 'tepung-terigu',
    label: 'Contoh 2: Tepung Terigu Segitiga (Aman / Halal)',
    productName: 'Tepung Terigu Segitiga Biru',
    category: 'Bahan Utama',
    rawText: 'KOMPOSISI: TEPUNG TERIGU (GANDUM PILIHAN), ZAT BESI (Fe), SENG (Zn), VITAMIN B3, VITAMIN B2, VITAMIN B1, ASAM FOLAT.',
    status: 'verified',
    confidence: 99,
    matchedDbName: 'Tepung Terigu Gandum Terfortifikasi',
    criticalAnalysis: [
      { ingredient: 'Tepung Terigu', status: 'safe', note: 'Bahan nabati murni (halal)' },
      { ingredient: 'Premiks Vitamin & Mineral', status: 'safe', note: 'Telah terdaftar dalam direktori bahan halal BPJPH' }
    ],
    recommendations: []
  },
  {
    id: 'sodium-benzoate',
    label: 'Contoh 3: Bahan Tambahan / Pengawet (Berisiko)',
    productName: 'Sodium Benzoate Bubuk',
    category: 'Bahan Tambahan',
    rawText: 'SODIUM BENZOATE POWDER E211. FOOD GRADE PRESERVATIVE. DISTRIBUTED BY UNREGISTERED TRADER.',
    status: 'risk',
    confidence: 61,
    matchedDbName: 'Natrium Benzoat Tanpa Dokumen Distribusi',
    criticalAnalysis: [
      { ingredient: 'Sodium Benzoate E211', status: 'risk', note: 'Bahan kimia tanpa ID Halal distributor resmi' },
      { ingredient: 'Distributor Pemasok', status: 'risk', note: 'Vendor belum terdaftar pada modul Procurement BPJPH' }
    ],
    recommendations: [
      { name: 'Natrium Benzoat Koepoe Koepoe', brand: 'Gunacipta Multichem', bpjphId: 'ID00210000034120822' }
    ]
  }
];

export const assessmentQuestions = [
  'Apakah fasilitas produksi bebas dari bahan yang tidak halal?',
  'Apakah peralatan produksi digunakan sesuai ketentuan?',
  'Apakah bahan baku yang digunakan dapat ditelusuri?',
  'Apakah area produksi dijaga kebersihannya secara konsisten?',
];

export const historyRows = [
  { date: '20 Sep 2026 · 10:42', title: 'Draf SJPH', desc: 'Dokumen diperbarui', status: 'Tersimpan', tone: 'success' },
  { date: '20 Sep 2026 · 10:17', title: 'Saus Tiram ABC', desc: 'Validasi NLP', status: 'Perlu review', tone: 'warning' },
  { date: '20 Sep 2026 · 09:55', title: '18 bahan', desc: 'Batch validation', status: '18/20 siap', tone: 'info' },
  { date: '19 Sep 2026 · 16:31', title: 'Self-Assessment', desc: 'Kuesioner', status: 'Selesai', tone: 'success' },
];

export const recentActivities = [
  { title: 'Saus Tiram ABC', desc: 'Bahan dipindai via OCR', status: 'Perlu pemeriksaan', time: '10 menit lalu', tone: 'warning', iconType: 'Boxes' },
  { title: 'Self-Assessment', desc: 'Kuesioner diselesaikan', status: 'Selesai', time: '1 jam lalu', tone: 'success', iconType: 'Check' },
  { title: 'Draf SJPH', desc: 'Dokumen berhasil diperbarui', status: 'Tersimpan', time: 'Kemarin', tone: 'info', iconType: 'FileText' },
];
