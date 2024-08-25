import React from 'react';
import { Container, Box, Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import androi from '../../img/mobile-dev-ft-img.png'
import project1 from '../../img/goeasy.jpg'
import project2 from '../../img/sailingdreamz.png'
import project3 from '../../img/marutisales.png'


const AndroidDevelopmentPage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Heading Section */}
        <Grid item xs={12} md={7}>
          <Typography variant="h2" component="h1" gutterBottom>
            Mobile Development
          </Typography>
          <Typography variant="body1" paragraph>
            Web House builds dynamic customized mobile apps with the latest mobile technologies, high-tech features, and creative widgets that one can’t even imagine. Being a mobile app development company in India, we develop user-friendly apps that deliver a great user experience for Android, iOS, and cross-platform solutions.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src={androi}
              alt="Mobile Development"
              width={500}
              height={300}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Platform Expertise Section */}
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Platform Expertise
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <AndroidIcon sx={{ fontSize: 50 }} color="primary" />
              <Typography variant="h6" gutterBottom>
                Android Development
              </Typography>
              <Typography variant="body2">
                Creating robust and scalable Android apps with intuitive design and functionality.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <AppleIcon sx={{ fontSize: 50 }} color="primary" />
              <Typography variant="h6" gutterBottom>
                iOS Development
              </Typography>
              <Typography variant="body2">
                Developing seamless and high-performing iOS apps with a focus on user experience.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <PhoneAndroidIcon sx={{ fontSize: 50 }} color="primary" />
              <Typography variant="h6" gutterBottom>
                Cross-Platform Development
              </Typography>
              <Typography variant="body2">
                Building cross-platform apps that offer a consistent experience across devices.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Project Showcase Section */}
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Latest Projects
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Project 1"
                height="200"
                image={project1}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Project Name 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A brief description of the project, highlighting the features and technologies used.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Project 2"
                height="200"
                image={project2}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Project Name 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A brief description of the project, focusing on the challenges overcome and the results achieved.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Project 3"
                height="200"
                image={project3}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Project Name 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A brief description of the project, detailing the client requirements and how they were met.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Build Your App?
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          startIcon={<AndroidIcon />}
          href="/contact"
        >
          Get in Touch
        </Button>
      </Box>
    </Container>
  );
};

export default AndroidDevelopmentPage;
