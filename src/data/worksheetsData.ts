import { WorksheetItem } from '../types';

export const WORKSHEETS_DATA: WorksheetItem[] = [
  {
    code: "FR.AMI.02.01",
    title: "Program Audit Mutu Internal",
    description: "Template penyusunan rencana dan program audit tahunan/periode mencakup lingkup, frekuensi, metode, dan alokasi tanggung jawab tim auditor.",
    type: "Spreadsheet",
    stage: "Persiapan",
    iconName: "CalendarRange",
    url: "https://docs.google.com/spreadsheets/d/14pp-UaPhKwtqUatWrtEZKTle7G57Wulq/edit?usp=sharing&ouid=114022347977842649004&rtpof=true&sd=true"
  },
  {
    code: "FR.AMI.02.02",
    title: "Jadwal Audit Mutu Internal",
    description: "Matriks penjadwalan terperinci pelaksanaan audit per departemen/proses, tanggal pelaksanaan, alokasi jam, auditor pelaksana, dan auditee.",
    type: "Spreadsheet",
    stage: "Persiapan",
    iconName: "Clock",
    url: "https://docs.google.com/spreadsheets/d/1XBIh6x3M0qpogrMXhYfGcNsnR86GJdGn/edit?usp=sharing&ouid=114022347977842649004&rtpof=true&sd=true"
  },
  {
    code: "FR.AMI.02.03",
    title: "Surat Pemberitahuan AMI",
    description: "Format surat resmi pemberitahuan jadwal pelaksanaan audit mutu internal kepada kepala divisi, manajer bagian, dan seluruh auditee.",
    type: "Document",
    stage: "Persiapan",
    iconName: "MailCheck",
    url: "https://docs.google.com/document/d/1fJnWugo9Oa9XLQRnJiRkcoZWhwNq9IvR/edit?usp=sharing&ouid=114022347977842649004&rtpof=true&sd=true"
  },
  {
    code: "FR.AMI.02.04",
    title: "Daftar Periksa / Check List AMI",
    description: "Daftar pertanyaan panduan, kriteria verifikasi kesesuaian klausul ISO 9001:2015, dan kolom catatan bukti objektif saat proses audit.",
    type: "Document",
    stage: "Pelaksanaan",
    iconName: "ListChecks",
    url: "https://docs.google.com/document/d/1r2CiKhcBXNoMxWT_cpocGLtHCdoq8Xja/edit?usp=sharing&ouid=114022347977842649004&rtpof=true&sd=true"
  },
  {
    code: "FR.AMI.02.05",
    title: "Daftar Hadir Audit Mutu Internal",
    description: "Formulir absensi dan dokumentasi kehadiran peserta Opening Meeting, tinjauan lapangan, dan Closing Meeting.",
    type: "Document",
    stage: "Pelaksanaan",
    iconName: "UserCheck",
    url: "https://docs.google.com/document/d/1q7YXXGwMyBPTDeKFkA4TN1vX9JNm03Zd/edit?usp=sharing&ouid=114022347977842649004&rtpof=true&sd=true"
  },
  {
    code: "FR.AMI.02.06",
    title: "Permintaan Tindakan Koreksi & Pencegahan (PTKP)",
    description: "Formulir resmi pencatatan temuan audit berformat PLOR, formulasi koreksi langsung, analisis akar penyebab (RCA), dan tindakan perbaikan jangka panjang (CAPA).",
    type: "Spreadsheet",
    stage: "Tindak Lanjut",
    iconName: "ShieldAlert",
    url: "https://docs.google.com/spreadsheets/d/1i1yktKeKaI7HoIO9xatSV6VSnRGvUaJW/edit?usp=sharing&ouid=114022347977842649004&rtpof=true&sd=true"
  },
  {
    code: "FR.AMI.02.07",
    title: "Laporan Audit Mutu Internal",
    description: "Format laporan komprehensif hasil pelaksanaan audit untuk dilaporkan kepada Top Management dan bahan input Rapat Tinjauan Manajemen (RTM).",
    type: "Spreadsheet",
    stage: "Pelaporan",
    iconName: "FileSpreadsheet",
    url: "https://docs.google.com/spreadsheets/d/15j_ly6IDA6rQxnMHg7SL-4Cn43QYLH5X/edit?usp=sharing&ouid=114022347977842649004&rtpof=true&sd=true"
  }
];
