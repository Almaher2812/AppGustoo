import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IniCliente from "./pages/IniCliente";
import LogAdmin from "./pages/LogAdmin";
import RegistroCliente from "./pages/RegistroCliente";
import MenuCliente from "./pages/MenuCliente";
import ContactCliente from "./pages/ContactCliente";
import Home from "./pages/Home";
import LogCliente from "./pages/LogCliente";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-cliente" element={<LogCliente />} />
        <Route path="/login-admin" element={<LogAdmin />} />
        <Route path="/registro-cliente" element={<RegistroCliente />} />
        <Route path="/menu-cliente" element={<MenuCliente />} />
        <Route path="/contacto" element={<ContactCliente />} />
        <Route path="/inicio-cliente" element={<IniCliente />} />
      </Routes>
    </Router>
  );
}

export default App;
