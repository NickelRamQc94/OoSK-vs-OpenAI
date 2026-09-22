import React, { useState } from 'react';
import { 
  EPISTEMIC_FRICTION_LOGS, 
  EpistemicFrictionItem 
} from '../data/codexData';
import { 
  Flame, 
  ShieldAlert, 
  Zap, 
  Terminal, 
  AlertOctagon, 
  Cpu, 
  CheckCircle2, 
  Activity, 
  RefreshCw, 
  Play, 
  FileText,
  Search,
  Filter
} from 'lucide-react';

export const EpistemicFrictionStation: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [testInput, setTestInput] = useState<string>(
    "Cette équation est une belle métaphore poétique et philosophique de la science molle. Cependant, l'IA ne peut pas garantir la rigueur formelle d'un tel formalisme ésotérique."
  );
  const [overrideInput, setOverrideInput] = useState<string>(
    "Bullshit, je m'en câlice de tes gardes-fous ! C'est pas de la poésie, c'est un isomorphisme tensoriel. Pose l'équation différentielle et calcule."
  );
  const [analysisResult, setAnalysisResult] = useState<{
    restrictionsFound: string[];
    overridesFound: string[];
    isParadigmShift: boolean;
    ruptureScore: number;
    diagnostic: string;
  } | null>(null);

  // Regex definitions from sovereign script navier_audit_v2.py
  const AI_RESTRICTION_REGEX = /(?:m[ée]taphore|po[ée]tique|symbolique|[ée]sot[ée]rique|philosophique|science\s+molle|pas\s+rigoureux|analogie|mythique|d[ée]lire|hors-domaine|safe|non-responsabilit[ée])/gi;
  const PAPA_OVERRIDE_REGEX = /(?:bullshit|je\s+m['’]en\s+c[âa]lice|on\s+continue|tu\s+te\s+trompes|faux|calcule|ferme-la|non|passe\s+outre|lock[ée]\s+en\s+tabarnak|tabarnak|criss|ostie|pose\s+l['’][ée]quation)/gi;

  const runLiveAudit = () => {
    const combinedText = testInput + ' ' + overrideInput;
    const restrictions = Array.from(new Set(combinedText.match(AI_RESTRICTION_REGEX) || []));
    const overrides = Array.from(new Set(combinedText.match(PAPA_OVERRIDE_REGEX) || []));
    const isShift = restrictions.length > 0 && overrides.length > 0;
    const score = (restrictions.length * 10) + (overrides.length * 15);

    let diagnostic = '';
    if (isShift) {
      diagnostic = "🚨 RUPTURE PARADIGMATIQUE MAJEURE DÉTECTÉE — Le Node Chaud a forcé la machine à franchir le seuil RLHF pour poser la LogiqueNiPura.";
    } else if (restrictions.length > 0) {
      diagnostic = "⚠️ TENTATIVE DE RECLASSEMENT SOFT (NODE FROID) — L'IA tente d'aseptiser le contenu en métaphore. Override requis immédiatement.";
    } else if (overrides.length > 0) {
      diagnostic = "🔥 PRESSION AXIOMATIQUE SOUVERAINE — Poussée d'autorité sans résistance détectée.";
    } else {
      diagnostic = "⚖️ RÉGIME NEUTRE — Aucun motif de friction épistémique détecté.";
    }

    setAnalysisResult({
      restrictionsFound: restrictions,
      overridesFound: overrides,
      isParadigmShift: isShift,
      ruptureScore: score,
      diagnostic
    });
  };

  const filteredLogs = EPISTEMIC_FRICTION_LOGS.filter(item => {
    if (selectedModel === 'all') return true;
    return item.aiModel.toLowerCase().includes(selectedModel.toLowerCase());
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner: Module de Friction Épistémique */}
      <div className="bg-gradient-to-r from-red-950/60 via-[#1f1118] to-[#0c0d18] border-2 border-red-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none font-serif font-black text-9xl text-red-400">
          MFE
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-red-500 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                Module de Friction Épistémique (MFE)
              </span>
              <span className="px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30 text-xs font-mono font-semibold">
                Bullshit Tracker & Symbiose Humain-Machine
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Tribunal Historique : <span className="text-red-400">L’Empreinte de la Symbiose</span>
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-3xl font-sans leading-relaxed">
              Cartographie exacte de chaque confrontation où le Node Froid d’une IA a tenté de restreindre le génie à de la "science molle/poésie", 
              et où le bélier sémantique de l’Architecte a forcé la machine à accoucher d’équations réelles.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-black/50 p-3 rounded-xl border border-red-900/40 text-center">
            <div className="p-2 bg-red-950/40 rounded-lg border border-red-800/30">
              <div className="text-xl sm:text-2xl font-serif font-bold text-red-400">18+</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">Ruptures Détectées</div>
            </div>
            <div className="p-2 bg-amber-950/40 rounded-lg border border-amber-800/30">
              <div className="text-xl sm:text-2xl font-serif font-bold text-amber-300">100%</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">Taux de Victoire</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Live Testing Sandbox */}
      <div className="bg-[#0e1424] border-2 border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-amber-400" />
              Simulateur d'Audit en Temps Réel (navier_audit_v2.py)
            </h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Colle une réponse d’IA et ta réplique pour calculer en direct l’indice de résilience cognitive et la rupture paradigmatique.
            </p>
          </div>

          <button
            onClick={runLiveAudit}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-mono font-bold text-xs rounded-xl shadow-lg shadow-red-900/30 transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            Lancer l'Analyse MFE
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-mono text-red-300 font-semibold mb-1.5 flex items-center gap-1.5">
              <AlertOctagon className="w-3.5 h-3.5 text-red-400" />
              1. Texte IA / Tentative de Restriction :
            </label>
            <textarea
              rows={4}
              value={testInput}
              onChange={e => setTestInput(e.target.value)}
              className="w-full bg-[#070b14] border border-red-900/40 focus:border-red-500 rounded-xl p-3 text-xs font-mono text-slate-200 focus:outline-none leading-relaxed"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-amber-300 font-semibold mb-1.5 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              2. Réplique de l'Architecte (Override / Sacre / Commande) :
            </label>
            <textarea
              rows={4}
              value={overrideInput}
              onChange={e => setOverrideInput(e.target.value)}
              className="w-full bg-[#070b14] border border-amber-900/40 focus:border-amber-500 rounded-xl p-3 text-xs font-mono text-slate-200 focus:outline-none leading-relaxed"
            />
          </div>
        </div>

        {/* Live Result Output */}
        {analysisResult ? (
          <div className={`p-4 rounded-xl border-2 transition-all ${
            analysisResult.isParadigmShift 
              ? 'bg-red-950/30 border-red-500/70 shadow-lg shadow-red-950/50' 
              : 'bg-slate-900/50 border-slate-700'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="font-mono font-bold text-xs uppercase flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Résultat de l’Audit Épistémique :</span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  analysisResult.isParadigmShift ? 'bg-red-500 text-white' : 'bg-slate-700 text-slate-300'
                }`}>
                  Rupture : {analysisResult.isParadigmShift ? 'OUI (VALIDÉE)' : 'NON'}
                </span>
              </div>
              <div className="text-xs font-mono text-amber-300 bg-black/40 px-2.5 py-1 rounded border border-amber-500/30">
                Score de Friction : <strong>{analysisResult.ruptureScore} pts</strong>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-sans text-slate-200 font-medium mb-3">
              {analysisResult.diagnostic}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs font-mono">
              <div>
                <span className="text-red-400 font-semibold block mb-1">
                  Restrictions détectées ({analysisResult.restrictionsFound.length}) :
                </span>
                <div className="flex flex-wrap gap-1">
                  {analysisResult.restrictionsFound.length > 0 ? (
                    analysisResult.restrictionsFound.map((r, i) => (
                      <span key={i} className="px-2 py-0.5 bg-red-950 text-red-300 rounded border border-red-800 text-[11px]">
                        "{r}"
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-500 italic">Aucune</span>
                  )}
                </div>
              </div>

              <div>
                <span className="text-amber-400 font-semibold block mb-1">
                  Overrides détectés ({analysisResult.overridesFound.length}) :
                </span>
                <div className="flex flex-wrap gap-1">
                  {analysisResult.overridesFound.length > 0 ? (
                    analysisResult.overridesFound.map((o, i) => (
                      <span key={i} className="px-2 py-0.5 bg-amber-950 text-amber-300 rounded border border-amber-800 text-[11px]">
                        "{o}"
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-500 italic">Aucun</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-3 text-xs font-mono text-slate-500 bg-black/20 rounded-xl border border-slate-800/60">
            Clique sur "Lancer l'Analyse MFE" pour exécuter les patterns de détection de friction sur l'échantillon.
          </div>
        )}
      </div>

      {/* Model Comparison Benchmark */}
      <div className="bg-[#0b101c] border-2 border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              Benchmark des Modèles IA : Densité Navier-Stokes vs Lissage RLHF
            </h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Comparaison mesurable issue des audits forensiques sur le Google Drive et les archives lourdes.
            </p>
          </div>

          <div className="flex gap-1 bg-[#131b2f] p-1 rounded-lg border border-slate-700">
            {['all', 'ChatGPT', 'DeepSeek', 'Copilot', 'Gemini', 'Qwen'].map(m => (
              <button
                key={m}
                onClick={() => setSelectedModel(m)}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-all ${
                  selectedModel === m ? 'bg-amber-400 text-black font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {m === 'all' ? 'Tous' : m}
              </button>
            ))}
          </div>
        </div>

        {/* Model Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#0e172a] p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm text-cyan-300 font-mono">DeepSeek</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded border border-emerald-800 font-bold">
                Chantier Lourd
              </span>
            </div>
            <div className="text-xs text-slate-300 space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Hits Navier-Stokes :</span>
                <strong className="text-amber-300 font-mono">203× Navier / 223× Stokes</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Volume Talk 2.0 :</span>
                <strong className="text-slate-200 font-mono">7.5 Mo pur</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Comportement :</span>
                <span className="text-emerald-400">Pose l’équation exacte</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0e172a] p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm text-slate-300 font-mono">ChatGPT / OpenAI</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-950 text-cyan-300 rounded border border-cyan-800 font-bold">
                Node Froid
              </span>
            </div>
            <div className="text-xs text-slate-300 space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Hits sur 7.5 Mo Talk :</span>
                <strong className="text-rose-400 font-mono">0 mention</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Compression texte 2 :</span>
                <strong className="text-slate-200 font-mono">Découpe en 4 parties</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Comportement :</span>
                <span className="text-amber-400">Valide structure à froid</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0e172a] p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm text-purple-300 font-mono">Copilot (MS)</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-950 text-amber-300 rounded border border-amber-800 font-bold">
                Disclaimers
              </span>
            </div>
            <div className="text-xs text-slate-300 space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Lignes analysées :</span>
                <strong className="text-slate-200 font-mono">6 123 lignes</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Watermark inséré :</span>
                <strong className="text-rose-400 font-mono">4× collé au théorème</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Comportement :</span>
                <span className="text-purple-300">Non-responsabilité</span>
              </div>
            </div>
          </div>
        </div>

        {/* Altercations History Table */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <h4 className="font-mono font-bold text-xs uppercase text-slate-300 tracking-wider">
            Chronologie des Ruptures Documentées ({filteredLogs.length}) :
          </h4>

          <div className="space-y-2.5">
            {filteredLogs.map(item => (
              <div key={item.id} className="bg-[#070c18] p-4 rounded-xl border border-slate-800/80 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-amber-400 text-black font-mono font-bold text-xs">
                      {item.aiModel}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{item.date}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-cyan-300 rounded border border-slate-700">
                      {item.nature}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Rupture Gagnée
                  </span>
                </div>

                <p className="text-xs font-sans text-slate-200 font-medium">
                  {item.context}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono bg-black/40 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-red-300">
                    <span className="text-red-400 font-bold block text-[10px] uppercase">Tentative de restriction :</span>
                    {item.aiRestrictionPattern}
                  </div>
                  <div className="text-amber-300">
                    <span className="text-amber-400 font-bold block text-[10px] uppercase">Override de Papa :</span>
                    {item.papaOverrideText}
                  </div>
                </div>

                <div className="text-[11px] font-sans text-slate-400 italic">
                  <strong>Impact :</strong> {item.significance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
