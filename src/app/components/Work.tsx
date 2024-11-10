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
            WHAT I´VE DONE
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    width: "auto",
                    fontWeight: 700,
                  }}
                >
                  DEVELOPER INTERN
                </Typography>
                <Typography
                  sx={{
                    color: "#0A0908",
                    paddingLeft: 5,
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                    ml: 2,
                  }}
                >
                  Stretch EVolve, 2024 - 2024
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#f3f1ea" }}>
              <Typography>
                During my internship, I was tasked with developing an
                application for a product configurator. I migrated the project
                from JavaScript to TypeScript to enhance code stability and
                maintainability. I also developed and customized business
                applications within the SAP environment using SAP Fiori and
                SAPUI5 to improve the user experience. Additionally, I built
                features tailored to customer-specific needs, prioritizing
                efficiency and user-friendliness, and tested and implemented
                solutions in line with SAP standards and best practices.
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    width: "auto",
                    fontWeight: 700,
                  }}
                >
                  WEBSITE ADMINISTRATOR
                </Typography>
                <Typography
                  sx={{
                    color: "#0A0908",
                    paddingLeft: 5,
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                    ml: 2,
                  }}
                >
                  E-Career, 2023 - 2024
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#f3f1ea" }}>
              <Typography>
                I was responsible for updating and tailoring websites to align
                with the company’s vision and messaging. This included writing,
                editing, and publishing SEO-optimized content. I also analyzed
                traffic and user behavior to drive continuous improvements on
                the website.
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
              sx={{ backgroundColor: "#f3f1ea" }}
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    width: "auto",
                    fontWeight: 700,
                  }}
                >
                  WEBSITE SPECIALIST
                </Typography>
                <Typography
                  sx={{
                    color: "#0A0908",
                    paddingLeft: 5,
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                    ml: 2,
                  }}
                >
                  Sector Alarm, 2021 - 2023
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#f3f1ea" }}>
              <Typography>
                I was responsible for building and customizing the website in
                alignment with Group Management's guidelines. My focus was on
                creating inspiring, commercially descriptive, and SEO-optimized
                content. I conducted thorough analysis to identify opportunities
                for improving the customer journey and implemented A/B tests to
                optimize conversions. Through ongoing testing and close
                collaboration with the paid search and advertising teams, we
                successfully increased the website's conversion rate from 2.3%
                to 4.0% between 2020 and 2023.
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
