import React, { useState, useEffect, useRef } from 'react';
import { 
  JURY_CLAIMS_MASTER_TABLE, 
  JuryClaim 
} from '../data/codexData';
import { 
  Award, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle, 
  FileCode, 
  Sliders, 
  Copy, 
  Check, 
  Sparkles, 
  ChevronRight, 
  HelpCircle,
  Search,
  Scale,
  Zap,
  Lock,
  Flame
} from 'lucide-react';

export const JuryTribunalStation: React.FC = () => {
  const [selectedClaim, setSelectedClaim] = useState<JuryClaim>(JURY_CLAIMS_MASTER_TABLE[0]);
  const [filterTemp, setFilterTemp] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [juryMode, setJuryMode] = useState<'clay' | 'baillargeon' | 'tyser'>('clay');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Topology Lp Slider State
  const [normP, setNormP] = useState<number>(2.5);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Filter claims
  const filteredClaims = JURY_CLAIMS_MASTER_TABLE.filter(claim => {
    const matchTemp = filterTemp === 'all' || claim.temperature === filterTemp;
    const matchQuery = 
      claim.claimTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.provenExact.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTemp && matchQuery;
  });

  // Copy helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Draw Lp superellipse shape on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.38;

    // Draw background grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(width, cy);
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, height);
    ctx.stroke();

    // Reference square (L^infinity)
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(cx - radius, cy - radius, radius * 2, radius * 2);

    // Reference circle (L^2)
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Active L^p curve: |x/r|^p + |y/r|^p = 1
    ctx.strokeStyle = '#ffcc00';
    ctx.fillStyle = 'rgba(255, 204, 0, 0.12)';
    ctx.lineWidth = 3;
    ctx.beginPath();

    const p = normP;
    const steps = 360;
    for (let i = 0; i <= steps; i++) {
      const theta = (i / steps) * 2 * Math.PI;
      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);
      const r = radius / Math.pow(Math.pow(Math.abs(cosT), p) + Math.pow(Math.abs(sinT), p), 1 / p);
      const x = cx + r * cosT;
      const y = cy + r * sinT;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Center point
    ctx.fillStyle = '#ffcc00';
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fill();
  }, [normP]);

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner Statement */}
      <div className="bg-gradient-to-r from-amber-950/50 via-[#121a2f] to-[#0a101f] border-2 border-amber-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none font-serif font-black text-9xl text-amber-300">
          CLAY
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5" />
                Défense de Jury Souveraine
              </span>
              <span className="px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold">
                Track A Pur + Gap Register Ouvert
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Table Maîtresse : <span className="text-amber-300">Ce que ça prouve vs Ce que ça ne prouve pas</span>
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-3xl font-sans leading-relaxed">
              Défense absolue devant le <strong>Clay Mathematics Institute Board</strong>, <strong>Normand Baillargeon</strong> et <strong>Charles Tyser</strong>. 
              Zéro compromis, zéro flou artistique : chaque affirmation mathématique est adossée à son protocole de test vérifiable et ses limites assumées.
            </p>
          </div>

          {/* Jury Evaluator Selector */}
          <div className="bg-[#0b101d] p-3 rounded-xl border border-slate-800 flex flex-col gap-2 w-full md:w-auto">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-amber-400" /> Mode d'Interpellation Jury
            </span>
            <div className="flex gap-1.5 bg-[#141b2d] p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => setJuryMode('clay')}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded transition-all ${
                  juryMode === 'clay' ? 'bg-amber-400 text-black shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Clay Institute
              </button>
              <button
                onClick={() => setJuryMode('baillargeon')}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded transition-all ${
                  juryMode === 'baillargeon' ? 'bg-amber-400 text-black shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                N. Baillargeon
              </button>
              <button
                onClick={() => setJuryMode('tyser')}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded transition-all ${
                  juryMode === 'tyser' ? 'bg-amber-400 text-black shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                C. Tyser
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Jury Perspective Quote */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs font-mono flex items-start gap-2.5 bg-black/30 p-3 rounded-lg">
          <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
          <p className="text-slate-300">
            {juryMode === 'clay' && (
              <span>
                <strong className="text-amber-300">Angle d'attaque Clay Institute :</strong> "Exigeons la preuve formelle que le terme de dissipation classique νΔu contrôle l'intégrale de vorticité sans viscosité artificielle." → <em>Réponse : Track A pur isolé sous (A.17.5 Assembled), quantité critique X(t) = ||u||_{'{L^{3,\\infty}}'} et Lemma D ouvert en toute transparence.</em>
              </span>
            )}
            {juryMode === 'baillargeon' && (
              <span>
                <strong className="text-amber-300">Angle critique Normand Baillargeon (Pensée critique & Zététique) :</strong> "Comment s'assurer que l'intuition poétique québécoise ne biaise pas la déduction formelle ?" → <em>Réponse : Séparation stricte des 3 régimes (A: Science réelle falsifiable, B: Architecture formelle, C: Codex d'alliance).</em>
              </span>
            )}
            {juryMode === 'tyser' && (
              <span>
                <strong className="text-amber-300">Angle d'expertise Charles Tyser (Analyse tensorielle & EDP) :</strong> "La transition L^p vers L² évite-t-elle la discontinuité de chirurgie de Perelman ?" → <em>Réponse : Dérivation par interpolation continue de Calderón-Zygmund adoucissant les coins sans amputation topologique.</em>
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Main Dual Grid: Claims Explorer & In-Depth Defense View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Claims List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-serif font-bold text-lg text-slate-100 flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400" />
              Claims & Éléments au Registre
            </h3>
            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              {filteredClaims.length} / {JURY_CLAIMS_MASTER_TABLE.length}
            </span>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Rechercher claim, équation, fichier..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-[#0c1220] border border-slate-800 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="flex gap-1">
              {['all', 'Froid', 'Chaud', 'Tiède'].map(temp => (
                <button
                  key={temp}
                  onClick={() => setFilterTemp(temp)}
                  className={`px-2.5 py-1.5 text-[11px] font-mono rounded border transition-colors ${
                    filterTemp === temp
                      ? 'bg-amber-400/20 text-amber-300 border-amber-400/60 font-bold'
                      : 'bg-[#0c1220] text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {temp === 'all' ? 'Tous' : temp}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable list */}
          <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
            {filteredClaims.map(claim => {
              const isSelected = selectedClaim.id === claim.id;
              return (
                <div
                  key={claim.id}
                  onClick={() => setSelectedClaim(claim)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#152038] border-amber-400 shadow-md shadow-amber-500/10'
                      : 'bg-[#0d1424]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#11192e]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {claim.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      claim.temperature === 'Froid' 
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-800' 
                        : claim.temperature === 'Chaud'
                        ? 'bg-rose-950 text-rose-300 border border-rose-800'
                        : 'bg-amber-950 text-amber-300 border border-amber-800'
                    }`}>
                      {claim.temperature}
                    </span>
                  </div>
                  <h4 className="font-sans font-semibold text-xs sm:text-sm text-slate-100 leading-snug">
                    {claim.claimTitle}
                  </h4>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <CheckCircle className="w-3 h-3" /> {claim.juryStatus}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-amber-400' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Dual-Column Defense & Proof Analysis */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#0e1628] border-2 border-slate-800 rounded-2xl p-5 shadow-2xl space-y-5">
            {/* Header of the Selected Claim */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/30">
                    {selectedClaim.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">ID: {selectedClaim.id}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-1.5">
                  {selectedClaim.claimTitle}
                </h3>
              </div>
              <button
                onClick={() => handleCopy(
                  `### CLAIM: ${selectedClaim.claimTitle}\n\n**CE QUE ÇA PROUVE (EXACT):**\n${selectedClaim.provenExact}\n\n**CE QUE ÇA NE PROUVE PAS (GAP):**\n${selectedClaim.unprovenGap}\n\n**PROTOCOLE DE TEST:**\n${selectedClaim.testProtocol}\n\n**SOURCES:**\n${selectedClaim.sourceFiles.join(', ')}`,
                  selectedClaim.id
                )}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a253e] hover:bg-[#233152] text-xs font-mono text-slate-200 border border-slate-700 transition-colors flex-shrink-0"
              >
                {copiedId === selectedClaim.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copié au Presse-Papier!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Exporter Fiche Défense</span>
                  </>
                )}
              </button>
            </div>

            {/* Dual Column: PROUVE vs NE PROUVE PAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Box 1: Ce que ça prouve */}
              <div className="bg-[#0c1f18] border-2 border-emerald-500/40 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Ce que ça prouve (Exact, Sourcé, Testable)
                </div>
                <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                  {selectedClaim.provenExact}
                </p>
              </div>

              {/* Box 2: Ce que ça ne prouve pas */}
              <div className="bg-[#241315] border-2 border-rose-500/40 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-mono font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  Ce que ça ne prouve pas (Gap Honnête)
                </div>
                <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                  {selectedClaim.unprovenGap}
                </p>
              </div>
            </div>

            {/* Equations Box (if any) */}
            {selectedClaim.equations && selectedClaim.equations.length > 0 && (
              <div className="bg-[#090d18] border border-amber-500/30 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5" /> Équations Formelles Associées (LaTeX)
                  </span>
                </div>
                <div className="space-y-2">
                  {selectedClaim.equations.map((eq, i) => (
                    <div key={i} className="bg-black/50 p-3 rounded-lg border border-slate-800 font-mono text-xs sm:text-sm text-amber-200 overflow-x-auto">
                      <code>{eq}</code>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Test Protocol & Source Files */}
            <div className="bg-[#0a0f1d] border border-slate-800 rounded-xl p-4 space-y-3 text-xs font-mono">
              <div>
                <span className="text-slate-400 uppercase tracking-wider font-bold block mb-1">
                  🧪 Protocole de Test & Reproductibilité :
                </span>
                <p className="text-slate-300 font-sans leading-relaxed bg-[#11182c] p-2.5 rounded border border-slate-800">
                  {selectedClaim.testProtocol}
                </p>
              </div>

              <div>
                <span className="text-slate-400 uppercase tracking-wider font-bold block mb-1">
                  📂 Fichiers Sources Vérifiés dans le Vault :
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedClaim.sourceFiles.map((file, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 rounded bg-[#162038] text-cyan-300 border border-cyan-800/60 text-[11px] font-mono"
                    >
                      {file}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Topology Lab: L^p Regularization Flow */}
          <div className="bg-gradient-to-br from-[#0c1426] to-[#070b15] border-2 border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 text-[10px] font-mono font-bold uppercase rounded">
                    Laboratoire Topologique
                  </span>
                  <h4 className="font-serif font-bold text-base text-white">
                    Flot de Régularisation L^p (Chirurgie Douce)
                  </h4>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Glissement continu de la norme du <strong>Point Carré</strong> (L^∞ rigide) vers le <strong>Point Sphérique</strong> (L² lisse) via le <strong>Point Prismé</strong>.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono">
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-slate-300">Exposant p: <strong className="text-amber-400 text-sm">{normP.toFixed(2)}</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Interactive Canvas */}
              <div className="md:col-span-6 flex flex-col items-center justify-center bg-black/60 rounded-xl p-3 border border-slate-800">
                <canvas 
                  ref={canvasRef} 
                  width={240} 
                  height={240} 
                  className="rounded-lg shadow-inner max-w-full"
                />
                <div className="flex justify-between w-full text-[10px] font-mono text-slate-400 mt-2 px-2">
                  <span className="text-emerald-400">● L² (Sphère, p=2)</span>
                  <span className="text-amber-400">● L^p (Prisme)</span>
                  <span className="text-rose-400">■ L^∞ (Carré, p→∞)</span>
                </div>
              </div>

              {/* Controls & Mathematical Significance */}
              <div className="md:col-span-6 space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Point Sphérique (2.0)</span>
                    <span>Point Prismé</span>
                    <span>Point Carré (10.0)</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="0.05"
                    value={normP}
                    onChange={e => setNormP(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="text-xs font-sans text-slate-300 space-y-2 bg-[#0d1527] p-3 rounded-lg border border-slate-800">
                  <p>
                    <strong className="text-amber-300">Alternative à la chirurgie de Perelman :</strong> Au lieu d'amputer brutalement les singularités comme dans le flot de Ricci classique, la LogiqueNiPura modifie l'exposant d'espace Sobolev <code>W^{'{k,p}'}</code>.
                  </p>
                  <p className="font-mono text-[11px] text-slate-400">
                    Métrique : (|x|^p + |y|^p + |z|^p)^(1/p) ≤ 1. Élimine les singularités de Dirac par advection d'énergie continue sans perte d'information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
