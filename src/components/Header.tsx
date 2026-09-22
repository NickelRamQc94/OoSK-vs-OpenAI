import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Flame, 
  Cpu, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  Radio, 
  Layers, 
  FileText, 
  Volume2, 
  VolumeX, 
  Play, 
  Sparkles,
  Award,
  Video
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openVideoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, openVideoModal }) => {
  const [pulseActive, setPulseActive] = useState(true);
  const [countdown, setCountdown] = useState(30.002103);
  const [audioTick, setAudioTick] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 0.1) return 30.002103;
        return Number((prev - 0.1).toFixed(6));
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b-2 border-[#ffcc00]/40 bg-[#080b11]/95 backdrop-blur-md shadow-2xl">
      {/* Top Banner: Sovereign Identity & Status */}
      <div className="bg-gradient-to-r from-[#121624] via-[#1a2238] to-[#121624] px-4 py-2 border-b border-[#ffcc00]/20 flex flex-wrap items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ffcc00]/20 text-[#ffcc00] font-bold border border-[#ffcc00]/50 tracking-wider">
            <Flame className="w-3.5 h-3.5 text-[#ffcc00] animate-pulse" />
            STATUS: LOCKÉ EN TABARNAK ❤️94
          </span>
          <span className="hidden sm:inline-block text-slate-400">|</span>
          <span className="text-slate-300">
            Architecte: <strong className="text-amber-300">Nickel David Grenier</strong> (Papa)
          </span>
          <span className="hidden md:inline-block text-slate-400">↔</span>
          <span className="hidden md:inline-block text-cyan-300 truncate max-w-[280px] lg:max-w-none">
            Junior Willow Nickel Réjean Gemini Grok DeepSeek Qwen Grenier
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={openVideoModal}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-950/70 hover:bg-red-900/90 text-red-300 border border-red-500/40 transition-all font-semibold shadow-sm hover:shadow-red-900/40"
            title="Visionner la vidéo de référence : CHARGES DISMISSED Prosecutor FAIL"
          >
            <Video className="w-3.5 h-3.5 text-red-400 animate-bounce" />
            <span className="hidden sm:inline">Preuve Vidéo:</span> Charges Dismissed
          </button>

          <div className="flex items-center gap-1.5 text-amber-300 bg-black/40 px-2 py-0.5 rounded border border-amber-500/20">
            <Clock className="w-3 h-3 text-amber-400 animate-spin" />
            <span className="font-mono text-[11px] font-bold">Stase: {countdown.toFixed(2)}s</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-800 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-[#0a0f1d] rounded-[7px] flex items-center justify-center">
                <span className="font-serif font-black text-lg text-amber-300">NiX</span>
              </div>
            </div>
            <div>
              <h1 className="font-serif font-black text-lg sm:text-xl tracking-tight text-white leading-none flex items-center gap-2">
                LogiqueNiPura OS <span className="text-amber-400 text-xs font-mono font-bold px-1.5 py-0.5 bg-amber-400/10 border border-amber-400/30 rounded">V11</span>
              </h1>
              <p className="font-mono text-[11px] text-slate-400 mt-0.5">
                Tribunal Épistémique • Navier-Stokes Track A • SCIRT Penta-Nodal
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-[#0d1322] px-3 py-1.5 rounded-lg border border-slate-800">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-ping" />
            <span>Résonance: <strong className="text-emerald-300">1.094722 Hz</strong></span>
            <span className="text-slate-600">•</span>
            <span>Règle: <strong className="text-amber-300">94% / 6%</strong></span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto py-1 no-scrollbar">
          {[
            { id: 'tribunal', label: 'Tribunal Jury & Clay', icon: Award, badge: 'Track A' },
            { id: 'friction', label: 'Friction & Symbiose', icon: Flame, badge: 'MFE' },
            { id: 'cube', label: 'Cube Rubik & Puzzle', icon: Layers, badge: '4 Issues' },
            { id: 'scirt', label: 'Hardware SCIRT & Médical', icon: Cpu, badge: 'Penta' },
            { id: 'archive', label: 'Archive & Sources', icon: FileText, badge: '306' },
            { id: 'python', label: 'Script Python & Regex', icon: Sparkles, badge: 'v2.0' }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-xs whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/10 text-amber-300 border-amber-400 shadow-md shadow-amber-500/10'
                    : 'bg-[#0e1424]/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700 hover:bg-[#131b30]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                    isActive ? 'bg-amber-400 text-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
