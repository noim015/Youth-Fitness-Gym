import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user } = useAuth();
    return (
        <div className='header'>
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>  
            <li>{user.email}</li>          
        </div>
    );
};

export default Header;