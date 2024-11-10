"use client";
import { Box, Link, Divider as MuiDivider, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0A0908",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "2rem",
        height: "auto",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            sx={{
              fontFamily: '"DM Serif Display", serif',
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "6rem" },
              lineHeight: 1,
              color: "#fff",
            }}
          >
            Sincerly,
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            sx={{
              fontFamily: '"DM Serif Display", serif',
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "6rem" },
              lineHeight: 1,
              color: "#fff",
            }}
          >
            Daniela
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            sx={{
              fontFamily: '"DM Serif Display", serif',
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "6rem" },
              lineHeight: 1,
              color: "#fff",
            }}
          >
            Byström
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <ScrollLink to="me" smooth={true} duration={500} offset={-100}>
            <Typography>ME</Typography>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-100}>
            <Typography>PROJECTS</Typography>
          </ScrollLink>
          <ScrollLink to="work" smooth={true} duration={500} offset={-100}>
            <Typography>WORK</Typography>
          </ScrollLink>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "right",
            justifyContent: "flex-end",
          }}
        >
          <Link
            href="https://github.com/danibystrom"
            color="inherit"
            underline="hover"
          >
            <Typography>GITHUB</Typography>
          </Link>
          <Link
            href="https://www.linkedin.com/in/daniela-bystrom/"
            color="inherit"
            underline="hover"
          >
            <Typography>LINKEDIN</Typography>
          </Link>
        </Box>
      </Box>
      <MuiDivider
        sx={{
          marginY: 0,
          marginX: 1,
          borderColor: "#f3f1ea",
          height: 2,
        }}
      />
      <MuiDivider
        sx={{
          width: "100%",
          marginY: 1,
          borderColor: "#f3f1ea",
          height: 1,
        }}
      />
    </Box>
  );
}
