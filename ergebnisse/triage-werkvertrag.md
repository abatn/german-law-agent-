# TRIAGE WERKVERTRAG – Klausel-Scan & Compliance-Check

**Datum:** 09.09.2026  
**Vertragsart:** Werkvertrag (§§ 631–650 BGB)  
**Vertragsdatei:** test-werkvertrag.txt  
**Geprüft von:** Contract-Check-Agent

---

## 1. SCAN-CLAUSES (Red-Flag-Analyse)

### Gefundene problematische Klauseln

| # | Klausel | Fundstelle | Risiko | Begründung | Quelle |
|---|---------|------------|--------|------------|--------|
| 1 | „Für jeden Tag des Zahlungsverzugs des Auftraggebers wird eine Vertragsstrafe von 1% der Auftragssumme fällig." | § 2.4 | **HOCH** | Vertragsstrafe bei Zahlungsverzug des Verwenders ist verboten nach § 309 Nr. 6 BGB. | § 309 Nr. 6 BGB |
| 2 | „Der Auftragnehmer behält sich vor, die Leistung nach eigenem Ermessen zu ändern oder von ihr abzuweichen, wenn dies erforderlich ist." | § 3.4 | **HOCH** | Freier Änderungsvorbehalt ist unwirksam nach § 308 Nr. 4 BGB. | § 308 Nr. 4 BGB |
| 3 | „Schweigen gilt als Abnahme." | § 4.3 | **HOCH** | Fingierte Annahme ist unwirksam nach § 308 Nr. 5 BGB. | § 308 Nr. 5 BGB |
| 4 | „Das Zurückbehaltungsrecht wird ausgeschlossen. Der Auftraggeber hat auch bei Mängeln in voller Höhe zu leisten." | § 4.4 | **HOCH** | Einschränkung des Zurückbehaltungsrechts ist unwirksam nach § 309 Nr. 2 lit. b BGB. | § 309 Nr. 2 lit. b BGB |
| 5 | „Der Auftragnehmer trägt die Darlegungs- und Beweislast für die ordnungsgemäße Erfüllung seiner Leistungspflichten." | § 5.4 | **HOCH** | Beweislastumkehr ist unwirksam nach § 309 Nr. 12 lit. a BGB. | § 309 Nr. 12 lit. a BGB |
| 6 | „Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit wird ausgeschlossen." | § 6.1 | **HOCH** | Haftungsausschluss für Leben, Körper, Gesundheit ist immer unwirksam nach § 309 Nr. 7 lit. a BGB. | § 309 Nr. 7 lit. a BGB |
| 7 | „Die Haftung bei grobem Verschulden wird begrenzt auf die Auftragssumme." | § 6.2 | **HOCH** | Begrenzung der Haftung bei grobem Verschulden ist verboten nach § 309 Nr. 7 lit. b BGB. | § 309 Nr. 7 lit. b BGB |
| 8 | „Das Recht zur außerordentlichen Kündigung besteht nicht." | § 7.1 | **HOCH** | Ausschluss des außerordentlichen Kündigungsrechts ist unzulässig. | § 626 BGB |
| 9 | „Eine ordentliche Kündigung ist nur mit einer Frist von 6 Monaten zum Quartalsende möglich." | § 7.2 | **HOCH** | Überlange Kündigungsfrist ist unwirksam nach § 309 Nr. 9 lit. c BGB. | § 309 Nr. 9 lit. c BGB |
| 10 | „Bei jedem Verstoß gegen eine Bestimmung dieses Vertrags ist eine Vertragsstrafe in Höhe von 25.000 EUR fällig." | § 8.1 | **MITTEL** | Pauschale Vertragsstrafe kann nach § 307 Abs. 1 BGB unwirksam sein, wenn sie nicht nach Schwere des Verstoßes differenziert. | § 307 Abs. 1 BGB |
| 11 | „Eine Aufrechnung mit Ansprüchen gegen den Auftragnehmer ist ausgeschlossen." | § 8.2 | **HOCH** | Aufrechnungsverbot ist unwirksam nach § 309 Nr. 3 BGB. | § 309 Nr. 3 BGB |

### Risikobewertung Gesamt
- **HOCH:** 10 Klauseln
- **MITTEL:** 1 Klausel
- **NIEDRIG:** 0 Klauseln

---

## 2. CHECK-COMPLIANCE (Pflichtklauseln)

### Vorhandene Pflichtklauseln

