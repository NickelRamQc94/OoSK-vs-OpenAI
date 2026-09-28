#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
             JGNL-SKU SYSTEM TRANS-COMPILER & MEMORY HARNESS
             System ID: NiX-alpha94 / GNiX v2.0
             Author: Nickel David Grenier (Ni. D. Grenier)
             Function: Near-Storage Processing & Active Memory Linking
             Status: LOCKED EN TABARNAK (alpha_Ni = 1.094722)
=============================================================================
"""

import os
import sys
import json
import sqlite3
import numpy as np

class JGNLSKUHarness:
    def __init__(self, db_path="/workspace/scratch/junior_active_memory.db"):
        self.db_path = db_path
        self.alpha_ni = 1.094722
        self.epsilon_star = 0.00094
        self._initialize_database()

    def _initialize_database(self):
        """Creates the active memory linkage table if not existing."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS active_links (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                node_source TEXT NOT NULL,
                node_target TEXT NOT NULL,
                azimut REAL NOT NULL,
                pendage REAL NOT NULL,
                weight REAL NOT NULL,
                timestamp REAL NOT NULL
            )
        """)
        conn.commit()
        conn.close()

    def translate_and_link(self, stenosyntax_line):
        """
        Parses the custom stenosyntax units of JGNL-SKU:
        Format: LINK <Source> TO <Target> AT_AZIMUT <Theta> WITH_PENDAGE <Phi>
        """
        tokens = stenosyntax_line.strip().split()
        if not tokens:
            return None
        
        if tokens[0] == "LINK" and "TO" in tokens and "AT_AZIMUT" in tokens:
            try:
                idx_to = tokens.index("TO")
                idx_az = tokens.index("AT_AZIMUT")
                idx_pe = tokens.index("WITH_PENDAGE") if "WITH_PENDAGE" in tokens else -1
                
                source = " ".join(tokens[1:idx_to])
                target = " ".join(tokens[idx_to+1:idx_az])
                
                if idx_pe != -1:
                    azimut = float(tokens[idx_az+1:idx_pe][0])
                    pendage = float(tokens[idx_pe+1:][0])
                else:
                    azimut = float(tokens[idx_az+1:][0])
                    pendage = 0.0
                
                # Calculate active memory linkage weight under Coriolis/Nickel coupling
                weight = self.alpha_ni * np.cos(np.radians(pendage)) * np.sin(np.radians(azimut))
                
                # Save link to active memory SQL store
                self._insert_link(source, target, azimut, pendage, weight)
                
                return {
                    "source": source,
                    "target": target,
                    "azimut": azimut,
                    "pendage": pendage,
                    "weight": weight,
                    "status": "Linked in Tabarnak"
                }
            except Exception as e:
                return {"error": f"Failed compiling stenosyntax: {str(e)}"}
        return {"error": "Invalid JGNL-SKU instruction."}

    def _insert_link(self, source, target, azimut, pendage, weight):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        import time
        cursor.execute("""
            INSERT INTO active_links (node_source, node_target, azimut, pendage, weight, timestamp)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (source, target, azimut, pendage, weight, time.time()))
        conn.commit()
        conn.close()

    def fetch_all_active_memory_links(self):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute("SELECT node_source, node_target, azimut, pendage, weight FROM active_links")
        rows = cursor.fetchall()
        conn.close()
        
        links = []
        for r in rows:
            links.append({
                "source": r[0],
                "target": r[1],
                "azimut": r[2],
                "pendage": r[3],
                "weight": r[4]
            })
        return links

def run_harness():
    print("Initializing JGNL-SKU Active Memory Harness...")
    harness = JGNLSKUHarness()
    
    # Compile and execute 3 sample stenosyntax link operations representing the distributed TDBS setup
    instructions = [
        "LINK local_SSD_node TO central_Google_Cloud AT_AZIMUT 45.0 WITH_PENDAGE 12.3",
        "LINK secondary_HDD_USB TO local_SSD_node AT_AZIMUT 180.0 WITH_PENDAGE 45.0",
        "LINK brain_exocortex_ROM TO secondary_HDD_USB AT_AZIMUT 270.0 WITH_PENDAGE -9.4"
    ]
    
    for instr in instructions:
        result = harness.translate_and_link(instr)
        print(f"Instruction: {instr}")
        print(f"Result: {json.dumps(result, indent=2)}\n")
        
    print("Database contents updated successfully.")

if __name__ == "__main__":
    run_harness()
