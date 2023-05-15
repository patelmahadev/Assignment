import React from "react";
import "./ourPartners.scss";
import { Box, Grid, Typography } from "@mui/material";
import pinterest from "../../assets/pinterest.png";
import foursquare from "../../assets/foursquare.png";
import pwa from "../../assets/pwa.png";
import sass from "../../assets/sass.png";
import vue from "../../assets/vue.png";
const OurPartners = () => {
  return (
    <Box className="ourPartnerskWrapper">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" className="section-title">
            Our
            <Typography variant="span">Partners .</Typography>
          </Typography>

          <Typography variant="h4" className="subHeading">
            Your success is our success.
          </Typography>
        </Grid>
        <Box className="portfolioIconBox">
          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={pinterest} />
            </Box>
            <Typography variant="body1">Pinterest </Typography>
          </Box>

          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={foursquare} />
            </Box>
            <Typography variant="body1">Pinterest </Typography>
          </Box>

          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={pwa} />
            </Box>
            <Typography variant="body1">PWA </Typography>
          </Box>

          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={sass} />
            </Box>
            <Typography variant="body1">Sass </Typography>
          </Box>

          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={vue} />
            </Box>
            <Typography variant="body1">Pinterest </Typography>
          </Box>
        </Box>
        <Box className="portfolioIconBox">
          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={pinterest} />
            </Box>
            <Typography variant="body1">Pinterest </Typography>
          </Box>

          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={foursquare} />
            </Box>
            <Typography variant="body1">Pinterest </Typography>
          </Box>

          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={pwa} />
            </Box>
            <Typography variant="body1">PWA </Typography>
          </Box>

          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={sass} />
            </Box>
            <Typography variant="body1">Sass </Typography>
          </Box>

          <Box className="portfolioDetail">
            <Box className="portfolioImg">
              <img src={vue} />
            </Box>
            <Typography variant="body1">Pinterest </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default OurPartners;
