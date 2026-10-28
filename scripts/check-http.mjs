import assert from 'node:assert/strict';
const base=process.env.CHECK_URL||'http://localhost:3000';
const pages=['/','/historias','/nosotros','/para-marcas','/contacto','/privacidad','/historias/katherinne-wollermann','/historias/yasmani-acosta','/historias/valentina-ukrow','/historias/primos-grimalt','/historias/lucas-nervi','/historias/martin-sigren'];
const titles=new Set();let checked=0;
for(const path of pages){const r=await fetch(base+path);assert.equal(r.status,200,path);const html=await r.text();const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert.ok(title,path+' title');assert.match(title,/Resilientes Totales/);assert.ok(!titles.has(title),'unique title '+path);titles.add(title);assert.match(html,/<meta name="description"/);assert.match(html,/<link rel="canonical"/);assert.match(html,/<meta property="og:title"/);assert.match(html,/<h1[ >]/);assert.match(html,/application\/ld\+json/);checked++;console.log('200 metadata',path);}
for(const [path,type] of [['/sitemap.xml','xml'],['/robots.txt','text/plain'],['/opengraph-image','image/png']]){const r=await fetch(base+path);assert.equal(r.status,200);assert.ok(r.headers.get('content-type').includes(type));console.log('200 asset',path);}
assert.equal((await fetch(base+'/historias/no-existe')).status,404);
assert.equal((await fetch(base+'/no-existe')).status,404);
const post=(payload,origin=base)=>fetch(base+'/api/contacto',{method:'POST',headers:{'Content-Type':'application/json',Origin:origin},body:JSON.stringify(payload)});
assert.equal((await post({},'https://invalid.example')).status,403);
assert.equal((await post({})).status,400);
const valid={nombre:'Prueba técnica',empresa:'Validación',email:'test@example.org',tipo:'Prensa',mensaje:'Prueba controlada sin envío real de correo.',consentimiento:true,website:''};
assert.equal((await post({...valid,website:'bot'})).status,400);
const missing=await post(valid);assert.equal(missing.status,503);assert.ok(!(await missing.json()).ok);
console.log(`${checked} páginas; SEO, assets, 404 y errores de contacto verificados. No se enviaron correos.`);
