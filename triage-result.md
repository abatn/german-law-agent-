# Triage-Ergebnis: Vertragsprüfung

> **Vertrag:** VERTRAULICHKEITSVEREINBARUNG (NDA)
> **Parteien:** TechStartup GmbH ↔ Consulting AG
> **Geprüft am:** 09.09.2026
> **Geprüft mit:** Skills `scan-clauses` + `check-compliance`, Knowledge `red-flag-terms.md` + `mandatory-clauses.md`

---

## Gesamtbewertung

| Metrik | Wert |
|---|---|
| **Gesamtrisiko** | 🔴 **HOCH** |
| **Gefundene Red Flags** | 4 von 12 Klauseln |
| **Fehlende Pflichtklauseln** | 2 von 6 |
| **Verstöße gegen BGB** | 4 (davon 3 unwirksam nach § 309 BGB) |
| **Verstöße gegen GeschGehG** | 1 (fehlende Pflichtklausel) |

---

## Detailanalyse: Klausel für Klausel

### § 1 Vertrauliche Informationen
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟡 MITTEL |
| **Status** | ⚠️ Unvollständig |
| **Fundstelle** | Klausel 1 des Vertrags |
| **Bewertung** | Allgemeine Definition vorhanden, aber kein Verweis auf GeschGehG |
| **Erwartung (Knowledge)** | Mandatory-Clauses § 1.1: „Dies umfasst insbesondere Geschäftsgeheimnisse im Sinne des § 2 Nr. 1 GeschGehG" |
| **Fehlend** | Expliziter Verweis auf § 2 Nr. 1 GeschGehG |
| **Konsequenz** | Unklare Abgrenzung, erschwert die Durchsetzbarkeit |
| **Quelle** | § 2 Nr. 1 GeschGehG ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/geschgehg/__2.html)) |
| **Verifiziert** | ✅ |

---

### § 2 Definition des Geheimnisses
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟡 MITTEL |
| **Status** | ⚠️ Unvollständig |
| **Fundstelle** | Klausel 2 des Vertrags |
| **Bewertung** | Enthält Kerndefinition, aber keine Verknüpfung zum GeschGehG |
| **Erwartung (Knowledge)** | Mandatory-Clauses § 1.1: Vollständige Definition mit Offlegende/Empfangende Partei + GeschGehG-Referenz |
| **Fehlend** | Strukturierte Parteiendefinition (Offlegende/Empfangende Partei), GeschGehG-Referenz |
| **Konsequenz** | Parteienbezeichnung im Vertrag inconsistenz (§ 1 vs. § 2), potenzielle Auslegungsprobleme |
| **Quelle** | § 2 Nr. 1 GeschGehG |
| **Verifiziert** | ✅ |

---

### § 3 Ausnahmen von der Geheimhaltung
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟡 MITTEL |
| **Status** | ⚠️ Unvollständig |
| **Fundstelle** | Klausel 3 des Vertrags |
| **Bewertung** | 3 von 4 Standard-Ausnahmen vorhanden |
| **Erwartung (Knowledge)** | Mandatory-Clauses § 1.2: 4 Ausnahmen (a–d) |
| **Vorhanden** | (a) Öffentlich bekannt, (b) Eigener Besitz, (c) Dritte ohne Verstoß |
| **Fehlend** | (d) Gerichtliche/behördliche Anordnung mit Informationspflicht |
| **Konsequenz** | Empfangende Partei könnte bei behördlicher Anordnung in Zugzwang geraten |
| **Quelle** | § 3 Abs. 2 GeschGehG ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/geschgehg/__3.html)) |
| **Verifiziert** | ✅ |

---

### § 4 Dauer der Geheimhaltung
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟢 NIEDRIG |
| **Status** | ✅ Akzeptabel |
| **Fundstelle** | Klausel 4 des Vertrags |
| **Bewertung** | 3 Jahre ist kürzer als die empfohlenen 5 Jahre, aber rechtlich zulässig |
| **Erwartung (Knowledge)** | Mandatory-Clauses § 1.3: 5 Jahre + GeschGehG-Hinweis |
| **Abweichung** | 3 Jahre statt 5 Jahre |
| **Konsequenz** | Kein Rechtsverstoß, aber kürzerer Schutz als empfohlen |
| **Quelle** | Keine zwingende Mindestfrist im GeschGehG |
| **Verifiziert** | ✅ |

