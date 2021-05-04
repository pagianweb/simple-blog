import { Col, Container, Row } from 'reactstrap';
import BlogHeader from '../components/BlogHeader';

const PageNotFound = () => {
    return (
        <div>
            <BlogHeader />
            <Container>
                <Row>
                    <Col className="my-5">
                        <h3>404 &emdash; Page not found.</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PageNotFound;