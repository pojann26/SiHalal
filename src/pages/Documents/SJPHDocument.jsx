import React from 'react';
import { ShieldCheck, CheckSquare, Award } from 'lucide-react';

export function SJPHDocument({ user }) {
  const businessName = user?.businessName || 'SpiegDit';
  const ownerName = user?.name || 'Fauzan Akbar';
  const supervisor = user?.halalSupervisor || 'Ahmad Dahlan';
  const nib = user?.nib || '1234567890123';
  const address = user?.kitchenAddress || 'Jl. Tembalang Raya No. 45, Semarang, Jawa Tengah';
  const phone = user?.phone || '0812-3456-7890';
  const email = user?.email || 'fauzan@culinary.id';

  const materials = [
    { no: 1, name: 'Tempe Segar (Kedelai Non-GMO)', brand: 'Tempe Mandiri', certOrg: 'LPPOM MUI', certNo: 'ID3311000012345', exp: '2028-06-15', p1: true, p2: false, p3: false },
    { no: 2, name: 'Minyak Goreng Kelapa Sawit', brand: 'Wilmar Gold', certOrg: 'BPJPH', certNo: 'ID0041000005678', exp: '2027-11-20', p1: true, p2: true, p3: true },
    { no: 3, name: 'Tepung Terigu Segitiga', brand: 'Bogasari', certOrg: 'BPJPH', certNo: 'ID0011000001234', exp: '2028-03-10', p1: true, p2: false, p3: false },
    { no: 4, name: 'Tepung Tapioka Halus', brand: 'Cap Tani Makmur', certOrg: 'BPJPH', certNo: 'ID0021000007890', exp: '2027-09-05', p1: true, p2: false, p3: false },
    { no: 5, name: 'Gula Pasir Kristal Putih', brand: 'Gulaku Halal', certOrg: 'BPJPH', certNo: 'ID0011000004567', exp: '2028-12-01', p1: true, p2: true, p3: true },
    { no: 6, name: 'Garam Beriodium Murni', brand: 'Garam Cap Kapal', certOrg: 'BPJPH', certNo: 'ID0011000009876', exp: '2027-08-14', p1: true, p2: true, p3: true },
    { no: 7, name: 'Bawang Putih Bubuk Alami', brand: 'Koepoe Koepoe', certOrg: 'BPJPH', certNo: 'ID0021000003412', exp: '2028-05-22', p1: true, p2: true, p3: true },
    { no: 8, name: 'Ketumbar Bubuk Pilihan', brand: 'Desaku Halal', certOrg: 'BPJPH', certNo: 'ID0031000006543', exp: '2027-10-30', p1: true, p2: true, p3: false },
    { no: 9, name: 'Cabai Bubuk Murni Kering', brand: 'BonCabe Murni', certOrg: 'BPJPH', certNo: 'ID0041000011223', exp: '2028-01-18', p1: false, p2: true, p3: true },
    { no: 10, name: 'Kaldu Jamur Tanpa Pengawet', brand: 'Totole Kaldu Halal', certOrg: 'BPJPH', certNo: 'ID0031000008912', exp: '2027-12-31', p1: true, p2: true, p3: true },
  ];

  const auditItems = [
    { no: 1, item: 'Kebijakan Halal telah ditetapkan dan disosialisasikan kepada seluruh staf/pekerja.', result: 'Memenuhi' },
    { no: 2, item: 'Penyelia Halal telah ditunjuk secara sah dan memahami alur Proses Produk Halal (PPH).', result: 'Memenuhi' },
    { no: 3, item: 'Seluruh bahan baku, tambahan, dan penolong memiliki sertifikat halal yang masih aktif.', result: 'Memenuhi' },
    { no: 4, item: 'Tidak terdapat bahan berisiko/syubhat yang dibeli tanpa dokumen sertifikasi halal BPJPH.', result: 'Memenuhi' },
    { no: 5, item: 'Tempat penyimpanan bahan halal terpisah, bersih, dan bebas potensi kontaminasi najis.', result: 'Memenuhi' },
    { no: 6, item: 'Peralatan produksi (wajan, pisau, wadah) tidak digunakan bersamaan untuk bahan non-halal.', result: 'Memenuhi' },
    { no: 7, item: 'Air yang digunakan untuk pencucian dan proses produksi memenuhi syarat air suci & higienis.', result: 'Memenuhi' },
    { no: 8, item: 'Proses pengemasan dilakukan dalam kondisi tertutup dan menggunakan kemasan food-grade.', result: 'Memenuhi' },
    { no: 9, item: 'Nama produk, bentuk, dan karakteristik sensori tidak mengarah pada unsur haram/babi.', result: 'Memenuhi' },
    { no: 10, item: 'Tersedia catatan pembelian bahan dan riwayat validasi pra-audit (Pre-Audit SiHalal).', result: 'Memenuhi' },
  ];

  return (
    <div className="sjph-printable-document text-gray-900 bg-white" id="sjph-full-document">
      {/* ====================================================
          HALAMAN 1: COVER DOKUMEN RESMI BPJPH
          ==================================================== */}
      <div className="sjph-page a4-page flex flex-col justify-between p-12 border border-gray-300 shadow-sm mx-auto my-4 bg-white relative">
        <div className="text-center border-b-2 border-gray-800 pb-4">
          <div className="inline-flex items-center gap-2 mb-2">
            <ShieldCheck size={28} className="text-emerald-700" />
            <span className="text-xs tracking-widest font-bold text-gray-600 uppercase">
              REPUBLIK INDONESIA · BADAN PENYELENGGARA JAMINAN PRODUK HALAL (BPJPH)
            </span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
            DOKUMEN SISTEM JAMINAN PRODUK HALAL (SJPH)
          </h1>
          <p className="text-sm font-semibold text-gray-700 mt-1">
            Panduan Usaha Mikro dan Kecil (UMK) Jalur Pernyataan Pelaku Usaha (Self-Declare)
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            Sesuai Keputusan Kepala Badan Penyelenggara Jaminan Produk Halal Nomor 57 Tahun 2021
          </p>
        </div>

        <div className="my-8 py-8 border-y border-dashed border-gray-300 text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-600 flex items-center justify-center text-emerald-800 font-black text-2xl flex-shrink-0 aspect-square">
            {businessName.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Nama Pelaku Usaha</span>
            <h2 className="text-3xl font-black text-gray-900 mt-1">{businessName}</h2>
          </div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs">
            Skala Usaha: Usaha Mikro & Kecil (KBLI 10799)
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs border border-gray-200 p-4 rounded bg-gray-50/50">
          <div>
            <span className="text-gray-500 block">Nomor Induk Berusaha (NIB):</span>
            <strong className="text-gray-900">{nib}</strong>
          </div>
          <div>
            <span className="text-gray-500 block">Tanggal Dokumen:</span>
            <strong className="text-gray-900">20 September 2026</strong>
          </div>
          <div>
            <span className="text-gray-500 block">Nama Pimpinan Usaha:</span>
            <strong className="text-gray-900">{ownerName}</strong>
          </div>
          <div>
            <span className="text-gray-500 block">Nama Penyelia Halal:</span>
            <strong className="text-gray-900">{supervisor}</strong>
          </div>
          <div className="col-span-2">
            <span className="text-gray-500 block">Alamat Fasilitas Dapur / Produksi:</span>
            <strong className="text-gray-900">{address}</strong>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-200 text-[10px] text-gray-500">
          Dokumen ini disusun menggunakan Sistem Validasi Bahan Baku dan Otomatisasi SJPH (SiHalal Pre-Audit Assistant).
          <div className="font-semibold text-gray-700 mt-1">Halaman 1 dari 5</div>
        </div>
      </div>

      {/* ====================================================
          HALAMAN 2: BAB I & BAB II KRITERIA SJPH
          ==================================================== */}
      <div className="sjph-page a4-page flex flex-col justify-between p-12 border border-gray-300 shadow-sm mx-auto my-4 bg-white relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2 text-[10px] text-gray-500 uppercase tracking-wider mb-6">
            <span>Sistem Jaminan Produk Halal (SJPH)</span>
            <span className="font-bold text-gray-700">{businessName}</span>
          </div>

          {/* BAB I */}
          <div className="mb-6">
            <div className="bg-gray-100 px-3 py-1.5 font-bold text-sm text-gray-800 border-l-4 border-emerald-600 mb-3">
              BAB I: INFORMASI UMUM PERUSAHAAN
            </div>
            <table className="w-full text-xs text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-1.5 pr-2 font-semibold text-gray-600 w-1/3">1. Nama Perusahaan / Usaha</td>
                  <td className="py-1.5 font-bold text-gray-900">: {businessName}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-1.5 pr-2 font-semibold text-gray-600">2. Nomor Induk Berusaha (NIB)</td>
                  <td className="py-1.5 text-gray-900">: {nib}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-1.5 pr-2 font-semibold text-gray-600">3. Nama Pimpinan Perusahaan</td>
                  <td className="py-1.5 text-gray-900">: {ownerName}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-1.5 pr-2 font-semibold text-gray-600">4. Nama Penyelia Halal</td>
                  <td className="py-1.5 text-gray-900">: {supervisor} (Telp: {phone})</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-1.5 pr-2 font-semibold text-gray-600">5. Alamat Kantor / Usaha</td>
                  <td className="py-1.5 text-gray-900">: {address}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-1.5 pr-2 font-semibold text-gray-600">6. Alamat Fasilitas Produksi</td>
                  <td className="py-1.5 text-gray-900">: {address}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-1.5 pr-2 font-semibold text-gray-600">7. Kelompok Produk / KBLI</td>
                  <td className="py-1.5 text-gray-900">: Makanan Ringan & Bumbu (KBLI 10799)</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-2 font-semibold text-gray-600 align-top">8. Daftar Produk yang Didaftarkan</td>
                  <td className="py-1.5 text-gray-900">
                    <ul className="list-disc list-inside space-y-0.5">
                      <li>Keripik Tempe Renyah SpiegDit</li>
                      <li>Bumbu Tabur Gurih SpiegDit</li>
                      <li>Keripik Kentang Original SpiegDit</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* BAB II */}
          <div>
            <div className="bg-gray-100 px-3 py-1.5 font-bold text-sm text-gray-800 border-l-4 border-emerald-600 mb-3">
              BAB II: PENERAPAN KRITERIA SISTEM JAMINAN PRODUK HALAL (SJPH)
            </div>
            <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
              <div>
                <strong className="text-gray-900 block font-bold">1. Komitmen dan Tanggung Jawab</strong>
                <p>
                  Pimpinan {businessName} berkomitmen penuh untuk menerapkan SJPH secara konsisten, menunjuk Penyelia Halal yang kompeten ({supervisor}), dan memberikan pelatihan/sosialisasi prinsip kehalalan kepada seluruh tenaga kerja.
                </p>
              </div>
              <div>
                <strong className="text-gray-900 block font-bold">2. Bahan</strong>
                <p>
                  Seluruh bahan baku, bahan tambahan, dan bahan penolong yang digunakan terjamin kehalalannya (dibuktikan dengan Sertifikat Halal BPJPH yang masih berlaku atau tergolong dalam daftar bahan tidak kritis). Tidak ada penggunaan bahan yang mengandung babi atau turunannya.
                </p>
              </div>
              <div>
                <strong className="text-gray-900 block font-bold">3. Proses Produk Halal (PPH)</strong>
                <p>
                  Lokasi, tempat, dan alat PPH dijaga kebersihannya, terbebas dari najis, dan terpisah dari bahan non-halal. Pembersihan dilakukan menggunakan air bersih yang memenuhi baku mutu kesehatan.
                </p>
              </div>
              <div>
                <strong className="text-gray-900 block font-bold">4. Produk</strong>
                <p>
                  Produk yang dihasilkan tidak menggunakan nama, bentuk, atau aroma yang mengarah pada hal-hal yang diharamkan dalam syariat Islam, serta dikemas dengan kemasan higienis yang aman.
                </p>
              </div>
              <div>
                <strong className="text-gray-900 block font-bold">5. Pemantauan dan Evaluasi</strong>
                <p>
                  {businessName} melaksanakan audit internal mandiri sekurang-kurangnya 1 (satu) kali dalam 1 (satu) tahun untuk memastikan seluruh kriteria SJPH terpenuhi secara berkesinambungan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-200 text-[10px] text-gray-500">
          Dokumen Sistem Jaminan Produk Halal (SJPH) · {businessName}
          <div className="font-semibold text-gray-700 mt-1">Halaman 2 dari 5</div>
        </div>
      </div>

      {/* ====================================================
          HALAMAN 3: LAMPIRAN 1 & LAMPIRAN 3 (SK PENYELIA HALAL)
          ==================================================== */}
      <div className="sjph-page a4-page flex flex-col justify-between p-12 border border-gray-300 shadow-sm mx-auto my-4 bg-white relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2 text-[10px] text-gray-500 uppercase tracking-wider mb-6">
            <span>Sistem Jaminan Produk Halal (SJPH)</span>
            <span className="font-bold text-gray-700">{businessName}</span>
          </div>

          {/* LAMPIRAN 1 */}
          <div className="mb-8 border border-gray-300 p-4 rounded bg-gray-50/30">
            <div className="text-center font-bold text-xs uppercase text-gray-900 border-b pb-2 mb-3">
              LAMPIRAN 1: SURAT PENETAPAN KEBIJAKAN HALAL
            </div>
            <p className="text-xs text-gray-800 leading-relaxed text-justify mb-4">
              Kami pimpinan dan segenap jajaran <strong>{businessName}</strong> berkomitmen tinggi untuk:
            </p>
            <ol className="list-decimal list-inside text-xs text-gray-700 space-y-1.5 mb-4 pl-2">
              <li>Menjamin bahwa seluruh produk yang kami hasilkan senantiasa halal, suci, dan aman untuk dikonsumsi sesuai ketentuan syariat Islam dan peraturan perundang-undangan.</li>
              <li>Hanya menggunakan bahan baku, bahan tambahan, dan bahan penolong yang telah jelas status kehalalannya dan terverifikasi oleh BPJPH.</li>
              <li>Menjaga seluruh fasilitas, peralatan produksi, dan penyimpanan dari segala bentuk kontaminasi najis atau bahan yang diharamkan.</li>
              <li>Mendukung penuh Penyelia Halal dalam menjalankan tugas pengawasan Proses Produk Halal secara konsisten.</li>
            </ol>
            <div className="flex justify-between text-xs pt-4 border-t border-dashed border-gray-300">
              <div>
                <span className="text-gray-500">Ditetapkan di</span>: Semarang<br />
                <span className="text-gray-500">Pada tanggal</span>: 20 September 2026
              </div>
              <div className="text-center w-48">
                <span className="text-gray-500 block mb-8">Pimpinan {businessName},</span>
                <strong className="text-gray-900 block border-b border-gray-800 pb-1">{ownerName}</strong>
                <span className="text-[10px] text-gray-500">Pemilik / Penanggung Jawab</span>
              </div>
            </div>
          </div>

          {/* LAMPIRAN 3 */}
          <div className="border border-gray-300 p-4 rounded bg-gray-50/30">
            <div className="text-center font-bold text-xs uppercase text-gray-900 border-b pb-2 mb-3">
              LAMPIRAN 3: SURAT KEPUTUSAN PENETAPAN PENYELIA HALAL
            </div>
            <p className="text-xs text-gray-800 leading-relaxed mb-3">
              Pimpinan <strong>{businessName}</strong> dengan ini menetapkan:
            </p>
            <div className="bg-white border p-2.5 rounded text-xs space-y-1 mb-3">
              <div><span className="text-gray-500">Nama Penyelia Halal</span>: <strong>{supervisor}</strong></div>
              <div><span className="text-gray-500">Nomor Kontak / HP</span>: <strong>{phone}</strong></div>
              <div><span className="text-gray-500">Agama</span>: Islam</div>
              <div><span className="text-gray-500">Tugas Pokok</span>: Mengawasi Proses Produk Halal (PPH), memverifikasi keabsahan bahan baku, dan mendokumentasikan bukti kepatuhan SJPH.</div>
            </div>
            <div className="grid grid-cols-2 text-xs pt-2 gap-4">
              <div className="text-center">
                <span className="text-gray-500 block mb-8">Penyelia Halal yang Ditetapkan,</span>
                <strong className="text-gray-900 block border-b border-gray-800 pb-1">{supervisor}</strong>
                <span className="text-[10px] text-gray-500">Penyelia Halal SpiegDit</span>
              </div>
              <div className="text-center">
                <span className="text-gray-500 block mb-8">Pimpinan Usaha,</span>
                <strong className="text-gray-900 block border-b border-gray-800 pb-1">{ownerName}</strong>
                <span className="text-[10px] text-gray-500">Pemilik SpiegDit</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-200 text-[10px] text-gray-500">
          Dokumen Sistem Jaminan Produk Halal (SJPH) · {businessName}
          <div className="font-semibold text-gray-700 mt-1">Halaman 3 dari 5</div>
        </div>
      </div>

      {/* ====================================================
          HALAMAN 4: LAMPIRAN 5 & 6 (MATRIKS BAHAN & PRODUK)
          ==================================================== */}
      <div className="sjph-page a4-page flex flex-col justify-between p-12 border border-gray-300 shadow-sm mx-auto my-4 bg-white relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2 text-[10px] text-gray-500 uppercase tracking-wider mb-4">
            <span>Sistem Jaminan Produk Halal (SJPH)</span>
            <span className="font-bold text-gray-700">{businessName}</span>
          </div>

          {/* LAMPIRAN 5 */}
          <div className="mb-6">
            <div className="font-bold text-xs uppercase text-gray-900 mb-2">
              LAMPIRAN 5: DAFTAR BAHAN HALAL DAN DOKUMEN PENDUKUNG (MATRIKS BAHAN)
            </div>
            <table className="w-full text-[10px] border border-gray-300 border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-800 font-bold border-b border-gray-300">
                  <th className="p-1.5 border-r border-gray-300 text-center w-8">No</th>
                  <th className="p-1.5 border-r border-gray-300 text-left">Nama Bahan</th>
                  <th className="p-1.5 border-r border-gray-300 text-left">Merek / Produsen</th>
                  <th className="p-1.5 border-r border-gray-300 text-left">Lembaga Penerbit</th>
                  <th className="p-1.5 border-r border-gray-300 text-left">No. Sertifikat Halal</th>
                  <th className="p-1.5 text-center">Masa Berlaku</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((m) => (
                  <tr key={m.no} className="border-b border-gray-200 hover:bg-gray-50/50">
                    <td className="p-1 border-r border-gray-300 text-center">{m.no}</td>
                    <td className="p-1 border-r border-gray-300 font-medium">{m.name}</td>
                    <td className="p-1 border-r border-gray-300 text-gray-700">{m.brand}</td>
                    <td className="p-1 border-r border-gray-300 text-gray-700">{m.certOrg}</td>
                    <td className="p-1 border-r border-gray-300 font-mono text-[9px] text-gray-900">{m.certNo}</td>
                    <td className="p-1 text-center text-gray-700">{m.exp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* LAMPIRAN 6 */}
          <div>
            <div className="font-bold text-xs uppercase text-gray-900 mb-2">
              LAMPIRAN 6: MATRIKS PENGGUNAAN BAHAN PADA SETIAP PRODUK
            </div>
            <table className="w-full text-[10px] border border-gray-300 border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-800 font-bold border-b border-gray-300">
                  <th className="p-1.5 border-r border-gray-300 text-center w-8">No</th>
                  <th className="p-1.5 border-r border-gray-300 text-left">Nama Bahan Baku / Tambahan</th>
                  <th className="p-1.5 border-r border-gray-300 text-center">Keripik Tempe Renyah</th>
                  <th className="p-1.5 border-r border-gray-300 text-center">Bumbu Tabur Gurih</th>
                  <th className="p-1.5 text-center">Keripik Kentang Original</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((m) => (
                  <tr key={m.no} className="border-b border-gray-200">
                    <td className="p-1 border-r border-gray-300 text-center">{m.no}</td>
                    <td className="p-1 border-r border-gray-300">{m.name}</td>
                    <td className="p-1 border-r border-gray-300 text-center font-bold text-emerald-700">
                      {m.p1 ? '✓' : '-'}
                    </td>
                    <td className="p-1 border-r border-gray-300 text-center font-bold text-emerald-700">
                      {m.p2 ? '✓' : '-'}
                    </td>
                    <td className="p-1 text-center font-bold text-emerald-700">
                      {m.p3 ? '✓' : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-200 text-[10px] text-gray-500">
          Dokumen Sistem Jaminan Produk Halal (SJPH) · {businessName}
          <div className="font-semibold text-gray-700 mt-1">Halaman 4 dari 5</div>
        </div>
      </div>

      {/* ====================================================
          HALAMAN 5: LAMPIRAN 9 & LAMPIRAN 16 (BEBAS BABI & AUDIT)
          ==================================================== */}
      <div className="sjph-page a4-page flex flex-col justify-between p-12 border border-gray-300 shadow-sm mx-auto my-4 bg-white relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2 text-[10px] text-gray-500 uppercase tracking-wider mb-4">
            <span>Sistem Jaminan Produk Halal (SJPH)</span>
            <span className="font-bold text-gray-700">{businessName}</span>
          </div>

          {/* LAMPIRAN 9 */}
          <div className="mb-6 border border-gray-300 p-4 rounded bg-gray-50/40">
            <div className="text-center font-bold text-xs uppercase text-gray-900 border-b pb-1.5 mb-2">
              LAMPIRAN 9: SURAT PERNYATAAN BEBAS BABI DAN BAHAN NAJIS
            </div>
            <p className="text-xs text-gray-800 leading-relaxed text-justify mb-3">
              Yang bertanda tangan di bawah ini, <strong>{ownerName}</strong>, selaku pimpinan usaha <strong>{businessName}</strong>, menyatakan dengan sebenarnya dan sanggup bertanggung jawab secara hukum bahwa:
            </p>
            <ol className="list-decimal list-inside text-xs text-gray-700 space-y-1 mb-4 pl-2">
              <li>Seluruh produk yang diproduksi dan didaftarkan sama sekali tidak mengandung babi, lemak babi, gelatin babi, maupun turunan babi lainnya.</li>
              <li>Fasilitas produksi, wadah, alat masak, dan area penyimpanan bebas dari kontaminasi najis besar (mughalladhah) maupun najis lainnya.</li>
              <li>Apabila di kemudian hari pernyataan ini terbukti tidak benar, kami bersedia menerima sanksi hukum sesuai ketentuan peraturan perundang-undangan yang berlaku.</li>
            </ol>

            <div className="flex justify-between items-end text-xs pt-2">
              <div>
                <span className="text-gray-500">Semarang, 20 September 2026</span>
                <div className="mt-2 w-28 h-16 border border-gray-400 border-dashed rounded flex flex-col items-center justify-center text-[9px] text-gray-500 bg-white">
                  <span>MATERAI</span>
                  <strong className="text-gray-700">Rp 10.000</strong>
                </div>
              </div>
              <div className="text-center w-48">
                <span className="text-gray-500 block mb-6">Yang Membuat Pernyataan,</span>
                <strong className="text-gray-900 block border-b border-gray-800 pb-1">{ownerName}</strong>
                <span className="text-[10px] text-gray-500">Pimpinan Usaha {businessName}</span>
              </div>
            </div>
          </div>

          {/* LAMPIRAN 16 */}
          <div>
            <div className="font-bold text-xs uppercase text-gray-900 mb-2">
              LAMPIRAN 16: HASIL AUDIT INTERNAL MANDIRI (CHECKLIST KEPATUHAN)
            </div>
            <table className="w-full text-[10px] border border-gray-300 border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-800 font-bold border-b border-gray-300">
                  <th className="p-1 border-r border-gray-300 text-center w-8">No</th>
                  <th className="p-1.5 border-r border-gray-300 text-left">Poin Kriteria Pemeriksaan Halal BPJPH</th>
                  <th className="p-1 text-center w-24">Hasil Audit</th>
                </tr>
              </thead>
              <tbody>
                {auditItems.map((a) => (
                  <tr key={a.no} className="border-b border-gray-200">
                    <td className="p-1 border-r border-gray-300 text-center">{a.no}</td>
                    <td className="p-1 border-r border-gray-300 text-gray-800">{a.item}</td>
                    <td className="p-1 text-center font-bold text-emerald-700 bg-emerald-50/50">
                      ✓ {a.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-200 text-[10px] text-gray-500">
          Dokumen Sistem Jaminan Produk Halal (SJPH) · {businessName}
          <div className="font-semibold text-gray-700 mt-1">Halaman 5 dari 5 (Lengkap)</div>
        </div>
      </div>
    </div>
  );
}
