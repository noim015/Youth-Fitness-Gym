import React from 'react';
import { Col, Form, Row , Button} from 'react-bootstrap';

const Membership = () => {
    return (
        <div className="container">
            <Row>
                <h2 className='text-center py-5'>Membership Application Form</h2>
            </Row>
            <Row>
                <Form>
                        <Row className="mb-3 py-5">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCourse">
                            <Form.Label>Interested Course</Form.Label>
                            <Form.Control type="text" placeholder="Enter Course Name" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridMobile">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control placeholder="Mobile, Phone, Contact No" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary">
                            Submit
                        </Button>
                        </Form>
                    </Row>
        </div>
    );
};

export default Membership;