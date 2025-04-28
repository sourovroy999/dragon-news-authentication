import React from 'react';
import { NavLink } from 'react-router';
import userIcon from '../assets/user.png'

const Nav = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='flex gap-3 text-gray-400'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
                
            </div>
            <div className='login'>
                <div className='flex gap-2 items-center'>
                    <img src={userIcon} alt="" />
                    <NavLink to='/auth/login' className='btn btn-neutral rounded-none'>Login</NavLink>
                    
                </div>

            </div>
        </div>
    );
};

export default Nav;