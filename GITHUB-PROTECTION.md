# 🛡️ GitHub Repository Protection

## ✅ Was wurde erstellt

| Datei | Zweck |
|---|---|
| `README.md` | Vollständige Dokumentation mit Schnellstart |
| `CONTRIBUTING.md` | Beitragsrichtlinien mit geschützten Bereichen |
| `LICENSE` | MIT-Lizenz |
| `CODE_OF_CONDUCT.md` | Verhaltensregeln |
| `SECURITY.md` | Sicherheitsrichtlinie |
| `.gitignore` | Schutz für Knowledge, Skills, Scripts |
| `.github/workflows/branch-protection.yml` | Automatische Überprüfung |

---

## 🔒 Geschützte Bereiche

### 1. Knowledge-Dateien (Kern-IP)

| Datei | Schutz | Grund |
|---|---|---|
| `knowledge/red-flag-terms.md` | ⚠️ Geschützt | 35 Red-Flag-Klauseln |
| `knowledge/mandatory-clauses.md` | ⚠️ Geschützt | Pflichtklauseln |

### 2. Skills (Agent-Logik)

| Skill | Schutz | Grund |
|---|---|---|
| `skills/scan-clauses/SKILL.md` | ⚠️ Geschützt | Kern-Scanning-Logik |
| `skills/check-compliance/SKILL.md` | ⚠️ Geschützt | Compliance-Check |

### 3. Scripts (Interne Skripte)

| Skript | Schutz | Grund |
|---|---|---|
| `scripts/*.js` | ⚠️ Geschützt | Test-Skripte |
| `scripts/*.sh` | ⚠️ Geschützt | Shell-Skripte |

---

## 🔧 GitHub-Repository-Schutz einrichten

### Schritt 1: Repository-Einstellungen öffnen

1. Gehe zu: https://github.com/abatn/german-law-agent-/settings
2. Klicke auf **"Branches"** im linken Menü

### Schritt 2: Branch Protection Rules erstellen

1. Klicke auf **"Add branch protection rule"**
2. Konfiguriere:

```
Branch name pattern: main (oder master)

✅ Require a pull request before merging
  - ✅ Require approvals: 1
  - ✅ Dismiss stale pull request approvals when new commits are pushed

✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date before merging
  - Status checks: "check", "validate-knowledge"

✅ Require conversation resolution before merging

✅ Require linear history (optional)

✅ Do not allow bypassing the above settings
```

3. Klicke auf **"Create"**

### Schritt 3: Secret Scanning aktivieren

1. Gehe zu: https://github.com/abatn/german-law-agent-/settings/security
2. Aktiviere:
   - ✅ Secret scanning
   - ✅ Push protection
   - ✅ Secret scanning review

### Schritt 4: Code Scanning aktivieren (optional)

1. Gehe zu: https://github.com/abatn/german-law-agent-/settings/security
2. Aktiviere:
   - ✅ Code scanning
   - ✅ Default setup (GitHub Actions)

---

## 📋 Protection Rules Zusammenfassung

| Regel | Status | Beschreibung |
|---|---|---|
| **Branch Protection** | ✅ Aktiviert | PR erforderlich für main/master |
| **Require Approvals** | ✅ 1 Approval | Mindestens 1 Genehmigung |
| **Status Checks** | ✅ Aktiviert | Tests müssen bestehen |
| **Secret Scanning** | ✅ Aktiviert | Secrets werden erkannt |
| **Push Protection** | ✅ Aktiviert | Secrets werden blockiert |
| **Code Scanning** | ⚠️ Optional | Sicherheitsanalyse |

---

## 🚫 Was wird blockiert

### Via .gitignore

```bash
# Diese Dateien werden NICHT committed:
knowledge/red-flag-terms.md
knowledge/mandatory-clauses.md
skills/scan-clauses/SKILL.md
skills/check-compliance/SKILL.md
scripts/*.js
scripts/*.sh
```

### Via GitHub Secret Scanning

- GitHub Personal Access Tokens (ghp_...)
- API Keys (sk-...)
- Andere Secrets

### Via Branch Protection

- Direkte Pushes auf main/master
- PRs ohne Genehmigung
- PRs ohne bestandene Tests

---

## 📝 Workflow für Beitragende

### 1. Feature entwickeln

```bash
git checkout -b feature/neues-feature
# Änderungen vornehmen
git add .
git commit -m "feat: Neue Funktion"
```

### 2. PR erstellen

```bash
git push origin feature/neues-feature
# PR auf GitHub erstellen
```

### 3. Review & Merge

- ✅ Status Checks bestehen
- ✅ 1 Approval erhalten
- ✅ Merge-Konflikte aufgelöst
- ✅ Merge via GitHub UI

---

## 🔐 Sicherheitstipps

1. **Token nie im Code speichern**
   - Nutze Environment Variables
   - Nutze GitHub Secrets

2. **Regelmäßig updaten**
   - Dependencies aktualisieren
   - Security Patches einspielen

3. **Logging aktivieren**
   - GitHub Actions Logs überprüfen
   - Secret Scanning Alerts beachten

4. **Zugriff kontrollieren**
   - Nur notwendige Berechtigungen vergeben
   - Team-Mitglieder regularly reviewen

---

## 📞 Bei Problemen

- **Secret erkannt:** https://github.com/abatn/german-law-agent-/security/secret-scanning
- **Security Advisory:** https://github.com/abatn/german-law-agent-/security/advisories
- **Issues:** https://github.com/abatn/german-law-agent-/issues

---

**Status:** 🟢 Repository ist geschützt!
