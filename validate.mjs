import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { bundleData } from './build.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const load = async name => JSON.parse(await readFile(root + `data/${name}.json`, 'utf8'));
const [G, C, Q, B] = await Promise.all(['glossary', 'chapters', 'questions', 'bridges'].map(load));
assert.equal(G.length, 1966); assert.equal(C.length, 56); assert.equal(Q.length, 168); assert.equal(B.length, 56);
for (const rows of [G, C, Q]) assert.equal(new Set(rows.map(x => x.id)).size, rows.length);
for (const g of G) {
  assert.ok(g.term.trim() && g.definition.length > 15, g.id);
  assert.ok(g.chapters.length && g.chapters.every(n => Number.isInteger(n) && n >= 1 && n <= 56), g.id);
  assert.equal(g.source, 'original');
  assert.ok(!('recording' in g) && !('time' in g), 'No source recording metadata');
}
for (const c of C) {
  assert.ok(G.some(g => g.chapters.includes(c.id)), `Chapter ${c.id} needs vocabulary`);
  assert.equal(Q.filter(q => q.chapter === c.id && q.kind === 'public').length, 2);
  assert.equal(Q.filter(q => q.chapter === c.id && q.kind === 'concept').length, 1);
  assert.equal(B.filter(b => b.chapter === c.id).length, 1);
}
for (const q of Q) {
  assert.ok(q.question && q.explanation && q.options.length >= 3);
  assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.options.length);
  if (q.kind === 'public') assert.ok(q.url.startsWith('https://openstax.org/') && q.sourceQuestion);
}
assert.equal(await readFile(root + 'assets/data.js', 'utf8'), await bundleData(), 'Run npm run build after changing data');
const html = await readFile(root + 'index.html', 'utf8');
assert.ok(html.includes('<title>gen bio atlas'));
for (const path of ['assets/styles.css', 'assets/data.js', 'assets/app.js', 'assets/icon.svg']) {
  assert.ok(html.includes(path)); await readFile(root + path);
}
console.log('PASS content counts, chapter coverage, provenance fields, and generated bundle consistency');
