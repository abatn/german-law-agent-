const { spawn } = require('child_process');

// PDF-Reader MCP-Client (stdout/stdin Basie)
const child = spawn('npx', ['-y', '@sylphx/citra'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

const pdfPath = '/home/batnini/mimo-agents/contract-check/test-mietvertrag-immowelt.pdf';

// 1. Initialize
const initReq = {
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "pdf-test-client", version: "1.0" }
  }
};

// 2. Read PDF
const readPdfReq = {
  jsonrpc: "2.0",
  id: 2,
  method: "tools/call",
  params: {
    name: "read_pdf",
    arguments: {
      sources: [{ type: "file", file: pdfPath }]
    }
  }
};

// Helper: Write request and log output
function writeRequest(req) {
  child.stdin.write(JSON.stringify(req) + '\n');
}

// Output parsing
let buf = '';

child.stdout.on('data', (data) => {
  buf += data.toString();
  const lines = buf.split('\n');
  buf = lines.pop();
  for (const line of lines) {
    if (line.trim()) {
      try {
        const msg = JSON.parse(line.trim());
        if (msg.id === 1) {
          console.log('✅ Initialize OK');
          writeRequest(readPdfReq);
        } else if (msg.id === 2) {
          console.log('✅ read_pdf OK');
          const content = msg.result?.content?.[0];
          if (content?.type === 'text') {
            console.log('Extracted text length:', content.text.length);
            console.log('Preview (500 char):', content.text.substring(0, 500));
          } else if (content?.type === 'resource' && content.resource?.blob) {
            console.log('Extracted text length:', content.resource.blob.length);
            console.log('Preview (500 char):', content.resource.blob.substring(0, 500));
          } else {
            console.log('Result:', JSON.stringify(msg.result, null, 2).substring(0, 500));
          }
          child.kill();
        }
      } catch (e) { /* ignore */ }
    }
  }
});

child.stderr.on('data', (data) => {
  console.error('STDERR:', data.toString());
});

child.on('close', () => process.exit(0));

// Start
writeRequest(initReq);
