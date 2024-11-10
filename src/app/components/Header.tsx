"use client";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../themes/theme";
import Divider from "./Divider";

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          height: "auto",
          backgroundColor: "#f3f1ea",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <Grid
          item
          xs={12}
          md={10}
          sx={{ zIndex: 1, padding: { xs: 2, md: 4 } }}
        >
          <Box id="me" sx={{ mt: { xs: 3, md: 6 } }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "6rem" },
                lineHeight: 0.9,
                color: "#0A0908",
              }}
            >
              From the dark forests of Norrland to curious web developer in
              Gothenburg.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={10}
          sx={{
            zIndex: 1,
            padding: { xs: 2, md: 4 },
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
                lineHeight: 1.5,
              }}
            >
              I&apos;m an ambitious, technically skilled individual with a can-do
              attitude and strong curiosity. My background in Digital Marketing
              & Sales Analytics and digital analysis has prepared me well for my
              current path as a Front-End Developer. I&apos;ve gained experience with
              JavaScript/TypeScript, HTML, CSS, UX/UI, and frameworks like
              React, Vue.js, and Next.js, as well as backend tools like MongoDB,
              Express, and Prisma. I&apos;m excited to keep building on these skills
              in development.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              width: "90%",
              maxWidth: "100vw",
              height: "auto",
              marginBottom: { xs: 2, md: 4 },
              marginTop: { xs: 3, md: 5 },
              borderRadius: 10,
            }}
          >
            <CardMedia
              component="img"
              image="/headerimg.jpg"
              alt="Beskrivning av bilden"
              sx={{ objectFit: "cover", height: "auto", width: "100%" }}
            />
          </Card>
        </Grid>
        <Divider />
      </Grid>
    </ThemeProvider>
  );
}
