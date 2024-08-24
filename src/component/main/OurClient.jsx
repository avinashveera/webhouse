import React from 'react';
import { Box, Typography, Grid, Avatar, Container } from '@mui/material';

const clients = [
  {
    img: 'https://webhouse.co.in/assets/img/customer-1.png',
  },
  {
    img: 'https://webhouse.co.in/assets/img/customer-2.png',
  },
  {
    img: 'https://webhouse.co.in/assets/img/customer-3.png',
  },
  {
    img: 'https://webhouse.co.in/assets/img/customer-4.png',
  },
  {
    img: 'https://webhouse.co.in/assets/img/customer-5.png',
  },
  {
    img: 'https://webhouse.co.in/assets/img/customer-6.png',
  },
];

function OurClients() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Our Clients
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 4 }}>
          We are proud to have worked with these amazing clients.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {clients.map((client, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Avatar
                src={client.img}
                alt={`Client ${index + 1}`}
                sx={{
                  width: { xs: 80, sm: 100, md: 120 }, // Responsive size
                  height: { xs: 80, sm: 100, md: 120 }, // Responsive size
                  mx: 'auto',
                  boxShadow: 3,
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  padding: 2,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default OurClients;
