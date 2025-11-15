import React, { useEffect } from "react";
import "../css/style.css";

export default function IniCliente() {
  useEffect(() => {
    // Cargar Swiper JS desde CDN
    const script = document.createElement("script");
    script.src = "https://unpkg.com/swiper@8/swiper-bundle.min.js";
    script.onload = () => {
      new window.Swiper(".home-slider", {
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <section className="flex">
          <a href="/inicio-cliente" className="logo">
            APP GUSTO
          </a>

          <nav className="navbar">
            <a href="/inicio-cliente">Inicio</a>
            <a href="/menu-cliente">Menú</a>
            <a href="/reservas-cliente">Reservaciones</a>
            <a href="/contacto">Contacto</a>
          </nav>

          <div className="icons">
            <div id="user-btn" className="fas fa-user"></div>
            <div id="menu-btn" className="fas fa-bars"></div>
          </div>

          <div className="profile" id="profile" style={{ display: "none" }}>
            <p className="name">Nombre del Cliente</p>
            <div className="flex">
              <a href="/perfil-cliente" className="btn">
                Perfil
              </a>
              <a href="#" className="delete-btn">
                Cerrar sesión
              </a>
            </div>
          </div>
        </section>
      </header>

      {/* Slider principal */}
      <section className="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div className="content">
                <span>Bienvenido a</span>
                <h3>APP GUSTO</h3>
                <a href="/menu-cliente" className="btn">Ver menú</a>
              </div>
              <div className="image">
                <img src="/images/banner1.jpg" alt="banner1" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>Prueba nuestros</span>
                <h3>Sabores únicos</h3>
                <a href="/menu-cliente" className="btn">Pedir ahora</a>
              </div>
              <div className="image">
                <img src="/images/banner2.jpg" alt="banner2" />
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* Sección información */}
      <section className="about" id="about">
        <h1 className="heading">Sobre Nosotros</h1>
        <div className="row">
          <div className="image">
            <img src="/images/about.jpg" alt="about" />
          </div>
          <div className="content">
            <h3>Tu restaurante favorito al alcance de un clic</h3>
            <p>
              En <strong>App Gusto</strong> combinamos la tecnología y la
              gastronomía para ofrecerte una experiencia deliciosa y práctica.
            </p>
            <a href="/contacto" className="btn">Contáctanos</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <section>
          <div className="credit">
            © {new Date().getFullYear()} <span>App Gusto</span> — Todos los derechos reservados.
          </div>
        </section>
      </footer>
    </div>
  );
}
