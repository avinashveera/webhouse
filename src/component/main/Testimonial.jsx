import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Avatar, Rating, Paper } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import person1 from '../../img/person-1.jpg'
import person2 from '../../img/person-2.jpg'
import person3 from '../../img/person-3.jpg'
import person4 from '../../img/person-3.png'
import person5 from '../../img/person-4.jpg'

const testimonials = [

  {
    text: "I have worked with Web House over the years on a number of projects. I've always found them to be responsive, friendly, and up-to-date with all the technology - which everyone knows is constantly changing. I recommend Web House completely.",
    name: "Yash Techno Services",
    role: "Client",
    img: person1,
    rating: 5,
  },
  {
    text: "Web House is the best company in the business for website design and building. They worked hard to give us exactly what we wanted and more for our website and delivered on time. We would definitely use them again in the future.",
    name: "Durga Service Center",
    role: "Client",
    img:person2,
    rating: 5,
  },
  {
    text: "Web House team responded well to the needs of our requirements. Their monthly support is quite helpful because they provide good customer service and are very quick with their responses. Thank you for your guidance and support in helping us create our website.",
    name: "Glowium Multi Services",
    role: "Client",
    img: person3,
    rating: 4.5,
  },
  {
    text: "Web House team are a pleasure to work with. They are highly experienced and provide a fantastic quality service with very quick response times. Thank you very much Web House, for your guidance and support in creating and managing my website.",
    name: "Chanakya Clat Classes",
    role: "Client",
    img: person4,
    rating: 5,
  },
  {
    text: "We have worked with Web House for many years and Web House has developed several websites for us. Their expertise in website development, graphic design, and SEO is unmatchable in the industry along with their quality of work and ongoing support.",
    name: "Trust Booster Infra",
    role: "Client",
    img: person5,
    rating: 5,
  }

];

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: '#4caf50', color: "#fff", padding: '40px 20px', overflow: 'hidden' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: "#fff", maxWidth: 800, mx: 'auto' }}>
        We have worked with many clients, and we always like to hear that they come out from the cooperation happy and satisfied. Have a look at what our clients said about us.
      </Typography>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} px={2}>
              <Paper elevation={3} sx={{ padding: '20px', position: 'relative', height: '300px' }}>
                <FormatQuote sx={{ fontSize: 40, color: '#0288d1', position: 'absolute', top: -20, left: -20 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {testimonial.text}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <Avatar src={testimonial.img} alt={testimonial.name} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.role}
                    </Typography>
                    <Rating value={testimonial.rating} readOnly precision={0.5} />
                  </Box>
                </Box>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default Testimonial;

