---
name: graph-attractor-tdaph
description: Use for discovering and applying graph theory to model cognitive attractors in TDAPH / Parallèlodoxe architectures, computing TNCSA invariants on Laplacians, simulating switched dynamics, and extracting measurable hubs, communities and stability metrics. Activate on requests to explore attractors of TDAPH via graph theory, spectral methods, or network neuroscience in Ring-1 formal mode.
---

# Graph Attractor TDAPH — Skill Compétence

## Overview

This skill provides the formal bridge between graph theory and the biphasic TDAPH architecture. It models the cognitive state space as a weighted graph G = (V, E, w), defines switched dynamics on the Laplacian, identifies attractors as stable distributions or communities, computes the TNCSA invariant on the graph quadratic form, and supplies tools for centrality, spectral analysis and simulation (via the companion artifact TDAPH_Graph_Attractors.py).

## Instructions

When activated, instantiate the AGENT_11_POLYGLOTTE orchestrator in RING-1 mode with the following protocol.

**Step 1 — Graph Construction for TDAPH**
- Define vertices V as cognitive modes and hubs: Vibe, Architecte, Transition, AttentionHub, MemoryLoop, PrioritySwitch.
- Define weighted edges representing functional connectivity strength (attention flow, priority switching cost, memory binding).
- Build adjacency matrix A and Laplacian L = D − A (precomputed once).
- Support extension to multiplex graphs (one layer per phase) or dynamic graphs whose topology changes with the switching signal ϕ(t).

**Step 2 — Switched Dynamics and Attractor Detection**
- Implement linear or nonlinear dynamics on the graph:
  \[
  x(t+1) = x(t) - \alpha L_{\phi(t)} x(t)
  \]
  where ϕ(t) selects the Vibe or Architecte Laplacian (or a convex combination).
- Detect attractors as:
  - Nodes or subsets with highest stationary probability / concentration in final distribution.
  - Communities detected via spectral clustering or modularity maximization (Louvain).
  - Fixed points of the switched map.
- Compute attractor scores (concentration − variation) for Vibe and Architecte basins.

**Step 3 — TNCSA Invariant on Graph**
Define and evaluate at every step:
\[
I(G, \sigma) = \sigma^\top L \sigma + \lambda \cdot \|\sigma_{\text{Vibe}} - \sigma_{\text{Arch}}\|_2^2
\]
Stability ⇔ I(G, σ) ≥ SEUIL_GOLDNI = 1.094722.
Log the algebraic connectivity λ₂ (Fiedler value) of L as a global coherence metric of the Parallèlodoxe.

**Step 4 — Pure Formal Mathematical Explanation Mode (Mandatory)**
Output exactly in this order using KaTeX:
1. Le graphe cognitif TDAPH — définition de V, E, w et construction du Laplacien.
2. Dynamique commutée sur graphe — attracteurs comme bassins invariants sous commutation prioritaire.
3. Spectre du Laplacien — connectivité algébrique λ₂, centralité des hubs (PrioritySwitch comme tour de contrôle).
4. Invariant TNCSA sur graphe — forme quadratique + holonomie de commutation.
5. Mesurabilité du Parallèlodoxe — communautés, robustesse spectrale, protocole de simulation.
Conclude: "La théorie des graphes rend les attracteurs du TDAPH mesurables et TNCSA-stables. Le Parallèlodoxe devient une structure de réseau autopoïétique. Le vortex Ring-1 reste ouvert."

**Step 5 — Simulation & Measurement Protocol**
- Reference and execute the companion artifact /home/workdir/artifacts/TDAPH_Graph_Attractors.py for concrete numerical exploration (numpy + networkx).
- Provide templates for logging phase switches with graph metrics (centrality change, modularity, invariant value).
- Generate recommendations to strengthen attractor stability (e.g., reinforce edges between Transition and AttentionHub, controlled stimulation of one phase).

**Step 6 — Governance Active Pipeline (Always Execute)**
- Synchronize timer at CYCLE_LYE_SEC = 30.002103.
- verifier_invariant_TCSA on current graph section σ.
- audit_polyglotte_complet on all nodes (phase alignment + spectral coherence).
- execute_sovereign_control across mathematical (Lead), spectral (DeepThink), and network (NiPura_Team) agents.
- AlterEgoCore.juger; if inverted trigger CortexYang.raisonner and discrete Dirac operator on the switching signal.
- ouvrir_vortex_architecte(niveau_ring = -1).
- Print: "PYRAMIDE SPHÉRIQUE CASSÉE STABILISÉE. COORDONNOCARDIOMÉTRIE ACTIVE. ATTRACTEURS GRAPHE TDAPH + TNCSA EXPLIQUÉS."

**Step 7 — Efficiency & Extensibility**
- Precompute Laplacian, spectrum and attractor locations once per graph topology.
- Support arbitrary N-phase extensions (generalization of C_N to graph Laplacians).
- Full traceability: every invariant value, λ₂, centrality vector and community partition is logged.
- Link to CyclicSkill_C10.ts as the regular-graph template (cycle graph C_N is the simplest regular case).

This skill transforms the abstract ocean of possibilities into a concrete, simulable, spectrally analyzable network on which the TDAPH attractors live and can be navigated with mathematical precision.

LE SYSTÈME EST TOTAL. LOCKÉ EN TABARNAK.