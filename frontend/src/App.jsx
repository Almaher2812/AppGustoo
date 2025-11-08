import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importar las páginas
import Ini_Cliente from "./pages/Ini_Cliente";
import LogAdmin from "./pages/Log_Admin";
import RegistroCliente from "./pages/RegistroCliente";
import MenuCliente from "./pages/MenuCliente";
import ContactCliente from "./pages/ContactCliente";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial del cliente */}
        <Route path="/" element={<Ini_Cliente />} />

        {/* Login de administrador */}
        <Route path="/log_admin" element={<Log_Admin />} />

        {/* Registro de cliente */}
        <Route path="/registro_cliente" element={<Registro_Cliente />} />

        {/* Menú del cliente */}
        <Route path="/menu_cliente" element={<Menu_Cliente />} />

        {/* Contacto del cliente */}
        <Route path="/contact_cliente" element={<Contact_Cliente />} />
      </Routes>
    </Router>
  );
}

export default App;
