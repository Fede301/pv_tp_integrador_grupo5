import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';

const Header = () => {
    const { admin, logout } = useContext(AdminContext);
    const navigate = useNavigate();

    if (!admin) return null;

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">
            <div className="container-fluid">
                {/* 1. CAMBIO: Nombre de la app con estilo personalizado */}
                <Link to="dashboard" className='link-dark'>
                    <span className="navbar-brand fw-bold text-uppercase tracking-wider">
                        Panel<span className="text-info">Clientes</span>
                    </span>
                </Link>

                <div className="d-flex align-items-center ms-auto">
                    <div className="text-light me-4 text-end">
                        {/* 2. CAMBIO: Saludo personalizado al administrador conectado */}
                        <div className="fw-bold mb-0" style={{ fontSize: '0.95rem' }}>
                            Hola, {admin.nombre} 👋
                        </div>
                        <span className="badge bg-secondary" style={{ fontSize: '0.75rem' }}>
                            Sector: {admin.sector}
                        </span>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="btn btn-outline-danger btn-sm px-3 fw-semibold"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;

