import React from "react";
import "../css/style.css";
import "../css/loader.css";

export default function LogCliente() {
  return (
    <div>
      <div className="loader-container">
        <img className="loader-img" src="images/loader.gif" alt="Cargando..." />
      </div>

      <div className="contenido">
        <header className="header">
          <section className="flex">
            <a href="/log_cliente" className="logo">
              APP GUSTO
            </a>
          </section>
        </header>

        <section className="form-container">
          <form method="post">
            <h3>Inicio de sesión</h3>
            <input
              type="email"
              required
              maxLength="50"
              name="email"
              placeholder="enter your email"
              className="box"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/\s/g, ""))
              }
            />
            <input
              type="password"
              required
              maxLength="20"
              name="pass"
              placeholder="enter your password"
              className="box"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/\s/g, ""))
              }
            />
            <a href="/ini_clientes" className="btn">
              Iniciar sesión
            </a>
            <p>
              Todavía no tienes una cuenta?{" "}
              <a href="/registro_clien">Registrarse</a>
            </p>
          </form>
        </section>

        <footer className="footer">
          <div className="credit">
            &copy; by <span>web app gusto</span> | all rights reserved!
          </div>
        </footer>
      </div>
    </div>
  );
}
