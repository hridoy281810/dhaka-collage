import React from 'react';
import logo from'../../assets/nav-banner/DCSC 1.png';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiOutlineGoogle } from "react-icons/ai";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
const Footer = () => {
    return (
        <div className='bg-[#000D37] '>
            <footer className="footer footer-center p-10 ">
  <aside className='text-white '>
  <img src={logo} alt="" />
    <p className="font-bold text-3xl mt-5 mb-11">
    Dhaka College Science Club
    </p> 
    <p className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> <p className='text-xl'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> <p className='text-xl mb-11'>when</p>
    <div className="grid grid-flow-col gap-4 mb-7 ">
<FaFacebook size={24}/>
<AiFillInstagram size={24}/>
<AiOutlineGoogle size={24}/>
<IoLogoWhatsapp size={24}/>
<IoMdMail size={24}/>
    </div>

  </aside> 
</footer>
   <footer className="footer my-container footer-center p-10  border-t-2 text-white font-semibold text-xl">
  <nav>
    <p>© Copyright 2023, All Rights Reserved by DCSC</p> <p>Built By <span className='text-[#1ED2DD]'>The YOLO Studio</span></p>
  </nav>
</footer>
  </div>
    );
};

export default Footer;