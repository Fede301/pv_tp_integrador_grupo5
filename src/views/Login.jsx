import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import { Form, Button, Card, Container } from 'react-bootstrap';

const Login = () => {
    const [nombre, setNombre] = useState('');
    const [sector, setSector] = useState('');

    const { admin, login } = useContext(AdminContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (admin) {
            navigate('/dashboard');
        }
    }, [admin, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() && sector) {
            login(nombre, sector);
            navigate('/dashboard');
        }
    };

    return (

        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="card shadow p-4" style={{ width: '100%', maxWidth: '420px' }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">LOGIN</h2>

                    <form onSubmit={handleSubmit}>


                        <div className="mb-3">
                            <label className="form-label">Nombre del Administrador:</label>
                            <input
                                type="text"
                                className="form-control" // Clase de Bootstrap para inputs estructurados
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                                placeholder="Ej: Juan Pérez"
                            />
                        </div>


                        <div className="mb-4">
                            <label className="form-label">Sector de la Empresa:</label>
                            <select
                                className="form-select" // Clase de Bootstrap para menús desplegables
                                value={sector}
                                onChange={(e) => setSector(e.target.value)}
                                required
                            >
                                <option value="">Seleccione un sector...</option>
                                <option value="Soporte">Soporte</option>
                                <option value="Gerencia">Gerencia</option>
                            </select>
                        </div>


                        <button type="submit" className="btn btn-primary w-100 py-2">
                            Ingresar
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;