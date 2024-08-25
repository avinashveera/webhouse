import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  CircularProgress,
  Snackbar,
  Alert
} from '@mui/material';
import emailjs from 'emailjs-com';

const ApplyNow = () => {
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

      setAlertMessage('Form submitted successfully!');
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
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Application Form Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h3" gutterBottom>
            Application Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Firstname"
                  name="firstname"
                  fullWidth
                  variant="outlined"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Lastname"
                  name="lastname"
                  fullWidth
                  variant="outlined"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mobile"
                  name="mobile"
                  type="tel"
                  fullWidth
                  variant="outlined"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="qualification-label">Highest Qualification</InputLabel>
                  <Select
                    labelId="qualification-label"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    label="Highest Qualification"
                    required
                  >
                    <MenuItem value="">-- Choose Qualification --</MenuItem>
                    <MenuItem value="B.Tech(CS, IT, EC)">B.Tech(CS, IT, EC)</MenuItem>
                    <MenuItem value="BCA">BCA</MenuItem>
                    <MenuItem value="MCA">MCA</MenuItem>
                    <MenuItem value="Bsc. IT">Bsc. IT</MenuItem>
                    <MenuItem value="MBA">MBA</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="message"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={loading ? <CircularProgress size={24} /> : <i className="fa fa-check-circle"></i>}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Apply'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <img
            src="https://webhouse.co.in/assets/img/webhouse-software-development-company-image-slider-1.png"
            alt="Apply Now"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/* Snackbar for alert messages */}
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={alertSeverity} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ApplyNow;
