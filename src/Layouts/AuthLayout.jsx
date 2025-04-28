import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            Auth layout
            <Outlet/>
            
        </div>
    );
};

export default AuthLayout;