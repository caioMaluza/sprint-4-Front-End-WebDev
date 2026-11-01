import { NextResponse } from "next/server";
import { cookies } from "next/headers";
const seedItems = [
  {id:1,title:"Machine Learning — aula 01",type:"Vídeo dublado",language:"Inglês → Português",date:"2026-10-30",folder:"Faculdade",tags:["IA","aulas"]},
  {id:2,title:"Computer Vision: fundamentos",type:"Foto acadêmica",language:"Inglês → Português",date:"2026-10-29",folder:"Pesquisas",tags:["artigo"]},
  {id:3,title:"Neural Networks — resumo",type:"Anotação",language:"Português",date:"2026-10-24",folder:"Faculdade",tags:["resumo"]},
];
async function authorized() {const store = await cookies(); return store.get("jovi_session")?.value === "jovi-demo-session";}
export async function GET() {
  if (!await authorized()) return NextResponse.json({error:"Não autorizado."},{status:401});
  return NextResponse.json({items:seedItems},{headers:{"Cache-Control":"no-store"}});
}
export async function POST(request) {
  if (!await authorized()) return NextResponse.json({error:"Não autorizado."},{status:401});
  let body;
  try {body = await request.json();} catch {return NextResponse.json({error:"JSON inválido."},{status:400});}
  if (typeof body.title !== "string" || !body.title.trim() || body.title.length>150 || !["Foto acadêmica","Vídeo dublado","Anotação"].includes(body.type)) {
    return NextResponse.json({error:"Informe título e tipo válidos."},{status:400});
  }
  const item={id:crypto.randomUUID(),title:body.title.trim(),type:body.type,language:"Português",date:new Date().toISOString().slice(0,10),folder:String(body.folder||"Geral").slice(0,40),tags:Array.isArray(body.tags)?body.tags.slice(0,5).map(x=>String(x).slice(0,24)):[]};
  // API mockada: persistência é feita no localStorage, não no servidor.
  return NextResponse.json({item},{status:201});
}
