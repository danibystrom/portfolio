"use client";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { projects } from "../data/projects";
import Divider from "./Divider";

export default function Projects() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
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
                height: "600px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 10,
              }}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {project.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Button
        variant="outlined"
        sx={{
          color: "#0A0908",
          borderColor: "#0A0908",
          borderRadius: 20,
          mt: 10,
          "&:hover": {
            backgroundColor: "#0A0908",
            color: "#F3F1EA",
          },
        }}
      >
        <Typography variant="button" sx={{ paddingX: "32px" }}>
          VIEW ALL
        </Typography>
      </Button>
      <Divider />
    </Grid>
  );
}
