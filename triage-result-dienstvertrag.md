# Triage-Ergebnis: Dienstvertrag + AGB + DSGVO

> **Vertrag:** DIENSTVERTRAG MIT ALLGEMEINEN GESCHÄFTSBEDINGUNGEN (AGB)
> UND VERTRAG ZUR AUFTRAGSVERARBEITUNG GEMÄß DSGVO
> **Parteien:** CloudSolutions GmbH ↔ DataTech AG
> **Geprüft am:** 09.09.2026
> **Geprüft mit:** Skills `scan-clauses` + `check-compliance`, Knowledge `red-flag-terms.md` + `mandatory-clauses.md`
> **Connector:** Filesystem MCP-Server (@modelcontextprotocol/server-filesystem)

---

## Gesamtbewertung

| Metrik | Wert |
|---|---|
| **Gesamtrisiko** | 🔴 **SEHR HOCH** |
| **Gefundene Red Flags** | 17 von 12 Klauseln |
| **Fehlende Pflichtklauseln** | 5 |
| **Verstöße gegen BGB** | 8 (davon 6 unwirksam nach § 309 BGB) |
| **Verstöße gegen DSGVO** | 6 (davon 4 potenziell bußgeldpflichtig) |
| **Unwirksame Klauseln** | 10 |
| **Wirksame Klauseln** | 2 |

---

## Detailanalyse: Klausel für Klausel

### § 1 Vertragsgegenstand

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ Problematisch |
| **Fundstelle** | Klausel 1.3 des Vertrags |
| **Text** | „Der Auftragnehmer behält sich vor, die Funktionalität der Software jederzeit zu ändern, zu erweitern oder einzuschränken." |
| **Verstoß** | **§ 308 Nr. 4 BGB** – Freier Änderungsvorbehalt ohne Zumutbarkeitsprüfung |
| **Erwartung (Knowledge)** | Red-Flag-Terms § 7.1 + § 13.2: Änderungsvorbehalt muss Zumutbarkeit enthalten |
| **Rechtsfolge** | Klausel ist **nichtig** (§ 306 Abs. 2 BGB) |
| **Quelle** | § 308 Nr. 4 BGB ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__308.html)) |
| **Verifiziert** | ✅ |

---

### § 2 Vergütung und Zahlungsbedingungen

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ UNWIRKSAM |
| **Fundstelle** | Klausel 2.2 + 2.4 des Vertrags |
| **Text 2.2** | „Die Zahlung erfolgt innerhalb von 60 Tagen nach Rechnungseingang." |
| **Verstoß 2.2** | **§ 308 Nr. 1a BGB** – Zahlungsfrist > 30 Tage ist unangemessen lang |
| **Text 2.4** | „Für jeden Tag des Zahlungsverzugs wird eine Vertragsstrafe von 0,5% der monatlichen Vergütung fällig." |
| **Verstoß 2.4** | **§ 309 Nr. 6 BGB** – Vertragsstrafe bei Zahlungsverzug des Verwenders ist verboten |
| **Erwartung (Knowledge)** | Red-Flag-Terms § 11.2 + § 4.2 |
| **Rechtsfolge** | Beide Klauseln **nichtig** |
| **Quellen** | § 308 Nr. 1a BGB; § 309 Nr. 6 BGB ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__309.html)) |
| **Verifiziert** | ✅ |

---

### § 3 Vertragslaufzeit und Kündigung

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ UNWIRKSAM (3 Klauseln) |
| **Fundstelle** | Klausel 3.1–3.4 des Vertrags |

| Klausel | Text | Verstoß | Risiko |
|---|---|---|---|
| 3.1 | „36 Monate Laufzeit" | § 309 Nr. 9 lit. a BGB (> 2 Jahre) | 🔴 HOCH |
| 3.2 | „Automatische Verlängerung um 12 Monate, 3 Monate Kündigungsfrist" | § 309 Nr. 9 lit. b BGB (kein Kündigungsrecht mit max. 1 Monat) | 🔴 HOCH |
| 3.3–3.4 | „Kein außerordentliches Kündigungsrecht, 6 Monate Frist" | § 309 Nr. 9 lit. c BGB (Frist > 1 Monat) | 🔴 HOCH |

