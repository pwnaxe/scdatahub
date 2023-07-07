import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../assets/Logo.png';

export default function ResponsiveAppBar() {

  const menuItems = ["O nas", "Oferta", "Zaufali Nam", "Kontakt"];

  return (
    <div>
      <AppBar position="absolute" sx={{ backgroundColor: '#2f3e63', color: 'white' }}>
        <Toolbar>
          <img src={Logo} alt="logo" style={{ width: 250 }} />
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div sx={{ display: { xs: "none", sm: "block" } }}>
            {menuItems.map((item, index) => (
              <span key={index} style={{ marginLeft: 15, color: "white" }}>
                {item}
              </span>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
