import { ProductGuide } from '../types';

export const USAGE_STEPS = [
  {
    step: 1,
    title: "Masuk ke Dashboard Produk",
    desc: "Buka menu Dashboard atau klik Akses Produk untuk melihat overview 9 modul, 7 worksheet, dan AI tools.",
    icon: "LayoutDashboard"
  },
  {
    step: 2,
    title: "Konsultasi AI Asisten AMI-GPT",
    desc: "Gunakan AI Asisten AMI-GPT selama 24/7 untuk konsultasi konsep ISO 9001:2015 dan panduan audit real-time.",
    icon: "Bot"
  },
  {
    step: 3,
    title: "Ikuti Pre-test Pengetahuan",
    desc: "Lakukan Pre-test untuk mengukur tingkat pemahaman awal Anda sebelum memulai pembelajaran materi.",
    icon: "CheckSquare"
  },
  {
    step: 4,
    title: "Pelajari 9 Modul Ebook & Audio",
    desc: "Pelajari materi secara bertahap melalui Ebook PDF, dengarkan Podcast Audio, telusuri Mindmap & Infografis.",
    icon: "BookOpen"
  },
  {
    step: 5,
    title: "Tulis Temuan dengan PLOR & CAPA",
    desc: "Gunakan Workbook AI – PLOR untuk merumuskan temuan dan CAPA Generator (Key: inayah) untuk tindak perbaikan.",
    icon: "FileSignature"
  },
  {
    step: 6,
    title: "Gunakan GPT Ceklist & Simulasi",
    desc: "Lakukan simulasi wawancara audit dan susun pertanyaan investigatif berbasis risiko menggunakan AI Ceklist.",
    icon: "Sparkles"
  },
  {
    step: 7,
    title: "Unduh 7 Worksheet Operasional",
    desc: "Unduh template formulir FR.AMI.02.01 hingga FR.AMI.02.07 untuk digunakan langsung di institusi/perusahaan.",
    icon: "DownloadCloud"
  },
  {
    step: 8,
    title: "Manfaatkan Fitur Layar Penuh",
    desc: "Gunakan mode Layar Penuh (Fullscreen) untuk kenyamanan optimal saat membaca modul di perangkat mobile/tablet.",
    icon: "Maximize2"
  },
  {
    step: 9,
    title: "Post-test & Sertifikasi Mandiri",
    desc: "Akhiri seluruh siklus belajar dengan Post-test untuk mengevaluasi peningkatan kompetensi dan sertifikasi mandiri.",
    icon: "Award"
  }
];

