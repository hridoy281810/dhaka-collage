import React from 'react';

const ButtonComponent = ({children}) => {
    return (
        <>
           <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#00BBC7] to-[#4C6CDC] cursor-pointer'>{children}</button> 
        </>
    );
};

export default ButtonComponent;