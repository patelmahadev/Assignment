import React from "react";
import "./ourWork.scss";
import { Box, Button, Grid, Typography } from "@mui/material";
import Starbucks from "../../assets/starbucks.png";
import Nike from "../../assets/nike.png";
const OurWork = () => {
  return (
    <Box className="ourWorkWrapper">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" className="section-title">
            OUR
            <Typography variant="span">Work</Typography>
          </Typography>
          <Button variant="contained" className="mobileNone">
            View all{" "}
          </Button>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={Starbucks} />
            </Box>
            <Typography variant="subtitle">DIGITAL MARKETING </Typography>
            <Typography variant="body2">STARBUCKS</Typography>
            <Typography variant="body1">
              Our ad campaign brought 80% footfall to the company{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={Nike} />
            </Box>
            <Typography variant="subtitle">DIGITAL MARKETING </Typography>
            <Typography variant="body2">Nike</Typography>
            <Typography variant="body1">
              Our ad campaign brought 80% footfall to the company{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={Nike} />
            </Box>
            <Typography variant="subtitle">DIGITAL MARKETING </Typography>
            <Typography variant="body2">Nike</Typography>
            <Typography variant="body1">
              Our ad campaign brought 80% footfall to the company{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={Starbucks} />
            </Box>
            <Typography variant="subtitle">DIGITAL MARKETING </Typography>
            <Typography variant="body2">STARBUCKS</Typography>
            <Typography variant="body1">
              Our ad campaign brought 80% footfall to the company{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" className="desktopNone">
            View all{" "}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurWork;
