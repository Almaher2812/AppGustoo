import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IniCliente from "./pages/IniCliente";
import LogAdmin from "./pages/LogAdmin";
import RegistroCliente from "./pages/RegistroCliente";
import MenuCliente from "./pages/MenuCliente";
import ContactCliente from "./pages/ContactCliente";
import Home from "./pages/Home";
import LogCliente from "./pages/LogCliente";
// Si tienes reservas, importa el componente aquí
// import ReservasCliente from "./pages/ReservasCliente";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login-cliente" element={<LogCliente />} />
        <Route path="/login-admin" element={<LogAdmin />} />

        {/* Registro */}
        <Route path="/registro-cliente" element={<RegistroCliente />} />

        {/* Menú del cliente */}
        <Route path="/menu-cliente" element={<MenuCliente />} />

        {/* Contacto */}
        <Route path="/contacto" element={<ContactCliente />} />

        {/* Inicio del cliente (tu slider con Swiper) */}
        <Route path="/inicio-cliente" element={<IniCliente />} />

        {/* Si tienes reservas, usa esta:
        <Route path="/reservas-cliente" element={<ReservasCliente />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
