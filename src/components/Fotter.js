import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      py: 6,
      backgroundColor: 'rgba(221, 235, 255, 0.3)',
      backdropFilter: 'blur(10px)',
      color: 'white'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">O nas</Typography>
            <Typography>
              SC Data Hub to innowacyjna platforma oferująca otwarte dane miejskie dla przedsiębiorców i deweloperów.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Linki</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="#" color="inherit" underline="none">Strona główna</Link>
              </li>
              <li>
                <Link href="#o-projekcie" color="inherit" underline="none">O Projekcie</Link>
              </li>
              <li>
                <Link href="#api" color="inherit" underline="none">API</Link>
              </li>
              <li>
                <Link href="#kontakt" color="inherit" underline="none">Kontakt</Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Kontakt</Typography>
            <Typography>Adres: ul. Marszałkowska 142, 00-000 Warszawa</Typography>
            <Typography>Email: kontakt@scdatahub.com</Typography>
            <Typography>Telefon: +48 123 456 789</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Social Media</Typography>
            <Link href="#" color="inherit" underline="none" style={{ marginRight: 8 }}>
              Facebook
            </Link>
            <Link href="#" color="inherit" underline="none" style={{ marginRight: 8 }}>
              Twitter
            </Link>
            <Link href="#" color="inherit" underline="none">
              LinkedIn
            </Link>
          </Grid>
        </Grid>

        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            © {new Date().getFullYear()} SC Data Hub. Wszystkie prawa zastrzeżone.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
