import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { authContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const[showPassword, setShowPassword]=useState(false)


const {createUser, setUser,updateUserProfile,sendVerificationEmail}=useContext(authContext)
const navigate=useNavigate()
const[error, setError]=useState('')
const[emailError, setEmailError]=useState('')
const[passwordError, setPasswordError]=useState('')

const handleSubmit=(e)=>{
        // const auth=getAuth(app)

        
        e.preventDefault();
        //get form data
        const form=new FormData(e.target);
        const name=form.get('name')
        
        if(name.length<5){
            setError({ ...error, name:'must be more than 5 character'})
            return
        }
        setError('')
        
        const email=form.get('email')
        const photo=form.get('photo')
        const password=form.get('password')
        const confirmPassword=form.get('confirmPassword')
        const terms=form.get('terms')



        // console.log({name,email,photo, password});
        // console.log(password,confirmPassword);

        if(!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)){
            setEmailError('Please Use Gmail')
            return
        }
        setEmailError('')
       
        if(password !== confirmPassword){
            setPasswordError("Password didn't Match ")
            return
        }
        setPasswordError('')
        if(password.length<6){
            setError({...error, password:'Password should be greater than 6'})
            return
        }
        setError('')

        if(!terms){
            setError({...error, terms:'Accept Our Terms to Continue'})
            return
        }

        createUser(email, password)
        .then((result)=>{

            const user=result.user;


            
            setUser(user)

            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
            sendVerificationEmail()
                
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
              <input name='name' type="text" className="input" placeholder="Name" />
              {
                error.name && <label className="label text-xs text-red-500">
                    {error.name}
                </label>
              }

              <label className="label font-bold">Photo URL</label>
              <input name='photo' type="text" className="input" placeholder="Enter photo url" />



           <label className="label font-bold">Enter your email address</label>
              <input name='email' type="email" className="input" placeholder="Email" />
              {
                emailError && <label className="label text-xs text-red-500">
                {emailError}
            </label>
              }

              <label className="label font-bold">Enter your password</label>

   
     <label className="input input-bordered flex items-center gap-2">
            
         
          <input
            type={showPassword? "text": "password"}
            name="password"
            className="grow"
            placeholder="password"
          />
          <button onClick={()=>setShowPassword(!showPassword)}
            
            className="btn btn-xs "
          >
            {showPassword? <FaEyeSlash/> : <FaEye/>}
            
          </button>
        </label>
   
   {/* confirm password */}
        <label className="label font-bold">Confirm your password</label>

     <label className="input input-bordered flex items-center gap-2">
            
         
          <input
            type={showPassword? "text": "password"}
            name="confirmPassword"
            className="grow"
            placeholder="confirm password"
          />
          <button onClick={()=>setShowPassword(!showPassword)}
            
            className="btn btn-xs "
          >
            {showPassword? <FaEyeSlash/> : <FaEye/>}
            
          </button>
        </label>
        {
            error.password && <label className="label text-xs text-red-500">
            {error.password}
        </label>
        }
        {
            passwordError? <label className="label text-xs text-red-500">
            Password didn't Match
        </label>:''
        }
         
         {
            error.terms && <label className="label text-xs text-red-500">
            {error.terms}
        </label>
        }
              
              
              <div className='flex items-center gap-2 mt-3'>
              <input name='terms' type="checkbox" className="checkbox" />
              <p>Accept Our Terms And Conditions</p>
              </div>

              {/* {
                    error && <small className='text-red-500'>{error}</small>
                } */}
              

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
    
            <p className='text-center font-semibold'>Already Have An Account ? <Link to='/auth/login' className='text-red-600'>Login</Link></p>
          </form>
        </div>
      </div>
    );
};

export default Register;