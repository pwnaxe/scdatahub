import React from 'react';
import Topmovie from '../assets/Topmovie.mp4';
import Menu from './Menu.js';
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
      <video className="background-video" src={Topmovie} autoPlay loop muted
      />
      <Menu />
    </Box>
  );
}

export default Top;
