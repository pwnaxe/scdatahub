import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import videoPath from '../assets/Comp 1.mp4';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const centerOfPoland = {
  lat: 51.9189,
  lng: 19.1344
};


const GlassPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(221, 235, 255, 0.3)',
  color: 'white',
  backdropFilter: 'blur(10px) saturate(125%)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(2),
  borderRadius: '10px',
  textAlign: 'center',
  transition: '0.5s',

  '&:hover': {
    boxShadow: '15 15px 22px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1.01)',
  },
}));

const Oferta = () => {
  const [isFullscreen, setFullscreen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleFlip = (card) => {
    setExpandedCard(card);
    setFullscreen(true);
  };

  const handleBack = () => {
    setExpandedCard(null);
    setFullscreen(false);
  };

  return (
    <Container component="section" maxWidth="lg" sx={{ mb: 5 }}>
      <Typography variant="h2" align="center">
        Nasze Usługi
      </Typography>

      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="body1" align="center">
          Odkryj, jak SC Data Hub może wspomóc Twój biznes, oferując różnorodne dane miejskie.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ mb: 10, display: isFullscreen ? 'none' : 'flex' }}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Szeroki Wachlarz Danych
            </Typography>
            <Typography>
              SC DATA HUB oferuje dostęp do rozległego wyboru otwartych danych miejskich. Z naszym wszechstronnym API, zdolnym do elastycznej wymiany danych, możesz przyspieszyć innowacje i ulepszać usługi, dostosowując je do potrzeb Twojej organizacji.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={() => handleFlip('card1')}>
              Dowiedz się więcej
            </Button>
          </GlassPaper>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Zintegrowane i generyczne API
            </Typography>
            <Typography>
              Nasze spójne API ułatwia integrację z obszernymi zestawami otwartych danych miejskich, umożliwiając wdrożenie nowych usług i rozwiązań dostosowanych do Twojego biznesu.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={() => handleFlip('card2')}>
              Dowiedz się więcej
            </Button>
          </GlassPaper>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Profesjonalne Wsparcie
            </Typography>
            <Typography>
              Nasz zespół ekspertów jest dostępny, aby pomóc w osiągnięciu Twoich celów biznesowych i technicznych. Wspieramy w realizacji strategii i zapewniamy niezbędne narzędzia.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={() => handleFlip('card3')}>
              Dowiedz się więcej
            </Button>
          </GlassPaper>
        </Grid>
      </Grid>

      {/* Expanded Card */}
      {isFullscreen && (
        <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ mb: 10 }}>
          <Grid item xs={12}>
            <GlassPaper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {expandedCard === 'card1' && (
                  <>
                    <Typography variant="h5" gutterBottom>
                      - Obsługujemy ponad 100 miast w Polsce w zakresie mobilnych płatności parkingowych, zarówno w strefach publicznych, jak i na prywatnych parkingach.
                      <br /><br />
                      - Współpracujemy z systemami komunikacji miejskiej w ok. 70 miastach, oferując różnorodne opcje zakupu biletów.
                      <br /><br />
                      - Nasze rozwiązania ułatwiają także zakup biletów autostradowych i kolejowych u 11 przewoźników, co stanowi 99% udziału w rynku transportu kolejowego dla pasażerów. <br /><br />
                      Dążymy do wsparcia cyfrowego rozwoju społeczeństwa.
                    </Typography>
                    <Box sx={{ mt: 6 }}>
                      <LoadScript googleMapsApiKey={'AIzaSyBdchwwEeyZHRGuUBZ1ZkkeAnukfgqR0WE'
                      }>
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={centerOfPoland}
                          zoom={6}
                        >
                          { /* Możesz dodać tutaj dodatkowe komponenty, takie jak markery */}
                        </GoogleMap>
                      </LoadScript>
                    </Box>
                  </>
                )}

                {expandedCard === 'card2' && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Typography variant="h5" gutterBottom>
                      Nasze API oferuje szerokie możliwości integracji i dostępu do danych, umożliwiając skuteczne wdrażanie nowych rozwiązań miejskich, które mogą zrewolucjonizować sposób, w jaki Twoja firma działa i wspiera społeczności lokalne.
                    </Typography>
                  </Box>
                )}

                {expandedCard === 'card3' && (
                  <Typography variant="h5" gutterBottom>
                    Nasze API jest łatwe w integracji, a nasi specjaliści oferują wsparcie techniczne na każdym etapie procesu - od planowania do wdrożenia. Dodatkowo oferujemy szereg szkoleń, zarówno online, jak i stacjonarnych, aby pomóc naszym partnerom efektywnie wykorzystywać naszą platformę.
                  </Typography>
                )}
              </div>
              <div>
                <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={handleBack}>
                  Wróć
                </Button>
              </div>
            </GlassPaper>
          </Grid>
        </Grid>
      )}

      <video width="100%" controls autoPlay>
        <source src={videoPath} type="video/mp4" />
        Przepraszamy, Twoja przeglądarka nie wspiera filmów.
      </video>
    </Container>
  );
};

export default Oferta;
