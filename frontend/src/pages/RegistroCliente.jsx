import React, { useState } from "react";
import "./../css/style.css";
import "./../css/loader.css";

const RegistroCliente = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    pass: "",
    cpass: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulación de envío al backend (puedes reemplazarlo por fetch/axios)
    setTimeout(() => {
      console.log("Datos enviados:", formData);
      setLoading(false);
      alert("¡Registro exitoso!");
    }, 1500);
  };

  return (
    <div className="contenido">
      {loading && (
        <div className="loader-container">
          <img className="loader-img" src="/images/loader.gif" alt="Cargando..." />
        </div>
      )}

      <header className="header">
        <section className="flex">
          <a href="#" className="logo">
            APP GUSTO
          </a>
        </section>
      </header>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>Registrarse</h3>

          <input
            type="text"
            name="name"
            required
            maxLength="20"
            placeholder="Enter your name"
            className="box"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            required
            maxLength="50"
            placeholder="Enter your email"
            className="box"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="number"
            name="number"
            required
            min="0"
            max="9999999999"
            placeholder="Enter your number"
            className="box"
            value={formData.number}
            onChange={handleChange}
          />

          <input
            type="password"
            name="pass"
            required
            maxLength="20"
            placeholder="Enter your password"
            className="box"
            value={formData.pass}
            onChange={handleChange}
          />

          <input
            type="password"
            name="cpass"
            required
            maxLength="20"
            placeholder="Confirm your password"
            className="box"
            value={formData.cpass}
            onChange={handleChange}
          />

          <input type="submit" value="Registrarse" className="btn" />

          <p>
            ¿Ya tienes una cuenta? <a href="/log_cliente">Iniciar sesión</a>
          </p>
        </form>
      </section>

      <footer className="footer">
        <div className="credit">
          &copy; Copyright @ 2022 by <span>web app gusto</span> | All rights reserved!
        </div>
      </footer>
    </div>
  );
};

export default RegistroCliente;
