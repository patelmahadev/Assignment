import React from "react";
import "./whoWeAre.scss";
import { Box, Button, Grid, Typography } from "@mui/material";
const WhoWeAre = () => {
  return (
    <Box className="whoWeAreWrapper">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle">WHO WE ARE</Typography>
          <Typography variant="h1" className="section-title">
            We are Extensive.
          </Typography>
          <Typography variant="body1">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
          <Button variant="contained">BOOK A FREE MARKETING AUDIT </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
