import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Login from './views/Login'
import { AdminProvider } from "./context/AdminContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import ListaClientes from './views/ListaClientes';
function App() {

  return (
    <AdminProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/clientes" element={<ListaClientes />} />
          <Route path="/dashboard" element={
            <div className="container mt-5 text-center">
              <h2>¡Ingresaste con éxito al Dashboard!</h2>
              <p>Acá va el panel que armarán tus compañeros.</p>
            </div>
          } />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AdminProvider>
  );

}

export default App
