import React from 'react';
import './Banner.css'
import image1 from'../../../assets/nav-banner/Rectangle27.png'
import image2 from'../../../assets/nav-banner/Rectangle28.png'
import image3 from '../../../assets/nav-banner/Rectangle29.png'

const Banner = () => {

    return (
        <div>
        <div className='banner-image  '>
        <div className='absolute inset-0'>
  <div
    className='bg-gradient-to-t from-[#00D830] to-[#7D97F3] opacity-30'
    style={{
      position: 'absolute',
      zIndex: 0,
      bottom: '0',
      height: '100%',
      width: '100%',
      background: 'radial-gradient(circle, #00D830, #7D97F3 70%)',
    }}
  ></div>
</div>   
 <div className=' max-w-screen-lg mx-auto  flex flex-col justify-center h-full px-4 md:flex-row  absolute inset-4 sm:inset-8 md:inset-36  lg:inset-44 '>
            <div className='  '>
            <h1 className='font-bold text-white  text-4xl sm:text-4xl md:text-6xl lg:text-8xl text-center'>DHAKA COLLEGE </h1>
             <h1 className='font-bold text-white text-center   text-4xl  md:text-6xl lg:text-8xl'>SCIENCE CLUB</h1>
            
            </div>
          
          </div>
         
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between mt-[-548px] lg:mt-[-400px]  '>
             <img className='z-10' src={image1} alt="" />
             <img className='z-10' src={image2} alt="" />
             <img className='z-10' src={image3} alt="" />
             </div>
    </div>
    );
};

export default Banner;