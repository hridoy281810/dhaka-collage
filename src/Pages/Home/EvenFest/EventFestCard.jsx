import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const EventFestCard = ({data}) => {
    return (
             <div className='bg-[#1C2069] border-2 border-[#484EDB] rounded-lg p-6'>
                <img className='w-[400px] rounded-lg mb-9' src={data?.image} alt="" />
                <h1 className='text-xl font-bold text-[#FFD707] '>DCSC Event Photography Program</h1>
            <div className='flex justify-between mt-6 mb-4'>
             <p className='text-white'>18-10-2023 to 20-10-2023</p> 
            <p className='bg-[#216DDE] p-1 text-white border-2'>
            <BsArrowUpRight ></BsArrowUpRight>
            </p>
            </div>
            </div>
    );
};

export default EventFestCard;