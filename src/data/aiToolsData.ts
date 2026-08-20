import { AIToolItem } from '../types';

export const AI_TOOLS_DATA: AIToolItem[] = [
  {
    id: "checklist-simulasi",
    name: "Pembuatan Daftar Periksa & Simulasi Audit",
    platform: "External GPT",
    badge: "AI Checklist & Simulation",
    iconColor: "emerald",
    description: "Asisten digital auditor internal ISO 9001:2015 untuk menyusun checklist spesifik berbasis bukti dan sarana latihan praktik menghadapi berbagai tipe auditee.",
    functions: [
      "Membantu memahami & menyiapkan Audit Mutu Internal ISO 9001:2015",
      "Menyusun checklist audit berdasarkan dokumen & proses yang diaudit",
      "Mengidentifikasi klausul ISO 9001:2015 yang relevan secara otomatis",
      "Menyusun pertanyaan audit spesifik & berbasis bukti (Evidence-based)",
      "Panduan sistematis, objektif, & profesional untuk auditor pemula",
      "Simulasi latihan praktik menghadapi berbagai karakter auditee (Defensif, Arogan, Gugup, dll.)"
    ],
    url: "https://chatgpt.com/g/g-69e7746d65a881919c84f57152956d22-daftar-periksa-dan-simulasi-audit",
    requiresDesktop: false
  },
  {
    id: "plor-generator",
    name: "Menulis Temuan Audit – Metoda PLOR",
    platform: "External AI Tool",
    badge: "Workbook AI – PLOR Generator",
    iconColor: "amber",
    description: "Alat bantu menyusun temuan audit mutu internal secara sistematis, objektif, dan terstandarisasi berdasarkan formula PLOR dan klausul ISO 9001:2015.",
    functions: [
      "Memformulasikan Problem (Pernyataan Ketidaksesuaian yang tepat)",
      "Menentukan Location (Lokasi proses/departemen secara akurat)",
      "Merumuskan Objective Evidence (Fakta & bukti fisik yang tidak terbantahkan)",
      "Memetakan Reference (Klausul ISO 9001:2015 / Dokumen SOP terkait)"
    ],
    url: "https://plor-generate-ptkp.vercel.app/",
    requiresDesktop: true
  },
  {
    id: "capa-generator",
    name: "Menulis Laporan Tindakan Perbaikan – CAPA",
    platform: "External AI Tool",
    badge: "CAPA Generator PTKP",
    iconColor: "blue",
    description: "Membantu auditee dan auditor menganalisis akar masalah secara terstruktur dengan metode 5-Why & Fishbone, merancang tindakan koreksi, serta tindakan pencegahan berulang.",
    functions: [
      "Analisis mendalam temuan audit dan klasifikasi tingkat signifikansi",
      "Penyusunan tindakan koreksi langsung (Immediate Correction)",
      "Investigasi akar masalah (Root Cause Analysis)",
      "Penyusunan rencana tindakan perbaikan jangka panjang (Corrective Action)"
    ],
    url: "https://tindakan-perbaikan-ptkp-ami-plor.vercel.app/",
    accessKey: "inayah",
    requiresDesktop: true
  },
  {
    id: "ami-gpt",
    name: "AI Asisten AMI-GPT",
    platform: "External GPT",
    badge: "AI Asisten 24/7",
    iconColor: "indigo",
    description: "Asisten kecerdasan buatan spesialis Audit Mutu Internal ISO 9001:2015 yang siap mendampingi proses konsultasi, tanya jawab teori, dan studi kasus kapan saja.",
    functions: [
      "Tanya jawab cerdas seputar standar ISO 9001:2015 dan ISO 19011:2018",
      "Konsultasi studi kasus audit, dilema temuan, dan kriteria sampling",
      "Pendampingan belajar modul dan persiapan sertifikasi mandiri 24/7"
    ],
    url: "https://chatgpt.com/g/g-6955fcd4ee0481918fbcce983e93f41c-ai-asisten-ami",
    requiresDesktop: false
  }
];

export interface CopyLinkItem {
  id: string;
  name: string;
  url: string;
  category: string;
  note?: string;
  accessKey?: string;
}

export const OFFLINE_COPY_LINKS: CopyLinkItem[] = [
  {
    id: "ami-gpt-link",
    name: "Salin Link AMI-GPT",
    url: "https://chatgpt.com/g/g-6955fcd4ee0481918fbcce983e93f41c-ai-asisten-ami",
    category: "AI Asisten",
    note: "Asisten konsultasi audit 24/7"
  },
  {
    id: "gpt-ceklist-link",
    name: "Salin Link GPT Ceklist",
    url: "https://chatgpt.com/g/g-69e7746d65a881919c84f57152956d22-daftar-periksa-dan-simulasi-audit",
    category: "AI Generate",
    note: "Pembuatan checklist & simulasi audit"
  },
  {
    id: "plor-link",
    name: "Salin Link PLOR",
    url: "https://plor-generate-ptkp.vercel.app/",
    category: "AI Generate",
    note: "Rekomendasi gunakan Laptop/PC"
  },
  {
    id: "capa-link",
    name: "Salin Link CAPA",
    url: "https://tindakan-perbaikan-ptkp-ami-plor.vercel.app/",
    category: "AI Generate",
    note: "Membutuhkan Access Key",
    accessKey: "inayah"
  },
  {
    id: "pretest-link",
    name: "Salin Link Pre-test",
    url: "https://smartbook.id/pre-test_pengetahuan_AMI/",
    category: "Evaluasi Awal",
    note: "Ukur pemahaman awal sebelum belajar"
  },
  {
    id: "posttest-link",
    name: "Salin Link Post-test",
    url: "https://smartbook.id/post-test_pengetahuan_AMI/",
    category: "Sertifikasi Mandiri",
    note: "Evaluasi akhir untuk sertifikasi mandiri"
  }
];
