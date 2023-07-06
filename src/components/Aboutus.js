import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { animateScroll as scroll, Events } from 'react-scroll';

const GlassPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(221, 235, 255, 0.3)',
  color: 'white',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(2),
  borderRadius: '10px',
  textAlign: 'center',
  opacity: 0,
  transform: 'translateY(250px)',
  transition: 'opacity 1s, transform 2s',

  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },

  '&:hover': {
    boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1.05)',
  },
}));

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    const checkVisibility = () => {
      const el = document.getElementById('aboutUsSection');
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Container component="section" maxWidth="lg" sx={{ py: 8 }} id="aboutUsSection">
      <Typography variant="h2" align="center">
        O nas
      </Typography>

      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="body1">
          SC Data Hub jest innowacyjną spółką fintech specjalizującą się w udostępnianiu otwartych danych miejskich. Nasza misja to promowanie transparentności i efektywności w korzystaniu z danych miejskich poprzez technologiczne rozwiązania.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }} className={isVisible ? 'visible' : ''}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Kim jesteśmy?
            </Typography>
            <Typography>
              Jesteśmy częścią grupy SkyCash Poland S.A. lidera w branży z ponad 80% udziałem w rynku płatności za parkingi za pomocą smartfonu i ponad 50% udziałem w rynku płatności za bilety miejskie. <br /><br />
              Nasza innowacyjna platforma, SC DATA HUB, łączy biznes, administrację publiczną i technologię, współtworząc inteligentne miasta i efektywne rozwiązania biznesowe.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }} className={isVisible ? 'visible' : ''}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Cele i wartości
            </Typography>
            <Typography>
              Naszym nadrzędnym celem jest oferowanie społeczeństwu usług, które ułatwiają codzienne życie, przyspieszają innowacje,
              oszczędzając czas i pieniądze, a także redukując wpływ na środowisko.
              <br /><br /><br />
              Dążymy do ciągłego poprawiania efektywności zarządzania zasobami miejskimi oraz generowania
              związanych z tym możliwości dla firm oraz instytucji publicznych.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: "90%" }} className={isVisible ? 'visible' : ''}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom sx={{ mb: 2 }}>
              Współpraca z nami
            </Typography>
            <Typography>
              Stworzyliśmy program partnerski dla miast, firm, organizacji które chcą współtworzyć przyszłość opartą na efektywnym wykorzystaniu danych.
              <br /><br /><br />
              Wierzymy, że nasz sukces jest ściśle powiązany z sukcesem naszych partnerów. Zapraszamy do współtworzenia przyszłości opartej na efektywnym wykorzystaniu danych.
            </Typography>
          </GlassPaper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight={'bold'} gutterBottom sx={{ mb: 2 }}>
          Wiele usług jeden operator SC DATA HUB
        </Typography>
        <Typography variant="body1">
          Integracja z SkyCash umożliwia <strong>łatwy</strong> dostęp do szerokiego wachlarza funkcji i usług, takich jak bilety komunikacji miejskiej, parkowanie w strefach płatnego parkowania, płatności za autostrady.
          <br /><br />
          Nieustannie stawiamy na rozwój i innowacje co gwarantuje przyszłe poszerzanie naszej oferty API.
          <br /><br />
          Przyszłość to <strong>SC DATA HUB</strong> - <strong>otwarte dane</strong> - <strong>otwarte miasta</strong>.

        </Typography>
        <img
          src="/assets/city.png"
          alt="city"
          sx={{ height: '30%', width: '30%', mt: 10 }}
        />
      </Box>
    </Container>
  );
};

export default AboutUs;
