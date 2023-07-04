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
          <GlassPaper elevation={3}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Cele i wartości
            </Typography>
            <Typography>
              Naszym nadrzędnym celem jest oferowanie społeczeństwu usług, które ułatwiają codzienne życie, przyspieszają innowacje,
              oszczędzając czas i pieniądze, a także redukując wpływ na środowisko.
              <br /><br />
              Dążymy do ciągłego poprawiania efektywności zarządzania zasobami miejskimi oraz generowania
              związanych z tym możliwości dla firm oraz instytucji publicznych.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: "90%" }} >
            <Typography variant="h5" fontWeight={'bold'} gutterBottom sx={{ mb: 2 }}>
              Współpraca z nami
            </Typography>
            <Typography>
              Stworzyliśmy program partnerski dla miast, firm, organizacji które chcą współtworzyć przyszłość opartą na efektywnym wykorzystaniu danych.
              <br /><br />
              Wierzymy, że nasz sukces jest ściśle powiązany z sukcesem naszych partnerów. Zapraszamy do współtworzenia przyszłości opartej na efektywnym wykorzystaniu danych.
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
          sx={{ height: '30%', width: '30%', mt: 10 }}
        />
      </Box>
    </Container>
  );
};

export default AboutUs;
