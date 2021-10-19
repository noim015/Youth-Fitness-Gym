import React from 'react';
import { Alert, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const bookNow = () => {
    return (
        <Container>
            <Row className="py-5">
                <h1 className="text-center py-5" >Book Now Page</h1>
                <Alert  variant={'warning'}>
                     To book our course please visit to <NavLink activeClassName="active" to="/courses">Courses Area</NavLink>
                </Alert>
            </Row>
        </Container>
    );
};

export default bookNow;