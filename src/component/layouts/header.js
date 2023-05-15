import {
  AppBar,
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from "@mui/material";
import React from "react";
import Sidebar from "./sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar position="static" open={open} className="appWrapper">
        <Grid container>
          <Grid item xs={4}>
            <Box className="logoWrapper">
              <img src={logo} />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box className="text-end">
              <List>
                <ListItem>
                  <Link to="/contactus">Contact</Link>
                </ListItem>
                <ListItem>
                  <Link to="/work">Work</Link>
                </ListItem>
              </List>
              <Toolbar className="sidebarButton">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  // sx={{ ...(open && { display: 'none' }) }}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
    </>
  );
};

export default Header;
