import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const services = [
  { icon: <WebIcon fontSize="large" />, name: 'Website Design' },
  { icon: <DeveloperModeIcon fontSize="large" />, name: 'CMS Development' },
  { icon: <DesktopMacIcon fontSize="large" />, name: 'Web Development' },
  { icon: <ShoppingCartIcon fontSize="large" />, name: 'E-commerce Development' },
  { icon: <PhoneAndroidIcon fontSize="large" />, name: 'Mobile Development' },
  { icon: <DesignServicesIcon fontSize="large" />, name: 'Graphic Design' },
  { icon: <TrendingUpIcon fontSize="large" />, name: 'Internet Marketing' },
];

const ResponsiveServicesComponent = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Heading Section */}
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Our Services
      </Typography>

      {/* Services Section */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
                '&:hover': { boxShadow: 6 },
                backgroundColor:"#1976d2",
                color:"#fff"
              }}
            >
              <Box sx={{ mb: 2 }}>{service.icon}</Box>
              <Typography variant="h6">{service.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Description Section */}
      <Box mt={5}>
        <Typography variant="body1" paragraph align="justify">
          We provide services for emerging and upcoming organizations and other institutions. We specialize in Web Development, Domain registration, Web hosting, Search Engine Optimization, SMS solutions, Hosting Company Automation services, Software Development & Security Systems. We offer services through our website at relatively low prices, and we prioritize product quality and support response times equally. Our aim is to understand the specific needs of our customers and provide them with their requirements.
        </Typography>
        <Typography variant="body1" paragraph align="justify">
          Web House has the infrastructure to create an intellectually stimulating and conducive environment that will transform it into a leading technology enterprise generating high-value-added products and services.
        </Typography>
        <Typography variant="body1" paragraph align="justify">
          Our team of developers incorporates highly scalable and adaptable component-based solutions with application servers and integration servers to make robust solutions. Our aspiration is to recognize your business, share a common business goal with you, and help you reach your objectives. We value the long-term relationship we create with our customers and ultimately become an extension of their businesses.
        </Typography>
        <Typography variant="body1" paragraph align="justify">
          We consider every client a partner in our mutual success. When you partner with Web House, we identify every opportunity to create value by helping you understand the ‘big picture’. We keep your business at the forefront when we deliver a solution, considering both your present and future goals.
        </Typography>
        <Typography variant="body1" paragraph align="justify">
          With the strong leadership and extensive experience of our founders, we are able to deliver innovative quality solutions to complex projects on time and on budget without geographical, language, or time barriers.
        </Typography>
      </Box>
    </Container>
  );
};

export default ResponsiveServicesComponent;