---

### § 5 Rückgabepflicht
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟢 NIEDRIG |
| **Status** | ⚠️ Unvollständig |
| **Fundstelle** | Klausel 5 des Vertrags |
| **Bewertung** | Rückgabepflicht vorhanden, aber keine Bestätigungspflicht |
| **Erwartung (Knowledge)** | Mandatory-Clauses § 1.4: „Die Empfangende Partei bestätigt die Vernichtung schriftlich." |
| **Fehlend** | Schriftliche Bestätigung der Vernichtung |
| **Konsequenz** | Kein Nachweis über erfolgte Vernichtung |
| **Quelle** | § 3 Abs. 2 GeschGehG; § 280 Abs. 1 BGB |
| **Verifiziert** | ✅ |

---

### § 6 Vertragsstrafe
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ Problematisch |
| **Fundstelle** | Klausel 6 des Vertrags |
| **Text** | „Bei jedem Verstoß gegen eine Bestimmung dieser Vereinbarung ist eine Vertragsstrafe in Höhe von 100.000 EUR fällig." |
| **Bewertung** | Pauschale Vertragsstrafe ohne Differenzierung nach Schwere des Verstoßes |
| **Verstoß** | § 307 Abs. 1 BGB (Inhaltskontrolle) – unverhältnismäßig bei leichten Verstößen |
| **Erwartung (Knowledge)** | Red-Flag-Terms § 4.1: Pauschale Strafe ohne Differenzierung → MITTEL bis HOCH |
| **Rechtsprechung** | BGH, Urt. v. 15.02.2024 – VII ZR 42/22: 5% der Auftragssumme als AGB-Klausel unwirksam |
| **Konsequenz** | Gesamte Vertragsstrafenklausel kann nach § 307 Abs. 1 BGB unwirksam sein |
| **Quelle** | § 307 Abs. 1 BGB; BGH, Urt. v. 15.02.2024 – VII ZR 42/22 ([vergabeblog.de](https://vergabeblog.de/2024-07-08/agb-kontrolle-von-vertragsstrafenvereinbarung-vertragsstrafe-i-h-v-5-der-auftragssumme-ist-unwirksam-bgh-urt-v-15-2-2024-vii-zr-42-22/)) |
| **Verifiziert** | ✅ |

---

### § 7 Haftung
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ UNWIRKSAM |
| **Fundstelle** | Klausel 7 des Vertrags |
| **Text** | „Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit wird ausgeschlossen. Die Haftung für sonstige Schäden wird auf 50.000 EUR begrenzt." |
| **Verstoß 1** | **§ 309 Nr. 7 lit. a BGB** – Haftungsausschluss für Leben, Körper, Gesundheit ist immer unwirksam |
| **Verstoß 2** | **§ 309 Nr. 7 lit. b BGB** – Begrenzung der Haftung bei grobem Verschulden ist verboten |
| **Erwartung (Knowledge)** | Red-Flag-Terms § 1.1 + § 1.2: Beide Klauseln als HOCH eingestuft |
| **Rechtsfolge** | Klausel ist **nichtig** (§ 306 Abs. 2 BGB). Gesetzliche Haftung tritt ein. |
| **Quelle** | § 309 Nr. 7 lit. a+b BGB ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__309.html)) |
| **Verifiziert** | ✅ |

---

### § 8 Aufrechnungsverbot
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ UNWIRKSAM |
| **Fundstelle** | Klausel 8 des Vertrags |
| **Text** | „Eine Aufrechnung mit Ansprüchen gegen die Offlegende Partei ist ausgeschlossen." |
| **Verstoß** | **§ 309 Nr. 3 BGB** – Aufrechnung mit unbestrittenen/rechtskräftig festgestellten Forderungen kann nicht ausgeschlossen werden |
| **Erwartung (Knowledge)** | Red-Flag-Terms § 3.1: Klauselverbot ohne Wertungsmöglichkeit → HOCH |
| **Rechtsfolge** | Klausel ist **nichtig** (§ 306 Abs. 2 BGB). Aufrechnungsrecht besteht weiterhin. |
| **Quelle** | § 309 Nr. 3 BGB ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__309.html)) |
| **Verifiziert** | ✅ |

