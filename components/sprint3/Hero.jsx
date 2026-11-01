export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="eyebrow">TRADUÇÃO • ESTUDO • ORGANIZAÇÃO</p>
          <h1>
            O mundo fala várias línguas.
            <br />
            <span>Seu estudo não precisa.</span>
          </h1>
          <p className="hero-text">
            A Jovi academy transforma documentos, fotos e vídeos em conteúdos
            acessíveis em português — e ainda guarda tudo em um só lugar com o{" "}
            <strong>Jovi Cofre</strong>.
          </p>

          <div className="hero-actions">
            <a href="/academy" className="button button-primary">
              Conheça o Academy Mode <span>→</span>
            </a>
            <a href="#galeria" className="button button-secondary">
              Ver galeria
            </a>
          </div>

          <div className="hero-stats" aria-label="Principais recursos">
            <div>
              <strong>01</strong>
              <span>Documentos</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Fotos</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Vídeos</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Jovi Cofre</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Exemplo visual do Jovi traduzindo conteúdo">
          <div className="floating-card card-document">
            <div className="mini-toolbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="mini-label">DOCUMENTO</p>
            <h3>
              Academic
              <br />
              Reading
            </h3>
            <div className="translation-line"></div>
            <p>Leitura acadêmica traduzida para português.</p>
            <span className="translated-badge">✓ Traduzido</span>
          </div>

          <div className="phone-card">
            <div className="phone-top">
              <span>9:41</span>
              <span>● ● ●</span>
            </div>
            <div className="phone-screen">
              <span className="screen-tag">JOVI COFRE</span>
              <h3>
                Seus arquivos.
                <br />
                Seu idioma.
              </h3>
              <div className="folder-row">
                <span className="folder">📄</span>
                <div>
                  <strong>Paper - AI Ethics</strong>
                  <small>Traduzido • PDF</small>
                </div>
              </div>
              <div className="folder-row">
                <span className="folder">🖼️</span>
                <div>
                  <strong>Aula - Machine Learning</strong>
                  <small>Traduzido • Foto</small>
                </div>
              </div>
              <div className="folder-row">
                <span className="folder">🎬</span>
                <div>
                  <strong>Lecture - English</strong>
                  <small>Traduzido • Vídeo</small>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-pill">
            PT-BR <span>✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}