import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid,ListItemIcon, List, ListItem, ListItemText, Divider ,Button,TextField} from '@mui/material';
import { Facebook, Instagram, YouTube, Phone, WhatsApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd'; // Example icon for SMO Marketing
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import BuildIcon from '@mui/icons-material/Build';
import EmailIcon from '@mui/icons-material/Email';
import imag1 from '../../img/logo.png';

const Footer = () => {
  return (
    <AppBar position="static" xs={12} sm={6} md={3} style={{ padding: '20px', backgroundColor: '#f5f5f5', color: '#2F4F4F' }}>
      <Toolbar>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '10px', color: 'black' }}>About Us</Typography>
            <img src={imag1} alt="Logo" style={{ width: '280px', height: '70px', marginBottom: '10px' }} />
            <Typography variant="body2" paragraph sx={{p:2,fontSize:"12px"}}>
              Web House aims to constantly add value to our customers' requirements and expectations through our cutting-edge technological solutions and our ability to understand their business processes. We are an organization that can work as a guide in any of your projects with a focus on cost-saving without compromising on quality.
            </Typography>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px',marginLeft:"10px"}}>
              <IconButton href="https://www.facebook.com/web.house.52">
                <Facebook />
              </IconButton>
              <IconButton href="https://instagram.com/">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.youtube.com/channel/UCLHinnObnVxcb0l1P7d0oww">
                <YouTube />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
            <Typography variant="h6" style={{ marginBottom: '10px', color: 'black'}}>Services</Typography>
            <List>
            <ListItem>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/ecommerce" style={{ textDecoration: 'none', color: '#333333' }}>E-Commerce Development</Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/seo-marketing" style={{ textDecoration: 'none', color: '#333333' }}>SEO Marketing</Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <GroupAddIcon /> {/* Example icon */}
        </ListItemIcon>
        <ListItemText>
          <Link to="/smo-marketing" style={{ textDecoration: 'none', color: '#333333' }}>SMO Marketing</Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <WebIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/website-development" style={{ textDecoration: 'none', color: '#333333' }}>Website Development</Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/software-development" style={{ textDecoration: 'none', color: '#333333' }}>Software Development</Link>
        </ListItemText>
      </ListItem>
   
      <ListItem>
        <ListItemIcon>
          <MobileFriendlyIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/mobile-development" style={{ textDecoration: 'none', color: '#333333' }}>Mobile Development</Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AppRegistrationIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/apps-solutions" style={{ textDecoration: 'none', color: '#333333' }}>Apps Solutions</Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/software-solutions" style={{ textDecoration: 'none', color: '#333333' }}>Software Solutions</Link>
        </ListItemText>
      </ListItem>
    </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '10px', color: 'black' }}>Contact</Typography>
            <Typography variant="body2" paragraph>
              <strong>Delhi Office:</strong>
              <br />PRATUSH WEBINFOTECH PVT LTD.
              <br />E-10/12 Triveni Complex, 210, 2nd Floor,
              <br />Laxmi Nagar, Delhi - 110092 (INDIA)
            </Typography>

            <Typography variant="body2" paragraph>
              <strong>Patna Office:</strong>
              <br />web house.
              <br />E-10/12 Triveni Complex, 210, 2nd Floor,
              <br />pr, patna - 800001 (INDIA)
            </Typography>

            <Typography variant="body2" paragraph>
              <strong>Mobile:</strong>
              <br />Sales Enquiry: (+91) 8676994400
              <br />Investor: (+91) 9608332211
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '10px', color: 'black' }}>Enquiry</Typography>
            <IconButton
      component="a"
      href="mailto:your-email@example.com"
      color="primary"
      aria-label="mail us"
    >
      <EmailIcon /> Mail Us
    </IconButton>

            <form>
              <TextField label="Enter an Email" variant="outlined" fullWidth style={{ marginBottom: '10px' }} />
              <TextField
                label="Write Message..."
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                style={{ marginBottom: '10px' }}
              />
              <Button variant="contained" color="primary">Send</Button>
            </form>

          </Grid>
        </Grid>
      </Toolbar>
      <Divider style={{ margin: '20px 0' }} />
      <Typography variant="body2" align="center">
        All rights reserved by <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>PRATUSH WEBINFOTECH PVT LTD.</a> &copy; 2019. WEB HOUSE
      </Typography>
      <IconButton color="inherit" href="https://wa.me/918676994400" style={{ position: 'fixed', bottom: '50px', right: '30px', backgroundColor: '#03B990', color: '#fff', padding: '10px' }}>
        <WhatsApp />
      </IconButton>

      <IconButton 
  color="inherit" 
  href="tel:+918676994400" 
  style={{ 
    position: 'fixed', 
    bottom: '100px', 
    right: '30px', 
    backgroundColor: '#1976d2', 
    color: '#fff', 
    padding: '10px' 
  }}
>
  <Phone />
</IconButton>

    </AppBar>
  );
};

export default Footer;
