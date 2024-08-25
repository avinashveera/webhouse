import React, { useState } from 'react';
import { Container, Box, TextField, Button, CircularProgress, Snackbar, Alert, Link } from '@mui/material';
import { LockOpen } from '@mui/icons-material';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'user', password: 'pass' }),
      });
      const result = await response.json();
      setMessage(result.message || 'Login Successful');
      setOpen(true);
    } catch (error) {
      setMessage('Login Failed');
      setAlertSeverity('error');
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <LockOpen fontSize="large" />
        <TextField fullWidth label="Username" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <Button variant="contained" color="primary" onClick={handleLogin} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </Button>
        <Box sx={{ marginTop: 2 }}>
          <Link href="/forgotpassword" variant="body2" underline="hover">
            Forgot Password?
          </Link>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={alertSeverity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginPage;
