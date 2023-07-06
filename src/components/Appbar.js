import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function ResponsiveAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const menuItems = ["O nas", "Oferta", "Zaufali Nam", "Kontakt"];

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#0087ce', color: 'white' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
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
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={handleDrawerClose}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
