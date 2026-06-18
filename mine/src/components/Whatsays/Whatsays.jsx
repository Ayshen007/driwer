import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function Whatsays() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-15">
        <SwiperSlide > <div className='flex w-7xl h-100 gap-54 mt-12 ml-10' > <div className='w-106 h-74  bg-amber-600'><img src="https://png.pngtree.com/thumb_back/fh260/background/20250415/pngtree-freight-container-vessel-cargo-ship-managing-global-shipments-import-export-services-image_17184326.jpg" alt="" /></div><div className='w-106 h-74 bg-amber-200' ><img src="https://d23n7ahjfnjotp.cloudfront.net/imgs/iphone/ships/new/6_lg.png" alt="" /></div></div></SwiperSlide>
        <SwiperSlide><div className='flex w-7xl h-100 gap-54 mt-12 ml-10' > <div className='w-106 h-74  bg-amber-600'><img src="https://tse1.mm.bing.net/th/id/OIP.f3XACflXmwCY1edVYZpu2wHaEt?r=0&w=650&h=414&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" /></div><div className='w-106 h-74 bg-amber-200' ><img src="https://i.pinimg.com/originals/5b/c7/61/5bc761336dac44d02c2ed1cc429e06a2.jpg" alt="" /></div></div></SwiperSlide>
      </Swiper>
    </>
  );
}
