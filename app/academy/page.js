"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePreviewFile } from "../../hooks/usePreviewFile";

const steps = ["Capturar", "Processar", "Traduzir", "Organizar"];
const content = {
  foto: [
    ["Capture seu material", "Selecione uma foto de uma página, apresentação, livro ou artigo."],
    ["Reconheça o texto", "No produto planejado, o ML Kit identificará o texto presente na imagem."],
    ["Traduza com contexto", "O Gemini Nano deverá ajudar a apresentar a tradução no idioma do estudante."],
    ["Guarde para depois", "O conteúdo poderá ser salvo no Cofre Acadêmico e localizado por tags."],
  ],
  video: [
    ["Capture sua aula", "Selecione um vídeo acadêmico do dispositivo."],
    ["Prepare a transcrição", "O produto prevê transcrição e análise contextual da fala."],
    ["Dublemos o conteúdo", "A proposta inclui voz neural em português e legendas sincronizadas."],
    ["Organize o aprendizado", "A futura versão permitirá guardar o vídeo dublado no Cofre Acadêmico."],
  ],
};
export default function AcademyPage() {
  const [mode, setMode] = useState("foto");
  const [stage, setStage] = useState(0);
  const {file, url, setFile} = usePreviewFile();
  function switchMode(next) {setMode(next);setStage(0);setFile(null);}
  const accept=mode==="foto"?"image/*":"video/*";
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#EEE9FF] px-4 py-2 text-xs font-black tracking-[.16em] text-[#5540C2]">✳ SIMULADOR DE EXPERIÊNCIA</div>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <h1 className="max-w-xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">Sua câmera, <span className="text-[#7157FC]">seu jeito</span> de aprender.</h1>
          <p className="mt-6 max-w-lg leading-8 text-[#6B6875]">Explore a jornada da solução apresentada na Challenge. O simulador permite escolher um arquivo local e visualizar as etapas projetadas de tradução e dublagem.</p>
          <div className="mt-8 flex flex-wrap gap-3" aria-label="Escolha do modo">
            <button type="button" aria-pressed={mode==="foto"} onClick={()=>switchMode("foto")} className={`rounded-full px-6 py-3 text-sm font-bold ${mode==="foto"?"bg-[#7157FC] text-white":"border border-[#D4D0E5] bg-white"}`}>▧ Foto acadêmica</button>
            <button type="button" aria-pressed={mode==="video"} onClick={()=>switchMode("video")} className={`rounded-full px-6 py-3 text-sm font-bold ${mode==="video"?"bg-[#7157FC] text-white":"border border-[#D4D0E5] bg-white"}`}>▷ Vídeo dublado</button>
          </div>
          <label className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#C9C1FA] bg-[#F1EEFC] px-6 py-10 text-center transition hover:border-[#7157FC]">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-2xl text-[#7157FC]">↑</span>
            <strong className="mt-3 text-base">{file?file.name:`Selecionar ${mode==="foto"?"uma imagem":"um vídeo"}`}</strong>
            <span className="mt-2 text-xs leading-5 text-[#6B6875]">Pré-visualização local. Nenhum arquivo é enviado para o servidor.</span>
            <input key={mode} type="file" accept={accept} className="sr-only" onChange={e=>setFile(e.target.files?.[0]||null)} />
          </label>
          {file&&url&&<div className="mt-4 overflow-hidden rounded-3xl border border-[#E5E2EE] bg-white p-3">
            {mode==="foto"?<Image unoptimized src={url} width={1000} height={700} alt="Imagem selecionada para pré-visualização" className="max-h-72 w-full rounded-2xl object-contain"/>:<video src={url} controls className="max-h-72 w-full rounded-2xl"/>}
            <p className="px-2 py-3 text-xs text-[#6B6875]">Pré-visualização demonstrativa. O aplicativo não extrai textos nem gera traduções reais nesta Sprint.</p>
          </div>}
          <div className="mt-6 rounded-3xl bg-[#FFF1A8] p-6"><p className="text-xs font-black tracking-[.15em]">TECNOLOGIAS PROPOSTAS</p><p className="mt-3 text-sm leading-6">{mode==="foto"?"ML Kit para reconhecimento de texto + Gemini Nano para tradução contextual.":"Transcrição e tradução com IA + Google Cloud Text-to-Speech para voz em PT-BR."}</p></div>
        </div>
        <section className="h-fit rounded-[2rem] border border-[#E5E2EE] bg-white p-6 shadow-xl shadow-[#1A1A1A]/5 sm:p-9" aria-label="Demonstração de processamento">
          <div className="flex flex-wrap items-center justify-between gap-3"><span className="text-sm font-black">Fluxo de processamento</span><span className="rounded-full bg-[#EEE9FF] px-3 py-1 text-xs font-bold text-[#5540C2]">SIMULADO</span></div>
          <div className="mt-8 grid grid-cols-4 gap-2">{steps.map((s,i)=><button type="button" key={s} aria-current={stage===i?"step":undefined} onClick={()=>setStage(i)} className={`rounded-xl px-1 py-3 text-[10px] font-bold sm:px-2 sm:text-xs ${stage===i?"bg-[#B7EFCE] text-[#1A1A1A]":"bg-[#F3F1F9] text-[#746F80]"}`}>{String(i+1).padStart(2,"0")}<span className="mt-1 block">{s}</span></button>)}</div>
          <div className="my-8 rounded-3xl bg-[#1A1A1A] p-7 text-white sm:p-9">
            <div className="flex items-center justify-between gap-2"><span className="text-xs font-bold tracking-[.14em] text-[#B7EFCE]">{mode==="foto"?"FOTO ACADÊMICA":"VÍDEO DUBLADO"}</span><span className="text-xs text-white/50">ETAPA 0{stage+1}</span></div>
            <h2 className="mt-8 text-3xl font-black">{content[mode][stage][0]}</h2>
            <p className="mt-4 min-h-20 leading-7 text-white/65">{content[mode][stage][1]}</p>
            {stage===2&&<div className="mt-5 rounded-2xl bg-white/10 p-4 text-sm"><p className="text-xs font-bold text-[#C4B7FF]">EXEMPLO ILUSTRATIVO</p><p className="mt-2 italic">Knowledge opens doors.</p><p className="mt-2 font-bold text-[#B7EFCE]">O conhecimento abre portas.</p></div>}
            <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#7157FC] transition-all" style={{width:`${(stage+1)*25}%`}} /></div>
          </div>
          <div className="flex items-center justify-between"><button type="button" onClick={()=>setStage(Math.max(0,stage-1))} disabled={stage===0} className="rounded-full border border-[#E5E2EE] px-5 py-3 text-sm font-bold disabled:opacity-30">Voltar</button><button type="button" onClick={()=>setStage((stage+1)%4)} className="rounded-full bg-[#7157FC] px-6 py-3 text-sm font-bold text-white">{stage===3?"Recomeçar ↺":"Próxima etapa →"}</button></div>
        </section>
      </div>
      <div className="mt-12 rounded-3xl bg-[#F1EEFC] p-7 md:flex md:items-center md:justify-between"><div><h3 className="text-xl font-black">Seu conteúdo merece um lugar.</h3><p className="mt-2 text-sm text-[#6B6875]">No protótipo, você pode organizar títulos, tags e pastas no Cofre Acadêmico.</p></div><Link href="/cofre" className="mt-5 inline-flex rounded-full bg-[#7157FC] px-6 py-3 text-sm font-bold text-white md:mt-0">Abrir Cofre Acadêmico ↗</Link></div>
    </main>
  );
}
