// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{
    backgroundImage:
      'url("https://themewagon.github.io/Carint/images/slider-bg.jpg")',
  }} className='relative !h-[600px]  !flex justify-start !items-start flex-col'>
          <h1 className=' z-50 !text-[50px] text-red-600 '>We Provide best <br />
            Transport Service</h1>
          <p className=' z-50 text-amber-50 !text-[15px] '> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia <br /> architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, <br /> blanditiis quidem  dolorum odit voluptas? Voluptate, eveniet?</p>
          <button className=' absolute bottom-[120px] z-50 w-[180px] h-[50px] bg-cyan-500'>Get a Quote</button>
          <div className='absolute w-full h-full bg-black/50'></div>
        </SwiperSlide>

        <SwiperSlide style={{
    backgroundImage:
      'url("https://themewagon.github.io/Carint/images/slider-bg.jpg")',
  }}  className='!h-[600px] bg-[url(https://themewagon.github.io/Carint/images/slider-bg.jpg)] !flex justify-start !items-start flex-col'>
          <h1 className=' z-50 !text-[50px] text-amber-50 '>We Provide best <br />
            Transport Service</h1>
          <p className=' z-50 !text-[15px] text-amber-50'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia <br /> architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci,<br /> blanditiis quidem  dolorum odit voluptas? Voluptate, eveniet?</p>
          <button className=' absolute bottom-[120px] z-50 w-[180px] h-[50px] bg-cyan-500'>Get a Quote</button>
          <div className='absolute w-full h-full bg-black/50'></div>
        </SwiperSlide>
        <SwiperSlide style={{
    backgroundImage:
      'url("https://themewagon.github.io/Carint/images/slider-bg.jpg")',
  }}  className='!h-[600px] !flex justify-start !items-start flex-col'>
          <h1 className=' z-50 !text-[50px] text-amber-50 '>We Provide best <br />
            Transport Service</h1>
          <p className=' z-50 !text-[15px]  text-amber-50'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia <br /> architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, <br /> blanditiis quidem  dolorum odit voluptas? Voluptate, eveniet?</p>
          <button className=' absolute bottom-[120px] z-50 w-[180px] h-[50px] bg-cyan-500'>Get a Quote</button>
          <div className='absolute w-full h-full bg-black/50'></div>

        </SwiperSlide>

      </Swiper>
    </>
  );
}