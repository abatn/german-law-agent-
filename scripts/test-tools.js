const { spawn } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const mcp = spawn('npx', ['-y', 'mcp-remote@0.1.38', 'https://gateway.ansvar.eu/mcp'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

const requests = [
  { id: 1, method: 'initialize', params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'test', version: '1.0' } } },
  { id: 2, method: 'tools/list', params: {} }
];

let state = 'init';
let buffer = '';

function sendRequest(req) {
  mcp.stdin.write(JSON.stringify(req) + '\n');
}

function handleOutput(data) {
  const lines = (buffer + data.toString()).split('\n');
  buffer = lines.pop() || '';
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed) {
      try {
        const json = JSON.parse(trimmed);
        if (json.id === 1) {
          console.log('✅ Initialize OK');
          console.log('   Version:', json.result?.serverInfo?.version || 'N/A');
          console.log('   Protocol:', json.result?.protocolVersion || 'N/A');
          sendRequest(requests[1]);
        } else if (json.id === 2) {
          console.log(`\n✅ Tools-Liste (${json.result?.tools?.length || 0} Tools):`);
          if (json.result?.tools) {
            json.result.tools.slice(0, 10).forEach(t => {
              console.log(`   - ${t.name}: ${t.description?.substring(0, 80) || 'N/A'}`);
            });
            if (json.result.tools.length > 10) {
              console.log(`   ... und ${json.result.tools.length - 10} weitere`);
            }
          }
          mcp.kill();
        }
      } catch (e) {
        // Ignoriere nicht-JSON
      }
    }
  }
}

rl.on('close', () => mcp.kill());
mcp.stdout.on('data', handleOutput);
mcp.stderr.on('data', (d) => {});
mcp.on('close', () => process.exit(0));

sendRequest(requests[0]);
