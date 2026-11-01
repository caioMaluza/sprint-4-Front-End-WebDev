export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <a className="logo footer-logo" href="/#inicio">
            <span className="logo-mark">J</span>
            <span>jovi academy<span className="logo-dot">.</span></span>
          </a>
          <p>Tradução para estudar.<br />Organização para continuar.</p>
        </div>

        <div className="footer-links">
          <div>
            <span>MENU</span>
            <a href="/#solucao">A Solução</a>
            <a href="/#publico">Público-Alvo</a>
            <a href="/#galeria">Galeria</a>
          </div>
          <div>
            <span>PROJETO</span>
            <a href="/#equipe">Nossa Equipe</a>
            <a href="/#contato">Contato</a>
            <a href="/#inicio">Voltar ao topo ↑</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Jovi Academy. Projeto acadêmico.</span>
        <span>FIAP • Sprint 4 — evolução da Sprint 3</span>
      </div>
    </footer>
  );
}