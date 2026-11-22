/**
 * Test de fumée (Mission 1) — rend chaque vue côté serveur et vérifie des marqueurs.
 * Aucun navigateur ni réseau requis : garantit que les trois interfaces
 * (diffusion · administrateur · participant) + l'accueil se montent sans erreur.
 *
 *   npm run test:smoke
 */
import { buildSync } from 'esbuild';
import { createRequire } from 'node:module';
import { writeFileSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const bundle = buildSync({
  stdin: {
    contents: `
      import { renderToString } from 'react-dom/server';
      import { createElement } from 'react';
      import App from './src/App.jsx';
      export function render() {
        return renderToString(createElement(App));
      }
    `,
    resolveDir: root,
    loader: 'jsx',
  },
  bundle: true,
  write: false,
  format: 'cjs',
  platform: 'node',
  jsx: 'automatic',
  logLevel: 'silent',
}).outputFiles[0].text;

const tmp = join(tmpdir(), `jeu-smoke-${process.pid}.cjs`);
writeFileSync(tmp, bundle);
const require = createRequire(import.meta.url);
const { render } = require(tmp);

const ROUTES = [
  { hash: '#/', name: 'Accueil', markers: ['JEU', 'DIFFUSION', 'ADMINISTRATEUR', 'PARTICIPANT'] },
  { hash: '#/diffusion', name: 'Diffusion', markers: ['EN DIRECT', 'PRÉSENTATEUR', 'QUESTION'] },
  { hash: '#/admin', name: 'Administrateur', markers: ['PILOTAGE', 'CANDIDATS', 'ÉPREUVE EN COURS', 'RÉVÉLER'] },
  { hash: '#/participant', name: 'Participant', markers: ['MICR', 'CAM', 'PRÉSENTATEUR'] },
  { hash: '#/route-inexistante', name: '404', markers: ['404'] },
];

let failed = 0;
for (const { hash, name, markers } of ROUTES) {
  globalThis.window = { location: { hash } };
  let html = '';
  try {
    html = render();
  } catch (err) {
    console.error(`✗ ${name} (${hash}) — exception au rendu :`, err);
    failed += 1;
    continue;
  }
  const upper = html.toUpperCase();
  const missing = markers.filter((m) => !upper.includes(m.toUpperCase()));
  if (missing.length) {
    console.error(`✗ ${name} (${hash}) — marqueurs manquants : ${missing.join(', ')}`);
    failed += 1;
  } else {
    console.log(`✓ ${name} (${hash}) — rendu OK (${html.length} caractères, ${markers.length} marqueurs)`);
  }
}

rmSync(tmp, { force: true });

if (failed) {
  console.error(`\n${failed} vue(s) en échec.`);
  process.exit(1);
}
console.log('\nToutes les vues se montent sans erreur.');