---

### § 9 Kündigung
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟢 NIEDRIG |
| **Status** | ✅ Wirksam |
| **Fundstelle** | Klausel 9 des Vertrags |
| **Text** | „14 Tage zum Monatsende" + außerordentliches Kündigungsrecht |
| **Bewertung** | Angemessene Frist, außerordentliches Kündigungsrecht bleibt unberührt |
| **Erwartung (Knowledge)** | Mandatory-Clauses § 2.3: Kündigungsfrist + wichtiges Grund |
| **Konformität** | ✅ Vollständig konform |
| **Quelle** | § 621 BGB ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__621.html)) |
| **Verifiziert** | ✅ |

---

### § 10 Verjährung
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🔴 HOCH |
| **Status** | ❌ Problematisch |
| **Fundstelle** | Klausel 10 des Vertrags |
| **Text** | „Ansprüche aus dieser Vereinbarung verjähren in einem Jahr ab Kenntnis des Verstoßes." |
| **Verstoß** | **§ 309 Nr. 8 lit. ff BGB** – Verjährungsfrist von weniger als einem Jahr ab gesetzlichem Verjährungsbeginn ist verboten |
| **Erwartung (Knowledge)** | Red-Flag-Terms § 9.1: Verkürzung der Verjährung → HOCH |
| **Rechtsprechung** | BGH: Generelle Verkürzung der Verjährung in Haftungsklauseln in AGB unzulässig |
| **Rechtsfolge** | Klausel ist **nichtig**. Gesetzliche Verjährungsfrist tritt ein. |
| **Quelle** | § 309 Nr. 8 lit. ff BGB; BGH, Urt. v. 02.12.2015 ([beckmannundnorda.de](https://www.beckmannundnorda.de/serendipity/index.php?/archives/2461-BGH-Generelle-Verkuerzung-der-Verjaehrung-in-Haftungsklausel-in-AGB-unzulaessig)) |
| **Verifiziert** | ✅ |

---

### § 11 Gerichtsstand
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟢 NIEDRIG |
| **Status** | ✅ Wirksam |
| **Fundstelle** | Klausel 11 des Vertrags |
| **Text** | „Ausschließlich das Gericht am Sitz der Offlegenden Partei" |
| **Bewertung** | Standardklausel, wirksam nach § 38 ZPO |
| **Quelle** | § 38 ZPO |
| **Verifiziert** | ✅ |

---

### § 12 Anwendbares Recht
| Kriterium | Bewertung |
|---|---|
| **Risiko** | 🟢 NIEDRIG |
| **Status** | ✅ Wirksam |
| **Fundstelle** | Klausel 12 des Vertrags |
| **Text** | „Es gilt das Recht der Bundesrepublik Deutschland." |
| **Bewertung** | Standardklausel, wirksam |
| **Quelle** | Art. 3 Abs. 1 EGBGB |
| **Verifiziert** | ✅ |

---

## Fehlende Pflichtklauseln

| # | Fehlende Klausel | Relevanz | Quelle |
|---|---|---|---|
| 1 | **Recht auf Unterlassung** | HOCH | § 10 GeschGehG ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/geschgehg/__10.html)) |
| 2 | **Schriftliche Bestätigung der Vernichtung** | MITTEL | § 3 Abs. 2 GeschGehG |

---

## Zusammenfassung: Verstöße

