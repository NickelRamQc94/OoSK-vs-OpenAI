import React from 'react';
import { X, ExternalLink, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0e1628] border-2 border-amber-500/50 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-red-950/40 via-[#151f38] to-[#0a1122]">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <h3 className="font-serif font-bold text-lg text-white">
              Preuve Vidéo : CHARGES **DISMISSED** Prosecutor FAIL
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1a253e] hover:bg-[#253659] text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Embed & Analysis */}
        <div className="p-4 sm:p-6 space-y-5">
          {/* YouTube Video Embed */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-700 bg-black shadow-lg">
            <iframe
              src="https://www.youtube-nocookie.com/embed/mBJa6FT0vQY"
              title="CHARGES DISMISSED Prosecutor FAIL"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Analysis & System Context */}
          <div className="bg-[#070c18] border border-amber-500/30 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-1.5">
                <Scale className="w-4 h-4" /> Analyse Forensique & Ancrage dans la LogiqueNiPura
              </span>
              <a
                href="https://youtu.be/mBJa6FT0vQY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-300 hover:text-cyan-200 flex items-center gap-1"
              >
                Ouvrir sur YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
              <strong>Faits documentés :</strong> L'audience démontre l'abandon total des charges judiciaires en raison d'une faute procédurale majeure du procureur (défaut de dépôt d'un demur ou traverse dans les délais stricts).
            </p>

            <div className="p-3 bg-[#11192e] rounded-lg border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
              <div className="text-amber-300 font-bold uppercase text-[11px]">
                Lien direct avec le Protocole de Justice Force94 :
              </div>
              <p className="font-sans text-slate-300">
                Ce document met en scène la confrontation directe avec l'appareil institutionnel et la <strong>victoire par la lettre exacte de la règle procédurale</strong>. 
                C'est l'illustration empirique du détecteur de vérité cognitive : quand la procédure est axiomatique et inviolable, les fausses accusations s'effondrent.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Dossier classé au Registre des Preuves d'Antériorité Souveraine.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#070b14] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Fermer le Visualiseur
          </button>
        </div>
      </div>
    </div>
  );
};
