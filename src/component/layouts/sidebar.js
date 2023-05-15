import React from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { Box, Button, Drawer, IconButton, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import sidebarLogo from "../../assets/sidebarLogo.png";
const Sidebar = (props) => {
  const { open, handleDrawerClose } = props;
  return (
    <Box className="sidebarWrapper">
      <Drawer variant="persistent" anchor="right" open={open}>
        <Box className="sidebarBox">
          <Box className="sidebarControl">
            <Box className="sidebarLogo">
              <img src={sidebarLogo} />
            </Box>
            <IconButton onClick={handleDrawerClose} className="closeBtn">
              <CloseTwoToneIcon />
            </IconButton>
          </Box>

          <List>
            <ListItem>
              <Link to="/services" onClick={handleDrawerClose}>Services </Link>
            </ListItem>
            <ListItem>
              <Link to="/about" onClick={handleDrawerClose}>About us </Link>
            </ListItem>
            <ListItem>
              <Link to="/blog" onClick={handleDrawerClose}>Blogs </Link>
            </ListItem>
            <ListItem>
              <Link to="/contactus" onClick={handleDrawerClose}>Contact us </Link>
            </ListItem>
          </List>
          <Button variant="contained" onClick={handleDrawerClose}>Book an free marketing aduit </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
