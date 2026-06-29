
import { useEffect, useState, useContext } from "react"; // 1. Importamos useContext
import { useParams, Link } from "react-router-dom";
import { Container, Card, Spinner, Alert, Button } from "react-bootstrap";

import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
const DetalleCliente = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const { admin } = useContext(AdminContext);
  console.log("Datos del administrador desde el contexto:", admin);
  const navigate = useNavigate();
  useEffect(() => {
    obtenerDetalleCliente();
  }, [id]);

  const obtenerDetalleCliente = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`https://fakestoreapi.com/users/${id}`);

      if (!response.ok) {
        throw new Error("Error al obtener los datos del cliente");
      }

      const data = await response.json();
      setCliente(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleEliminarCliente = async () => {
    const confirmar = window.confirm(`¿Estás seguro de eliminar al cliente N°${id}?`);
    if (!confirmar) return;

    try {
      const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Cliente eliminado con éxito.");
        navigate("/clientes")
      } else {
        alert("Hubo un error al intentar eliminar el cliente.");
      }
    } catch (err) {
      console.error("Error en la petición DELETE:", err);
    }
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Cargando ficha del cliente...</p>
      </Container>
    );
  }

  if (error || !cliente) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          No se pudo cargar el detalle del cliente especificado o no existe.
        </Alert>
        <Button as={Link} to="/clientes" variant="secondary">
          Volver a la lista
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Ficha del Cliente N°{id}</h2>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-3">
            {cliente.name?.firstname} {cliente.name?.lastname}
          </Card.Title>
          <Card.Text>
            <strong>Email:</strong> {cliente.email}
          </Card.Text>
          <Card.Text>
            <strong>Teléfono:</strong> {cliente.phone}
          </Card.Text>

          <hr />


          <h5 className="text-primary">Dirección Completa</h5>
          <Card.Text>
            <strong>Calle:</strong> {cliente.address?.street} <br />
            <strong>Número:</strong> {cliente.address?.number} <br />
            <strong>Código Postal:</strong> {cliente.address?.zipcode} <br />
            <strong>Ciudad:</strong> {cliente.address?.city}
          </Card.Text>

          <h5 className="text-primary mt-3">Credenciales de Acceso</h5>
          <Card.Text>
            <strong>Usuario:</strong> {cliente.username} <br />
            <strong>Contraseña:</strong> {cliente.password}
          </Card.Text>


          {admin?.sector === "Gerencia" && (
            <>
              <hr />
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button
                  variant="danger"
                  onClick={handleEliminarCliente}
                >
                  Eliminar Cliente de la Base de Datos
                </Button>
              </div>
            </>
          )}

        </Card.Body>
        <Card.Footer>
          <Button as={Link} to="/clientes" variant="secondary" size="sm">
            Volver a la lista
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default DetalleCliente;