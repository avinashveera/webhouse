import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Link } from '@mui/material';
import { Email, Phone, LocationOn, Public } from '@mui/icons-material';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/contactus', formData);
      alert('Message sent successfully!');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      alert('Error sending message!');
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h3" gutterBottom>
              Contact Form
            </Typography>
            <Typography paragraph>
              Please feel free to contact us, our customer service center is working for you 24/7.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <Button variant="contained" color="primary" type="submit">
                    <Email /> Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h3" gutterBottom>
              Our Offices
            </Typography>
            <Typography variant="h6">
              <LocationOn /> Delhi Office
            </Typography>
            <Typography paragraph>
              E-10/12 Triveni Complex, 210, 2nd Floor, Laxmi Nagar, Delhi - 110092
              <br />
              <Phone /> (+91) 8676994400, (+91) 8676994422
              <br />
              <Email /> sales@webhouse.co.in, support@webhouse.co.in
            </Typography>
            <Typography variant="h6" mt={5}>
              <LocationOn /> Lucknow
            </Typography>
            <Typography paragraph>
              LG-16, Tarun Market, Sitapur Road, Lucknow, Uttar Pradesh - 226020
              <br />
              <Phone /> (+91) 8676994400, (+91) 8676994422
              <br />
              <Email /> sales@webhouse.co.in, support@webhouse.co.in
            </Typography>
            <Typography variant="h6"  mt={5}>
              <LocationOn /> Patna
            </Typography>
            <Typography paragraph>
              507, RC Western Mall, RPS More, Bailey Road, Patna - 801503
              <br />
              <Phone /> (+91) 8676994400, (+91) 8676994422
              <br />
              <Email /> sales@webhouse.co.in, support@webhouse.co.in
            </Typography>
            <Typography variant="h6"  mt={5} >
              <LocationOn /> Jharkhand
            </Typography>
            <Typography paragraph >
              HIG - 287 Hariom Nagar, Adityapur, Jamshedpur - 831013
              <br />
              <Phone /> (+91) 8676994400, (+91) 8676994422
              <br />
              <Email /> sales@webhouse.co.in, support@webhouse.co.in
            </Typography>
            <Typography variant="h6"  mt={5}>
              <Public /> Website Links
            </Typography>
            <Typography paragraph>
              <Link href="http://www.pratyushgroup.com/" target="_blank" rel="noopener noreferrer">
                www.pratyushgroup.com
              </Link>
              <br />
              <Link href="https://webhouse.co.in/" target="_blank" rel="noopener noreferrer">
                www.webhouse.co.in
              </Link>
              <br />
              <Link href="https://infohouse.in/" target="_blank" rel="noopener noreferrer">
                www.infohouse.in
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
