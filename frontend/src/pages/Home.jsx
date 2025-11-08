import React from "react";
import "../css/style.css";
import "../css/loader.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="loader-container">
        <img className="loader-img" src="/images/loader.gif" alt="Cargando..." />
      </div>

      <div className="contenido">
        <header className="header">
          <section className="flex">
            <a href="/" className="logo">
              APP GUSTO
            </a>
            <nav className="navbar"></nav>
          </section>
        </header>

        <section className="form-container">
          <div
            className="box-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div
              className="box"
              style={{
                textAlign: "center",
                padding: "30px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                width: "300px",
                maxWidth: "80%",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="/images/icono-cliente.png"
                alt="Cliente"
                style={{ width: "100px", height: "100px", marginBottom: "20px" }}
              />
              <h3>Cliente</h3>
              <Link to="/log_cliente" className="btn">
                Ingresar
              </Link>
            </div>

            <div
              className="box"
              style={{
                textAlign: "center",
                padding: "30px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                width: "300px",
                maxWidth: "80%",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="/images/icono-admin.png"
                alt="Administrador"
                style={{ width: "100px", height: "100px", marginBottom: "20px" }}
              />
              <h3>Administrador</h3>
              <Link to="/log_admin" className="btn">
                Ingresar
              </Link>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="credit">
            &copy; Derechos de autor{" "}
            <span>Jose Alejandro Mateus</span> | ¡Todos los derechos reservados!
          </div>
        </footer>
      </div>
    </div>
  );
}