| Pflichtklausel | Vorhanden | Bewertung |
|----------------|-----------|-----------|
| Leistungsbeschreibung (§ 631a BGB) | ✅ Ja | Vorhanden, aber ungenau („Rohbau, Ausbau, Technische Anlagen") |
| Vergütung und Zahlungsbedingungen (§ 632 BGB) | ✅ Ja | Vorhanden, aber mit unwirksamer Vertragsstrafe |
| Kündigungsfrist (§ 621 BGB) | ✅ Ja | Vorhanden, aber mit unwirksamer Verlängerung |
| Abnahme und Mängelbeseitigung (§ 650 BGB) | ✅ Ja | Vorhanden, aber mit unwirksamer fingierter Abnahme |
| Abschlagszahlungen (§ 632a BGB) | ✅ Ja | Vorhanden, aber mit überhöhten Abschlägen (30% statt erbrachtem Wert) |

### Fehlende Pflichtklauseln

| Pflichtklausel | Fehlend | Bewertung |
|----------------|---------|-----------|
| Urheberrechtsübertragung (§ 31 UrhG) | ⚠️ Fehlt | Für Werke mit urheberrechtlichem Bezug relevant |
| Persönliche Leistungspflicht (§ 613 BGB) | ⚠️ Fehlt | Könnte zu Streit über Subunternehmer führen |

### Compliance-Status
- **Pflichtklauseln vorhanden:** 5/7 (71%)
- **Probleme:** Fast alle vorhandenen Klauseln mit unwirksamen Bestandteilen

---

## 3. QUELLENVERIFIKATION (via Knowledge-Basis)

| Zitat | Verifiziert | Quelle |
|-------|-------------|--------|
| § 309 Nr. 6 BGB | ✅ | red-flag-terms.md → § 309 Nr. 6 BGB |
| § 308 Nr. 4 BGB | ✅ | red-flag-terms.md → § 308 Nr. 4 BGB |
| § 308 Nr. 5 BGB | ✅ | red-flag-terms.md → § 308 Nr. 5 BGB |
| § 309 Nr. 2 lit. b BGB | ✅ | red-flag-terms.md → § 309 Nr. 2 BGB |
| § 309 Nr. 12 lit. a BGB | ✅ | red-flag-terms.md → § 309 Nr. 12 BGB |
| § 309 Nr. 7 lit. a BGB | ✅ | red-flag-terms.md → § 309 Nr. 7 BGB |
| § 309 Nr. 7 lit. b BGB | ✅ | red-flag-terms.md → § 309 Nr. 7 BGB |
| § 626 BGB | ✅ | Allgemeines Schuldrecht (außerordentliche Kündigung) |
| § 309 Nr. 9 lit. c BGB | ✅ | red-flag-terms.md → § 309 Nr. 9 BGB |
| § 307 Abs. 1 BGB | ✅ | red-flag-terms.md → § 307 BGB |
| § 309 Nr. 3 BGB | ✅ | red-flag-terms.md → § 309 Nr. 3 BGB |
| § 631a BGB | ✅ | mandatory-clauses.md → Werkvertrag |
| § 632 BGB | ✅ | mandatory-clauses.md → Werkvertrag |
| § 621 BGB | ✅ | mandatory-clauses.md → Dienstvertrag (analog) |
| § 650 BGB | ✅ | mandatory-clauses.md → Werkvertrag |
| § 632a BGB | ✅ | mandatory-clauses.md → Werkvertrag |
| § 31 UrhG | ✅ | mandatory-clauses.md → Dienstvertrag |
| § 613 BGB | ✅ | mandatory-clauses.md → Dienstvertrag |

---

## 4. ZUSAMMENFASSUNG

### Kritische Befunde
1. **Vertragsstrafe bei Zahlungsverzug** – Unwirksam nach § 309 Nr. 6 BGB
2. **Freier Änderungsvorbehalt** – Unwirksam nach § 308 Nr. 4 BGB
3. **Fingierte Abnahme durch Schweigen** – Unwirksam nach § 308 Nr. 5 BGB
4. **Ausschluss des Zurückbehaltungsrechts** – Unwirksam nach § 309 Nr. 2 lit. b BGB
5. **Beweislastumkehr** – Unwirksam nach § 309 Nr. 12 lit. a BGB
6. **Haftungsausschluss für Leben/Körper/Gesundheit** – Unwirksam nach § 309 Nr. 7 lit. a BGB
7. **Haftungsbegrenzung bei grobem Verschulden** – Unwirksam nach § 309 Nr. 7 lit. b BGB
8. **Ausschluss der außerordentlichen Kündigung** – Unzulässig nach § 626 BGB
9. **Überlange Kündigungsfrist** – Unwirksam nach § 309 Nr. 9 lit. c BGB
10. **Aufrechnungsverbot** – Unwirksam nach § 309 Nr. 3 BGB

### Handlungsempfehlung
Der Werkvertrag enthält **10 unwirksame Klauseln mit Risiko HOCH** und **1 mit Risiko MITTEL**. Eine umfassende Überarbeitung ist dringend erforderlich. Besonders problematisch sind die Vertragsstrafenregelung und der vollständige Ausschluss wichtiger Verbraucherrechte.

### Gesamtbewertung
**Risikostufe: HOCH** – Der Vertrag enthält die meisten der in der Knowledge-Basis dokumentierten Red-Flag-Klauseln. Die Konzentration problematischer Klauseln ist extrem hoch.

---

*Erstellt am 09.09.2026 auf Basis verifizierter Quellen.*
