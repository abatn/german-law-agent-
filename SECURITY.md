# Sicherheitsrichtlinie

## Sicherheitsbericht

Wir nehmen die Sicherheit des German Law Agent ernst. Wenn Sie ein Sicherheitsproblem entdecken, melden Sie es bitte verantwortungsbewusst.

## Vermeldung eines Sicherheitsproblems

**⚠️ WICHTIG: Öffnen Sie KEIN GitHub-Issue für Sicherheitsprobleme!**

Bitte senden Sie eine E-Mail an: **[SICHERHEITS-E-MAIL]**

### Was beinhalten sollte

1. **Beschreibung des Problems**
   - Art des Sicherheitsproblems (z.B. SQL-Injection, XSS, etc.)
   - Betroffene Komponente (Knowledge, Skills, Connectors)

2. **Schritte zur Wiederherstellung**
   - Detaillierte Anleitung zur Reproduktion
   - Betroffene Version
   - Betroffene Konfiguration

3. **Potenzielle Auswirkungen**
   - Schweregrad des Problems
   - Mögliche Ausnutzung
   - Betroffene Daten

4. **Vorgeschlagene Lösung** (optional)
   - Wenn Sie eine Lösung vorschlagen

### Antwortzeit

- **Innerhalb von 24 Stunden**: Bestätigung des Eingangs
- **Innerhalb von 48 Stunden**: Erste Bewertung
- **Innerhalb von 1 Woche**: Detaillierte Analyse und geplante Behebung

## Betroffene Versionen

| Version | Status |
|---|---|
| < 1.0.0 | ⚠️ Veraltet – Kein Support |
| 1.0.0 - 1.0.5 | 🟡 Support endet in 30 Tagen |
| ≥ 1.0.6 | ✅ Aktiver Support |

## Bekannte Einschränkungen

### Knowledge-Dateien

- **Risiko**: Falsche Rechtsinformationen können zu rechtlichen Problemen führen
- **Schutz**: Alle Knowledge-Dateien durchlaufen rechtliche Überprüfung
- **Empfehlung**: Immer mit einem Rechtsanwalt prüfen

### MCP-Connectors

- **Risiko**: Externe API-Aufrufe können Daten preisgeben
- **Schutz**: Nur HTTPS-verbindungen, keine lokalen Tokens
- **Empfehlung**: OAuth-Tokens regelmäßig rotieren

### Skills

- **Risiko**: Falsche Skill-Logik kann Verträge falsch bewerten
- **Schutz**: Skills sind versioniert und getestet
- **Empfehlung**: Regelmäßige Validierung durch Fachleute

## Sicherheitsaktualisierungen

Sicherheitsaktualisierungen werden über folgende Kanäle veröffentlicht:

1. **GitHub Security Advisories**: https://github.com/abatn/german-law-agent-/security/advisories
2. **Release Notes**: https://github.com/abatn/german-law-agent-/releases
3. **E-Mail an betroffene Nutzer** (bei kritischen Problemen)

## Versionsrichtlinie

| Version | Änderung |
|---|---|
| Patch (1.0.x) | Sicherheitsfixes, keine API-Änderungen |
| Minor (1.x.0) | Neue Funktionen, abwärtskompatibel |
| Major (x.0.0) | Breaking Changes, Migration erforderlich |

## Drittanbieter-Abhängigkeiten

Wir überwachen aktiv Sicherheitsprobleme in unseren Abhängigkeiten:

| Abhängigkeit | Version | Status |
|---|---|---|
| `@modelcontextprotocol/server-filesystem` | Latest | ✅ Keine bekannten Probleme |
| `mcp-remote` | 0.1.38 | ✅ Keine bekannten Probleme |
| `@sylphx/citra` | Latest | ✅ Keine bekannten Probleme |
| `pdf-parse` | 1.1.1 | ✅ Keine bekannten Probleme |

## Sicherheits-Checkliste für Beitragende

Bevor Sie einen PR erstellen, prüfen Sie bitte:

- [ ] Keine hardcoded Secrets oder API-Keys
- [ ] Keine sensiblen Daten in Logs
- [ ] Korrekte Fehlerbehandlung
- [ ] HTTPS für alle externen Aufrufe
- [ ] Input-Validierung für alle Nutzereingaben
- [ ] Keine potenziellen Code-Injection-Schwachstellen

## Kontakt

Für Fragen zur Sicherheit:

- **E-Mail**: [SICHERHEITS-E-MAIL]
- **PGP-Schlüssel**: [PGP-SCHLÜSSEL]
- **GitHub Security**: https://github.com/abatn/german-law-agent-/security

---

**Danke, dass Sie zur Sicherheit des German Law Agent beitragen!**
