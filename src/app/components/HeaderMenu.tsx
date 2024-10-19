"use client";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button
            color="inherit"
            sx={{
              color: "#0A0908",
              fontSize: "3vh",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            ABOUT
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#0A0908",
              fontSize: "3vh",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            PROJECTS
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#0A0908",
              fontSize: "3vh",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            WORK
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#0A0908",
              fontSize: "3vh",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
