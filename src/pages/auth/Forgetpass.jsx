import React, { useState } from 'react';
import { Container, Box, TextField, Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import { LockReset } from '@mui/icons-material';

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'user@example.com' }),
      });
      const result = await response.json();
      setMessage(result.message || 'Password reset link sent');
      setAlertSeverity(result.message || 'Successful sent to email');
      setOpen(true);
    } catch (error) {
      setMessage('Failed to send reset link');
      setAlertSeverity("error")
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <LockReset fontSize="large" />
        <TextField fullWidth label="Email" margin="normal" />
        <Button variant="contained" color="primary" onClick={handleForgotPassword} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Send Reset Link'}
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

export default ForgotPasswordPage;
