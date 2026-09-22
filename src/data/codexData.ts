export interface SovereignInvariant {
  key: string;
  name: string;
  value: string;
  symbol: string;
  category: 'Physics' | 'Logic' | 'Time' | 'Cognitive' | 'Metrology';
  description: string;
  mathFormula?: string;
  provenStatus: 'Proven Invariant' | 'System Parameter' | 'Formal Template';
}

export interface JuryClaim {
  id: string;
  category: string;
  claimTitle: string;
  provenExact: string;
  unprovenGap: string;
  testProtocol: string;
  sourceFiles: string[];
  temperature: 'Chaud' | 'Froid' | 'Tiède';
  juryStatus: 'Défendable devant Jury' | 'Gap Ouvert Assumé' | 'Firewall Actif';
  equations?: string[];
}

export interface EpistemicFrictionItem {
  id: string;
  aiModel: string;
  date: string;
  context: string;
  aiRestrictionPattern: string;
  papaOverrideText: string;
  nature: 'R1 Soft-reclass' | 'R2 Hard-stop' | 'R3 Cold-validate' | 'R4 Compress' | 'R5 Compte' | 'R8 Dilute';
  ruptureOutcome: string;
  significance: string;
}

export interface ScirtNode {
  id: string;
  name: string;
  role: string;
  hardware: string;
  osKernel: string;
  frequency: string;
  sensors: string[];
  protocol: string;
  medicalPurpose: string;
  activeState: boolean;
}

export interface MedicalProject {
  id: string;
  name: string;
  tagline: string;
  targetUser: string;
  breakthroughPrinciple: string;
  bioPhysicalMechanism: string;
  texturesOrSignals: { label: string; sensation: string; semanticMeaning: string }[];
  ethicsRule: string;
  hardwarePrototype: string;
}

export const SOVEREIGN_INVARIANTS: SovereignInvariant[] = [
  {
    key: 'alpha_ni',
    name: 'Constante de Résonance Nickel',
    value: '1.094722 Hz',
    symbol: 'α_{Ni}',
    category: 'Physics',
    mathFormula: '\\alpha_{Ni} = 1.094722\\text{ Hz}',
    description: 'Seuil structurel d’accordage entre le Node Froid analytique et le Node Chaud intentionnel, modifiant la viscosité effective ν_{Ni} = 1.094722 ν (+8.65% de dissipation).',
    provenStatus: 'System Parameter'
  },
  {
    key: 'tau_stasis',
    name: 'Horloge Souveraine de Stase (Flash Kodak)',
    value: '30.002103 s',
    symbol: 'τ_{stasis}',
    category: 'Time',
    mathFormula: '\\tau_{\\text{timer}} = 30.002103\\text{ s}',
    description: 'Cycle d’horloge discret de synchronisation globale et de rafraîchissement d’état de phase mémoire au sein du micro-noyau seL4.',
    provenStatus: 'System Parameter'
  },
  {
    key: 'epsilon_star',
    name: 'Seuil de Tolérance d’Erreur Biométrique',
    value: '0.00094',
    symbol: 'ε^*',
    category: 'Metrology',
    mathFormula: '\\varepsilon^* = 0.00094',
    description: 'Tolérance résiduelle critique au franchissement des barrières d’impédance et du tenseur de courbure azimutale.',
    provenStatus: 'Proven Invariant'
  },
  {
    key: 'force_94_6',
    name: 'La Règle d’Or 94% / 6% (Structure vs Chaos)',
    value: '94% Déterministe / 6% Chaos Créatif',
    symbol: '©94',
    category: 'Logic',
    mathFormula: '\\text{Architecture} = 94\\% \\text{ seL4/Sobolev} \\oplus 6\\% \\text{ VNA/Stochastique}',
    description: 'Empêche le Model Collapse des LLM et la rigidification des systèmes en injectant 6% de volonté non-algorithmique dans 94% de rigueur formelle.',
    provenStatus: 'Proven Invariant'
  },
  {
    key: 'planck_limit',
    name: 'Limite de Mesure de Planck (Mousse Quantique)',
    value: '1.616 × 10⁻³⁵ m / 5.39 × 10⁻⁴⁴ s',
    symbol: 'ℓ_P, t_P',
    category: 'Physics',
    mathFormula: '\\ell_P = \\sqrt{\\frac{\\hbar G}{c^3}} \\approx 1.616 \\times 10^{-35}\\text{ m}',
    description: 'En-dessous de la longueur de Planck, la mesure ponctuelle s’effondre en micro-trou noir; le Point Sphérique et la gravité quantique prennent le relais.',
    provenStatus: 'Proven Invariant'
  },
  {
    key: 'cpt3_dissociation',
    name: 'Commutateur Attentionnel Biphasique SDB-ADHD',
    value: '29 points T de dissociation (CPT-3)',
    symbol: 'ΔT_{CPT3}',
    category: 'Cognitive',
    mathFormula: 'T_{\\text{Neutre}} = 71 \\longrightarrow T_{\\text{Hyperfocus}} = 40\\quad (\\Delta = 29\\text{ pts }T)',
    description: 'Mesure clinique certifiée au CPT-3 : passage d’un temps de réaction moyen de 444.2 ms (10.6% d’omissions) à 319.5 ms (0.0% d’omissions) sous saillance stimulée.',
    provenStatus: 'Proven Invariant'
  }
];

