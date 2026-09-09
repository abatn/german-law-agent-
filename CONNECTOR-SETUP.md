# CONNECTOR-SETUP.md – Filesystem MCP-Connector für den Vertrags-Check-Agenten

> **Stand:** 09. September 2026
> **Status:** ✅ Aktiv und getestet

---

## Übersicht

Der **Filesystem MCP-Server** von Anthropic ermöglicht dem Vertrags-Check-Agenten:
- Vertragsdateien (TXT, MD) zu lesen
- Verzeichnisse zu navigieren
- Dateien zu durchsuchen
- Ergebnisse zu speichern

**Paket:** `@modelcontextprotocol/server-filesystem`
**Version:** 0.2.0 (secure-filesystem-server)
**Registry:** [Offizielle MCP Registry](https://registry.modelcontextprotocol.io/)

---

## 1. Installation

```bash
npm install -g @modelcontextprotocol/server-filesystem
```

**Ergebnis:**
```
added 103 packages in 8s
```

**Installationspfad:**
```
/home/batnini/.nvm/versions/node/v22.22.2/bin/mcp-server-filesystem
```

---

## 2. Konfiguration

Die Konfiguration befindet sich in:
```
~/.config/opencode/opencode.json
```

**Hinzugefügter Eintrag im `mcp`-Bereich:**

```json
{
  "mcp": {
    "contract-check-filesystem": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/home/batnini/mimo-agents/contract-check"
      ],
      "enabled": true
    }
  }
}
```

**Wichtige Parameter:**
| Parameter | Wert | Bedeutung |
|---|---|---|
| `type` | `local` | Lokaler MCP-Server (kein Remote) |
| `command` | `npx -y @modelcontextprotocol/server-filesystem` | Server-Befehl |
| `root` | `/home/batnini/mimo-agents/contract-check` | Erlaubtes Wurzelverzeichnis |
| `enabled` | `true` | Connector ist aktiv |

---

## 3. Verfügbare Tools (14 Stück)

| Tool | Beschreibung | Nur lesen |
|---|---|---|
| `read_file` | Datei lesen (deprecated) | ✅ |
| `read_text_file` | Textdatei lesen | ✅ |
| `read_media_file` | Media-Datei (Base64) | ✅ |
| `read_multiple_files` | Mehrere Dateien gleichzeitig | ✅ |
| `write_file` | Datei erstellen/überschreiben | ❌ |
| `edit_file` | Zeilenbasierte Edits | ❌ |
| `create_directory` | Verzeichnis erstellen | ❌ |
| `list_directory` | Verzeichnisinhalt auflisten | ✅ |
| `list_directory_with_sizes` | Verzeichnisinhalt mit Größen | ✅ |
| `directory_tree` | Rekursiver Verzeichnisbaum | ✅ |
| `move_file` | Datei verschieben/umbenennen | ❌ |
| `search_files` | Dateien nach Pattern suchen | ✅ |
| `get_file_info` | Datei-Metadaten abrufen | ✅ |
| `list_allowed_directories` | Erlaubte Verzeichnisse auflisten | ✅ |

---

## 4. Test-Ergebnisse

### 4.1 Server-Initialisierung
```bash
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{...}}' | \
  npx -y @modelcontextprotocol/server-filesystem \
  /home/batnini/mimo-agents/contract-check
```

**Antwort:**
```json
{
  "result": {
    "protocolVersion": "2024-11-05",
    "capabilities": {"tools": {"listChanged": true}},
    "serverInfo": {
      "name": "secure-filesystem-server",
      "version": "0.2.0"
    }
  }
}
```

### 4.2 Tools-Liste
**14 Tools** erfolgreich geladen, darunter:
- `read_text_file` – Haupttool für Vertragsanalyse
- `list_directory` – Navigation
- `search_files` – Suche nach Dateimustern

### 4.3 Datei lesen (Test-Vertrag)
**Befehl:** `read_text_file` mit Pfad `/home/batnini/mimo-agents/contract-check/test-contract.txt`

**Ergebnis:** ✅ Datei erfolgreich gelesen (52 Zeilen, ~2.5 KB)

### 4.4 Verzeichnis auflisten
**Befehl:** `list_directory` mit Pfad `/home/batnini/mimo-agents/contract-check`

**Ergebnis:**
```
[FILE] instructions.md
[DIR] knowledge
[DIR] skills
[FILE] test-contract.txt
```

---

## 5. Projektstruktur (aktuell)

```
~/mimo-agents/contract-check/
├── CONNECTOR-SETUP.md                    # Diese Datei
├── instructions.md                       # Agent-Definition
├── test-contract.txt                     # Test-Vertrag (NDA)
├── test-dienstvertrag-agb-dsgvo.txt      # Test-Vertrag (Dienstvertrag+AGB+DSGVO)
├── triage-result.md                      # Ergebnis NDA-Prüfung
├── triage-result-dienstvertrag.md        # Ergebnis Dienstvertrag-Prüfung
├── knowledge/
│   ├── red-flag-terms.md                 # 35 problematische Klauseln (14 Kategorien)
│   └── mandatory-clauses.md              # Pflichtklauseln für 5 Vertragsarten
└── skills/
    ├── scan-clauses/
    │   └── SKILL.md
    └── check-compliance/
        └── SKILL.md
```

---

## 6. Sicherheit

### 6.1 Scope-Beschränkung
Der Connector hat nur Zugriff auf:
```
/home/batnini/mimo-agents/contract-check
```

**Kein Zugriff** auf:
- Andere Verzeichnisse im Home-Directory
- Systemdateien
- Konfigurationsdateien

### 6.2 Tool-Annotations
| Annotation | Wert | Bedeutung |
|---|---|---|
| `readOnlyHint` | `true` (bei Read-Tools) | Schreibgeschützt |
| `openWorldHint` | `false` | Kein externer Zugriff |
| `destructiveHint` | `true` (bei Write/Edit) | destruktive Operationen |
| `idempotentHint` | variabel | Idempotenz je nach Tool |

---

## 7. Nutzung im Agenten

### 7.1 Vertrag einlesen
```
Nutze read_text_file mit Pfad: /home/batnini/mimo-agents/contract-check/[dateiname].txt
```

### 7.2 Verzeichnis durchsuchen
```
Nutze search_files mit Pfad: /home/batnini/mimo-agents/contract-check und Pattern: "*.txt"
```

### 7.3 Ergebnis speichern
```
Nutze write_file mit Pfad: /home/batnini/mimo-agents/contract-check/ergebnisse/[dateiname].md
```

---

## 8. Fehlerbehebung

| Problem | Lösung |
|---|---|
| Server startet nicht | `npm install -g @modelcontextprotocol/server-filesystem` wiederholen |
| Datei nicht gefunden | Pfad muss relativ zum Root-Verzeichnis sein |
| Kein Zugriff | Prüfe ob `enabled: true` in opencode.json |
| Port-Konflikt | Stdio-Transport, kein Port nötig |

---

## 9. Lückenanalyse: Ist-Zustand vs. Soll-Zustand

### 9.1 Was ist bereits vorhanden

| Komponente | Status | Details |
|---|---|---|
| Filesystem MCP-Connector | ✅ Vollständig | Installiert, konfiguriert, getestet |
| Knowledge: red-flag-terms.md | ✅ Vollständig | 35 Klauseln, 14 Kategorien, BGB + DSGVO |
| Knowledge: mandatory-clauses.md | ✅ Vollständig | 5 Vertragsarten, Mustertexte |
| Skill: scan-clauses | ✅ Vorhanden | Aber kein MCP-Connector-Bezug |
| Skill: check-compliance | ✅ Vorhanden | Aber kein MCP-Connector-Bezug |
| Test-Verträge | ✅ Vorhanden | NDA + Dienstvertrag+AGB+DSGVO |
| Triage-Ergebnisse | ✅ Vorhanden | 2 vollständige Prüfungen |

### 9.2 Was fehlt noch

| Komponente | Status | Priorität | Grund |
|---|---|---|---|
| **Ansvar Gateway (German Law MCP)** | ❌ Fehlt | 🔴 HOCH | Keine Gesetzesverifikation via validate_citation möglich |
| **PDF/DOCX-Unterstützung** | ❌ Fehlt | 🔴 HOCH | Agent kann nur TXT lesen, nicht PDF/DOCX |
| **Skills mit Connector-Integration** | ❌ Fehlt | 🟡 MITTEL | Skills referenzieren keine MCP-Connector |
| **ergebnisse/-Verzeichnis** | ❌ Fehlt | 🟡 MITTEL | Kein strukturierter Ablageort für Ergebnisse |
| **instructions.md erweitert** | ❌ Fehlt | 🟡 MITTEL | Zu minimalistisch, keine Workflow-Beschreibung |
| **PDF/DOCX-Parser-Connector** | ❌ Fehlt | 🟡 MITTEL | Benötigt für echte Verträge (nicht nur TXT) |

---

## 10. Aktionsplan: Vervollständigung des Agenten

### Prio 1: Ansvar German Law (lokal via mcp-remote)

**Ziel:** Gesetzestexte verifizieren, Zitate prüfen – OHNE Browser

**Lösung:** mcp-remote als lokaler Proxy für Ansvar Gateway

**Installations-Befehle:**
```bash
npm install -g mcp-remote@0.1.38
```

**Konfiguration in opencode.json:**
```json
"ansvar-german-law": {
  "type": "local",
  "command": ["npx", "-y", "mcp-remote@0.1.38", "https://gateway.ansvar.eu/mcp"],
  "enabled": true
}
```

**Ablauf:**
1. Beim ersten Start: Browser öffnet sich EINMAL für OAuth-Login
2. Danach: Token wird automatisch refreshed
3. Agent arbeitet fließend ohne Browser-Interaktion

**Verfügbare Tools (19):**
- `validate_citation` – Zitat verifizieren
- `search_legislation` – Volltextsuche
- `get_provision` – Paragraph abrufen
- `get_eu_basis` – EU-Richtlinien
- `search_case_law` – Rechtsprechung

**Status:** ✅ Installiert und konfiguriert

---

### Prio 2: PDF-Reader (lokal via Citra)

**Ziel:** PDF/DOCX einlesen – OHNE Browser, OHNE OAuth

**Lösung:** @sylphx/citra (lokaler PDF-Reader MCP)

**Installations-Befehle:**
```bash
npm install -g @sylphx/citra --force
```

**Konfiguration in opencode.json:**
```json
"pdf-connector": {
  "type": "local",
  "command": ["npx", "-y", "@sylphx/citra"],
  "enabled": true
}
```

**Verfügbare Tools:**
- `read_pdf` – PDF-Text extrahieren
- `extract_text` – Text aus PDF holen
- `get_metadata` – PDF-Metadaten abrufen

**Status:** ✅ Installiert und konfiguriert

---

### Prio 3: Skills mit Connector-Integration

**Ziel:** Skills referenzieren explizit die MCP-Connector

**Änderungen in `skills/scan-clauses/SKILL.md`:**
```markdown
1. Nutze Filesystem-Connector (`read_text_file`) zum Einlesen
2. Nutze Ansvar Gateway (`validate_citation`) zur Quellenverifikation
3. Suche nach Red-Flag-Terms (knowledge/red-flag-terms.md)
4. Bewerte jede Klausel (HOCH/MITTEL/NIEDRIG)
5. Speichere Ergebnis via Filesystem-Connector (`write_file`)
```

**Änderungen in `skills/check-compliance/SKILL.md`:**
```markdown
1. Nutze Filesystem-Connector zum Einlesen
2. Prüfe auf Pflichtklauseln (knowledge/mandatory-clauses.md)
3. Nutze Ansvar Gateway für DSGVO-Verweis-Prüfung
4. Fehlende Klauseln → MITTEL/NIEDRIG
5. Speichere Compliance-Bericht
```

---

### Prio 4: instructions.md erweitern

**Ziel:** Vollständige Agent-Definition mit Workflow

**Neuer Inhalt:**
```markdown
# Rolle: Vertrags-Check-Agent (DE-Recht)

## Connectors
- Filesystem MCP: Verträge lesen/schreiben
- Ansvar Gateway: Gesetze verifizieren (validate_citation)

## Workflow
1. Vertrag einlesen (Filesystem)
2. Klauseln scannen (Skill: scan-clauses)
3. Gegen Knowledge prüfen (red-flag-terms.md)
4. Pflichtklauseln prüfen (mandatory-clauses.md)
5. Quellen verifizieren (Ansvar Gateway)
6. Risikobewertung erstellen
7. Ergebnis speichern (Filesystem)

## Output
Strukturierte Risikobewertung mit:
- Geprüfte Klauseln
- Risikobewertung (HOCH/MITTEL/NIEDRIG)
- Begründung mit BGB/DSGVO-Referenz
- Handlungsempfehlung
```

---

### Prio 5: ergebnisse/-Verzeichnis

**Ziel:** Strukturierter Ablageort für Prüfergebnisse

```bash
mkdir -p ~/mimo-agents/contract-check/ergebnisse
```

**Namenskonvention:**
```
ergebnisse/triage-[datum]-[vertragsart].md
z.B. ergebnisse/triage-20260909-dienstvertrag.md
```

---

## 11. Zeitplan

| Schritt | Aufwand | Abhängigkeit |
|---|---|---|
| Ansvar Gateway | 15 Min | Keine |
| PDF/DOCX-Unterstützung | 30 Min | LibreOffice/Pandoc |
| Skills aktualisieren | 20 Min | Ansvar Gateway |
| instructions.md | 10 Min | Keine |
| ergebnisse/ Verzeichnis | 2 Min | Keine |
| **Gesamt** | **~80 Min** | |
