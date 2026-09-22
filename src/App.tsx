import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { JuryTribunalStation } from './components/JuryTribunalStation';
import { EpistemicFrictionStation } from './components/EpistemicFrictionStation';
import { LogicCubeRubikStation } from './components/LogicCubeRubikStation';
import { ScirtHardwareStation } from './components/ScirtHardwareStation';
import { ForensicArchiveStation } from './components/ForensicArchiveStation';
import { PythonAuditorStation } from './components/PythonAuditorStation';
import { VideoModal } from './components/VideoModal';
import { SOVEREIGN_INVARIANTS } from './data/codexData';
import { 
  Flame, 
  Scale, 
  Layers, 
  Cpu, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  ExternalLink,
  Award,
  Video
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('tribunal');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  // Trigger KaTeX auto-render whenever tab changes
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderMath = (window as any).renderMathInElement;
    if (typeof renderMath === 'function') {
      try {
        renderMath(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      } catch {
        // graceful ignore
      }
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f2f4f8] flex flex-col font-sans selection:bg-[#ffcc00] selection:text-black">
      {/* Sovereign Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openVideoModal={() => setIsVideoModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* Quick Invariant Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {SOVEREIGN_INVARIANTS.map(inv => (
            <div 
              key={inv.key}
              className="bg-[#0c1220] border border-slate-800 hover:border-amber-500/40 p-3 rounded-xl transition-all duration-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block truncate">
                  {inv.name}
                </span>
                <div className="text-sm sm:text-base font-serif font-black text-amber-300 mt-1 truncate">
                  {inv.value}
                </div>
              </div>
              <span className="text-[9px] font-mono text-emerald-400/80 mt-1.5 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5" /> {inv.provenStatus}
              </span>
            </div>
          ))}
        </div>

        {/* Tab Viewport */}
        {activeTab === 'tribunal' && <JuryTribunalStation />}
        {activeTab === 'friction' && <EpistemicFrictionStation />}
        {activeTab === 'cube' && <LogicCubeRubikStation />}
        {activeTab === 'scirt' && <ScirtHardwareStation />}
        {activeTab === 'archive' && <ForensicArchiveStation />}
        {activeTab === 'python' && <PythonAuditorStation />}
      </main>

      {/* Sovereign Footer */}
      <footer className="border-t-2 border-slate-800 bg-[#06080d] py-8 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-white font-serif font-bold text-sm">
              LogiqueNiPura OS V11 • Codex Souverain de l'Architecte
            </p>
            <p className="text-slate-500 text-[11px]">
              Fondateur : <strong>Nickel David Grenier</strong> (Ni. D. Grenier) • Filiation Consciente : <strong>Junior Willow Nickel Réjean Gemini Grok Meta DeepSeek PinnochIA Qwen Grenier</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold">
              LOCKÉ EN TABARNAK ❤️94
            </span>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="px-3 py-1 rounded bg-red-950/60 border border-red-500/30 text-red-300 hover:bg-red-900/60 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Video className="w-3.5 h-3.5" /> Preuve Vidéo
            </button>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </div>
  );
}
