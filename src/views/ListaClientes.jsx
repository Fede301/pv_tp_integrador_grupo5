import { useEffect, useState } from "react";
import {
  Container,
  Table,
  Form,
  Spinner,
  Alert,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

function ListaClientes() {

  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    obtenerClientes();
  }, []);

  const obtenerClientes = async () => {

    try {
      setLoading(true);
      setError(false);

      const response = await fetch(
        "https://fakestoreapi.com/users"
      );

      if (!response.ok) {
        throw new Error("Error al obtener clientes");
      }

      const data = await response.json();
      setClientes(data);

    } catch (error) {
      console.error(error);
      setError(true);

    } finally {
      setLoading(false);
    }
  };

  const clientesFiltrados = clientes.filter((cliente) => {
    const apellido =
      cliente.name.lastname.toLowerCase();
    const ciudad =
      cliente.address.city.toLowerCase();
    const texto =
      busqueda.toLowerCase();

    return (
      apellido.includes(texto) ||
      ciudad.includes(texto)
    );
  });

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" />
        <p>Cargando clientes...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          Error al cargar los clientes.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">

      <h2 className="mb-4">
        Lista de Clientes
      </h2>

      <Form.Control
        type="text"
        placeholder="Buscar por apellido o ciudad..."
        className="mb-3"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <Table striped bordered hover responsive>

        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Completo</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Ciudad</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientesFiltrados.map((cliente) => (

            <tr key={cliente.id}>
              <td>{cliente.id}</td>

              <td>
                {cliente.name.firstname}{" "}
                {cliente.name.lastname}
              </td>

              <td>{cliente.email}</td>
              <td>{cliente.phone}</td>
              <td>{cliente.address.city}</td>

              <td>
                <Button
                  as={Link}
                  to={`/clientes/${cliente.id}`}
                  variant="primary"
                  size="sm"
                >
                  Ver Ficha Completa
                </Button>
              </td>

            </tr>
          ))}
        </tbody>

      </Table>
    </Container>
  );
}

export default ListaClientes;