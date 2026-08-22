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
    platform: "External GPT",
    badge: "AI PLOR Generator",
    iconColor: "amber",
    description: "Alat bantu menyusun temuan audit mutu internal secara sistematis, objektif, dan terstandarisasi berdasarkan formula PLOR dan klausul ISO 9001:2015.",
    functions: [
      "Memformulasikan Problem (Pernyataan Ketidaksesuaian yang tepat)",
      "Menentukan Location (Lokasi proses/departemen secara akurat)",
      "Merumuskan Objective Evidence (Fakta & bukti fisik yang tidak terbantahkan)",
      "Memetakan Reference (Klausul ISO 9001:2015 / Dokumen SOP terkait)"
    ],
    url: "https://chatgpt.com/g/g-69834ccf134c819189ab8e0860a404b8-generator-temuan-audit-metoda-plor",
    requiresDesktop: false
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
    url: "https://aistudio.google.com/apps/ab6c7ca2-9bf9-439b-995a-36057740cb2c?showAssistant=true&showPreview=true&fullscreenApplet=true",
    requiresDesktop: true
  },
  {
    id: "ami-gpt",
    name: "AI Asisten AMI-GPT (Versi 2026)",
    platform: "External GPT",
    badge: "AI Asisten Mutakhir 2026",
    iconColor: "indigo",
    description: "Asisten kecerdasan buatan spesialis Audit Mutu Internal ISO 9001:2015 & ISO 19011:2026 yang siap mendampingi proses konsultasi, tanya jawab teori, dan studi kasus kapan saja 24/7.",
    functions: [
      "Tanya jawab cerdas seputar standar ISO 9001:2015 dan ISO 19011:2026",
      "Konsultasi studi kasus audit, dilema temuan, dan kriteria sampling berbasis risiko",
      "Pendampingan belajar modul dan persiapan sertifikasi mandiri 24/7"
    ],
    url: "https://chatgpt.com/g/g-6955fcd4ee0481918fbcce983e93f41c-ai-asisten-ami",
    requiresDesktop: false
  },
  {
    id: "iso-19011-assistant",
    name: "ISO 19011 Audit Asisten AI (Versi 2026)",
    platform: "External GPT",
    badge: "AI Panduan ISO 19011",
    iconColor: "teal",
    description: "AI Panduan spesialis pedoman audit sistem manajemen ISO 19011:2026. Membantu perancangan program audit, penerapan 7 prinsip audit, teknik sampling berbasis risiko, dan metode audit modern.",
    functions: [
      "Panduan penerapan 7 Prinsip Audit Sistem Manajemen ISO 19011",
      "Perancangan & pengelolaan Program Audit Internal berbasis risiko",
      "Metodologi sampling audit & pelaksanaan remote / hybrid audit",
      "Evaluasi kompetensi auditor internal & etika investigasi profesional"
    ],
    url: "https://chatgpt.com/g/g-68ad79e7c7188191b74ccd8782faa2a6-iso-19011-audit-assistant",
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
    id: "iso19011-link",
    name: "Salin Link ISO 19011 Asisten",
    url: "https://chatgpt.com/g/g-68ad79e7c7188191b74ccd8782faa2a6-iso-19011-audit-assistant",
    category: "AI Panduan",
    note: "AI Panduan pedoman audit ISO 19011:2018 Edisi 2026"
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
    url: "https://chatgpt.com/g/g-69834ccf134c819189ab8e0860a404b8-generator-temuan-audit-metoda-plor",
    category: "AI Generate",
    note: "Generator formulasi temuan PLOR"
  },
  {
    id: "capa-link",
    name: "Salin Link CAPA",
    url: "https://aistudio.google.com/apps/ab6c7ca2-9bf9-439b-995a-36057740cb2c?showAssistant=true&showPreview=true&fullscreenApplet=true",
    category: "AI Generate",
    note: "Rekomendasi gunakan Laptop/PC"
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
