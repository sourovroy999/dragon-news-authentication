import React, { useContext, useRef, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router';
import {  authContext } from '../Provider/AuthProvider';
// import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {

    const emailRef=useRef()


    const {signIn,setUser,resetPassword}=useContext(authContext)
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
            if(!result.user.emailVerified){
                alert('Please verified your email')
            }
            else{
                setUser(user)
            navigate(location?.state ? location.state : '/' )
            }
       })
        .catch((err)=>{
            setError({...error, login:err.code})
        })

        
    }

    
    const handleForgetPassword=()=>{
        console.log('forget password clicked');
        // navigate('/recoverPassword')

        const email=emailRef.current.value;
        console.log(email);

        if(!email){
            alert('Please Provide a valid email')
        }
        else(

        resetPassword(email)
        
         .then(()=>{
        alert("Password reset email sent")
        
       })
       .catch((err)=>{
        const errorCode=err.code;
        const errorMessage=err.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage)
        
       })
        
    )
        
    }

    return (
        <div className="hero bg-base-200 min-h-screen w-11/12 mx-auto">
   <div className="card bg-base-100 w-full rounded-none max-w-sm shrink-0  p-5">
    <h4 className='font-bold mx-auto'>Login Your Account</h4>
    <div className="divider"></div>

      <div className="card-body -mt-6">

        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label font-bold">Enter your email address</label>
          <input ref={emailRef} name='email' type="email" className="input" placeholder="Email" />
          <label className="label font-bold">Enter Your Password</label>
          <input required name='password' type="password" className="input" placeholder="Password" />

        {
            error.login && (
                <div className='text-red-400 text-xs'>
                   { error.login}
                </div>
            )
        }

          <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>

        <p className='text-center font-semibold'>Don't Have An Account ? <Link to='/auth/register' className='text-red-600'>Register</Link></p>
      </div>
    </div>
  </div>

    );
};

export default Login;