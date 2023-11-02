import React from 'react';
import executive from '../../assets/home/image610.png';
import SectionTitle from '../../compents/SectionTitle/SectionTitle';
import ButtonComponent from '../../compents/ButtonComponent/ButtonComponent';

const Committee = () => {
    const executiveData = [
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
        { image: executive },
    ]
  return (
    <div className='page-container pb-24 pt-44'>
      <SectionTitle
        title={"Executive Committee 2023"}
        subTitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"}
        subTitle2={"has been the industry's standard dummy text ever since the 1500s, when"}
      />
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-10 mt-20'>
        {
            executiveData.map(({image},i)=>(
                <div key={i} className='relative p-2 bg-[#100228] rounded-lg overflow-hidden'>
                <div className='absolute inset-0'>
                  <div
                    className='bg-gradient-to-t from-cyan-500 to-cyan-0 opacity-75'
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      bottom: '0',
                      height: '70%',
                      width: '100%',
                    }}
                  ></div>
                </div>
                <div className='text-container absolute inset-0 flex flex-col justify-end items-center' style={{ zIndex: 2 }}>
                 <div className='text-start ms-4'>
                 <h3 className='font-bold text-xl text-white  '>Mahfuzur Rahman Ongkon</h3>
                  <p className='text-[#1ED2DD] mb-4 pe-2 text-xl'>Joint Secretary of Sponsorship and Communication</p>
                 </div>
                </div>
                <img src={image} alt="" className="w-full h-auto relative z-0" />
              </div>
            ))
        }
      </div>
    <div className='flex justify-center mt-20'>
    <ButtonComponent>Load More</ButtonComponent>
    </div>
    </div>
  );
};

export default Committee;
