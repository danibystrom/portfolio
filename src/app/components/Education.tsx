"use client";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "../themes/theme";
import Divider from "./Divider";

export default function EducationSection() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ height: "auto" }}>
        <Grid container spacing={4} sx={{ padding: 4 }}>
          <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={5}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" } }}
              >
                FRONT END DEVELOPING, <br /> MEDIEINSTITUTET
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} sx={{ textAlign: "right" }}>
              <Box sx={{ maxWidth: "100%" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    lineHeight: 1.5,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pharetra laoreet rhoncus. Maecenas consectetur nunc
                  ligula, nec consectetur risus scelerisque et. Aenean feugiat
                  massa nec laoreet congue. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nullam pharetra laoreet rhoncus.
                  Maecenas consectetur nunc ligula, nec consectetur risus
                  scelerisque et. Aenean feugiat massa nec laoreet congue.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={5}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" } }}
              >
                DIGITAL MARKETING & SALES ANALYTICS, <br /> IHM BUSINESS SCHOOL
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} sx={{ textAlign: "right" }}>
              <Box sx={{ maxWidth: "100%" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    lineHeight: 1.5,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pharetra laoreet rhoncus. Maecenas consectetur nunc
                  ligula, nec consectetur risus scelerisque et. Aenean feugiat
                  massa nec laoreet congue. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nullam pharetra laoreet rhoncus.
                  Maecenas consectetur nunc ligula, nec consectetur risus
                  scelerisque et. Aenean feugiat massa nec laoreet congue.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
    </ThemeProvider>
  );
}
