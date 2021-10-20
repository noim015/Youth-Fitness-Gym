import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="text-white mt-5">
          <div className="py-4 gradient">
        <Container>
            <Row>
                <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0' }}  >Contact Us</h1>
            </Row>
            <Row className="pb-5">
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Comments</Form.Label>
                                <Form.Control as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" >
                                Submit
                            </Button>
                        </Form>
                    </Col>
            </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
        <p className="text-center m-0 py-3 copyright">
            Copyright © All Rights Reserved by Programming Hero Community 2021
        </p>
    </div>
    );
};

export default Footer;