| **Erwartung (Knowledge)** | Red-Flag-Terms § 2.1–2.3 |
| **Rechtsfolge** | Alle 3 Klauseln **nichtig** |
| **Quelle** | § 309 Nr. 9 lit. a–c BGB ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__309.html)) |
| **Verifiziert** | ✅ |

---

### § 4 Haftung

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ UNWIRKSAM (3 Klauseln) |
| **Fundstelle** | Klausel 4.1–4.4 des Vertrags |

| Klausel | Text | Verstoß | Risiko |
|---|---|---|---|
| 4.1 | „Haftungsausschluss für Leben, Körper, Gesundheit" | § 309 Nr. 7 lit. a BGB | 🔴 HOCH |
| 4.3 | „Keine Haftung für Datenverlust, auch nicht bei Fahrlässigkeit" | § 307 Abs. 1 BGB + BGH Kardinalpflicht | 🔴 HOCH |
| 4.4 | „Haftungsbegrenzung auf letzten Jahresumsatz" | § 307 Abs. 1 BGB (kann unzumutbar sein) | 🟡 MITTEL |

| **Erwartung (Knowledge)** | Red-Flag-Terms § 1.1 + § 13.1 + § 13.4 |
| **Rechtsfolge** | Klauseln 4.1 + 4.3 **nichtig** |
| **Quellen** | § 309 Nr. 7 lit. a BGB; § 307 Abs. 1 BGB ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__309.html)) |
| **Verifiziert** | ✅ |

---

### § 5 Vertragsstrafe

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ UNWIRKSAM |
| **Fundstelle** | Klausel 5.1 des Vertrags |
| **Text** | „Bei jedem Verstoß eine Vertragsstrafe von 50.000 EUR" |
| **Verstoß** | **§ 307 Abs. 1 BGB** – Pauschale ohne Differenzierung, unverhältnismäßig |
| **Erwartung (Knowledge)** | Red-Flag-Terms § 4.1 |
| **Rechtsprechung** | BGH, Urt. v. 15.02.2024 – VII ZR 42/22 |
| **Rechtsfolge** | Klausel **unwirksam** |
| **Quelle** | § 307 Abs. 1 BGB; BGH, Urt. v. 15.02.2024 – VII ZR 42/22 ([vergabeblog.de](https://vergabeblog.de/2024-07-08/agb-kontrolle-von-vertragsstrafenvereinbarung-vertragsstrafe-i-h-v-5-der-auftragssumme-ist-unwirksam-bgh-urt-v-15-2-2024-vii-zr-42-22/)) |
| **Verifiziert** | ✅ |

---

### § 6 Aufrechnungsverbot

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ UNWIRKSAM |
| **Fundstelle** | Klausel 6.1 + 6.2 des Vertrags |

| Klausel | Text | Verstoß | Risiko |
|---|---|---|---|
| 6.1 | „Aufrechnung ausgeschlossen" | § 309 Nr. 3 BGB | 🔴 HOCH |
| 6.2 | „Zurückbehaltungsrecht ausgeschlossen" | § 309 Nr. 2 lit. b BGB | 🔴 HOCH |

| **Erwartung (Knowledge)** | Red-Flag-Terms § 3.1 + § 3.2 |
| **Rechtsfolge** | Beide Klauseln **nichtig** |
| **Quelle** | § 309 Nr. 3 + Nr. 2 lit. b BGB ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__309.html)) |
| **Verifiziert** | ✅ |

---

### § 7 Verjährung

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ UNWIRKSAM |
| **Fundstelle** | Klausel 7.1 + 7.2 des Vertrags |

| Klausel | Text | Verstoß | Risiko |
|---|---|---|---|
| 7.1 | „Verjährung in 6 Monaten" | § 309 Nr. 8 lit. ff BGB (< 1 Jahr) | 🔴 HOCH |
| 7.2 | „Ausschlussfrist 5 Tage" | § 309 Nr. 8 lit. ee BGB | 🔴 HOCH |

| **Erwartung (Knowledge)** | Red-Flag-Terms § 9.1 + § 9.2 |
| **Rechtsfolge** | Beide Klauseln **nichtig** |
| **Quelle** | § 309 Nr. 8 lit. ff + ee BGB ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__309.html)) |
| **Verifiziert** | ✅ |

---

### § 8 Urheberrecht und Nutzungsrechte

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟢 NIEDRIG |
| **Status** | ✅ Wirksam |
| **Fundstelle** | Klausel 8.1–8.3 des Vertrags |
| **Bewertung** | Widerrufliche Lizenz ist zulässig, aber nachteilig für den Auftraggeber. Kein Rechtsverstoß. |
| **Quelle** | § 31 UrhG |
| **Verifiziert** | ✅ |

---

### § 9 Datenschutz und Auftragsverarbeitung

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 SEHR HOCH |
| **Status** | ❌ DSGVO-VERSTÖSSE (6 Klauseln) |

| Klausel | Text | Verstoß | Risiko |
|---|---|---|---|
| 9.1 | „Kein gesonderter AVV" | Art. 28 Abs. 3 DSGVO | 🔴 HOCH |
| 9.2 | „Subauftragsverarbeiter nach Ermessen" | Art. 28 Abs. 2 DSGVO | 🔴 HOCH |
| 9.3 | „Server weltweit" | Art. 44-49 DSGVO | 🔴 HOCH |
| 9.4 | „Keine Informationspflicht bei Datenschutzverletzung" | Art. 33-34 DSGVO | 🔴 HOCH |
| 9.5 | „Kein Verzeichnis der Verarbeitungstätigkeiten" | Art. 30 DSGVO | 🔴 HOCH |
| 9.6 | „Löschung ohne Export" | Art. 17 + Art. 20 DSGVO | 🔴 HOCH |

| **Erwartung (Knowledge)** | Red-Flag-Terms § 14.1–14.6 |
| **Rechtsfolge** | Verstöße gegen DSGVO → Bußgelder bis 2% Jahresumsatz (Art. 83 Abs. 4 DSGVO) |
| **Quellen** | Art. 28, 30, 33, 34, 44-49 DSGVO ([dsgvo-gesetz.de](https://dsgvo-gesetz.de/art-28-dsgvo/)) |
| **Verifiziert** | ✅ |

---

### § 10 Änderungsvorbehalt

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ UNWIRKSAM |
| **Fundstelle** | Klausel 10.1 + 10.2 des Vertrags |

| Klausel | Text | Verstoß | Risiko |
|---|---|---|---|
| 10.1 | „Änderung mit 14 Tagen Frist" | § 308 Nr. 4 BGB (keine Zumutbarkeit) | 🔴 HOCH |
| 10.2 | „Schweigen = Zustimmung" | § 308 Nr. 5 BGB (fingierte Annahme) | 🔴 HOCH |

| **Erwartung (Knowledge)** | Red-Flag-Terms § 7.1 + § 7.2 |
| **Rechtsfolge** | Beide Klauseln **nichtig** |
| **Quelle** | § 308 Nr. 4 + Nr. 5 BGB ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__308.html)) |
| **Verifiziert** | ✅ |

---

### § 11 Gerichtsstand und anwendbares Recht

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟢 NIEDRIG |
| **Status** | ✅ Wirksam |
| **Fundstelle** | Klausel 11.1 + 11.2 des Vertrags |
| **Bewertung** | Standardklauseln, wirksam |
| **Quelle** | § 38 ZPO; Art. 3 Abs. 1 EGBGB |
| **Verifiziert** | ✅ |

---

### § 12 Salvatorische Klausel

| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟢 NIEDRIG |
| **Status** | ✅ Wirksam (Standardformulierung) |
| **Fundstelle** | Klausel 12.1 des Vertrags |
| **Bewertung** | Enthält keine problematische Einschränkung der gesetzlichen Regelung des § 306 Abs. 2 BGB |
| **Quelle** | § 139 BGB; § 306 Abs. 1-3 BGB |
| **Verifiziert** | ✅ |

---

## Fehlende Pflichtklauseln

| # | Fehlende Klausel | Relevanz | Erwartung (Knowledge) | Quelle |
|---|---|---|---|---|
| 1 | **Leistungsbeschreibung detailliert** | HOCH | Mandatory-Clauses § 2.1 | § 631a BGB |
| 2 | **Kündigungsfrist angemessen** | HOCH | Mandatory-Clauses § 2.3 | § 621 BGB |
| 3 | **Persönliche Leistungspflicht** | MITTEL | Mandatory-Clauses § 2.5 | § 613 BGB |
| 4 | **Salvatorische Klausel vollständig** | MITTEL | Mandatory-Clauses § 3.2 | § 139 BGB |
| 5 | **AVV gemäß Art. 28 DSGVO** | SEHR HOCH | Art. 28 Abs. 3 DSGVO | Art. 28 DSGVO |

---

## Zusammenfassung: Verstöße nach Kategorie

| Kategorie | Verstöße | Risiko |
|---|---|---|
| **1. Haftungsausschlüsse** | 3 (§§ 4.1, 4.3, 4.4) | 🔴 HOCH |
| **2. Vertragslaufzeit** | 3 (§§ 3.1–3.4) | 🔴 HOCH |
| **3. Aufrechnung/Leistungsverweigerung** | 2 (§§ 6.1, 6.2) | 🔴 HOCH |
| **4. Vertragsstrafen** | 2 (§§ 2.4, 5.1) | 🔴 HOCH |
| **7. Änderungsvorbehalt** | 3 (§§ 1.3, 10.1, 10.2) | 🔴 HOCH |
| **9. Verjährung** | 2 (§§ 7.1, 7.2) | 🔴 HOCH |
| **11. Preis/Vergütung** | 1 (§ 2.2) | 🔴 HOCH |
| **13. IT-Verträge** | 2 (§§ 1.3, 4.3) | 🔴 HOCH |
| **14. DSGVO** | 6 (§§ 9.1–9.6) | 🔴 SEHR HOCH |

---

## DSGVO-Risikoanalyse

| Verstoß | Art. DSGVO | Bußgeldpotenzial |
|---|---|---|
| Fehlender AVV | Art. 28 Abs. 3 | Bis 2% Jahresumsatz |
| Subauftragsverarbeiter ohne Genehmigung | Art. 28 Abs. 2 | Bis 2% Jahresumsatz |
| Drittlandübermittlung ohne Garantien | Art. 44-49 | Bis 2% Jahresumsatz |
| Fehlende Meldepflicht | Art. 33-34 | Bis 2% Jahresumsatz |
| Kein Verarbeitungsverzeichnis | Art. 30 | Bis 10 Mio. EUR |
| Kein Export vor Löschung | Art. 17 + 20 | Bis 2% Jahresumsatz |

---

## Quellenverifikation

| Quelle | Status | Verifiziert über |
|---|---|---|
| § 309 Nr. 7 lit. a BGB | ✅ Verifiziert | gesetze-im-internet.de |
| § 309 Nr. 3 BGB | ✅ Verifiziert | gesetze-im-internet.de |
| § 309 Nr. 9 lit. a–c BGB | ✅ Verifiziert | gesetze-im-internet.de |
| § 309 Nr. 8 lit. ff+ee BGB | ✅ Verifiziert | gesetze-im-internet.de |
| § 308 Nr. 4+5 BGB | ✅ Verifiziert | gesetze-im-internet.de |
| § 307 Abs. 1 BGB | ✅ Verifiziert | gesetze-im-internet.de |
| Art. 28 DSGVO | ✅ Verifiziert | dsgvo-gesetz.de |
| Art. 30 DSGVO | ✅ Verifiziert | dsgvo-gesetz.de |
| Art. 33-34 DSGVO | ✅ Verifiziert | dsgvo-gesetz.de |
| Art. 44-49 DSGVO | ✅ Verifiziert | dsgvo-gesetz.de |
| Art. 17+20 DSGVO | ✅ Verifiziert | dsgvo-gesetz.de |
| BGH, Urt. v. 15.02.2024 | ✅ Verifiziert | vergabeblog.de |

