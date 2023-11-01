import React from 'react';
import allEvent from '../../assets/all-event/Rectangle 8.png'
import { BsArrowUpRight } from "react-icons/bs";
const AllEvent = () => {
    const eventData = [
        { image: allEvent },
        { image: allEvent },
        { image: allEvent },
        { image: allEvent },
        { image: allEvent },
        { image: allEvent },
        { image: allEvent },
        { image: allEvent },
        { image: allEvent },
        { image: allEvent },
        { image: allEvent },
        { image: allEvent },
    ]
    return (
        <div className='page-container py-24 '>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-10 '>
            {
            eventData.map(({image},i)=> (
                <div key={i} className='bg-[#1C2069] border-2 border-[#484EDB] rounded-lg p-6'>
                <img className='w-full rounded-lg mb-9' src={image} alt="" />
                <h1 className='text-2xl font-bold text-[#FFD707] '>DCSC Event Photography Program</h1>
            <div className='flex justify-between mt-6 mb-4'>
             <p className='text-white'>18-10-2023 to 20-10-2023</p> 
            <p className='bg-[#216DDE] px-2 py-1.5 text-white border-2'>
            <BsArrowUpRight ></BsArrowUpRight>
            </p>
            </div>
             </div>
            )
            )
            }
         
          </div>
        </div>
    );
};

export default AllEvent;