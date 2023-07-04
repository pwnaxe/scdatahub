import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const App = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'5'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      navigation={false}
      pagination={false}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      {
        Array.from({ length: 23 }, (_, i) => i + 1).map((number) => (
          <SwiperSlide key={number}>
            <img src={`assets/logos/Obraz${number}.png`} alt={`Obrazek ${number}`} className="slideImage" />
          </SwiperSlide>
        ))
      }
    </Swiper >
  );
};

export default App;
