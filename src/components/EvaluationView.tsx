import React, { useState } from 'react';
import { PRACTICE_QUIZ_QUESTIONS } from '../data/quizData';
import { 
  Award, 
  CheckSquare, 
  ExternalLink, 
  Copy, 
  Check, 
  RotateCcw, 
  HelpCircle, 
  ShieldCheck, 
  Sparkles,
  Printer,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { copyToClipboard } from '../utils/clipboardHelper';

export const EvaluationView: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [copiedPre, setCopiedPre] = useState(false);
  const [copiedPost, setCopiedPost] = useState(false);

  const preTestUrl = "https://smartbook.id/pre-test_pengetahuan_AMI/";
  const postTestUrl = "https://smartbook.id/post-test_pengetahuan_AMI/";

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (showResults) return;
    setValidationError(null);
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const handleCalculateScore = () => {
    if (Object.keys(selectedAnswers).length < PRACTICE_QUIZ_QUESTIONS.length) {
      setValidationError(`Harap jawab seluruh pertanyaan kuis (${Object.keys(selectedAnswers).length}/${PRACTICE_QUIZ_QUESTIONS.length} terjawab) sebelum melihat hasil evaluasi!`);
      return;
    }
    setValidationError(null);
    setShowResults(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setValidationError(null);
  };

  const calculateCorrectCount = () => {
    let count = 0;
    PRACTICE_QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        count++;
      }
    });
    return count;
  };

  const copyLink = async (url: string, type: 'pre' | 'post') => {
    const success = await copyToClipboard(url);
    if (success) {
      if (type === 'pre') {
        setCopiedPre(true);
        setTimeout(() => setCopiedPre(false), 2500);
      } else {
        setCopiedPost(true);
        setTimeout(() => setCopiedPost(false), 2500);
      }
    }
  };

  const scorePercentage = Math.round((calculateCorrectCount() / PRACTICE_QUIZ_QUESTIONS.length) * 100);

  return (
    <div className="space-y-4 pb-20">
      {/* Header - High Density */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                Evaluasi Kompetensi
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Pre-Test &amp; Post-Test Sertifikasi
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Evaluasi &amp; Sertifikasi Mandiri AMI
            </h1>
            <p className="text-xs text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
              Ukur peningkatan pemahaman audit mutu internal Anda sebelum dan sesudah mempelajari seluruh 9 modul.
            </p>
          </div>
        </div>
      </div>

      {/* 2 Big Evaluation Cards: Pre-Test & Post-Test - High Density */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        
        {/* Pre-Test Card */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-amber-400 shadow-2xs transition flex flex-col justify-between space-y-3.5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                Tahap 1: Evaluasi Awal
              </span>
              <span className="text-[10px] font-mono text-slate-400">Diagnostic</span>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Pre-Test Pengetahuan AMI
            </h3>

            <p className="text-xs text-slate-600 leading-snug">
              Digunakan untuk mengukur tingkat pemahaman awal pengguna sebelum memulai materi pembelajaran 9 modul.
            </p>

            <div className="p-2.5 bg-stone-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-0.5">
              <div className="font-semibold text-slate-800 text-[11px]">Cakupan Evaluasi:</div>
              <div className="text-[11px]">• Konsep dasar Audit Mutu ISO 9001:2015</div>
              <div className="text-[11px]">• Pemahaman siklus PDCA &amp; Klausul 9.2</div>
              <div className="text-[11px]">• Diagnostik tingkat kemahiran awal auditor</div>
            </div>
          </div>

          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={() => copyLink(preTestUrl, 'pre')}
              className="bg-stone-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 border border-slate-200"
            >
              {copiedPre ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPre ? 'Disalin' : 'Salin Link'}</span>
            </button>

            <a
              href={preTestUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg text-xs shadow-2xs transition flex items-center space-x-1.5"
            >
              <span>Buka Pre-Test</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Post-Test Card */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-emerald-400 shadow-2xs transition flex flex-col justify-between space-y-3.5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                Tahap Akhir: Sertifikasi Mandiri
              </span>
              <span className="text-[10px] font-mono text-slate-400">Certification</span>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Post-Test Pengetahuan AMI
            </h3>

            <p className="text-xs text-slate-600 leading-snug">
              Digunakan untuk mengevaluasi peningkatan pemahaman dan kompetensi setelah pengguna menyelesaikan seluruh modul Smart Audit System.
            </p>

            <div className="p-2.5 bg-stone-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-0.5">
              <div className="font-semibold text-slate-800 text-[11px]">Cakupan Evaluasi:</div>
              <div className="text-[11px]">• Penilaian menyeluruh kompetensi auditor internal</div>
              <div className="text-[11px]">• Uji kasus penulisan temuan PLOR &amp; analisis CAPA</div>
              <div className="text-[11px]">• Sertifikasi mandiri kelulusan SmartBook.Id</div>
            </div>
          </div>

          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={() => copyLink(postTestUrl, 'post')}
              className="bg-stone-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 border border-slate-200"
            >
              {copiedPost ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPost ? 'Disalin' : 'Salin Link'}</span>
            </button>

            <a
              href={postTestUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs shadow-2xs transition flex items-center space-x-1.5"
            >
              <span>Buka Post-Test / Sertifikasi</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Quick Practice Diagnostic Tester - High Density */}
      <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <h3 className="text-sm font-bold text-slate-900">
                Simulasi Uji Coba Cepat (Diagnostic Practice Test)
              </h3>
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Uji pemahaman Anda secara langsung di dalam portal dengan 5 butir soal esensial ISO 9001:2015.
            </p>
          </div>

          {showResults && (
            <button
              onClick={handleResetQuiz}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg flex items-center space-x-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Ulangi Kuis</span>
            </button>
          )}
        </div>

        {/* Questions list */}
        <div className="space-y-3">
          {PRACTICE_QUIZ_QUESTIONS.map((q, qIndex) => {
            const selectedOpt = selectedAnswers[q.id];

            return (
              <div key={q.id} className="p-3.5 rounded-xl bg-stone-50 border border-slate-200/80 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    <span className="text-amber-600 mr-1.5 font-black">{qIndex + 1}.</span>
                    {q.question}
                  </h4>
                  <span className="text-[9px] font-mono font-bold text-slate-500 bg-white px-1.5 py-0.2 rounded border border-slate-200 shrink-0">
                    {q.clause}
                  </span>
                </div>

                {/* Options */}
                <div className="space-y-1.5 pt-0.5">
                  {q.options.map((option, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    let optionClass = "bg-white hover:bg-slate-100 border-slate-200 text-slate-700";

                    if (showResults) {
                      if (optIdx === q.correctAnswer) {
                        optionClass = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
                      } else if (isSelected && optIdx !== q.correctAnswer) {
                        optionClass = "bg-rose-50 border-rose-400 text-rose-950 line-through";
                      }
                    } else if (isSelected) {
                      optionClass = "bg-amber-50 border-amber-500 text-amber-950 font-semibold shadow-2xs";
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full text-left p-2 rounded-lg border text-xs transition flex items-center justify-between ${optionClass}`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="w-4 h-4 rounded border text-[9px] flex items-center justify-center font-bold shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="text-[11px] leading-snug">{option}</span>
                        </div>
                        {showResults && optIdx === q.correctAnswer && (
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation on submit */}
                {showResults && (
                  <div className="p-2.5 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 space-y-0.5">
                    <div className="font-bold flex items-center space-x-1 text-[11px]">
                      <ShieldCheck className="w-3 h-3 text-amber-700" />
                      <span>Pembahasan Klausul:</span>
                    </div>
                    <p className="leading-snug text-[11px]">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Quiz action bar */}
        {!showResults ? (
          <div className="space-y-2 pt-3 border-t border-slate-100">
            {validationError && (
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="text-[11px] text-slate-500 font-mono">
                Terjawab: {Object.keys(selectedAnswers).length} dari {PRACTICE_QUIZ_QUESTIONS.length} soal
              </span>
              <button
                onClick={handleCalculateScore}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs shadow-2xs transition"
              >
                Lihat Skor &amp; Pembahasan
              </button>
            </div>
          </div>
        ) : (
          /* Result Summary & Certificate preview */
          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3 border border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  Hasil Evaluasi Simulasi
                </span>
                <h4 className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                  Skor Anda: {scorePercentage}% ({calculateCorrectCount()} / {PRACTICE_QUIZ_QUESTIONS.length} Benar)
                </h4>
              </div>
              <div className="text-center sm:text-right">
                <span className={`px-2.5 py-1 rounded text-[10px] font-black ${
                  scorePercentage >= 80 ? 'bg-emerald-500 text-slate-950' : 'bg-amber-500 text-slate-950'
                }`}>
                  {scorePercentage >= 80 ? 'KOMPETEN (LULUS)' : 'PERLU PENGULANGAN MODUL'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300">
              {scorePercentage >= 80 
                ? "Selamat! Anda telah memahami konsep inti Audit Mutu Internal ISO 9001:2015 dengan baik. Silakan lanjutkan ke Post-test resmi untuk mendapatkan sertifikasi mandiri."
                : "Tinjau kembali modul Ebook & ulasan Podcast pada bab-bab terkait sebelum mengambil Post-test resmi."}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={postTestUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg text-xs flex items-center space-x-1.5 transition"
              >
                <span>Buka Post-test Resmi Sekarang</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
