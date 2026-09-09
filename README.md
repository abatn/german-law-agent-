# 🏛️ German Law Agent (Vertrags-Check-Agent)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Ein KI-Agent zur automatisierten Vertragsprüfung nach deutschem Recht – entwickelt ohne Code, nur mit Projektstruktur, Skills und MCP-Connectors.

## 🎯 Funktionen

- **Red-Flag-Erkennung**: Automatische Identifikation problematischer Klauseln
- **DSGVO-Compliance**: Prüfung auf Datenschutzverstöße
- **PDF-Extraktion**: Automatisches Einlesen von Verträgen
- **Rechtsverifikation**: Echtzeit-Validierung via Ansvar Gateway
- **Mehrere Vertragsarten**: NDA, Dienstvertrag, AGB, Kaufvertrag, Werkvertrag

## 📁 Projektstruktur

```
german-law-agent-/
├── instructions.md              # Agent-Workflow und Connector-Config
├── CONNECTOR-SETUP.md           # Dokumentation der Connectors
├── knowledge/                   # ⚠️ Geschützt - Vertragswissen
│   ├── red-flag-terms.md        # 35 problematische Klauseln
│   └── mandatory-clauses.md     # Pflichtklauseln für 5 Vertragsarten
├── skills/                      # ⚠️ Geschützt - Agent-Skills
│   ├── scan-clauses/SKILL.md    # Vertrags-Scanning
│   └── check-compliance/SKILL.md # Compliance-Check
├── ergebnisse/                  # Analyse-Ergebnisse
├── scripts/                     # Test-Skripte
├── test-*.txt / test-*.pdf      # Test-Verträge
├── README.md                    # Diese Datei
├── CONTRIBUTING.md              # Beitragsrichtlinien
└── LICENSE                      # MIT-Lizenz
```

## 🚀 Schnellstart

### 1. Repository klonen

```bash
git clone https://github.com/abatn/german-law-agent-
cd german-law-agent-
```

### 2. Abhängigkeiten installieren

```bash
# MCP-Server installieren
npm install -g @modelcontextprotocol/server-filesystem
npm install -g mcp-remote@0.1.38
npm install -g @sylphx/citra

# PDF-Parser (optional)
npm install pdf-parse --save-dev
```

### 3. Connectors konfigurieren

Erstelle `~/.config/opencode/opencode.json`:

```json
{
  "mcp": {
    "contract-check-filesystem": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-filesystem", "/pfad/zu/german-law-agent-"],
      "enabled": true
    },
    "ansvar-german-law": {
      "type": "local",
      "command": ["npx", "-y", "mcp-remote@0.1.38", "https://gateway.ansvar.eu/mcp"],
      "enabled": true
    },
    "pdf-connector": {
      "type": "local",
      "command": ["npx", "-y", "@sylphx/citra"],
      "enabled": true
    }
  }
}
```

### 4. Agent starten

```bash
opencode
```

### 5. Ersten Vertrag prüfen

```
"Prüfe den Vertrag aus ~/mimo-agents/contract-check/test-contract.txt"
```

## 🔧 Connectors

| Connector | Typ | Auth | Zweck |
|---|---|---|---|
| `contract-check-filesystem` | local | Keine | TXT/MD-Dateien lesen |
| `ansvar-german-law` | local | OAuth 1x | Gesetze verifizieren |
| `pdf-connector` | local | Keine | PDF extrahieren |

## 📚 Skills

### scan-clauses
Analysiert Verträge auf problematische Klauseln:
- 14 Kategorien (Haftung, Kündigung, Preis, etc.)
- 35+ Red-Flag-Terms
- Risiko-Bewertung (HOCH/MITTEL/NIEDRIG)

### check-compliance
Prüft Verträge auf Compliance:
- DSGVO-Verstöße
- Fehlende Pflichtklauseln
- Gesetzliche Grundlagen (BGB, DSGVO)

## 🧪 Test-Verträge

| Datei | Typ | Risiko |
|---|---|---|
| `test-contract.txt` | NDA | 🔴 HOCH |
| `test-dienstvertrag-agb-dsgvo.txt` | Dienstvertrag+AGB | 🔴 SEHR HOCH |
| `test-mietvertrag-immowelt.pdf` | Mietvertrag | 🟢 NIEDRIG |
| `test-agb.txt` | AGB | 🟡 MITTEL |
| `test-kaufvertrag.txt` | Kaufvertrag | 🟡 MITTEL |
| `test-werkvertrag.txt` | Werkvertrag | 🟡 MITTEL |

## 📊 Ergebnisse

Analysen werden in `ergebnisse/` gespeichert:
- `triage-abschliessend.md` – Vollständige Risikobewertung
- `triage-pdf-test.md` – PDF-Analyse
- `vergleich-github-huggingface.md` – Ökosystem-Vergleich

## 🛡️ Sicherheit

### Geschützte Bereiche

| Verzeichnis | Schutz | Grund |
|---|---|---|
| `knowledge/` | ⚠️ Geschützt | Kern-IP des Agenten |
| `skills/` | ⚠️ Geschützt | Geschützte Skill-Logik |
| `scripts/` | ⚠️ Geschützt | Interne Test-Skripte |

### Empfehlungen

1. **Repository privat halten** (empfohlen)
2. **Branch Protection** auf `main` aktivieren
3. **Personal Access Token** nicht im Code speichern
4. **.gitignore** für sensitive Dateien nutzen

Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für Details.

## 🔗 Ressourcen

- [Ansvar Gateway](https://gateway.ansvar.eu) – Deutsche Gesetzestexte
- [MCP-Protokoll](https://modelcontextprotocol.io/) – Model Context Protocol
- [opencode](https://opencode.ai/) – Agent-Plattform

## 📄 Lizenz

MIT License – siehe [LICENSE](LICENSE)

## 🤝 Beiträge

Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für die Beitragsrichtlinien.

## 📧 Kontakt

- **Repository:** https://github.com/abatn/german-law-agent-
- **Issues:** https://github.com/abatn/german-law-agent-/issues

---

**Hinweis:** Dieser Agent ersetzt keine Rechtsberatung. Alle Ergebnisse sind als Ersteinschätzung zu verstehen.
