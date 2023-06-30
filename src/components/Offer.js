import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Grid, Container, Button, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import videoPath from '../assets/sky.mp4';

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

const FlipCard = styled(Box)(({ flipped }) => ({
  backgroundColor: 'transparent',
  perspective: '1000px',
  transform: flipped ? 'scale(2)' : 'none',
  transition: 'transform 0.8s',
}));

const FlipCardInner = styled(Box)(({ flipped }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.8s',
  transformStyle: 'preserve-3d',
  transform: flipped ? 'rotateY(180deg)' : 'none',
}));

const FlipCardFront = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
});

const FlipCardBack = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  backgroundColor: 'white',
  transform: 'rotateY(180deg)',
});

const Oferta = () => {
  const [flipped, setFlipped] = useState(false);
  const videoRef = useRef(null);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  useEffect(() => {
    if (flipped) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [flipped]);

  return (
    <Container component="section" maxWidth="lg" sx={{ py: 8, mb: 25 }}>
      <Typography variant="h2" align="center">
        Nasza Oferta
      </Typography>

      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="body1" align="center">
          SC Data Hub zapewnia pełen zakres usług związanych z udostępnianiem danych miejskich.
          Odkryj, jak nasze rozwiązania mogą pomóc w rozwoju Twojego biznesu.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <FlipCard flipped={flipped}>
            <FlipCardInner flipped={flipped}>
              <FlipCardFront>
                <GlassPaper elevation={3}>
                  <Typography variant="h5" gutterBottom>
                    Dostęp do Otwartych Danych
                  </Typography>
                  <Typography>
                    Uzyskaj dostęp do szerokiej gamy otwartych danych miejskich, które mogą być wykorzystane w różnych aplikacjach i usługach.
                  </Typography>
                  <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={handleFlip}>
                    Dowiedz się więcej
                  </Button>
                </GlassPaper>
              </FlipCardFront>
              <FlipCardBack>
                <CardContent>
                  <video width="100%" controls ref={videoRef}>
                    <source src={videoPath} type="video/mp4" />
                    Przepraszamy, Twoja przeglądarka nie wspiera filmów.
                  </video>
                  <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={handleFlip}>
                    Wróć
                  </Button>
                </CardContent>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Zaawansowane API dla Twojego Biznesu
            </Typography>
            <Typography>
              Nasze API pozwala na szybką i łatwą integrację z naszymi danymi, umożliwiając rozwój innowacyjnych rozwiązań.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }}>
              Przetestuj API
            </Button>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Wsparcie i Współpraca
            </Typography>
            <Typography>
              Nasz zespół ekspertów jest dostępny, aby pomóc w osiągnięciu Twoich celów biznesowych i technicznych.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }}>
              Program Wsparcia
            </Button>
          </GlassPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Oferta;
