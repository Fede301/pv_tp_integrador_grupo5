import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';


const clienteSimulado = {
  id: 1,
  username: "johnd",
  password: "m38rmF$()",
  name: { firstname: "John", lastname: "Doe" },
  address: {
    city: "San Salvador de Jujuy",
    street: "Av. Martiarena",
    number: 1022,
    zipcode: "4600"
  }
};

const DetalleCliente = () => {
  const cliente = clienteSimulado;

  if (!cliente) {
    return (
      <Container className="mt-4">
        <p>Cargando información del cliente...</p>
      </Container>
    );
  }

  const { username, password, address } = cliente;
  const { street, number, zipcode, city } = address || {};

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-primary text-white py-3">
              <h4 className="mb-0">Ficha Profunda del Cliente</h4>
            </Card.Header>
            <Card.Body className="p-4">
              
              <h5 className="text-secondary border-bottom pb-2 mb-3">Dirección Completa</h5>
              <ListGroup variant="flush" className="mb-4">
                <ListGroup.Item><strong>Calle:</strong> {street}</ListGroup.Item>
                <ListGroup.Item><strong>Número:</strong> {number}</ListGroup.Item>
                <ListGroup.Item><strong>Código Postal:</strong> {zipcode}</ListGroup.Item>
                <ListGroup.Item><strong>Ciudad:</strong> {city}</ListGroup.Item>
              </ListGroup>

              <h5 className="text-secondary border-bottom pb-2 mb-3">Credenciales de Acceso</h5>
              <Card className="bg-light border-0">
                <Card.Body>
                  <p className="mb-2">
                    <strong>Usuario (username):</strong> <code className="text-dark fs-6">{username}</code>
                  </p>
                  <p className="mb-0">
                    <strong>Contraseña (password):</strong> <code className="text-danger fs-6">{password}</code>
                  </p>
                </Card.Body>
              </Card>


            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleCliente;

//cambio (ignorar)