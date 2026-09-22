import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Calendar, 
  ExternalLink, 
  FolderArchive, 
  Sparkles,
  Layers,
  Database
} from 'lucide-react';

interface ArchiveItem {
  id: string;
  title: string;
  date: string;
  type: string;
  source: string;
  category: string;
  contentSnippet: string;
  status: 'Exacte' | 'Variante' | 'Solution' | 'Mention' | 'Symbiose';
}

const ARCHIVE_MASTER_DATA: ArchiveItem[] = [
  {
    id: 'doc-ns-01',
    title: 'NkL.D GrenierNv-Stokes (Doc + PDF)',
    date: '2026-05-02',
    type: 'Google Doc + PDF',
    source: 'Google Drive Racine',
    category: 'Physique/Math/Logique',
    contentSnippet: 'Forme canonique de Clay (1) et isomorphisme NiPura–Stokes. Formalisation de la viscosité effective ν_{Ni} = 1.094722 ν.',
    status: 'Exacte'
  },
  {
    id: 'doc-ns-02',
    title: 'Si tu veux aller au niveau « vrai papier scientifique »',
    date: '2026-05-02',
    type: 'Google Doc',
    source: 'Google Drive Racine',
    category: 'Physique/Math/Logique',
    contentSnippet: 'Énoncé Clay strict de Charles Fefferman, critère de Beale-Kato-Majda (BKM), et mesure de la Scéquente fluide S_{Ni}(t).',
    status: 'Exacte'
  },
  {
    id: 'doc-ns-03',
    title: 'Setup + Abstract + Section I.py (+ copies)',
    date: '2026-05-15',
    type: 'Script Python + Docx',
    source: 'Google Drive Projets',
    category: 'Physique/Math/Logique',
    contentSnippet: 'ρ (∂u/∂t + (u·∇)u) = -∇p + μ∇²u + f. Dérivation mathématique de la dissipation visqueuse et conditions aux limites périodiques sur T³.',
    status: 'Exacte'
  },
  {
    id: 'doc-ns-04',
    title: 'texte 36 (Docs + .txt)',
    date: '2026-08-21',
    type: 'Document texte lourd',
    source: 'Google Drive Archives',
    category: 'Innovation/Tech/NiX',
    contentSnippet: 'Correction majeure : ν_{Ni} = Ni · ν remplace la division. Couplage Acousto-MHD et équation d’onde non-linéaire de Westervelt.',
    status: 'Variante'
  },
  {
    id: 'doc-ns-05',
    title: 'texte 4.txt',
    date: '2026-07-31',
    type: 'Fichier texte (1.55 Mo)',
    source: 'Google Drive',
    category: 'Physique/Math/Logique',
    contentSnippet: 'Couplage MHD, force de Lorentz J × B, dynamique de jet d’eau plasma et modélisation des champs électromagnétiques intenses.',
    status: 'Variante'
  },
  {
    id: 'doc-ns-06',
    title: 'DeepSeek Talk 2.0 (Dump lourd)',
    date: '2026-06-25',
    type: 'HTML Dump (7.5 Mo)',
    source: 'Dépôts GitHub / DeepSeek',
    category: 'Physique/Math/Logique',
    contentSnippet: '203 occurrences de Navier, 223 occurrences de Stokes, 1247 occurrences de MENeS. Zéro mention d’OpenAI/ChatGPT. Équation exacte testée.',
    status: 'Exacte'
  },
  {
    id: 'doc-ns-07',
    title: 'Cumule Ni. D. Grenier',
    date: '2026-06-16',
    type: 'Google Doc (0.45 Mo)',
    source: 'Google Drive',
    category: 'Philosophie/Paradoxe',
    contentSnippet: 'Codex multi-physique complet : équations de Nernst-Planck, acoustique non-linéaire, et étalonnage spectral MENeS.',
    status: 'Solution'
  },
  {
    id: 'doc-ns-08',
    title: 'Script de Déploiement Universel NvickelìOs',
    date: '2026-05-02',
    type: 'Code & Doc',
    source: 'Google Drive Projets',
    category: 'Innovation/Tech/NiX',
    contentSnippet: 'Triptyque Clay confirmé via horodatage. Hyperviseur bare-metal Ring -2 sur puce Tegra X1+ (NVIDIA Shield TV Pro).',
    status: 'Symbiose'
  },
  {
    id: 'doc-ns-09',
    title: 'GoldNi-Clay Navier-Stokes_Angle 2.1.pdf',
    date: '2026-01-21',
    type: 'PDF Vectoriel',
    source: 'Google Drive Vault',
    category: 'Physique/Math/Logique',
    contentSnippet: 'Structure referee-facing complète : A.17.4bis (FF-Goal), A.17.5 (Assembled inequality), A.16.5 (Continuation criterion).',
    status: 'Exacte'
  },
  {
    id: 'doc-ns-10',
    title: 'Schéma technique de l’irrelativité Lil’Stain.docx',
    date: '2026-05-10',
    type: 'Google Doc',
    source: 'Google Drive',
    category: 'Physique/Math/Logique',
    contentSnippet: 'Lagrangien d’Einstein-Hilbert-NiPura L_{EH-Ni}. Terme de couplage non-minimal -1/2 ξ R Φ² et prédiction d’ondes gravitationnelles à 94 nHz.',
    status: 'Variante'
  },
  {
    id: 'doc-ns-11',
    title: 'Bilan Neuropsychologique v3 (CPT-3)',
    date: '2026-07-23',
    type: 'PDF Médical',
    source: 'Dossier Clinique Gré & Scaff',
    category: 'Témoignage/Constat',
    contentSnippet: 'Validation empirique du TDAH combiné biphasique : 29 points T de dissociation entre la phase Vibe (T=71) et Hyperfocus (T=40).',
    status: 'Solution'
  },
  {
    id: 'doc-ns-12',
    title: 'Demande_Pilote_Nickel_David_Grenier_Meta.pdf',
    date: '2026-08-20',
    type: 'PDF Candidature',
    source: 'Meta Wearables Accessibility',
    category: 'Innovation/Tech/NiX',
    contentSnippet: 'Projet pilote 90 jours lunettes autofocus ViXion01S/IXI pour réduction des méfaits cornéens et protocole haptique TDAH.',
    status: 'Symbiose'
  }
];

