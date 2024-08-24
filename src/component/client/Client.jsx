import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, CardActionArea } from '@mui/material';

const ClientComponent = () => {
  const clients = [
    { name: 'ATULAYA KISAN', img: 'https://webhouse.co.in/assets/img/clients/ak.jpg' },
    { name: 'ANM NURSES TRAINING CENTER', img: 'https://webhouse.co.in/assets/img/clients/anm.jpg' },
    { name: 'DR. MAYANK KUMAR', img: 'https://webhouse.co.in/assets/img/clients/dm.jpg' },
    { name: 'GULF CAREER ONLINE', img: 'https://webhouse.co.in/assets/img/clients/gc.jpg' },
    { name: 'GO EASY DAY', img: 'https://webhouse.co.in/assets/img/clients/ge.jpg' },
    { name: 'GOOD WISHES', img: 'https://webhouse.co.in/assets/img/clients/gw.jpg' },
    { name: 'IEI', img: 'https://webhouse.co.in/assets/img/clients/iei.jpg' },
    { name: 'MARUTI SALES', img: 'https://webhouse.co.in/assets/img/clients/maruti.jpg' },
    { name: 'PATNA TRAINING CENTER', img: 'https://webhouse.co.in/assets/img/clients/pt.jpg' },
    { name: 'SAILING DREAMZ', img: 'https://webhouse.co.in/assets/img/clients/sd.jpg' },
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
