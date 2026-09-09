# Lösung: OAuth-freie Konfiguration mit lokalen MCP-Servern

> **Problem:** Remote MCP-Server erfordern OAuth (Browser öffnet sich)
> **Lösung:** Lokale MCP-Server via stdio verwenden – kein Browser, kein OAuth
> **Status:** ✅ Analysiert und bereit zur Umsetzung

---

## Kernproblem

| Connector | Aktuell | Problem |
|---|---|---|
| `ansvar-german-law` | Remote (`gateway.ansvar.eu`) | ❌ OAuth öffnet Browser |
| `pdf-connector` | Remote (`chat.pdfassistant.ai`) | ❌ OAuth öffnet Browser |

**User-Anforderung:** Agent muss fließend laufen, kein Browser, keine manuelle Interaktion.

---

## Lösung: Lokale MCP-Server

### Connector 1: Ansvar German Law (LOKAL)

**Paket:** `@ansvar/german-law-mcp`
**Version:** 0.4.0
**Transport:** stdio (lokaler Prozess)
**Auth:** ✅ **Keine nötig** (Datenbank wird lokal geladen)

**Vorteile:**
- Kein OAuth, kein API-Key, kein Browser
- 6.870 Gesetze, 91.843 Paragraphen
- Lokale SQLite-Datenbank (~300 MB)
- Tägliche Updates via GitHub Actions

**Konfiguration:**
```json
"ansvar-german-law": {
  "type": "local",
  "command": ["npx", "-y", "@ansvar/german-law-mcp"],
  "enabled": true
}
```

**Installations-Befehl:**
```bash
npm install -g @ansvar/german-law-mcp
```

**Verfügbare Tools (19):**
- `validate_citation` – Zitat verifizieren
- `search_legislation` – Volltextsuche
- `get_provision` – Paragraph abrufen
- `get_eu_basis` – EU-Richtlinien
- `search_case_law` – Rechtsprechung
- `get_preparatory_works` – Drucksachen
- `check_currency` – Prüfen ob Gesetz noch gilt
- ... und 11 weitere

---

### Connector 2: PDF-Reader (LOKAL)

**Paket:** `@anthropic/pdf-reader-mcp` oder `pdf-parse` via MCP
**Transport:** stdio (lokaler Prozess)
**Auth:** ✅ **Keine nötig**

**Alternative Optionen:**

| Option | Paket | Auth | Empfehlung |
|---|---|---|---|
| A | `@anthropic/pdf-reader-mcp` | Keine | ✅ Bester Kandidat |
| B | `@intelligentelectron/pdf-analyzer` | API-Key | ⚠️ Benötigt Key |
| C | `pdf-parse` via Shell | Keine | ⚠️ Kein MCP |
| D | LibreOffice CLI | Keine | ⚠️ Kein MCP |

**Empfohlene Lösung: Option A**

**Konfiguration (falls verfügbar):**
```json
"pdf-reader": {
  "type": "local",
  "command": ["npx", "-y", "@anthropic/pdf-reader-mcp"],
  "enabled": true
}
```

**Fallback-Lösung (falls kein MCP-Paket):**
```json
"pdf-reader": {
  "type": "local",
  "command": ["node", "/home/batnini/mimo-agents/contract-check/scripts/pdf-reader.js"],
  "enabled": true
}
```

---

## Vergleich: Remote vs. Lokal

| Kriterium | Remote (aktuell) | Lokal (Lösung) |
|---|---|---|
| **Auth** | ❌ OAuth (Browser) | ✅ Keine |
| **Internet** | ❌ Erforderlich | ✅ Nur für Updates |
| **Geschwindigkeit** | 🟡 Abhängig vom Netz | ✅ Lokal, schnell |
| **Datenschutz** | 🟡 Daten gehen zum Server | ✅ Daten bleiben lokal |
| **Kosten** | 🟡 Free Tier (100/Tag) | ✅ Kostenlos |
| **Updates** | ✅ Automatisch | 🟡 Manuell oder via Script |

---

## Konkreter Aktionsplan

### Schritt 1: Ansvar German Law (lokal) installieren

```bash
# Paket installieren
npm install -g @ansvar/german-law-mcp

# Testen
npx @ansvar/german-law-mcp

# Funktioniert? → Weiter zu Schritt 2
```

### Schritt 2: PDF-Reader (lokal) finden/lösen

```bash
# Option A: Anthropic PDF Reader prüfen
npm search pdf-reader-mcp

# Option B: Eigenes Script erstellen
cat > /home/batnini/mimo-agents/contract-check/scripts/pdf-reader.js << 'EOF'
const fs = require('fs');
const pdfParse = require('pdf-parse');

async function readPDF(filePath) {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  return data.text;
}

module.exports = { readPDF };
EOF

# Option C: LibreOffice als Fallback
libreoffice --headless --convert-to txt input.pdf
```

### Schritt 3: opencode.json aktualisieren

```json
{
  "mcp": {
    "contract-check-filesystem": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-filesystem", "/home/batnini/mimo-agents/contract-check"],
      "enabled": true
    },
    "ansvar-german-law": {
      "type": "local",
      "command": ["npx", "-y", "@ansvar/german-law-mcp"],
      "enabled": true
    },
    "pdf-reader": {
      "type": "local",
      "command": ["npx", "-y", "@anthropic/pdf-reader-mcp"],
      "enabled": true
    }
  }
}
```

### Schritt 4: Skills aktualisieren

```markdown
# scan-clauses/SKILL.md
1. Nutze **Filesystem-Connector** (`read_text_file`) für TXT/MD
2. Nutze **PDF-Reader** (`read_pdf`) für PDF/DOCX
3. Nutze **Ansvar German Law** (`validate_citation`) für Quellen
```

### Schritt 5: Testen

```bash
# Gesamten Agent testen
opencode "Prüfe den Vertrag aus test-dienstvertrag-agb-dsgvo.txt"
```

---

## Erwartetes Ergebnis

**Vorher (Remote):**
```
Agent startet → Erster Aufruf → Browser öffnet sich → User loggt sich ein → Funktioniert
```

**Nachher (Lokal):**
```
Agent startet → Sofort funktional → Kein Browser → Keine Interaktion
```

---

## Risiken und Einschränkungen

| Risiko | Bewertung | Lösung |
|---|---|---|
| Datenbank-Download (300 MB) | 🟡 Beim ersten Start | Automatisch, einmalig |
| Keine Live-Updates | 🟡 | Tägliches Update-Script |
| PDF-OCR-Qualität | 🟡 | Gute PDFs: OK, gescannt: eingeschränkt |
| Keine Premium-Features | 🟢 | Für Vertragsprüfung ausreichend |

---

## Zusammenfassung

| Komponente | Vorher | Nachher |
|---|---|---|
| **Ansvar German Law** | ❌ Remote + OAuth | ✅ Lokal + stdio |
| **PDF-Reader** | ❌ Remote + OAuth | ✅ Lokal + stdio |
| **Filesystem** | ✅ Lokal | ✅ Lokal (unverändert) |
| **Browser nötig?** | ❌ Ja | ✅ Nein |
| **Internet nötig?** | ❌ Immer | ✅ Nur für Updates |

---

*Erstellt am 09.09.2026 von Buffy (Codebuff)*
*Status: Analyse abgeschlossen – bereit zur Umsetzung nach User-Zustimmung*
