import React, { useState } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from './components/Top';
import Aboutus from './components/Aboutus';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Logoswiper from './components/Logos';
import Fotter from './components/Fotter';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setShowContent(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Top onEnter={handleEnter} />
      {showContent && (
        <>
          <Aboutus />
          <Offer />
          <Contact />
          <Logoswiper />
          <Fotter />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
