import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

const Contact = () => {
  return (
    <Container component="section" maxWidth="lg" sx={{ py: 8 }}>
      <div id="Contact"></div>
      <Typography variant="h2" align="center">
        Skontaktuj się z nami
      </Typography>

      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="body1" align="center">
          Chcesz dowiedzieć się więcej o naszych usługach, współpracy lub potrzebujesz wsparcia technicznego? Skontaktuj się z nami!
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{
            py: 6,
            backgroundColor: 'rgba(221, 235, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            padding: '20px', borderRadius: '10px'
          }}>
            <Typography variant="body1" textAlign={"center"}>
              Telefon: <Link href="tel:+48 123 456 789" style={{ color: '#ffffff' }}>+48 123 456 789</Link>
            </Typography>
            <Typography variant="body1" textAlign={"center"} sx={{ mt: 2 }}>
              E-mail: <Link href="mailto:kontakt@domena.pl" style={{ color: '#ffffff' }}>kontakt@domena.pl</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
