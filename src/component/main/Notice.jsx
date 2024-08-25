import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';

function ResponsiveNoticeBoard() {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#f5f5f5',
       
        mb: 2,
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          height: 'auto',
          padding:"15px",
          backgroundColor: '#4caf50', // Green background for notice
          color: '#fff',
    
        }}
      >
        <Typography variant="h6" component="div">
          We are providing internship programme for new beginners in IT sector.{' '}
          <Button
            href="/apply"
            target="_blank"
            sx={{ backgroundColor: '#1976d2', color: '#fff' }}
          >
            Apply Now
          </Button>
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 6,
          padding:"10px 20px",
          backgroundColor: '#fff',
          color:"#333333",
          borderRadius: '8px',
          boxShadow: theme.shadows[3],
          
        }}
      >
        {/* Main content goes here */}
        <Typography variant="h5" component="h1" gutterBottom>
          Welcome to Web House
        </Typography>
        <Typography variant="body1" paragraph sx={{color:"gray",fontSize:"12px"}}>
          Web House, established in the 21st century in Patna, is a leading Web Developer, Web Designer, and IT solution company specializing in Web-Based Solutions. We combine strategy, creativity, and technology to deliver the best results for our clients. Web House is recognized as a top Web Designer in Patna, offering exceptional web services. Our commitment is to perform to the highest standards, be responsive, and innovative. We take pride in welcoming you to our esteemed organization. Web House is renowned for Website Development, web services, and affordable SEO in Patna.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Learn More
          </Button>
          <Button variant="outlined" color="secondary">
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ResponsiveNoticeBoard;
