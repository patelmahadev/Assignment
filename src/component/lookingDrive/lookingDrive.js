import React from "react";
import "./lookingDrive.scss";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const LookingDrive = () => {
  return (
    <Box className="lookingDriveWrapper">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" className="section-title">
            Looking to drive <br /> results?
            <Link to="/">Lets chat</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LookingDrive;
