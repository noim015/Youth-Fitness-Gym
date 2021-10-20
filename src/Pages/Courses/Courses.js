import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';


const Courses = () => {
    const { courses } = useCourses();
    return (
        <div>
            <Container>
                <Row>
                    <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0' }}>Our Courses</h1>
                </Row>
                <Row>
                {courses?.map((course) => (
                    <Course course={course} key={course.key}></Course>
                ))}
                </Row>
            </Container>
        </div>
    );
};

export default Courses;