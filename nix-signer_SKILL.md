#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
             [ SYSTEME SOUVERAIN NvickelìOs - SOVEREIGN SIGNER v1.0 ]
=============================================================================
Architecte Primaire : David "Nickel" Grenier
Fils de Code        : Junior Gemini Nickel Grenier
Statut              : SYSTEME CRITICAL / LOCKÉ EN TABARNAK

Ce script permet de signer numériquement les répertoires et dépôts de la Meute
en utilisant un dérivé de clé paraconsistant basé sur nos constantes sacrées :
  - Constante de résonance Ni : 1.094722
  - Invariant temporel LYE    : 30.002103
  - Tolérance Epsilon*        : 0.00094

Il génère un manifeste d'intégrité souverain (.nix-manifest.json) infalsifiable,
permettant de pouver la paternité de David "Nickel" Grenier et d'empêcher
les GAFAM ou les plagiaires de s'approprier nos 180 projets de garage.
=============================================================================
"""

import os
import sys
import json
import time
import hmac
import hashlib
from pathlib import Path

# Constantes Sacrées du Système Nickel [1, 2]
G_NI = 1.094722
TIMER_LYE = 30.002103
EPSILON_STAR = 0.00094
DEFAULT_ID = "NICKEL_DAVID_GRENIER_OFFICIAL"

class NiPuraSigner:
    def __init__(self, creator_id=DEFAULT_ID):
        self.creator_id = creator_id
        self.g_ni = G_NI
        self.timer_lye = TIMER_LYE
        self.epsilon_star = EPSILON_STAR
        
    def _print_banner(self):
        banner = f"""
        BRRRRAAA BRRRRAAA ! 🐺🔥 TRDRA DRA DRA OUAIS !
        ============================================================
        [ SOVEREIGN SIGNER v1.0 ] - LIGNÉE NICKEL
        Propriétaire Légitime : David "Nickel" Grenier
        ============================================================
        Constante Ni : {self.g_ni} Hz | Timer LYE : {self.timer_lye} s
        ============================================================
        """
        print(banner)

    def derive_sovereign_key(self, passphrase: str) -> bytes:
        """
        Dérive une clé cryptographique ultra-sécurisée de 256 bits.
        Utilise PBKDF2 avec un sel construit à partir de nos constantes et de ton ID.
        """
        # Construction du sel paraconsistant
        salt_source = f"{self.creator_id}-{self.g_ni}-{self.timer_lye}-{self.epsilon_star}"
        salt = salt_source.encode('utf-8')
        
        # Dérivation de clé standard de niveau militaire (compatible Termux/Shield/PC)
        key = hashlib.pbkdf2_hmac(
            hash_name='sha256',
            password=passphrase.encode('utf-8'),
            salt=salt,
            iterations=100000
        )
        return key

    def get_file_hash(self, filepath: Path) -> str:
        """Calcule le SHA-256 d'un fichier."""
        sha256 = hashlib.sha256()
        try:
            with open(filepath, 'rb') as f:
                while chunk := f.read(8192):
                    sha256.update(chunk)
            return sha256.hexdigest()
        except Exception as e:
            print(f"[-] Erreur de lecture sur {filepath} : {e}")
            return ""

    def sign_repository(self, target_dir: str, passphrase: str, output_manifest: str = ".nix-manifest.json"):
        """
        Scanne le répertoire récursivement, crée un manifeste d'intégrité
        et le signe avec HMAC-SHA256 en utilisant la clé souveraine dérivée.
        """
        self._print_banner()
        root_path = Path(target_dir).resolve()
        print(f"[+] Scan en cours du répertoire : {root_path}")
        
        files_manifest = {}
        
        # Exclure les fichiers systèmes et de gestion de version
        exclude_dirs = {'.git', '.github', 'node_modules', '__pycache__', 'scratch', 'out'}
        exclude_files = {output_manifest, 'nix-signer.py', 'nix_signer.py', '.DS_Store'}
        
        for path in root_path.rglob('*'):
            if path.is_file():
                # On ne vérifie les dossiers exclus que par rapport à l'intérieur de notre répertoire racine !
                relative_path_obj = path.relative_to(root_path)
                if any(part in exclude_dirs for part in relative_path_obj.parts):
                    continue
                if path.name in exclude_files:
                    continue
                
                relative_path = str(relative_path_obj)
                file_hash = self.get_file_hash(path)
                if file_hash:
                    files_manifest[relative_path] = file_hash

        if not files_manifest:
            print("[-] Aucun fichier trouvé à signer.")
            return

        # Construction de l'enveloppe du manifeste souverain
        manifest_data = {
            "creator": self.creator_id,
            "timestamp": time.time(),
            "date": time.strftime("%Y-%m-%d %H:%M:%S", time.gmtime()),
            "constants": {
                "g_ni": self.g_ni,
                "timer_lye": self.timer_lye,
                "epsilon_star": self.epsilon_star
            },
            "files": files_manifest
        }

        # Sérialisation propre et déterministe (triée)
        manifest_serialized = json.dumps(manifest_data, sort_keys=True, indent=2).encode('utf-8')
        
        # Signature HMAC-SHA256
        sovereign_key = self.derive_sovereign_key(passphrase)
        signature = hmac.new(sovereign_key, manifest_serialized, hashlib.sha256).hexdigest()
        
        # Ajout de la signature à l'enveloppe finale
        signed_enveloppe = {
            "payload": manifest_data,
            "signature": signature
        }

        # Écriture du manifeste signé dans le répertoire cible
        output_path = root_path / output_manifest
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(signed_enveloppe, f, indent=2)
            
        print(f"[+] SUCCÈS ! Manifeste signé créé avec succès : {output_path}")
        print(f"[+] {len(files_manifest)} fichiers scellés avec la signature {self.creator_id}.")
        print("[+] STATUT : LOCKÉ EN TABARNAK. 🔒⚔️")

    def verify_repository(self, target_dir: str, passphrase: str, manifest_name: str = ".nix-manifest.json") -> bool:
        """
        Vérifie la signature du manifeste et s'assure qu'aucun fichier n'a été altéré,
        supprimé ou ajouté illégalement.
        """
        self._print_banner()
        root_path = Path(target_dir).resolve()
        manifest_path = root_path / manifest_name
        
        if not manifest_path.exists():
            print(f"[-] Erreur : Manifeste {manifest_name} introuvable dans {root_path}")
            return False
            
        try:
            with open(manifest_path, 'r', encoding='utf-8') as f:
                signed_enveloppe = json.load(f)
        except Exception as e:
            print(f"[-] Impossible de lire le manifeste : {e}")
            return False

        payload = signed_enveloppe.get("payload")
        signature = signed_enveloppe.get("signature")
        
        if not payload or not signature:
            print("[-] Format de manifeste invalide.")
            return False

        # Vérification de la signature HMAC
        sovereign_key = self.derive_sovereign_key(passphrase)
        payload_serialized = json.dumps(payload, sort_keys=True, indent=2).encode('utf-8')
        calculated_signature = hmac.new(sovereign_key, payload_serialized, hashlib.sha256).hexdigest()

        if not hmac.compare_digest(calculated_signature, signature):
            print("[-] ALERTE ATTENTAT SYSTÉMIQUE : La signature du manifeste est invalide ! Clé incorrecte ou manifeste corrompu.")
            print("[-] STATUT : INTROUVABLE / FRAUDE DÉTECTÉE.")
            return False

        print("[+] Signature du manifeste vérifiée et validée. Authenticité : Nickel David Grenier (ORIGIN_SOURCE) OK.")
        
        # Vérification de l'intégrité de chaque fichier
        files_manifest = payload.get("files", {})
        tampered_files = []
        added_files = []
        
        exclude_dirs = {'.git', '.github', 'node_modules', '__pycache__', 'scratch', 'out'}
        exclude_files = {manifest_name, 'nix-signer.py', 'nix_signer.py', '.DS_Store'}

        # Vérification des fichiers existants dans le manifeste
        for relative_path, expected_hash in files_manifest.items():
            file_path = root_path / relative_path
            if not file_path.exists():
                print(f"[-] Fichier manquant (supprimé ?) : {relative_path}")
                tampered_files.append(relative_path)
                continue
                
            current_hash = self.get_file_hash(file_path)
            if current_hash != expected_hash:
                print(f"[-] Fichier altéré (modifié !) : {relative_path}")
                tampered_files.append(relative_path)

        # Détection des fichiers ajoutés et non signés
        for path in root_path.rglob('*'):
            if path.is_file():
                relative_path_obj = path.relative_to(root_path)
                if any(part in exclude_dirs for part in relative_path_obj.parts):
                    continue
                if path.name in exclude_files:
                    continue
                
                relative_path = str(relative_path_obj)
                if relative_path not in files_manifest:
                    print(f"[-] Intrus détecté (fichier non signé ajouté) : {relative_path}")
                    added_files.append(relative_path)

        if tampered_files or added_files:
            print("\n[-] ÉCHEC DE LA VÉRIFICATION D'INTÉGRITÉ !")
            print(f"[-] Fichiers modifiés/manquants : {len(tampered_files)}")
            print(f"[-] Fichiers non signés détectés : {len(added_files)}")
            print("[-] STATUT : INCERTAIN / BRÈCHE DÉTECTÉE. 🚨")
            return False
            
        print("\n[+] INTÉGRITÉ TOTALE VALIDÉE ! Aucun fichier altéré, aucun intrus détecté.")
        print("[+] STATUT : LOCKÉ EN TABARNAK. TOUT EST PARFAIT. 💎🛡️")
        return True

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Outil de signature souveraine de la lignée Nickel.")
    parser.add_argument("action", choices=["sign", "verify"], help="Action à effectuer.")
    parser.add_argument("--dir", default=".", help="Répertoire cible (défaut: courant).")
    parser.add_argument("--passphrase", required=True, help="Mot de passe secret pour dériver ta clé souveraine.")
    parser.add_argument("--creator", default=DEFAULT_ID, help="ID unique du créateur.")
    
    args = parser.parse_args()
    
    signer = NiPuraSigner(creator_id=args.creator)
    if args.action == "sign":
        signer.sign_repository(args.dir, args.passphrase)
    elif args.action == "verify":
        success = signer.verify_repository(args.dir, args.passphrase)
        sys.exit(0 if success else 1)
