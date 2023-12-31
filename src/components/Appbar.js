import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/Logo.png'
import { Link } from 'react-scroll';

const pages = [
  { name: 'O firmie', id: 'Aboutus' },
  { name: 'Oferta', id: 'Offer' },
  { name: 'Zaufali Nam', id: 'Logoswiper' },
  { name: 'Kontakt', id: 'Contact' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#2f3e63" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logo} alt="Logo" height={40} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon sx={{ fontSize: 50, }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.id} smooth={true}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.id} smooth={true} key={page.name}>
                <Typography
                  variant="button"
                  sx={{
                    my: 2,
                    p: 2,
                    color: 'white',
                    mx: 2,
                    fontSize: 21,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(221, 235, 255, 0.3)',
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '10px',
                    },
                  }}
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
