<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PK IPNU & IPPNU SMK NU Kaplongan | Portal Resmi Kesiswaan</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font & Icons -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        nu: {
                            dark: '#064e3b',
                            DEFAULT: '#047857',
                            light: '#10b981',
                            gold: '#d97706',
                            goldLight: '#fbbf24',
                            cream: '#fef3c7'
                        }
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif']
                    }
                }
            }
        }
    </script>
    <style>
        .hero-pattern {
            background-image: radial-gradient(rgba(217, 119, 6, 0.15) 1px, transparent 1px);
            background-size: 24px 24px;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden">

    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <!-- Logo & School Identity -->
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-gradient-to-tr from-nu-dark to-nu rounded-2xl flex items-center justify-center text-nu-gold font-bold text-xl shadow-lg border border-nu-gold/40 transform hover:rotate-6 transition-transform">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                        <div class="flex items-center space-x-1.5">
                            <span class="text-xs font-extrabold px-2 py-0.5 bg-nu-gold/10 text-nu-gold rounded-full border border-nu-gold/20">PK IPNU - IPPNU</span>
                        </div>
                        <span class="text-base sm:text-lg font-bold text-nu-dark tracking-tight block leading-tight mt-0.5">SMK NU KAPLONGAN</span>
                    </div>
                </div>

                <!-- Desktop Menu -->
                <nav class="hidden md:flex items-center space-x-7">
                    <a href="#beranda" class="text-nu-dark font-semibold hover:text-nu transition-colors text-sm">Beranda</a>
                    <a href="#tentang" class="text-slate-600 font-medium hover:text-nu transition-colors text-sm">Tentang & Peran</a>
                    <a href="#struktur" class="text-slate-600 font-medium hover:text-nu transition-colors text-sm">Pengurus</a>
                    <a href="#program" class="text-slate-600 font-medium hover:text-nu transition-colors text-sm">Kolaborasi Kesiswaan</a>
                    <a href="#kegiatan" class="text-slate-600 font-medium hover:text-nu transition-colors text-sm">Kegiatan</a>
                    <a href="#aspirasi" class="text-slate-600 font-medium hover:text-nu transition-colors text-sm">Layanan Aspirasi</a>
                </nav>

                <!-- CTA Button -->
                <div class="hidden md:block">
                    <a href="#aspirasi" class="bg-nu-dark hover:bg-nu text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all border border-nu-gold/30 flex items-center space-x-2">
                        <i class="fa-solid fa-comments"></i>
                        <span>Lapor / Aspirasi</span>
                    </a>
                </div>

                <!-- Mobile Menu Toggle -->
                <div class="md:hidden">
                    <button id="menu-btn" class="text-slate-700 hover:text-nu focus:outline-none p-2 rounded-xl bg-slate-100">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-xl">
            <a href="#beranda" class="block py-2 text-nu-dark font-semibold border-b border-slate-100">Beranda</a>
            <a href="#tentang" class="block py-2 text-slate-600 font-medium border-b border-slate-100">Tentang & Peran</a>
            <a href="#struktur" class="block py-2 text-slate-600 font-medium border-b border-slate-100">Struktur Pengurus</a>
            <a href="#program" class="block py-2 text-slate-600 font-medium border-b border-slate-100">Kolaborasi Kesiswaan</a>
            <a href="#kegiatan" class="block py-2 text-slate-600 font-medium border-b border-slate-100">Kegiatan & Galeri</a>
            <a href="#aspirasi" class="block py-2 text-slate-600 font-medium">Layanan Aspirasi Siswa</a>
            <div class="pt-2">
                <a href="#aspirasi" class="block text-center bg-nu-dark text-white py-3 rounded-xl font-bold text-sm shadow">Kirim Aspirasi</a>
            </div>
        </div>
    </header>

    <section id="beranda" class="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-nu-dark via-emerald-950 to-slate-950 text-white overflow-hidden hero-pattern">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1000">
                    <div class="inline-flex items-center space-x-2 bg-nu-gold/20 border border-nu-gold/40 px-4 py-1.5 rounded-full text-nu-goldLight text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                        <i class="fa-solid fa-star text-[10px]"></i>
                        <span>Mitra Strategis Kesiswaan SMK NU Kaplongan</span>
                    </div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                        Pimpinan Komisariat <span class="text-nu-goldLight">IPNU & IPPNU</span> SMK NU Kaplongan
                    </h1>
                    <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Organisasi pelajar berbasis Aswaja An-Nahdliyah yang bersinergi dengan bidang kesiswaan dalam membina kedisiplinan, prestasi akademik, keagamaan, dan pengembangan bakat siswa-siswi.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                        <a href="#program" class="bg-nu-gold hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 text-center flex items-center justify-center space-x-2">
                            <span>Jelajahi Program</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#tentang" class="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-md transition-all text-center">
                            Beda PK & OSIS?
                        </a>
                    </div>
                    <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                        <div>
                            <h4 class="text-2xl font-extrabold text-nu-gold">500+</h4>
                            <p class="text-xs text-slate-400 mt-1">Kader Pelajar</p>
                        </div>
                        <div>
                            <h4 class="text-2xl font-extrabold text-nu-gold">15+</h4>
                            <p class="text-xs text-slate-400 mt-1">Program Kerja</p>
                        </div>
                        <div>
                            <h4 class="text-2xl font-extrabold text-nu-gold">100%</h4>
                            <p class="text-xs text-slate-400 mt-1">Akhlak & Prestasi</p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 relative flex justify-center" data-aos="fade-left" data-aos-duration="1000">
                    <div class="relative w-full max-w-md">
                        <!-- Decorative glow -->
                        <div class="absolute -inset-1.5 bg-gradient-to-r from-nu-gold to-emerald-400 rounded-3xl blur-xl opacity-40 animate-pulse"></div>
                        <div class="relative bg-slate-900/90 border border-slate-700 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-xl space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 bg-nu rounded-xl flex items-center justify-center text-nu-gold font-bold">
                                        <i class="fa-solid fa-shield-halved"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-white text-sm">Portal Kesiswaan & IPNU</h3>
                                        <p class="text-[11px] text-slate-400">SMK NU Kaplongan Mandiri</p>
                                    </div>
                                </div>
                                <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-500/30">Aktif</span>
                            </div>
                            <div class="space-y-4">
                                <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/60 flex items-start space-x-3">
                                    <div class="text-nu-gold text-lg mt-0.5"><i class="fa-solid fa-mosque"></i></div>
                                    <div>
                                        <h4 class="text-sm font-bold text-white">Budaya Religi Sekolah</h4>
                                        <p class="text-xs text-slate-300 mt-1">Penggerak Dhuha berjamaah, Istighosah rutin, dan pembacaan Asmaul Husna.</p>
                                    </div>
                                </div>
                                <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/60 flex items-start space-x-3">
                                    <div class="text-nu-gold text-lg mt-0.5"><i class="fa-solid fa-hands-bound"></i></div>
                                    <div>
                                        <h4 class="text-sm font-bold text-white">Sinergi Kesiswaan</h4>
                                        <p class="text-xs text-slate-300 mt-1">Membantu tata tertib sekolah dengan pendekatan persuasif dan kekeluargaan.</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#aspirasi" class="block text-center w-full bg-nu-gold hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl text-sm shadow transition-all">
                                Sampaikan Aspirasi Siswa
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="tentang" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <span class="text-nu font-bold text-xs uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">Peran & Karakteristik</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Mengapa PK IPNU-IPPNU Berbeda & Melengkapi OSIS?</h2>
                <p class="text-slate-600 mt-3 text-base">Di SMK NU Kaplongan, OSIS fokus pada manajemen intra-sekolah umum, sementara PK IPNU-IPPNU hadir memperkuat karakter Aswaja, spiritualitas, dan kaderisasi khas NU tanpa tumpang tindih.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <!-- Card OSIS / Sinergi -->
                <div class="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 hover:border-nu/40 transition-all shadow-sm flex flex-col justify-between" data-aos="fade-right">
                    <div>
                        <div class="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                            <i class="fa-solid fa-users-gear"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Sinergi dengan OSIS & Kesiswaan</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-6">
                            PK IPNU-IPPNU tidak berdiri sendiri sebagai rival OSIS, melainkan bekerja berdampingan dengan Wakil Kepala Bidang Kesiswaan dan pengurus OSIS untuk mengelola kegiatan keagamaan, kedisiplinan positif, serta ekstrakurikuler kepemudaan.
                        </p>
                        <ul class="space-y-3 text-sm text-slate-700">
                            <li class="flex items-center space-x-3"><i class="fa-solid fa-check text-nu font-bold"></i><span>Membantu penegakan tata tertib sekolah berbasis akhlak</span></li>
                            <li class="flex items-center space-x-3"><i class="fa-solid fa-check text-nu font-bold"></i><span>Pengelolaan kegiatan peringatan hari besar Islam (PHBI)</span></li>
                            <li class="flex items-center space-x-3"><i class="fa-solid fa-check text-nu font-bold"></i><span>Pendampingan siswa baru melalui Masa Kesetiaan Anggota (MAKESTA)</span></li>
                        </ul>
                    </div>
                    <div class="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500">
                        <span>Fokus: Manajemen & Kedisiplinan Siswa</span>
                        <span class="text-nu">Kolaboratif</span>
                    </div>
                </div>

                <!-- Card PK IPNU IPPNU -->
                <div class="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-nu-gold/30 flex flex-col justify-between relative overflow-hidden" data-aos="fade-left">
                    <div class="absolute -right-10 -bottom-10 opacity-10 text-9xl">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div class="relative z-10">
                        <div class="w-14 h-14 bg-nu-gold text-slate-950 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                            <i class="fa-solid fa-book-quran"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-2">Kekhasan Aswaja & Kaderisasi</h3>
                        <p class="text-slate-300 text-sm leading-relaxed mb-6">
                            Sebagai komisariat di sekolah naungan LP Ma'arif NU, PK IPNU-IPPNU SMK NU Kaplongan mendidik kader agar memiliki amaliah Ahlussunnah wal Jamaah An-Nahdliyah, militansi organisasi, kecintaan pada NKRI, serta kecakapan skill vokasi.
                        </p>
                        <ul class="space-y-3 text-sm text-slate-200">
                            <li class="flex items-center space-x-3"><i class="fa-solid fa-check text-nu-gold font-bold"></i><span>Pengajian kitab kuning & bahtsul masail tingkat pelajar</span></li>
                            <li class="flex items-center space-x-3"><i class="fa-solid fa-check text-nu-gold font-bold"></i><span>Pelatihan jurnalistik pelajar & digital media kreatif</span></li>
                            <li class="flex items-center space-x-3"><i class="fa-solid fa-check text-nu-gold font-bold"></i><span>Jaringan alumni luas hingga Pimpinan Cabang & Wilayah</span></li>
                        </ul>
                    </div>
                    <div class="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-nu-goldLight">
                        <span>Fokus: Spiritual, Kaderisasi & Vokasi</span>
                        <span>Ideologis</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="struktur" class="py-24 bg-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <span class="text-nu font-bold text-xs uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">Kepengurusan</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Struktur Pimpinan Komisariat</h2>
                <p class="text-slate-600 mt-3">Daftar pimpinan PK IPNU & IPPNU SMK NU Kaplongan masa khidmat 2025/2026 yang siap melayani pelajar.</p>
            </div>

            <!-- Tab Switcher IPNU / IPPNU -->
            <div class="flex justify-center mb-12" data-aos="fade-up">
                <div class="bg-white p-2 rounded-2xl flex space-x-2 border border-slate-200 shadow-sm">
                    <button onclick="switchStruktur('ipnu')" id="btn-struct-ipnu" class="px-7 py-3 rounded-xl font-bold text-sm transition-all bg-nu-dark text-white shadow-md flex items-center space-x-2">
                        <i class="fa-solid fa-user-tie"></i>
                        <span>PK IPNU (Putra)</span>
                    </button>
                    <button onclick="switchStruktur('ippnu')" id="btn-struct-ippnu" class="px-7 py-3 rounded-xl font-bold text-sm transition-all text-slate-600 hover:text-nu-dark flex items-center space-x-2">
                        <i class="fa-solid fa-user-graduate"></i>
                        <span>PK IPPNU (Putri)</span>
                    </button>
                </div>
            </div>

            <!-- Content IPNU Structure -->
            <div id="struct-ipnu" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
                <!-- Ketua IPNU -->
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
                    <div class="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md border-2 border-nu-gold/50 relative">
                        <img src="https://placehold.co/300x300/047857/ffffff?text=Ketua+IPNU" alt="Ketua IPNU" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Rizky Maulan</h3>
                    <p class="text-nu text-xs font-bold uppercase tracking-wider mt-1">Ketua PK IPNU</p>
                    <p class="text-slate-500 text-xs mt-3">Kelas XII TKJ 1</p>
                </div>
                <!-- Sekretaris IPNU -->
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
                    <div class="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 relative">
                        <img src="https://placehold.co/300x300/064e3b/ffffff?text=Sekretaris" alt="Sekretaris IPNU" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Ahmad Zidan</h3>
                    <p class="text-nu text-xs font-bold uppercase tracking-wider mt-1">Sekretaris</p>
                    <p class="text-slate-500 text-xs mt-3">Kelas XI TKR 2</p>
                </div>
                <!-- Bendahara IPNU -->
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
                    <div class="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 relative">
                        <img src="https://placehold.co/300x300/064e3b/ffffff?text=Bendahara" alt="Bendahara IPNU" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">M. Farhan</h3>
                    <p class="text-nu text-xs font-bold uppercase tracking-wider mt-1">Bendahara</p>
                    <p class="text-slate-500 text-xs mt-3">Kelas XI TBSM 1</p>
                </div>
                <!-- Kaderisasi IPNU -->
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
                    <div class="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 relative">
                        <img src="https://placehold.co/300x300/064e3b/ffffff?text=Kaderisasi" alt="Kaderisasi IPNU" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Dimas Prayoga</h3>
                    <p class="text-nu text-xs font-bold uppercase tracking-wider mt-1">Bidang Kaderisasi</p>
                    <p class="text-slate-500 text-xs mt-3">Kelas XII RPL</p>
                </div>
            </div>

            <!-- Content IPPNU Structure -->
            <div id="struct-ippnu" class="hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
                <!-- Ketua IPPNU -->
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
                    <div class="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md border-2 border-nu-gold/50 relative">
                        <img src="https://placehold.co/300x300/d97706/ffffff?text=Ketua+IPPNU" alt="Ketua IPPNU" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Siti Aisyah</h3>
                    <p class="text-amber-700 text-xs font-bold uppercase tracking-wider mt-1">Ketua PK IPPNU</p>
                    <p class="text-slate-500 text-xs mt-3">Kelas XII AKL 1</p>
                </div>
                <!-- Sekretaris IPPNU -->
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
                    <div class="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 relative">
                        <img src="https://placehold.co/300x300/b45309/ffffff?text=Sekretaris" alt="Sekretaris IPPNU" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Nabila Zahra</h3>
                    <p class="text-amber-700 text-xs font-bold uppercase tracking-wider mt-1">Sekretaris</p>
                    <p class="text-slate-500 text-xs mt-3">Kelas XI OTKP 2</p>
                </div>
                <!-- Bendahara IPPNU -->
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
                    <div class="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 relative">
                        <img src="https://placehold.co/300x300/b45309/ffffff?text=Bendahara" alt="Bendahara IPPNU" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Dewi Lestari</h3>
                    <p class="text-amber-700 text-xs font-bold uppercase tracking-wider mt-1">Bendahara</p>
                    <p class="text-slate-500 text-xs mt-3">Kelas XI AKL 2</p>
                </div>
                <!-- Kaderisasi IPPNU -->
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
                    <div class="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 relative">
                        <img src="https://placehold.co/300x300/b45309/ffffff?text=Kaderisasi" alt="Kaderisasi IPPNU" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                    </div>
                    <h3 class="font-bold text-lg text-slate-900">Fatimah Azzahra</h3>
                    <p class="text-amber-700 text-xs font-bold uppercase tracking-wider mt-1">Bidang Kaderisasi</p>
                    <p class="text-slate-500 text-xs mt-3">Kelas XII RPL</p>
                </div>
            </div>
        </div>
    </section>

    <section id="program" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <span class="text-nu font-bold text-xs uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">Program Kolaborasi</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Program Kerja & Aksi Bersama Kesiswaan</h2>
                <p class="text-slate-600 mt-3">Program nyata PK IPNU-IPPNU yang terintegrasi dengan agenda sekolah untuk kemajuan siswa SMK NU Kaplongan.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Program 1 -->
                <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-nu/50 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-14 h-14 bg-emerald-100 text-nu rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-nu group-hover:text-white transition-colors">
                        <i class="fa-solid fa-kaaba"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Imtaq & Pesantren Kilat</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6">
                        Mengkoordinir sholat dhuha berjamaah setiap pagi, kultum siswa, tadarus Al-Quran sebelum pelajaran dimulai, serta pesantren kilat Ramadan bekerja sama dengan guru agama.
                    </p>
                    <div class="flex items-center space-x-2 text-xs font-bold text-nu">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Rutinitas Harian & Mingguan</span>
                    </div>
                </div>

                <!-- Program 2 -->
                <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-nu/50 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-nu-gold group-hover:text-slate-950 transition-colors">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Kaderisasi & Pelatihan Disiplin</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6">
                        Penyelenggaraan Masa Kesetiaan Anggota (Makesta) bagi siswa kelas X, patroli kedisiplinan positif di gerbang sekolah, serta pelatihan kepemimpinan dasar berwawasan Aswaja.
                    </p>
                    <div class="flex items-center space-x-2 text-xs font-bold text-amber-700">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Agenda Tahunan Sekolah</span>
                    </div>
                </div>

                <!-- Program 3 -->
                <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-nu/50 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-14 h-14 bg-emerald-100 text-nu rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-nu group-hover:text-white transition-colors">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-900 mb-3">Klinik Vokasi & Literasi Digital</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6">
                        Mewadahi minat bakat siswa dalam bidang multimedia, jurnalistik sekolah, pameran karya produktif (RPL, TKR, TBSM, AKL, OTKP), serta pencegahan hoaks di kalangan pelajar.
                    </p>
                    <div class="flex items-center space-x-2 text-xs font-bold text-nu">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Pengembangan Bakat Siswa</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="kegiatan" class="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16" data-aos="fade-up">
                <div>
                    <span class="text-nu-gold font-bold text-xs uppercase tracking-wider bg-nu-gold/10 px-4 py-1.5 rounded-full border border-nu-gold/20">Dokumentasi Lapangan</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-3">Kegiatan & Galeri PK IPNU-IPPNU</h2>
                </div>
                <div class="mt-4 md:mt-0 text-slate-400 text-sm">
                    <span>Momen kebersamaan dan aksi nyata di SMK NU Kaplongan</span>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
                <div class="relative group overflow-hidden rounded-3xl shadow-xl h-72 border border-slate-800">
                    <img src="https://placehold.co/600x600/047857/ffffff?text=Makesta+Siswa" alt="Makesta" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 flex flex-col justify-end p-6">
                        <span class="text-xs text-nu-gold font-bold mb-1">Kaderisasi</span>
                        <h4 class="font-bold text-white text-lg">Makesta Akbar Siswa Baru</h4>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-3xl shadow-xl h-72 border border-slate-800">
                    <img src="https://placehold.co/600x600/d97706/ffffff?text=Sholat+Dhuha" alt="Dhuha" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 flex flex-col justify-end p-6">
                        <span class="text-xs text-nu-gold font-bold mb-1">Keagamaan</span>
                        <h4 class="font-bold text-white text-lg">Pembiasaan Sholat Dhuha & Doa</h4>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-3xl shadow-xl h-72 border border-slate-800">
                    <img src="https://placehold.co/600x600/064e3b/ffffff?text=Pelantikan+PK" alt="Pelantikan" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 flex flex-col justify-end p-6">
                        <span class="text-xs text-nu-gold font-bold mb-1">Organisasi</span>
                        <h4 class="font-bold text-white text-lg">Pelantikan Pengurus PK Baru</h4>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-3xl shadow-xl h-72 border border-slate-800">
                    <img src="https://placehold.co/600x600/b45309/ffffff?text=Bakti+Sosial" alt="Baksos" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 flex flex-col justify-end p-6">
                        <span class="text-xs text-nu-gold font-bold mb-1">Sosial Masyarakat</span>
                        <h4 class="font-bold text-white text-lg">Bakti Sosial & Jumat Berkah</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="aspirasi" class="py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div class="lg:col-span-5 space-y-6" data-aos="fade-right">
                    <span class="text-nu font-bold text-xs uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">Suara Pelajar</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900">Layanan Aspirasi & Pengaduan Kesiswaan</h2>
                    <p class="text-slate-600 text-sm leading-relaxed">
                        Punya saran untuk kemajuan fasilitas sekolah, ide kegiatan ekstrakurikuler yang seru, atau kendala seputar kegiatan belajar mengajar? Sampaikan melalui portal resmi PK IPNU-IPPNU yang terhubung langsung dengan bagian Kesiswaan SMK NU Kaplongan.
                    </p>
                    <div class="space-y-4 pt-2">
                        <div class="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <div class="w-12 h-12 bg-emerald-100 text-nu rounded-xl flex items-center justify-center text-lg"><i class="fa-solid fa-user-shield"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm">Dijamin Kerahasiaannya</h4>
                                <p class="text-slate-500 text-xs mt-0.5">Identitas pelapor dilindungi dan ditangani secara profesional.</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <div class="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center text-lg"><i class="fa-solid fa-bolt"></i></div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm">Respon Cepat</h4>
                                <p class="text-slate-500 text-xs mt-0.5">Ditinjau oleh Tim Pengurus Harian & Pembina Kesiswaan.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl" data-aos="fade-left">
                    <h3 class="text-2xl font-bold text-slate-900 mb-6">Formulir Aspirasi Siswa</h3>
                    <form onsubmit="handleAspirasiSubmit(event)" class="space-y-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nama Lengkap (Opsional / Anonim)</label>
                                <input type="text" id="asp-nama" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-nu focus:border-nu outline-none text-sm bg-slate-50/50" placeholder="Contoh: Muhammad Ali / Hamba Allah">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Kelas / Jurusan</label>
                                <input type="text" id="asp-kelas" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-nu focus:border-nu outline-none text-sm bg-slate-50/50" placeholder="Contoh: XI TKJ 1">
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Kategori Aspirasi / Laporan</label>
                            <select id="asp-kategori" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-nu focus:border-nu outline-none text-sm bg-slate-50/50">
                                <option>Fasilitas & Sarana Sekolah</option>
                                <option>Kegiatan Keagamaan / Ekstrakurikuler</option>
                                <option>Kedisiplinan & Ketertiban</option>
                                <option>Saran & Ide Kreatif Program PK</option>
                                <option>Lainnya</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Isi Pesan / Aspirasi</label>
                            <textarea id="asp-pesan" rows="4" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-nu focus:border-nu outline-none text-sm bg-slate-50/50" placeholder="Tuliskan saran atau masukan Anda secara jelas dan sopan..."></textarea>
                        </div>
                        <button type="submit" class="w-full bg-nu-dark hover:bg-nu text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2">
                            <i class="fa-solid fa-paper-plane"></i>
                            <span>Kirim Aspirasi Sekarang</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                <div class="space-y-4 md:col-span-2">
                    <div class="flex items-center space-x-3">
                        <div class="w-12 h-12 bg-nu rounded-2xl flex items-center justify-center text-nu-gold font-bold text-xl border border-nu-gold/50">
                            <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div>
                            <span class="text-base font-bold tracking-tight block">PK IPNU & IPPNU</span>
                            <span class="text-xs text-nu-gold font-semibold">SMK NU KAPLONGAN</span>
                        </div>
                    </div>
                    <p class="text-slate-400 text-sm max-w-sm leading-relaxed">
                        Berkhidmat membina pelajar berkarakter Aswaja, unggul dalam vokasi, serta siap menjadi pemimpin masa depan bangsa yang berakhlakul karimah.
                    </p>
                    <div class="flex space-x-3 pt-2">
                        <a href="#" class="w-10 h-10 bg-slate-900 hover:bg-nu text-white rounded-xl flex items-center justify-center transition-colors border border-slate-800"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="w-10 h-10 bg-slate-900 hover:bg-nu text-white rounded-xl flex items-center justify-center transition-colors border border-slate-800"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="w-10 h-10 bg-slate-900 hover:bg-nu text-white rounded-xl flex items-center justify-center transition-colors border border-slate-800"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#" class="w-10 h-10 bg-slate-900 hover:bg-nu text-white rounded-xl flex items-center justify-center transition-colors border border-slate-800"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-base mb-4 text-nu-gold">Tautan Navigasi</h4>
                    <ul class="space-y-2.5 text-sm text-slate-400">
                        <li><a href="#beranda" class="hover:text-white transition-colors">Beranda</a></li>
                        <li><a href="#tentang" class="hover:text-white transition-colors">Tentang & Peran</a></li>
                        <li><a href="#struktur" class="hover:text-white transition-colors">Struktur Pengurus</a></li>
                        <li><a href="#program" class="hover:text-white transition-colors">Program Kolaborasi</a></li>
                        <li><a href="#kegiatan" class="hover:text-white transition-colors">Galeri Kegiatan</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-base mb-4 text-nu-gold">Kontak & Lokasi</h4>
                    <p class="text-sm text-slate-400 mb-2">Komplek Kampus SMK NU Kaplongan, Karangampel, Indramayu, Jawa Barat.</p>
                    <p class="text-sm text-slate-400">Email: pk.ipnuippnu@smknukaplongan.sch.id</p>
                </div>
            </div>
            <div class="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
                <p>&copy; 2026 PK IPNU & IPPNU SMK NU Kaplongan. Seluruh Hak Cipta Dilindungi.</p>
            </div>
        </div>
    </footer>

    <script>
        // Initialize AOS animation library
        AOS.init({
            duration: 800,
            once: true,
            offset: 50
        });

        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Switch Structure Tab (IPNU / IPPNU)
        function switchStruktur(type) {
            const btnIpnu = document.getElementById('btn-struct-ipnu');
            const btnIppnu = document.getElementById('btn-struct-ippnu');
            const structIpnu = document.getElementById('struct-ipnu');
            const structIppnu = document.getElementById('struct-ippnu');

            if (type === 'ipnu') {
                btnIpnu.className = "px-7 py-3 rounded-xl font-bold text-sm transition-all bg-nu-dark text-white shadow-md flex items-center space-x-2";
                btnIppnu.className = "px-7 py-3 rounded-xl font-bold text-sm transition-all text-slate-600 hover:text-nu-dark flex items-center space-x-2";
                structIpnu.classList.remove('hidden');
                structIppnu.classList.add('hidden');
            } else {
                btnIppnu.className = "px-7 py-3 rounded-xl font-bold text-sm transition-all bg-nu-gold text-slate-950 shadow-md flex items-center space-x-2";
                btnIpnu.className = "px-7 py-3 rounded-xl font-bold text-sm transition-all text-slate-600 hover:text-nu-dark flex items-center space-x-2";
                structIppnu.classList.remove('hidden');
                structIpnu.classList.add('hidden');
            }
        }

        // Form Aspirasi Submit Handler (No alert())
        function handleAspirasiSubmit(e) {
            e.preventDefault();
            
            const nama = document.getElementById('asp-nama').value || 'Pelajar SMK NU Kaplongan';
            const kelas = document.getElementById('asp-kelas').value;
            const kategori = document.getElementById('asp-kategori').value;

            // Create notification popup
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-nu-gold flex items-center space-x-4 animate-bounce';
            notification.innerHTML = `
                <div class="w-10 h-10 bg-nu-gold text-slate-950 rounded-xl flex items-center justify-center font-bold text-lg"><i class="fa-solid fa-check"></i></div>
                <div>
                    <h4 class="font-bold text-sm text-nu-gold">Aspirasi Berhasil Terkirim!</h4>
                    <p class="text-xs text-slate-300">Terima kasih ${nama} (${kelas}). Masukan untuk kategori <strong>${kategori}</strong> telah diterima bidang Kesiswaan.</p>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 5000);

            e.target.reset();
        }
    </script>
</body>
</html>
