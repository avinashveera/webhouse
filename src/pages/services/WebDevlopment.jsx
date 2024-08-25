import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Breadcrumbs, Link } from '@mui/material';
import {  Code as CodeIcon, Computer as ComputerIcon, Web as WebIcon } from '@mui/icons-material';
import webdeev from '../../img/mobile-dev-ft-img.png'

const WebDevelopmentPage = () => {
  return (
    <Container>
      {/* Breadcrumbs and Heading */}
      <Grid container spacing={2} alignItems="center">
        
        <Grid item md={5}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="https://webhouse.co.in/home">
              Home
            </Link>
            <Typography color="textPrimary">Website Development</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      {/* Main Content */}
      <section>
        <Typography variant="h2" gutterBottom>Website Development</Typography>
        <Typography variant="body1" paragraph>
          Using the best-in-class technology, we develop websites that perform extraordinarily. With a full team of expert developers working on cutting-edge solutions, we customize the design and development of our clients' ideas from conception to completion.
        </Typography>

        {/* Main Image */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <img src={webdeev} alt="Web Development" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </section>

      {/* Services Section */}
      <section>
        <Typography variant="h2" align="center" gutterBottom>Our Services</Typography>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <Card>
              <CardMedia
                component="img"
                alt="PHP Development"
                height="140"
                image="https://webhouse.co.in/assets/img/php.png"
              />
              <CardContent>
                <Typography variant="h5">PHP Development</Typography>
                <Typography variant="body2" color="textSecondary">Building dynamic websites and applications with PHP.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardMedia
                component="img"
                alt="ASP .NET Development"
                height="140"
                image="https://webhouse.co.in/assets/img/net.png"
              />
              <CardContent>
                <Typography variant="h5">ASP .NET Development</Typography>
                <Typography variant="body2" color="textSecondary">Developing robust web applications with ASP .NET technology.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardMedia
                component="img"
                alt="Node JS Development"
                height="140"
                image="https://webhouse.co.in/assets/img/node.png"
              />
              <CardContent>
                <Typography variant="h5">Node JS Development</Typography>
                <Typography variant="body2" color="textSecondary">Creating scalable applications with Node JS.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardMedia
                component="img"
                alt="ColdFusion Development"
                height="140"
                image="https://webhouse.co.in/assets/img/cf.png"
              />
              <CardContent>
                <Typography variant="h5">ColdFusion Development</Typography>
                <Typography variant="body2" color="textSecondary">Building powerful web solutions using ColdFusion.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>

      {/* Unique Sections */}
      <section style={{ marginTop: '40px' }}>
        <Typography variant="h2" align="center" gutterBottom>Why Choose Us?</Typography>
        <Grid container spacing={4}>
          <Grid item md={4} xs={12}>
            <Card>
              <CardContent>
                <CodeIcon color="primary" style={{ fontSize: 40 }} />
                <Typography variant="h5" gutterBottom>Cutting-Edge Technology</Typography>
                <Typography variant="body2" color="textSecondary">
                  We use the latest technologies to ensure your website is fast, secure, and up-to-date with the current trends.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card>
              <CardContent>
                <ComputerIcon color="primary" style={{ fontSize: 40 }} />
                <Typography variant="h5" gutterBottom>Custom Solutions</Typography>
                <Typography variant="body2" color="textSecondary">
                  Our team customizes solutions to fit your specific needs and business goals, providing a tailored approach.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card>
              <WebIcon color="primary" style={{ fontSize: 40 }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>Responsive Design</Typography>
                <Typography variant="body2" color="textSecondary">
                  We ensure that your website is fully responsive, providing an optimal viewing experience on any device.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>

      <section style={{ marginTop: '40px' }}>
        <Typography variant="h2" align="center" gutterBottom>Our Development Process</Typography>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>1. Discovery</Typography>
                <Typography variant="body2" color="textSecondary">
                  We start by understanding your requirements and business goals to ensure we deliver a product that meets your needs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>2. Design</Typography>
                <Typography variant="body2" color="textSecondary">
                  Our design team creates wireframes and prototypes to visualize the layout and functionality of your website.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>3. Development</Typography>
                <Typography variant="body2" color="textSecondary">
                  We develop the website using the latest technologies and ensure it functions smoothly across all devices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>4. Launch</Typography>
                <Typography variant="body2" color="textSecondary">
                  After thorough testing, we launch your website and provide ongoing support to ensure it performs optimally.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default WebDevelopmentPage;
