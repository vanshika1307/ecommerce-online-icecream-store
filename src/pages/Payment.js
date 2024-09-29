import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, Paper, Alert } from '@mui/material';
import { motion } from 'framer-motion';

function Payment() {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
      console.log('Payment processed:', formData);
    }, 2000);
  };

  if (paymentStatus === 'success') {
    return (
      <Container component="main" sx={{ py: 8 }}>
        <Alert severity="success" sx={{ mb: 4 }}>Payment Successful! Thank you for your order. Your ice cream is on its way!</Alert>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>Return to Home</Button>
      </Container>
    );
  }

  return (
    <Container component="main" sx={{ py: 8 }}>
      <Typography variant="h3" color="primary" gutterBottom>Payment</Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <form onSubmit={handleSubmit}>
            <Box mb={4}>
              <TextField
                fullWidth
                label="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </Box>
            <Box mb={4}>
              <TextField
                fullWidth
                label="Expiry Date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </Box>
            <Box mb={4}>
              <TextField
                fullWidth
                label="CVV"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </Box>
            <Button type="submit" variant="contained" color="primary">Submit Payment</Button>
          </form>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default Payment;