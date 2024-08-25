import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Code } from '@mui/icons-material';
import bgfix from '../../img/fixed-background-2.jpg'

function BarPage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgfix})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        py: 10,
        position: 'relative',
      }}
    >
      {/* Dark Mask Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container sx={{ zIndex: 2, position: 'relative' }}>
        <Code sx={{ fontSize: 60, mb: 3 }} />
        <Typography variant="h4" component="h3" className="myfontfamily" sx={{ textTransform: 'uppercase', mb: 2 }}>
          Have a question or need a custom quote?
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 4 }}>
          WE DELIVER CREATIVE AND INNOVATIVE SOLUTIONS!
        </Typography>
        <Button
          variant="contained"
          href="/contact"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Connect With Us
        </Button>
      </Container>
    </Box>
  );
}

export default BarPage;
