import React from 'react';
import { Box, TextField, Button, Container, Typography, Grid } from '@mui/material';

const Contact = () => {
  return (
    <Container component="section" maxWidth="lg" sx={{ py: 8 }}>
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
          <Box component="form" noValidate autoComplete="off" sx={{
            py: 6,
            backgroundColor: 'rgba(221, 235, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            padding: '20px', borderRadius: '10px'
          }}>
            <TextField fullWidth label="Imię i Nazwisko" margin="normal" variant="outlined" InputLabelProps={{ style: { color: 'white' } }} />
            <TextField fullWidth label="Adres e-mail" margin="normal" variant="outlined" InputLabelProps={{ style: { color: 'white' } }} />
            <TextField fullWidth label="Temat" margin="normal" variant="outlined" InputLabelProps={{ style: { color: 'white' } }} />
            <TextField
              fullWidth
              label="Wiadomość"
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              InputLabelProps={{ style: { color: 'white' } }}
            />
            <Button variant="contained" type="submit" sx={{ mt: 3, backgroundColor: '#2f3e63', color: 'white', '&:hover': { backgroundColor: '#0069a7' } }}>
              Wyślij wiadomość
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
