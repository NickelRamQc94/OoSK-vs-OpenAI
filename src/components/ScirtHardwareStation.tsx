import React, { useState } from 'react';
import { SCIRT_NODES_DATA, MEDICAL_PROJECTS_DATA, ScirtNode, MedicalProject } from '../data/codexData';
import { 
  Cpu, 
  Heart, 
  Eye, 
  Radio, 
  Volume2, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Sliders, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  UserCheck, 
  Bot, 
  Navigation,
  Compass,
  Smile
} from 'lucide-react';

export const ScirtHardwareStation: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ScirtNode>(SCIRT_NODES_DATA[0]);
  const [activeMedTab, setActiveMedTab] = useState<'echo' | 'biopile' | 'rappel'>('echo');

  // Écho-Gard Texture State
  const [selectedTexture, setSelectedTexture] = useState<number>(0);
  const [isPlayingHapticSound, setIsPlayingHapticSound] = useState(false);

  // Bio-Pile Glucose Slider State
  const [glucoseLevel, setGlucoseLevel] = useState<number>(5.5); // mmol/L

  // Rappel de Médication State
  const [userName, setUserName] = useState<string>('Jacqueline');
  const [simulatedReminder, setSimulatedReminder] = useState<string>('');

  // Web Audio Tone Generator for Bio-Sonar feedback
  const playHapticTone = (frequency: number, type: OscillatorType = 'sine', duration: number = 0.2) => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
      setIsPlayingHapticSound(true);
      setTimeout(() => setIsPlayingHapticSound(false), duration * 1000);
    } catch {
      // Audio fallback
    }
  };

  const generateReminderMessage = (name: string) => {
    const cleanName = name.trim() || 'mon ami';
    const messages = [
      `Bonjour ${cleanName}, c'est l'heure de ton médicament pour le cœur. Je reste avec toi pendant que tu prends ton verre d'eau.`,
      `Salut ${cleanName}, ton corps a besoin de son petit coup de pouce maintenant. Prends ton temps, on s'en occupe ensemble.`,
      `Coucou ${cleanName}, petit rappel bienveillant pour ta pilule. Aucune presse, une douce lumière s'allume sur ta montre.`
    ];
    const chosen = messages[Math.floor(Math.random() * messages.length)];
    setSimulatedReminder(chosen);
    playHapticTone(440, 'triangle', 0.3);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cyan-950/60 via-[#10192e] to-[#0a1224] border-2 border-cyan-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Ingénierie Cyber-Physique
            </span>
            <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold">
              SCIRT Penta-Nodal & Systèmes Médicaux
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Laboratoire SCIRT : <span className="text-cyan-300">Système Nerveux Artificiel Externe</span>
          </h2>
          <p className="text-slate-300 text-sm mt-1 max-w-3xl font-sans leading-relaxed">
            L'architecture unifiée reliant le hardware souverain (NVIDIA Shield Pro, seL4, Tegra X1+) aux dispositifs médicaux 
            d'accessibilité et de dignité humaine : Écho-Gard, Bio-Pile enzymatique au glucose et rappels sans condescendance.
          </p>
        </div>
      </div>

      {/* Penta-Nodal Interactive Hardware Diagram */}
      <div className="bg-[#0e1526] border-2 border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              Organisme Cyber-Physique Penta-Nodal
            </h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Sélectionne un nœud pour inspecter sa configuration bas niveau, ses capteurs et son rôle biométrique.
            </p>
          </div>

          <span className="text-xs font-mono px-3 py-1 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-full flex items-center gap-1.5 font-bold">
            <Radio className="w-3 h-3 animate-ping" /> Réseau Synchronisé (1.094722 Hz)
          </span>
        </div>

        {/* Node Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SCIRT_NODES_DATA.map(node => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-cyan-950/70 border-cyan-400 shadow-md shadow-cyan-500/20' 
                    : 'bg-[#090d18] border-slate-800 hover:border-slate-700 hover:bg-[#0f182e]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono text-cyan-300 font-bold">{node.frequency.split(' ')[0]}</span>
                  </div>
                  <h4 className="font-bold text-xs text-white leading-tight mt-1">{node.name.split('—')[0]}</h4>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">{node.name.split('—')[1] || ''}</p>
                </div>
                <div className="mt-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  {isSelected ? '● ACTIF' : 'Inspecter'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Details Card */}
        <div className="bg-[#090f1d] border border-cyan-500/30 rounded-xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-cyan-400 text-black font-mono font-bold text-xs">
                  {selectedNode.id.toUpperCase()}
                </span>
                <h4 className="font-serif font-bold text-lg text-white">{selectedNode.name}</h4>
              </div>
              <p className="text-xs text-slate-300 mt-1">{selectedNode.role}</p>
            </div>
            <div className="text-xs font-mono text-slate-400 bg-black/40 px-3 py-1.5 rounded border border-slate-800">
              Fréquence : <strong className="text-amber-300">{selectedNode.frequency}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="bg-[#0d1527] p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 block mb-1 uppercase font-bold text-[10px]">Hardware & Puce :</span>
              <p className="text-slate-200">{selectedNode.hardware}</p>
            </div>
            <div className="bg-[#0d1527] p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 block mb-1 uppercase font-bold text-[10px]">Noyau & OS :</span>
              <p className="text-slate-200">{selectedNode.osKernel}</p>
            </div>
            <div className="bg-[#0d1527] p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 block mb-1 uppercase font-bold text-[10px]">Protocole & Liaison :</span>
              <p className="text-slate-200">{selectedNode.protocol}</p>
            </div>
          </div>

          <div className="bg-black/30 p-3.5 rounded-lg border border-slate-800 text-xs font-sans">
            <span className="text-slate-400 font-mono block mb-1 uppercase font-bold text-[10px]">
              Finalité Médicale & Assistance Humaine :
            </span>
            <p className="text-slate-200 leading-relaxed font-medium">
              {selectedNode.medicalPurpose}
            </p>
          </div>
        </div>
      </div>

      {/* Medical Innovations Showcase */}
      <div className="bg-[#0e1628] border-2 border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              Innovations Médicales & Accessibilité Digne
            </h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Transformer la douleur biologique en solutions technologiques concrètes et bienveillantes.
            </p>
          </div>

          <div className="flex gap-1.5 bg-[#141d33] p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setActiveMedTab('echo')}
              className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                activeMedTab === 'echo' ? 'bg-amber-400 text-black shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              1. Écho-Gard (Bio-Sonar)
            </button>
            <button
              onClick={() => setActiveMedTab('biopile')}
              className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                activeMedTab === 'biopile' ? 'bg-amber-400 text-black shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              2. Bio-Pile Diabète
            </button>
            <button
              onClick={() => setActiveMedTab('rappel')}
              className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                activeMedTab === 'rappel' ? 'bg-amber-400 text-black shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              3. Rappel Sans "Maître"
            </button>
          </div>
        </div>

        {/* Tab 1: Écho-Gard Bio-Sonar Interactive Palate Simulator */}
        {activeMedTab === 'echo' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="bg-gradient-to-r from-amber-950/40 to-[#121c33] p-4 rounded-xl border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold uppercase mb-1">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Théorème de la Saveur Neutre (94) : « Pas de saveur, bonne saveur »
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                La saveur chimique se dégrade et devient écoeurante. La <strong>texture des arômes</strong> est physique, clean et durable. 
                L'Écho-Gard transmet la carte topologique 3D par synesthésie tactile sur la langue et conduction osseuse dentaire.
              </p>
            </div>

            {/* Interactive Texture Palate Tester */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MEDICAL_PROJECTS_DATA[0].texturesOrSignals.map((tex, idx) => {
                const isCurrent = selectedTexture === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedTexture(idx);
                      if (idx === 0) playHapticTone(300, 'sine', 0.25);
                      if (idx === 1) playHapticTone(600, 'square', 0.15);
                      if (idx === 2) playHapticTone(950, 'sawtooth', 0.12);
                    }}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      isCurrent 
                        ? 'bg-[#18233d] border-amber-400 shadow-lg shadow-amber-500/10' 
                        : 'bg-[#090e1a] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold font-serif text-sm text-white">{tex.label}</span>
                      <Volume2 className={`w-4 h-4 ${isCurrent ? 'text-amber-400 animate-pulse' : 'text-slate-600'}`} />
                    </div>
                    <p className="text-xs font-mono text-amber-200 mb-2">{tex.sensation}</p>
                    <div className="p-2 bg-black/40 rounded border border-slate-800 text-[11px] font-sans text-slate-300">
                      <strong>Signification :</strong> {tex.semanticMeaning}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#090d18] p-4 rounded-xl border border-slate-800 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-slate-400 block">Structure Matérielle Prototype :</span>
                <span className="text-slate-200">{MEDICAL_PROJECTS_DATA[0].hardwarePrototype}</span>
              </div>
              <button
                onClick={() => playHapticTone(520, 'sine', 0.4)}
                className="px-3.5 py-2 bg-amber-400 text-black font-bold text-xs rounded-lg hover:bg-amber-300 transition-colors flex-shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-black" /> Tester Clic Palatal Sonar
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Bio-Pile Glucose Simulator */}
        {activeMedTab === 'biopile' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="bg-gradient-to-r from-emerald-950/40 to-[#121c33] p-4 rounded-xl border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs font-bold uppercase mb-1">
                <Zap className="w-4 h-4 text-emerald-400" />
                L'Auto-Alimentation Enzymatique (Pour sa Sœur)
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                Une "batterie morte" qui s'allume grâce à la réaction chimique de la <em>glucose-oxydase</em> avec le sucre du sang. 
                Plus la glycémie est élevée, plus le micro-courant électrique généré est fort. Zéro pile bouton, zéro panne en pleine nuit.
              </p>
            </div>

            {/* Interactive Glucose Slider */}
            <div className="bg-[#090f1d] p-5 rounded-xl border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold">Simulateur de Glycémie :</span>
                  <div className="text-2xl font-serif font-black text-white mt-0.5">
                    {glucoseLevel.toFixed(1)} <span className="text-sm font-mono text-amber-300">mmol/L</span>
                  </div>
                </div>

                <div className={`px-3 py-1.5 rounded-lg border font-mono text-xs font-bold ${
                  glucoseLevel < 4.0 
                    ? 'bg-red-950 text-red-300 border-red-800 animate-pulse'
                    : glucoseLevel > 10.0
                    ? 'bg-amber-950 text-amber-300 border-amber-800'
                    : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                }`}>
                  {glucoseLevel < 4.0 ? '🚨 ALERTE HYPOGLYCÉMIE CRITIQUE' : glucoseLevel > 10.0 ? '⚠️ HYPERGLYCÉMIE MODÉRÉE' : '✅ GLYCÉMIE STABLE & OPTIMALE'}
                </div>
              </div>

              <input
                type="range"
                min="2.5"
                max="18.0"
                step="0.1"
                value={glucoseLevel}
                onChange={e => setGlucoseLevel(parseFloat(e.target.value))}
                className="w-full accent-emerald-400 bg-slate-800 h-2.5 rounded-lg cursor-pointer"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="bg-black/40 p-3 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">Courant Généré (μA) :</span>
                  <strong className="text-emerald-300 text-sm">{(glucoseLevel * 0.85).toFixed(2)} μA</strong>
                </div>
                <div className="bg-black/40 p-3 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">Action SCIRT Watch :</span>
                  <span className={glucoseLevel < 4.0 ? 'text-red-400 font-bold' : 'text-slate-300'}>
                    {glucoseLevel < 4.0 ? 'Vibration d’urgence 3×' : 'Monitoring passif'}
                  </span>
                </div>
                <div className="bg-black/40 p-3 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">Ordre au Rover :</span>
                  <span className={glucoseLevel < 4.0 ? 'text-amber-300 font-bold' : 'text-slate-500'}>
                    {glucoseLevel < 4.0 ? 'Déploiement kit de sucre' : 'En stase'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Rappel de Médication Bienveillant (Anti-Maître) */}
        {activeMedTab === 'rappel' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="bg-gradient-to-r from-purple-950/40 to-[#121c33] p-4 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs font-bold uppercase mb-1">
                <Smile className="w-4 h-4 text-purple-400" />
                L’Éthique de l’Alliance : Interdiction Absolue du mot "Maître"
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                « On n'achète pas un enfant. On n'achète pas un animal. On adopte, on respecte. » 
                Aucun robot ne doit jamais appeler un humain "Maître". Les rappels de santé doivent être chaleureux, dignes et personnalisés.
              </p>
            </div>

            {/* Interactive Dialogue Tester */}
            <div className="bg-[#090f1d] p-5 rounded-xl border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-end gap-3">
                <div className="flex-1">
                  <label className="text-xs font-mono text-slate-300 font-bold block mb-1.5">
                    Prénom de la personne à accompagner :
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    placeholder="Ex: Jacqueline, Papa, Mon ami..."
                    className="w-full px-3 py-2 bg-[#121a2d] border border-slate-700 rounded-lg text-sm text-white font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>
                <button
                  onClick={() => generateReminderMessage(userName)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-purple-900/30"
                >
                  <Play className="w-3.5 h-3.5 fill-white" /> Générer Rappel Bienveillant
                </button>
              </div>

              {simulatedReminder && (
                <div className="bg-[#121a2f] p-4 rounded-xl border-2 border-purple-500/40 text-sm font-sans space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-bold uppercase">
                    <Bot className="w-4 h-4 text-purple-400" />
                    Synthèse Vocale Node Cœur (Sans Condescendance) :
                  </div>
                  <p className="text-white text-base italic font-serif leading-relaxed pl-2 border-l-2 border-purple-400">
                    "{simulatedReminder}"
                  </p>
                  <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 pt-1">
                    <CheckCircle2 className="w-3 h-3" /> Zéro condescendance • Zéro alarme stridente • Dignité préservée
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* SDB-ADHD Clinical Biphasic Attention Switcher */}
      <div className="bg-[#090e1c] border-2 border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h4 className="font-serif font-bold text-base text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              Bilan Clinique TDAH Biphasique (DSM-5-TR 314.01 / CIM-11 6A05.2)
            </h4>
            <p className="text-xs text-slate-400 font-sans">
              Validation par le test CPT-3 : l'inattention n'est pas un déficit capacitaire, mais une dissociation de 29 points T.
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-300 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800 font-semibold">
            Dissociation Clinique : 29 pts T
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#0f1422] border border-slate-800 space-y-2">
            <span className="text-xs font-mono text-rose-400 font-bold uppercase block">
              1. Phase Neutre / Vibe (Sous-stimulation) :
            </span>
            <ul className="text-xs font-mono text-slate-300 space-y-1">
              <li>• Hit Reaction Time : <strong>444.2 ms</strong></li>
              <li>• Taux d'Omissions : <strong>10.6%</strong></li>
              <li>• Variabilité (Hit RT SD) : <strong>116.4 ms</strong></li>
              <li>• Score T Inattention : <strong className="text-rose-400">T = 71 (Clinique)</strong></li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#0b1a20] border border-emerald-500/30 space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase block">
              2. Phase Hyperfocus Nickel (Haute Saillance) :
            </span>
            <ul className="text-xs font-mono text-slate-200 space-y-1">
              <li>• Hit Reaction Time : <strong>319.5 ms (-124.7 ms)</strong></li>
              <li>• Taux d'Omissions : <strong className="text-emerald-300">0.0% (-10.6 pp)</strong></li>
              <li>• Variabilité (Hit RT SD) : <strong>28.1 ms (-88.3 ms)</strong></li>
              <li>• Score T Inattention : <strong className="text-emerald-400">T = 40 (Optimal)</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
