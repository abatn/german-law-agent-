# Authentifizierungs-Analyse: Remote MCP-Server

> **Status:** ⚠️ Beide Remote MCP-Server erfordern OAuth-Authentifizierung
> **Erstellt am:** 09.09.2026

---

## Aktueller Stand

| Connector | Typ | Auth-Status | Konfiguration |
|---|---|---|---|
| `contract-check-filesystem` | local | ✅ Keine Auth nötig | Funktioniert sofort |
| `ansvar-german-law` | remote | ⚠️ **OAuth erforderlich** | Nur URL konfiguriert |
| `pdf-connector` | remote | ⚠️ **OAuth erforderlich** | Nur URL konfiguriert |

---

## Wie funktioniert OAuth bei Remote MCP-Servern?

### Standard-Ablauf (OAuth 2.1 + PKCE)

```
1. MCP-Client (opencode) sendet erste Anfrage an Remote Server
2. Server antwortet mit: "401 Unauthorized" + OAuth-Metadata
3. MCP-Client öffnet Browser für OAuth-Consent
4. User loggt sich ein und erteilt Zugriff
5. Server gibt Token zurück
6. MCP-Client speichert Token lokal
7. Zukünftige Anfragen senden Token mit
```

### Was passiert beim ersten Start?

```
Erster Aufruf von opencode:
  → opencode erkennt: "401 Unauthorized"
  → opencode öffnet Browser: https://gateway.ansvar.eu/authorize?...
  → User sieht: "Möchten Sie Contract-Check-Agent Zugriff erteilen?"
  → User klickt "Akzeptieren"
  → Token wird in ~/.config/opencode/ gespeichert
  → Ab jetzt funktionieren alle Anfragen
```

---

## Connector 1: Ansvar Gateway

### Daten aus Registry

| Feld | Wert |
|---|---|
| **Name** | `eu.ansvar/german-law` |
| **URL** | `https://gateway.ansvar.eu/de/mcp` |
| **Auth** | OAuth 2.1 mit Dynamic Client Registration |
| **Free Tier** | 100 Suchen/Tag, kein API-Key |
| **Premium** | Paid (Full-Fleet Fan-out, Case Law) |
| **EU-Hosting** | Hetner (Deutschland/Finnland) |

### Benötigte Tools

| Tool | Funktion | Auth nötig? |
|---|---|---|
| `validate_citation` | Zitat verifizieren (z.B. „§ 309 Nr. 7 lit. a BGB") | ✅ Ja |
| `search_legislation` | Volltextsuche über 91.843 Paragraphen | ✅ Ja |
| `get_provision` | Bestimmten Paragraphen abrufen | ✅ Ja |
| `get_eu_basis` | EU-Richtlinien für dt. Gesetze | ✅ Ja |
| `list_sources` | Datenherkunft anzeigen | ✅ Ja |

### Erwarteter Ablauf

```
1. opencode startet
2. Erster Aufruf: validate_citation("§ 309 Nr. 7 lit. a BGB")
3. Server antwortet: 401 + OAuth-Metadata
4. opencode öffnet Browser: https://gateway.ansvar.eu/authorize
5. User loggt sich ein (E-Mail-Adresse)
6. User klickt "Akzeptieren"
7. Token wird gespeichert
8. Nächster Aufruf funktioniert
```

### Was der User tun muss

1. **Browser öffnen** (wird automatisch von opencode geöffnet)
2. **E-Mail-Adresse eingeben** (B2B-Signup)
3. **Akzeptieren klicken**
4. **Fertig** – Token wird automatisch gespeichert

---

## Connector 2: PDF-Connector (PDFAssistant)

### Daten aus Registry

| Feld | Wert |
|---|---|
| **Name** | `ai.pdfassistant/pdfassistant` |
| **URL** | `https://chat.pdfassistant.ai/mcp` |
| **Auth** | OAuth (Browser-Flow) |
| **Features** | Convert, merge, compress, OCR, redact, sign PDFs |

### Benötigte Tools

| Tool | Funktion | Auth nötig? |
|---|---|---|
| `read_pdf` | PDF-Text extrahieren | ✅ Ja |
| `ocr_pdf` | OCR für gescannte PDFs | ✅ Ja |
| `merge_pdf` | PDFs zusammenführen | ✅ Ja |
| `compress_pdf` | PDF komprimieren | ✅ Ja |

### Erwarteter Ablauf

```
1. opencode startet
2. Erster Aufruf: read_pdf("vertrag.pdf")
3. Server antwortet: 401 + OAuth-Metadata
4. opencode öffnet Browser: https://chat.pdfassistant.ai/authorize
5. User loggt sich ein (Account erstellen oder einloggen)
6. User klickt "Akzeptieren"
7. Token wird gespeichert
8. Nächster Aufruf funktioniert
```

### Was der User tun muss

1. **Browser öffnen** (wird automatisch von opencode geöffnet)
2. **Account erstellen oder einloggen**
3. **Akzeptieren klicken**
4. **Fertig** – Token wird automatisch gespeichert

---

## Vergleich: Local vs. Remote MCP-Server

| Kriterium | Local (Filesystem) | Remote (Ansvar/PDF) |
|---|---|---|
| **Installation** | `npm install -g` | Keine (nur URL) |
| **Auth** | Keine | OAuth 2.1 |
| **Start** | Sofort | Erster Aufruf: Browser |
| **Token** | Nicht nötig | Wird lokal gespeichert |
| **Netzwerk** | Kein Internet nötig | Internet erforderlich |
| **Sicherheit** | Nur lokaler Zugriff | OAuth-geschützt |

---

## Zusammenfassung

### Was ist das Problem?

Beide Remote MCP-Server (`ansvar-german-law` und `pdf-connector`) erfordern OAuth-Authentifizierung. Die aktuelle Konfiguration in `opencode.json` enthält nur die URLs, aber keine Authentifizierungsinformationen.

### Wie wird das gelöst?

Der OAuth-Flow wird **automatisch** beim ersten Aufruf durchlaufen:
1. opencode sendet erste Anfrage
2. Server antwortet mit 401
3. opencode öffnet Browser
4. User loggt sich ein
5. Token wird gespeichert
6. Ab dann funktioniert alles

### Was muss der User tun?

**Nichts manuell konfigurieren!** Der OAuth-Flow läuft automatisch ab. Der User muss nur:
- Beim ersten Aufruf im Browser einloggen
- Akzeptieren klicken

### Was passiert, wenn der User NICHT einloggt?

- `ansvar-german-law`: Keine Quellenverifikation möglich
- `pdf-connector`: Keine PDF-Extraktion möglich
- `contract-check-filesystem`: Funktioniert weiterhin (kein OAuth nötig)

---

## Empfohlenes Vorgehen

### Sofort (kein Plan nötig)

Der OAuth-Flow läuft automatisch ab, wenn:
1. opencode gestartet wird
2. Der Agent einen Remote MCP-Server aufruft
3. Der Browser sich öffnet

### Nur wenn es NICHT funktioniert

Falls der Browser sich nicht öffnet oder der OAuth-Flow fehlschlägt:
1. Manuell im Browser öffnen: `https://gateway.ansvar.eu/authorize`
2. Oder: `https://chat.pdfassistant.ai/authorize`
3. Einloggen und Akzeptieren klicken
4. Token manuell in `~/.config/opencode/` speichern

---

*Erstellt am 09.09.2026 von Buffy (Codebuff)*
*Status: Analyse abgeschlossen – keine Modifikationen ohne User-Zustimmung*
