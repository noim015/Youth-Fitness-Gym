import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Course = ({ course }) => {
   const {key , title, fee, desc, img , trainer, trainerThumb} = course;
    return (
        <Col sm={12} md={6} lg={4}>
     
        <div className="m-2">
          <Card className="mx-auto" style={{ width: "21rem" }}>
            <Card.Img variant="top" style={{maxHeight:'150px'}} className="img-fluid" src={img} />
            <Card.Body className="my-1 py-1">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{desc.substr(0,90)}</Card.Text>
            </Card.Body>
            <Card.Body className="my-1 py-1">
              <h4>Price: {fee}$</h4>
            </Card.Body>
            
            <Card.Body className="d-flex">
              
              
            <NavLink
                to={`/courses/${key}`}
                className="btn btn-primary w-100 me-1"
              >
                View Details
              </NavLink>
            </Card.Body>
          </Card>
        </div>
      
    </Col>
    );
};

export default Course;