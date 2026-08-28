# UI Fixes & Enhancements Planning

## 1. Perbaikan Icon dan Logo
- Mengaitkan logo icon (favicon) di tag `<title>` (Layout.astro) agar menggunakan *base path* yang tepat.
- Menampilkan logo gambar (`Logo.png` dan `sterlink-name.jpeg`) pada Navbar dan Footer dengan menggunakan `import.meta.env.BASE_URL` agar tampil sempurna saat di-deploy ke GitHub Pages.

## 2. Penyesuaian Paket Layanan (Pricing)
- Memusatkan (center) tampilan kartu paket layanan di halaman `Packages.astro` dan `PricingSection.astro`.
- Menyederhanakan pilihan paket dengan hanya menampilkan 3 paket utama: OMP1-20, OMP1-35, dan OMP1-50.
- Menghapus tab filter kecepatan karena pilihan paket sudah ramping dan terfokus.

## 3. Perbaikan Navigasi (Binding Link)
- Memperbaiki binding URL pada menu di Navbar (Desktop & Mobile) dan Footer.
- Menerapkan `import.meta.env.BASE_URL` pada setiap `href` agar *routing* ke halaman `/about`, `/packages`, dan `/contact` dapat diakses tanpa *error Not Found (404)* meskipun situs di-host dalam sub-direktori GitHub Pages.
