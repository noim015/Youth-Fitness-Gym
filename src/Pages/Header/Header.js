import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div> 
           <div className="header_navigration">
                <Navbar bg="dark" expand="lg" variant="dark">
                        <Container>
                            
                                <NavLink style={{textDecoration:'none',color:'#fff',fontSize:'25px'}} to="/">Youth Fitness Gym</NavLink>
                            
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                                    <NavLink activeClassName="active" to="/courses">Courses</NavLink>
                                    <NavLink activeClassName="active" to="/membership">Membership</NavLink>
                                    <NavLink activeClassName="active" to="/register">Sign Up</NavLink>
                                </Nav>
                                {user?.email && <Nav className="justify-content-end" >
                                    <span style={{color:'#fff'}}>{user.displayName}</span>
                                    <button onClick={logOut} className="btn btn-danger">LogOut</button>
                                </Nav>}
                            </Navbar.Collapse>
                            
                        </Container>
                </Navbar>
                
           </div>           
        </div>
    );
};

export default Header;