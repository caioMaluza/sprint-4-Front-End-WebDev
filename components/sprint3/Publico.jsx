export default function Publico() {
  return (
    <section className="section audience" id="publico">
      <div className="container audience-grid">
        <div className="audience-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="audience-center">
            <span>18—25</span>
            <small>anos</small>
          </div>
          <div className="audience-chip chip-one">📚 Estudos</div>
          <div className="audience-chip chip-two">🌎 Idiomas</div>
          <div className="audience-chip chip-three">💻 Tecnologia</div>
          <div className="audience-chip chip-four">🎓 Faculdade</div>
        </div>

        <div className="audience-copy">
          <p className="eyebrow">PÚBLICO-ALVO</p>
          <h2>Aprender não deveria parar por causa de uma <span>língua.</span></h2>
          <p>
            Jovens estudantes entre 18 e 25 anos têm contato cada vez maior com conteúdos
            internacionais: artigos científicos, cursos online, vídeos, documentações,
            pesquisas e materiais produzidos em outros países.
          </p>
          <p>
            Ao mesmo tempo, a rotina acadêmica exige rapidez. Procurar uma tradução para cada
            trecho, tirar dúvidas em vários sites ou tentar entender um vídeo inteiro em outro
            idioma pode consumir tempo e dificultar a concentração no que realmente importa:
            <strong>aprender.</strong>
          </p>
          <div className="audience-points">
            <div><span>✓</span> Mais acesso a conteúdos internacionais</div>
            <div><span>✓</span> Menos tempo perdido alternando entre ferramentas</div>
            <div><span>✓</span> Materiais traduzidos e organizados em um só lugar</div>
          </div>
        </div>
      </div>
    </section>
  );
}