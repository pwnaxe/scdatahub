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
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="h6">O nas</Typography>
            <Typography>
              SkyCash Poland Spółka Akcyjna to innowacyjna firma finansowa z siedzibą w Warszawie. Zarejestrowana pod numerem KRS 0000315361, NIP: 9571005969; REGON: 220677198. Kapitał zakładowy: 13 544 515,50 zł.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Kontakt</Typography>
            <Typography>Adres: ul. Marszałkowska 142, 00-061 Warszawa</Typography>
            <Typography>Email: kontakt@skycash.com</Typography>
            <Typography>Telefon: +48 123 456 789</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
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
            © {new Date().getFullYear()} SkyCash Poland SA. Wszystkie prawa zastrzeżone.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
