import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../compents/Navbar/Navbar';
import Footer from '../compents/Footer/Footer';
import Banner from '../Pages/Home/Banner/Banner';

const Layout = () => {
    return (
        <div className='bg-[#041551] mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-798px)]'>
            <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;