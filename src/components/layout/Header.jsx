import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext'; // Subimos dos carpetas para llegar a context

const Header = () => {
    // Traemos los datos del admin y la función logout de tu contexto global
    const { admin, logout } = useContext(AdminContext);
    const navigate = useNavigate();

    // Si por alguna razón no hay administrador (null), no mostramos el Header
    if (!admin) return null;

    const handleLogout = () => {
        logout(); // Borra el estado y el localStorage automáticamente gracias a tu useEffect
        navigate('/login'); // Redirige al login
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">
            <div className="container-fluid">
                {/* Título o Logo del proyecto */}
                <span className="navbar-brand fw-bold text-uppercase tracking-wider">
                    Panel de Control
                </span>

                {/* Zona derecha con los datos del Admin y el Botón */}
                <div className="d-flex align-items-center ms-auto">
                    <div className="text-light me-4 text-end">
                        <div className="fw-bold mb-0" style={{ fontSize: '0.95rem' }}>
                            {admin.nombre}
                        </div>
                        <span className="badge bg-secondary" style={{ fontSize: '0.75rem' }}>
                            Sector: {admin.sector}
                        </span>
                    </div>

                    {/* Botón de Cerrar Sesión obligatorio */}
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