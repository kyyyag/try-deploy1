// Konfigurasi data website SterlinkNet
// Anda atau tim junior dev dapat dengan mudah mengubah data di file ini tanpa perlu merusak struktur kode UI.

export const siteConfig = {
  company: {
    name: "SterlinkNet",
    tagline: "Penyedia Layanan Internet (ISP) Cepat, Stabil & Tanpa Batas",
    shortIdea: "Penyedia Layanan Internet (ISP) Berkecepatan Tinggi dengan Jaringan 100% Fiber Optic murni untuk kebutuhan rumah, bisnis, dan korporasi.",
    establishedYear: 2026,
    currentYear: new Date().getFullYear(),
    aboutDescription: "SterlinkNet hadir sebagai Penyedia Layanan Internet (ISP) yang berkomitmen menghadirkan konektivitas digital tanpa batas. Didukung oleh infrastruktur fiber optic modern dan tim teknisi berpengalaman, kami melayani pelanggan residensial serta instansi bisnis di Surabaya dan sekitarnya.",
    vision: "Menjadi mitra konektivitas internet terdepan yang andal, cepat, dan terjangkau di seluruh Indonesia.",
    mission: "Memberikan layanan internet berkualitas tinggi dengan uptime 99.5% serta dukungan pelanggan 24/7 yang responsif."
  },

  contact: {
    // Nomor WhatsApp utama
    whatsappNumber: "62811377455",
    whatsappDisplay: "0811-377-455",
    defaultMessage: "Halo Admin SterlinkNet, saya tertarik untuk berlangganan layanan internet.",

    // WhatsApp Informasi Aktivasi & Paket
    whatsappActivation: "62817383337",
    whatsappActivationDisplay: "0817-383-3337",

    // WhatsApp Customer Service
    whatsappCS: "62818129969",
    whatsappCSDisplay: "0818-129-969",

    // Social Media Links
    socialMedia: {
      whatsapp: "https://wa.me/62811377455?text=Halo%20Admin%20SterlinkNet%2C%20saya%20tertarik%20dengan%20layanan%20internet",
      facebook: "https://www.facebook.com/share/1EQ67ziAr4/",
      instagram: "https://www.instagram.com/sterlinknet?igsi=MTdrODhkMGdnbmY0MA=="
    },

    email: "@sterlinknet",
    supportHours: "24 Jam / 7 Hari Setiap Minggu"
  },

  // Alamat Kantor
  branchAddresses: [
    {
      city: "Surabaya",
      address: "Jl. Darmokali No.61, RT. 004, RW 004, Kel. Darmo, Kec. Wonokromo, Surabaya, Jawa Timur 60241",
      phone: "62811377455",
      email: "@sterlinknet",
      isHeadquarters: true
    }
  ],

  // Daftar Paket Layanan Internet
  packages: [
    // === 20 Mbps ===
    {
      id: "omp1-20",
      category: "20mbps",
      name: "OMP1-20",
      speed: "20 Mbps",
      duration: "1 Bulan",
      price: "155.000",
      period: "bulan",
      activationFee: "50.000",
      isPopular: false,
      popularTag: "",
      description: "Paket 1 bulan dengan kecepatan 20 Mbps. Cocok untuk browsing, media sosial, dan streaming.",
      features: [
        "Kecepatan hingga 20 Mbps",
        "Durasi 1 Bulan",
        "Unlimited Kuota (Tanpa FUP)",
        "Biaya Aktivasi Rp 50.000",
        "Dukungan CS 24/7"
      ]
    },

    // === 35 Mbps ===
    {
      id: "omp1-35",
      category: "35mbps",
      name: "OMP1-35",
      speed: "35 Mbps",
      duration: "1 Bulan",
      price: "180.000",
      period: "bulan",
      activationFee: "50.000",
      isPopular: false,
      popularTag: "",
      description: "Paket 1 bulan dengan kecepatan 35 Mbps. Pas untuk keluarga kecil dan streaming HD.",
      features: [
        "Kecepatan hingga 35 Mbps",
        "Durasi 1 Bulan",
        "Unlimited Kuota (Tanpa FUP)",
        "Biaya Aktivasi Rp 50.000",
        "Dukungan CS 24/7"
      ]
    },


    // === 50 Mbps ===
    {
      id: "omp1-50",
      category: "50mbps",
      name: "OMP1-50",
      speed: "50 Mbps",
      duration: "1 Bulan",
      price: "230.000",
      period: "bulan",
      activationFee: "50.000",
      isPopular: false,
      popularTag: "",
      description: "Paket 1 bulan dengan kecepatan 50 Mbps. Ideal untuk gaming, 4K streaming, dan WFH.",
      features: [
        "Kecepatan hingga 50 Mbps",
        "Durasi 1 Bulan",
        "Unlimited Kuota (Tanpa FUP)",
        "Biaya Aktivasi Rp 50.000",
        "Dukungan CS 24/7"
      ]
    }
  ],

  // Utility helper untuk menghasilkan link WhatsApp interaktif
  getWaLink(customText) {
    const text = customText || this.contact.defaultMessage;
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  getActivationWaLink(customText) {
    const text = customText || "Halo Admin SterlinkNet, saya ingin bertanya tentang informasi aktivasi dan paket internet.";
    return `https://wa.me/${this.contact.whatsappActivation}?text=${encodeURIComponent(text)}`;
  },

  getCSWaLink(customText) {
    const text = customText || "Halo Customer Service SterlinkNet, saya butuh bantuan.";
    return `https://wa.me/${this.contact.whatsappCS}?text=${encodeURIComponent(text)}`;
  },

  getPackageWaLink(pkgName, speed, price) {
    const text = `Halo Admin SterlinkNet, saya ingin berlangganan paket "${pkgName}" (Kecepatan: ${speed}, Harga: Rp ${price}). Mohon informasi proses pemasangannya. Terima kasih!`;
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }
};
