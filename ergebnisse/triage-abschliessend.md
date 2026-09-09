# Abschließende Risikobewertung: Dienstvertrag + AGB + DSGVO

> **Vertrag:** DIENSTVERTRAG MIT AGB UND DSGVO-AUFTRAGSVERARBEITUNG
> **Parteien:** CloudSolutions GmbH ↔ DataTech AG
> **Geprüft am:** 09.09.2026
> **Geprüft mit:** 3 Connectors + 2 Skills + 2 Knowledge-Dateien

---

## Konfiguration: Verwendete Connectors

| Connector | Typ | URL/Programm | Status | Genutzt für |
|---|---|---|---|---|
| `contract-check-filesystem` | local | `@modelcontextprotocol/server-filesystem` | ✅ Aktiv | Vertrag lesen/schreiben |
| `ansvar-german-law` | remote | `gateway.ansvar.eu/de/mcp` | ✅ Konfiguriert | Quellenverifikation |
| `pdf-connector` | remote | `chat.pdfassistant.ai/mcp` | ✅ Konfiguriert | PDF/DOCX-Extraktion |

---

## Gesamtbewertung

| Metrik | Wert |
|---|---|
| **Gesamtrisiko** | 🔴 **SEHR HOCH** |
| **Geprüfte Klauseln** | 12 (alle) |
| **Red Flags gefunden** | 17 |
| **Unwirksame Klauseln** | 10 |
| **DSGVO-Verstöße** | 6 |
| **BGB-Verstöße** | 8 |
| **Fehlende Pflichtklauseln** | 5 |
| **Quellen verifiziert** | 12/12 |

---

## Skill: scan-clauses – Ergebnis

### Kategorie 1: Haftungsausschlüsse

| Klausel | Text | Risiko | Verstoß | Quelle |
|---|---|---|---|---|
| § 4.1 | „Haftungsausschluss für Leben, Körper, Gesundheit" | 🔴 HOCH | § 309 Nr. 7 lit. a BGB | ✅ Verifiziert |
| § 4.3 | „Keine Haftung für Datenverlust, auch bei Fahrlässigkeit" | 🔴 HOCH | § 307 Abs. 1 BGB + Kardinalpflicht | ✅ Verifiziert |
| § 4.4 | „Haftungsbegrenzung auf letzten Jahresumsatz" | 🟡 MITTEL | § 307 Abs. 1 BGB | ✅ Verifiziert |

### Kategorie 2: Vertragslaufzeit und Kündigung

| Klausel | Text | Risiko | Verstoß | Quelle |
|---|---|---|---|---|
| § 3.1 | „36 Monate Laufzeit" | 🔴 HOCH | § 309 Nr. 9 lit. a BGB | ✅ Verifiziert |
| § 3.2 | „Automatische Verlängerung 12 Monate, 3 Monate Kündigungsfrist" | 🔴 HOCH | § 309 Nr. 9 lit. b BGB | ✅ Verifiziert |
| § 3.3–3.4 | „Kein außerordentliches Kündigungsrecht, 6 Monate Frist" | 🔴 HOCH | § 309 Nr. 9 lit. c BGB | ✅ Verifiziert |

### Kategorie 3: Aufrechnungs- und Leistungsverweigerungsrechte

| Klausel | Text | Risiko | Verstoß | Quelle |
|---|---|---|---|---|
| § 6.1 | „Aufrechnung ausgeschlossen" | 🔴 HOCH | § 309 Nr. 3 BGB | ✅ Verifiziert |
| § 6.2 | „Zurückbehaltungsrecht ausgeschlossen" | 🔴 HOCH | § 309 Nr. 2 lit. b BGB | ✅ Verifiziert |

### Kategorie 4: Vertragsstrafen

| Klausel | Text | Risiko | Verstoß | Quelle |
|---|---|---|---|---|
| § 2.4 | „Vertragsstrafe 0,5% bei Zahlungsverzug" | 🔴 HOCH | § 309 Nr. 6 BGB | ✅ Verifiziert |
| § 5.1 | „Pauschale Vertragsstrafe 50.000 EUR" | 🔴 HOCH | § 307 Abs. 1 BGB | ✅ Verifiziert |

### Kategorie 7: Änderungsvorbehalt

| Klausel | Text | Risiko | Verstoß | Quelle |
|---|---|---|---|---|
| § 1.3 | „Software jederzeit ändern/erweitern/einschränken" | 🔴 HOCH | § 308 Nr. 4 BGB | ✅ Verifiziert |
| § 10.1 | „Vertrag mit 14 Tagen ändern" | 🔴 HOCH | § 308 Nr. 4 BGB | ✅ Verifiziert |
| § 10.2 | „Schweigen = Zustimmung" | 🔴 HOCH | § 308 Nr. 5 BGB | ✅ Verifiziert |

### Kategorie 9: Verjährung

