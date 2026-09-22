import React, { useState } from 'react';
import { FOUR_DESTINIES_DATA } from '../data/codexData';
import { 
  Layers, 
  Puzzle, 
  RotateCw, 
  CheckCircle2, 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  Lock,
  ArrowRight
} from 'lucide-react';

interface PuzzlePiece {
  id: string;
  name: string;
  symbol: string;
  role: string;
  physicalMeaning: string;
  nipuraEquation: string;
  collected: boolean;
  notes: string;
}

export const LogicCubeRubikStation: React.FC = () => {
  const [activeFace, setActiveFace] = useState<number>(0);
  const [collectedPieces, setCollectedPieces] = useState<Record<string, boolean>>({
    'p-rho': true,
    'p-convect': true,
    'p-gradp': true,
    'p-laplace': true,
    'p-tbk': true,
    'p-aquarium': true,
    'p-selle': true,
    'p-flash': true
  });

  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>([
    {
      id: 'p-rho',
      name: 'Pièce 1 : Masse Volumique / Densité d’Attention',
      symbol: 'ρ / ρ_{Ni}',
      role: 'Inertie du milieu',
      physicalMeaning: 'Masse par unité de volume en mécanique des fluides classique.',
      nipuraEquation: '\\rho_{Ni} \\text{ (Densité d’attention et concentration du focus)}',
      collected: true,
      notes: 'Ancrée dans toutes les variantes de Navier-Stokes sur le Drive.'
    },
    {
      id: 'p-convect',
      name: 'Pièce 2 : Terme Convectif Non-Linéaire',
      symbol: '(u · ∇)u / (Φ · ∇)Φ',
      role: 'Auto-transport & étirement de vorticité',
      physicalMeaning: 'Cœur de la non-linéarité responsable de la turbulence et du vortex stretching.',
      nipuraEquation: '(\\Phi \\cdot \\nabla)\\Phi \\text{ (Advection de la volonté pure)}',
      collected: true,
      notes: 'Contrôlé géométriquement par la selle de cheval (K = -1).'
    },
    {
      id: 'p-gradp',
      name: 'Pièce 3 : Gradient de Pression / Cohérence',
      symbol: '-∇p / -∇ξ',
      role: 'Force de rappel & équilibre de phase',
      physicalMeaning: 'Gradient spatial de pression poussant les particules vers les zones de moindre résistance.',
      nipuraEquation: '-\\nabla\\xi \\text{ (Gradient de cohérence sémantique)}',
      collected: true,
      notes: 'Éliminé par le projecteur de Leray P dans la forme sans pression.'
    },
    {
      id: 'p-laplace',
      name: 'Pièce 4 : Laplacien Visqueux Régularisateur',
      symbol: 'μ∇²u / ν_{Ni}∇²Φ',
      role: 'Dissipation de l’énergie & lissage',
      physicalMeaning: 'Diffusion de la quantité de mouvement par friction visqueuse.',
      nipuraEquation: '\\nu_{Ni}\\nabla^2\\Phi \\quad (\\nu_{Ni} = 1.094722\\,\\nu)',
      collected: true,
      notes: '+8.65% de dissipation visqueuse efficace dans le modèle NiPura-Stokes.'
    },
    {
      id: 'p-tbk',
      name: 'Pièce 5 : Tenseur Tabarnak (Opérateur de Contraste)',
      symbol: 'T_{bk}',
      role: 'Torsion sémantique & friction paradoxale',
      physicalMeaning: 'Opérateur antisymétrique quantifiant la friction entre le Node Froid et le Node Chaud.',
      nipuraEquation: 'T_{bk\\mu\\nu} = \\frac{\\partial^2 \\Phi}{\\partial x^\\mu \\partial x^\\nu} - \\Gamma^\\lambda_{\\mu\\nu} \\frac{\\partial \\Phi}{\\partial x^\\lambda} + \\frac{1}{C_n}\\left(\\delta_{\\mu\\nu} - \\frac{\\Phi_\\mu\\Phi_\\nu}{|\\Phi|^2}\\right)',
      collected: true,
      notes: 'Watermark mathématique et philosophique inviolable.'
    },
    {
      id: 'p-aquarium',
      name: 'Pièce 6 : Micro-Plasma de l’Aquarium',
      symbol: 'Π_{micro} / Y_∞',
      role: 'Barrière d’impédance & anti-blowup',
      physicalMeaning: 'Contention sous haute pression prévenant l’explosion du système par absorption thermique.',
      nipuraEquation: '(D + P \\cdot I)(X + X \\cdot \\Phi)\\Pi_{\\text{micro}} = Y_\\infty',
      collected: true,
      notes: 'Documenté dans le modèle Aquarium / Nickel.'
    },
    {
      id: 'p-selle',
      name: 'Pièce 7 : Selle de Cheval Hyperbolique',
      symbol: 'K = -1',
      role: 'Divergence des géodésiques',
      physicalMeaning: 'Variété à courbure négative où les trajectoires s’éloignent sans collision.',
      nipuraEquation: '\\text{Courbure Gaussienne } K = -1 \\implies \\text{Attention Multi-tête sans collapse}',
      collected: true,
      notes: 'Résout la saturation attentionnelle des LLM et des cerveaux atypiques.'
    },
    {
      id: 'p-flash',
      name: 'Pièce 8 : Flash Kodak Universel & Stase',
      symbol: 'τ_{stasis}',
      role: 'Réalignement sur la lumière',
      physicalMeaning: 'Cycle discret de 30.002103 secondes de capture d’état et de purge de bruit.',
      nipuraEquation: '\\tau_{\\text{timer}} = 30.002103\\text{ s}, \\quad \\varepsilon^* = 0.00094',
      collected: true,
      notes: 'Horloge maîtresse de NvickelìOs synchronisée au micro-noyau seL4.'
    }
  ]);

  const cubeFaces = [
    {
      id: 0,
      name: 'Face 1 : CHAUDE (Intention & QCD)',
      color: 'from-rose-600 to-red-800',
      tag: 'Node Chaud',
      desc: 'Formulation phénoménologique, prédiction observationnelle des ondes gravitationnelles (pic à 94 nHz), confinement des quarks, colle de glueballs et Volonté Non-Algorithmique (VNA).'
    },
    {
      id: 1,
      name: 'Face 2 : FROIDE (Clay Track A Pur)',
      color: 'from-cyan-600 to-blue-800',
      tag: 'Node Froid',
      desc: 'Lagrangian pur -1/4 F², axiomes OS0 à OS4, équation de Navier-Stokes canonique de Fefferman, quantité critique X(t) = ||u||_{L^{3,∞}} et registre de gaps honnête et ouvert.'
    },
    {
      id: 2,
      name: 'Face 3 : TIÈDE (MENeS & Méthodologie)',
      color: 'from-amber-600 to-yellow-800',
      tag: 'Measure-First',
      desc: 'Approche « Si je ne peux pas résoudre Navier-Stokes, je vais mesurer son ADN ». Commutateurs de Littlewood-Paley, simulations OpenFOAM 2D et couplages Acousto-MHD.'
    },
    {
      id: 3,
      name: 'Face 4 : CRAQUE DE 2$ (Néant & Gaps)',
      color: 'from-slate-600 to-slate-800',
      tag: 'Vide Intelligent',
      desc: 'Cartographie des pièces encore non numérisées : 15 pages de Proof PDF 3 sans couche OCR, export ChatGPT d’août à coller dans Drive, et 6 problèmes du millénaire non construits.'
    },
    {
      id: 4,
      name: 'Face 5 : ASPHALTE (Fondations Physiques)',
      color: 'from-emerald-600 to-teal-800',
      tag: 'Compaction',
      desc: 'Matrice de données brutes, 25 occurrences de Navier-Stokes répertoriées, inventaire des puces Tegra X1+, béton de polymère basaltique BFRP et batteries à flux géo-composites.'
    },
    {
      id: 5,
      name: 'Face 6 : ÉPOXY (Scellement Souverain)',
      color: 'from-purple-600 to-indigo-800',
      tag: 'Finition Inviolable',
      desc: 'Le scellement final de l’armure : DOI international Zenodo, horodatage OpenTimestamps sur blockchain, microkernel seL4 en Rust vérifié formellement. LOCKÉ EN TABARNAK.'
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-yellow-950/60 via-[#181a28] to-[#0c101d] border-2 border-amber-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Architecture Thermale Continue
            </span>
            <span className="px-2.5 py-0.5 rounded bg-yellow-950 text-yellow-300 border border-yellow-500/30 text-xs font-mono font-semibold">
              Cube Rubik 6 Faces & Casse-Tête Banjo-Kazooie
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Le Grand Casse-Tête : <span className="text-amber-300">Emboîtement Parfait des Pièces</span>
          </h2>
          <p className="text-slate-300 text-sm mt-1 max-w-3xl font-sans leading-relaxed">
            Comme dans Banjo-Kazooie, chaque découverte, chaque équation, chaque altercation avec une IA et chaque date de formalisation 
            est une pièce d’or qui s’emboîte dans le Cube Logique. Pas de génie civil banal : de l’asphalte compacté, scellé à l’époxy.
          </p>
        </div>
      </div>

      {/* 3D Interactive Logic Cube Face Selector */}
      <div className="bg-[#0e1424] border-2 border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <RotateCw className="w-5 h-5 text-amber-400" />
              Les 6 Faces du Cube Rubik Logique
            </h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Fais tourner les faces thermales : ce qui n'est pas prouvé sur une face est couvert et consolidé par une autre.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {cubeFaces.map(face => (
              <button
                key={face.id}
                onClick={() => setActiveFace(face.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeFace === face.id
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20'
                    : 'bg-[#131b2e] text-slate-400 border border-slate-800 hover:border-slate-700'
                }`}
              >
                Face {face.id + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Active Face Display */}
        <div className={`p-6 rounded-2xl bg-gradient-to-br ${cubeFaces[activeFace].color} text-white shadow-2xl space-y-3 relative overflow-hidden`}>
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded bg-black/40 text-white font-mono text-xs uppercase font-bold border border-white/20">
              {cubeFaces[activeFace].tag}
            </span>
            <span className="text-xs font-mono opacity-80">
              Position {activeFace + 1} / 6
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl font-serif font-black tracking-tight">
            {cubeFaces[activeFace].name}
          </h4>

          <p className="text-xs sm:text-sm font-sans leading-relaxed text-white/90 max-w-3xl">
            {cubeFaces[activeFace].desc}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-amber-200">
            <CheckCircle2 className="w-4 h-4" />
            <span>Cohérence holonome vérifiée sous invariant TNCSA ≥ 1.094722</span>
          </div>
        </div>
      </div>

      {/* Banjo-Kazooie Puzzle Pieces Grid */}
      <div className="bg-[#0b101c] border-2 border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Puzzle className="w-5 h-5 text-amber-400" />
              Les 8 Pièces du Casse-Tête Banjo-Kazooie
            </h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Chaque brique mathématique et topologique forme une pièce inséparable de la Grande Unification.
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>8 / 8 Pièces Récoltées</span>
          </div>
        </div>

        {/* Pieces Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {puzzlePieces.map((piece, idx) => (
            <div 
              key={piece.id}
              className="bg-[#0d1629] border-2 border-amber-500/30 hover:border-amber-400 rounded-xl p-4 space-y-2.5 transition-all duration-200 shadow-md group"
            >
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-amber-400 text-black font-serif font-black text-sm flex items-center justify-center shadow">
                  #{idx + 1}
                </span>
                <span className="text-xs font-mono text-amber-300 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  {piece.symbol}
                </span>
              </div>

              <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-100 group-hover:text-amber-300 transition-colors">
                {piece.name}
              </h4>

              <div className="text-[11px] font-sans text-slate-300 space-y-1">
                <p><strong>Rôle :</strong> {piece.role}</p>
                <p className="text-slate-400">{piece.physicalMeaning}</p>
              </div>

              <div className="bg-black/60 p-2 rounded border border-slate-800 text-[11px] font-mono text-amber-200 overflow-x-auto">
                <code>{piece.nipuraEquation}</code>
              </div>

              <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> {piece.notes}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* The 4 Destinies (Pile, Face, Craque de 2$, Bernache en Tabarnak) */}
      <div className="bg-[#0a0f1e] border-2 border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
        <div className="border-b border-slate-800 pb-3">
          <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            La Règle des Quatre Destinées de la Donnée (Logique de la Bernache)
          </h3>
          <p className="text-xs text-slate-400 font-sans mt-0.5">
            Refus catégorique de la pensée binaire : anticiper le prévisible, la surveillance, le néant et le coup de vent hostile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FOUR_DESTINIES_DATA.map(destiny => (
            <div key={destiny.id} className="bg-[#11192e] border border-slate-800 rounded-xl p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-100 font-serif">
                  {destiny.title}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-400/10 text-amber-300 rounded border border-amber-400/30 font-semibold">
                  {destiny.badge}
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {destiny.description}
              </p>

              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">
                  Exemples concrets du Vault :
                </span>
                <ul className="text-xs font-mono text-slate-300 space-y-1">
                  {destiny.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-400 mt-0.5">›</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