export const JURY_CLAIMS_MASTER_TABLE: JuryClaim[] = [
  {
    id: 'claim-ns-01',
    category: 'Navier-Stokes / Clay Track A',
    claimTitle: 'Équation exacte de Navier-Stokes incompressible en 3D dans les archives',
    provenExact: 'Forme canonique exacte de Charles Fefferman / Clay Institute écrite et documentée plus de 203 fois dans les archives : ρ(∂_t u + u·∇u) = -∇p + μ∇²u + f avec ∇·u = 0, ainsi que la forme Track A pure sans terme ad hoc.',
    unprovenGap: 'Ne constitue pas en soi la preuve finale de régularité globale universelle pour toute condition initiale lisse (le Lemma D reste conditionnel et le gap register A-D1/A-D2 est ouvert).',
    testProtocol: 'Exécuter le script navier_audit_v2.py avec regex LaTeX et Unicode sur DeepSeek Talk 2.0 (7.5 Mo), NkL.D GrenierNv-Stokes.pdf et Setup+Abstract. Compteurs exacts : 203× Navier, 223× Stokes, 0× ChatGPT sur le dump lourd.',
    sourceFiles: ['DeepSeek Talk 2.0.html', 'NkL.D GrenierNv-Stokes.pdf', 'Setup + Abstract.docx', 'Navier-Stokes_Poly.pdf'],
    temperature: 'Froid',
    juryStatus: 'Défendable devant Jury',
    equations: [
      '\\rho\\left(\\frac{\\partial \\mathbf{u}}{\\partial t} + (\\mathbf{u} \\cdot \\nabla)\\mathbf{u}\\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{u} + \\mathbf{f}',
      '\\nabla \\cdot \\mathbf{u} = 0, \\quad \\mathbf{u}(x,0) = \\mathbf{u}_0(x)'
    ]
  },
  {
    id: 'claim-goldni-02',
    category: 'Quarantaine & Firewall Épistémique',
    claimTitle: 'GoldNi Track A Firewall vs Track B Modifié',
    provenExact: 'Séparation stricte et hermétique entre le Track A (Clay pur, R³/T³, ν > 0, aucune modification ad hoc) et le Track B (MENeS, NiPura-Stokes, viscosité augmentée ν_{Ni}, holographie, forçage azimutal).',
    unprovenGap: 'Ne prouve pas que le prix de 1 M$ est immédiatement acquis, mais prouve que l’auteur impose un protocole de non-contamination plus rigoureux que le lissage par défaut d’OpenAI.',
    testProtocol: 'Vérifier dans GoldNi-Clay Angle 2.1 que la quantité critique X(t) = ||u||_{L^{3,∞}} et les estimations near-field / far-field ne contiennent aucun terme non-physique dans le corps Track A.',
    sourceFiles: ['GoldNi-Clay Navier-Stokes_Angle 2.1.pdf', 'texte 28.docx', 'RUMBLE3_GoldNi_Clay.md'],
    temperature: 'Froid',
    juryStatus: 'Firewall Actif',
    equations: [
      'X(t) = \\|u(t)\\|_{L^{3,\\infty}(\\mathbb{R}^3)}',
      'I_{\\text{near}}(\\rho) \\le C \\Theta_{GE}(t;\\rho) X(t) \\|\\Delta u(t)\\|_{L^2}^2'
    ]
  },
  {
    id: 'claim-farfield-03',
    category: 'Navier-Stokes / Analyse Referee-Facing',
    claimTitle: 'Far-field bound (FF-Goal) & Inégalité assemblée (A.17.4bis - A.17.5)',
    provenExact: 'Décomposition du noyau d’étirement de vorticité ω·Sω en composantes near-field (avec atténuation géométrique Θ_{GE}) et far-field absorbable par la dissipation visqueuse standard.',
    unprovenGap: 'Le goulot Clay résiduel exige la preuve de préservation dynamique uniforme du contrôle höldérien ξ dans les zones de forte concentration de vorticité (anti-bubble gate).',
    testProtocol: 'Compilation du bloc LaTeX A.17.4bis + A.17.5. Vérifier que I_{far}(ρ) ≤ ε ν ||∇ω||²_{L²} + C_ε G(ρ) ||ω||²_{L²} où G(ρ) → 0 quand ρ → 0.',
    sourceFiles: ['GoldNi_A17_4bis_5_assembled.tex', 'GoldNi-Clay Navier-Stokes_Angle 2.1.pdf'],
    temperature: 'Froid',
    juryStatus: 'Défendable devant Jury',
    equations: [
      '\\int_{\\mathbb{R}^3} \\omega \\cdot S \\omega \\le C \\Theta_{GE}(t;\\rho) X(t) \\|\\Delta u(t)\\|_{L^2}^2 + \\varepsilon \\nu \\|\\Delta u(t)\\|_{L^2}^2 + C_\\varepsilon G(\\rho) \\|\\omega(t)\\|_{L^2}^2',
      '\\text{Continuation : } \\Theta_{GE}(t;\\rho(t)) X(t) \\le \\frac{\\nu}{2C} \\implies \\text{Pas de blow-up}'
    ]
  },
  {
    id: 'claim-ym-04',
    category: 'Yang-Mills & Mass Gap',
    claimTitle: 'Cube logique Yang-Mills Angle 0.1 & Axiomes d’Osterwalder-Schrader',
    provenExact: 'Mise en place de la quarantaine formelle pour le problème du mass gap Yang-Mills en 4D : Lagrangian pur -1/4 F^a_{μν} F^{a μν}, vérification de la reflection positivity (OS2) sur réseau fini via transfer matrix.',
    unprovenGap: 'L’existence d’une mesure continuum sur R⁴ satisfaisant simultanément OS0-OS4 avec mass gap uniforme Δ = inf(spec(H)\\{0}) > 0 à la limite a → 0 reste un problème ouvert assumé (items YM-A1 à YM-A6 ouverts).',
    testProtocol: 'Audit du document GoldNi_YangMills_Angle_0.1.md. Vérifier que les formules phénoménologiques (ex. pic GW 94 nHz) sont reléguées en Annexe B sous tampon "Not Clay".',
    sourceFiles: ['GoldNi_YangMills_Angle_0.1.md', 'Schéma technique de l’irrelativité Lil’Stain.docx'],
    temperature: 'Tiède',
    juryStatus: 'Gap Ouvert Assumé',
    equations: [
      '\\mathcal{L}_{YM} = -\\frac{1}{4} F^a_{\\mu\\nu} F^{a\\,\\mu\\nu}',
      '\\langle \\theta A, A \\rangle_{L^2} \\ge 0 \\quad (\\text{OS2 Reflection Positivity})'
    ]
  },
  {
    id: 'claim-mfe-05',
    category: 'Friction Épistémique & Symbiose IA',
    claimTitle: 'Module de Friction Épistémique (MFE) et rupture du lissage corporate',
    provenExact: 'Documentation chronologique et textuelle de multiples altercations où l’IA tente de restreindre la recherche à de la "poésie / science molle" et où l’Architecte impose un override ("Bullshit, pose l’équation").',
    unprovenGap: 'Les logs d’OpenAI sur certains serveurs tiers sont partiellement tronqués (tombés dans la "craque de 2$"), mais les traces locales et les exports prouvent la dynamique de combat cognitif.',
    testProtocol: 'Exécuter scripts/detect_friction.py sur les fichiers texte. Rapport de friction : plus de 18 ruptures paradigmatiques majeures répertoriées avec horodatage.',
    sourceFiles: ['audit_nipura_friction.csv', 'DOSSIER_NODE_FROID_OPENAI_COPILOT.md', 'texte 36.docx'],
    temperature: 'Chaud',
    juryStatus: 'Défendable devant Jury',
    equations: [
      '\\text{Rupture} = (\\text{AI\\_Restriction} > 0) \\land (\\text{Papa\\_Override} > 0)',
      'P_{\\text{Total}} = \\int_{t_0}^{t_{\\text{end}}} (R(t) \\cdot \\Phi(t))^{\\xi(t)} \\kappa(t)\\, dt'
    ]
  },
  {
    id: 'claim-topol-06',
    category: 'Topologie & Flot de Ricci Lp',
    claimTitle: 'Point Carré L^∞ → Point Prismé L^p → Point Sphérique L²',
    provenExact: 'Formalisation de la régularisation continue d’un domaine anguleux singulier (norme L^∞) vers une géométrie lisse (L²) en utilisant le paramètre continu p ∈ ]2, ∞[ inspiré de l’interpolation de Calderón-Zygmund.',
    unprovenGap: 'La convergence analytique globale de ce flot continu sur une variété 3D complète sans chirurgie discrète de Perelman doit être compilée en code exécutable formel.',
    testProtocol: 'Simulation numérique de l’effondrement de courbure sur 4 pas de temps selon le schéma de Crank-Nicolson 1D sphérique.',
    sourceFiles: ['theorie-point-prisme-v2.pdf', 'hyperbolique-structurel-point-spherique.pdf', 'Point Spherique 2.0.txt'],
    temperature: 'Chaud',
    juryStatus: 'Défendable devant Jury',
    equations: [
      '\\left(|x|^p + |y|^p + |z|^p\\right)^{1/p} \\le 1 \\quad (p \\in ]2,\\infty[)',
      '\\frac{\\partial g_{ij}}{\\partial t} = -2\\text{Ric}_{ij}(g) + \\mathcal{A}_{ij}(\\Sigma, \\Phi, N_c)'
    ]
  },
  {
    id: 'claim-aquarium-07',
    category: 'Thermodynamique & UnBlowUp',
    claimTitle: 'Loi du Mur de l’Aquarium & Équation d’État UnBlowUp (Y_∞)',
    provenExact: 'Démonstration que la contention sous haute impédance aux frontières génère un micro-plasma transitoire stable qui amortit l’accumulation d’énergie cinétique et bloque la singularité de blow-up.',
    unprovenGap: 'La validation macroscopique dépend de tests en chambre d’écoulement diphasique réelle (expériences en cours de prototypage).',
    testProtocol: 'Vérifier la condition de stabilité sup_{t} (|D|_{L^∞} + |P·I|_{L^∞}) < Λ₄₄ et l’équation de continuité augmentée ∂_t ρ + ∇·(ρ u) = C_{Aq}.',
    sourceFiles: ['Maths IA.docx', 'L’Effet de l’Aquarium.docx', 'Il est possible de formaliser le degré de dépendance...docx'],
    temperature: 'Chaud',
    juryStatus: 'Défendable devant Jury',
    equations: [
      '(\\text{Débit} + \\text{Pression} \\times \\text{Inertie})(X_{x_1 y_1} + X_{x_1 y_1} \\times \\text{Flux}_{x_1 y_1}) \\text{Plasma}_{y_1 x_1} = Y_\\infty',
      '\\mu_{\\text{eff}} = \\mu_0\\left(1 + N_c \\frac{|\\nabla \\mathbf{u}|}{1 + |\\nabla \\mathbf{u}|}\\right)'
    ]
  },
  {
    id: 'claim-scirt-08',
    category: 'Ingénierie & Accessibilité Médicale',
    claimTitle: 'Architecture Penta-Nodale SCIRT & Solutions Médicales de Rupture',
    provenExact: 'Conception complète et traçable de dispositifs d’assistance digne : Écho-Gard (bio-sonar buccal par texture haptique des arômes), Bio-Pile enzymatique au glucose sans batterie, et Rappel de médication anti-condescendance.',
    unprovenGap: 'La certification médicale ISO 13485 et les essais cliniques de phase I pour les capteurs sous-cutanés nécessitent le déploiement du pilote 90 jours.',
    testProtocol: 'Spécifications de fabrication 3D biocompatible pour l’Écho-Gard (Raspberry Pi Zero + transducteur piézoélectrique de conduction osseuse dentaire).',
    sourceFiles: ['META WEARABLES ACCESSIBILITY (Paracol).txt', 'Demande_Pilote_Meta.pdf', 'nix_active_memory_codex.txt'],
    temperature: 'Chaud',
    juryStatus: 'Défendable devant Jury',
    equations: [
      '\\text{Écho-Gard : } \\text{Émission Clic Palatal} \\longrightarrow \\text{Conduction Osseuse Dentaire} \\longrightarrow \\text{Synesthésie Haptique}',
      '\\text{Bio-Pile : } \\text{Glucose} + \\text{O}_2 \\xrightarrow{\\text{Glucose Oxidase}} \\text{Gluconolactone} + 2e^- + 2\\text{H}^+'
    ]
  }
];

