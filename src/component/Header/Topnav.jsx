import React from 'react';
import { AppBar, Toolbar,  Link, Grid, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const TopNav = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Grid 
         sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',width:"100vw" }}>

          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Social Icons */}
                <Link href="https://www.facebook.com/web.house.52" target="_blank" sx={{ marginLeft: 2 }}>
                  <FacebookIcon />
                </Link>
                <Link href="https://twitter.com/" target="_blank" sx={{ marginLeft: 2 }}>
                  <TwitterIcon />
                </Link>
                
          
              </Box>

          </Grid>

          {/* Right Side: Social Icons and Login/Signup Links */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center',justifyContent: 'flex-end',ml:3 }}>
            
             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              
              {/* Login and Signup Links */}
              
                <Link href="/login" sx={{ marginLeft: 2, display: 'flex', alignItems: 'center',textDecoration:"none" }} data-toggle="modal" data-target="#login-modal">
                  <ExitToAppIcon fontSize="small" /> <span>Sign in</span>
                </Link>
                <Link href="/signup" sx={{ marginLeft: 2, display: 'flex',textDecoration:"none", alignItems: 'center' }}>
                  <PersonIcon fontSize="small" /> <span>Sign up</span>
                </Link>
            
              </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
