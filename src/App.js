import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from './components/Top';
import Aboutus from './components/Aboutus';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Logoswiper from './components/Logos'
import Fotter from './components/Fotter';


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Top />
      <Aboutus />
      <Offer />
      <Contact />
      <Logoswiper />
      <Fotter />
    </ThemeProvider>
  );
}

export default App;
