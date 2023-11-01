import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Arrow = () => {
    return (
        <div className='flex justify-center items-center gap-10 text-white mt-16 pb-24'>
        <span className='border-2 py-2 px-8 border-white'> <BsArrowLeft size={32}/></span>
      <span className=' py-2 px-8 bg-[#216DDE]'> <BsArrowRight size={32}/></span>  
         </div>
    );
};

export default Arrow;