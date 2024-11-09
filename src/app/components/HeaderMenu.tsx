"use client";
import {
  AppBar,
  Box,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import theme from "../themes/theme";

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#f3f1ea", boxShadow: "none" }}
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
              <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                Welcome
              </Typography>
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
              <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                PROJECTS
              </Typography>
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
              <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                WORK
              </Typography>
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "#0A0908",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                CONTACT
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
