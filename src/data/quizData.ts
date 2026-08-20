import { QuizQuestion } from '../types';

export const PRACTICE_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Manakah pernyataan yang paling tepat mengenai tujuan utama pelaksanaan Audit Mutu Internal (AMI) sesuai ISO 9001:2015 klausul 9.2?",
    options: [
      "Mencari kesalahan karyawan untuk diberikan sanksi administratif",
      "Menilai kesesuaian dan efektivitas penerapan sistem manajemen mutu secara objektif",
      "Menyiapkan dokumen hanya saat menjelang kedatangan auditor eksternal",
      "Menggantikan peran inspeksi quality control (QC) harian"
    ],
    correctAnswer: 1,
    explanation: "Audit Mutu Internal (Klausul 9.2) bertujuan untuk memastikan apakah SMM memenuhi persyaratan organisasi & standar ISO 9001, serta diterapkan dan dipelihara secara efektif.",
    clause: "Klausul 9.2 (Audit Internal)"
  },
  {
    id: 2,
    question: "Dalam penulisan temuan audit menggunakan metoda PLOR, unsur 'O' merujuk pada:",
    options: [
      "Organization - Struktur kepemimpinan auditee",
      "Opinion - Pendapat subjektif dari auditor internal",
      "Objective Evidence - Bukti nyata berupa data, dokumen, atau rekaman yang dapat diverifikasi",
      "Observation - Hanya pengamatan sekilas tanpa perlu nomor dokumen"
    ],
    correctAnswer: 2,
    explanation: "PLOR adalah singkatan dari Problem, Location, Objective Evidence, dan Reference. Bukti Objektif (Objective Evidence) harus konkret, faktual, dan tidak terbantahkan.",
    clause: "Klausul 10.2 & Metodologi PLOR"
  },
  {
    id: 3,
    question: "Sebelum melakukan audit di lapangan, apa tindakan persiapan paling awal yang harus disiapkan oleh Tim Auditor?",
    options: [
      "Langsung mendatangi area kerja tanpa pemberitahuan",
      "Menyusun Program Audit, Jadwal Audit, dan Daftar Periksa (Checklist)",
      "Menuliskan draft PTKP sebelum memeriksa bukti",
      "Melakukan closing meeting terlebih dahulu"
    ],
    correctAnswer: 1,
    explanation: "Tahap persiapan meliputi penyusunan Program Audit (FR.AMI.02.01), Jadwal Audit (FR.AMI.02.02), Surat Pemberitahuan (FR.AMI.02.03), dan Daftar Periksa (FR.AMI.02.04).",
    clause: "Klausul 9.2.2 (Perencanaan Audit)"
  },
  {
    id: 4,
    question: "Apa perbedaan mendasar antara 'Koreksi Langsung' (Correction) dengan 'Tindakan Korektif' (Corrective Action / CAPA)?",
    options: [
      "Koreksi mengatasi ketidaksesuaian yang ada saat ini, sedangkan tindakan korektif mengatasi akar penyebab agar masalah tidak terulang",
      "Koreksi dilakukan oleh top management, sedangkan tindakan korektif dilakukan auditor",
      "Keduanya sama persis dan tidak memiliki perbedaan fungsi",
      "Koreksi bersifat jangka panjang, sedangkan tindakan korektif bersifat darurat seketika"
    ],
    correctAnswer: 0,
    explanation: "Koreksi (immediate fix) membenahi dampak saat ini (misal: merevisi data yang salah). Tindakan Korektif (CAPA) menuntaskan akar masalah melalui analisis 5-Why agar tidak berulang di masa depan.",
    clause: "Klausul 10.2 (Ketidaksesuaian & Tindakan Korektif)"
  },
  {
    id: 5,
    question: "Pada sesi Closing Meeting, sikap profesional apa yang wajib dikedepankan oleh Lead Auditor?",
    options: [
      "Mendebat auditee secara emosional jika auditee memberikan klarifikasi",
      "Menyampaikan apresiasi, memaparkan temuan secara transparan dan objektif, serta menyepakati batas waktu penyelesaian PTKP",
      "Mengubah temuan menjadi rahasia yang tidak boleh diketahui auditee",
      "Menolak tanda tangan daftar hadir jika ada temuan mayor"
    ],
    correctAnswer: 1,
    explanation: "Closing Meeting bertujuan untuk menyelaraskan pemahaman temuan, mengapresiasi kerjasama auditee, dan menetapkan komitmen target tanggal tindak lanjut perbaikan.",
    clause: "ISO 19011:2018 (Closing Meeting)"
  }
];
