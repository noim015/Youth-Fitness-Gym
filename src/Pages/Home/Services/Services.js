import { Container, Row } from 'react-bootstrap';
import useCourses from '../../../hooks/useCourses';
import Course from '../../Course/Course';
import './Services.css';

const Services = () => {
    
    const { courses } = useCourses();

return (
    <div>
        <Container>
            <Row>
                <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0' }} >Our Courses</h1>
            </Row>
            <Row>
            {courses?.slice(0,6).map((course) => (
                <Course course={course} key={course.key}></Course>
            ))}
            </Row>
        </Container>
    </div>
);
};

export default Services;