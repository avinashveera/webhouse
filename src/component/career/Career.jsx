import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, CardActions } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const CareerComponent = () => {
  const jobs = [
    {
      post: 'BDE',
      positions: 10,
      qualification: 'BCA, MCA, MBA, B.Sc.(IT)',
      experience: 'Min. 6 Months',
      location: 'Patna, Ranchi, Jamshedpur, Hajipur, Bhagalpur, Muzaffarpur, Delhi',
      salary: '10K - 18K',
    },
    {
      post: 'BDM',
      positions: 10,
      qualification: 'BCA, MCA, MBA, B.Sc.(IT)',
      experience: 'Min. 1 Year',
      location: 'Patna, Ranchi, Jamshedpur, Hajipur, Bhagalpur, Muzaffarpur, Delhi',
      salary: '15K - 25K',
    },
    {
      post: 'Tele Callers',
      positions: 5,
      qualification: 'Graduation',
      experience: 'Min. 6 Months',
      location: 'Patna, Delhi',
      salary: '06K - 15K',
    },
    {
      post: 'PHP Junior Web Developer',
      positions: 2,
      qualification: 'BCA, MCA, MBA, B.Sc.(IT)',
      experience: 'Min. 6 Months',
      location: 'Patna',
      salary: '06K - 10K',
    },
    {
      post: '.Net Software Developer',
      positions: 2,
      qualification: 'BCA, MCA, MBA, B.Sc.(IT)',
      experience: 'Min. 2 Years',
      location: 'Delhi',
      salary: '15K - 25K',
    },
    {
      post: 'Android Developer',
      positions: 2,
      qualification: 'BCA, MCA, MBA, B.Sc.(IT)',
      experience: 'Min. 2 Years',
      location: 'Delhi',
      salary: '25K - 35K',
    },
  ];

  return (
    <Container>
      <Grid container spacing={3} sx={{ my: 4 }}>
       
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" component="span">
              <a href="https://webhouse.co.in/home">Home</a> / Career
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body1" paragraph>
        Web House is one of the trusted names in the field of Software Development. We are an organization with a vision. We offer a supportive, inspiring, and dynamic work environment for each individual working with us.
      </Typography>
      <Typography variant="body1" paragraph>
        We would like to associate with the sort of people who can explore their potential and creativity with great zeal to touch the pinnacle and add more value than clients would traditionally expect. We believe in an ever-growing team which adds vibrant ideas and a stream of enthusiasm and cutting-edge technology to the organization's intellectual capital base.
      </Typography>
      <Typography variant="body1" paragraph>
        Now Invites <strong>WALK IN INTERVIEW</strong>, in <strong>Patna, Bihar</strong> For professionally qualified candidates with better experience in IT Industries for the following mentioned posts on a regular basis. The post is available at Regional Office Patna.
      </Typography>

      <Typography variant="h4" sx={{ my: 2 }}>
        QUALIFICATION & EXPERIENCE
      </Typography>

      <Grid container spacing={2}>
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor:"#4caf50",
                color:"#fff",
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',

                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {job.post}
                </Typography>
                <Typography variant="body2" >
                  <WorkOutlineIcon sx={{ mr: 1 }} /> Positions: {job.positions}
                </Typography>
                <Typography variant="body2" >
                  <SchoolIcon sx={{ mr: 1 }} /> Qualification: {job.qualification}
                </Typography>
                <Typography variant="body2" >
                  <CalendarTodayIcon sx={{ mr: 1 }} /> Experience: {job.experience}
                </Typography>
                <Typography variant="body2" >
                  <LocationOnIcon sx={{ mr: 1 }} /> Location: {job.location}
                </Typography>
                <Typography variant="body2" >
                  <AttachMoneyIcon sx={{ mr: 1 }} /> Salary: {job.salary}
                </Typography>
              </CardContent>
              <CardActions >
                <Button size="small" variant="contained" color="primary" sx={{ml:"150px"}} >
                  Apply
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body1" paragraph sx={{ mt: 4 }}>
        Note: Interested Candidates can send their profile to <strong>hr@webhouse.co.in</strong>.
      </Typography>
      <Typography variant="body1" paragraph>
        SALARY: Negotiable/No salary bar for deserving candidates.
      </Typography>

      <Typography variant="h4" sx={{ mt: 4 }}>
        WALK IN INTERVIEW
      </Typography>
      <Typography variant="body1" paragraph>
        Send CV and Photo<br />
        Whatsapp or mail hr@webhouse.co.in<br />
        Whatsapp/call: (+91) 8676994400
      </Typography>
    </Container>
  );
};

export default CareerComponent;
