import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const BlogFooter = () => {
    let currentYear =  new Date().getFullYear();
    return (
        <Container className="mt-5" fluid>
            <Row>
                <Col className="bg-secondary text-white text-center py-4">
                    <p className="m-0">&copy; {currentYear} - Simple Blog. React FrontEnd for WordPress.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogFooter;