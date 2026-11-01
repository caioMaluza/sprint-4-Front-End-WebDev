"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
import { useLibrary } from "../../hooks/useLibrary";

const icons={"Foto acadêmica":"▧","Vídeo dublado":"▷","Anotação":"✎"};
export default function CofrePage() {
  const {authenticated,checking}=useAuth();
  const {items,loading,error,addItem,updateItem,removeItem}=useLibrary(authenticated);
  const router=useRouter();
  const [title,setTitle]=useState(""); const [type,setType]=useState("Foto acadêmica");
  const [folder,setFolder]=useState("Faculdade"); const [tags,setTags]=useState("");
  const [message,setMessage]=useState(""); const [query,setQuery]=useState(""); const [filter,setFilter]=useState("Todos");
  const [editing,setEditing]=useState(null);const [editTitle,setEditTitle]=useState(""); const [editFolder,setEditFolder]=useState("");
  useEffect(()=>{if(!checking&&!authenticated)router.replace("/login");},[checking,authenticated,router]);
  const visible=useMemo(()=>items.filter(item=>{
    const terms=[item.title,item.type,item.folder,...(item.tags||[])].join(" ").toLocaleLowerCase("pt-BR");
    return (filter==="Todos"||item.type===filter)&&terms.includes(query.toLocaleLowerCase("pt-BR"));
  }),[items,query,filter]);
  async function save(e){e.preventDefault();setMessage("");try{await addItem({title,type,folder,tags:tags.split(",").map(x=>x.trim()).filter(Boolean)});setTitle("");setTags("");setMessage("Material cadastrado e salvo neste navegador.");}catch(err){setMessage(err.message);}}
  function startEdit(item){setEditing(item.id);setEditTitle(item.title);setEditFolder(item.folder||"Geral");}
  function finishEdit(){if(!editTitle.trim())return;updateItem(editing,{title:editTitle.trim(),folder:editFolder.trim()||"Geral"});setEditing(null);setMessage("Material atualizado.");}
  function deleteItem(item){if(window.confirm(`Remover “${item.title}” do cofre?`)){removeItem(item.id);setMessage("Material excluído.");}}
  async function logout(){await fetch("/api/auth",{method:"DELETE"});router.push("/");router.refresh();}
  if(checking||!authenticated) return <main className="grid min-h-[65vh] place-items-center text-sm text-[#6B6875]">Verificando acesso...</main>;
  return <main className="mx-auto min-h-[70vh] max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-black tracking-[.2em] text-[#7157FC]">SEU ESPAÇO DE APRENDIZADO</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Cofre Acadêmico<span className="text-[#7157FC]">.</span></h1><p className="mt-3 text-[#6B6875]">Organize os materiais que fazem parte da sua jornada.</p></div><button type="button" onClick={logout} className="rounded-full border border-[#E5E2EE] bg-white px-5 py-3 text-sm font-bold hover:bg-[#F1EEFC]">Sair da conta ↗</button></div>
    <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <form onSubmit={save} className="h-fit rounded-3xl bg-[#B7EFCE] p-6 sm:p-8"><span className="text-xs font-black tracking-[.16em]">NOVO MATERIAL</span><h2 className="mt-4 text-2xl font-black leading-tight tracking-tight sm:text-3xl">O que vamos guardar?</h2>
        <label className="mt-6 block text-sm font-bold">Título<input maxLength={150} value={title} onChange={e=>setTitle(e.target.value)} required placeholder="Ex.: Aula de Data Science" className="mt-2 w-full rounded-xl border border-[#8DCFA9] bg-white/90 px-4 py-3 outline-none focus:border-[#7157FC]" /></label>
        <label className="mt-4 block text-sm font-bold">Tipo<select value={type} onChange={e=>setType(e.target.value)} className="mt-2 w-full rounded-xl border border-[#8DCFA9] bg-white/90 px-4 py-3"><option>Foto acadêmica</option><option>Vídeo dublado</option><option>Anotação</option></select></label>
        <label className="mt-4 block text-sm font-bold">Pasta<input maxLength={40} value={folder} onChange={e=>setFolder(e.target.value)} placeholder="Ex.: Faculdade" className="mt-2 w-full rounded-xl border border-[#8DCFA9] bg-white/90 px-4 py-3" /></label>
        <label className="mt-4 block text-sm font-bold">Etiquetas (separadas por vírgula)<input value={tags} onChange={e=>setTags(e.target.value)} placeholder="Ex.: IA, prova, artigo" className="mt-2 w-full rounded-xl border border-[#8DCFA9] bg-white/90 px-4 py-3" /></label>
        <button className="mt-6 w-full rounded-full bg-[#1A1A1A] px-5 py-3 text-sm font-bold text-white hover:bg-[#35323D]">Salvar material +</button>
        {message&&<p role="status" className="mt-4 text-xs font-bold">{message}</p>}
      </form>
      <section className="min-w-0 rounded-3xl border border-[#E5E2EE] bg-white p-6 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-2"><h2 className="text-xl font-black leading-tight tracking-tight sm:text-2xl">Minha biblioteca</h2><span className="rounded-full bg-[#FFF1A8] px-3 py-1 text-xs font-bold">{items.length} itens</span></div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row"><label className="min-w-0 flex-1"><span className="sr-only">Pesquisar materiais</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar por título, pasta ou tag..." className="w-full rounded-xl border border-[#E5E2EE] bg-[#FAF9FE] px-4 py-3 text-sm" /></label><label><span className="sr-only">Filtrar por tipo</span><select value={filter} onChange={e=>setFilter(e.target.value)} className="w-full rounded-xl border border-[#E5E2EE] bg-[#FAF9FE] px-4 py-3 text-sm"><option>Todos</option><option>Foto acadêmica</option><option>Vídeo dublado</option><option>Anotação</option></select></label></div>
        {loading?<p className="py-10 text-sm text-[#6B6875]">Carregando materiais...</p>:error?<p className="py-3 text-sm text-[#A63A3A]">{error} {items.length>0?"Exibindo seus dados locais.":""}</p>:null}
        {!loading&&visible.length===0&&<p className="rounded-2xl bg-[#F1EEFC] px-5 py-8 text-center text-sm text-[#6B6875]">Nenhum material encontrado. Tente outra busca ou adicione um novo.</p>}
        <div className="mt-4 divide-y divide-[#ECEAF4]">{visible.map(item=><article key={item.id} className="py-5"><div className="flex items-start gap-3 sm:gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F1EEFC] text-xl text-[#7157FC]">{icons[item.type]||"✦"}</span><div className="min-w-0 flex-1">
          {editing===item.id?<div className="flex flex-col gap-2"><label className="text-xs font-bold">Título<input value={editTitle} onChange={e=>setEditTitle(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D4D0E5] p-2 text-sm" /></label><label className="text-xs font-bold">Pasta<input value={editFolder} onChange={e=>setEditFolder(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D4D0E5] p-2 text-sm" /></label><div className="flex gap-2"><button type="button" onClick={finishEdit} className="rounded-full bg-[#7157FC] px-4 py-2 text-xs font-bold text-white">Salvar</button><button type="button" onClick={()=>setEditing(null)} className="rounded-full bg-[#F3F1F9] px-4 py-2 text-xs font-bold">Cancelar</button></div></div>:<><h3 className="break-words font-bold">{item.title}</h3><p className="mt-1 text-xs text-[#6B6875]">{item.type} · {item.folder||"Geral"} · {item.date}</p>{(item.tags||[]).length>0&&<div className="mt-3 flex flex-wrap gap-1">{item.tags.map((tag,i)=><span key={`${tag}-${i}`} className="rounded-full bg-[#F1EEFC] px-2 py-1 text-[11px] text-[#5540C2]">#{tag}</span>)}</div>}<div className="mt-3 flex gap-4"><button type="button" onClick={()=>startEdit(item)} className="text-xs font-bold text-[#5540C2] hover:underline">Editar</button><button type="button" onClick={()=>deleteItem(item)} className="text-xs font-bold text-[#8C4C4C] hover:underline">Excluir</button></div></>}
        </div></div></article>)}</div>
      </section>
    </div>
    <p className="mt-7 text-xs leading-6 text-[#746F80]">Protótipo acadêmico: a API fornece materiais de exemplo e valida os cadastros. Suas alterações ficam salvas apenas no <strong>localStorage deste navegador</strong>, não em banco de dados. O upload e a tradução real são funcionalidades propostas para o aplicativo final.</p>
  </main>;
}
