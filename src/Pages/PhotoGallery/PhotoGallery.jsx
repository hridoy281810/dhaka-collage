import React from 'react';
import gallery6 from '../../assets/home/Rectangle1.png'
import gallery1 from '../../assets/home/Rectangle 31.png'
import gallery4 from '../../assets/home/Rectangle 32.png'
import gallery5 from '../../assets/home/Rectangle 331.png'
import gallery2 from '../../assets/home/Rectangle33.png'
import gallery3 from '../../assets/home/Rectangle34.png'
import SectionTitle from '../../compents/SectionTitle/SectionTitle';
import ButtonComponent from '../../compents/ButtonComponent/ButtonComponent';
const PhotoGallery = () => {
    return (
        <div className='page-container pb-24 pt-44'>
        <SectionTitle
          title={"Gallery"}
          subTitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"}
          subTitle2={"has been the industry's standard dummy text ever since the 1500s, when"}
        />
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8' >
                <img  className='w-full' src={gallery1} alt="" />
                <img className='w-full' src={gallery2} alt="" />
                <img className='w-full' src={gallery3} alt="" />
                <img className='w-full' src={gallery4} alt="" />
                <img className='w-full' src={gallery5} alt="" />
                <img className='w-full' src={gallery6} alt="" />
                <img className='w-full' src={gallery1} alt="" />
                <img className='w-full' src={gallery2} alt="" />
                <img className='w-full' src={gallery3} alt="" />
                <img className='w-full' src={gallery4} alt="" />
                <img className='w-full' src={gallery5} alt="" />
                <img className='w-full' src={gallery6} alt="" />
                <img className='w-full' src={gallery1} alt="" />
                <img className='w-full' src={gallery2} alt="" />
                <img className='w-full' src={gallery3} alt="" />
              </div> 
      <div className='flex justify-center mt-20'>
      <ButtonComponent>Load More</ButtonComponent>
      </div>
      </div>
    );
};

export default PhotoGallery;