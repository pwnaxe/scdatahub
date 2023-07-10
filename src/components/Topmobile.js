import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import intromobile from '../assets/intromobile.mp4';
import Appbar from './Appbar';


const Topmobile = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2;
    }
  }, []);
  return (
    <Box height={'100vh'} width={'100vw'} position="relative">
      <Appbar />
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
        muted
        autoPlay
        loop
      >
        <source src={intromobile} type="video/mp4" />
        <p>Przepraszamy, Twoja przeglądarka nie obsługuje wideo.</p>
      </video>
    </Box>
  );
};

export default Topmobile;
