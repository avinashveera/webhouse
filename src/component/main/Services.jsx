import React from 'react';
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import { DesktopMac, Assignment, Public, ShoppingCart, MobileFriendly, Tune } from '@mui/icons-material';

const services = [
  {
    icon: <DesktopMac fontSize="large" />,
    title: 'Webdesign',
    description:
      'The success or failure of any company depends on the image it has among its target consumers and competitors. Web House, a Web design company, helps you build a positive brand image that will reinforce loyalty among existing consumers and attract new ones.',
  },
  {
    icon: <Assignment fontSize="large" />,
    title: 'Website Development',
    description:
      'Using the best-in-class technology, we developed websites that perform extraordinarily. With a full team of expert developers working on cutting-edge solutions, we customize design and development of our client ideas from conception to completion.',
  },
  {
    icon: <Public fontSize="large" />,
    title: 'SEO and SMO',
    description:
      'Is your Website ready but don’t know where to start its promotion to get traffic and build relevant content that converts? Our dynamic marketing team gets results through short-term and long-term planning with a keen business and marketing sense.',
  },
  {
    icon: <ShoppingCart fontSize="large" />,
    title: 'E-commerce Development',
    description:
      'Are you creating a new online E-commerce store or looking for a redesign of your existing store? Then you are at the right place. Web House has expert Ecommerce developers who are well-versed with the latest solutions available and can help you in your decision-making process.',
  },
  {
    icon: <MobileFriendly fontSize="large" />,
    title: 'Mobile APP',
    description:
      'Web House builds dynamic, customized mobile apps with the latest mobile technologies, high-tech features, and creative widgets. We develop user-friendly apps that deliver a great experience on various platforms, including Android, iOS, and Windows.',
  },
  {
    icon: <Tune fontSize="large" />,
    title: 'Software Development',
    description:
      'As a custom software development company, Web House serves medium and large enterprises, whether you are looking for outsourced product development, team augmentation, or customized solutions.',
  },
];

function ResponsiveServiceSection() {
  return (
    <Box sx={{ padding:"50px 30px", paddingBottom:"100px",backgroundColor: '#1976d2',color:"gray" }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{color:"#fff"}}>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{mb:2}}>
            <Box
              sx={{
                p:2,
                backgroundColor: '#fff',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: 3,
                height: '100%',
              }}
            >
              <IconButton color="primary">{service.icon}</IconButton>
              <Typography variant="h6" component="h2" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {service.description}
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ResponsiveServiceSection;
