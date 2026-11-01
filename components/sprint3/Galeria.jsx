export default function Galeria() {
  return (
    <section className="section gallery" id="galeria">
      <div className="container">
        <div className="section-heading gallery-heading">
          <div>
            <p className="eyebrow">JOVI COFRE • GALERIA</p>
            <h2>Do conteúdo original ao <span>entendimento.</span></h2>
          </div>
          <p>Uma prévia de como materiais diferentes podem ficar dentro do Jovi Cofre.</p>
        </div>

        <div className="gallery-grid">
          <article className="media-card photo-card">
            <div className="media-image">
              <img
                src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=85"
                alt="Pessoa estudando e fazendo anotações em um caderno"
              />
              <div className="translation-overlay">
                <span>TRADUÇÃO JOVI</span>
                <p>“A aprendizagem é um processo contínuo de descoberta.”</p>
              </div>
            </div>
            <div className="media-info">
              <div><span className="media-type">FOTO</span><h3>Study Notes</h3></div>
              <span className="check">✓</span>
            </div>
          </article>

          <article className="media-card document-card">
            <div className="paper">
              <div className="paper-header">
                <span>JOVI TRANSLATION</span><small>01 / 04</small>
              </div>
              <h3>The impact of artificial intelligence on education</h3>
              <div className="paper-rule"></div>
              <p><strong>O impacto da inteligência artificial na educação</strong></p>
              <p className="paper-muted">
                A inteligência artificial pode apoiar estudantes ao personalizar experiências
                de aprendizagem, ampliar o acesso a recursos e auxiliar na compreensão de conteúdos.
              </p>
              <div className="paper-highlight">✓ Conteúdo traduzido para português</div>
            </div>
            <div className="media-info">
              <div><span className="media-type">DOCUMENTO</span><h3>AI & Education.pdf</h3></div>
              <span className="check">✓</span>
            </div>
          </article>

          <article className="media-card video-card">
            <div className="video-preview">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85"
                alt="Estudantes assistindo a uma apresentação"
              />
              <div className="play-button">▶</div>
              <div className="video-duration">08:42</div>
              <div className="subtitle-preview">The future of technology<br /><strong>O futuro da tecnologia</strong></div>
            </div>
            <details className="subtitle-box">
              <summary>Ver tradução das legendas <span>＋</span></summary>
              <div className="subtitle-content">
                <p><b>EN:</b> Technology changes how we learn.</p>
                <p><b>PT:</b> A tecnologia transforma a forma como aprendemos.</p>
                <hr />
                <p><b>EN:</b> Access to information should not depend on language.</p>
                <p><b>PT:</b> O acesso à informação não deveria depender do idioma.</p>
              </div>
            </details>
            <div className="media-info">
              <div><span className="media-type">VÍDEO</span><h3>Technology Lecture.mp4</h3></div>
              <span className="check">✓</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}