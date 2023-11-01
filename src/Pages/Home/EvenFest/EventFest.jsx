import React from 'react';
import allEvent from '../../../assets/all-event/Rectangle 8.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './EventFest.css'
import SectionTitle from '../../../compents/SectionTitle/SectionTitle';
import EventFestCard from './EventFestCard';
import Arrow from '../../../compents/Arrow/Arrow';

const EventFest = () => {
    const eventData = [
        {id:1, image: allEvent },
        {id:2, image: allEvent },
        {id:3, image: allEvent },
        {id:4, image: allEvent },
        {id: 5, image: allEvent },
        {id:6, image: allEvent },
        {id:7, image: allEvent },

    ]
    return (
        <div className='event-fest-image'>
         
       <div className='py-24 '>
       <SectionTitle className='uppercase' title={'DCSC EVENT FEST-2023'} subTitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"} subTitle2={"has been the industry's standard dummy text ever since the 1500s, when"}></SectionTitle>
       <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            // When screen width is >= 1024px
            1024: {
              slidesPerView: 5,
            },
            // When screen width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // When screen width is < 768px
            0: {
              slidesPerView: 1,
            },
          }}
        > 
      {     eventData.map((data)=> (
                <SwiperSlide  key={data?.id} >
              <EventFestCard  data={data}/>
            </SwiperSlide>
            
            )
            )
            }
     
            
            </Swiper>
            <Arrow></Arrow>
       </div>
        </div>
    );
};

export default EventFest;