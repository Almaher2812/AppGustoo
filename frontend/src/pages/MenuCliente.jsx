import React, { useState, useEffect } from "react";
import "../css/style.css"; // Ruta corregida: css compartido en src/css

const Menu_Cliente = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simula el loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Cierra el perfil si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const profile = document.getElementById("profile");
      const userBtn = document.getElementById("user-btn");
      if (profile && !profile.contains(event.target) && !userBtn.contains(event.target)) {
        setProfileVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <img src="images/loader.gif" alt="Cargando..." />
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <section className="flex">
          <a href="ini_clientes.html" className="logo">
            APP GUSTO
          </a>

          <nav className="navbar">
            <a href="ini_clientes.html">Inicio</a>
            <a href="menu_clientes.html">Menu</a>
            <a href="reserva_clientes.html">Reservaciones</a>
            <a href="contact_clientes.html">Contacto</a>
            <a href="about.html">Acerca de</a>
          </nav>

          <div className="icons">
            <a href="carrito.html">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <div
              id="user-btn"
              className="fas fa-user"
              onClick={() => setProfileVisible(!profileVisible)}
            ></div>
            <div id="menu-btn" className="fas fa-bars"></div>
          </div>

          {profileVisible && (
            <div className="profile" id="profile">
              <p className="name">Nombre del Usuario</p>
              <div className="flex">
                <a href="perfil.html" className="btn">
                  Perfil
                </a>
                <a href="index.html" className="delete-btn">
                  Cerrar sesión
                </a>
              </div>
            </div>
          )}
        </section>
      </header>

      <div className="heading">
        <h3>Menu</h3>
        <p>
          <a href="ini_clientes.html">Volver</a> <span> / Inicio</span>
        </p>
      </div>

      <section className="category">
        <h1 className="title">Categorias</h1>
        <div className="box-container">
          <a href="comra_clientes.html" className="box">
            <img src="images/cat-1.png" alt="Comidas rápidas" />
            <h3>Comidas rápidas</h3>
          </a>

          <a href="pf_clientes.html" className="box">
            <img src="images/cat-2.png" alt="Platos Fuertes" />
            <h3>Platos Fuertes</h3>
          </a>

          <a href="bebidas.html" className="box">
            <img src="images/cat-3.png" alt="Bebidas" />
            <h3>Bebidas</h3>
          </a>

          <a href="post_clientes.html" className="box">
            <img src="images/cat-4.png" alt="Postres" />
            <h3>Postres</h3>
          </a>
        </div>
      </section>

      <footer className="footer">
        <section className="box-container">
          <div className="box">
            <img src="images/email-icon.png" alt="email" />
            <h3>our email</h3>
            <a href="mailto:alejandromateus2812@gmail.com">
              alejandromateus2812@gmail.com
            </a>
          </div>

          <div className="box">
            <img src="images/clock-icon.png" alt="horario" />
            <h3>opening hours</h3>
            <p>07am to 10pm</p>
          </div>

          <div className="box">
            <img src="images/map-icon.png" alt="dirección" />
            <h3>our address</h3>
            <a href="https://www.google.com/maps">colombia</a>
          </div>

          <div className="box">
            <img src="images/phone-icon.png" alt="teléfono" />
            <h3>our number</h3>
            <a href="tel:3102500664">310 2500664</a>
          </div>
        </section>

        <div className="credit">
          &copy; copyright @ 2022 by{" "}
          <span>web app gusto</span> | all rights reserved!
        </div>
      </footer>
    </>
  );
};

export default Menu_Cliente;
