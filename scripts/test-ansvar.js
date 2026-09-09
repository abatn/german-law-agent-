const { spawn } = require('child_process');

// JSON-RPC requests
const requests = [
  // Initialize
  JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: { name: "contract-check-test", version: "1.0" }
    }
  }),
  // List tools
  JSON.stringify({
    jsonrpc: "2.0",
    id: 2,
    method: "tools/list",
    params: {}
  }),
  // Validate citation
  JSON.stringify({
    jsonrpc: "2.0",
    id: 3,
    method: "tools/call",
    params: {
      name: "validate_citation",
      arguments: {
        citation: "§ 309 Nr. 7 lit. a BGB"
      }
    }
  }),
  // Search legislation
  JSON.stringify({
    jsonrpc: "2.0",
    id: 4,
    method: "tools/call",
    params: {
      name: "search_legislation",
      arguments: {
        query: "Haftungsausschluss Körperverletzung"
      }
    }
  }),
  // Get provision
  JSON.stringify({
    jsonrpc: "2.0",
    id: 5,
    method: "tools/call",
    params: {
      name: "get_provision",
      arguments: {
        documentId: "bgb"
      }
    }
  })
];

// Spawn mcp-remote
const child = spawn('npx', ['-y', 'mcp-remote@0.1.38', 'https://gateway.ansvar.eu/mcp'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

let buffer = '';
let responses = [];
let requestIndex = 0;

child.stdout.on('data', (data) => {
  buffer += data.toString();
  
  // Try to extract complete JSON-RPC responses
  const lines = buffer.split('\n');
  buffer = lines.pop() || '';
  
  for (const line of lines) {
    if (line.trim().startsWith('{')) {
      try {
        const parsed = JSON.parse(line.trim());
        responses.push(parsed);
        console.log(`[Antwort ${parsed.id || '?'}]:`);
        console.log(JSON.stringify(parsed, null, 2));
        console.log('---');
      } catch (e) {
        // Ignore incomplete JSON
      }
    }
  }
  
  // Send next request if previous completed
  if (requestIndex < requests.length && responses.length >= requestIndex) {
    const req = requests[requestIndex];
    child.stdin.write(req + '\n');
    console.log(`[Gesendet ${requestIndex + 1}]:`);
    console.log(JSON.parse(req).method);
    console.log('---');
    requestIndex++;
  }
});

child.stderr.on('data', (data) => {
  process.stderr.write(data.toString());
});

child.on('close', (code) => {
  console.log(`\n[mcp-remote beendet mit Code ${code}]`);
  process.exit(code || 0);
});

// Start with first request
setTimeout(() => {
  if (child.stdin.writable) {
    child.stdin.write(requests[0] + '\n');
    console.log(`[Gesendet 1]: initialize`);
  }
}, 1000);
