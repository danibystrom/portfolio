"use client";
import { Grid, Divider as MuiDivider } from "@mui/material";

export default function Divider() {
  return (
    <Grid item xs={12}>
      <MuiDivider
        sx={{
          marginY: 10,
          marginX: 3,
          borderColor: "#000000",
          height: 2,
        }}
      />
    </Grid>
  );
}
