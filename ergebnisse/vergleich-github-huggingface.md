# Vergleich: Vertrags-Check-Agent vs. Open-Source-Ökosystem

> **Stand:** 09. September 2026
> **Zweck:** Strukturierte Vergleichsanalyse mit allen verifizierten Open-Source-Projekten aus GitHub, Hugging Face und der MCP-Registry

---

## 1. Gesamtübersicht: Gefundene Projekte

Es wurden **15+ relevante Projekte** identifiziert, die in die Kategorien Legal-MCP, Contract-Analysis, Compliance-AI und Legal-Hugging-Face fallen.

### 1.1 Kategorisierung

| Kategorie | Anzahl | Beschreibung |
|---|---|---|
| **Legal-MCP-Server (vollständig)** | 5 | MCP-Server mit vollständiger Tool-Palette für Rechtsanalyse |
| **Contract-Analysis-MCP** | 4 | MCP-Server speziell für Vertragsprüfung |
| **Compliance-AI-MCP** | 4 | MCP-Server für GDPR/Regulatory-Compliance |
| **Legal-Hugging-Face** | 3 | Modelle/Spaces auf Hugging Face für Legal-Tech |
| **Legal-Plattformen (kein MCP)** | 3 | Plattformen ohne direkte MCP-Integration |

---

## 2. Detaillierter Vergleich aller Projekte

### 2.1 Legal-MCP-Server (Vollständig)

#### 2.1.1 agentic-ops/legal-mcp

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/agentic-ops/legal-mcp](https://github.com/agentic-ops/legal-mcp) |
| **Architektur** | MCP-Server (Python, FastMCP) mit 27 Tools, 8 Kategorien, 8 Prompts, Ressourcen |
| **Tools** | `search_precedents`, `search_case_law`, `extract_statute`, `research_legal_issue`, `validate_citation`, `normalize_citation`, `compare_contracts`, `analyze_clauses`, `extract_clauses`, `suggest_clause_alternatives`, `generate_negotiation_guide`, `deep_analyze_clause`, `analyze_document`, `compare_documents`, `export_analysis_report`, `extract_contract_metadata`, `check_privilege_risk`, `generate_brief_outline`, `create_argument_structure`, `generate_issue_statement`, `queue_document_analysis`, `get_analysis_status`, `get_analysis_result`, `list_analysis_jobs`, `integration_status`, `search_live_case_law` |
| **Transport** | stdio, SSE, streamable-HTTP |
| **Sprache/Rechtsraum** | US-Recht (PACER, CourtListener/RECAP) |
| **MCP-Integration** | ✅ Vollständig – MCP-Server mit 27 Tools |
| **Features** | Precedent-Suche, Statuten-Analyse, Zitationsvalidierung, Vertragsvergleich, Klausel-Analyse, Verhandlungsguide, Brief-Generierung, Analyse-Queue, Live-Integrationen (PACER, CourtListener) |
| **Demo-Modus** | Bundled Cases, Statutes, Sample Contracts (13 Templates) |
| **Lizenz** | Nicht explizit angegeben |
| **Community** | Suche nach Legal Professionals für Case-Study-Kollaboration |
| **Vergleich zu meinem Agent** | **US-fokussiert**, aber umfassendste Legal-MCP-Lösung. Hat Vertragsanalyse (compare_contracts, analyze_clauses) + Verhandlungsguide. Fehlende deutsche Rechtsbasis. 27 Tools vs. meine 2 Skills + 3 Connectors |

**Bewertung:** ⭐⭐⭐⭐⭐ – Umfangreichste Legal-MCP-Lösung. Tool-basiert (27 Tools), nicht Skill-basiert wie meiner./starke US-Fokussierung.

#### 2.1.2 Open-Source-Legal/OpenContracts

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/Open-Source-Legal/OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) |
| **Architektur** | Document Intelligence Platform mit eingebautem MCP-Server, GraphQL + REST API, React UI |
| **Tools (MCP)** | `search_corpus`, `list_documents`, `get_document_text`, `list_annotations`, `list_relationships`, `list_threads`, `create_thread_message` |
| **MCP-Endpoints** | `/mcp/` (anonym, public corpuses), `/mcp/me/` (authentifiziert) |
| **Sprache/Rechtsraum** | Universal (kein spezifischer Rechtsraum) |
| **MCP-Integration** | ✅ Vollständig – MCP-Server als Plattform-Komponente |
| **Features** | Citation-Graph, Human Annotation als Ground Truth, Corpuses mit Versionierung, AI Agents (PydanticAI), Strukturierte Extraktion, Multimodale Suche, Zusammenarbeit (Threads, @mentions, Voting) |
| **Lizenz** | MIT |
| **Community** | Aktiv – Docker, GraphQL, REST, MCP |
| **Vergleich zu meinem Agent** | **Plattform-Ansatz** (DMS + Citation-Graph), nicht Skill-basiert. MCP-Server ist ein Feature, nicht das Kernprodukt. Fehlende Vertrags-Spezialisierung (kein scan-clauses, kein check-compliance). Starke Basis für Dokumentenanalyse |

