import React from 'react';
import { ViewMode } from '../types';
import { USAGE_STEPS, PRODUCT_GUIDES } from '../data/guidesData';
import { 
  BookOpen, 
  Headphones, 
  FileSpreadsheet, 
  Sparkles, 
  Bot, 
  CheckSquare, 
  ChevronRight, 
  Laptop, 
  Award, 
  ShieldCheck, 
  Compass, 
  ExternalLink,
  ArrowRight,
  KeyRound,
  FileCheck2,
  ListOrdered,
  Zap,
  HelpCircle,
  Building2,
  MessageSquare
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (view: ViewMode) => void;
  onOpenOfflineModal: () => void;
  onSelectGuide?: (guideId: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigate,
  onOpenOfflineModal,
  onSelectGuide
}) => {
  return (
    <div className="space-y-6 pb-20">
      {/* Hero Section - High Density & Direct Value */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-8 sm:py-10 lg:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Col: Header & Direct Actions */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  SMART AUDIT SYSTEM
                </h1>
                <p className="text-sm sm:text-base font-bold text-amber-400">
                  SmartBook.Id – 9 Modul + Podcast + 7 Worksheet + AI Tools
                </p>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Platform pembelajaran interaktif terintegrasi untuk menguasai <strong>Audit Mutu Internal ISO 9001:2015</strong> secara profesional dari tahap persiapan, audit lapangan, formulasi temuan PLOR, penyusunan CAPA, hingga sertifikasi mandiri.
              </p>

              {/* Author & Creator */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs text-slate-300 bg-slate-800/80 w-fit px-3 py-1.5 rounded-lg border border-slate-700 mx-auto lg:mx-0">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Karya &amp; Kurasi: <strong className="text-amber-300">Dede Hery Suryana, AT</strong></span>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-4 py-2.5 rounded-lg text-xs shadow-sm transition flex items-center space-x-1.5 group"
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Buka Dashboard Produk</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </button>

                <button
                  onClick={() => onNavigate('modules')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold px-3.5 py-2.5 rounded-lg text-xs border border-slate-700 transition flex items-center space-x-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mulai Belajar Modul 1</span>
                </button>

                <button
                  onClick={onOpenOfflineModal}
                  className="bg-slate-900 hover:bg-slate-800 text-amber-300 font-semibold px-3 py-2.5 rounded-lg text-xs border border-amber-500/30 transition flex items-center space-x-1.5"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Salin 7 Link Akses</span>
                </button>
              </div>
            </div>

            {/* Right Col: Metric Badge Bento - 4 Direct Gateways */}
            <div className="w-full lg:w-80 grid grid-cols-2 gap-2.5">
              <div 
                onClick={() => onNavigate('modules')}
                className="bg-slate-800/90 hover:bg-slate-800 p-3.5 rounded-xl border border-slate-700/80 cursor-pointer group transition hover:border-amber-500/50 shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition" />
                </div>
                <div className="text-xl font-black text-white font-mono">9 Modul</div>
                <div className="text-[11px] text-slate-300 font-medium">Ebook &amp; Podcast Audio</div>
              </div>

              <div 
                onClick={() => onNavigate('worksheets')}
                className="bg-slate-800/90 hover:bg-slate-800 p-3.5 rounded-xl border border-slate-700/80 cursor-pointer group transition hover:border-cyan-500/50 shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition" />
                </div>
                <div className="text-xl font-black text-white font-mono">7 Form</div>
                <div className="text-[11px] text-slate-300 font-medium">Worksheet FR.AMI.02</div>
              </div>

              <div 
                onClick={() => onNavigate('ai-tools')}
                className="bg-slate-800/90 hover:bg-slate-800 p-3.5 rounded-xl border border-slate-700/80 cursor-pointer group transition hover:border-purple-500/50 shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition" />
                </div>
                <div className="text-xl font-black text-white font-mono">5 AI Tools</div>
                <div className="text-[11px] text-slate-300 font-medium">AI Tools &amp; Asisten 2026</div>
              </div>

              <div 
                onClick={() => onNavigate('evaluation')}
                className="bg-slate-800/90 hover:bg-slate-800 p-3.5 rounded-xl border border-slate-700/80 cursor-pointer group transition hover:border-emerald-500/50 shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition" />
                </div>
                <div className="text-xl font-black text-white font-mono">Ujian &amp; Skor</div>
                <div className="text-[11px] text-slate-300 font-medium">Pre &amp; Post-Test Sertifikasi</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PENGUMUMAN LISENSI PERSONAL & AKAD PENGGUNAAN SMART Audit SYSTEM */}
      <section className="bg-gradient-to-br from-amber-50/95 via-stone-50 to-amber-50/70 rounded-2xl p-4 sm:p-6 border-2 border-amber-300 shadow-xs space-y-4">
        {/* Header Pengumuman */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/80 pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xs font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-200/90 px-2 py-0.5 rounded font-mono">
                PENGUMUMAN RESMI
              </span>
              <h2 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                LISENSI PERSONAL &amp; AKAD PENGGUNAAN SMART Audit SYSTEM
              </h2>
            </div>
          </div>
          <span className="text-xs font-mono font-black text-amber-950 bg-amber-200/80 px-3 py-1.5 rounded-lg border border-amber-300/80 w-fit">
            1 LISENSI = 1 ORANG PENGGUNA
          </span>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
          {/* Paragraf Utama */}
          <p className="font-semibold text-slate-900 bg-white/90 p-3.5 rounded-xl border border-amber-200/70 shadow-2xs">
            Hak akses <strong>SMART Audit SYSTEM</strong> diberikan kepada <strong>1 (satu) orang pengguna/personal</strong> dan hanya diperuntukkan bagi pemilik lisensi yang terdaftar.
          </p>

          <p className="text-xs text-slate-700">
            Dengan melakukan pembelian dan menggunakan SMART Audit SYSTEM, pengguna dianggap telah memahami dan menyepakati ketentuan penggunaan berikut:
          </p>

          {/* 1. Ketentuan Hak Akses */}
          <div className="bg-white/95 rounded-xl p-4 border border-amber-200/80 space-y-2.5 shadow-2xs">
            <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Ketentuan Hak Akses</span>
            </h3>
            <ul className="space-y-2 pl-1 text-xs text-slate-700">
              <li className="flex items-start space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span>
                <span>Hak akses <strong>tidak diperbolehkan untuk dibagikan (share)</strong> kepada teman, kolega, rekan kerja, siswa, peserta pelatihan, atau pihak lainnya.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span>
                <span>Akun, link akses, file, maupun materi di dalam SMART Audit SYSTEM <strong>tidak diperbolehkan untuk dijual, dipindahtangankan, atau diperjualbelikan kembali</strong>.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span>
                <span>Pengguna <strong>tidak diperkenankan menggandakan, menyebarluaskan, atau mendistribusikan</strong> isi SMART Audit SYSTEM kepada pihak lain tanpa izin dari pemilik produk.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span>
                <span>Lisensi yang diberikan merupakan <strong>hak penggunaan personal</strong>, bukan perpindahan hak kepemilikan atas sistem, materi, maupun konten yang terdapat di dalamnya.</span>
              </li>
            </ul>
          </div>

          {/* 2. Ketentuan untuk Pelatihan, Workshop, dan Kelas */}
          <div className="bg-white/95 rounded-xl p-4 border border-amber-200/80 space-y-2.5 shadow-2xs">
            <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Ketentuan untuk Pelatihan, Workshop, dan Kelas</span>
            </h3>
            <p className="text-xs text-slate-700">
              Apabila SMART Audit SYSTEM digunakan sebagai bagian dari pelatihan, workshop, kelas, pendampingan, atau kegiatan pembelajaran, maka:
            </p>
            <div className="bg-amber-50/80 p-3 rounded-lg border border-amber-200/70 text-xs font-semibold text-amber-950">
              Setiap peserta yang akan menggunakan SMART Audit SYSTEM wajib memiliki lisensi masing-masing.
              <div className="mt-1 text-xs font-black text-amber-900">Artinya: 1 peserta = 1 lisensi.</div>
            </div>
            <ul className="space-y-2 pl-1 text-xs text-slate-700">
              <li className="flex items-start space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">•</span>
                <span>Trainer, konsultan, guru, dosen, mentor, atau instruktur yang telah memiliki lisensi <strong>tidak diperkenankan membagikan akses miliknya secara cuma-cuma</strong> kepada peserta, siswa, atau murid.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">•</span>
                <span>Lisensi milik pengajar <strong>hanya berlaku untuk pengajar tersebut</strong> dan tidak otomatis memberikan hak akses kepada peserta pelatihan.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">•</span>
                <span>Peserta yang membutuhkan akses <strong>wajib memperoleh lisensi secara resmi</strong> dari pemilik SMART Audit SYSTEM atau pihak yang mendapatkan izin resmi dari pemilik produk.</span>
              </li>
            </ul>
          </div>

          {/* 3. Lisensi untuk Instansi, Perusahaan, dan Penyelenggara Pelatihan */}
          <div className="bg-white/95 rounded-xl p-4 border border-amber-300 shadow-2xs space-y-2.5">
            <div className="flex items-center space-x-2 text-slate-900">
              <Building2 className="w-4 h-4 text-amber-600" />
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">
                Lisensi untuk Instansi, Perusahaan, dan Penyelenggara Pelatihan
              </h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Apabila instansi, perusahaan, lembaga, organisasi, sekolah, kampus, konsultan, atau penyelenggara pelatihan membutuhkan SMART Audit SYSTEM untuk beberapa orang, silakan menghubungi Admin melalui WhatsApp.
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              Tersedia harga khusus/diskon pembelian beberapa lisensi yang disesuaikan dengan jumlah pengguna atau peserta yang akan didaftarkan. Setiap pembelian dengan jumlah tertentu akan diberikan kode kupon sesuai dengan jumlah lisensi yang didaftarkan.
            </p>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-950 space-y-1">
              <div className="font-bold">Meskipun pembelian dilakukan secara kolektif, prinsip lisensinya tetap:</div>
              <div className="font-black text-amber-900 tracking-wide text-xs sm:text-sm">1 LISENSI = 1 ORANG PENGGUNA</div>
              <div className="text-slate-700 text-[11px] pt-0.5">Setiap pengguna akan memperoleh hak penggunaan dan aktivasi melalui kode kupon personal sesuai jumlah lisensi yang didaftarkan.</div>
            </div>
            <div className="pt-1">
              <a
                href="https://api.whatsapp.com/send?text=Halo%20Admin,%20saya%20ingin%20berkonsultasi%20mengenai%20pembelian%20beberapa%20lisensi%20SMART%20Audit%20SYSTEM%20untuk%20instansi/perusahaan/pelatihan."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3.5 py-2 rounded-xl text-xs shadow-2xs transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Hubungi Admin untuk Pembelian Beberapa Lisensi</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* 4. Akad, Amanah, dan Keberkahan */}
          <div className="bg-white/95 rounded-xl p-4 border border-amber-300/90 shadow-2xs space-y-3">
            <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              <span>Akad, Amanah, dan Keberkahan</span>
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Ketentuan ini bukan hanya mengenai aturan penggunaan produk, tetapi merupakan bagian dari akad pembelian dan amanah antara pemilik produk dengan pengguna SMART Audit SYSTEM.
            </p>

            <div className="bg-amber-50/90 border-l-4 border-amber-500 p-3 rounded-r-lg space-y-1 text-xs text-slate-800 italic">
              <p className="font-semibold text-slate-900 not-italic">Allah SWT berfirman:</p>
              <p>“Wahai orang-orang yang beriman! Janganlah kamu mengkhianati Allah dan Rasul dan (juga) janganlah kamu mengkhianati amanat yang dipercayakan kepadamu, sedang kamu mengetahui.”</p>
              <p className="font-bold text-amber-900 not-italic text-[11px]">— QS. Al-Anfal: 27</p>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              Pemilik SMART Audit SYSTEM mungkin tidak dapat mengetahui setiap kali sebuah akun, link, atau akses dibagikan kepada pihak lain. Namun sebagai seorang muslim, kita meyakini bahwa tidak ada sesuatu pun yang tersembunyi dari Allah SWT.
            </p>

            <div className="bg-amber-50/90 border-l-4 border-amber-500 p-3 rounded-r-lg space-y-1 text-xs text-slate-800 italic">
              <p>“Sesungguhnya bagi Allah tidak ada sesuatu pun yang tersembunyi di bumi dan tidak pula di langit.”</p>
              <p className="font-bold text-amber-900 not-italic text-[11px]">— QS. Ali ‘Imran: 5</p>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              Karena itu, mari kita sama-sama menjaga akad, amanah, dan hak masing-masing.
            </p>

            <p className="text-xs text-slate-700 leading-relaxed">
              Gunakanlah SMART Audit SYSTEM sesuai dengan lisensi yang telah diberikan. Apabila orang lain membutuhkan akses, arahkan untuk memperoleh lisensinya secara resmi.
            </p>

            <p className="text-xs text-slate-700 leading-relaxed">
              Kami tidak bermaksud mempersulit pengguna, tetapi ingin menjaga hak atas karya, keberlangsungan pengembangan sistem, serta keberkahan dalam setiap transaksi dan pemanfaatan ilmu.
            </p>

            <div className="font-bold text-xs text-amber-950 bg-amber-100/80 px-3 py-2 rounded-lg border border-amber-300 text-center">
              Mari menjaga amanah: 1 Lisensi untuk 1 Orang Pengguna.
            </div>
          </div>

          {/* Doa Penutup */}
          <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 rounded-xl p-3.5 border border-amber-300 text-amber-950 text-xs font-semibold text-center sm:text-left leading-relaxed shadow-2xs">
            Semoga setiap ilmu, alat, dan manfaat yang diperoleh melalui SMART Audit SYSTEM menjadi jalan kemudahan dalam pekerjaan, menjadi ilmu yang bermanfaat, serta membawa keberkahan bagi pengguna maupun pengembangnya. Aamiin.
          </div>
        </div>
      </section>

      {/* 5-Step Quick Roadmap (Peta Jalan Pembelajaran 1-Klik) */}
      <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                Alur Praktis 1-Klik
              </span>
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                Peta Belajar &amp; Praktik Auditor ISO 9001:2015
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Klik salah satu tahapan di bawah untuk langsung menuju alat dan materi yang relevan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {[
            {
              step: '1',
              title: 'Diagnostik Awal',
              desc: 'Ukur pemahaman awal audit mutu',
              action: () => onNavigate('evaluation'),
              btnText: 'Pre-Test',
              icon: <CheckSquare className="w-4 h-4 text-amber-600" />,
              color: 'hover:border-amber-400'
            },
            {
              step: '2',
              title: '9 Modul & Podcast',
              desc: 'Pelajari teori & dengar ulasan audio',
              action: () => onNavigate('modules'),
              btnText: 'Buka Modul',
              icon: <BookOpen className="w-4 h-4 text-sky-600" />,
              color: 'hover:border-sky-400'
            },
            {
              step: '3',
              title: 'AI Simulasi & Roleplay',
              desc: 'Latihan menghadapi aneka tipe auditee',
              action: () => onNavigate('ai-tools'),
              btnText: 'Mulai AI',
              icon: <Bot className="w-4 h-4 text-purple-600" />,
              color: 'hover:border-purple-400'
            },
            {
              step: '4',
              title: '7 Formulir FR.AMI',
              desc: 'Unduh template checklist & PTKP',
              action: () => onNavigate('worksheets'),
              btnText: 'Unduh Form',
              icon: <FileSpreadsheet className="w-4 h-4 text-cyan-600" />,
              color: 'hover:border-cyan-400'
            },
            {
              step: '5',
              title: 'Ujian Sertifikasi',
              desc: 'Post-test akhir kelulusan SmartBook',
              action: () => onNavigate('evaluation'),
              btnText: 'Post-Test',
              icon: <Award className="w-4 h-4 text-emerald-600" />,
              color: 'hover:border-emerald-400'
            },
          ].map((item) => (
            <div
              key={item.step}
              onClick={item.action}
              className={`p-3 rounded-xl bg-stone-50 border border-slate-200 transition cursor-pointer group flex flex-col justify-between space-y-2 ${item.color}`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="w-5 h-5 rounded-md bg-slate-900 text-white font-mono font-bold text-[10px] flex items-center justify-center">
                    {item.step}
                  </span>
                  {item.icon}
                </div>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {item.desc}
                </p>
              </div>

              <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-amber-700 group-hover:text-amber-800">
                <span>{item.btnText}</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Device Warning Banner - Compact */}
      <section className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 sm:p-4 text-amber-950 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start space-x-2.5">
          <div className="p-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold shrink-0 mt-0.5 sm:mt-0">
            <Laptop className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-amber-900">
              Rekomendasi Perangkat (Laptop/PC):
            </h4>
            <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
              Metoda <strong>PLOR</strong> dan <strong>CAPA Generator</strong> sebaiknya digunakan melalui <strong>Laptop / PC</strong> untuk kemudahan pengisian form dan tabel analisis tindakan perbaikan.
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('ai-tools')}
          className="shrink-0 text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-md transition shadow-2xs"
        >
          Buka AI Tools
        </button>
      </section>

      {/* 6 Fitur Utama Section - High Density */}
      <section className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
              Aset Pembelajaran
            </span>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
              6 Pilar Utama Pembelajaran Audit Mutu
            </h2>
          </div>
          <button
            onClick={() => onNavigate('dashboard')}
            className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center space-x-1"
          >
            <span>Buka Dashboard Semua Produk</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Card 1: AI Asisten AMI-GPT */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs hover:border-indigo-400 transition flex flex-col justify-between group space-y-2">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                  24/7 Standby
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition">
                1. AI Asisten AMI-GPT
              </h3>
              <p className="text-[11px] text-slate-600 leading-snug">
                Tanya jawab cerdas mengenai klausul ISO 9001:2015, persiapan audit, dan interpretasi standar selama 24/7.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <a
                href="https://chatgpt.com/g/g-6955fcd4ee0481918fbcce983e93f41c-ai-asisten-ami"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-bold text-indigo-700 hover:underline flex items-center space-x-1"
              >
                <span>Buka GPT</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => onNavigate('ai-tools')}
                className="text-[11px] font-bold text-slate-500 hover:text-slate-900"
              >
                Detail
              </button>
            </div>
          </div>

          {/* Card 2: Ebook Interaktif */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs hover:border-amber-400 transition flex flex-col justify-between group space-y-2">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                  9 Bab PDF
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition">
                2. Ebook Interaktif
              </h3>
              <p className="text-[11px] text-slate-600 leading-snug">
                Materi lengkap mulai dari persiapan, teknik sampling, wawancara, penulisan temuan, hingga pelaporan.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('modules')}
                className="text-[11px] font-bold text-amber-700 hover:underline flex items-center space-x-1"
              >
                <span>Baca Ebook</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: Audio Ulasan Mendalam */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs hover:border-emerald-400 transition flex flex-col justify-between group space-y-2">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Headphones className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                  9 Audio MP3
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition">
                3. Audio Podcast
              </h3>
              <p className="text-[11px] text-slate-600 leading-snug">
                Format podcast/audiobook untuk didengarkan kapan saja, bahkan sembari membaca modul atau slide.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('modules')}
                className="text-[11px] font-bold text-emerald-700 hover:underline flex items-center space-x-1"
              >
                <span>Dengar Audio</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 4: Workbook PLOR & CAPA */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs hover:border-blue-400 transition flex flex-col justify-between group space-y-2">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                  Key: inayah
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition">
                4. Workbook PLOR &amp; CAPA
              </h3>
              <p className="text-[11px] text-slate-600 leading-snug">
                Generator formulasi temuan PLOR dan penyusunan analisis akar masalah CAPA dengan metode 5-Why.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('ai-tools')}
                className="text-[11px] font-bold text-blue-700 hover:underline flex items-center space-x-1"
              >
                <span>Buka Workbook</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 5: GPT Ceklist & Simulasi */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs hover:border-purple-400 transition flex flex-col justify-between group space-y-2">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">
                  Roleplay Praktik
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-900 group-hover:text-purple-600 transition">
                5. GPT Ceklist &amp; Simulasi
              </h3>
              <p className="text-[11px] text-slate-600 leading-snug">
                Susun daftar periksa berbasis klausul dan latihan simulasi wawancara menghadapi aneka karakter auditee.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <a
                href="https://chatgpt.com/g/g-69e7746d65a881919c84f57152956d22-daftar-periksa-dan-simulasi-audit"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-bold text-purple-700 hover:underline flex items-center space-x-1"
              >
                <span>Mulai Simulasi</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 6: 7 Worksheet Dokumen */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs hover:border-cyan-400 transition flex flex-col justify-between group space-y-2">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded">
                  7 Template
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-900 group-hover:text-cyan-600 transition">
                6. 7 Worksheet FR.AMI
              </h3>
              <p className="text-[11px] text-slate-600 leading-snug">
                Formulir operasional siap pakai (FR.AMI.02.01 s/d FR.AMI.02.07) format Google Docs &amp; Sheets.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('worksheets')}
                className="text-[11px] font-bold text-cyan-700 hover:underline flex items-center space-x-1"
              >
                <span>Unduh Formulir</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Langkah Panduan Penggunaan Portal - Clean Table Grid */}
      <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
              SOP Penggunaan
            </span>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
              9 Langkah Panduan Alur Belajar Portal
            </h2>
          </div>
          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center space-x-1 transition shadow-2xs"
          >
            <span>Masuk ke Dashboard</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {USAGE_STEPS.map((item) => (
            <div 
              key={item.step}
              className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50/50 border border-slate-200/80 hover:border-amber-300 transition group space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-md bg-amber-500 text-slate-950 font-mono font-black text-[10px] flex items-center justify-center">
                  {item.step}
                </span>
                <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">
                  Langkah 0{item.step}
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Launch Bottom Bar */}
      <section className="bg-slate-900 rounded-2xl p-5 text-white border border-slate-800 text-center space-y-3 shadow-md">
        <h3 className="text-base sm:text-lg font-bold text-amber-400">
          Siap Memulai Audit Mutu Internal dengan Percaya Diri?
        </h3>
        <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
          Masuk ke Dashboard Utama untuk mengakses 9 modul pembelajaran, 7 formulir siap pakai, dan AI Tools AMI.
        </p>
        <div className="pt-1 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-4 py-2 rounded-lg text-xs shadow-xs transition"
          >
            Akses Dashboard Utama
          </button>
          <button
            onClick={() => onNavigate('modules')}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-lg text-xs border border-slate-700 transition"
          >
            Buka 9 Modul Ebook
          </button>
        </div>
      </section>
    </div>
  );
};

