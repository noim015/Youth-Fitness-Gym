import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Testimonials = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                       <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0' }} >Introduction</h1>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>MISSION</Accordion.Header>
                            <Accordion.Body>
                            Our purpose is to pass on empowering knowledge and training guidance in order to have a positive impact on the health and fitness of everyone we work with.
                            To provide a personalised health and fitness service that unlocks every individual’s true potential so they can achieve their desired goals.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>STORY</Accordion.Header>
                            <Accordion.Body>
                            Our main focus at F7 Fitness is functional training because of the proven benefits. With an emphasis on mobility, strength, and conditioning, the benefits of functional training differ from other workouts because of the way it targets your body.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>APPROACH</Accordion.Header>
                            <Accordion.Body>
                            We are a hybrid gym and training facility. We have clean, state of the art facilities with the most knowledgeable staff and cutting-edge training methods. We offer open gym, team training, group classes, boxing, cycle and personal training.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>EQUIPMENT</Accordion.Header>
                            <Accordion.Body>
                            Give your workout more variety than ever with our accessories, from warmup to cooldown. Increase your body’s capacities every day, from stability to mobility, from power to speed.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> 
                </Row>
            </Container>
        </div>
    );
};

export default Testimonials;