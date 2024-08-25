import React from 'react';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import ecommer from '../../img/ecommerce-ft-img.png'
const EcommercePage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Heading Section */}
        <Grid item xs={12} md={7}>
          <Typography variant="h2" component="h1" gutterBottom>
            E-commerce Development
          </Typography>
          <Typography variant="body1" paragraph>
            Using the best-in-class technology, we develop websites that perform extraordinarily. With a full team of expert developers working on cutting-edge solutions, we customize design and development of our client ideas from conception to completion.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src={ecommer}
              alt="E-commerce Development"
              width={500}
              height={300}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Services Section */}
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our E-commerce Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={3}>
            <Box textAlign="center">
              <ShoppingCartIcon sx={{ fontSize: 50 }} color="primary" />
              <Typography variant="h6" gutterBottom>
                Custom Shopping Cart
              </Typography>
              <Typography variant="body2">
                We develop custom shopping cart solutions tailored to your business needs.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box textAlign="center">
              <SecurityIcon sx={{ fontSize: 50 }} color="primary" />
              <Typography variant="h6" gutterBottom>
                Secure Payment Integration
              </Typography>
              <Typography variant="body2">
                Secure and reliable payment gateway integration for your e-commerce platform.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box textAlign="center">
              <SpeedIcon sx={{ fontSize: 50 }} color="primary" />
              <Typography variant="h6" gutterBottom>
                Performance Optimization
              </Typography>
              <Typography variant="body2">
                Fast and optimized websites to ensure a smooth shopping experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Additional Content Section */}
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Extensive Experience
            </Typography>
            <Typography variant="body1" paragraph>
              With years of experience in the e-commerce domain, we provide solutions that are both innovative and reliable.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Client-Centric Approach
            </Typography>
            <Typography variant="body1" paragraph>
              We work closely with our clients to ensure that their vision is brought to life exactly as they imagined.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img 
                src="https://webhouse.co.in/assets/img/why-choose-us.png"
                alt="Why Choose Us"
                width={500}
                height={300}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Start Your Project?
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          startIcon={<ShoppingCartIcon />}
          href="/contact"
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default EcommercePage;
