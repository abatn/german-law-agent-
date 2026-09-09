# TRIAGE KAUFVERTRAG – Klausel-Scan & Compliance-Check

**Datum:** 09.09.2026  
**Vertragsart:** Kaufvertrag (§§ 433–449 BGB)  
**Vertragsdatei:** test-kaufvertrag.txt  
**Geprüft von:** Contract-Check-Agent

---

## 1. SCAN-CLAUSES (Red-Flag-Analyse)

### Gefundene problematische Klauseln

| # | Klausel | Fundstelle | Risiko | Begründung | Quelle |
|---|---------|------------|--------|------------|--------|
| 1 | „Die Verjährungsfrist beträgt ein Jahr ab Abnahme der Kaufsache." | § 5.2 | **HOCH** | Verkürzung der Verjährungsfrist auf 1 Jahr ist unwirksam nach § 309 Nr. 8 lit. ff BGB. Bei Verbraucherverträgen: 2 Jahre (§ 438 Abs. 1 Nr. 3 BGB). | § 309 Nr. 8 lit. ff BGB |
| 2 | „Mängel sind unverzüglich, spätestens innerhalb von 7 Tagen nach Entdeckung schriftlich anzuzeigen. Andernfalls sind Gewährleistungsansprüche ausgeschlossen." | § 5.3 | **HOCH** | Ausschlussfrist von 7 Tagen ist zu kurz. Unwirksam nach § 309 Nr. 8 lit. ee BGB. | § 309 Nr. 8 lit. ee BGB |
| 3 | „Es wird jegliche Gewährleistung für Schäden ausgeschlossen, die nicht auf Sachmängeln beruhen." | § 5.5 | **HOCH** | Kompletter Ausschluss von Gewährleistungsansprüchen ist verboten nach § 309 Nr. 8 lit. b BGB. | § 309 Nr. 8 lit. b aa BGB |
| 4 | „Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit wird ausgeschlossen." | § 6.1 | **HOCH** | Haftungsausschluss für Leben, Körper, Gesundheit ist immer unwirksam nach § 309 Nr. 7 lit. a BGB. | § 309 Nr. 7 lit. a BGB |
| 5 | „Die Haftung für Schäden, die auf grob fahrlässigem Handeln beruhen, wird begrenzt auf den Kaufpreis der Ware." | § 6.2 | **HOCH** | Begrenzung der Haftung bei grobem Verschulden ist verboten nach § 309 Nr. 7 lit. b BGB. | § 309 Nr. 7 lit. b BGB |
| 6 | „Änderungen dieses Vertrags bedürfen der notariellen Beurkundung." | § 7.1 | **MITTEL** | Überscharfe Schriftformklausel nach § 309 Nr. 13 lit. a BGB, wenn für den Vertrag durch Gesetz keine notarielle Beurkundung vorgeschrieben ist. | § 309 Nr. 13 lit. a BGB |
| 7 | „Die Zahlung erfolgt innerhalb von 45 Tagen nach Rechnungserhalt." | § 2.2 | **MITTEL** | Zahlungsfrist von 45 Tagen ist zu lang. Unwirksam nach § 308 Nr. 1a BGB (max. 30 Tage). | § 308 Nr. 1a BGB |

### Risikobewertung Gesamt
- **HOCH:** 5 Klauseln
- **MITTEL:** 2 Klauseln
- **NIEDRIG:** 0 Klauseln

---

## 2. CHECK-COMPLIANCE (Pflichtklauseln)

### Vorhandene Pflichtklauseln

| Pflichtklausel | Vorhanden | Bewertung |
|----------------|-----------|-----------|
| Gewährleistung und Mängelhaftung (§ 434 ff. BGB) | ✅ Ja | Vorhanden, aber mit unwirksamen Klauseln (Verjährung, Ausschlussfrist) |
| Eigentumsvorbehalt (§ 449 BGB) | ✅ Ja | Korrekt formuliert |
| Liefer- und Abnahmepflicht (§ 433 Abs. 2 BGB) | ✅ Ja | Vorhanden |

### Fehlende Pflichtklauseln

| Pflichtklausel | Fehlend | Bewertung |
|----------------|---------|-----------|
| Keine | – | – |

### Compliance-Status
- **Pflichtklauseln vorhanden:** 3/3 (100%)
- **Probleme:** Vorhandene Klauseln teilweise unwirksam (siehe Red-Flag-Analyse)

---

## 3. QUELLENVERIFIKATION (via Knowledge-Basis)

| Zitat | Verifiziert | Quelle |
|-------|-------------|--------|
| § 309 Nr. 8 lit. ff BGB | ✅ | red-flag-terms.md → § 309 Nr. 8 BGB |
| § 309 Nr. 8 lit. ee BGB | ✅ | red-flag-terms.md → § 309 Nr. 8 BGB |
| § 309 Nr. 8 lit. b aa BGB | ✅ | red-flag-terms.md → § 309 Nr. 8 BGB |
| § 309 Nr. 7 lit. a BGB | ✅ | red-flag-terms.md → § 309 Nr. 7 BGB |
| § 309 Nr. 7 lit. b BGB | ✅ | red-flag-terms.md → § 309 Nr. 7 BGB |
| § 309 Nr. 13 lit. a BGB | ✅ | red-flag-terms.md → § 309 Nr. 13 BGB |
| § 308 Nr. 1a BGB | ✅ | red-flag-terms.md → § 308 Nr. 1 BGB |
| § 438 Abs. 1 Nr. 3 BGB | ✅ | mandatory-clauses.md → Kaufvertrag |
| § 449 BGB | ✅ | mandatory-clauses.md → Kaufvertrag |
| § 433 Abs. 2 BGB | ✅ | mandatory-clauses.md → Kaufvertrag |

---

## 4. ZUSAMMENFASSUNG

### Kritische Befunde
1. **Verjährungsverkürzung** auf 1 Jahr statt 2 Jahre (unwirksam)
2. **Ausschlussfrist** von 7 Tagen für Mängelanzeigen (unwirksam)
3. **Haftungsausschluss** für Leben/Körper/Gesundheit (unwirksam)
4. **Haftungsbegrenzung** bei grobem Verschulden (unwirksam)
5. **Überscharfe Schriftform** für Änderungen (unwirksam)

### Handlungsempfehlung
Der Kaufvertrag enthält **5 unwirksame Klauseln mit Risiko HOCH** und **2 mit Risiko MITTEL**. Eine Überarbeitung ist dringend erforderlich, um Rechtsunsicherheit zu vermeiden.

### Gesamtbewertung
**Risikostufe: HOCH** – Der Vertrag enthält mehrere Klauseln, die nach AGB-Recht (§§ 305–310 BGB) unwirksam sind. Bei Verbraucherverträgen besteht hohes Risiko einer Abmahnung oder Klage.

---

*Erstellt am 09.09.2026 auf Basis verifizierter Quellen.*
