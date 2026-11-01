export default function FeatureCard({ number, title, description, tech, tone = "mint" }) {
  const tones = tone === "lemon" ? "bg-[#fff1a8]" : tone === "ochre" ? "bg-[#f4e3b5]" : "bg-[#B7EFCE]";
  return (
    <article
  className={`flex h-full min-h-[300px] flex-col rounded-[1.7rem] ${tones} p-7 shadow-[0_12px_30px_rgba(23,43,42,.06)] transition hover:-translate-y-1`}>
      <div className="mb-8 flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-[#1A1A1A]/20 text-sm font-bold">{number}</span>
        <span className="text-xs font-bold uppercase tracking-[.14em] text-[#605D69]">JOVI feature</span>
      </div>
      <h3 className="mb-3 text-xl font-black">{title}</h3>
      <p className="min-h-16 text-sm leading-6 text-[#373140]">{description}</p>
      <p className="mt-5 inline-flex rounded-full bg-white/60 px-3 py-2 text-[11px] font-bold tracking-wide">{tech}</p>
    </article>
  );
}
