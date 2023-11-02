import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import logo from '../../assets/nav-banner/DCSC 1.png'
const Navbar = () => {
    return (
   <div className='fixed top-0 left-0 right-0  z-20'>
     <div className='my-container '>
     <div className="navbar bg-opacity-0  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
              <li><NavLink className={({ isActive }) => (isActive ? "text-[#1ED2DD]" : "")} to='/'>Home</NavLink></li>
              <li><NavLink to='/allEvent' className={({ isActive }) => (isActive ? "text-[#1ED2DD]" : "")}  >All Event</NavLink></li>
              <li><NavLink to='/committee' className={({ isActive }) => (isActive ? "text-[#1ED2DD]" : "")} >Committee</NavLink></li>
              <li><NavLink  to='/photo' className={({ isActive }) => (isActive ? "text-[#1ED2DD]" : "")} >Gallery</NavLink></li>
            </ul>
          </div>
         <img className='w-24  ' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            
          <li><NavLink className={({ isActive }) => (isActive ? "text-[#1ED2DD]" : "")} to='/'>Home</NavLink></li>
              <li><NavLink to='/allEvent' className={({ isActive }) => (isActive ? "text-[#1ED2DD]" : "")}  >All Event</NavLink></li>
              <li><NavLink to='/committee' className={({ isActive }) => (isActive ? "text-[#1ED2DD]" : "")} >Committee</NavLink></li>
              <li><NavLink  to='/photo' className={({ isActive }) => (isActive ? "text-[#1ED2DD]" : "")} >Gallery</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
            <ButtonComponent>Ongoing Event</ButtonComponent>
        </div>
      </div>
     </div>
   </div>
    );
};

export default Navbar;