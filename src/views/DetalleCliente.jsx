
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Spinner, Alert, Button } from "react-bootstrap";

const DetalleCliente = () => {
  //Capturamos el ID usando useParams
  const {id} = useParams();
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //useEffect para la búsqueda cuando el componente se monte
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

  //Estado de Carga
  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Cargando ficha del cliente...</p>
      </Container>
    );
  }

  // Estado de Error
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

  //Renderizado
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
          <p className="text-muted">
            Modulo D Inciso 2.
          </p>
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
