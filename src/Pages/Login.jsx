import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router';
import { authContext } from '../Provider/AuthProvider';

const Login = () => {

    const {signIn,setUser}=useContext(authContext)
    const[error,setError]=useState({});
    const location=useLocation();
    // console.log(location);
    
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form= new FormData(e.target)
        const email= form.get('email')
        const password=form.get('password')
        // console.log(email, password);
        signIn(email,password)
        .then((result)=>{
            const user= result.user;
            setUser(user)
            navigate(location?.state ? location.state : '/' )

        })
        .catch((err)=>{
            setError({...error, login:err.code})
        })
        
    }

    return (
        <div className="hero bg-base-200 min-h-screen w-11/12 mx-auto">
   <div className="card bg-base-100 w-full rounded-none max-w-sm shrink-0  p-5">
    <h4 className='font-bold mx-auto'>Login Your Account</h4>
    <div className="divider"></div>

      <div className="card-body -mt-6">

        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label font-bold">Enter your email address</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label font-bold">Enter Your Password</label>
          <input required name='password' type="password" className="input" placeholder="Password" />

        {
            error.login && (
                <div className='text-red-400 text-xs'>
                   { error.login}
                </div>
            )
        }

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>

        <p className='text-center font-semibold'>Don't Have An Account ? <Link to='/auth/register' className='text-red-600'>Register</Link></p>
      </div>
    </div>
  </div>

    );
};

export default Login;