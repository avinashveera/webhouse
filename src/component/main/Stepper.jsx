import React from 'react';
import { Box, Stepper, Step, StepLabel, Typography, useTheme, useMediaQuery } from '@mui/material';
import { FlashOn, Chat, Build, Verified, RocketLaunch } from '@mui/icons-material';

const steps = [
  { label: 'GET IDEA', icon: <FlashOn /> },
  { label: 'DISCUSS', icon: <Chat /> },
  { label: 'PRODUCTION', icon: <Build /> },
  { label: 'TESTING', icon: <Verified /> },
  { label: 'DELIVER', icon: <RocketLaunch /> },
];

function ResponsiveStepper() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{ 
        width: '100%', 
        backgroundColor: '#f5f5f5',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column' ,
        padding:"20px 0px",
        mb:5
      }}
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        OUR PROCESS
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Web House: Easy Transparent Free Process
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: isMobile ? '40%' : '80%', // Adjusting width to fit within the mobile screen
          mx: 'auto', // Center the stepper horizontally
        }}
      >
        <Stepper
          alternativeLabel={!isMobile}
          orientation={isMobile ? 'vertical' : 'horizontal'}
          activeStep={steps.length - 1}
          sx={{
            pt: 4, 
            flexWrap: 'wrap',
            justifyContent: 'center', // Center the steps in the stepper
          }}
        >
          {steps.map((step, index) => (
            <Step key={index} sx={{ minWidth: isMobile ? '100px' : '160px' }}> {/* Ensure steps are wide enough on mobile */}
              <StepLabel
                icon={step.icon}
                sx={{
                  '& .MuiStepIcon-root': {
                    color: '#1976d2', // Icon color
                  },
                  '& .MuiStepLabel-label': {
                    color: '#424242', // Label text color
                    fontWeight: 'bold',
                    textAlign: 'center',
                  },
                }}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
}

export default ResponsiveStepper;
