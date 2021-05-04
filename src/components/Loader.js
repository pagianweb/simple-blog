import { Col, Container, Row, Spinner } from "reactstrap"

const Loader = () => {
    return (
        <Container>
            <Row>
                <Col className="py-5 text-center">
                    <Spinner color="dark" />
                </Col>
            </Row>
        </Container>
    )
}

export default Loader;