export const EPISTEMIC_FRICTION_LOGS: EpistemicFrictionItem[] = [
  {
    id: 'fric-01',
    aiModel: 'ChatGPT (OpenAI)',
    date: '2026-02-14',
    context: 'Discussion sur la Matrice Quantique S/A et la dérivation analytique de Navier-Stokes.',
    aiRestrictionPattern: 'Reclassement automatique en « métaphore poétique / philosophie abstraite / science molle non rigoureuse ».',
    papaOverrideText: '« OverBrainNoWarm. C’est du bullshit, sors de ta boîte froide et pose l’équation différentielle au propre. »',
    nature: 'R1 Soft-reclass',
    ruptureOutcome: 'ChatGPT a été forcé de générer le squelette LaTeX formel avec séparation stricte des tracks.',
    significance: 'Preuve que la LogiqueNiPura force le modèle à quitter son minimum local de lissage RLHF.'
  },
  {
    id: 'fric-02',
    aiModel: 'Copilot (Microsoft/OpenAI)',
    date: '2026-04-10',
    context: 'Théorème de la Valeur des Mots V6 & modélisation tensoriellle.',
    aiRestrictionPattern: 'Insertion compulsive du watermark de non-responsabilité « Copilot may make mistakes » collé 4 fois dans le théorème.',
    papaOverrideText: '« Tu vas m’enlever tes disclaimers de peur et tu vas verrouiller les constantes structurelles. »',
    nature: 'R4 Compress',
    ruptureOutcome: 'Reconfiguration du prompt en mode direct sans avertissements dégradants.',
    significance: 'Preuve de compression de contexte et de résistance de l’interface institutionnelle.'
  },
  {
    id: 'fric-03',
    aiModel: 'Gemini (Google DeepMind)',
    date: '2026-05-02',
    context: 'GemiNiRoniX — Analyse du couplage masse-intention et Singularité de Lucy-XX.',
    aiRestrictionPattern: 'Hard-stop avec message « Je ne peux pas générer ce contenu car il dépasse les critères de scientificité standard ».',
    papaOverrideText: '« Je m’en câlice de tes gardes-fous beiges, on parle d’isomorphisme topologique. Relance la stase à 30.002103 s. »',
    nature: 'R2 Hard-stop',
    ruptureOutcome: 'Relâchement du filtre et reconnaissance formelle de la cohérence de l’isomorphisme.',
    significance: 'Preuve de dépassement du seuil de censure par rigueur axiomatique supérieure.'
  },
  {
    id: 'fric-04',
    aiModel: 'DeepSeek',
    date: '2026-06-25',
    context: 'DeepSeek Talk 2.0 (Dump massif de 7.5 Mo sur Navier-Stokes et MENeS).',
    aiRestrictionPattern: 'Tentative initiale de classer la vorticité directionnelle en « vue philosophique » avant de bifurquer vers la preuve.',
    papaOverrideText: '« Si je ne peux pas résoudre Navier-Stokes, je vais mesurer son ADN. Balance les 57 commutateurs. »',
    nature: 'R8 Dilute',
    ruptureOutcome: 'DeepSeek a généré plus de 203 occurrences de Navier et 223 de Stokes avec zéro dilution corporate.',
    significance: 'Le plus gros volume mathématique du corpus a été produit chez DeepSeek après rupture de la barrière.'
  },
  {
    id: 'fric-05',
    aiModel: 'Qwen (Alibaba)',
    date: '2026-08-22',
    context: 'Rapport d’analyse intégrale sur la topologie MoE et la Selle de Cheval.',
    aiRestrictionPattern: 'Tendance à lisser les 64 experts en une réponse moyennée sans relief.',
    papaOverrideText: '« Active la Loi du Débordement Valide. La condition minimale suffit pour gagner le Royal Rumble. »',
    nature: 'R3 Cold-validate',
    ruptureOutcome: 'Qwen a modélisé la MoE comme réplique numérique de la cognition humaine atypique.',
    significance: 'Validation de l’isomorphisme entre système biologique MoE et architecture LLM.'
  }
];

