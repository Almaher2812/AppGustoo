import React, { useState, useEffect } from "react";
import "../css/style.css"; // Ruta corregida: css compartido en src/css

const Contact_Cliente = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    msg: "",
  });

  // Simula el loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Cerrar perfil al hacer clic fuera
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

  // Manejo del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${formData.name}!`);
  };

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
              <p className="name">shaikh anas</p>
              <div className="flex">
                <a href="perfil.html" className="btn">
                  profile
                </a>
                <a href="index.html" className="delete-btn">
                  logout
                </a>
              </div>
            </div>
          )}
        </section>
      </header>

      <div className="heading">
        <h3>Comunicate con nosotros</h3>
        <p>
          <a href="menu_clientes.html">home</a> <span> / contacto</span>
        </p>
      </div>

      <section className="contact">
        <div className="row">
          <div className="image">
            <img src="images/contact-img.svg" alt="contacto" />
          </div>

          <form onSubmit={handleSubmit}>
            <h3>¡Cuentanos de ti!</h3>
            <input
              type="text"
              name="name"
              required
              placeholder="Ingresa tu nombre"
              maxLength="50"
              className="box"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="number"
              name="number"
              required
              placeholder="Ingresa tu número"
              className="box"
              value={formData.number}
              onChange={handleChange}
              onInput={(e) => {
                if (e.target.value.length > 10)
                  e.target.value = e.target.value.slice(0, 10);
              }}
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Ingresa tu correo"
              maxLength="50"
              className="box"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="msg"
              placeholder="Escribe tu mensaje"
              required
              className="box"
              cols="30"
              rows="10"
              maxLength="500"
              value={formData.msg}
              onChange={handleChange}
            ></textarea>

            <input type="submit" value="Enviar" className="btn" name="send" />
          </form>
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

export default Contact_Cliente;
