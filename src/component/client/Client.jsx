import React from 'react';
import { Container, Grid, Card, CardMedia, Typography, Box, CardActionArea } from '@mui/material';
import  imag1 from '../../img/atulya.jpg'
import  imag2 from '../../img/nurse.jpg'
import  imag3 from '../../img/drmanch.jpg'
import  imag4 from '../../img/gulf.jpg'
import  imag5 from '../../img/goeasy.jpg'
import  imag6 from '../../img/goodwish.jpg'
import  imag7 from '../../img/muzzaf.jpg'
import  imag8 from '../../img/marutisale.jpg'
import  imag9 from '../../img/patnatt.jpg'
import  imag0 from '../../img/sizz.jpg'
const ClientComponent = () => {
  const clients = [
    { name: 'ATULAYA KISAN', img: imag1 },
    { name: 'ANM NURSES TRAINING CENTER', img: imag2 },
    { name: 'DR. MAYANK KUMAR', img: imag3 },
    { name: 'GULF CAREER ONLINE', img: imag4 },
    { name: 'GO EASY DAY', img: imag5 },
    { name: 'GOOD WISHES', img: imag6 },
    { name: 'IEI', img: imag7 },
    { name: 'MARUTI SALES', img: imag8 },
    { name: 'PATNA TRAINING CENTER', img: imag9 },
    { name: 'SAILING DREAMZ', img: imag0 },
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        {clients.map((client, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardActionArea sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={client.img}
                  alt={client.name}
                  sx={{
                    height: 140,
                    objectFit: 'cover',
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.7,
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography variant="h6">{client.name}</Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ClientComponent;
