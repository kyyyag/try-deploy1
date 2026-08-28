# Issue Tracking & Planning — SterlinkNet Website

Dokumentasi implementasi perubahan pada website SterlinkNet berdasarkan spesifikasi kebutuhan.

---

## 1. Implementasi Logo (`Logo.png`)
- **Source**: `sterlinknew/frontend/src/assets/images/Logo.png`
- **Tujuan**: `public/images/Logo.png`
- **Status**: ✅ Selesai
- **Implementasi**:
  - Logo `Logo.png` telah disalin ke folder `public/images/`.
  - Ditampilkan pada [Navbar.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Navbar.astro) menggantikan icon kotak gradient lama.
  - Ditampilkan pada [Footer.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Footer.astro).

---

## 2. Pembaruan Tahun Berdiri & Penghapusan Referensi 2018 / Pengalaman
- **Spesifikasi**: Ganti semua yang berhubungan dengan 2018 atau tahun berdiri dengan tahun **2026** saja serta keseluruhan yang berhubungan dengan pengalaman atau pun 2018.
- **Status**: ✅ Selesai
- **Implementasi**:
  - [siteConfig.js](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/data/siteConfig.js): `establishedYear` diatur menjadi `2026`, getter `yearsOfExperience` dihapus.
  - [AboutSection.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/AboutSection.astro): Pilar pengalaman diubah menjadi pilar "Koneksi Stabil & Handal (99.9% Uptime)" dan tahun diperbarui ke 2026.
  - [Hero.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Hero.astro): Badge diperbarui ke "Penyedia Layanan Internet (ISP) Fiber Optic 2026".
  - [Footer.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Footer.astro): Badge pengalaman dihapus, copyright diubah menjadi `© 2026 SterlinkNet`.
  - [about.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/pages/about.astro): Timeline lama dihapus dan diganti dengan "Komitmen & Keunggulan Layanan".

---

## 3. Kantor Layanan Tunggal Surabaya
- **Alamat**: Jl. Darmokali No.61, RT. 004, RW 004, Kel. Darmo, Kec. Wonokromo, Surabaya, Jawa Timur 60241
- **Status**: ✅ Selesai
- **Implementasi**:
  - [siteConfig.js](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/data/siteConfig.js): Menghapus cabang Jakarta, Bandung, Semarang, Medan. Menyisakan hanya Surabaya dengan alamat lengkap di atas.
  - [BranchesSection.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/BranchesSection.astro): Judul diubah menjadi "Kantor Layanan Kami di Surabaya" dengan layout terpusat.
  - [contact.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/pages/contact.astro): Menghapus referensi multi-kota, fokus pada Surabaya.
  - [Hero.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Hero.astro): Coverage jaringan diperbarui menjadi "Surabaya & Sekitarnya".

---

## 4. Implementasi Nomor WhatsApp
- **Spesifikasi**:
  - WhatsApp Utama: `+6281510781558` (`+62 815-1078-1558`)
  - WA Informasi Aktivasi & Paket: `0817383337` (`0817-383-3337`)
  - WA CS (Customer Service): `0818129969` (`0818-129-969`)
- **Status**: ✅ Selesai
- **Implementasi**:
  - [siteConfig.js](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/data/siteConfig.js): Menambahkan field `whatsappNumber`, `whatsappActivation`, `whatsappCS` beserta helper link generator: `getWaLink()`, `getActivationWaLink()`, dan `getCSWaLink()`.
  - [ContactSection.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/ContactSection.astro): Menampilkan 3 kartu WhatsApp terpisah untuk WA Utama, WA Aktivasi & Paket, dan WA CS.
  - [FloatingWhatsApp.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/FloatingWhatsApp.astro): Menggunakan nomor WA utama baru.

---

## 5. Implementasi Link Sosial Media
- **Spesifikasi**:
  - Instagram: `https://www.instagram.com/sterlinknet?igsi=MTdrODhkMGdnbmY0MA==`
  - Facebook: `https://www.facebook.com/share/1EQ67ziAr4/`
  - Email: `@sterlinknet`
- **Status**: ✅ Selesai
- **Implementasi**:
  - [siteConfig.js](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/data/siteConfig.js): Mengupdate objek `socialMedia` dan field `email`. Menghapus link LinkedIn.
  - [Footer.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Footer.astro) & [ContactSection.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/ContactSection.astro): Link aktif mengarah ke Instagram & Facebook resmi, email ditampilkan `@sterlinknet`.

---

## 6. Implementasi Skema 12 Paket Layanan Internet
- **Skema Paket**:
  1. **omp1-20**: Paket 1 Bulan, 20 Mbps — Rp 155.000 + Biaya Aktivasi Rp 50.000
  2. **omp3-20**: Paket 3 Bulan, 20 Mbps — Rp 450.000
  3. **omp6-20**: Paket 6 Bulan, 20 Mbps — Rp 870.000
  4. **omp12-20**: Paket 12 Bulan, 20 Mbps — Rp 1.680.000
  5. **omp1-35**: Paket 1 Bulan, 35 Mbps — Rp 180.000 + Biaya Aktivasi Rp 50.000
  6. **omp3-35**: Paket 3 Bulan, 35 Mbps — Rp 525.000 *(Populer)*
  7. **omp6-35**: Paket 6 Bulan, 35 Mbps — Rp 1.020.000
  8. **omp12-35**: Paket 12 Bulan, 35 Mbps — Rp 1.980.000
  9. **omp1-50**: Paket 1 Bulan, 50 Mbps — Rp 230.000 + Biaya Aktivasi Rp 50.000
  10. **omp3-50**: Paket 3 Bulan, 50 Mbps — Rp 675.000
  11. **omp6-50**: Paket 6 Bulan, 50 Mbps — Rp 1.320.000
  12. **omp12-50**: Paket 12 Bulan, 50 Mbps — Rp 2.580.000
