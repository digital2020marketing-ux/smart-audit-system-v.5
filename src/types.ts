export type ViewMode = 
  | 'landing' 
  | 'dashboard' 
  | 'modules' 
  | 'worksheets' 
  | 'ai-tools' 
  | 'evaluation' 
  | 'guides'
  | 'offline-links';

export interface AuditModule {
  id: number;
  numberStr: string; // "Modul 1 – Bab Pengantar"
  chapter: string; // "Bab Pengantar"
  title: string;
  subtitle: string;
  description: string;
  keyTakeaways: string[];
  isoClause?: string;
  driveUrls: {
    audio: string;
    slide: string;
    mindmap: string;
    infografis: string;
    ebook: string;
  };
  durationEstimate?: string;
  pagesEstimate?: string;
}

export interface WorksheetItem {
  code: string; // FR.AMI.02.01
  title: string;
  description: string;
  type: 'Spreadsheet' | 'Document';
  url: string;
  iconName: string;
  stage: 'Persiapan' | 'Pelaksanaan' | 'Pelaporan' | 'Tindak Lanjut';
}

export interface AIToolItem {
  id: string;
  name: string;
  platform: 'External GPT' | 'External AI Tool';
  description: string;
  functions: string[];
  url: string;
  accessKey?: string;
  badge: string;
  iconColor: string;
  requiresDesktop?: boolean;
}

export interface ProductGuide {
  id: string;
  title: string;
  category: string;
  summary: string;
  steps: string[];
  tips: string[];
  badge: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  clause: string;
}
