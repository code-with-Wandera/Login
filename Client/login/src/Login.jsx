import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-4 rounded w-25 shadow'>
          <h2 className='mb-4 text-center'>Sign-In</h2>

          <form>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'><strong>Email</strong></label>
              <input type='email' id='email' placeholder='Enter Email' name='email' className='form-control rounded-0' />
            </div>

            <div className='mb-3'>
              <label htmlFor='password' className='form-label'><strong>Password</strong></label>
              <input type='password' id='password' placeholder='Enter Password' name='password' className='form-control rounded-0' />
            </div>

            <button type='submit' className='btn btn-success w-100 rounded-0'>
              Login
            </button>

            <p className='mt-3 text-center'>You do not have an account?</p>

            <Link to='/register' className='btn btn-light border w-100 rounded-0'>
              Create Account
            </Link>
          </form>

        </div>
      </div>
    </>
  );
};

export default Login;
