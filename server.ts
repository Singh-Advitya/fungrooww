import express from 'express';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Ensure dist/index.html exists upon boot
if (!fs.existsSync(indexPath)) {
  console.log('[Funngro Server] dist/index.html not found, building production bundle...');
  try {
    execSync('npx vite build', { stdio: 'inherit' });
    console.log('[Funngro Server] Production bundle built successfully.');
  } catch (err) {
    console.error('[Funngro Server] Failed to build production bundle:', err);
  }
}

// Serve static assets from dist
app.use(express.static(distPath));

// Health check endpoint for Cloud Run
app.get('/healthz', (_req, res) => {
  res.status(200).send('OK');
});

// Fallback to index.html for SPA client-side routing
app.get('*', (_req, res) => {
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send(`<!DOCTYPE html>
<html lang="en" style="background:#0b0f19;color:#f8fafc;font-family:sans-serif;">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="2">
  <title>Funngro – Teen Earning Platform</title>
</head>
<body style="background:#0b0f19;color:#f8fafc;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <div style="text-align:center;">
    <h2 style="color:#fbbf24;margin-bottom:8px;">Funngro Platform</h2>
    <p style="color:#94a3b8;font-size:14px;">Preparing application, refreshing in a moment...</p>
  </div>
</body>
</html>`);
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Funngro production server listening on http://${HOST}:${PORT}`);
});
