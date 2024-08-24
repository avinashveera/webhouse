import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ResponsiveAccordion = () => {
  return (
    <Box sx={{ maxWidth: '900px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Who We Are
      </Typography>
      <Typography variant="body1" paragraph align="justify">
        Web House is known as a unit of Pratush Web Infotech Pvt. Ltd, famous for three reasons: the best working environment, client satisfaction during work, and time punctuality. We have been primarily providing IT services like web development, software development, and digital marketing for the past 10 years, with our company based in Delhi, India. We have also opened branches in UP, Bihar, and Jharkhand to provide excellent IT development services.
      </Typography>

      {/* Accordion 1 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Why Choose Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img 
                src="https://webhouse.co.in/assets/img/our-team.jpg" 
                alt="Our Team" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} 
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" align="justify">
                We focus on client-related profit and how to expand the client's business, which is why many choose us for IT-related services. Our goal is to increase the client's business volume through digital solutions. We have an expert team capable of handling many client projects smoothly and have successfully established strong relationships with top companies due to our web & IT development services.
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Why IT Services Are Useful</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img 
                src="https://webhouse.co.in/assets/img/our-team.jpg" 
                alt="Our Team" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} 
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" align="justify">
                IT services are a powerful medium for promoting business globally, serving as a key to entering the virtual world and enhancing business connections online. With IT services, businesses can interact with new customers and attract them to their websites. Options like website development, digital marketing, and advertising are available under IT functions, which help in describing the client's operations or work in detail.
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 3 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">The rewards of being a member of the Web House team include</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Opportunities to establish meaningful, rewarding relationships with clients and other team members.</li>
            <li>Opportunities to work in collaboration with some of the best minds in the business.</li>
            <li>Opportunities to support success through the sharing of knowledge and experience in training and support positions.</li>
            <li>Opportunities to apply technical and creative skills to the task of organizing, managing, and interpreting information.</li>
            <li>Opportunities to enhance skills and achieve new levels of expertise through ongoing skill development.</li>
            <li>Opportunities to carve out and follow a personalized path to success.</li>
            <li>Opportunities for unlimited growth – personal, professional, and financial.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ResponsiveAccordion;
