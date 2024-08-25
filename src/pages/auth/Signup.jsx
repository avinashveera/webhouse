import React, { useState } from 'react';
import { Container, Box, TextField, Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'newuser', email: 'user@example.com', password: 'newpass' }),
      });
      const result = await response.json();
      setMessage(result.message || 'Signup Successful');
      setAlertSeverity(result.message || 'signup Successful')
      setOpen(true);
    } catch (error) {
      setMessage('Signup Failed');
      setAlertSeverity('error')
      
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <PersonAdd fontSize="large" />
        <TextField fullWidth label="Username" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <Button variant="contained" color="primary" onClick={handleSignup} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Signup'}
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={alertSeverity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignupPage;
