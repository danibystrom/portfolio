"use client";
import { Grid, Divider as MuiDivider } from "@mui/material";

export default function Divider() {
  return (
    <Grid item xs={12}>
      <MuiDivider
        sx={{
          marginY: 10,
          marginX: 1,
          borderColor: "#0A0908",
          height: 2,
        }}
      />
    </Grid>
  );
}
