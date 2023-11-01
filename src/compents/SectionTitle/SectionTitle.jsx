import React from 'react';

const SectionTitle = ({title,subTitle,subTitle2}) => {
    return (
        <div className='text-center  text-white '>
            <h2 className='text-3xl md:text-5xl lg:text-5xl font-bold mb-11 '>{title}</h2>
            <p className='text-white '>{subTitle}</p>
            <p className='text-white mb-16  '>{subTitle2}</p>
        </div>
    );
};

export default SectionTitle;
