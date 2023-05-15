import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
const Footer = () => {
  return (
    <Box className="footerWrapper">
      <Grid container spacing={2}>
        <Grid item md={2} xs={12}>
          <Typography variant="body1" className="footerLogo">
            Logo
          </Typography>
        </Grid>
        <Grid item md={8} xs={12}>
          <List className="footerLinks">
            <ListItem>
              <Link to="/">Home page</Link>
            </ListItem>
            <ListItem>
              <Link to="/about">About us</Link>
            </ListItem>
            <ListItem>
              <Link to="/audit">Book audit</Link>
            </ListItem>
            <ListItem>
              <Link to="/contactus">Contact us</Link>
            </ListItem>
            <ListItem>
              <Link to="/services">Our services</Link>
            </ListItem>
            <ListItem>
              <Link to="/blog">Blogs</Link>
            </ListItem>
          </List>
          <Typography variant="subtitle">Copyright@2023</Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          <Box className="social-icons">
            <Link to="/">
              <img src={instagram} />
            </Link>
            <Link to="/">
              <img src={facebook} />
            </Link>

            <Link to="/">
              <img src={twitter} />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
