"use client";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";

export default function Header() {
  return (
    <Grid container sx={{ height: "auto" }}>
      <Grid item xs={12} md={10} sx={{ zIndex: 1, padding: 4 }}>
        <Box sx={{ mb: 5, mt: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "5rem" },
              lineHeight: 1.2,
            }}
          >
            FROM NORRLAND'S FORESTS TO A VISIONARY WEB DEVELOPER
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
            image="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Beskrivning av bilden"
            sx={{ objectFit: "contain", height: "auto", width: "100%" }}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
