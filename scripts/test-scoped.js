const { spawn } = require('child_process');

console.log('=== Test: mcp-remote mit offline_access Scope ===');
console.log('Befehl: npx -y mcp-remote@0.1.38 https://gateway.ansvar.eu/mcp --static-oauth-client-metadata \'{"scope":"mcp:tools offline_access"}\'');
console.log('');

const child = spawn('npx', [
  '-y', 'mcp-remote@0.1.38', 
  'https://gateway.ansvar.eu/mcp',
  '--static-oauth-client-metadata', '{"scope":"mcp:tools offline_access"}'
], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: { ...process.env }
});

let output = '';
let started = false;
let timeout;

function cleanup() {
  clearTimeout(timeout);
  child.kill();
  process.exit(0);
}

child.stdout.on('data', (data) => {
  const str = data.toString();
  output += str;
  
  if (!started && (str.includes('Connected') || str.includes('Local STDIO'))) {
    started = true;
    console.log('✅ mcp-remote verbunden!');
    console.log(str);
    console.log('');
    console.log('Wende jetzt tools/list an...');
    
    setTimeout(() => {
      // Send tools/list
      child.stdin.write(JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/list",
        params: {}
      }) + '\n');
      
      // Wait for response
      setTimeout(() => {
        console.log('');
        console.log('--- 10 Sekunden gewartet auf tools/list Antwort ---');
        console.log('Letzte 50 Zeilen Output:');
        console.log(output.split('\n').slice(-50).join('\n'));
        cleanup();
      }, 10000);
    }, 2000);
  }
});

child.stderr.on('data', (data) => {
  console.log('STDERR:', data.toString().trim());
  output += data.toString();
});

child.on('close', (code) => {
  clearTimeout(timeout);
  console.log(`\nmcp-remote beendet mit Code ${code}`);
  if (output) console.log('Letzte Ausgabe:', output.split('\n').slice(-20).join('\n'));
});

timeout = setTimeout(() => {
  console.log('\n--- Timeout nach 60 Sekunden ---');
  cleanup();
}, 60000);
