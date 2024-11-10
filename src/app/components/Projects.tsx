"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { projects } from "../data/projects";
import theme from "../themes/theme";
import Divider from "./Divider";

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <Box id="projects" sx={{ backgroundColor: "#f3f1ea", m: 2 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            marginBottom: 6,
            color: "#0A0908",
            fontSize: "2.2rem",
            marginX: 1,
          }}
        >
          SOME OF MY FUN PROJECTS
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f3f1ea",
          }}
        >
          {projects.map((project) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={project.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    borderRadius: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={project.title}
                    image={project.image}
                    sx={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: 10,
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h2"
                      component="h2"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.5rem", md: "2rem" },
                      }}
                    >
                      {project.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
          <Link href="https://github.com/danibystrom">
            <Button
              variant="outlined"
              sx={{
                color: "#0A0908",
                borderColor: "#0A0908",
                borderRadius: 20,
                mt: 10,
                transition: "all 0.3s ease",
                width: 280,
                "&:hover": {
                  boxShadow: "8px 8px #e2dccb",
                  transition: "all 0.3s ease",
                  backgroundColor: "#f3f1ea",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  paddingX: "25px",
                }}
              >
                CHECK OUT MY GITHUB
              </Typography>
            </Button>
          </Link>

          <Divider />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
