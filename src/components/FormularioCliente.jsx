import { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const FormularioCliente = ({ show, onHide }) => {

    const [formulario, setFormulario] = useState({
        nombreCompleto: "",
        email: "",
        telefono: "",
        ciudad: "",
    });


    const [alertaExito, setAlertaExito] = useState(null);
    const [alertaError, setAlertaError] = useState(false);
    const [cargando, setCargando] = useState(false);

    const handleFormulario = (evento) => {
        const { name, value } = evento.target;
        setFormulario((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const { nombreCompleto, email } = formulario;
        if (!nombreCompleto || !email) return;
        crearCliente();
    };

    const crearCliente = async () => {
        setCargando(true);
        setAlertaExito(null);
        setAlertaError(false);

        try {
            const response = await fetch('https://fakestoreapi.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formulario)
            });

            if (!response.ok) {
                throw new Error("Error al crear el cliente");
            }

            const data = await response.json();

            setAlertaExito(data.id);

            setFormulario({
                nombreCompleto: "",
                email: "",
                telefono: "",
                ciudad: "",
            });

        } catch (error) {
            console.error(error);
            setAlertaError(true);
        } finally {
            setCargando(false);
        }
    };

    const handleCerrar = () => {
        setAlertaExito(null);
        setAlertaError(false);
        setFormulario({
            nombreCompleto: "",
            email: "",
            telefono: "",
            ciudad: "",
        });
        onHide();
    };

    return (
        <Modal show={show} onHide={handleCerrar}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo Cliente</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {alertaExito && (
                    <Alert variant="success" onClose={() => setAlertaExito(null)} dismissible>
                        ✅ Cliente creado con éxito. ID asignado por el servidor: <strong>#{alertaExito}</strong>
                    </Alert>
                )}

                {alertaError && (
                    <Alert variant="danger" onClose={() => setAlertaError(false)} dismissible>
                        ❌ Hubo un error al crear el cliente. Intentá de nuevo.
                    </Alert>
                )}

                <Form.Label htmlFor="nombreCompleto">Nombre completo</Form.Label>
                <Form.Control
                    type="text"
                    id="nombreCompleto"
                    name="nombreCompleto"
                    placeholder="Nombre completo"
                    value={formulario.nombreCompleto}
                    onChange={handleFormulario}
                    className="mb-2"
                />

                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={formulario.email}
                    onChange={handleFormulario}
                    className="mb-2"
                />

                <Form.Label htmlFor="telefono">Teléfono</Form.Label>
                <Form.Control
                    type="text"
                    id="telefono"
                    name="telefono"
                    placeholder="Teléfono"
                    value={formulario.telefono}
                    onChange={handleFormulario}
                    className="mb-2"
                />

                <Form.Label htmlFor="ciudad">Ciudad</Form.Label>
                <Form.Control
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    placeholder="Ciudad"
                    value={formulario.ciudad}
                    onChange={handleFormulario}
                />

            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={handleCerrar}>Cerrar</Button>
                <Button variant="success" onClick={handleSubmit} disabled={cargando}>
                    {cargando ? "Guardando..." : "Agregar cliente"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FormularioCliente;