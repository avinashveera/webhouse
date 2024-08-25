import React, { useState } from 'react';
import { Container, Box, TextField, Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import { Dialpad } from '@mui/icons-material';

const OTPVerificationPage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleVerifyOTP = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp: '123456' }),
      });
      const result = await response.json();
      setMessage(result.message || 'OTP Verified');
      setOpen(true);
    } catch (error) {
      setMessage('OTP Verification Failed');
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Dialpad fontSize="large" />
        <TextField fullWidth label="Enter OTP" margin="normal" />
        <Button variant="contained" color="primary" onClick={handleVerifyOTP} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Verify OTP'}
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default OTPVerificationPage;
