import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FormularioCliente = ({ show, onHide }) => {

    const [formulario, setFormulario] = useState({
        nombreCompleto: "",
        email: "",
        telefono: "",
        ciudad: "",
    });

    const handleFormulario = (evento) => {
        const { name, value } = evento.target;
        setFormulario((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const { nombreCompleto, email } = formulario;

        if (!nombreCompleto || !email) return;

        crearCliente();

        setFormulario({
            nombreCompleto: "",
            email: "",
            telefono: "",
            ciudad: "",
        });
    };

    const crearCliente = () => {

        try {
            fetch('https://fakestoreapi.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formulario)
            })
            .then(response => console.log(response));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label htmlFor="nombreCompleto">Nombre completo</Form.Label>
                <Form.Control type="text" id="nombreCompleto" name="nombreCompleto" placeholder="Nombre completo" value={formulario.nombreCompleto} onChange={handleFormulario} />

                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control type="email" id="email" name="email" placeholder="email" value={formulario.email} onChange={handleFormulario} />

                <Form.Label htmlFor="telefono">Telefono</Form.Label>
                <Form.Control type="text" id="telefono" name="telefono" placeholder="Telefono" value={formulario.telefono} onChange={handleFormulario} />

                <Form.Label htmlFor="ciudad">Ciudad</Form.Label>
                <Form.Control type="text" id="ciudad" name="ciudad" placeholder="Ciudad" value={formulario.ciudad} onChange={handleFormulario} />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>Cerrar</Button>
                <Button variant="success" onClick={handleSubmit}>Agregar cliente</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FormularioCliente;