import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { getUserName, getUserEmail, getUserPassword, createAccount, user, signInUsingGoogle } = useAuth();
 
    return (
        <div>
            <section>
                { !user?.email ? <div className="container mx-auto">
                    <h1 className="text-3xl text-gray-800 font-bold leading-none mb-3 text-center">Registration Form</h1>
                    <div className="flex flex-row justify-center">
                    <div className="w-full md:w-1/3 mx-5">
                            <form onSubmit={createAccount}>
                                <label className="block">
                                    <span className="text-gray-700">Name</span>  
                                </label>
                                    <input onBlur={getUserName} type="text" className="form-input mt-1 block w-full px-4 py-3 border-2 border-gray-300" name="name" placeholder="Please enter your name"/>
                                <label className="block">
                                    <span className="text-gray-700">Email</span>
                                </label>
                                    <input onBlur={getUserEmail} type="email" className="form-input mt-1 block w-full px-4 py-3 border-2 border-gray-300" name="email" placeholder="Please enter your email"/>
                                
                                <br />
                                <label className="block">
                                    <span className="text-gray-700">Password</span>
                                    </label>
                                    <input onBlur={getUserPassword} type="password" className="form-input mt-1 block w-full px-4 py-3 border-2 border-gray-300" name="password" placeholder="Please enter your password"/>
                                
                                <br />
                                <label htmlFor="">
                                    <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value="Submit" />
                                </label>
                            </form>
                            <br />
                            <div className="flex items-center justify-between">
                                <button onClick={signInUsingGoogle} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Sign In With Google
                                </button>
                                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">Already registered??</Link>
                        </div>
                    </div>
                    </div>
                </div> : <h1>User logged In</h1> }
            </section>
        </div>
    );
};

export default Register;