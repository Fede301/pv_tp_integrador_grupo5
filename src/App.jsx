import { useContext } from 'react'
import Login from './views/Login'
import { AdminProvider, AdminContext } from "./context/AdminContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import ListaClientes from './views/ListaClientes';
import DetalleCliente from './views/DetalleCliente';
import Dashboard from './views/Dashboard';

function RutaProtegida({ children }) {
  const { admin } = useContext(AdminContext);
  return admin ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AdminProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/clientes" element={
            <RutaProtegida>
              <ListaClientes />
            </RutaProtegida>
          } />

          <Route path="/clientes/:id" element={
            <RutaProtegida>
              <DetalleCliente />
            </RutaProtegida>
          } />

          <Route path="/dashboard" element={
            <RutaProtegida>
              <Dashboard />
            </RutaProtegida>
          } />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;