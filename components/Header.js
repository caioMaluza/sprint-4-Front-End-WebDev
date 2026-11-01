"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
 const [menuOpen,setMenuOpen]=useState(false);
 const pathname=usePathname();
 const close=()=>setMenuOpen(false);
 const anchors=[['solucao','A Solução'],['publico','Público-Alvo'],['galeria','Galeria'],['equipe','Equipe'],['contato','Contato']];
 return <header className="site-header"><nav className="navbar container" aria-label="Navegação principal">
  <Link href="/" className="logo" onClick={close}><span className="logo-mark">J</span><span>jovi academy<span className="logo-dot">.</span></span></Link>
  <div id="jovi-nav" className={menuOpen?'nav-links open':'nav-links'}>
   {anchors.map(([id,label])=><Link key={id} href={`/#${id}`} onClick={close}>{label}</Link>)}
   <Link className="nav-academy" href="/academy" onClick={close}>Academy Mode</Link>
   <Link href="/cofre" onClick={close}>Meu Cofre</Link>
   <Link href="/login" onClick={close}>Entrar</Link>
  </div>
  <button type="button" className="menu-toggle" aria-label={menuOpen?'Fechar menu':'Abrir menu'} aria-expanded={menuOpen} aria-controls="jovi-nav" onClick={()=>setMenuOpen(!menuOpen)}><span/><span/><span/></button>
 </nav></header>;
}
