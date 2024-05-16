// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

const Login = () => {
  // const {loginUser} = useContext(AuthContext)
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value
  //   const password = e.target.password.value
  //   email.length > 0 && loginUser(email,password)
  //   console.log(email)
  //   console.log(password)
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" >    
        {/* onSubmit={handleSubmit} */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only dark:text-white text-gray-900">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-300
                 border-gray-900 placeholder-gray-900  text-gray-900 dark:text-gray-900 rounded-t-md focus:outline-none
                  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-300 border-gray-900
                 text-gray-900 rounded-b-md placeholder-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
               text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <p className=' dark:text-gray-50 text-gray-900'>
            Already haven't an account?{' '}
            <Link to="/customer-register" className="font-medium text-lg text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;