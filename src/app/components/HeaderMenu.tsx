"use client";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import theme from "../themes/theme";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const themeInstance = useTheme();
  const isMobile = useMediaQuery(themeInstance.breakpoints.down("sm"));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const buttonStyle = {
    color: "#0A0908",
    fontSize: "3vh",
    "&:hover": {
      backgroundColor: "transparent",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#f3f1ea", boxShadow: "none" }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {isMobile ? (
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => toggleDrawer(true)}
                sx={{
                  color: "#0A0908",
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Link href="/">
                  <Button color="inherit" sx={buttonStyle}>
                    <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                      HOME
                    </Typography>
                  </Button>
                </Link>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  <Button color="inherit" sx={buttonStyle}>
                    <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                      PROJECTS
                    </Typography>
                  </Button>
                </ScrollLink>

                <ScrollLink
                  to="work"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  <Button color="inherit" sx={buttonStyle}>
                    <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                      WORK
                    </Typography>
                  </Button>
                </ScrollLink>

                <Link href="https://www.linkedin.com/in/daniela-bystrom/">
                  <Button color="inherit" sx={buttonStyle}>
                    <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                      LINKEDIN
                    </Typography>
                  </Button>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            sx={{
              width: 200,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              backgroundColor: "#f3f1ea",
              height: "100%",
            }}
          >
            <Link href="/">
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => toggleDrawer(false)}
              >
                <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                  ME
                </Typography>
              </Button>
            </Link>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-100}
            >
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => toggleDrawer(false)}
              >
                <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                  PROJECTS
                </Typography>
              </Button>
            </ScrollLink>
            <ScrollLink to="work" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => toggleDrawer(false)}
              >
                <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                  WORK
                </Typography>
              </Button>
            </ScrollLink>
            <Link href="https://www.linkedin.com/in/daniela-bystrom/">
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => toggleDrawer(false)}
              >
                <Typography variant="body1" sx={{ fontSize: "3vh" }}>
                  LINKEDIN
                </Typography>
              </Button>
            </Link>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
