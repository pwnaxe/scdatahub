import React from 'react';
import Topmovie from '../assets/Topmovie.mp4';
import { Box } from '@mui/material';

const Top = () => {
  return (
    <Box
      className="top-container"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}
    >
      <video className="background-video" src={Topmovie} autoPlay loop muted />

      <nav className="nav">
        <a href="#about" className="nav-item" style={{ '--delay': '0s', fontWeight: '800', color: '#35569b' }}>O nas</a>
        <a href="#offer" className="nav-item" style={{ '--delay': '.5s', fontWeight: '800', color: '#35569b' }}>Oferta</a>
        <a href="#contact" className="nav-item" style={{ '--delay': '1s', fontWeight: '800', color: '#35569b' }}>Kontakt</a>
      </nav>

    </Box>
  );
}

export default Top;
