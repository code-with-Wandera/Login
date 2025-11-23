import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from axios
const Register = () => {

  const [values, setValues]= useState({
    name:"",
    email:"",
    password:""
  });

  const handleSubmit =(event)=>{
    event.preventDegault();
    axios.post('http://localhost:8081/register', values)
    .then(res =>console.log(res))
    .then(err =>console.log(err));
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-4 rounded w-25 shadow'>
        <h2 className='mb-4 text-center'>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              <strong>Name</strong>
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter Name'
              name='name'
              onChange={e => setValues({...values, name: e.target.value})}
              className='form-control rounded-0'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              id='email'
              placeholder='Enter Email'
              name='email'
              onChange={e => setValues({...values, email: e.target.value})}
              className='form-control rounded-0'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              id='password'
              placeholder='Enter Password'
              name='password'
              onChange={e => setValues({...values, password: e.target.value})}
              className='form-control rounded-0'
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Sign Up
          </button>

          <p className='mt-3 text-center'>Already have an account?</p>
          <Link to='/login'
            type='button'
            className='btn btn-light border w-100 rounded-0'
          >
            Login Here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
