import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";

const ReactLayout=()=>{
    return(
        <>
        <Container fluid>
        <Row>
            <Col xs={12} sm={2} md={1} className="bg-primary me-1 mb-1 text-center">Margin</Col>
            <Col>
            <Row>
                <Col sm={0} md={6} className="bg-success me-1 mb-1 text-center">Gallary</Col>
                <Col className="mb-1">
                <Row>
                    <Col sm={12} md={12} className="bg-warning mb-1 text-center">Title-1</Col>
                    <Col sm={12} md={12} className="bg-info mb-1 text-center">Title-2</Col>
                </Row>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12} className="bg-danger mb-1 text-center">Description</Col>
                <Col sm={12} md={12} className="bg-secondary text-center">Related</Col>
            </Row>
            </Col>
            <Col sm={12} md={1} className="bg-primary mt-1 text-center">Margin</Col>
        </Row>
        </Container>
        </>
        )
    }

export default ReactLayout;
