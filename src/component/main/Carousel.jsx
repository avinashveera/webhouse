import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import slider1 from '../../img/webhouse-software-development-company-image.png'
import slider2 from '../../img/webhouse-software-development-company-image-slider-2.png'
import slider3 from '../../img/webhouse-software-development-company-image-slider-1.png'
import slider4 from '../../img/webhouse-software-development-company-image-slider.png'
import background from '../../img/background.jpg'

const slides = [
  {
    img:slider1,
    heading: 'Responsive Website',
    text: 'Business. Corporate. Agency.\nPortfolio. Blog. E-commerce.',
  },
  {
    img: slider3,
    heading: 'Internship Programme',
    text: 'Training\nPractice\nJob',
  },
  {
    img: slider4,
    heading: 'Our Services',
    text: 'Apps Development\nSEO Marketing\nSMS Marketing\nE-commerce',
  },
  {
    img:slider2,
    heading: 'Design',
    text: 'Clean and elegant design\nFull width and boxed mode\nEasily readable Roboto font and awesome icons\nPre-prepared colour variations',
  },
  {
    img: slider3,
    heading: 'Easy to Customize',
    text: 'Pre-prepared colour variations.\nEasily to change fonts',
  },
];

function ResponsiveCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      useKeyboardArrows
      autoPlay
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            height: '400px', // Adjust height as needed
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay color
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              p: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: isMobile ? 'center' : 'left',
                mb: isMobile ? 2 : 0,
                ml: isMobile ? 0 : 9,
              }}
            >
              <Typography variant="h4" gutterBottom>
                {slide.heading}
              </Typography>
              <Typography variant="body1">
                {slide.text.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: isMobile ? 'block' : 'block',
                textAlign: 'center',
              }}
            >
              <img
                src={slide.img}
                alt={slide.heading}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
}

export default ResponsiveCarousel;
