import React from 'react';
import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const GlassPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(221, 235, 255, 0.3)',
  color: 'white',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(2),
  borderRadius: '10px',
  textAlign: 'center',
}));

const QRCode = styled('img')(({ theme }) => ({
  width: '150px',
  height: '150px',
  margin: '20px auto',
  transition: 'all 0.1s ease-in-out',

  '&:hover': {
    animation: `${rotate} 1s linear infinite`,
  },
}));

const AboutUs = () => {
  return (
    <Container component="section" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center">
        O nas
      </Typography>

      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="body1">
          SC Data Hub jest innowacyjną spółką fintech specjalizującą się w udostępnianiu otwartych danych miejskich.
          Nasza misja to promowanie transparentności i efektywności w korzystaniu z danych miejskich poprzez technologiczne rozwiązania.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Powiązania z SkyCash
            </Typography>
            <Typography>
              Jako część Grupy SkyCash, czerpiemy z bogatego doświadczenia w zakresie fintechu i oferujemy zaawansowane rozwiązania w zakresie danych miejskich.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Współpraca z Bankami
            </Typography>
            <Typography>
              Współpracujemy z renomowanymi bankami, takimi jak Pekao SA i mBank, w celu integracji naszych usług i oferowania innowacyjnych rozwiązań.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Innowacyjne Projekty
            </Typography>
            <Typography>
              Zaangażowani w nowoczesne projekty, takie jak program automatycznego rozpoznawania rejestracji pojazdów na parkingach, współpracujemy ze środkami Unii Europejskiej.
            </Typography>
          </GlassPaper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>

        <Typography variant="body1">
          Zeskanuj kod QR, aby dowiedzieć się więcej o naszych możliwościach i rozwiązaniach technologicznych.
        </Typography>
        <QRCode
          src="/assets/qr.png"
          alt="QR Code"
        />
      </Box>
    </Container>
  );
};

export default AboutUs;
