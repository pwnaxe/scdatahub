import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <div id="Logoswiper"></div>
      <Typography variant="h2" align="center" sx={{ mt: 6, mb: 4 }}>
        Zaufali Nam
      </Typography>
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 600,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={false}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 'auto',
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5,
          },
        }}
      >
        {
          Array.from({ length: 23 }, (_, i) => i + 1).map((number) => (
            <SwiperSlide key={number}>
              <img src={`assets/logos/Obraz${number}.png`} alt={`Obrazek ${number}`} className="slideImage" />
            </SwiperSlide>
          ))
        }
      </Swiper >
    </Box>
  );
};

export default App;