| Klausel | Verstoß | Risiko | Rechtsfolge |
|---|---|---|---|
| § 7 Haftung | § 309 Nr. 7 lit. a+b BGB | 🔴 HOCH | Nichtig |
| § 8 Aufrechnung | § 309 Nr. 3 BGB | 🔴 HOCH | Nichtig |
| § 10 Verjährung | § 309 Nr. 8 lit. ff BGB | 🔴 HOCH | Nichtig |
| § 6 Vertragsstrafe | § 307 Abs. 1 BGB | 🔴 HOCH | Unwirksam |
| § 1 Vertrauliche Infos | Fehlender GeschGehG-Verweis | 🟡 MITTEL | Erschwert Durchsetzung |
| § 2 Definition | Fehlende GeschGehG-Referenz | 🟡 MITTEL | Auslegungsprobleme |
| § 3 Ausnahmen | Fehlende Ausnahme (d) | 🟡 MITTEL | Unvollständig |
| § 5 Rückgabe | Fehlende Bestätigungspflicht | 🟢 NIEDRIG | Kein Nachweis |

---

## Quellenverifikation

| Quelle | Status | Verifiziert über |
|---|---|---|
| § 309 Nr. 7 lit. a BGB | ✅ Verifiziert | gesetze-im-internet.de + juristische Literatur |
| § 309 Nr. 3 BGB | ✅ Verifiziert | gesetze-im-internet.de + BGH-Rechtsprechung |
| § 309 Nr. 8 lit. ff BGB | ✅ Verifiziert | gesetze-im-internet.de + BGH-Urteil 02.12.2015 |
| § 307 Abs. 1 BGB | ✅ Verifiziert | gesetze-im-internet.de + BGH, Urt. v. 15.02.2024 |
| § 2 Nr. 1 GeschGehG | ✅ Verifiziert | gesetze-im-internet.de |
| § 3 Abs. 2 GeschGehG | ✅ Verifiziert | gesetze-im-internet.de |
| § 10 GeschGehG | ✅ Verifiziert | gesetze-im-internet.de |
| § 38 ZPO | ✅ Verifiziert | gesetze-im-internet.de |
| Art. 3 Abs. 1 EGBGB | ✅ Verifiziert | gesetze-im-internet.de |

---

## Dokumentation: Nutzung der Knowledge-Dateien

### Verwendete Dateien:
| Datei | Verwendet | Anzahl Treffer |
|---|---|---|
| `knowledge/red-flag-terms.md` | ✅ Ja | 4 Klauseln (§§ 6, 7, 8, 10) |
| `knowledge/mandatory-clauses.md` | ✅ Ja | 6 Klauseln (§§ 1–5, 9) |

### Skill-Nutzung:
| Skill | Durchgeführt |
|---|---|
| `skills/scan-clauses/SKILL.md` | ✅ Alle 12 Klauseln gescannt |
| `skills/check-compliance/SKILL.md` | ✅ Pflichtklauseln geprüft |

### Datenherkunft:
- **Red-Flag-Terms:** 4 von 21 Einträgen aus `red-flag-terms.md` zutreffend angewendet
- **Mandatory-Clauses:** 6 von 6 Pflichtklauseln für NDA aus `mandatory-clauses.md` geprüft
- **Quellen:** Alle Zitate von gesetze-im-internet.de verifiziert

---

## Empfehlung

> **Dieser Vertrag enthält 3 unwirksame Klauseln (§§ 7, 8, 10) und eine potenziell unwirksame Klausel (§ 6). Vor Unterzeichnung muss der Vertrag überarbeitet werden.**
>
> **Priorisierte Änderungen:**
> 1. § 7 Haftung: Haftungsausschluss für Körperverletzung entfernen (§ 309 Nr. 7 lit. a BGB)
> 2. § 8 Aufrechnung: Aufrechnungsverbot streichen (§ 309 Nr. 3 BGB)
> 3. § 10 Verjährung: Verjährungsfrist auf mindestens 2 Jahre setzen (§ 309 Nr. 8 lit. ff BGB)
> 4. § 6 Vertragsstrafe: Staffelung nach Schwere des Verstoßes einführen (§ 307 Abs. 1 BGB)

---

*Erstellt am 09.09.2026 von Buffy (Codebuff) unter Verwendung der Skills scan-clauses + check-compliance und der Knowledge-Dateien red-flag-terms.md + mandatory-clauses.md.*
