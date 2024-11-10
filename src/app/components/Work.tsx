"use client";
import { AddSharp, RemoveSharp } from "@mui/icons-material";
import { Box, Button, Grid, Link, ThemeProvider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import theme from "../themes/theme";
import DividerSmall from "./DividerSmall";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <ThemeProvider theme={theme}>
      <Box id="work" sx={{ backgroundColor: "#f3f1ea", m: 2 }}>
        <Grid
          item
          xs={12}
          sx={{
            width: "100%",
            backgroundColor: "#f3f1ea",
            margin: 0,
            padding: 0,
          }}
        >
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
            WHAT IVE DONE
          </Typography>
          <DividerSmall />
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              border: "none",
              boxShadow: "none",
              "&::before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              sx={{ backgroundColor: "#f3f1ea" }}
              expandIcon={
                expanded === "panel1" ? (
                  <RemoveSharp
                    sx={{
                      color: "#0A0908",
                      fontSize: "medium",
                      border: "1px solid #0A0908",
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                ) : (
                  <AddSharp
                    sx={{
                      color: "#0A0908",
                      fontSize: "medium",
                      border: "1px solid #0A0908",
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  fontWeight: 700,
                }}
              >
                DEVELOPER INTERN
              </Typography>
              <Typography sx={{ color: "#0A0908" }}>
                Lorem ipsum, 2023 - 2023
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#f3f1ea" }}>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <DividerSmall />

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              border: "none",
              boxShadow: "none",
              "&::before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              sx={{ backgroundColor: "#f3f1ea" }}
              expandIcon={
                expanded === "panel2" ? (
                  <RemoveSharp
                    sx={{
                      color: "#0A0908",
                      fontSize: "medium",
                      border: "1px solid #0A0908",
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                ) : (
                  <AddSharp
                    sx={{
                      color: "#0A0908",
                      fontSize: "medium",
                      border: "1px solid #0A0908",
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                )
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  fontWeight: 700,
                }}
              >
                WEBSITE ADMINISTRATOR
              </Typography>
              <Typography sx={{ color: "#0A0908" }}>
                Lorem ipsum, 2023 - 2023
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#f3f1ea" }}>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <DividerSmall />

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              border: "none",
              boxShadow: "none",
              "&::before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              sx={{ backgroundColor: "#f3f1ea", color: "#0A0908" }}
              expandIcon={
                expanded === "panel3" ? (
                  <RemoveSharp
                    sx={{
                      color: "#0A0908",
                      fontSize: "medium",
                      border: "1px solid #0A0908",
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                ) : (
                  <AddSharp
                    sx={{
                      color: "#0A0908",
                      fontSize: "medium",
                      border: "1px solid #0A0908",
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                )
              }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  fontWeight: 700,
                }}
              >
                WEBSITE ADMINISTRATOR
              </Typography>
              <Typography sx={{ color: "#0A0908" }}>
                Lorem ipsum, 2023 - 2023
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#f3f1ea" }}>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <DividerSmall />

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{
              border: "none",
              boxShadow: "none",
              "&::before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              sx={{ backgroundColor: "#f3f1ea" }}
              expandIcon={
                expanded === "panel4" ? (
                  <RemoveSharp
                    sx={{
                      color: "#0A0908",
                      fontSize: "medium",
                      border: "1px solid #0A0908",
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                ) : (
                  <AddSharp
                    sx={{
                      color: "#0A0908",
                      fontSize: "medium",
                      border: "1px solid #0A0908",
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                )
              }
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  fontWeight: 700,
                }}
              >
                WEBSITE SPECIALIST
              </Typography>
              <Typography sx={{ color: "#0A0908" }}>
                Lorem ipsum, 2023 - 2023
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#f3f1ea" }}>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <DividerSmall />
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Link href="https://www.linkedin.com/in/daniela-bystrom/">
              <Button
                variant="outlined"
                sx={{
                  color: "#0A0908",
                  borderColor: "#0A0908",
                  borderRadius: 20,
                  mt: 10,
                  m: 10,
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
                  STALK MY LINKEDIN
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
