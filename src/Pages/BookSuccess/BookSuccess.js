import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BookSuccess.css';
import image1 from '../../images/successfully.jpg';
const BookSuccess = () => {
    return (
        <div className="book_success">
            <Container>
                <Row>
                    <h1>Booking Successfull</h1>
                    <Col>
                        <img src={image1} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookSuccess;