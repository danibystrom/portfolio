"use client";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "../themes/theme";
import Divider from "./Divider";

export default function EducationSection() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ height: "auto", backgroundColor: "#f3f1ea" }}>
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
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  marginBottom: { xs: 2, md: 0 },
                }}
              >
                FRONT END DEVELOPING, <br /> MEDIEINSTITUTET
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: { xs: "left", md: "right" } }}
            >
              <Box sx={{ maxWidth: "100%" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    lineHeight: 1.5,
                  }}
                >
                  In my Front-End Developer program, I’ve gained expertise in
                  creating advanced websites using essential web technologies,
                  including JavaScript/TypeScript, HTML, CSS, and UX/UI
                  principles. I’ve also trained with modern frameworks such as
                  React, Vue.js, and Next.js, along with backend technologies
                  like MongoDB, Express, and Prisma. Through practical projects
                  and real-world case studies, I’ve developed the skills needed
                  in today’s industry, working alongside experts to master the
                  latest tools and agile project management practices.
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
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  marginBottom: { xs: 2, md: 0 },
                }}
              >
                DIGITAL MARKETING & SALES ANALYTICS, <br /> IHM BUSINESS SCHOOL
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: { xs: "left", md: "right" } }}
            >
              <Box sx={{ maxWidth: "100%" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    lineHeight: 1.5,
                  }}
                >
                  In my Digital Marketing & Sales Analytics program, I’ve gained
                  a strong foundation in digital analytics, CMS, conversion
                  optimization, and A/B testing. The program covers essential
                  areas like SEO, content marketing, data-driven marketing,
                  social media advertising, and data analysis. As a Digital
                  Analytics Specialist, I am trained to gather, analyze, and
                  interpret data from digital platforms to identify trends,
                  troubleshoot issues, and provide data-driven recommendations.
                  This skill set is vital for helping companies understand their
                  digital presence and make informed decisions to achieve
                  business goals.
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
