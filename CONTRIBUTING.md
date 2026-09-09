# 🤝 Contributing to German Law Agent

Vielen Dank, dass du zum German Law Agent beitragen möchtest! 🎉

## 📋 Übersicht

- [Code of Conduct](#-code-of-conduct)
- [Beitragen](#-beitragen)
- [Geschützte Bereiche](#-geschützte-bereiche)
- [Branching-Strategie](#-branching-strategie)
- [Pull-Request-Prozess](#-pull-request-prozess)
- [Stilrichtlinien](#-stilrichtlinien)
- [Fragestellungen](#-fragestellungen)

---

## 📜 Code of Conduct

Bitte beachte unseren [Code of Conduct](CODE_OF_CONDUCT.md). Wir erwarten, dass alle Beitragenden sich daran halten.

---

## 🚀 Beitrragen

### Arten von Beiträgen

Wir begrüßen verschiedene Arten von Beiträgen:

1. **Bug Reports** – Fehler in der Vertragsprüfung melden
2. **Feature Requests** – Neue Funktionen vorschlagen
3. **Documentation** – Dokumentation verbessern
4. **Skills** – Neue Skills für andere Vertragsarten entwickeln
5. **Knowledge** – Red-Flag-Terms oder Pflichtklauseln erweitern
6. **Tests** – Test-Verträge hinzufügen

### Erste Schritte

1. **Repository forken**
   ```bash
   # Klicke auf "Fork" oben rechts
   ```

2. **Lokal klonen**
   ```bash
   git clone https://github.com/DEIN-NAME/german-law-agent-
   cd german-law-agent-
   ```

3. **Feature-Branch erstellen**
   ```bash
   git checkout -b feature/neue-funktion
   ```

4. **Änderungen vornehmen**
   - Siehe [Geschützte Bereiche](#-geschützte-bereiche) für Einschränkungen

5. **Änderungen committen**
   ```bash
   git commit -m "feat: Neue Funktion hinzugefügt"
   ```

6. **Push zum Fork**
   ```bash
   git push origin feature/neue-funktion
   ```

7. **Pull Request erstellen**
   - Gehe zu: https://github.com/abatn/german-law-agent-/pulls
   - Klicke auf "New pull request"

---

## ⚠️ Geschützte Bereiche

Einige Verzeichnisse sind **geschützt** und erfordern besondere Genehmigung:

### 🔒 `knowledge/` – Vertragswissen

| Datei | Status | Grund |
|---|---|---|
| `red-flag-terms.md` | ⚠️ Geschützt | Kern-IP – Red-Flag-Terms |
| `mandatory-clauses.md` | ⚠️ Geschützt | Pflichtklauseln |

**Beiträge zu `knowledge/`:**
- Nur via **Issue** vorschlagen
- Keine direkten PRs ohne Genehmigung
- Quellenangaben sind **Pflicht** (BGH-Urteile, Gesetze)

### 🔒 `skills/` – Agent-Skills

| Skill | Status | Grund |
|---|---|---|
| `scan-clauses/SKILL.md` | ⚠️ Geschützt | Kern-Logik |
| `check-compliance/SKILL.md` | ⚠️ Geschützt | Compliance-Check |

**Beiträge zu `skills/`:**
- Nur via **Issue** oder **Discussion**
- MCP-Referenzen müssen korrekt sein
- Test-Schritte dokumentieren

### 🔒 `scripts/` – Interne Skripte

| Skript | Status | Grund |
|---|---|---|
| `test-*.js` | ⚠️ Geschützt | Test-Infrastruktur |
| `agent-test.sh` | ⚠️ Geschützt | Agent-Test |

**Beiträge zu `scripts/`:**
- Nur Bugfixes via PR
- Neue Skripte nur mit Genehmigung

### ✅ Freie Bereiche

| Verzeichnis | Status | Beispiele |
|---|---|---|
| `ergebnisse/` | ✅ Frei | Neue Analysen, Vergleiche |
| `test-*.txt` | ✅ Frei | Neue Test-Verträge |
| `test-*.pdf` | ✅ Frei | PDF-Testfälle |
| Root-Dateien | ✅ Frei | README, LICENSE, etc. |

---

## 🌿 Branching-Strategie

Wir verwenden **Git Flow**:

```
main (stabil)
  │
  ├── develop (Entwicklung)
  │     │
  │     ├── feature/neues-feature
  │     ├── feature/skill-erweiterung
  │     └── feature/neuer-test
  │
  ├── hotfix/bugfix
  └── release/v1.0.0
```

### Branch-Namensgebung

| Typ | Präfix | Beispiel |
|---|---|---|
| Feature | `feature/` | `feature/mietvertrag-skill` |
| Bugfix | `bugfix/` | `bugfix/red-flag-erkenntung` |
| Documentation | `docs/` | `docs/readme-verbesserung` |
| Hotfix | `hotfix/` | `hotfix/kritischer-fix` |

---

## 📝 Pull-Request-Prozess

### Vor dem PR

1. **Issue erstellen** (bei größeren Änderungen)
2. **Auf aktuelle Version rebasen**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

3. **Tests ausführen**
   ```bash
   # Test-Vertrag prüfen
   opencode
   # "Prüfe test-contract.txt mit allen Skills"
   ```

### PR-Checkliste

- [ ] **Beschreibung** verständlich und vollständig
- [ ] **Issue-Referenz** (falls vorhanden)
- [ ] **Änderungen** beschränkt auf ein Feature/Fix
- [ ] **Dokumentation** aktualisiert (falls nötig)
- [ ] **Tests** bestanden
- [ ] **Merge-Konflikte** aufgelöst
- [ ] **Commit-Message** im korrekten Format

### Commit-Message-Format

```
<type>(<scope>): <Kurzbeschreibung>

<detaillierte Beschreibung>

<Footer>
```

**Beispiele:**

```bash
feat(skills): Neuen Skill für Mietverträge hinzugefügt

- Skill `scan-mietvertrag` erstellt
- Red-Flag-Terms für Mietrecht ergänzt
- Test mit Beispiel-Mietvertrag bestanden

Closes #42
```

```bash
fix(knowledge): Fehler in Red-Flag-Erkennung behoben

- Klausel "Haftungsausschluss" korrekt erkannt
- Risiko-Bewertung angepasst

Fixes #38
```

### PR-Beschreibungsvorlage

```markdown
## Beschreibung
[Kurze Beschreibung der Änderung]

## Motivation
[Warum ist diese Änderung nötig?]

## Änderungen
- [ ] Änderung 1
- [ ] Änderung 2

## Testergebnisse
[Wie wurde die Änderung getestet?]

## Screenshots (falls zutreffend)
[Screenshots der neuen Funktion]

## Checklist
- [ ] Code dem Stilguide entsprechend
- [ ] Dokumentation aktualisiert
- [ ] Tests hinzugefügt/aktualisiert
- [ ] Keine Merge-Konflikte
```

---

## 🎨 Stilrichtlinien

### Markdown

- **Überschriften:** Nur eine H1 (`#`) pro Datei
- **Listen:** Einrückung mit 2 Leerzeichen
- **Code-Blöcke:** Sprache angeben (```json, ```bash)
- **Links:** Relativ zu Repository-Root

### Knowledge-Dateien

```markdown
## [Kategorie]

### [Klausel-Name]
- **Klausel:** „[Genauer Wortlaut]"
- **Risiko:** [HOCH/MITTEL/NIEDRIG]
- **Begründung:** Verstößt gegen [Gesetz/Urteil]
- **Quelle:** [Gesetz/Urteil mit Link]
```

### Skills

```markdown
# Skill: [Name]

## Zweck
[Was macht dieser Skill?]

## Schritte
1. [Schritt 1]
2. [Schritt 2]

## Connectors
- [Connector 1]: [Nutzung]
- [Connector 2]: [Nutzung]
```

### Scripts

- **Kommentare:** Jede Funktion dokumentiert
- **Fehlerbehandlung:** Try-Catch mit aussagekräftigen Fehlern
- **Logging:** Klare Ausgaben für Debugging

---

## ❓ Fragestellungen

### Issues

- **Bug Reports:** Benutze die Bug-Report-Vorlage
- **Feature Requests:** Benutze die Feature-Request-Vorlage
- **Fragen:** Erstelle ein Discussion-Issue

### Discussions

Für allgemeine Fragen, Ideen und Feedback:
- Gehe zu: https://github.com/abatn/german-law-agent-/discussions

---

## 🏷️ Labels

| Label | Bedeutung |
|---|---|
| `bug` | Fehler in bestehender Funktionalität |
| `enhancement` | Neue Funktion oder Verbesserung |
| `documentation` | Dokumentation betrifft |
| `knowledge` | Knowledge-Dateien betroffen |
| `skill` | Skill-Logik betroffen |
| `connector` | MCP-Connector betroffen |
| `good first issue` | Gut für Neueinsteiger |
| `help wanted` | Unterstützung gesucht |
| `protected` | ⚠️ Geschützter Bereich – Genehmigung erforderlich |

---

## 📄 Lizenz

Durch deinen Beitrag stimmst du der [MIT-Lizenz](LICENSE) zu.

---

**Vielen Dank für deinen Beitrag!** 🙏
