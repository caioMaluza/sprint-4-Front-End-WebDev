import {readFileSync,existsSync} from "node:fs";
import {join,dirname} from "node:path";
import {fileURLToPath} from "node:url";
import assert from "node:assert/strict";

const root=join(dirname(fileURLToPath(import.meta.url)),"..");
let checks=0;
function file(name) {const location=join(root,name);assert(existsSync(location),`Arquivo ausente: ${name}`);checks++;return readFileSync(location,"utf8");}
function contains(name,pattern) {assert(file(name).includes(pattern),`${name} não contém ${pattern}`);checks++;}
const pkg=JSON.parse(file("package.json"));
for (const dependency of ["react","next"]) {assert(pkg.dependencies[dependency],`Dependência ${dependency} ausente`);checks++;}
for (const dependency of ["tailwindcss","@tailwindcss/postcss"]) {assert(pkg.devDependencies[dependency],`Dependência ${dependency} ausente`);checks++;}
for (const name of ["app/layout.js","app/page.js","app/academy/page.js","app/login/page.js","app/cofre/page.js","components/Header.js","components/FeatureCard.js","hooks/useAuth.js","hooks/useLibrary.js","hooks/usePreviewFile.js","app/api/auth/route.js","app/api/library/route.js","proxy.js","README.md","INTEGRANTES.TXT","VALIDACAO.md"])file(name);
contains("app/globals.css",'@import "tailwindcss"');
contains("app/page.js","<FeatureCard");
contains("components/FeatureCard.js","tone =");
contains("hooks/useLibrary.js",'fetch("/api/library"');
contains("hooks/useLibrary.js","localStorage");
contains("hooks/useAuth.js",'fetch("/api/auth"');
contains("app/cofre/page.js","updateItem");
contains("app/cofre/page.js","removeItem");
contains("app/cofre/page.js","useMemo");
contains("app/academy/page.js","usePreviewFile");
contains("app/academy/page.js","Simulado".toUpperCase());
contains("proxy.js",'"/cofre/:path*"');
contains("README.md","npm install");
contains("README.md","npm run dev");
contains("README.md","aluno@jovi.com");
contains("README.md","jovi2026");
contains("README.md","Vercel");
contains("README.md","Inteligência Artificial");
contains("INTEGRANTES.TXT","RM:");
console.log(`OK: ${checks} verificações de integridade do projeto concluídas.`);
console.log("Nota: este teste verifica estrutura e requisitos mínimos; não substitui npm run build, npm run lint ou o teste no navegador.");
