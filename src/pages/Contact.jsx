import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Link, CircularProgress, Snackbar, Alert } from '@mui/material';
import { Email, Phone, LocationOn, Public } from '@mui/icons-material';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const serviceID = 'service_9o8yn7s'; // Replace with your EmailJS Service ID
      const templateID = 'template_vv7fk0i'; // Replace with your EmailJS Template ID
      const userID = 'iIlrYyaLgrPbhzCNp'; // Replace with your EmailJS User ID

      const templateParams = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        mobile: formData.mobile,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);

      setAlertMessage('Message sent successfully!');
      setAlertSeverity('success');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setAlertMessage(error.message || 'An error occurred.');
      setAlertSeverity('error');
    } finally {
      setLoading(false);
      setOpen(true);
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
            <Button variant="contained" color="primary" type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : <><Email /> Send Message</>}
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={alertSeverity} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
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
