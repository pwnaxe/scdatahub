import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Grid, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import oferta from '../assets/diagram_DK.png';
import { animateScroll as scroll, Events } from 'react-scroll';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import handshake from '../assets/handshake.mp4';


const containerStyle = {
  width: '40%',
  height: '400px',
  sx: { allingItems: 'center' },
};

const centerOfPoland = {
  lat: 51.9189,
  lng: 19.1344
};


const GlassPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(221, 235, 255, 0.3)',
  color: 'white',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(2),
  borderRadius: '10px',
  textAlign: 'center',
  opacity: 1,
  transform: 'translateY(150px)',
  transition: 'opacity 1s, transform 3s',

  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },

  '&:hover': {
    boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1.05)',
  },
}));

const Oferta = () => {
  const [isFullscreen, setFullscreen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const videoRef = useRef();

  const handleFlip = (card) => {
    setExpandedCard(card);
    setFullscreen(true);
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.card-class')) {
        setFullscreen(false);
        setExpandedCard(null);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Container component="section" maxWidth="lg">
      <Typography variant="h2" align="center">
        Nasze Usługi
      </Typography>

      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="body1" align="center">
          Odkryj, jak SC Data Hub może wspomóc Twój biznes, oferując różnorodne dane miejskie.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ display: isFullscreen ? 'none' : 'flex' }}>

        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }} className={`card-class ${isVisible ? 'visible' : ''}`}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Zintegrowane i generyczne API
            </Typography>
            <Typography>
              Nasze spójne API ułatwia integrację z obszernymi zestawami otwartych danych miejskich, umożliwiając wdrożenie nowych usług i rozwiązań dostosowanych do Twojego biznesu.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={() => handleFlip('card1')}>
              Dowiedz się więcej
            </Button>
          </GlassPaper>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }} className={`card-class ${isVisible ? 'visible' : ''}`}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Szeroki zakres usług
            </Typography>
            <Typography>
              SC DATA HUB oferuje dostęp do rozległego wyboru otwartych danych miejskich. Z naszym wszechstronnym API, zdolnym do elastycznej wymiany danych, możesz przyspieszyć innowacje i ulepszać usługi, dostosowując je do potrzeb Twojej organizacji.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={() => handleFlip('card2')}>
              Nasze kompleksowe rozwiązania
            </Button>
          </GlassPaper>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }} className={`card-class ${isVisible ? 'visible' : ''}`}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Profesjonalne Wsparcie
            </Typography>
            <Typography>
              Nasza wizja współpracy to partnerstwo oparte na wzajemnych korzyściach.
              Nasz zespół ekspertów jest dostępny, aby pomóc w osiągnięciu Twoich celów biznesowych i technicznych. Wspieramy w realizacji strategii i zapewniamy niezbędne narzędzia.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={() => handleFlip('card3')}>
              Jak możemy współpracować?
            </Button>
          </GlassPaper>
        </Grid>
      </Grid>

      {/* Expanded Card */}
      {isFullscreen && (
        <div
          data-backdrop="true"
          style={{
            position: 'fixed',
            top: '10%',
            left: '10%',
            width: '80%',
            height: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            padding: '2rem',
          }}
        >
          <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ mb: 10 }}>
            <Grid item xs={12}>
              <GlassPaper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {expandedCard === 'card1' && (
                    <>
                      <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                        Zintegrowane i Uniwersalne API
                      </Typography>
                      <Typography variant="h5" gutterBottom style={{ textAlign: 'justify' }}>
                        Nasze zaawansowane API dostarcza szeroką gamę możliwości integracyjnych oraz dostępu do danych, co umożliwia efektywne wdrażanie innowacyjnych rozwiązań miejskich, które mają potencjał fundamentalnie przekształcić sposób prowadzenia działalności przez Twoją organizację, a także sposób wspierania społeczności lokalnych.
                        <br /><br />
                        Co więcej, nasz wyrafinowany model uniwersalnego API otwiera nowe horyzonty, pozwalając na szybką i sprawną integrację z nowymi zestawami danych, które stają się dostępne w naszym systemie. To oznacza, że możesz dynamicznie rozszerzać swoją ofertę, włączając do niej nowatorskie usługi, pozostając w awangardzie branży.
                      </Typography>
                      <img src={oferta} alt="oferta" style={{ width: '50%', height: '50%' }} />
                    </>
                  )}


                  {expandedCard === 'card2' && (
                    <>
                      <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                        Szeroki zakres usług
                      </Typography>
                      <Typography variant="h6" gutterBottom style={{ textAlign: 'justify' }}>
                        - <strong>Ponad 100</strong> miast w Polsce w zakresie mobilnych płatności parkingowych, zarówno w strefach publicznych, jak i na prywatnych parkingach.
                        <br /><br />
                        - <strong>Ponad 70</strong> miast, zintegrowanych pod względem zakupu biletów miejskich.
                        <br /><br />
                        - Obsługujemy <strong>aż 99% połączeń kolejowych</strong>, a nasze API pozwala na zakup biletów kolejowych, sprawdzenie rozkładów jazdy, a także dostęp do informacji o opóźnieniach i zmianach w planie podróży.
                        <br /><br />
                        Szybkie i intuicyjne płatności - Twoi klienci dokonują płatności za bilety autostradowe, nie tracąc czasu na szukanie portfela.
                        <br /><br />
                        Dążymy do wsparcia cyfrowego rozwoju społeczeństwa.
                      </Typography>
                      <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                          <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={centerOfPoland}
                            zoom={6}
                          >
                          </GoogleMap>
                        </LoadScript>
                      </Box>
                    </>
                  )}

                  {expandedCard === 'card3' && (
                    <>
                      <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                        Profesjonalne Wsparcie
                      </Typography>
                      <Typography variant="h5" gutterBottom>
                        Nasze API jest łatwe w integracji, a nasi specjaliści oferują wsparcie techniczne na każdym etapie procesu - od planowania do wdrożenia. Dodatkowo oferujemy szereg szkoleń, zarówno online, jak i stacjonarnych, aby pomóc naszym partnerom efektywnie wykorzystywać naszą platformę.
                        <br /><br />
                        Dostarczamy również materiały promocyjne wspierające działania naszych partnerów, a nasze długoterminowe, strategiczne podejście do współpracy pozwala osiągać wspólne cele.
                        <br /><br />
                        Wierzymy, że nasz sukces jest ściśle powiązany z sukcesem naszych partnerów. Zapraszamy do współtworzenia przyszłości opartej na efektywnym wykorzystaniu danych.
                      </Typography>
                      <video
                        ref={videoRef}
                        autoPlay
                        style={{
                          width: '70%',
                          height: '50%',
                          objectFit: 'cover',
                          zIndex: -1,
                        }}
                        muted
                      >
                        <source src={handshake} type="video/mp4" />
                        <p>Przepraszamy, Twoja przeglądarka nie obsługuje wideo.</p>
                      </video>
                    </>
                  )}
                </div>
              </GlassPaper>
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default Oferta;