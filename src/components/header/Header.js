import { Link } from "react-router-dom";
import { useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Grid from '@mui/material/Grid';
import "./Header.css";

const Header = () => {

    const [openMobileMenu, setMobileMenu] = useState(false);
    const handleOpenMenu = () => {
        setMobileMenu(!openMobileMenu);
    };

    const listMenu = (
        <Box onClick={setMobileMenu} sx={{ display: { xs: openMobileMenu ? "block" : "none", sm: "block" } }}>
        <List>
            <ListItem>
            <ListItemText>
                <Link to="" className="menuMobileLinks">Flowers</Link>
            </ListItemText>
            <ListItemButton />
            </ListItem>
            <ListItem>
            <ListItemText>
                <Link to="" className="menuMobileLinks">Latest Sightings</Link>
            </ListItemText>
            <ListItemButton />
            </ListItem>
            <ListItem>
            <ListItemText>
                <Link to="" className="menuMobileLinks">Favorites</Link>
            </ListItemText>
            <ListItemButton />
            </ListItem>
        </List>
        </Box>
    );

  return (
    <>

      <Box sx={{ display: "flex" }}>
          <Toolbar className="mainContainerMenu">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleOpenMenu}
              sx={{ mr: 2, display: { sm: "none" } }}
              className="menuIconStyles"
            >
              <MenuIcon />
            </IconButton>

            <Box className="linksContainer" sx={{ display: { xs: "none", sm: "block" } }}>
              <Link to="/about" className="menu border">About</Link>
                <Link to="/services" className="menu">Services</Link>
                <Link to="/" className="logoContainer">
                  feel the balkans
                </Link>
                <Link to="/blog" className="menu border">Blog</Link>
                <Link to="/contact" className="menu">Contact</Link>
            </Box>
          </Toolbar>

        <Box component="nav">
            <Drawer
            variant="temporary"
            open={openMobileMenu}
            onClose={handleOpenMenu}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
            }}
          >
            <Box onClick={handleOpenMenu} sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                FlowrSpot data
              </Typography>
              <Divider />
              {listMenu}
            </Box>
            </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
