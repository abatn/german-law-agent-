#!/bin/bash
# Agent-Test: Vertrag mit allen 3 Connectors analysieren

echo "=== Agent-Test: Vertrags-Check-Agent ==="
echo ""
echo "Projekt: ~/mimo-agents/contract-check"
echo "Vertrag: test-dienstvertrag-agb-dsgvo.txt"
echo ""
echo "Verwendete Connectors:"
echo "  1. Filesystem MCP (lokal, kein Auth)"
echo "  2. Ansvar Gateway (lokal über mcp-remote, OAuth 1x)"
echo "  3. PDF-Connector (lokal über citra, kein Auth)"
echo ""

# Prüfen ob opencode JSON gültig ist
echo "Prüfe opencode.json auf Gültigkeit..."
cat ~/.config/opencode/opencode.json | python3 -c "import sys,json; json.load(sys.stdin)" && echo "✅ opencode.json ist gültig" || echo "❌ opencode.json ist ungültig"

echo ""
echo "MCP-Server Status:"
cat ~/.config/opencode/opencode.json | python3 -c "
import sys,json
d=json.load(sys.stdin)
for k,v in d.get('mcp',{}).items():
    if 'contract' in k or 'ansvar' in k or 'pdf' in k:
        status = '✅' if v.get('enabled', False) else '❌'
        print(f'  {status} {k}: {v[\"type\"]} | {v.get(\"url\", \"local\")}')
"

echo ""
echo "=== Starte Agenten-Analyse ==="
echo "Bitte opencode starten und den letzten Vertrag analysieren lassen."
echo ""
cat << 'EOF'
Im opencode-Terminal:

"Prüfe den Vertrag aus ~/mimo-agents/contract-check/test-dienstvertrag-agb-dsgvo.txt mit allen 3 Connectors.
Wende die aktualisierten Skills an.
Gib mir eine strukturierte Risikobewertung mit Quellenangaben."

Nach der Analyse:
"Speichere das Ergebnis in ~/mimo-agents/contract-check/ergebnisse/triage-abschliessend-v2.md"
EOF
