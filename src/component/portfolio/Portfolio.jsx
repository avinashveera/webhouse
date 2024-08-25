import React from 'react';
import { Container, Grid, Typography, Breadcrumbs, Link, Button, Box, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import grocery from '../../img/goeasy.png'
import sizzi from '../../img/sailingdreamz.png'
import maruti from '../../img/marutisales.png'

const PortfolioPage = () => {
  return (
    <Container>
      {/* Breadcrumb Section */}
      <Grid container spacing={2} alignItems="center">
 
        <Grid item xs={12} md={5} mt={3}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">Portfolio</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      {/* Projects Section */}
      <Box my={4}>
        <Typography variant="h3" component="h3" gutterBottom>
          Our Projects
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="GO EASY DAY"
                height="140"
                image={grocery}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  GO EASY DAY
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  VIEW
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="SailingDreamz"
                height="140"
                image={sizzi}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  SailingDreamz
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  VIEW
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Maruti Sales"
                height="140"
                image={maruti}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Maruti Sales
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  VIEW
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box my={4}>
        <Typography variant="h3" component="h3" gutterBottom>
          Get in Touch
        </Typography>
        <Box>
          <Typography variant="body1" paragraph>
            Have a project in mind? Reach out to us to discuss how we can help bring your ideas to life. Our team is ready to assist you with any questions or needs you may have.
          </Typography>
          <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* Additional Sections */}
      <Box my={4}>
        <Typography variant="h3" component="h3" gutterBottom>
          Our Approach
        </Typography>
        <Typography variant="body1" paragraph>
          We provide services for emerging and upcoming organizations and other institutions. We specialize in Web Development, Domain registration, Web hosting, Search Engine Optimization, SMS solutions, Hosting Company Automation services, Software Development, and Security Systems. We deliver services through our website at competitive prices, prioritizing product quality and support response times equally.
        </Typography>
        <Typography variant="body1" paragraph>
          Web House has the infrastructure to create an intellectually stimulating and conducive environment that will transform it into a leading technology enterprise, generating high-value added products and services.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team of developers incorporates highly scalable and adaptable component-based solutions with application servers and integration servers to create robust solutions. Our goal is to recognize your business, share common business goals, and help you achieve your objectives. We value long-term relationships with our clients and strive to become an extension of their businesses.
        </Typography>
        <Typography variant="body1" paragraph>
          We consider every client a partner in our mutual success. When you partner with Web House, we identify opportunities to create value by helping you understand the ‘big picture’. We keep your business at the forefront when delivering a solution, considering both your present and future goals.
        </Typography>
        <Typography variant="body1" paragraph>
          With the strong leadership and extensive experience of our founders, we deliver innovative quality solutions to complex projects on time and within budget, overcoming geographical, language, or time barriers.
        </Typography>
      </Box>
    </Container>
  );
};

export default PortfolioPage;
