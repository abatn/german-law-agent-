const { spawn } = require('child_process');
const fs = require('fs');

const pdfPath = '/home/batnini/mimo-agents/contract-check/test-mietvertrag-immowelt.pdf';

// Read PDF as base64
const pdfBuffer = fs.readFileSync(pdfPath);
const base64Data = pdfBuffer.toString('base64');

console.log(`PDF gelesen: ${pdfBuffer.length} bytes → ${base64Data.length} chars base64`);

// MCP-Client
const child = spawn('npx', ['-y', '@sylphx/citra'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

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

const readPdfReq = {
  jsonrpc: "2.0",
  id: 2,
  method: "tools/call",
  params: {
    name: "read_pdf",
    arguments: {
      sources: [{ type: "base64", data: base64Data, filename: "test-mietvertrag-immowelt.pdf" }]
    }
  }
};

let buf = '';
let responseSent = false;

function sendReq(id, req) {
  child.stdin.write(JSON.stringify(req) + '\n');
}

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
          if (!responseSent) {
            responseSent = true;
            sendReq(2, readPdfReq);
          }
        } else if (msg.id === 2) {
          console.log('✅ read_pdf OK');
          const content = msg.result?.content?.[0];
          if (content?.type === 'text') {
            console.log('Extracted text length:', content.text.length);
            console.log('Preview (500 char):', content.text.substring(0, 500));
          } else if (content?.type === 'resource' && content.resource?.blob) {
            console.log('Extracted blob length:', content.resource.blob.length);
          } else {
            console.log('Result:', JSON.stringify(msg.result, null, 2).substring(0, 500));
          }
          child.kill();
        } else if (msg.error) {
          console.log('❌ Error:', JSON.stringify(msg.error, null, 2));
          child.kill();
        }
      } catch (e) { /* ignore */ }
    }
  }
});

child.stderr.on('data', (data) => {
  console.error('STDERR:', data.toString().trim());
});

child.on('close', () => process.exit(0));

console.log('Starte PDF-Extraktion...');
sendReq(1, initReq);
