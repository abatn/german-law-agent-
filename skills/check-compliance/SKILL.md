---
description: Prüft Vertrag auf BGB/DSGVO-Konformität
---
1. Nutze **Filesystem-Connector** (`read_text_file`) zum Einlesen
2. Prüfe auf Pflichtklauseln (knowledge/mandatory-clauses.md)
3. Nutze **Ansvar German Law** (`search_legislation`) für DSGVO-Verweis-Prüfung
4. Fehlende Klauseln → MITTEL/NIEDRIG (je nach Relevanz)
5. Prüfe auf DSGVO-Verstöße (Art. 28, 30, 33, 44-49 DSGVO)
6. Speichere Compliance-Bericht via **Filesystem-Connector** (`write_file`)
7. Gib Compliance-Bericht zurück
