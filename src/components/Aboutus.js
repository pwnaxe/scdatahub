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
          SC Data Hub jest innowacyjną spółką fintech specjalizującą się w udostępnianiu otwartych danych miejskich. Nasza misja to promowanie transparentności i efektywności w korzystaniu z danych miejskich poprzez technologiczne rozwiązania.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Kim jesteśmy?
            </Typography>
            <Typography>
              Jesteśmy częścią grupy SkyCash Poland S.A i czerpiemy z wieloletniego doświadczenia w zakresie
              tworzenia innowacyjnych rozwiązań technologicznych. Z aplikacji SkyCash korzystają już miliony
              Polaków, kupując codziennie bilety kolejowe, komunikacyjne czy płacąc za parkowanie lub
              autostrady.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Cele i wartości
            </Typography>
            <Typography>
              Naszym nadrzędnym celem jest oferowanie społeczeństwu usług, które ułatwiają codzienne życie,
              oszczędzając czas i pieniądze, a także redukując wpływ na środowisko.
              Dążymy do ciągłego poprawiania efektywności zarządzania zasobami miejskimi oraz generowania
              związanych z tym możliwości dla firm oraz instytucji publicznych.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Współpracują z nami
            </Typography>
            <Typography>
              Naszymi partnerami są banki, firmy z sektora „mobility”, samorządy, fintechy oraz inne podmioty
              świadczące usługi dla ludności lub tworzące rozwiązania z zakresu „Smart City”.
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