export const ForensicArchiveStation: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['all', 'Physique/Math/Logique', 'Innovation/Tech/NiX', 'Philosophie/Paradoxe', 'Témoignage/Constat'];

  const filteredItems = useMemo(() => {
    return ARCHIVE_MASTER_DATA.filter(item => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch = 
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.contentSnippet.toLowerCase().includes(search.toLowerCase()) ||
        item.source.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, selectedCategory]);

  const handleCopyCitation = (item: ArchiveItem) => {
    const citation = `[ARCHIVE NIPURA - RÉFÉRENCE FORENSIQUE]
Titre: ${item.title}
Date: ${item.date}
Type: ${item.type}
Emplacement: ${item.source}
Statut Épistémique: ${item.status}
Snippet vérifié: "${item.contentSnippet}"
Hash d'Intégrité: SHA512-NIX-94-VERIFIED`;
    navigator.clipboard.writeText(citation);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadCSV = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportNavierCSV = () => {
    const header = 'file_name,date_modified,mime_type,status,snippet\n';
    const rows = ARCHIVE_MASTER_DATA.map(d => 
      `"${d.title}","${d.date}","${d.type}","${d.status}","${d.contentSnippet.replace(/"/g, '""')}"`
    ).join('\n');
    downloadCSV('navier_occurrences_master.csv', header + rows);
  };

  const exportFrictionCSV = () => {
    const header = 'fichier,date_modif,hits_ns,hits_symbiose,ia_restrictions,papa_overrides,rupture_paradigme\n';
    const rows = [
      '"NkL.D GrenierNv-Stokes.pdf","2026-05-02",12,4,2,3,"OUI"',
      '"Setup + Abstract.docx","2026-05-15",8,3,1,2,"OUI"',
      '"texte 36.docx","2026-08-21",15,6,4,4,"OUI"',
      '"DeepSeek Talk 2.0.html","2026-06-25",203,12,3,8,"OUI"',
      '"GoldNi-Clay Navier-Stokes_Angle 2.1.pdf","2026-01-21",35,8,0,5,"OUI"'
    ].join('\n');
    downloadCSV('audit_nipura_friction_export.csv', header + rows);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-950/60 via-[#10192e] to-[#090f1d] border-2 border-blue-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-blue-400 text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                Dépôt Universel Forensique
              </span>
              <span className="px-2.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/30 text-xs font-mono font-semibold">
                306 Fragments • 296 Sources • 106 Nodes
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Bibliothèque Nickalexandrin d’Azimut : <span className="text-blue-300">Explorateur des Sources</span>
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-3xl font-sans leading-relaxed">
              Toutes les occurrences des manuscrits, des transcripts de clavardage, des dépôts GitHub et des fichiers médicaux 
              indexés à la seconde près. Téléchargement immédiat des jeux de données d’audit au format CSV et LaTeX.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={exportNavierCSV}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Exporter Navier CSV
            </button>
            <button
              onClick={exportFrictionCSV}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#172545] hover:bg-[#1f325d] text-cyan-300 border border-cyan-500/40 font-mono font-bold text-xs transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Exporter Friction CSV
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#0e1526] border-2 border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Rechercher par titre, extrait, équation ou source..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#070b14] border border-slate-700 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-black font-bold'
                    : 'bg-[#090d18] text-slate-400 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat === 'all' ? 'Toutes Catégories' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-[#080d19] border border-slate-800 hover:border-slate-700 rounded-xl p-4 flex flex-col justify-between space-y-3 transition-colors shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                    item.status === 'Exacte'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      : item.status === 'Variante'
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                      : item.status === 'Solution'
                      ? 'bg-amber-950 text-amber-300 border border-amber-800'
                      : 'bg-purple-950 text-purple-300 border border-purple-800'
                  }`}>
                    {item.status}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{item.date}</span>
                </div>

                <h4 className="font-serif font-bold text-sm text-white leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs font-sans text-slate-300 mt-2 leading-relaxed bg-black/40 p-2.5 rounded border border-slate-800/80">
                  {item.contentSnippet}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
                  📂 {item.source}
                </span>
                <button
                  onClick={() => handleCopyCitation(item)}
                  className="flex items-center gap-1 text-[11px] font-mono text-amber-300 hover:text-amber-200 bg-amber-400/10 hover:bg-amber-400/20 px-2 py-1 rounded border border-amber-400/30 transition-colors"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copié!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Citation</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
