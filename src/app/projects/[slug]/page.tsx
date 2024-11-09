"use client";
import Divider from "@/app/components/Divider";
import { projects } from "@/app/data/projects";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Button,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

type PageProps = { params: { slug: string } };

export default function VideoContainer({ params }: PageProps) {
  const { slug: urlslug } = params;
  const slug = decodeURIComponent(urlslug);
  const project = projects.find((project) => project.slug.toString() === slug);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.autoplay = true;
      video.loop = true;
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoaded(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying((prevPlaying) => !prevPlaying);
    }
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Grid>
      <Grid item xs={12} md={10} sx={{ zIndex: 1, padding: 4 }}>
        <Box sx={{ mt: 6 }}>
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
            {project.pageTitle}
          </Typography>
        </Box>
      </Grid>
      <Box
        sx={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 1s ease",
          height: "100vh",
          position: "relative",
        }}
      >
        <CardMedia
          ref={videoRef}
          component="video"
          src={project.video}
          style={{
            width: "100vw",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <IconButton
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
          onClick={handleTogglePlay}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </Box>
      <Divider />
      <Grid container sx={{ height: "auto" }}>
        <Grid container spacing={4} sx={{ padding: 4 }}>
          <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={3}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                ABOUT THE PROJECT
              </Typography>
            </Grid>
            <Grid item xs={12} md={8} sx={{ textAlign: "right" }}>
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
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#0A0908",
              borderColor: "#0A0908",
              marginY: 10,

              borderRadius: 20,
              mt: 10,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "8px 8px #e9e5d8",
                transition: "all 0.3s ease",
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                paddingX: "32px",
              }}
            >
              VIEW REPO
            </Typography>
          </Button>{" "}
        </Grid>
      </Grid>
    </Grid>
  );
}