export const PRODUCT_GUIDES: ProductGuide[] = [
  {
    id: "guide-modules",
    title: "Panduan Modul Ebook & Audiobook",
    category: "Modul & Audio",
    badge: "9 Modul Lengkap",
    summary: "Panduan mengoptimalkan 9 bab materi, pemutar podcast audio terintegrasi, slide presentasi, mindmap, dan infografis.",
    steps: [
      "Pilih salah satu bab dari daftar 9 Modul di halaman Modul Pembelajaran.",
      "Gunakan Audio Player untuk mendengarkan ulasan podcast sembari membaca teks Ebook.",
      "Buka tab Slide untuk review poin kunci cepat atau tab Mindmap & Infografis untuk visualisasi komprehensif.",
      "Gunakan tombol Fullscreen Reader untuk membaca tanpa distraksi atau tombol Unduh untuk menyimpan arsip PDF/MP3."
    ],
    tips: [
      "Podcast berdurasi 10-22 menit dirancang ringkas dan padat studi kasus praktis.",
      "Setiap bab telah dipetakan dengan klausul ISO 9001:2015 terkait (Klausul 4 hingga 10)."
    ]
  },
  {
    id: "guide-ami-gpt",
    title: "Panduan AI Asisten AMI-GPT (Versi 2026)",
    category: "AI Asisten 24/7",
    badge: "Smart Consultant 2026",
    summary: "Cara memanfaatkan asisten cerdas AI AMI-GPT (Edisi Mutakhir 2026) untuk konsultasi audit mutu internal dan regulasi ISO secara real-time.",
    steps: [
      "Buka AI Asisten AMI-GPT melalui menu AI Tools atau tombol pintasan.",
      "Tanyakan keraguan Anda seputar penafsiran klausul ISO 9001:2015 dan ISO 19011:2026 (contoh: klausul 9.2, 10.2, atau manajemen program audit).",
      "Minta contoh pertanyaan audit untuk proses khusus (misal: proses pengadaan, QC, kalibrasi, IT, atau HRD).",
      "Gunakan untuk menguji apakah suatu temuan masuk kategori Mayor, Minor, atau Observasi berbasis risiko."
    ],
    tips: [
      "AI siap sedia 24 jam sehari 7 hari seminggu mendampingi belajar dan operasional audit Anda.",
      "Beri konteks situasi yang jelas untuk mendapatkan saran audit yang paling spesifik dan terstandar."
    ]
  },
  {
    id: "guide-checklist-simulasi",
    title: "Panduan Custom GPT & Simulasi Audit",
    category: "AI Simulasi & Checklist",
    badge: "Interactive Roleplay",
    summary: "Panduan lengkap fungsi Custom GPT sebagai asisten digital auditor dan Simulasi Audit sebagai sarana latihan praktik menghadapi beragam karakter auditee.",
    steps: [
      "Persiapan & Klausul: Manfaatkan Custom GPT untuk memetakan klausul ISO 9001:2015 dan menyusun checklist spesifik berbasis bukti.",
      "Pilih Karakter Auditee: Lakukan simulasi menghadapi karakter Kooperatif, Banyak bicara, Jawab singkat, Defensif, Tidak transparan, Arogan, Gugup, Mengalihkan topik, atau Overconfident.",
      "Latihan Alur Audit: Terapkan siklus Bertanya → Menggali Informasi → Meminta Bukti Objektif → Mengendalikan Komunikasi → Menarik Kesimpulan Audit secara Objektif.",
      "Evaluasi & Peningkatan: Jadikan hasil simulasi sebagai bahan evaluasi untuk meningkatkan ketajaman investigasi dan profesionalisme auditor."
    ],
    tips: [
      "Siklus Pembelajaran: Persiapan → Checklist → Simulasi → Evaluasi → Peningkatan kemampuan auditor.",
      "Catatan Penting: Custom GPT bukan pengganti auditor. Keputusan dan kesimpulan audit tetap harus berdasarkan bukti objektif, kriteria audit, dan penilaian auditor yang kompeten."
    ]
  },
  {
    id: "guide-plor",
    title: "Panduan Metoda PLOR (Penulisan Temuan)",
    category: "Metodologi Audit",
    badge: "PLOR Standard",
    summary: "Formula baku penulisan temuan audit mutu agar objektif, jelas, tidak terbantahkan, dan berorientasi solusi.",
    steps: [
      "Problem (P): Tulis pernyataan masalah/ketidaksesuaian secara singkat, lugas, dan terbebas dari opini pribadi.",
      "Location (L): Sebutkan nama departemen, lini kerja, nomor stasiun, atau area spesifik tempat temuan terjadi.",
      "Objective Evidence (O): Cantumkan bukti fisik nyata (nomor dokumen, kode batch, sampel tanggal, hasil ukur).",
      "Reference (R): Cantumkan klausul standar ISO 9001:2015 atau nomor SOP/IK internal organisasi yang dilanggar."
    ],
    tips: [
      "Gunakan tool 'Menulis Temuan Audit – Metoda PLOR' untuk menyusun format ini secara otomatis.",
      "Pastikan bukti objektif (O) memiliki data terukur atau nomor dokumen fisik yang dapat diverifikasi."
    ]
  },
  {
    id: "guide-capa",
    title: "Panduan CAPA Generator (Tindakan Perbaikan)",
    category: "Corrective Action",
    badge: "5-Why & RCA",
    summary: "Metodologi analisis akar penyebab dan formulasi tindakan korektif pencegahan ketidaksesuaian berulang.",
    steps: [
      "Buka CAPA Generator melalui menu AI Tools atau link yang tersedia.",
      "Input temuan PLOR yang telah dibuat sebelumnya ke dalam sistem.",
      "Lakukan Analisis Akar Masalah (Root Cause Analysis) dengan metode 5-Why: gali penyebab hingga ke faktor sistemik, bukan sekadar kelalaian individu.",
      "Rumuskan dua lapisan tindakan: Koreksi Langsung (penyelesaian jangka pendek) dan Tindakan Korektif CAPA (perbaikan SOP/Sistem jangka panjang)."
    ],
    tips: [
      "Matriks analisis CAPA dirancang terintegrasi dengan Klausul 10.2 ISO 9001:2015.",
      "Sebaiknya gunakan perangkat Laptop atau PC saat menyusun matriks CAPA."
    ]
  },
  {
    id: "guide-iso-19011",
    title: "Panduan ISO 19011 Audit Asisten AI (2026)",
    category: "AI Panduan ISO 19011",
    badge: "ISO 19011:2026",
    summary: "Panduan lengkap pengoperasian ISO 19011 Audit Assistant untuk memandu program audit, 7 prinsip audit, sampling audit berbasis risiko, dan simulasi evaluasi auditor.",
    steps: [
      "Buka ISO 19011 Audit Asisten AI melalui menu AI Tools atau link yang tersedia.",
      "Konsultasikan 7 Prinsip Audit Sistem Manajemen: Integritas, Penyajian yang Wajar, Kemahiran Profesional, Kerahasiaan, Independensi, Pendekatan Berbasis Bukti, dan Pendekatan Berbasis Risiko.",
      "Minta rekomendasi perancangan Program Audit (Klausul 5) dan mitigasi risiko audit spesifik di unit kerja Anda.",
      "Gunakan AI untuk menentukan metode Sampling Audit (Statistical vs Judgemental Sampling) dan panduan pelaksanaan Remote / Hybrid Audit terkini."
    ],
    tips: [
      "AI ini mengintegrasikan seluruh klausul ISO 19011 dengan update praktik audit modern 2026.",
      "Gunakan untuk konsultasi persiapan audit sebelum menyusun jadwal audit tahunan."
    ]
  },
  {
    id: "guide-access-terms",
    title: "Ketentuan Hak Akses & Lisensi SMART Audit SYSTEM",
    category: "Ketentuan Hak Akses",
    badge: "Lisensi 1 Pengguna",
    summary: "Ketentuan hak akses personal, akad pembelian, amanah penggunaan, dan batasan lisensi SMART Audit SYSTEM.",
    steps: [
      "Hak akses SMART Audit SYSTEM diberikan untuk 1 (satu) orang pengguna/personal dan hanya diperuntukkan bagi penggunaan pribadi pemilik akun.",
      "Hak akses tidak diperbolehkan untuk dibagikan (share) kepada orang lain.",
      "Akun, link akses, file, maupun materi di dalam sistem tidak diperbolehkan untuk dijual atau diperjualbelikan kembali.",
      "Pengguna tidak diperkenankan menggandakan atau mendistribusikan isi SMART Audit SYSTEM untuk kepentingan komersial tanpa izin.",
      "Lisensi yang diperoleh merupakan hak penggunaan pribadi, bukan perpindahan hak kepemilikan atas produk dan materi."
    ],
    tips: [
      "Ketentuan ini menjadi bagian dari akad pembelian dan penggunaan SMART Audit SYSTEM.",
      "Semoga setiap ilmu, alat, dan manfaat yang diperoleh dari SMART Audit SYSTEM menjadi jalan kemudahan serta membawa keberkahan bagi kita semua. Aamiin."
    ]
  }
];