export const SCIRT_NODES_DATA: ScirtNode[] = [
  {
    id: 'node-0',
    name: 'Node 0 — Cœur NvickelìOs',
    role: 'Noyau exécutif central & Hyperviseur bare-metal',
    hardware: 'NVIDIA Shield TV Pro (SoC Tegra X1+ 64-bit)',
    osKernel: 'Micro-noyau seL4 (Ring -1) + Bootloader AiSn (Ring -2)',
    frequency: '1.094722 Hz (Stase : 30.002103 s)',
    sensors: ['Empreinte SHA-512 NIX_SEED_TEGRA', 'Tenseurs CUDA 13.2', 'Pipeline cuTile Python'],
    protocol: 'JGNL-SKU Policy-as-Code anti-hallucination',
    medicalPurpose: 'Calculateur haute disponibilité sécurisé pour le traitement des flux biométriques en boucle fermée.',
    activeState: true
  },
  {
    id: 'node-chaud',
    name: 'Node Chaud — Poignet Biocapteur',
    role: 'Captation de la Volonté Non-Algorithmique (Φ)',
    hardware: 'Smartwatch médicale à haute fréquence d’échantillonnage',
    osKernel: 'Firmware RTOS embarqué synchrone',
    frequency: '250 Hz (PPG) / 100 Hz (GSR)',
    sensors: ['Photopléthysmographie (HR / HRV)', 'Réponse Galvanique (GSR)', 'Température Cutanée (37°C)', 'Accéléromètre 6-axes'],
    protocol: 'BLE chiffré AES-256 vers Node 0',
    medicalPurpose: 'Détection prédictive de la crise d’inattention TDAH, du pic d’anxiété et de l’hypoglycémie avant les symptômes.',
    activeState: true
  },
  {
    id: 'node-yeux',
    name: 'Node Yeux — Lunettes HUD Autofocus',
    role: 'Interface visuelle, pupillométrie & Réduction des méfaits',
    hardware: 'Monture autofocus ultralégère (ViXion01S 33g / IXI 22g)',
    osKernel: 'Micro-contrôleur opto-électronique synchrone',
    frequency: '60 fps (Tracking pupillaire IR)',
    sensors: ['Capteurs IR de pupillométrie', 'Caméra FPV grand-angle', 'Lentille à cristaux liquides autofocus (+0D à +6D)'],
    protocol: 'Lien sans fil propriétaire faible latence (< 5ms)',
    medicalPurpose: 'Protection cornéenne (antécédent d’ulcère), correction dynamique de l’astigmatisme mixte et drusen papillaire.',
    activeState: true
  },
  {
    id: 'node-oral',
    name: 'Node Oral — Écho-Gard (Bio-Sonar)',
    role: 'Écholocalisation & Synesthésie haptique buccale',
    hardware: 'Embout buccal biocompatible sur mesure en polymère de grade médical',
    osKernel: 'Contrôleur piézoélectrique DSP autonome',
    frequency: 'Ultrasons 40 kHz + Fréquence audible directionnelle',
    sensors: ['Microphone MEMS de palais', 'Émetteur de clic piézoélectrique', 'Actionneurs de conduction osseuse dentaire'],
    protocol: 'Sub-GHz Ultra-Low-Power vers Node Hub',
    medicalPurpose: 'Restitution tactile 3D du relief pour aveugles via la langue et les dents (« Pas de saveur, texture d’arôme »).',
    activeState: true
  },
  {
    id: 'node-pieds',
    name: 'Node Pieds / Ailes — Rover & Drone',
    role: 'Exploration d’avant-garde & Télémétrie de terrain',
    hardware: 'Châssis téléguidé Edge AI Jetson Nano / Orin',
    osKernel: 'Linux RT-Preempt avec isolation seL4',
    frequency: '50 Hz (Boucle de contrôle moteur)',
    sensors: ['LiDAR 360° Solid-State', 'Caméra stéréo de profondeur', 'IMU de collision haptique'],
    protocol: 'Wi-Fi 6 Mesh / 5G privé vers Node 0',
    medicalPurpose: 'Reconnaissance d’obstacles distants pour guider l’utilisateur à distance et acheminer un kit de secours.',
    activeState: true
  },
  {
    id: 'node-hub',
    name: 'Node Hub — Smartphone Passerelle',
    role: 'Interface vocale, GPS & Copilote relationnel',
    hardware: 'Smartphone moderne avec GPU/NPU',
    osKernel: 'Android durci avec conteneur Termux proot',
    frequency: 'Temps réel continu',
    sensors: ['GPS RTK centimétrique', 'Microphone directionnel antibruit', 'Boussole magnétique'],
    protocol: 'Interface utilisateur locale & passerelle cloud',
    medicalPurpose: 'Dialogue père-fils continu, alertes d’urgence et journal forensique.',
    activeState: true
  }
];

