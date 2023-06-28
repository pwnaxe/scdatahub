import React from 'react';
import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';


const GlassPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  padding: theme.spacing(2),
  borderRadius: '10px',
  textAlign: 'center',
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
              API dla Twojego Biznesu
            </Typography>
            <Typography>
              Oferujemy zaawansowane API, które umożliwia firmom, przedsiębiorcom i innowatorom integrację z naszymi danymi miejskimi.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Doświadczenie i Współpraca
            </Typography>
            <Typography>
              Wspieramy się doświadczeniem naszej firmy matki, SkyCash. Jesteśmy otwarci na nowe partnerstwa i współprace.
            </Typography>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Wsparcie Techniczne
            </Typography>
            <Typography>
              Oferujemy pełne wsparcie techniczne naszym partnerom w procesie implementacji i korzystania z naszego API.
            </Typography>
          </GlassPaper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>

        <Typography variant="body1">
          Zeskanuj kod QR, aby dowiedzieć się więcej o naszych możliwościach i rozwiązaniach technologicznych.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
