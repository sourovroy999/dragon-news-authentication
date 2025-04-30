import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { authContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const Register = () => {

const {createUser, setUser,updateUserProfile}=useContext(authContext)
const navigate=useNavigate()
const[error, setError]=useState({})
    const handleSubmit=(e)=>{

        e.preventDefault();
        //get form data
        const form=new FormData(e.target);
        const name=form.get('name')
        if(name.length<5){
            setError({ ...error, name:'must be more than 5 character'})
            return
        }
        const email=form.get('email')
        const photo=form.get('photo')
        const password=form.get('password')
        // console.log({name,email,photo, password});

        createUser(email, password)
        .then((result)=>{
            const user=result.user;
            
            setUser(user)
            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
                navigate('/')
            })
            .catch((err)=>{
                console.log(err);
                
            })
            
        })
        .catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.message;
            console.log(errorCode, errorMessage);
            
        })
        
        
        
    }
    
    
    return (
        <div className="hero bg-base-200 min-h-screen w-11/12 mx-auto pt-6">
 

 
        <div className="card bg-base-100 w-full rounded-none max-w-sm shrink-0  p-5">
        <h4 className='font-bold mx-auto'>Register Your Account</h4>
        <div className="divider"></div>

          <form onSubmit={handleSubmit} className="card-body -mt-6">
            <fieldset className="fieldset">

              <label className="label font-bold">Enter your name</label>
              <input name='name' type="text" className="input" placeholder="Email" />
              {
                error.name && <label className="label text-xs text-red-500">
                    {error.name}
                </label>
              }

              <label className="label font-bold">Photo URL</label>
              <input name='photo' type="text" className="input" placeholder="Enter photo url" />



              <label className="label font-bold">Enter your email address</label>
              <input name='email' type="email" className="input" placeholder="Email" />

              <label className="label font-bold">Enter Your Password</label>
              <input name='password' type="password" className="input" placeholder="Password" />
              
              <div className='flex items-center gap-2 mt-3'>
              <input type="checkbox" defaultChecked className="checkbox" />
              <p>Accept Our Terms And Conditions</p>
              </div>
              

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
    
            <p className='text-center font-semibold'>Already Have An Account ? <Link to='/auth/login' className='text-red-600'>Login</Link></p>
          </form>
        </div>
      </div>
    );
};

export default Register;