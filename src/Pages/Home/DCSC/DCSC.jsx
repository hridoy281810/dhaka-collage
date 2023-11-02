import React, { useState } from 'react';
import image from '../../../assets/home/Rectangle26.png'
import ButtonComponent from '../../../compents/ButtonComponent/ButtonComponent';
const DCSC = () => {
    const [activeTab, setActiveTab] = useState('about'); // Initialize the active tab to 'about'

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    return (
        <div className='my-container '>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-24 py-32'>
             <div>
             <div>
                <h1 className='text-4xl font-bold text-white'>DCSC</h1>
                <div className='flex justify-around  items-center bg-white px-6 rounded-lg text-xl font-semibold my-6'>
               <ButtonComponent>About</ButtonComponent>
               <p>Intro</p>
               <p>What we do</p>
                </div>
                <p className='text-gray-300 '>Dhaka College Science Club, established in 1996, is a pioneering institution dedicated to fostering scientific curiosity and exploration. With over two decades of nurturing young minds, our club has been a hub for students to delve into various scientific disciplines. Through engaging activities, lectures, and experiments, we empower members to develop critical thinking skills and a profound appreciation for the world of science. Our enduring legacy continues to inspire the next generation of scientists and innovators in Dhaka and beyond.
                 </p>
             </div>
             </div>
             <div className=''>
                <img  src={image} className='shadow-2xl shadow-emerald-500' alt="" />
             </div>
            </div>
        </div>
    );
};

export default DCSC;