import Hero from "../components/sprint3/Hero";
import Solucao from "../components/sprint3/Solucao";
import Publico from "../components/sprint3/Publico";
import Galeria from "../components/sprint3/Galeria";
import Equipe from "../components/sprint3/Equipe";
import Contato from "../components/sprint3/Contato";
import Link from "next/link";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
 return <main>
  <Hero />
  <Solucao />
  <section className="bg-[#F1EEFC] px-5 py-20 md:px-8" aria-labelledby="jovi-mode-title">
   <div className="mx-auto max-w-7xl">
    <p className="text-xs font-black tracking-[.2em] text-[#7157FC]">EVOLUÇÃO DA SPRINT 3</p>
    <h2 id="jovi-mode-title" className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Chegou o <span>JOVI Academy Mode.</span></h2>
    <p className="mt-5 max-w-3xl text-base leading-8 text-[#6B6875]">A mesma Jovi Academy agora apresenta o fluxo inteligente da câmera: traduza fotos, acompanhe vídeos em português e organize tudo no Cofre Acadêmico.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-3">
     <FeatureCard number="01" title="Foto acadêmica" description="Tradução contextual sobre a imagem original: conceito demonstrado no simulador." tech="ML KIT + GEMINI NANO (PROPOSTA)" />
     <FeatureCard number="02" title="Vídeo dublado" description="Dublagem neural e legendas sincronizadas em português, representadas no protótipo." tech="CLOUD TEXT-TO-SPEECH (PROPOSTA)" tone="lemon" />
     <FeatureCard number="03" title="Cofre acadêmico" description="Agora com área privada, cadastro, busca, pastas, etiquetas e edição." tech="API MOCKADA + REACT" tone="ochre" />
    </div>
    <div className="mt-10 flex flex-wrap gap-4"><Link href="/academy" className="inline-flex rounded-full bg-[#7157FC] px-8 py-4 text-sm font-bold text-white hover:bg-[#5540C2]">Testar o Academy Mode ↗</Link><Link href="/cofre" className="inline-flex rounded-full border border-[#D4D0E5] bg-white px-8 py-4 text-sm font-bold">Abrir meu Cofre</Link></div>
   </div>
  </section>
  <Publico />
  <Galeria />
  <Equipe />
  <Contato />
 </main>;
}
