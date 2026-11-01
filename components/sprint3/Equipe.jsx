const integrantes = [
  { num: "01", nome: "Pedro Alves", papel: "Engenheiro de Software" },
  { num: "02", nome: "Anderson Marcolino", papel: "Engenheiro de Software" },
  { num: "03", nome: "Rafaella Pazzanese", papel: "Engenheira de Software" },
  { num: "04", nome: "Caio Cesar", papel: "Engenheiro de Software" },
  { num: "05", nome: "Felipe Luan", papel: "Engenheiro de Software" },
];

export default function Equipe() {
  return (
    <section className="section team" id="equipe">
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">NOSSA EQUIPE</p>
          <h2>5 pessoas, uma <span>solução.</span></h2>
        </div>

        <div className="team-grid">
          {integrantes.map((membro) => (
            <article className="team-card" key={membro.num}>
              <div className="avatar">{membro.num}</div>
              <p>INTEGRANTE {membro.num}</p>
              <h3>{membro.nome}</h3>
              <span>{membro.papel}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}