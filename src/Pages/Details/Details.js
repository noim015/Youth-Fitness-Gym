import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Details = () => {
    const { key } = useParams();
    
    const { courses } = useAuth();
    const matchingCourse = courses.find((course) => course.key === Number(key));
    
    return (
        <div className="my-4">
      {matchingCourse?.title ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img className="img-fluid" src={matchingCourse.img} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h2 style={{ fontSize:'35px',padding:'10px 0' }}>{matchingCourse.title}</h2>
              <h5 style={{ fontSize:'18px',padding:'10px 0', lineHeight: '1.5' }} >{matchingCourse.desc}</h5>
              <Row>
                <Col>
                  <h1>Fee:{matchingCourse.fee}$</h1>
                  <div className="my-2">
                  <Button className='text-center btn btn-danger'>Book Now</Button>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <div className='flex justify-center'>
                    <img
                      width="120px"
                      className="rounded-circle"
                      src={matchingCourse.trainerThumb}
                      alt=""
                    />
                    </div>
                    <h5>Trainer: {matchingCourse.trainer}</h5>
                    
                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col>
                    <div className="text-center">
                        <div className='flex justify-center'>
                        <h3>Already Enrolled: {matchingCourse.allReadyEnrolled} </h3>
                        </div>
                        
                        
                    </div>
            </Col>
            <Col>
               
            </Col>
          </Row>
          
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">NO Course Found</h1>
        </div>
      )}
    </div>
    );
};

export default Details;