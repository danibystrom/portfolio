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
      <Grid container sx={{ height: "auto", backgroundColor: "#f3f1ea" }}>
        <Grid item xs={12} md={10} sx={{ zIndex: 1, padding: 4 }}>
          <Box id="me" sx={{ mt: 6 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "6rem" },
                lineHeight: 1,
                color: "#0A0908",
              }}
            >
              From Norrlands forests to a visionary web developer.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={10} sx={{ zIndex: 1, padding: 4 }}>
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" },
                lineHeight: 1.5,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pharetra laoreet rhoncus. Maecenas consectetur nunc ligula, nec
              consectetur risus scelerisque et. Aenean feugiat massa nec laoreet
              congue. Duis ut dolor vitae urna tincidunt fringilla et non leo.
              Pellentesque quis nunc ex.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              width: "90%",
              maxWidth: "1920px",
              height: "auto",
              marginBottom: 4,
              marginTop: 5,
              borderRadius: 10,
            }}
          >
            <CardMedia
              component="img"
              image="/headerimg.jpg"
              alt="Beskrivning av bilden"
              sx={{ objectFit: "contain", height: "auto", width: "100%" }}
            />
          </Card>
        </Grid>
        <Divider />
      </Grid>
    </ThemeProvider>
  );
}
