import React from "react";
import "./whatWeDo.scss";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
const WhatWeDo = () => {
  return (
    <Box className="whatWeDoWrapper">
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Box className="contentBox">
            <Typography variant="h1" className="section-title">
              WHAT
              <Typography variant="span">WE DO.</Typography>
            </Typography>
            <Typography variant="body1">
              We do lots of stuffs , basically adding value to your product .
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <List>
            <ListItem>Digital Marketing</ListItem>
            <ListItem>Digital Marketing</ListItem>
            <ListItem>Digital Marketing</ListItem>
            <ListItem>Digital Marketing</ListItem>
          </List>
          <Box className="button-wrapper">
            <Button variant="contained">View all </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatWeDo;
