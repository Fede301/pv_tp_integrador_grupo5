import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <Container fluid className="mt-4">

            <Row className="g-3 mb-4">
                <Col xs={12} sm={6} md={3}>
                    <Card className="text-white bg-primary h-100 shadow-sm">
                        <Card.Body>
                            <Card.Subtitle className="text-uppercase text-white-50 small mb-2">
                                Ingresos Totales
                            </Card.Subtitle>
                            <Card.Title className="fs-2 font-weight-bold">
                                $24,500.50
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={3}>
                    <Card className="text-white bg-success h-100 shadow-sm">
                        <Card.Body>
                            <Card.Subtitle className="text-uppercase text-white-50 small mb-2">
                                Pedidos Totales
                            </Card.Subtitle>
                            <Card.Title className="fs-2 font-weight-bold">
                                158
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={3}>
                    <Card className="text-white bg-warning h-100 shadow-sm">
                        <Card.Body>
                            <Card.Subtitle className="text-uppercase text-white-50 small mb-2">
                                Productos en Catálogo
                            </Card.Subtitle>
                            <Card.Title className="fs-2 font-weight-bold">
                                20
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={3}>
                    <Card className="text-white bg-info h-100 shadow-sm">
                        <Card.Body>
                            <Card.Subtitle className="text-uppercase text-white-50 small mb-2">
                                Usuarios Registrados
                            </Card.Subtitle>
                            <Card.Title className="fs-2 font-weight-bold">
                                10
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row className="g-3">
                <Col xs={12} lg={8}>
                    <Card className="p-3 shadow-sm" style={{ minHeight: '300px' }}>
                        <Card.Body>
                            <Card.Title>Tendencia Global de Ventas</Card.Title>

                            <div className="text-muted text-center mt-5">grafico</div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} lg={4}>
                    <Card className="p-3 shadow-sm" style={{ minHeight: '300px' }}>
                        <Card.Body>
                            <Card.Title>Distribución por Categoría</Card.Title>

                            <div className="text-muted text-center mt-5">grafico</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Button
                variant="outline-primary"
                size="lg"
                onClick={() => navigate('/clientes')}
            >
                Ver Clientes →
            </Button>
        </Container>
    )
}
export default Dashboard;