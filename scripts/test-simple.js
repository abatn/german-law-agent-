const { spawn } = require('child_process');

console.log('=== Test: mcp-remote startet ===');
console.log('Befehl: npx -y mcp-remote@0.1.38 https://gateway.ansvar.eu/mcp');
console.log('Erwarte OAuth-Ausgabe...');
console.log('');

const child = spawn('npx', ['-y', 'mcp-remote@0.1.38', 'https://gateway.ansvar.eu/mcp'], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: { ...process.env, NODE_TLS_REJECT_UNAUTHORIZED: '0' }
});

let output = '';
let started = false;
let timeout = setTimeout(() => {
  console.log('');
  console.log('--- Timeout nach 30 Sekunden ---');
  if (!started) {
    console.log('❌ mcp-remote hat sich nicht initialisiert');
  } else {
    console.log('✅ mcp-remote gestartet, aber keine Antwort auf tools/list erhalten');
  }
  child.kill();
  process.exit(0);
}, 30000);

let lastLines = [];

child.stdout.on('data', (data) => {
  const str = data.toString();
  output += str;
  lastLines.push(str);
  if (lastLines.length > 10) lastLines.shift();
  
  if (!started && str.includes('Connected') || str.includes('Local STDIO')) {
    started = true;
    console.log('');
    console.log('✅ mcp-remote verbunden!');
    console.log(str);
    console.log('');
    console.log('Wende jetzt tools/list an...');
    
    const request = JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "tools/list",
      params: {}
    }) + '\n';
    
    child.stdin.write(request);
    
    setTimeout(() => {
      if (output.includes('tools/list')) {
        console.log('✅ tools/list wurde gesendet, aber Antwort kommt nicht');
      }
      console.log('--- Letzte Ausgabe ---');
      console.log(output.split('\n').slice(-20).join('\n'));
      child.kill();
      process.exit(0);
    }, 5000);
  } else if (str.includes('OAuth') || str.includes('login') || str.includes('authorize') || str.includes('browser')) {
    console.log('🔐 OAuth benötigt - Browser öffnet sich...');
    console.log(str);
  }
});

child.stderr.on('data', (data) => {
  const str = data.toString();
  console.log('STDERR:', str);
});

child.on('close', (code) => {
  clearTimeout(timeout);
  console.log('');
  console.log(`mcp-remote beendet mit Code ${code}`);
  if (started) {
    console.log('✅ Test abgeschlossen');
  } else {
    console.log('❌ mcp-remote hat sich nicht initialisiert');
  }
});
