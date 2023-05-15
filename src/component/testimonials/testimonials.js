import React from "react";
import "./testimonials.scss";
import { Box, Card, Grid, Typography } from "@mui/material";
import user from "../../assets/testimonial-user.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Box className="testimonialsWrapper">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" className="section-title">
            Testimonials
          </Typography>

          <Slider {...settings}>
            <div>
              <Card>
                <Box className="testimonialHeader">
                  <Box className="clientProfile">
                    <img src={user} />
                  </Box>
                  <Typography varient="body1">
                    “Working with Extensive is great”
                  </Typography>
                </Box>
                <Box className="testimonialFooter">
                  <span></span>
                  <Box className="clientDetail">
                    <Typography variant="body1" className="clientName">
                      Hershel
                    </Typography>
                    <Typography variant="body2" className="clientDesignation">
                      Head of director <br />
                      GGPL PVT LTD.
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>
            <div>
              <Card>
                <Box className="testimonialHeader">
                  <Box className="clientProfile">
                    <img src={user} />
                  </Box>
                  <Typography varient="body1">
                    “Working with Extensive is great”
                  </Typography>
                </Box>
                <Box className="testimonialFooter">
                  <span></span>
                  <Box className="clientDetail">
                    <Typography variant="body1" className="clientName">
                      Hershel
                    </Typography>
                    <Typography variant="body2" className="clientDesignation">
                      Head of director <br />
                      GGPL PVT LTD.
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
