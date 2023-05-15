import React from "react";
import "./banner.scss";
import { Box, Grid, Typography } from "@mui/material";
const Banner = () => {
  return (
    <Box className="bannerWrapper">
      <Grid container spacing={2}>
        <Grid item sm={8}>
          <Box className="content-box">
            <Typography variant="h1" className="section-title">
              We are <Typography variant="span">Extensive.</Typography>
            </Typography>
            <Typography variant="body1">
              Helping you stand out in a crowded market
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