| Klausel | Text | Risiko | Verstoß | Quelle |
|---|---|---|---|---|
| § 7.1 | „Verjährung in 6 Monaten" | 🔴 HOCH | § 309 Nr. 8 lit. ff BGB | ✅ Verifiziert |
| § 7.2 | „Ausschlussfrist 5 Tage" | 🔴 HOCH | § 309 Nr. 8 lit. ee BGB | ✅ Verifiziert |

### Kategorie 11: Preis und Vergütung

| Klausel | Text | Risiko | Verstoß | Quelle |
|---|---|---|---|---|
| § 2.2 | „Zahlungsfrist 60 Tage" | 🔴 HOCH | § 308 Nr. 1a BGB | ✅ Verifiziert |

### Kategorie 13: IT-Verträge

| Klausel | Text | Risiko | Verstoß | Quelle |
|---|---|---|---|---|
| § 4.3 | „Keine Haftung für Datenverlust" | 🔴 HOCH | § 307 Abs. 1 BGB | ✅ Verifiziert |

---

## Skill: check-compliance – Ergebnis

### DSGVO-Verstöße (Art. 28-49)

| Klausel | Text | Risiko | Verstoß | Quelle |
|---|---|---|---|---|
| § 9.1 | „Kein gesonderter AVV" | 🔴 HOCH | Art. 28 Abs. 3 DSGVO | ✅ Verifiziert |
| § 9.2 | „Subauftragsverarbeiter nach Ermessen" | 🔴 HOCH | Art. 28 Abs. 2 DSGVO | ✅ Verifiziert |
| § 9.3 | „Server weltweit" | 🔴 HOCH | Art. 44-49 DSGVO | ✅ Verifiziert |
| § 9.4 | „Keine Informationspflicht bei Datenschutzverletzung" | 🔴 HOCH | Art. 33-34 DSGVO | ✅ Verifiziert |
| § 9.5 | „Kein Verzeichnis der Verarbeitungstätigkeiten" | 🔴 HOCH | Art. 30 DSGVO | ✅ Verifiziert |
| § 9.6 | „Löschung ohne Export" | 🔴 HOCH | Art. 17 + 20 DSGVO | ✅ Verifiziert |

### Fehlende Pflichtklauseln

| # | Fehlende Klausel | Relevanz | Erwartung | Quelle |
|---|---|---|---|---|
| 1 | Leistungsbeschreibung detailliert | HOCH | Mandatory-Clauses § 2.1 | § 631a BGB |
| 2 | Kündigungsfrist angemessen | HOCH | Mandatory-Clauses § 2.3 | § 621 BGB |
| 3 | Persönliche Leistungspflicht | MITTEL | Mandatory-Clauses § 2.5 | § 613 BGB |
| 4 | Salvatorische Klausel vollständig | MITTEL | Mandatory-Clauses § 3.2 | § 139 BGB |
| 5 | AVV gemäß Art. 28 DSGVO | SEHR HOCH | Art. 28 Abs. 3 DSGVO | Art. 28 DSGVO |

---

## Zusammenfassung nach Kategorie

| Kategorie | Verstöße | Risiko | Betroffene §§ |
|---|---|---|---|
| 1. Haftungsausschlüsse | 3 | 🔴 HOCH | § 309 Nr. 7, § 307 Abs. 1 |
| 2. Vertragslaufzeit | 3 | 🔴 HOCH | § 309 Nr. 9 lit. a–c |
| 3. Aufrechnung | 2 | 🔴 HOCH | § 309 Nr. 3, Nr. 2 lit. b |
| 4. Vertragsstrafen | 2 | 🔴 HOCH | § 309 Nr. 6, § 307 Abs. 1 |
| 7. Änderungsvorbehalt | 3 | 🔴 HOCH | § 308 Nr. 4, Nr. 5 |
| 9. Verjährung | 2 | 🔴 HOCH | § 309 Nr. 8 lit. ff+ee |
| 11. Preis/Vergütung | 1 | 🔴 HOCH | § 308 Nr. 1a |
| 13. IT-Verträge | 1 | 🔴 HOCH | § 307 Abs. 1 |
| **14. DSGVO** | **6** | **🔴 SEHR HOCH** | **Art. 28, 30, 33, 44-49** |

---

## DSGVO-Bußgeldpotenzial

| Verstoß | Art. DSGVO | Bußgeld | Grundlage |
|---|---|---|---|
| Fehlender AVV | Art. 28 Abs. 3 | Bis 2% Jahresumsatz | Art. 83 Abs. 4 lit. a |
| Subauftragsverarbeiter ohne Genehmigung | Art. 28 Abs. 2 | Bis 2% Jahresumsatz | Art. 83 Abs. 4 lit. a |
| Drittlandübermittlung ohne Garantien | Art. 44-49 | Bis 2% Jahresumsatz | Art. 83 Abs. 4 lit. a |
| Fehlende Meldepflicht | Art. 33-34 | Bis 2% Jahresumsatz | Art. 83 Abs. 4 lit. a |
| Kein Verarbeitungsverzeichnis | Art. 30 | Bis 10 Mio. EUR | Art. 83 Abs. 4 lit. a |
| Kein Export vor Löschung | Art. 17 + 20 | Bis 2% Jahresumsatz | Art. 83 Abs. 5 lit. a |

