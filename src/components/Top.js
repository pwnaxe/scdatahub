import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import intro from '../assets/intro.mp4';
import Appbar from './Appbar';

const Top = ({ onEnter }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = false;
      setIsPlaying(true);
    }
    setShowOverlay(false);
    if (onEnter) onEnter();
  };

  const handleEnterWithoutSound = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = true;
      setIsPlaying(true);
    }
    setShowOverlay(false);
    if (onEnter) onEnter();
  };

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
      >
        <source src={intro} type="video/mp4" />
        <p>Przepraszamy, Twoja przeglądarka nie obsługuje wideo.</p>
      </video>
      {showOverlay && (
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <Button
            variant="contained"
            onClick={handlePlayClick}
            style={{ marginBottom: '20px' }}
          >
            Power on device
          </Button>
          <Button
            variant="contained"
            onClick={handleEnterWithoutSound}
          >
            Enter without sound
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Top;
