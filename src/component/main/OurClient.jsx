import React from 'react';
import { Box, Typography, Grid, Avatar, Container } from '@mui/material';
import customer1 from '../../img/customer-1.png'
import customer2 from '../../img/customer-2.png'
import customer3 from '../../img/customer-3.png'
import customer4 from '../../img/customer-4.png'
import customer5 from '../../img/customer-5.png'
import customer6 from '../../img/customer-6.png'

const clients = [
  {
    img: customer1,
  },
  {
    img: customer2,
  },
  {
    img: customer3,
  },
  {
    img: customer4,
  },
  {
    img: customer5,
  },
  {
    img: customer6,
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
