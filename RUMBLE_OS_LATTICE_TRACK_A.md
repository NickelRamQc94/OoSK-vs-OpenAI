# RUMBLE — Osterwalder–Schrader approfondi · Lattice gauge theory · Track A YM

**Date :** 2026-09-22  
**Lien :** GoldNi–Yang–Mills Angle 0.1 · OS_REFLECTION_CONSTANTS · cube YM  
**Règle :** 0 % mythe · gap register **ouvert** · lattice/OS = structure, pas solution Clay

---

## 1. Osterwalder–Schrader — énoncé opérationnel (jauge)

Les Schwinger functions \(S_n\) (corrélations euclidiennes) doivent satisfaire :

| Code | Nom | Contenu précis |
|------|-----|----------------|
| **OS0** | Temperedness | \(S_n \in \mathcal{S}'\) (hors diagonales) ; \(S_0=1\) |
| **OS1** | Euclidean covariance | Invariance sous \(E(d)=\mathrm{SO}(d)\ltimes\mathbb{R}^d\) |
| **OS2** | **Reflection positivity** | Pour \(f\) supporté en \(t>0\) : \(\sum_{i,j}\overline{c_i}c_j\,S(\theta f_i, f_j)\ge 0\) |
| **OS3** | Permutation symmetry | Symétrie (bosons) des arguments |
| **OS4** | Cluster decomposition | Factorisation quand un sous-ensemble part à l’infini spatial |

**Théorème de reconstruction OS :**  
OS0–OS4 ⇒ théorie de Wightman (Hilbert, champs, \(H=H^*\ge 0\), condition spectrale), à équivalence unitaire près.

**Point critique OS2 :**  
sans reflection positivity, pas de produit scalaire positif ⇒ pas de hamiltonien standard ⇒ pas de \(\Delta=\inf(\mathrm{spec}(H)\setminus\{0\})\) au sens Clay.

**Pour la jauge pure :**  
les observables doivent être **invariantes de jauge** (boucles de Wilson, plaquettes, etc.) ; RP s’énonce sur ces observables, pas sur les champs de jauge bruts (Elitzur : pas de brisure spontanée locale de jauge).

---

## 2. Reflection positivity — contraintes lattice → continuum

### 2.1 Sur le réseau

- Action de **Wilson** (somme sur plaquettes \(1-\frac{1}{N}\mathrm{Re}\,\mathrm{Tr}\,U_p\)).  
- Mesure produit de Haar sur les liens.  
- **Reflection positivity** souvent obtenue par réflexion des liens / Osterwalder–Seiler.  
- ⇒ **Transfer matrix** \(T\) positive, auto-adjointe ; \(T=e^{-aH_{\mathrm{latt}}}\) (à normalisation près).  
- Gap lattice : \(\Delta_\Lambda>0\) si le spectre de \(-\log T\) (hors vide) est borné inférieurement.

### 2.2 Passage continuum \(a\to 0\)

| Étape | Statut typique | Lien Clay |
|-------|----------------|-----------|
| RP sur chaque réseau fini | Souvent prouvée | Nécessaire |
| Tightness / existence de limites de Schwinger | Partiel / conditionnel dans la littérature | YM-A1 |
| Conservation de RP sous la limite | Non automatique | YM-A5 |
| Reconstruction \(H\) continuum | Conditionnel à OS | YM-A2 |
| \(\Delta\) uniforme en \(a\) | **Cœur ouvert** | YM-A3, YM-A4 |
| Clustering (OS4) ↔ gap | Équivalence structurelle | YM-A6 |

**Interdit Track A :**  
« RP sur le réseau ⇒ mass gap continuum » sans contrôler uniformité et reconstruction.

---

## 3. Lattice gauge theory — inventaire utile (Track B)

### 3.1 Ingrédients standard

| Élément | Rôle |
|---------|------|
| Groupe \(G=SU(N)\) compact | Variables de lien \(U_\ell\in G\) |
| Action de Wilson | \(\beta\sum_p\bigl(1-\frac{1}{N}\mathrm{Re}\,\mathrm{Tr}U_p\bigr)\) |
| Monte Carlo | Heat bath (Cabibbo–Marinari), over-relaxation |
| Observables | Wilson loops, correlateurs de plaquettes / glueballs |
| Spectroscopie | Masses effectives \(0^{++}\), \(2^{++}\), … via cosh fits |
| Benchmark | \(m_{0^{++}}\sim 1.5\)–\(1.7\,\mathrm{GeV}\) (continuum-extrapolé, pure gauge) |

### 3.2 Ce que le lattice prouve / ne prouve pas

| Prouve (ou soutient fortement) | Ne prouve pas (Clay) |
|--------------------------------|----------------------|
| \(\Delta_\Lambda>0\) sur volumes/fini spacings accessibles | Existence d’une mesure continuum OS sur \(\mathbb{R}^4\) |
| Confinement (area law) à fort couplage | Area law ⇒ \(\Delta>0\) continuum **sans** hypothèses supplémentaires contrôlées |
| Spectre glueball discret numérique | Identification \(m_{\mathrm{glueball}}\equiv\Delta\) sans reconstruction \(H\) |
| Tendance de stabilité sous raffinement | Borne inférieure **uniforme** \(\Delta(a)\ge c>0\) pour \(a\to 0\) |

### 3.3 Routes littéraires (à classer Track B jusqu’à validation indépendante)

Plusieurs prépublications récentes affirment gap lattice + passage continuum sous RP / renormalisation / area law.  
**Règle GoldNi :** tant qu’elles ne sont pas acceptées comme preuve Clay standard, elles restent **Track B** (revendications externes). Le gap register **reste ouvert**.

---

## 4. Chaîne logique Track A (ce qu’il faudrait prouver)

```
Lagrangian pur YM (pas de masse explicite)
        ↓
Régularisation lattice (Wilson) + mesure de Haar
        ↓
OS2 (RP) sur observables de jauge  →  transfer matrix  →  Δ_Λ > 0
        ↓
Limite continuum a→0 : tightness + conservation RP + OS0,1,3
        ↓
OS4 (cluster)  ↔  spectre
        ↓
Reconstruction Wightman  →  H ≥ 0
        ↓
Δ = inf(spec(H)\{0}) > 0   [UNIFORME]
```

Chaque flèche = entrée du gap register. **Aucune n’est fermée** dans le vault user pour YM.

---

## 5. Gap register YM mis à jour (Track A)

| ID | Énoncé | Status |
|----|--------|--------|
| **YM-A1** | Existence mesure continuum pure YM, \(G\) compact simple non-abélien, sur \(\mathbb{R}^4\) | **Open** |
| **YM-A2** | OS0–OS3 (au minimum) pour les Schwinger de jauge | **Open** |
| **YM-A3** | \(\Delta=\inf(\mathrm{spec}(H)\setminus\{0\})>0\) | **Open** |
| **YM-A4** | Limite \(a\to 0\) préserve une borne inférieure positive uniforme du gap | **Open** |
| **YM-A5** | Reflection positivity de la mesure continuum | **Open** |
| **YM-A6** | Clustering OS4 compatible avec \(\Delta>0\) | **Open** |
| **YM-B1** | \(\Delta_\Lambda>0\) lattice fini | Soutenu (littérature + numerics) — **pas Clay** |
| **YM-B2** | Spectres glueball / AdS | Track B |
| **YM-B3** | Formules vault \(\Lambda_{\mathrm{QCD}}\) / 94 nHz | Track B — **interdit** comme preuve de YM-A3 |

---

## 6. Annex B (une page — tampon « not Clay »)

Contenu autorisé en annexe, **jamais** dans le corps Track A :

- Nombres lattice : \(m_{0^{++}}\approx 1.73\,\mathrm{GeV}\) (réf. Morningstar–Peardon type).  
- Une table holographique (ratios hard/soft wall) — insight seulement.  
- Formule vault \(\Omega_{\mathrm{GW}}\propto(\Lambda_{\mathrm{QCD}}/332\,\mathrm{MeV})^4(1/94)^2\) — prédiction observationnelle.  
- \(\alpha_{\mathrm{Ni}}=1.094722\) — seuil méthodologique NiPura, **hors** Lagrangian YM.  
- Mention Fibonacci/Bernoulli uniquement comme *exemples* de structure numérique, pas comme levier de gap.

---

## 7. Mini-Setup Track A (squelette LaTeX conceptuel)

```latex
% Track A only — GoldNi–Yang–Mills Angle 0.1
% No NiPura, no Irrelativité, no intention tensors

\section*{Setup}
Let $G$ be a compact, connected, simple, non-abelian Lie group.
Classical Yang–Mills Lagrangian on $\mathbb{R}^4$:
\[
\mathcal{L}=-\frac14 F^a_{\mu\nu}F^{a\,\mu\nu}.
\]
No explicit mass term for gauge bosons.

\section*{Target axioms}
Schwinger functions of gauge-invariant observables satisfying
OS0--OS4 (Osterwalder--Schrader), with reconstruction of a
Wightman theory and Hamiltonian $H=H^*\ge 0$.

\section*{Gap register}
\begin{itemize}
  \item YM-A1 -- continuum measure: OPEN
  \item YM-A2 -- OS axioms: OPEN
  \item YM-A3 -- $\Delta>0$: OPEN
  \item YM-A4 -- uniform continuum gap: OPEN
  \item YM-A5 -- continuum RP: OPEN
  \item YM-A6 -- clustering: OPEN
\end{itemize}

\section*{Forbidden in Track A}
Lattice numerics as proof; AdS/CFT as proof;
$\Omega_{\mathrm{GW}}$ formulae; any intentional/NiPura tensor.
```

---

## 8. Synthèse prouve / ne prouve pas

| Face | Prouve | Ne prouve pas |
|------|--------|----------------|
| **OS (littérature)** | Reconstruction si OS0–OS4 ; RP ⇒ \(H\ge 0\) | Que YM continuum les satisfait |
| **Lattice** | RP + \(\Delta_\Lambda>0\) souvent ; glueballs numériques | \(\Delta\) continuum uniforme |
| **Chaîne Track A** | Checklist claire des flèches à prouver | Fermeture d’une seule flèche dans le vault |
| **Angle 0.1 + ce Rumble** | Méthode + gap register OS/lattice | Solution Clay |

---

## 9. Prochaine brique

| Option | Contenu |
|--------|---------|
| **A** | Fichier `.tex` Setup+Abstract+Gap register (exportable) |
| **B** | Annex B une page (lattice numbers + holographie + vault GW, tampon not Clay) |
| **C** | Énoncé conjectural précis de YM-A4 (hypothèses de tightness + RP uniforme) |

**Point d’arrêt.** OS et lattice sont posés comme **architecture** : asphalte (faits), compaction (register), époxy (Track A pur). Le mass gap continuum reste **ouvert**.
