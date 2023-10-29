import { AppBar, IconButton, Toolbar } from "@mui/material";
import React from "react";

export default function NavbarComponent() {
  return (
    <AppBar
      position="fixed"
      open={open}
      style={{
        background: "#004461",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
