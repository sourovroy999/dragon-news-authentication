import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { authContext } from '../Provider/AuthProvider';

const Nav = () => {
    const {user, Logout}=useContext(authContext)
    // console.log(user);

    // console.log(import.meta.env.VITE_NAME);
    
    
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div className='flex gap-3 text-gray-400'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
                
            </div>
            <div className='login'>
                <div className='flex gap-2 items-center'>
                    {
                        user && user?.email ? <div className='flex items-center gap-2'><img className='w-10 h-10 object-cover rounded-full' src={user?.photoURL} alt="" />
                        <p className='font-bold'>{user.displayName}</p>
                        </div> : <img src={userIcon}/> 
                    }
                   

                    {
                        user&& user?.email? 
                        (<button onClick={Logout} className="btn btn-neutral rounded-none">Log Out</button>)
                        :(<Link to='/auth/login' className="btn btn-neutral rounded-none">Log in</Link>)
                    }

                    


                    

                    
                </div>

            </div>
        </div>
    );
};

export default Nav;