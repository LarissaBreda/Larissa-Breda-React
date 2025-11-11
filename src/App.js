import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">BLUEN</div>
          <nav className="nav-menu">
            <ul>
              <li><a href="#servicos">SERVIÇOS</a></li>
              <li><a href="#projetos">PROJETOS</a></li>
              <li><a href="#contato">CONTATE-NOS</a></li>
            </ul>
          </nav>
          <button className="hamburger-menu" aria-label="Abrir Menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      <main>
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                {/* HERO SECTION */}
                <section className="hero-section">
                  <div className="hero-content">
                    <p className="hero-subtitle">DESIGN DE INTERIORES</p>
                    <h1 className="hero-title">
                      Transformando Espaços<br />Em experiências.</h1>
                    <a href="#" className="hero-cta-btn">LOGIN OU CADASTRO</a>
                  </div>
                  
                </section>

                {/* PARCEIROS */}
                <section className="partners-section">
                  <div className="partners-content">
                    <div className="partner-logos">
                      <p className="logo-item crate">Parceiros:</p>
                      <span className="logo-item boconcept">Crate&Barrel</span>
                      <span className="logo-item tokstok">TOK&STOK</span>
                      <span className="logo-item boconcept">BoConcept</span>
                      <span className="logo-item mobly">MOBLY</span>
                    </div>
                  </div>
                </section>

                {/* SERVIÇOS */}
                <section className="services-section">
                  <div className="services-header">
                    <div className="services-titles">
                      <p className="section-tag" id="servicos">SERVIÇOS</p>
                      <h2 className="section-headline">
                        O melhor em<br />cada obra
                      </h2>
                    </div>
                  </div>

                  <div className="service-cards">
                    <div className="service-card">
                      <div className="service-icon"><i className="fas fa-euro-sign"></i></div>
                      <h3>Planejamento de Espaços</h3>
                      <p>
                        Criamos layouts inteligentes que aproveitam cada canto do seu ambiente,
                        garantindo funcionalidade, conforto e estética.
                      </p>
                    </div>

                    <div className="service-card">
                      <div className="service-icon"><i className="fas fa-couch"></i></div>
                      <h3>Móveis Sob Medida</h3>
                      <p>
                        Desenvolvemos móveis personalizados que se encaixam perfeitamente no seu espaço,
                        combinando design exclusivo e praticidade.
                      </p>
                    </div>

                    <div className="service-card">
                      <div className="service-icon"><i className="fas fa-ruler-combined"></i></div>
                      <h3>Distribuição de Mobiliário</h3>
                      <p>
                        Organizamos os móveis de forma estratégica para otimizar circulação,
                        uso do espaço e harmonia visual.
                      </p>
                    </div>
                  </div>
                </section>

                {/* SOBRE */}
                <section className="about-section">
                  <div className="about-content-overlay">
                    <p className="about-subtitle">SOBRE BLUEN</p>
                    <h2>
                      Estamos inovando a forma como as pessoas reinventam seus lares para o novo estilo de vida remoto.
                    </h2>
                    <div className="video-link">
                      <span className="video-label">Equipe Bluen</span>
                      <div className="play-button-container"></div>
                    </div>
                  </div>
                </section>

                {/* EXPLORE */}
                <section className="explore-section">
                  <div className="explore-background">
                    <div className="explore-overlay">
                      <div className="explore-content">
                        <p className="explore-subtitle" id="projetos">EXPLORE NOSSOS TRABALHOS</p>
                        <h3>Veja o que podemos fazer juntos</h3>
                        <button className="explore-cta">VEJA TODOS OS PROJETOS</button>
                      </div>
                    </div>
                  </div>

                  <div className="project-navigation">
                    <div className="nav-item active-nav-item" style={{ color: "#003366" }}>
                      PLANEJAMENTO DE ESPAÇOS
                    </div>
                    <div className="nav-item" style={{ color: "#003366" }}>
                      MÓVEIS SOB MEDIDA
                    </div>
                    <div className="nav-item" style={{ color: "#003366" }}>
                      LAYOUT DE MÓVEIS
                    </div>
                  </div>
                </section>

                {/* GALERIA */}
                <section className="projects-gallery-section">
                  <div className="gallery-grid">
                    <Link
                      to=""
                      className="project-card"
                      style={{ backgroundImage: "url('./Imagens/quartoIND.jpeg')", color: "white" }}
                    >
                      <div className="card-overlay">
                        <span className="location">IDEIAS DE QUARTO</span>
                        <span className="date">BLUEN</span>
                      </div>
                    </Link>

                    <a href="./sala.html" className="project-card" style={{ backgroundImage: "url('./Imagens/salaIND.jpeg')" }}>
                      <div className="card-overlay">
                        <span className="location">IDEIAS DE SALA DE ESTAR</span>
                        <span className="date">BLUEN</span>
                      </div>
                    </a>

                    <a href="./banheiro.html" className="project-card" style={{ backgroundImage: "url('./Imagens/banheiroInd.jpeg')" }}>
                      <div className="card-overlay">
                        <span className="location">IDEIAS DE BANHEIRO</span>
                        <span className="date">BLUEN</span>
                      </div>
                    </a>

                    <a href="#" className="project-card" style={{ backgroundImage: "url('./Imagens/cozinhaIND.jpeg')" }}>
                      <div className="card-overlay">
                        <span className="location">IDEIAS DE COZINHA</span>
                        <span className="date">BLUEN</span>
                      </div>
                    </a>

                    <a href="./garagem.html" className="project-card" style={{ backgroundImage: "url('./Imagens/garagemIND.jpeg')" }}>
                      <div className="card-overlay">
                        <span className="location">IDEIAS DE GARAGEM</span>
                        <span className="date">BLUEN</span>
                      </div>
                    </a>

                    <a href="#" className="project-card" style={{ backgroundImage: "url('./Imagens/corredorIND.jpeg')" }}>
                      <div className="card-overlay">
                        <span className="location">IDEIAS DE CORREDOR</span>
                        <span className="date">BLUEN</span>
                      </div>
                    </a>

                    <a href="./lavabo.html" className="project-card" style={{ backgroundImage: "url('./Imagens/LavaboIND.jpeg')" }}>
                      <div className="card-overlay">
                        <span className="location">IDEIAS DE LAVABO</span>
                        <span className="date">11.20.24</span>
                      </div>
                    </a>

                    <a href="./salaLz.html" className="project-card" style={{ backgroundImage: "url('./Imagens/lazer1.png')" }}>
                      <div className="card-overlay">
                        <span className="location">IDEIAS DE SALA DE LAZER</span>
                        <span className="date">8.19.20</span>
                      </div>
                    </a>

                    <a href="./salaLz.html" className="project-card" style={{ backgroundImage: "url('./Imagens/closet1.png')" }}>
                      <div className="card-overlay">
                        <span className="location">IDEIAS DE CLOSET</span>
                        <span className="date">8.19.20</span>
                      </div>
                    </a>
                  </div>
                </section>

                {/* TESTEMUNHOS */}
                <section className="testimonial-section">
                  <div className="testimonial-container">
                    <div className="testimonial-image-column">
                      <img src="./Imagens/mulher.jpg" alt="Samantha Vohnhale" className="client-photo" />
                      <div className="image-overlay"></div>
                    </div>

                    <div className="testimonial-content-column">
                      <h2 className="client-name">Samantha<br />Vohnhale</h2>
                      <p className="client-location">SÃO FRANCISCO, CALIFÓRNIA</p>
                    </div>

                    <div className="testimonial-text-column">
                      <p className="testimonial-text">
                        Trabalhar com a Bluen transformou completamente a minha casa. Eu queria um espaço que fosse bonito,
                        funcional e que refletisse meu estilo — e eles entenderam exatamente o que eu precisava. 
                        O planejamento de cada ambiente, os móveis sob medida e o cuidado com cada detalhe fizeram toda a diferença.
                        Hoje, minha casa é o lugar onde mais amo estar!
                      </p>
                    </div>
                  </div>
                </section>
                <section className="team-section">
                  <header className="team-header">
                    <div className="team-time" id="contato">NOSSO TIME</div>
                    <h1>Atrás do Design</h1>
                  </header>

                  <div className="team-grid">
                    <div className="team-member member-1">
                      <div className="member-card">
                        <img src="./Imagens/sophia.png" alt="Sophia" />
                        <div className="member-info">
                          <p className="name">Sophia</p>
                          <p className="title">CEO</p>
                        </div>
                      </div>
                    </div>

                    <div className="team-member member-2">
                      <div className="member-card">
                        <img src="./Imagens/AnaLivia.jpeg" alt="Ana Livia" />
                        <div className="member-info">
                          <p className="name">Ana Livia</p>
                          <p className="title">COO</p>
                        </div>
                      </div>
                    </div>

                    <div className="team-member member-3">
                      <div className="member-card">
                        <img src="./Imagens/larissa.png" alt="Larissa" />
                        <div className="member-info">
                          <p className="name">Larissa</p>
                          <p className="title">CMO</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="team-grid">
                    <div className="team-member member-1">
                      <div className="member-card">
                        <img src="./Imagens/julia.jpeg" alt="Julia" />
                        <div className="member-info">
                          <p className="name">Julia</p>
                          <p className="title">Design</p>
                        </div>
                      </div>
                    </div>

                    <div className="team-member member-2">
                      <div className="member-card">
                        <img src="./Imagens/murilo.png" alt="Murilo" />
                        <div className="member-info">
                          <p className="name">Murilo</p>
                          <p className="title">Design</p>
                        </div>
                      </div>
                    </div>

                    <div className="team-member member-3">
                      <div className="member-card">
                        <img src="./Imagens/pedro.png" alt="Pedro" />
                        <div className="member-info">
                          <p className="name">Pedro</p>
                          <p className="title">design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </>
            }
          />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="footer-bluen">
        <div className="footer-grid">
          <div className="col-info">
            <h2>BLUEN</h2>
            <h3>About us</h3>
            <p>
              Na Bluen, acreditamos que cada espaço conta uma história — e a nossa missão é ajudar você a contá-la da melhor forma.
              Combinamos design inteligente, funcionalidade e estética para criar ambientes que refletem quem você é e como você vive.
              Seja transformando lares ou repensando espaços de trabalho, nosso foco é unir beleza, conforto e propósito em cada projeto.
              Bluen — design que inspira, transforma e acolhe.
            </p>
          </div>

          <div className="col-social col-separator">
            <h3>FOLLOW US</h3>
            <ul>
              <li><a href="#"><i className="fab fa-instagram"></i> @bluen</a></li>
              <li><a href="#"><i className="fab fa-facebook-f"></i> @bluen</a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i> @bluen</a></li>
              <li><a href="#"><i className="fab fa-youtube"></i> @bluen</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
