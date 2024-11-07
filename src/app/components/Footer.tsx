"use client";
import { Box, Link, Divider as MuiDivider, Typography } from "@mui/material";

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
          <Typography variant="h1" fontWeight="bold">
            SINCERLY,
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="h1" fontWeight="bold">
            DANIELA
          </Typography>
          <Typography variant="h1" fontWeight="bold">
            BYSTRÖM
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
          <Typography fontWeight="bold">ABOUT</Typography>
          <Typography fontWeight="bold">PROJECTS</Typography>
          <Typography fontWeight="bold">WORK</Typography>
          <Typography fontWeight="bold">CONTACT</Typography>
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
          <Link href="https://github.com" color="inherit" underline="hover">
            <Typography fontWeight="bold">GITHUB</Typography>
          </Link>
          <Link href="https://linkedin.com" color="inherit" underline="hover">
            <Typography fontWeight="bold">LINKEDIN</Typography>
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