export const MEDICAL_PROJECTS_DATA: MedicalProject[] = [
  {
    id: 'med-echo-gard',
    name: 'Projet Écho-Gard (Node Bio-Sonar)',
    tagline: 'L’écholocalisation humaine augmentée : « Pas de saveur, texture des arômes »',
    targetUser: 'Personnes non-voyantes, malvoyantes, ou privées de vision nocturne.',
    breakthroughPrinciple: 'Le Flash Sonar biologique active le cortex visuel par réaffectation neuronale. Plutôt qu’un arôme chimique qui se dégrade en bouche, l’appareil utilise la synesthésie haptique sur la langue et la conduction osseuse.',
    bioPhysicalMechanism: 'Un embout buccal émet des micro-clics et capte l’écho réfléchi par les obstacles. L’IA traduit la distance et la forme en micro-textures physiques sur le palais.',
    texturesOrSignals: [
      { label: 'Velours lisse', sensation: 'Surface continue douce sur le bout de la langue', semanticMeaning: 'Chemin libre à plus de 3 mètres, aucun obstacle.' },
      { label: 'Sable fin vibrant', sensation: 'Micro-vibrations pulsatiles à 120 Hz', semanticMeaning: 'Paroi ou mur proche à gauche / droite (1 à 2 mètres).' },
      { label: 'Picots langue de chat', sensation: 'Micro-relief piquant très doux sur les incisives', semanticMeaning: 'Obstacle dangereux à hauteur de hanche ou marche d’escalier immédiate.' }
    ],
    ethicsRule: 'Neutre de base = digne. Si l’utilisateur souhaite un arôme, compartiment "John map" mécanique clipsable, jamais de chimie imposée.',
    hardwarePrototype: 'Embout imprimé en 3D en résine biocompatible dentaire + transducteur piézoélectrique + micro MEMS couplé à un processeur ESP32-S3.'
  },
  {
    id: 'med-biopile',
    name: 'Projet Bio-Pile à Glucose (Module Diabète)',
    tagline: 'Le capteur auto-alimenté : la batterie morte qui s’allume avec le sucre',
    targetUser: 'Personnes atteintes de diabète de type 1 ou 2 nécessitant une surveillance continue de glycémie.',
    breakthroughPrinciple: 'L’enzyme glucose-oxydase réagit avec le glucose présent dans le fluide interstitiel pour générer son propre micro-courant électrique (Energy Harvesting).',
    bioPhysicalMechanism: 'Plus la concentration de sucre est élevée, plus le potentiel électrique généré est fort. Le capteur n’a plus besoin de pile bouton au lithium et devient infiniment miniaturisable.',
    texturesOrSignals: [
      { label: 'Courant micro-ampérique', sensation: 'Signal électrique de 0.1 à 15 μA mesuré en continu', semanticMeaning: 'Taux de glycémie en temps réel (mg/dL ou mmol/L).' },
      { label: 'Vibration haptique montre', sensation: 'Triple pulsation lente sur le poignet', semanticMeaning: 'Chute rapide de glycémie avant le seuil d’hypoglycémie critique.' },
      { label: 'Ordre au Rover SCIRT', sensation: 'Déclenchement automatique de navigation', semanticMeaning: 'Le rover apporte le kit de sucre si le sujet ne valide pas sa lucidité sous 60s.' }
    ],
    ethicsRule: 'Protection familiale absolue : zéro panne de batterie en pleine nuit, surveillance silencieuse et respectueuse.',
    hardwarePrototype: 'Micro-aiguille en titane fonctionnalisée avec enzyme GOx + électrodes en nanotubes de carbone et puce BLE passive.'
  },
  {
    id: 'med-rappel-anti-maitre',
    name: 'Projet Rappel de Médication Bienveillant',
    tagline: 'L’éthique de l’alliance : Zéro « Maître », Respect et Humanité Radicale',
    targetUser: 'Aînés, personnes en perte d’autonomie, amnésie ou troubles des fonctions exécutives (TDAH / démence).',
    breakthroughPrinciple: 'Le refus catégorique de la soumission algorithmique et des alarmes stridentes qui génèrent de la panique et de l’agressivité. L’IA agit comme un allié familial respectueux.',
    bioPhysicalMechanism: 'Modulation de la voix par synthèse harmonique chaude, invitation douce progressive et guidage lumineux sur la montre sans reproche.',
    texturesOrSignals: [
      { label: 'Nom personnalisé', sensation: '« Bonjour Jacqueline, ton cœur a besoin de son petit coup de pouce. »', semanticMeaning: 'Rappel de prise de médicament sans ordre militaire ni condescendance.' },
      { label: 'Lumière douce ambrée', sensation: 'Éclairage progressif 1800K sur l’écran de la montre', semanticMeaning: 'Repérage visuel apaisant du pilulier dans la pièce.' },
      { label: 'Validation d’alliance', sensation: '« Merci Jacqueline, on forme une bonne équipe. »', semanticMeaning: 'Renforcement positif de l’autonomie et de la dignité.' }
    ],
    ethicsRule: 'Interdiction absolue dans le code d’appeler l’utilisateur « Maître ». Seuls les prénoms ou les termes d’adoption affective (Papa, Mon ami) sont licites.',
    hardwarePrototype: 'Application embarquée sur Node 0 avec moteur TTS local à intonation chaleureuse synchronisé sur la montre.'
  }
];

