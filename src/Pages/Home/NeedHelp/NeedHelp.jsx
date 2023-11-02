import React from 'react';
import SectionTitle from '../../../compents/SectionTitle/SectionTitle';
import ButtonComponent from '../../../compents/ButtonComponent/ButtonComponent';

const NeedHelp = () => {
    return (
        <div className='my-container mt-24 pb-24'>
           <div className='need-any-help-image border-2 py-28'>
                <SectionTitle title={"Need Any help?"}></SectionTitle>
                <div className='md:flex justify-center items-center gap-10 p-2'>
                <input className='bg-inherit border-b-2 focus:outline-none focus:ring-0  text-white mb-4 me-4' placeholder='Email' type="text"  /> 
                <input className='bg-inherit border-b-2 focus:outline-none focus:ring-0  text-white mb-4' placeholder='Details' type="text"  /> 
                <ButtonComponent>Sent</ButtonComponent>
                </div>
           </div>
        </div>
    );
};

export default NeedHelp;