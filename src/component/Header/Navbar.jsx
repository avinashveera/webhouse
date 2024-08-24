import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import imag1 from '../../img/logo.png'

const Navbar = () => {
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const handleMobileMenuClick = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, marginRight: '50px' }}>
          <Typography>
            <img src={imag1} alt="Logo" style={{ width: '200px', height: '50px' }} />
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuClick}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchorEl}
              open={Boolean(mobileMenuAnchorEl)}
              onClose={handleMobileMenuClose}
              sx={{
                width: '100%',
                maxWidth: 'unset',
              }}
            >
              <MenuItem onClick={handleMobileMenuClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleMobileMenuClose} component={Link} to="/about">About Us</MenuItem>
              <MenuItem onClick={handleServicesClick}>
                Services <ArrowDropDownIcon />
              </MenuItem>
              <Menu
                anchorEl={servicesAnchorEl}
                open={Boolean(servicesAnchorEl)}
                onClose={handleServicesClose}
              >
                <MenuItem onClick={handleServicesClose} component={Link} to="/seo-internet-marketing">SEO And Internet Marketing</MenuItem>
                <MenuItem onClick={handleServicesClose} component={Link} to="/website-development">Website Development</MenuItem>
                <MenuItem onClick={handleServicesClose} component={Link} to="/website-design">Website Design</MenuItem>
                <MenuItem onClick={handleServicesClose} component={Link} to="/ecommerce">Ecommerce Development</MenuItem>
                <MenuItem onClick={handleServicesClose} component={Link} to="/mobile-development">Mobile Development</MenuItem>
              </Menu>
              <MenuItem onClick={handleMobileMenuClose} component={Link} to="/portfolio">Portfolio</MenuItem>
              <MenuItem onClick={handleMobileMenuClose} component={Link} to="/clients">Clients</MenuItem>
              <MenuItem onClick={handleMobileMenuClose} component={Link} to="/career">Career</MenuItem>
              <MenuItem onClick={handleMobileMenuClose} component={Link} to="/contact">Contact Us</MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About Us</Button>
            <Button
              color="inherit"
              onClick={handleServicesClick}
            >
              Services<ArrowDropDownIcon />
            </Button>
            <Menu
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleServicesClose}
            >
              <MenuItem onClick={handleServicesClose} component={Link} to="/seo-internet-marketing">SEO And Internet Marketing</MenuItem>
              <MenuItem onClick={handleServicesClose} component={Link} to="/website-development">Website Development</MenuItem>
              <MenuItem onClick={handleServicesClose} component={Link} to="/website-design">Website Design</MenuItem>
              <MenuItem onClick={handleServicesClose} component={Link} to="/ecommerce">Ecommerce Development</MenuItem>
              <MenuItem onClick={handleServicesClose} component={Link} to="/mobile-development">Mobile Development</MenuItem>
            </Menu>
            <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
            <Button color="inherit" component={Link} to="/clients">Clients</Button>
            <Button color="inherit" component={Link} to="/career">Career</Button>
            <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
