"use client";
import {
  AppBar,
  Box,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
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
            <Link href="/">
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
            </ScrollLink>

            <ScrollLink to="work" smooth={true} duration={500} offset={-100}>
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
            </ScrollLink>
            <Link href="https://www.linkedin.com/in/daniela-bystrom/">
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
                  LINKEDIN
                </Typography>
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
