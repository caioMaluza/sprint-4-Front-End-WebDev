"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const [email,setEmail]=useState("aluno@jovi.com");
  const [password,setPassword]=useState("jovi2026");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const router=useRouter();
  async function submit(e){e.preventDefault();setLoading(true);setError("");try{const r=await fetch("/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})});const data=await r.json();if(!r.ok)throw new Error(data.error);router.push("/cofre");router.refresh();}catch(err){setError(err.message)}finally{setLoading(false)}}
  return <main className="grid min-h-[75vh] place-items-center px-5 py-16"><div className="w-full max-w-md rounded-[2rem] border border-[#E5E2EE] bg-white p-8 shadow-xl shadow-[#1A1A1A]/5 sm:p-10"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#B7EFCE] text-xl font-black">J</span><p className="mt-7 text-xs font-black tracking-[.2em] text-[#7157FC]">BEM-VINDO DE VOLTA</p><h1 className="mt-3 text-3xl font-black leading-tight tracking-tight">Entre no seu cofre.</h1><p className="mt-3 text-sm leading-6 text-[#6B6875]">Use a conta demonstrativa para acessar a área acadêmica.</p>
  <form onSubmit={submit} className="mt-8 flex flex-col gap-5"><label className="block text-sm font-bold">E-mail<input value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="mt-2 w-full rounded-xl border border-[#E5E2EE] bg-[#FAF9FE] px-4 py-3 outline-none focus:border-[#7157FC]" /></label><label className="block text-sm font-bold">Senha<input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="mt-2 w-full rounded-xl border border-[#E5E2EE] bg-[#FAF9FE] px-4 py-3 outline-none focus:border-[#7157FC]" /></label>{error&&<p role="alert" className="text-sm font-semibold text-red-600">{error}</p>}<button disabled={loading} className="w-full rounded-full bg-[#7157FC] px-6 py-4 text-sm font-bold text-white disabled:opacity-60">{loading?"Entrando...":"Entrar no JOVI →"}</button></form>
  <div className="mt-6 rounded-2xl bg-[#fff7d6] p-4 text-xs leading-6 text-[#5f5019]"><strong>Acesso para avaliação</strong><br/>E-mail: aluno@jovi.com<br/>Senha: jovi2026</div></div></main>;
}
