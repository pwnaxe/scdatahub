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
    <Container component="section" maxWidth="lg" sx={{ py: 8, mt: 5 }} id="aboutUsSection">
      <Typography variant="h2" align="center">
        O firmie
      </Typography>

      <Box sx={{ mt: 6, mb: 7 }}>
        <Typography textAlign={"center"} fontSize={20} >
          SC Data Hub jest innowacyjną spółką fintech specjalizującą się w udostępnianiu otwartych danych miejskich. Nasza misja to promowanie transparentności i efektywności w korzystaniu z danych miejskich poprzez technologiczne rozwiązania.
          <br /><br />
          SC Data Hub, część grupy SkyCash Poland S.A., jest pionierem w dziedzinie technologii finansowych,
          <br />
          dominując na polskim rynku z <strong>ponad 80% udziałem w sektorze płatności mobilnych za parking i 50% udziałem w rynku biletów miejskich.</strong>
          <br /> <br />
          Używając naszej szerokiej ekspertyzy i głębokiej wiedzy w dziedzinie finansów i technologii, stworzyliśmy innowacyjną platformę łączącą biznes, administrację publiczną i technologię, <strong>przyczyniając się do tworzenia inteligentnych miast i efektywnych rozwiązań biznesowych.</strong>
        </Typography>
      </Box>

      <Grid container spacing={10} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={5}>
          <GlassPaper elevation={3} sx={{ height: '90%' }} className={isVisible ? 'visible' : ''}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Nasza wizja!
            </Typography>
            <Typography>
              Nasza wizja polega na zastosowaniu potężnej technologii danych, aby poprawić jakość życia i przyspieszyć cyfrowy rozwój społeczeństwa. To podejście zaowocowało powstaniem SC DATA HUB - platformy zarządzania otwartym API, które rewolucjonizuje sposób, w jaki przetwarzane są dane. Nasze API to nie tylko most umożliwiający łatwą wymianę danych, ale także wszechstronne narzędzie obsługujące różne formaty danych i będące kompatybilne z wieloma systemami.

              Elastyczność i uniwersalność naszego API umożliwiają łatwe dostosowanie do indywidualnych potrzeb każdej organizacji. Dzięki tej adaptacyjności jesteśmy w stanie zaspokoić potrzeby obywateli bardziej efektywnie, przyspieszać innowacje, ulepszać usługi publiczne i otwierać nowe możliwości dla firm. Nasz SC DATA HUB to kluczowy gracz w przyszłości inteligentnych miast, przekształcający sposoby, w jakie zarządzamy i wykorzystujemy dane.

              W SC Data Hub, inspirowani naszymi doświadczeniami w SkyCash, dążymy do bycia centralną szyną danych, zapewniającą zintegrowane usługi. Widzimy przed sobą szansę na intensywną rozbudowę naszej platformy, aby jeszcze lepiej służyć inteligentnym miastom w Polsce, poprzez optymalne wykorzystanie danych.

              W naszej wizji, SC DATA HUB przekształca się z czystego dostawcy danych w silnik zmian, katalizator ekosystemu, który tworzy wartość dla społeczności i wpływa pozytywnie na jakość życia obywateli. Jesteśmy SC Data Hub - dostawca otwartych danych, motorem innowacji i wizjonerem przyszłości inteligentnych miast.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <img src="/assets/about.png" alt="aboutus1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
      </Grid>
      <Grid container spacing={10} justifyContent="center" alignItems="stretch" sx={{ mb: 5, mt: 5, }}>
        <Grid item xs={12} sm={6} md={5}>
          <img src="/assets/about.png" alt="aboutus2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
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
      </Grid>
      <Grid container spacing={10} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={5}>
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
        <Grid item xs={12} sm={6} md={5}>
          <img src="/assets/about.png" alt="aboutus3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
      </Grid>
      <Grid container spacing={10} justifyContent="center" alignItems="stretch" textAlign={"center"} sx={{ mt: 5, }}>
        <Grid item xs={12} sm={10} md={10}>
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
        </Grid>
        <Grid item xs={12} sm={10} md={10} sx={{ mt: -10 }}>
          <img
            src="/assets/city.png"
            alt="city"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
    </Container >
  );
};

export default AboutUs;
