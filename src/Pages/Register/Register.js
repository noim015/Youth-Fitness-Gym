import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
   
    const {
        handleGoogleLogin,
        user,
        handleUserRegister,
        setNameOfUser
      } = useFirebase();
      const location = useLocation();
      const history = useHistory();
      const redirect = location.state?.from || "/home";
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [name, setName] = useState("");
      const [error, setError] = useState("");
    
      const hanldeEmail = (e) => {
        setEmail(e.target.value);
      };
      const hanldePassword = (e) => {
        setPassword(e.target.value);
      };
      const handleName = (e) => {
        setName(e.target.value);
      };
    
     
     //Login with Email and Password 
     const handleRegister = () => {
        handleUserRegister(email, password)
        .then(result => {
            setNameOfUser(user, name);
            history.push(redirect);
            window.location.reload();
        })
        .catch((error) => {
            setError(error.message);
          });
      };
    
      //Login with Google
      const signInUsingGoogle = () => {
        handleGoogleLogin()
            .then(result => {
                history.push(redirect);
            })
            .catch((error) => {
                setError(error.message);
              });
      }
 
    return (
        <div className="signin_form" style={{ padding:'30px 10px'}}>
        <Container>
           
          <Row>
              <h1 className="text-center text-primary py-5">User Sign Up Form</h1>
          </Row>
          {!user?.email ?
        <Row className="pb-5">
            <Col></Col>
            <Col className="mb-3 bdr">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Youer Name: </Form.Label>
                    <Form.Control onChange={handleName} type="text" placeholder="Enter your name" />
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={hanldeEmail} type="email" placeholder="Enter email" />
                    <Form.Text  className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={hanldePassword} type="password" placeholder="Enter password" />
              </Form.Group>
              <Button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleRegister} variant="success" >
                  Sign Up
            </Button>
            <br />
            <br />
            <div className="flex items-center justify-between">
                <button onClick={signInUsingGoogle} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign Up With Google
                </button>
                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">Already registered??</Link>
          </div>
            </Col>
            <Col></Col>
        </Row> : <Alert  variant={'danger'}>
                      <h1 className="text-center" >You are signed in</h1>
                </Alert> }
                {error && <Row>
                        <Alert  className="text-center" variant={'danger'}>
                            {error}
                    </Alert>
            </Row> }
      </Container>
      
  </div>
    );
};

export default Register;