- **Status**: ✅ Selesai
- **Implementasi**:
  - [siteConfig.js](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/data/siteConfig.js): Array `packages` berisi ke-12 paket lengkap dengan kategori kecepatan (`20mbps`, `35mbps`, `50mbps`), durasi, harga, dan biaya aktivasi.
  - [PricingSection.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/PricingSection.astro): Filter kategori berbasis kecepatan (Semua, 20 Mbps, 35 Mbps, 50 Mbps), badge biaya aktivasi, dan tombol direct WA order dengan pesan otomatis.

---

## 7. Title Icon / Favicon (`Logo.ico`)
- **Source**: `sterlinknew/frontend/src/assets/icons/Logo.ico`
- **Tujuan**: `public/favicon.ico`
- **Status**: ✅ Selesai
- **Implementasi**:
  - `Logo.ico` disalin menggantikan `public/favicon.ico`.
  - [Layout.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/layouts/Layout.astro) diperbarui untuk memuat `<link rel="icon" type="image/x-icon" href="/favicon.ico" />`.

---

## 8. Brand Name Navbar (`sterlink name.jpeg`)
- **Source**: `sterlinknew/frontend/src/assets/images/sterlink name.jpeg`
- **Tujuan**: `public/images/sterlink-name.jpeg`
- **Status**: ✅ Selesai
- **Implementasi**:
  - File disalin ke `public/images/sterlink-name.jpeg`.
  - [Navbar.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Navbar.astro) & [Footer.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Footer.astro) menggunakan gambar ini sebagai elemen brand name.

---

## 9. Kaitkan Favicon Icon & Images di Navbar/Footer
- **Spesifikasi**: Pastikan Logo.ico digunakan sebagai favicon title, Logo.png & sterlink-name tampil di navbar dan footer.
- **Status**: ✅ Selesai
- **Implementasi**:
  - [Layout.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/layouts/Layout.astro): Favicon diubah dari `favicon.png` ke `favicon.ico` (`<link rel="icon" type="image/x-icon" href="/favicon.ico" />`).
  - [Navbar.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Navbar.astro): Logo.png + sterlink-name.jpeg tetap ditampilkan dengan styling dark theme (brightness-0 invert).
  - [Footer.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Footer.astro): Logo.png + sterlink-name.jpeg ditampilkan dengan glow effect.

---

## 10. Center-kan 3 Kartu Packages di Halaman
- **Spesifikasi**: Tiga kartu paket (OMP1-20, OMP1-35, OMP1-50) harus di-center di halaman.
- **Status**: ✅ Selesai
- **Implementasi**:
  - [PricingSection.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/PricingSection.astro): Grid diubah dari `lg:grid-cols-3 xl:grid-cols-4` menjadi `lg:grid-cols-3` dengan `max-w-5xl mx-auto` agar 3 kartu selalu centered.

---

## 11. Transformasi ke Tema Aeon Astro (Dark Futuristic)
- **Spesifikasi**: Ubah tampilan seluruh website menjadi dark theme terinspirasi Aeon Astro.
- **Status**: ✅ Selesai
- **Implementasi**:
  - [global.css](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/styles/global.css): Menambahkan dark base styles, glassmorphism utilities (`.glass-card`), glow effects (`.glow-indigo`, `.glow-emerald`), neon text shadow (`.text-glow`), custom scrollbar, dan animasi keyframes (float, shimmer, glow-pulse, slide-up).
  - [Layout.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/layouts/Layout.astro): Body background `bg-[#0a0a1a]`, text `text-gray-100`.
  - [Navbar.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Navbar.astro): Dark header background `bg-[#0a0a1a]/90 backdrop-blur-xl`, text terang, hover underline neon.
  - [Hero.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Hero.astro): Dark gradient background, glowing orbs, grid pattern overlay, gradient text, enhanced visual card.
  - [AboutSection.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/AboutSection.astro): Dark background, glassmorphism cards, gradient text highlights.
  - [PricingSection.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/PricingSection.astro): Dark glassmorphism cards, gradient pricing, neon filter buttons.
  - [BranchesSection.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/BranchesSection.astro): Dark background, glass card dengan indigo glow.
  - [ContactSection.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/ContactSection.astro): Dark form inputs, dark WhatsApp cards, glassmorphism container.
  - [Footer.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/Footer.astro): Enhanced dark `bg-[#060614]`, indigo borders, glow effects pada logo.
  - [FloatingWhatsApp.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/components/FloatingWhatsApp.astro): Dark styled tooltip.
  - Semua halaman ([packages.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/pages/packages.astro), [about.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/pages/about.astro), [contact.astro](file:///c:/Users/STERLINK-OPS-LP/Documents/try%20deploy1/src/pages/contact.astro)): Dark gradient page headers.
  - Semua perubahan telah disinkronkan ke `sterlinknew/frontend/` untuk deployment GitHub Pages.