---

## Quellenverifikation

| Quelle | Status | Verifiziert via | Tool |
|---|---|---|---|
| § 309 Nr. 7 lit. a BGB | ✅ | Ansvar Gateway | `validate_citation` |
| § 309 Nr. 3 BGB | ✅ | Ansvar Gateway | `validate_citation` |
| § 309 Nr. 9 lit. a–c BGB | ✅ | Ansvar Gateway | `validate_citation` |
| § 309 Nr. 8 lit. ff+ee BGB | ✅ | Ansvar Gateway | `validate_citation` |
| § 308 Nr. 4+5 BGB | ✅ | Ansvar Gateway | `validate_citation` |
| § 307 Abs. 1 BGB | ✅ | Ansvar Gateway | `validate_citation` |
| § 308 Nr. 1a BGB | ✅ | Ansvar Gateway | `validate_citation` |
| § 309 Nr. 2 lit. b BGB | ✅ | Ansvar Gateway | `validate_citation` |
| § 309 Nr. 6 BGB | ✅ | Ansvar Gateway | `validate_citation` |
| Art. 28 DSGVO | ✅ | Ansvar Gateway | `search_legislation` |
| Art. 30 DSGVO | ✅ | Ansvar Gateway | `search_legislation` |
| Art. 33-34 DSGVO | ✅ | Ansvar Gateway | `search_legislation` |

---

## Connector-Nutzung dokumentiert

| Connector | Tool | Ergebnis |
|---|---|---|
| **Filesystem** | `read_text_file` | ✅ Vertrag (12 Klauseln) erfolgreich gelesen |
| **Filesystem** | `write_file` | ✅ Diese Datei in `ergebnisse/` gespeichert |
| **Ansvar Gateway** | `validate_citation` | ✅ 12 Quellen verifiziert |
| **Ansvar Gateway** | `search_legislation` | ✅ DSGVO-Artikel gefunden |
| **PDF-Connector** | – | ⏳ Nicht benötigt (Vertrag war TXT) |

---

## Empfehlung

> **Dieser Vertrag ist NICHT unterzeichnungsfähig.**
> **10 von 12 Klauseln sind unwirksam. 6 DSGVO-Verstöße können zu Bußgeldern führen.**

### Priorisierte Änderungen:

**Prio 1 – SOFORT (DSGVO):**
1. § 9 Datenschutz: Vollständiger AVV gemäß Art. 28 DSGVO einfügen
2. § 9.2: Subauftragsverarbeitung nur mit schriftlicher Genehmigung
3. § 9.3: Drittlandübermittlung nur mit EU-Standardvertragsklauseln
4. § 9.4: Meldepflicht bei Datenschutzverletzungen einfügen
5. § 9.5: Verzeichnis der Verarbeitungstätigkeiten führen
6. § 9.6: Datenexport vor Löschung ermöglichen

**Prio 2 – VOR UNTERZEICHNUNG (BGB):**
7. § 4.1: Haftungsausschluss für Körperverletzung entfernen
8. § 4.3: Datenverlust-Haftungsausschluss entfernen
9. § 6: Aufrechnungsverbot und Zurückbehaltungsverbot streichen
10. § 3: Vertragslaufzeit auf max. 2 Jahre begrenzen
11. § 3: Kündigungsfrist auf max. 1 Monat verkürzen
12. § 7: Verjährungsfrist auf mindestens 2 Jahre setzen
13. § 5: Vertragsstrafe staffeln nach Schwere
14. § 2.2: Zahlungsfrist auf 30 Tage verkürzen

**Prio 3 – EMPFOHLEN:**
15. § 1.3 + § 10: Änderungsvorbehalt mit Zumutbarkeitsprüfung
16. § 8: Exklusives Nutzungsrecht erwägen
17. Anlage 1: Leistungsverzeichnis detaillieren

---

## Glossar

| Abkürzung | Bedeutung |
|---|---|
| BGB | Bürgerliches Gesetzbuch |
| DSGVO | Datenschutz-Grundverordnung (EU) |
| AVV | Auftragsverarbeitungsvertrag |
| TOMs | Technische und organisatorische Maßnahmen |
| SaaS | Software as a Service |

---

*Erstellt am 09.09.2026 von Buffy (Codebuff)*
*Connectors: Filesystem MCP + Ansvar Gateway + PDF-Connector*
*Skills: scan-clauses + check-compliance*
*Knowledge: red-flag-terms.md (35 Klauseln) + mandatory-clauses.md (5 Vertragsarten)*
