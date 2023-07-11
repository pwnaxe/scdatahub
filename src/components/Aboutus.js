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
  transition: 'opacity 2s 1s, transform 2s 1s',

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
          SC Data Hub jest <strong>innowacyjną spółką fintech</strong> specjalizującą się w udostępnianiu otwartych danych miejskich. Nasza misja to promowanie transparentności i efektywności w korzystaniu z danych miejskich poprzez technologiczne rozwiązania.
          <br /><br />
          SC Data Hub, część grupy SkyCash Poland S.A., jest pionierem w dziedzinie technologii finansowych,
          <br />
          dominując na polskim rynku z <strong>ponad 80% udziałem w sektorze płatności mobilnych za parking i 50% udziałem w rynku biletów miejskich.</strong>
          <br /> <br />
          Używając naszej szerokiej ekspertyzy i głębokiej wiedzy w dziedzinie finansów i technologii, stworzyliśmy innowacyjną platformę łączącą biznes, administrację publiczną i technologię, <strong>przyczyniając się do tworzenia inteligentnych miast i efektywnych rozwiązań biznesowych.</strong>
        </Typography>
      </Box>

      <Grid container spacing={10} jalignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={5}>
          <GlassPaper elevation={3} sx={{ height: '95%' }} className={isVisible ? 'visible' : ''}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Przełomowa Technologia
            </Typography>
            <Typography>
              Nasza wizja polega na zastosowaniu <strong>potężnej technologii danych, aby poprawić jakość życia i przyspieszyć cyfrowy rozwój społeczeństwa.</strong>
              <br /><br />
              Dążymy do bycia <strong>centralną szyną danych</strong>, zapewniającą zintegrowane usługi.
              W naszej wizji, SC DATA HUB przekształca się z czystego dostawcy danych w silnik zmian, katalizator ekosystemu, który tworzy <strong>wartość dla społeczności i wpływa pozytywnie na jakość życia obywateli.</strong>
              <br /><br />
              <strong>Jesteśmy SC Data Hub - dostawcą otwartych danych, motorem innowacji i wizjonerem przyszłości smart cities.</strong>
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={5} alignItems="center" justifyContent="center">
          <img src="/assets/about.png" alt="aboutus1" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
        </Grid>
      </Grid>
      <Grid container spacing={10} alignItems="center" justifyContent="center" sx={{ mb: 5, mt: 5, }}>
        <Grid item xs={12} sm={6} md={5}>
          <img src="/assets/dart.png" alt="aboutus2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <GlassPaper elevation={3} sx={{ height: '90%' }} className={isVisible ? 'visible' : ''}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Nasza Misja i Wartości
            </Typography>
            <Typography>
              Jesteśmy SC Data Hub, motorem innowacji i wizjonerem przyszłości smart cities.
              <br />
              Naszym nadrzędnym celem jest oferowanie społeczeństwu usług, które <strong>ułatwiają codzienne życie, przyspieszają innowacje, oszczędzają czas i pieniądze, a także redukują wpływ na środowisko.</strong>
              <br /><br />
              Dążymy do ciągłego poprawiania efektywności zarządzania zasobami miejskimi oraz generowania związanych z tym możliwości dla firm oraz instytucji publicznych.
              <br /><br />
              Kierujemy się zasadami transparentności, odpowiedzialności i nieustannej innowacji.
              <br /><br />
              <strong>Jesteśmy dumni z naszej zdolności do dostarczania wartości dla naszych klientów, partnerów i społeczności, zarówno na poziomie lokalnym, jak i globalnym.</strong>
            </Typography>
          </GlassPaper>
        </Grid>
      </Grid>
      <Grid container spacing={10} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={5}>
          <GlassPaper elevation={3} sx={{ height: "90%" }} className={isVisible ? 'visible' : ''}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom sx={{ mb: 2 }}>
              Partnerstwo dla Przyszłości
            </Typography>
            <Typography>
              Stworzyliśmy program partnerski dla miast, firm, organizacji które chcą współtworzyć <strong>przyszłość opartą na efektywnym wykorzystaniu danych.</strong>
              <br /><br />
              Wierzymy, że nasz sukces jest ściśle powiązany z sukcesem naszych partnerów.
              <br />
              Zapraszamy do współtworzenia przyszłości opartej na efektywnym wykorzystaniu danych.
              <br /><br />
              Nasza wizja współpracy to <strong>partnerstwo oparte na wzajemnych korzyściach.</strong>
              Dostarczamy również materiały promocyjne wspierające działania naszych partnerów, a nasze długoterminowe, strategiczne podejście do współpracy pozwala osiągać wspólne cele.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <img src="/assets/wsol1.png" alt="aboutus3" style={{ width: '150%', height: '150%', objectFit: 'cover' }} />
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
