"use client";
import Divider from "@/app/components/Divider";
import { projects } from "@/app/data/projects";
import theme from "@/app/themes/theme";
import { ThemeProvider } from "@emotion/react";
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
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type PageProps = { params: { slug: string } };

export default function VideoContainer({ params }: PageProps) {
  const { slug: urlslug } = params;
  const slug = decodeURIComponent(urlslug);
  const project = projects.find((project) => project.slug.toString() === slug);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);

    updateScreenSize();

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

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
    <ThemeProvider theme={theme}>
      <Grid sx={{ backgroundColor: "#f3f1ea" }}>
        <Grid item xs={12} md={9} sx={{ zIndex: 1, padding: 2 }}>
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
          <Box sx={{ mt: 4, mb: 4 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" },
                lineHeight: 1.5,
              }}
            >
              {project.pageSubtitle}
            </Typography>
          </Box>
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
          <Box
            sx={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              width: "95%",
              maxWidth: "100vw",
              boxShadow: "0px 4px 10px rgba(226, 220, 203)",
              height: "auto",
              maxHeight: "calc(100vh - 64px)",
            }}
          >
            {isMobile ? (
              <CardMedia
                component="img"
                src={project.mobileImage}
                alt="Project Image"
                sx={{
                  width: "100%",
                  maxWidth: "100vw",
                  height: "auto",
                  objectFit: "cover",
                  backgroundColor: "#f3f1ea",
                }}
              />
            ) : (
              <CardMedia
                ref={videoRef}
                component="video"
                src={project.video}
                muted
                autoPlay
                loop
                style={{
                  width: "100%",
                  maxWidth: "100vw",
                  height: "auto",
                  objectFit: "cover",
                  backgroundColor: "#f3f1ea",
                }}
              />
            )}
            {!isMobile && (
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
            )}
          </Box>
        </Grid>
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
                    marginBottom: { xs: 2, md: 0 },
                  }}
                >
                  ABOUT THE PROJECT
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
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
                    {project.description}
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
                width: 280,
                "&:hover": {
                  boxShadow: "8px 8px #e2dccb",
                  transition: "all 0.3s ease",
                  backgroundColor: "#f3f1ea",
                },
                "&:active": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  outline: "none",
                },
              }}
            >
              <Link
                href="https://github.com/danibystrom?tab=repositories"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    paddingX: "25px",
                  }}
                >
                  VIEW MY REPOS
                </Typography>
              </Link>
            </Button>{" "}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
