import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  
    return (
        <div className="container mx-auto my-5">
                <h1 className="text-3xl text-gray-800 font-bold leading-none mb-3 text-center     py-5">Registration Form</h1>
          <div className="flex justify-center">
            <div className="w-full md:w-1/3 mx-5">
               <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                          Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                          Forgot Password?
                        </a>
                    </div>
                    <br />
                  <div className="flex items-center justify-between">
                        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Sign Up With Google
                        </button>
                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">New To site??</Link>
                  </div>
              </form>
           </div>
         </div>
        </div>
    );
};

export default Login;