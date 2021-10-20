import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const bookNow = () => {
    return (
        <Container>
            <Row className="py-5">
                <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0' }}>Consultaion Form</h1>
            </Row>
            <Row>
                <Form>
                        <Row className="mb-3 py-5">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAge">
                            <Form.Label>Your Age</Form.Label>
                            <Form.Control type="nember" placeholder="Your age" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridHeight">
                            <Form.Label>Your Height</Form.Label>
                            <Form.Control type="nember" placeholder="Your Height" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGridProblem">
                            <Form.Label>Your Issue (If any)</Form.Label>
                            <Form.Control as="textarea"
                                        placeholder="Please write everything in details"
                                        style={{ height: '100px' }} />
                        </Form.Group>
                        <Row>
                        <Form.Group as={Col} controlId="formGridMobile">
                            <Form.Label>Your Conatct No</Form.Label>
                            <Form.Control type="nember" placeholder="Write down contact no" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridFb">
                            <Form.Label>Your FB Link</Form.Label>
                            <Form.Control type="nember" placeholder="Write down FB Link" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridInsta">
                            <Form.Label>Your FB Link</Form.Label>
                            <Form.Control type="nember" placeholder="Write down FB Link" />
                        </Form.Group>
                        </Row>
                        <br />
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Married</Form.Label>
                            <Form.Control placeholder="Yes/No" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Status</Form.Label>
                            <Form.Control placeholder="Job Holder/ Businessman / Freelancer" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Sibling</Form.Label>
                            <Form.Control placeholder="Write down how many Sibling" />
                            </Form.Group>
                        </Row>
                        <Button variant="primary">
                            Submit
                        </Button>
                        </Form>
                    </Row>
        </Container>
    );
};

export default bookNow;