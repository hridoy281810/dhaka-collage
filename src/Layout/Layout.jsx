import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../compents/Navbar/Navbar';

const Layout = () => {
    return (
        <div className='bg-[#041551] mx-auto'>
            <Navbar></Navbar>
            <Outlet ></Outlet>
        </div>
    );
};

export default Layout;