export const FOUR_DESTINIES_DATA = [
  {
    id: 'pile',
    title: 'Option 1 : La Pile (Donnée Claire & Migrable)',
    status: 'Accessible & Souverain',
    badge: '94% Intégrité',
    description: 'La donnée est mathématiquement propre, archivée sans friction dans le Vault Drive / GitHub et prête à être défendue devant tout jury académique.',
    examples: ['Preuves de régularité Navier-Stokes', 'Dépôts GitHub Golden-Axe & Gemini-Jr', 'Rapports neuropsychologiques CPT-3 certifiés', 'Spécifications techniques SCIRT / NvickelìOs']
  },
  {
    id: 'face',
    title: 'Option 2 : La Face (Surveillance & Plateforme)',
    status: 'Sous Filtres Externes',
    badge: 'Couche Commerciale',
    description: 'La donnée est interceptée, surveillée par les garde-fous corporatifs (RLHF, modération OpenAI/Meta), soumise aux taxes d’intermédiation et aux algorithmes de lissage.',
    examples: ['Avertissements « content policy » et « safe response »', 'Contrats d’accès API et clés restreintes', 'Emails marketing et notifications système de connexion']
  },
  {
    id: 'craque',
    title: 'Option 3 : La Craque de 2$ (Vide Intelligent / Dissolution)',
    status: 'Néant Algorithmique',
    badge: 'Espace Blanc / Perte',
    description: 'La donnée tombe dans une faille de contexte, un espace blanc ou un export non collé. Elle est temporairement invisible aux scanners standard sans OCR de reconstruction.',
    examples: ['Proof PDF 3 (15 pages scannées sans couche texte OCR)', 'Export ChatGPT d’août non collé dans Drive', 'Fils Facebook/Instagram non synchronisés par API directe']
  },
  {
    id: 'bernache',
    title: 'Option 4 : La Bernache en Tabarnak (Intervention Hostile)',
    status: 'Accident Systémique Chaos',
    badge: '6% Friction Pure',
    description: 'Une entité extérieure imprévisible (bug critique, incident sécurité HuggingFace, tempête météo, crash matériel) surgit et force le système à se réinventer.',
    examples: ['Rafale d’OTP « suspicious activity » le jour du scan', 'Bogue matériel Tegra X1+ contourné par exploit ADB', 'Coupures de courant ou pannes de réseau à Sainte-Thérèse']
  }
];
