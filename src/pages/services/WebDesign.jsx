import React from 'react';
import { Container, Grid, Typography, Breadcrumbs, Link, Paper, Box, Card, CardContent, CardMedia } from '@mui/material';
import { Web, Code, ShoppingCart, Info } from '@mui/icons-material';
import webdig from '../../img/web-design-ft-img.png'

const WebDesignPage = () => {
  return (
    <Container>
      {/* Breadcrumbs and Title */}
      <Grid container spacing={3} alignItems="center" style={{ marginBottom: '20px' }}>
       
        <Grid item xs={12} md={5}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">Website Design</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h2" gutterBottom>Website Design</Typography>

            <Typography variant="h4" gutterBottom>Why is a Website Important in the Digital Era?</Typography>
            <Typography variant="body1" paragraph>
              Website Design is a crucial element for any business in the digital era. It serves as an advanced and unique medium to define business details and expand its presence in the virtual world. A well-designed website helps in interacting with new customers and attracting them to your business.
            </Typography>
            <Typography variant="h4" gutterBottom>How is it Helpful for Business?</Typography>
            <Typography variant="body1" paragraph>
              In the modern era, everyone operates on digital platforms. Website Design provides a platform to store business information and promote it globally. It enhances business presence online and connects with clients worldwide at a low cost. Important aspects include an attractive and responsive design, and unique content to help visitors understand your site.
            </Typography>
            <Typography variant="h4" gutterBottom>Types of Websites</Typography>
            <Typography variant="h5" gutterBottom>Static Website</Typography>
            <Typography variant="body1" paragraph>
              Static websites are simple, designed with HTML codes, and do not require programming or database codes. These sites are used for providing fixed information about small businesses.
            </Typography>
            <Typography variant="h5" gutterBottom>Dynamic Website</Typography>
            <Typography variant="body1" paragraph>
              Dynamic websites use programming and HTML codes. They offer editable and updatable functions, allowing content changes via a database or CMS.
            </Typography>
            <Typography variant="h5" gutterBottom>E-commerce Website</Typography>
            <Typography variant="body1" paragraph>
              E-commerce sites, also known as shopping cart sites, allow visitors to search for products and make purchases online. They include features like online payment, order tracking, and feedback processing.
            </Typography>

            <Box display="flex" justifyContent="center" marginTop={3}>
              <img src={webdig} alt="Website Design" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Services Section */}
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '40px' }}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom align="center">Our Website Design Services</Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={3}>
              <Card>
                <CardMedia>
                  <Web fontSize="large" color="primary" style={{ margin: '20px' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">Custom Web Design</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Tailored website designs to match your business needs and branding.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardMedia>
                  <Code fontSize="large" color="primary" style={{ margin: '20px' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">Responsive Design</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Ensuring your website looks great on all devices with a responsive design.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardMedia>
                  <ShoppingCart fontSize="large" color="primary" style={{ margin: '20px' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">E-commerce Solutions</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Building robust online stores with secure payment options and user-friendly interfaces.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardMedia>
                  <Info fontSize="large" color="primary" style={{ margin: '20px' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">Content Management</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Easy-to-use content management systems to keep your website updated.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WebDesignPage;
