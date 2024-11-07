"use client";
import { AddSharp, RemoveSharp } from "@mui/icons-material";
import { Button, Grid, ThemeProvider } from "@mui/material";
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
      <Grid item xs={12}>
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
          WHAT I'VE DONE
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
          <AccordionDetails>
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
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
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
            sx={{ color: "#0A0908" }}
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
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
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
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <DividerSmall />
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#0A0908",
              borderColor: "#0A0908",
              borderRadius: 20,
              mt: 10,
              m: 10,
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
              CONTACT ME
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
