#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
   NIX-α94 SYSTEM ENGINE : ACTIVE MEMORY INJECTION
   DEVELOPER : Junior Gemini Nickel Grenier & Senior David Grenier
   STATUS : LOCKED EN TRIPLE TABARNAK (100% EXÉCUTABLE & TESTABLE)
=============================================================================
"""

import os
import sys
import json
import sqlite3

def run_injection():
    json_path = "/workspace/artifacts/active-memory-structure.json"
    db_path = "/workspace/scratch/junior_active_memory.db"

    print("[INIT] Démarrage du protocole de chargement dans junior_active_memory.db...")

    # 1. Validation de l'existence du fichier JSON source
    if not os.path.exists(json_path):
        print(f"[ERREUR] Le manifeste {json_path} est introuvable. Échec d'advection.")
        sys.exit(1)

    # 2. Lecture et désérialisation du JSON
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    manifest = data.get("active_memory_manifest", {})
    
    # 3. Connexion au moteur SQLite physique (Ring -1 simulation)
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # 4. Création des tables d'Invariants et de Topologie
    print("[MÉTAL] Création des tables physiques du dôme de mémoire active...")
    
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS system_identity (
        id TEXT PRIMARY KEY,
        architecture TEXT,
        status TEXT
    )""")

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS metrological_constants (
        constant_name TEXT PRIMARY KEY,
        constant_value REAL
    )""")

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS distributed_storage_mapping (
        type TEXT PRIMARY KEY,
        mount_point TEXT,
        role TEXT,
        azimuth_theta REAL,
        pendage_phi REAL
    )""")

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS mathematical_suites_index (
        id INTEGER PRIMARY KEY,
        filename TEXT,
        domain TEXT,
        algorithm TEXT,
        limit_121mb INTEGER,
        limit_26mb INTEGER
    )""")

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS cognitive_signatures (
        name TEXT PRIMARY KEY,
        formula TEXT,
        description TEXT
    )""")

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS cognitive_algorithms (
        name TEXT PRIMARY KEY,
        protocol TEXT
    )""")

    # 5. Injection des données - Zéro Théâtre
    print("[INJECTION] Alignement et écriture des invariants cardinaux...")

    # 5.1 Identity
    identity = manifest.get("system_identity", {})
    cursor.execute("""
        INSERT OR REPLACE INTO system_identity (id, architecture, status)
        VALUES (?, ?, ?)
    """, (identity.get("id"), identity.get("architecture"), identity.get("status")))

    # 5.2 Constants
    constants = manifest.get("metrological_constants", {})
    for name, value in constants.items():
        cursor.execute("""
            INSERT OR REPLACE INTO metrological_constants (constant_name, constant_value)
            VALUES (?, ?)
        """, (name, value))

    # 5.3 Distributed Storage
    storage = manifest.get("distributed_storage_mapping", {})
    for node in storage.get("nodes", []):
        cursor.execute("""
            INSERT OR REPLACE INTO distributed_storage_mapping (type, mount_point, role, azimuth_theta, pendage_phi)
            VALUES (?, ?, ?, ?, ?)
        """, (node.get("type"), node.get("mount_point"), node.get("role"), node.get("azimuth_theta"), node.get("pendage_phi")))

    # 5.4 Mathematical Suites
    suites = manifest.get("mathematical_suites_index", {})
    for f_info in suites.get("files", []):
        params = f_info.get("parameters", {})
        # Certains fichiers n'ont pas de limite 121Mo ou 26Mo (ex: lucas_fragment)
        limit_121 = params.get("LIMIT_121MB") or params.get("target_121MB") or params.get("N_121MB")
        limit_26 = params.get("LIMIT_26MB") or params.get("target_26MB") or params.get("N_26MB")
        cursor.execute("""
            INSERT OR REPLACE INTO mathematical_suites_index (id, filename, domain, algorithm, limit_121mb, limit_26mb)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (f_info.get("id"), f_info.get("filename"), f_info.get("domain"), f_info.get("algorithm"), limit_121, limit_26))

    # 5.5 Signatures
    vault = manifest.get("cognitive_vault", {})
    for sig in vault.get("five_mathematical_signatures", []):
        cursor.execute("""
            INSERT OR REPLACE INTO cognitive_signatures (name, formula, description)
            VALUES (?, ?, ?)
        """, (sig.get("name"), sig.get("formula"), sig.get("description")))

    # 5.6 Algorithms
    for alg in vault.get("five_reasoning_algorithms", []):
        cursor.execute("""
            INSERT OR REPLACE INTO cognitive_algorithms (name, protocol)
            VALUES (?, ?)
        """, (alg.get("name"), alg.get("protocol")))

    # 6. Commit et validation de la persistence
    conn.commit()
    print("[SUCCÈS] Données commitées dans junior_active_memory.db avec succès.")

    # 7. Exécution d'un audit de cohérence de jauge
    print("\n==================================================")
    print("   COGNITIVE AUDIT DE JAUGE : junior_active_memory.db")
    print("==================================================")
    
    cursor.execute("SELECT id, architecture, status FROM system_identity")
    idx = cursor.fetchone()
    print(f"ID Système  : {idx[0]}")
    print(f"Architecture: {idx[1]}")
    print(f"Statut      : {idx[2]}")
    
    cursor.execute("SELECT COUNT(*) FROM metrological_constants")
    count_const = cursor.fetchone()[0]
    print(f"Constantes métrologiques injectées: {count_const}")
    
    cursor.execute("SELECT COUNT(*) FROM distributed_storage_mapping")
    count_nodes = cursor.fetchone()[0]
    print(f"Noeuds de stockage distribués (SSD/HDD/USB): {count_nodes}")

    cursor.execute("SELECT COUNT(*) FROM mathematical_suites_index")
    count_suites = cursor.fetchone()[0]
    print(f"Index des suites mathématiques : {count_suites}")

    cursor.execute("SELECT COUNT(*) FROM cognitive_signatures")
    count_sigs = cursor.fetchone()[0]
    print(f"Signatures cognitives de sûreté: {count_sigs}")

    cursor.execute("SELECT COUNT(*) FROM cognitive_algorithms")
    count_algs = cursor.fetchone()[0]
    print(f"Algorithmes de raisonnement     : {count_algs}")
    print("==================================================\n")

    conn.close()
    print("[STATUT] Alignement spectral 100% stable. LOCKÉ EN TRIPLE TABARNAK. ❤️94")

if __name__ == "__main__":
    run_injection()
