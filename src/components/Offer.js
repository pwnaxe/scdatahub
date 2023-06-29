import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Container,
  Button,
  Drawer,
  Card,
  CardContent
} from '@mui/material';
import { styled } from '@mui/material/styles';

const GlassPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(221, 235, 255, 0.3)',
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
  const [drawerOpen, setDrawerOpen] = useState([false, false, false]);
  const [rotated, setRotated] = useState([false, false, false]);

  const handleDrawerToggle = (index) => {
    const newDrawerOpen = [...drawerOpen];
    const newRotated = [...rotated];
    newDrawerOpen[index] = !newDrawerOpen[index];
    newRotated[index] = !newRotated[index];
    setDrawerOpen(newDrawerOpen);
    setRotated(newRotated);
  };

  const cards = [
    {
      title: 'Dostęp do Otwartych Danych',
      content: 'Uzyskaj dostęp do szerokiej gamy otwartych danych miejskich, które mogą być wykorzystane w różnych aplikacjach i usługach.',
      buttonText: 'Dowiedz się więcej'
    },
    {
      title: 'Zaawansowane API dla Twojego Biznesu',
      content: 'Nasze API pozwala na szybką i łatwą integrację z naszymi danymi, umożliwiając rozwój innowacyjnych rozwiązań.',
      buttonText: 'Przetestuj API'
    },
    {
      title: 'Wsparcie i Współpraca',
      content: 'Nasz zespół ekspertów jest dostępny, aby pomóc w osiągnięciu Twoich celów biznesowych i technicznych.',
      buttonText: 'Skontaktuj się z nami'
    }
  ];

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
        {cards.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <GlassPaper elevation={3} style={{
              transform: rotated[index] ? 'rotateZ(90deg)' : 'none',
            }}>
              <Typography variant="h5" gutterBottom>
                {card.title}
              </Typography>
              <Typography>
                {card.content}
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => handleDrawerToggle(index)}>
                {card.buttonText}
              </Button>
            </GlassPaper>
          </Grid>
        ))}
      </Grid>

      {drawerOpen.map((isOpen, index) => (
        <Drawer
          key={index}
          anchor="bottom"
          open={isOpen}
          onClose={() => handleDrawerToggle(index)}
        >
          <Box
            sx={{ height: 300, width: 250, padding: 2 }}
            role="presentation"
            onClick={() => handleDrawerToggle(index)}
            onKeyDown={() => handleDrawerToggle(index)}
          >
            <Card>
              <CardContent>
                <Typography variant="h5">Tytuł karty</Typography>
                <Typography variant="body2" color="text.secondary">
                  Jakiś przykładowy tekst karty.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Drawer>
      ))}
    </Container>
  );
};

export default Oferta;
