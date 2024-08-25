import React from 'react';
import { Container, Grid, Typography, Breadcrumbs, Link, Paper, Box } from '@mui/material';
import { Search, AttachMoney, People, Laptop } from '@mui/icons-material';
import interMarkt from '../../img/internet-market-ft-img.png'

const DigitalMarketingPage = () => {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" style={{ marginBottom: '20px' }}>
        
        <Grid item xs={12} md={5}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">Digital Marketing</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h2" gutterBottom>Digital Marketing</Typography>
            <Typography variant="h5" gutterBottom>Why Digital Marketing?</Typography>
            <Typography variant="body1" paragraph>
              Web House provides the best client satisfaction in Patna in the Technical Sector. Digital Marketing is one of the most important services we offer, including all features at an affordable budget. Our expert team is highly qualified in all technical fields and provides the best online services.
            </Typography>
            <Typography variant="body1" paragraph>
              Digital Marketing is a simple & unique medium to express business in detail. It helps to expand the business, make interactions with new customers, and attract clients to your business site. This is why digital marketing is essential for every business.
            </Typography>
            <Typography variant="h5" gutterBottom>SEO (Search Engine Optimization)</Typography>
            <Typography variant="body1" paragraph>
              SEO is a main feature of Digital Marketing that focuses on your website’s presence in search results on search engines like Google. It has two sections: on-page SEO & off-page SEO, both aimed at making your site more user-friendly and trustworthy.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>On-Page SEO:</strong> Includes title tags, content, site speed, page URLs, images with alt tags, internal linking, and more.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Off-Page SEO:</strong> Based on external links pointing to your site. It’s important to remember that these functions are automated programs with limitations.
            </Typography>
            <Typography variant="h5" gutterBottom>SMO (Social Media Optimization)</Typography>
            <Typography variant="body1" paragraph>
              SMO is used on social media networks like Facebook, Instagram, Twitter, etc., to increase company business volumes.
            </Typography>
            <Typography variant="h5" gutterBottom>E-Mail Marketing</Typography>
            <Typography variant="body1" paragraph>
              E-Mail Marketing is a part of Digital Marketing that involves sending company plans and offers via emails to people and customers.
            </Typography>

            <Box display="flex" justifyContent="center" marginTop={3}>
              <img src={interMarkt} alt="Digital Marketing" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '40px' }}>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" gutterBottom align="center">Our Services</Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                <Search fontSize="large" />
                <Typography variant="body1">SEO SERVICES</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                <AttachMoney fontSize="large" />
                <Typography variant="body1">PPC SERVICES</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                <People fontSize="large" />
                <Typography variant="body1">SOCIAL MEDIA MARKETING</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                <Laptop fontSize="large" />
                <Typography variant="body1">INBOUND MARKETING</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DigitalMarketingPage;