**Bewertung:** ⭐⭐⭐⭐ – Starke Plattform, aber kein spezialisierter Vertrags-Check. MCP-Server als Feature, nicht als Kern.

#### 2.1.3 DrBaher/contract-ops-mcp

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/DrBaher/contract-ops-mcp](https://github.com/DrBaher/contract-ops-mcp) |
| **Architektur** | MCP-Server, der 9 lokale CLIs als Tools bereitstellt |
| **Tools** | `extract_contract`, `lint_contract`, `compare_versions`, `fill_template`, `convert_to_pdf`, `review_nda`, `template_vault_find`, `template_vault_get`, `contract_vault_query`, `contract_vault_due`, `contract_vault_risk`, `verify_signature`, `verify_receipt`, `audit_show`, `catalog`, `run`, `suite_status` |
| **Transport** | npx (STDIO) |
| **Sprache/Rechtsraum** | Universal (nicht rechtsraum-spezifisch) |
| **MCP-Integration** | ✅ MCP-Server mit 17 Tools |
| **Features** | Contract-Extraction, Lint, Version Comparison, Template-Filling, PDF-Conversion, NDA-Review, Template-Vault, Contract-Vault, Signature-Verification |
| **Sicherheit** | Signing human-gated, Filesystem-lockdown, no shell |
| **Lizenz** | MIT |
| **Vergleich zu meinem Agent** | **Operations-fokussiert** (Draft, Lint, Convert, Sign). Fehlende Risikoanalyse (kein Red-Flag, kein Compliance-Check). Ergänzt meinen Agent nicht direkt, aber könnte als Tool-Sammlung dienen |

**Bewertung:** ⭐⭐⭐ – Gute CLI-Tools für Contract-Ops, aber keine inhaltliche Vertragsprüfung.

### 2.2 Contract-Analysis-MCP

#### 2.2.1 he-yufeng/ContractGuard

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/he-yufeng/ContractGuard](https://github.com/he-yufeng/ContractGuard) |
| **Architektur** | CLI + Python API + Web UI (Gradio). Kein MCP-Server (geplant als Roadmap-Item) |
| **Tools** | `contractguard scan`, `contractguard batch`, `contractguard compare`, `contractguard web` |
| **Sprache/Rechtsraum** | US (California), China (PRC Labor/Civil Law). Jurisdiction-aware |
| **MCP-Integration** | ❌ Kein MCP (Roadmap: "Build integrations — MCP server, VS Code extension, Slack bot, etc.") |
| **Features** | Red Flag Detection, Fairness Score (A+ bis F), Jurisdiction-aware statute checks, Batch scanning, Contract comparison, Plain-English explanations, Pydantic models |
| **Unterstützte Verträge** | Residential Leases, NDAs, Employment, Freelance, SaaS ToS, Loan, Purchase |
| **Lizenz** | MIT |
| **Vergleich zu meinem Agent** | **Nächster Vergleichbare!** Red-Flag-Erkennung + Fairness-Score. Aber: CLI-basiert (kein MCP), US/China-fokussiert (nicht DE), keine Knowledge-Dateien (nutzt LLM-Prompts), keine Pflichtklauseln. Mein Agent ist MCP-integriert, DE-spezifisch und hat strukturierte Knowledge-Dateien |

**Bewertung:** ⭐⭐⭐⭐ – Sehr相近 Konzept (Red Flags + Fairness). Aber kein MCP, kein DE-Recht, keine Knowledge-Dateien.

#### 2.2.2 esignaturescom/mcp-server-esignatures

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/esignaturescom/mcp-server-esignatures](https://github.com/esignaturescom/mcp-server-esignatures) |
| **Architektur** | MCP-Server für eSignatures API |
| **Features** | Dynamische Vertragserstellung, Vertragsbearbeitung, Echtzeit-Zugriff auf eSignatures API |
| **MCP-Integration** | ✅ MCP-Server |
| **Vergleich zu meinem Agent** | Nicht vergleichbar – Fokus auf E-Signing, nicht Vertragsprüfung |

#### 2.2.3 guia-matthieu/clawfu-skills (Contract Review Skill)

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/guia-matthieu/clawfu-skills](https://github.com/guia-matthieu/clawfu-skills/blob/main/skills/legal/contract-review/SKILL.md) |
| **Architektur** | Skill-Datei (SKILL.md) für ClawFu MCP Server |
| **Features** | Systematische Vertragsanalyse, Risiko-Identifizierung, ungünstige Klauseln, Verhandlungsempfehlungen |
| **MCP-Integration** | ✅ Skill-Datei, die MCP-Tools nutzt |
| **Vergleich zu meinem Agent** | **Ähnlichster Ansatz!** Skill-basiert (SKILL.md), MCP-integriert. Aber: Keine Knowledge-Dateien, keine spezifischen Skills (scan-clauses, check-compliance), keine Connectors |

**Bewertung:** ⭐⭐⭐ – Skill-basiert wie meiner, aber weniger spezialisiert.

### 2.3 Compliance-AI-MCP

#### 2.3.1 TCoder920/open-legal-compliance-mcp

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/TCoder920/open-legal-compliance-mcp](https://github.com/TCoder920/open-legal-compliance-mcp) |
| **Architektur** | MCP-Server (Node.js/TypeScript) mit 14+ Tools |
| **Tools** | `search_us_code`, `search_cfr`, `search_federal_register`, `search_congress_bills`, `search_case_law`, `search_canlii_cases`, `search_state_law`, `search_open_states`, `search_eu_regulations`, `search_uk_legislation`, `get_sec_filings`, `search_fda_events`, `search_data_gov` |
| **Sprache/Rechtsraum** | US (Federal + State), EU (EUR-Lex), UK, Canada |
| **MCP-Integration** | ✅ MCP-Server (stdio) |
| **Features** | US Federal Law (USC, CFR), Case Law (CourtListener), EU Regulations (GDPR, AI Act via EUR-Lex), State Law (CA, NY, IL), Congress Bills, Federal Register, SEC, FDA, Data.gov, UK, Canada |
| **API Keys** | GovInfo (Required), CourtListener (Optional), Congress.gov (Optional), OpenStates (Optional), CanLII (Optional) |
| **Lizenz** | MIT |
| **Vergleich zu meinem Agent** | **Multi-Jurisdiction** (US, EU, UK, CA). Hat EU-Regulation-Suche (GDPR via EUR-Lex). Kein spezifischer DE-Rechts-Connector. Kein Vertrags-Check (nur Gesetzessuche). Meiner ist DE-spezifischer mit validate_citation via Ansvar Gateway |

**Bewertung:** ⭐⭐⭐ – Breite Abdeckung, aber keine Vertragsprüfung. EU-Suche nützlich als Ergänzung.

#### 2.3.2 csoai-org/gdpr-compliance-ai-mcp

| Kriterium | Details |
|---|---|
| **Quelle** | [GDPR Compliance AI MCP auf mcpservers.org](https://mcpservers.org/servers/csoai-org/gdpr-compliance-ai-mcp) |
| **Architektur** | MCP-Server für DSGVO-Compliance |
| **Tools** | classify_processing, lawful_basis_assessment, dpia_generation, ... |
| **Features** | EU AI Act Article 9, 13; DSGVO-Klassifizierung, Rechtsgrundlagen-Bewertung, DPIA-Generierung |
| **MCP-Integration** | ✅ MCP-Server |
| **Vergleich zu meinem Agent** | **DSGVO-spezifisch**. Ergänzt meinen Agent für Art. 28, 30, 33, 44-49 Checks. Kein Vertrags-Check, aber starke DSGVO-Compliance-Funktionalität |

**Bewertung:** ⭐⭐⭐ – Gute DSGVO-Ergänzung. Könnte als zusätzlicher Connector dienen.

#### 2.3.3 ansvar-systems/eu_compliance_mcp

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/ansvar-systems/eu_compliance_mcp](https://github.com/ansvar-systems/eu_compliance_mcp) |
| **Architektur** | MCP-Server für EU-Regulierungen |
| **Features** | Full-Text Zugriff auf 37+ EU-Regulations (GDPR, AI Act, DORA, etc.) |
| **MCP-Integration** | ✅ MCP-Server (bereits als ansvar-german-law in meinem Projekt konfiguriert) |
| **Vergleich zu meinem Agent** | **Bereits in meinem Projekt integriert!** Ansvar Gateway = eu_compliance_mcp + german-law-mcp. Full-Text-Suche + validate_citation |

**Bewertung:** ⭐⭐⭐⭐⭐ – Bereits integriert. Kein zusätzliches Setup nötig.

#### 2.3.4 RegGuard MCP (Elnino0009/regguard-mcp)

| Kriterium | Details |
|---|---|
| **Quelle** | [mcpservers.org/servers/Elnino0009/regguard-mcp](https://mcpservers.org/servers/Elnino0009/regguard-mcp) |
| **Architektur** | MCP-Server für finanzielle Compliance |
| **Features** | AI-powered regulatory compliance checking für finanzielle Services |
| **MCP-Integration** | ✅ MCP-Server |
| **Vergleich zu meinem Agent** | Finanz-Spezifisch. Nicht direkt vergleichbar |

### 2.4 Legal-Hugging-Face

#### 2.4.1 Nikhil-AI-Labs/legal-contract-classifier-best

| Kriterium | Details |
|---|---|
| **Quelle** | [huggingface.co/Nikhil-AI-Labs/legal-contract-classifier-best](https://huggingface.co/Nikhil-AI-Labs/legal-contract-classifier-best) |
| **Architektur** | Ensemble-Modell (Legal-BERT + DeBERTa) |
| **Genauigkeit** | 97.74% Accuracy (Ensemble), 96.11% (Legal-BERT Base) |
| **Features** | Klassifizierung von Vertragsklauseln in Risiko-Kategorien |
| **MCP-Integration** | ❌ Kein MCP – Nur Modell |
| **Vergleich zu meinem Agent** | **Modell-basiert** vs. mein Knowledge-basiertes Ansatz. Könnte als zusätzliche Klausel-Erkennung dienen. 97.74% Accuracy ist beeindruckend |

**Bewertung:** ⭐⭐⭐ – Gutes Modell für Klausel-Klassifizierung. Könnte als zusätzliche Komponente integriert werden.

#### 2.4.2 Noxtua (Legal AI für deutsche Jurisdiktion)

| Kriterium | Details |
|---|---|
| **Quelle** | [noxtua.com](https://www.noxtua.com) |
| **Architektur** | GDPR-konforme Legal AI (kein MCP, aber Open Source) |
| **Features** | Deutsche Jurisdiktion, DSGVO-konform, 203 StGB-konform, EU AI Act |
| **MCP-Integration** | ❌ Kein MCP – aber Open Source |
| **Vergleich zu meinem Agent** | **Deutsche Jurisdiktion!** Aber: Kommerziell/Platform, nicht MCP-basiert. Open Source Componente (MISSION KI + Allianz) für Compliance-Checking |

**Bewertung:** ⭐⭐⭐ – Deutsche Jurisdiktion relevant, aber kein MCP.

#### 2.4.3 Vaquill AI (US-Primary-Law API via MCP)

| Kriterium | Details |
|---|---|
| **Quelle** | [vaquill.ai](https://www.vaquill.ai) |
| **Architektur** | US-Primary-Law API (REST + MCP) |
| **Features** | Statutes, Regulations, Constitutions, Executive Orders; Contract Review, Compliance Research, Drafting |
| **MCP-Integration** | ✅ MCP-Server + REST API |
| **Vergleich zu meinem Agent** | US-spezifisch. Kein deutsches Recht. Aber MCP-Integration als Referenz |

**Bewertung:** ⭐⭐⭐ – US-spezifisch, aber MCP-Referenz.

### 2.5 Weitere Projekte

#### 2.5.1 zoharbabin/due-diligence-agents (101 Sterne)

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/zoharbabin/due-diligence-agents](https://github.com/zoharbabin/due-diligence-agents) |
| **Architektur** | Multi-Agent-System (13 AI Agents, 9 Domänen) |
| **Features** | M&A Due Diligence: Legal, Finance, Commercial, Tech, Cyber, HR, Tax, Regulatory, ESG |
| **MCP-Integration** | ❌ Nicht explizit |
| **Vergleich zu meinem Agent** | Multi-Agent-Ansatz. Kein direkter Vergleich (M&A vs. Vertragsprüfung) |

#### 2.5.2 blencorp/capture-mcp-server

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/blencorp/capture-mcp-server](https://github.com/blencorp/capture-mcp-server) |
| **Architektur** | MCP-Server für US Federal Contracts (SAM.gov, USASpending.gov, Tango) |
| **Vergleich** | US Federal Contracts – nicht vergleichbar |

#### 2.5.3 DPO2U (LGPD/GDPR Compliance via Blockchain)

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/fredericosanntana/dpo2u-solana](https://github.com/fredericosanntana/dpo2u-solana) |
| **Architektur** | On-chain Compliance (Midnight/Solana) + MCP Server |
| **Features** | Homomorphic Encryption, Zero-Knowledge Proofs, LGPD/GDPR/DPDP |
| **Vergleich** | Blockchain-basiert. Overkill für Vertragsprüfung |

#### 2.5.4 GDPR Shift-Left MCP (Colaberry)

| Kriterium | Details |
|---|---|
| **Quelle** | [colaberry.ai/aixcelerator/mcp/gdprshiftleftmcp](https://www.colaberry.ai/aixcelerator/mcp/gdprshiftleftmcp) |
| **Features** | GDPR Compliance-Wissen direkt in IDE, "Shift Left" Ansatz |
| **Vergleich** | IDE-Integration für Developer. Ergänzend |

#### 2.5.5 OpenLaw MCP Server (UK/EU)

| Kriterium | Details |
|---|---|
| **Quelle** | [mcpservers.org/servers/damankaur-dev/openlaw-mcp](https://mcpservers.org/servers/damankaur-dev/openlaw-mcp) |
| **Features** | UK/EU Open Law: Judgments, legislation, case law |
| **Vergleich** | UK/EU Fokus. Könnte als Ergänzung dienen |

#### 2.5.6 RentalScan MCP Server (in PR #1788)

| Kriterium | Details |
|---|---|
| **Quelle** | [github.com/modelcontextprotocol/servers/actions/runs/26691965313](https://github.com/modelcontextprotocol/servers/actions/runs/26691965313) |
| **Features** | Car Rental Contract Analysis |
| **Vergleich** | Nischen-Fall (Autovermietung). Nicht direkt vergleichbar |

#### 2.5.7 privacy-dsar-mcp-server (AiAgentKarl)

| Kriterium | Details |
|---|---|
| **Quelle** | [glama.ai/mcp/servers/AiAgentKarl/privacy-dsar-mcp-server](https://glama.ai/mcp/servers/AiAgentKarl/privacy-dsar-mcp-server) |
| **Features** | GDPR, EU AI Act, CCPA Compliance Queries |
| **Vergleich** | Privacy/Datenschutz-fokussiert. Ergänzend |

#### 2.5.8 Global Compliance Audit MCP (Hugging Face Blog)

| Kriterium | Details |
|---|---|
| **Quelle** | [huggingface.co/blog/MCP-1st-Birthday/global-compliance-audit-mcp-server](https://huggingface.co/blog/MCP-1st-Birthday/global-compliance-audit-mcp-server) |
| **Features** | 120 Compliance-Regeln, 14 globale Regulations |
| **Vergleich** | Global Compliance – breiter als mein DE-spezifischer Ansatz |

---

## 3. Strukturvergleich: Mein Agent vs. die Konkurrenz

### 3.1 Architektur-Vergleich

| Kriterium | Mein Agent | agentic-ops/legal-mcp | OpenContracts | ContractGuard | contract-ops-mcp | open-legal-compliance-mcp |
|---|---|---|---|---|---|---|
| **Ansatz** | Skill + Knowledge + Connector | Tool-basiert (27 Tools) | Plattform (DMS + MCP) | CLI + Python API | CLI-Sammlung als MCP | Tool-basiert (14+ Tools) |
| **MCP-Integration** | ✅ (3 Connectors) | ✅ (27 Tools) | ✅ (7 Tools) | ❌ (geplant) | ✅ (17 Tools) | ✅ (14+ Tools) |
| **Skills** | ✅ (2 Skills: scan-clauses, check-compliance) | ❌ (nutzt Skills als Agent-Skill) | ❌ | ❌ | ❌ | ❌ |
| **Knowledge-Dateien** | ✅ (red-flag-terms.md, mandatory-clauses.md) | ❌ (Demo-Daten) | ❌ (Citation-Graph) | ❌ (LLM-Prompts) | ❌ | ❌ |
| **Connectors** | ✅ (Filesystem, Ansvar Gateway, PDF) | ❌ (CourtListener, PACER) | ❌ (GraphQL, REST) | ❌ | ❌ (9 CLIs) | ❌ (GovInfo, CourtListener) |
| **Lokale Daten** | ✅ (knowledge/*.md) | ⚠️ (Demo-Modus) | ✅ (Corpuses) | ❌ (LLM-basiert) | ✅ (Template/Contract Vault) | ❌ (API-basiert) |
| **Rechtsraum** | 🇩🇪 DE (BGB, DSGVO) | 🇺🇸 US (PACER, CourtListener) | Universal | 🇺🇸🇨🇳 US + China | Universal | 🇺🇸🇪🇺🇬🇧 US + EU + UK |

### 3.2 Tool-Vergleich

| Funktion | Mein Agent | legal-mcp | OpenContracts | ContractGuard | contract-ops-mcp | open-legal-compliance-mcp |
|---|---|---|---|---|---|---|
| **Vertrag einlesen** | ✅ (Filesystem + PDF) | ✅ (analyze_document) | ✅ (get_document_text) | ✅ (PDF, DOCX, TXT) | ✅ (extract_contract) | ❌ |
| **Red-Flag-Erkennung** | ✅ (scan-clauses) | ✅ (analyze_clauses) | ❌ | ✅ (Red Flags) | ❌ | ❌ |
| **Pflichtklauseln** | ✅ (check-compliance) | ❌ | ❌ | ✅ (Missing Protections) | ❌ | ❌ |
| **Risikobewertung** | ✅ (HOCH/MITTEL/NIEDRIG) | ✅ (risk flags) | ❌ | ✅ (Fairness Score A+ bis F) | ❌ | ❌ |
| **Gesetzesverifikation** | ✅ (Ansvar Gateway) | ✅ (validate_citation) | ❌ | ⚠️ (Statute Checklist) | ❌ | ✅ (US Code, CFR) |
| **Vertragsvergleich** | ❌ | ✅ (compare_contracts) | ❌ | ✅ (compare) | ✅ (compare_versions) | ❌ |
| **Verhandlungsguide** | ❌ | ✅ (generate_negotiation_guide) | ❌ | ✅ (Suggestion) | ❌ | ❌ |
| **DSGVO-Check** | ✅ (Art. 28, 30, 33, 44-49) | ❌ | ❌ | ❌ | ❌ | ⚠️ (EUR-Lex) |
| **PDF-Unterstützung** | ✅ (pdf-parse) | ✅ (.docx, .txt) | ✅ (PDF, DOCX, TXT) | ✅ (PDF, DOCX, TXT) | ✅ (PDF, DOCX) | ❌ |
| **Export/Report** | ✅ (Markdown) | ✅ (.docx Report) | ✅ (GraphQL, REST) | ✅ (Markdown, JSON, HTML) | ❌ | ❌ |
| **Multi-Agent** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

### 3.3 Einzigartigkeits-Analyse

| Einzigartiges Merkmal | Mein Agent | Andere Projekte |
|---|---|---|
| **Skill-basierte Architektur** | ✅ Skills (SKILL.md) + Knowledge (MD-Dateien) + Connectors | Andere nutzen Tools (Python/Node.js) oder CLIs – kein Skill-basiertes Muster |
| **Deutsche Rechtsbasis** | ✅ BGB §§ 307, 308, 309 + DSGVO Art. 28-49 | Kein anderes Projekt hat DE-spezifische Vertragsklauseln + Gesetzesverifikation via Ansvar Gateway |
| **Knowledge-Dateien als Wissensbasis** | ✅ red-flag-terms.md (35 Klauseln), mandatory-clauses.md (5 Vertragsarten) | Andere nutzen LLM-Prompts oder Demo-Daten – keine strukturierten MD-Dateien mit Quellenangaben |
| **Lokale Knowledge ohne Cloud** | ✅ knowledge/*.md lokal, kein API-Key für Wissensbasis | Andere brauchen API-Keys (GovInfo, CourtListener) oder LLM-Zugang |
| **3-Connector-Architektur** | ✅ Filesystem + Ansvar Gateway + PDF | Andere haben maximal 1-2 Connectors oder nutzen APIs direkt |
| **Red-Flag-Terms mit BGB-Referenzen** | ✅ 35 Klauseln mit BGB/DSGVO-Quellen | ContractGuard hat Red Flags, aber ohne spezifische Gesetzesreferenzen (US/China) |

---

## 4. Marktpositionierung

### 4.1 Wo ist mein Agent einzigartig?

| Einzigartigkeit | Beschreibung | Warum wichtig |
|---|---|---|
| **Skill + Knowledge + Connector Muster** | Einzigartiges 3-Schichten-Muster (Projekt → Skills → Connectors) | Andere nutzen Tools oder CLIs – kein vergleichbares Muster im Ökosystem |
| **DE-Rechtsspezialisierung** | BGB §§ 307-309 (AGB-Recht) + DSGVO Art. 28-49 mit konkreten Quellen | Kein anderes Open-Source-Projekt hat diese Kombination |
| **Lokale Knowledge-Dateien** | 35 Red-Flag-Klauseln + Pflichtklauseln als MD-Dateien mit Quellenangaben | Kein Projekt hat vergleichbare strukturierte Rechtsknowledge |
| **Ansvar Gateway Integration** | Validate_citation für DE-Gesetzestexte | Einzigartige Quellenverifikation via MCP-Connector |
| **No-Code Agent-Bau** | Projekte nach Lab-Muster ohne Code schreiben zu müssen | Andere erfordern Python/Node.js-Entwicklung |

### 4.2 Wo gibt es Überschneidungen?

| Überschneidung | Mein Agent | Ähnliches Projekt | Grad |
|---|---|---|---|
| **Red-Flag-Erkennung** | scan-clauses (35 Klauseln) | ContractGuard (Red Flags) | 🔴 Hoch – Similar concept, different implementation |
| **Fairness/Risiko-Score** | HOCH/MITTEL/NIEDRIG | ContractGuard (A+ bis F) | 🟡 Mittel – Similar output, different granularity |
| **Vertragsvergleich** | ❌ (nicht implementiert) | legal-mcp (compare_contracts) | 🟡 Mittel – Feature-Lücke |
| **Verhandlungsguide** | ❌ (nicht implementiert) | legal-mcp (generate_negotiation_guide) | 🟡 Mittel – Feature-Lücke |
| **DSGVO-Compliance** | Art. 28, 30, 33, 44-49 | gdpr-compliance-ai-mcp | 🟢 Niedrig – Meiner spezifischer, DSGVO-MCP breiter |

### 4.3 Wo ist mein Agent im Rückstand?

| Rückstand | Details | Priorität |
|---|---|---|
| **Kein Vertragsvergleich** | legal-mcp und contract-ops-mcp bieten clause-aware Diff | 🔴 HOCH – Nützliche Feature |
| **Kein Verhandlungsguide** | legal-mcp bietet per-clause accept/negotiate/reject guide | 🟡 MITTEL – Value-Add |
| **Kein Batch-Modus** | ContractGuard bietet batch scanning, contract comparison | 🟡 MITTEL – Für Team-Nutzung |
| **Kein Web UI** | ContractGuard bietet Gradio Web UI | 🟢 NIEDRIG – CLI reicht für Agent-Nutzung |
| **Kein multi-jurisdiction** | open-legal-compliance-mcp bietet US + EU + UK + CA | 🟢 NIEDRIG – DE-Fokus ist gewollt |

---

## 5. Empfohlene Übernahmen

### 5.1 Features, die ich übernehmen sollte

| Feature | Quelle | Aufwand | Nutzen | Begründung |
|---|---|---|---|---|
| **Vertragsvergleich (Clause-Aware Diff)** | legal-mcp (`compare_contracts`) | Mittel | 🔴 HOCH | Fehlende Kernfunktion – Vertragsversionen vergleichen ist essenziell |
| **Negotiation Guide (per-clause)** | legal-mcp (`generate_negotiation_guide`) | Niedrig | 🟡 MITTEL | Value-Add für Nutzer: Accept/Negotiate/Reject pro Klausel |
| **Fairness Score (A+ bis F)** | ContractGuard | Niedrig | 🟡 MITTEL | Besser als HOCH/MITTEL/NIEDRIG – numerischer Score |
| **Jurisdiction-aware Statute Checks** | ContractGuard | Hoch | 🟡 MITTEL | Deterministische Gesetzesprüfung (nicht nur LLM-basiert) |
| **Legal-BERT für Klausel-Klassifizierung** | Nikhil-AI-Labs/legal-contract-classifier-best | Hoch | 🟡 MITTEL | 97.74% Accuracy – könnte scan-clauses ergänzen |
| **Batch-Scanning** | ContractGuard | Niedrig | 🟡 MITTEL | Mehrere Verträge auf einmal prüfen |

### 5.2 Connectors, die ich hinzufügen sollte

| Connector | Quelle | Aufwand | Nutzen | Begründung |
|---|---|---|---|---|
| **gdpr-compliance-ai-mcp** | csoai-org | Niedrig | 🟡 MITTEL | DSGVO-Klassifizierung, DPIA-Generierung – ergänzt meine Art. 28-49 Checks |
| **open-legal-compliance-mcp** (EUR-Lex Teil) | TCoder920 | Mittel | 🟢 NIEDRIG | EU-Regulation-Suche – aber Ansvar Gateway deckt das bereits ab |
| **legal-mcp** als Remote-Connector | agentic-ops | Hoch | 🟡 MITTEL | 27 US-Recht-Tools – aber DE-Recht fehlt |

### 5.3 Was ich NICHT übernehmen sollte

| Feature/Connector | Grund |
|---|---|
| PACER/CourtListener Integration | US-spezifisch, nicht relevant für DE-Recht |
| Blockchain-Compliance (DPO2U) | Overkill für Vertragsprüfung |
| Federal Contract Capture (SAM.gov) | US Federal Contracts – irrelevant |
| eSignatures MCP | E-Signing, nicht Vertragsprüfung |
| Template/Contract Vault | Operations-fokussiert, nicht inhaltlich |

---

## 6. Zusammenfassung: Stärken und Schwächen

### 6.1 Stärken meines Agenten

| Stärke | Details |
|---|---|
| **Skill-basierte Architektur** | Einzigartiges Muster (Skills + Knowledge + Connectors) im gesamten Ökosystem |
| **DE-Rechtsspezialisierung** | BGB §§ 307-309 + DSGVO – kein vergleichbares Open-Source-Projekt |
| **Lokale Knowledge-Dateien** | 35 Red-Flag-Klauseln + Pflichtklauseln mit Quellenangaben – keine Cloud-Abhängigkeit |
| **Ansvar Gateway** | Einzigartige Gesetzesverifikation via MCP-Connector |
| **No-Code Agent-Bau** | Lab-Muster ohne Code – einzigartig |
| **3-Connector-Architektur** | Filesystem + Ansvar Gateway + PDF – ausgewogenes Setup |

### 6.2 Schwächen meines Agenten

| Schwäche | Details | Priorität |
|---|---|---|
| **Kein Vertragsvergleich** | Fehlende Kernfunktion (legal-mcp hat es) | 🔴 HOCH |
| **Kein numerischer Score** | HOCH/MITTEL/NIEDRIG vs. ContractGuard's A+ bis F | 🟡 MITTEL |
| **Kein Verhandlungsguide** | Fehlende Value-Add-Funktion | 🟡 MITTEL |
| **Kein Batch-Modus** | Nur Einzelverträge | 🟡 MITTEL |
| **Kein Web UI** | CLI/Markdown only | 🟢 NIEDRIG |
| **Kein Multi-Agent** | Nur single-agent | 🟢 NIEDRIG |

### 6.3 Positionierungs-Statement

> **Mein Vertrags-Check-Agent ist der EINZIGE Open-Source-MCP-Server im Ökosystem, der:**
> 1. **Skill-basiert** arbeitet (Skills + Knowledge + Connectors statt Tools/CLIs)
> 2. **DE-Recht** spezialisiert ist (BGB §§ 307-309 + DSGVO Art. 28-49)
> 3. **Lokale Knowledge-Dateien** mit Quellenangaben nutzt (keine Cloud-Abhängigkeit)
> 4. **Gesetzesverifikation** via MCP-Connector (Ansvar Gateway) bietet
> 5. **No-Code Agent-Bau** nach Lab-Muster ermöglicht

> **Wo ich mich verbessern sollte:** Vertragsvergleich, numerischer Score, Verhandlungsguide, Batch-Modus.

---

## 7. Quellen

1. **agentic-ops/legal-mcp:** [github.com/agentic-ops/legal-mcp](https://github.com/agentic-ops/legal-mcp) – 27 Tools, Python, stdio/SSE/HTTP. Eingesehen 09.09.2026.
2. **Open-Source-Legal/OpenContracts:** [github.com/Open-Source-Legal/OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) – MIT, Docker, GraphQL+REST+MCP. Eingesehen 09.09.2026.
3. **he-yufeng/ContractGuard:** [github.com/he-yufeng/ContractGuard](https://github.com/he-yufeng/ContractGuard) – MIT, CLI + Python API + Gradio, US/China. Eingesehen 09.09.2026.
4. **DrBaher/contract-ops-mcp:** [github.com/DrBaher/contract-ops-mcp](https://github.com/DrBaher/contract-ops-mcp) – MIT, 9 CLIs als MCP-Tools. Eingesehen 09.09.2026.
5. **TCoder920/open-legal-compliance-mcp:** [github.com/TCoder920/open-legal-compliance-mcp](https://github.com/TCoder920/open-legal-compliance-mcp) – MIT, 14+ Tools, US+EU+UK+CA. Eingesehen 09.09.2026.
6. **ansvar-systems/eu_compliance_mcp:** [github.com/ansvar-systems/eu_compliance_mcp](https://github.com/ansvar-systems/eu_compliance_mcp) – EU-Regulations MCP. Eingesehen 09.09.2026.
7. **csoai-org/gdpr-compliance-ai-mcp:** [mcpservers.org/servers/csoai-org/gdpr-compliance-ai-mcp](https://mcpservers.org/servers/csoai-org/gdpr-compliance-ai-mcp) – DSGVO+EU AI Act. Eingesehen 09.09.2026.
8. **Nikhil-AI-Labs/legal-contract-classifier-best:** [huggingface.co/Nikhil-AI-Labs/legal-contract-classifier-best](https://huggingface.co/Nikhil-AI-Labs/legal-contract-classifier-best) – 97.74% Accuracy Ensemble. Eingesehen 09.09.2026.
9. **Noxtua:** [noxtua.com](https://www.noxtua.com) – DE Legal AI, GDPR-konform, Open Source. Eingesehen 09.09.2026.
10. **Vaquill AI:** [vaquill.ai](https://www.vaquill.ai) – US-Primary-Law API + MCP. Eingesehen 09.09.2026.
11. **guia-matthieu/clawfu-skills:** [github.com/guia-matthieu/clawfu-skills](https://github.com/guia-matthieu/clawfu-skills) – Contract Review SKILL.md. Eingesehen 09.09.2026.
12. **esignaturescom/mcp-server-esignatures:** [github.com/esignaturescom/mcp-server-esignatures](https://github.com/esignaturescom/mcp-server-esignatures) – eSignatures MCP. Eingesehen 09.09.2026.
13. **blencorp/capture-mcp-server:** [github.com/blencorp/capture-mcp-server](https://github.com/blencorp/capture-mcp-server) – Federal Contracts MCP. Eingesehen 09.09.2026.
14. **zoharbabin/due-diligence-agents:** [github.com/zoharbabin/due-diligence-agents](https://github.com/zoharbabin/due-diligence-agents) – 101★, Multi-Agent M&A. Eingesehen 09.09.2026.
15. **DPO2U:** [github.com/fredericosanntana/dpo2u-solana](https://github.com/fredericosanntana/dpo2u-solana) – On-chain GDPR/LGPD Compliance. Eingesehen 09.09.2026.
16. **OpenLaw MCP:** [mcpservers.org/servers/damankaur-dev/openlaw-mcp](https://mcpservers.org/servers/damankaur-dev/openlaw-mcp) – UK/EU Open Law. Eingesehen 09.09.2026.
17. **privacy-dsar-mcp-server:** [glama.ai/mcp/servers/AiAgentKarl/privacy-dsar-mcp-server](https://glama.ai/mcp/servers/AiAgentKarl/privacy-dsar-mcp-server) – GDPR/AI Act/CCPA. Eingesehen 09.09.2026.
18. **RentalScan MCP Server:** [PR #1788 in modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers/actions/runs/26691965313) – Car Rental Contract Analysis. Eingesehen 09.09.2026.
19. **MCP-Registry:** [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io/) – Offizielle Registry. Eingesehen 09.09.2026.
20. **Glama Legal & Compliance:** [glama.ai/mcp/servers?attributes=category:legal-and-compliance](https://glama.ai/mcp/servers?attributes=category%3Alegal-and-compliance) – MCP-Server-Katalog. Eingesehen 09.09.2026.
21. **GitHub Topics: contract-analysis:** [github.com/topics/contract-analysis](https://github.com/topics/contract-analysis) – Topic-Sammlung. Eingesehen 09.09.2026.

---

## 8. Nächste Schritte

| Priorität | Maßnahme | Begründung |
|---|---|---|
| **1** | **Vertragsvergleich implementieren** (inspiriert von legal-mcp `compare_contracts`) | Fehlende Kernfunktion – höchster Nutzen |
| **2** | **Numerischer Fairness-Score** (inspiriert von ContractGuard A+ bis F) | Bessere Usability als HOCH/MITTEL/NIEDRIG |
| **3** | **Negotiation Guide pro Klausel** (inspiriert von legal-mcp) | Value-Add für Nutzer |
| **4** | **gdpr-compliance-ai-mcp als Connector** hinzufügen | DSGVO-Compliance ergänzen |
| **5** | **Batch-Modus** (inspiriert von ContractGuard) | Für Team-Nutzung |
| **6** | **Legal-BERT Modell** testen (Nikhil-AI-Labs) | Klausel-Klassifizierung verbessern |