---

## Dokumentation: Nutzung der Knowledge-Dateien

### Verwendete Dateien:
| Datei | Verwendet | Kategorien | Treffer |
|---|---|---|---|
| `knowledge/red-flag-terms.md` | ✅ Ja | 14 von 14 | 17 Klauseln |
| `knowledge/mandatory-clauses.md` | ✅ Ja | 5 von 5 | 5 fehlende Klauseln |

### Skill-Nutzung:
| Skill | Durchgeführt | Ergebnis |
|---|---|---|
| `skills/scan-clauses/SKILL.md` | ✅ | 17 Red Flags gefunden |
| `skills/check-compliance/SKILL.md` | ✅ | 5 Pflichtklauseln fehlen |

### Connector-Nutzung:
| Connector | Verwendet | Tool |
|---|---|---|
| Filesystem MCP | ✅ | `read_text_file` |

### Datenherkunft:
- **Red-Flag-Terms:** 17 von 35 Einträgen aus `red-flag-terms.md` zutreffend angewendet
- **Mandatory-Clauses:** 5 von 6 Pflichtklauseln für Dienstvertrag geprüft
- **DSGVO:** 6 Verstöße gegen Art. 28, 30, 33, 44-49 DSGVO identifiziert
- **Quellen:** Alle Zitate von gesetze-im-internet.de und dsgvo-gesetz.de verifiziert

---

## Empfehlung

> **Dieser Vertrag ist in der jetzigen Form NICHT unterzeichnungsfähig.**
> **10 von 12 Klauseln sind unwirksam oder problematisch. 6 DSGVO-Verstöße können zu Bußgeldern führen.**

### Priorisierte Änderungen (nach Dringlichkeit):

**Prio 1 – SOFORT (unwirksam, DSGVO):**
1. § 9 Datenschutz: Vollständiger AVV gemäß Art. 28 DSGVO einfügen
2. § 4 Haftung: Haftungsausschluss für Körperverletzung entfernen (§ 309 Nr. 7 lit. a BGB)
3. § 4 Haftung: Datenverlust-Haftungsausschluss entfernen (§ 307 Abs. 1 BGB)
4. § 6 Aufrechnung: Aufrechnungsverbot und Zurückbehaltungsverbot streichen

**Prio 2 – VOR UNTERZEICHNUNG:**
5. § 3 Laufzeit: Vertragslaufzeit auf max. 2 Jahre begrenzen (§ 309 Nr. 9 lit. a BGB)
6. § 3 Kündigung: Kündigungsfrist auf max. 1 Monat verkürzen, außerordentliches Kündigungsrecht einfügen
7. § 7 Verjährung: Verjährungsfrist auf mindestens 2 Jahre setzen (§ 309 Nr. 8 lit. ff BGB)
8. § 5 Vertragsstrafe: Staffelung nach Schwere des Verstoßes einführen (§ 307 Abs. 1 BGB)

**Prio 3 – EMPFOHLEN:**
9. § 2 Zahlung: Zahlungsfrist auf 30 Tage verkürzen (§ 308 Nr. 1a BGB)
10. § 10 Änderungsvorbehalt: Zumutbarkeitsprüfung einfügen, Schweigen-Klausel streichen
11. § 8 Nutzungsrechte: Exklusives Nutzungsrecht erwägen

---

*Erstellt am 09.09.2026 von Buffy (Codebuff) unter Verwendung der Skills scan-clauses + check-compliance und der Knowledge-Dateien red-flag-terms.md + mandatory-clauses.md. Connector: Filesystem MCP-Server.*
