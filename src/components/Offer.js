import React from 'react';
import { Box, Typography, Paper, Grid, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const GlassPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  padding: theme.spacing(2),
  borderRadius: '10px',
  textAlign: 'center',
}));

const Oferta = () => {
  return (
    <Container component="section" maxWidth="lg" sx={{ py: 8 }}>
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
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Dostęp do Otwartych Danych
            </Typography>
            <Typography>
              Uzyskaj dostęp do szerokiej gamy otwartych danych miejskich, które mogą być wykorzystane w różnych aplikacjach i usługach.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Dowiedz się więcej
            </Button>
          </GlassPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Zaawansowane API
            </Typography>
            <Typography>
              Nasze API pozwala na szybką i łatwą integrację z naszymi danymi, umożliwiając rozwój innowacyjnych rozwiązań.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
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
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Skontaktuj się z nami
            </Button>
          </GlassPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Oferta;