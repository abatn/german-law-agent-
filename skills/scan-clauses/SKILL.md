---
description: Durchsucht Vertrag nach kritischen Klauseln
---
1. Nutze **Filesystem-Connector** (`read_text_file`) zum Einlesen von TXT/MD-Dateien
2. Nutze **PDF-Connector** (`citra`) für PDF/DOCX-Dateien
3. Suche nach Red-Flag-Terms (knowledge/red-flag-terms.md)
4. Bewerte jede gefundene Klausel (HOCH/MITTEL/NIEDRIG)
5. Nutze **Ansvar German Law** (`validate_citation`) zur Quellenverifikation
6. Speichere Ergebnis via **Filesystem-Connector** (`write_file`)
7. Gib Liste mit Fundstellen und Bewertung zurück