export const AUDIT_PILLARS = [
  {
    name: "BELAJAR",
    subtitle: "9 Modul & Audiobook",
    description: "Penguasaan teori, klausul ISO 9001:2015, dan prinsip ISO 19011.",
    icon: "BookOpen",
    color: "from-amber-500 to-amber-600",
    tab: "modules"
  },
  {
    name: "LATIHAN",
    subtitle: "GPT Ceklist & Simulasi",
    description: "Latihan menyusun pertanyaan dan roleplay wawancara audit.",
    icon: "Sparkles",
    color: "from-emerald-500 to-emerald-600",
    tab: "ai-tools"
  },
  {
    name: "PRAKTIK",
    subtitle: "Workbook PLOR & CAPA",
    description: "Menulis temuan objektif dan merumuskan analisis akar masalah.",
    icon: "FileEdit",
    color: "from-blue-500 to-blue-600",
    tab: "ai-tools"
  },
  {
    name: "AI TOOLS",
    subtitle: "3 Generator + AMI-GPT",
    description: "Otomasi pembuatan dokumen dan pendamping cerdas 24/7.",
    icon: "Cpu",
    color: "from-purple-500 to-purple-600",
    tab: "ai-tools"
  },
  {
    name: "WORKSHEET",
    subtitle: "7 Formulir FR.AMI",
    description: "Template dokumen resmi siap pakai dari Program hingga Laporan.",
    icon: "FileSpreadsheet",
    color: "from-cyan-500 to-cyan-600",
    tab: "worksheets"
  },
  {
    name: "EVALUASI",
    subtitle: "Pre & Post Test",
    description: "Pengukuran kemajuan kompetensi dan sertifikasi mandiri.",
    icon: "Award",
    color: "from-rose-500 to-rose-600",
    tab: "evaluation"
  }
];
