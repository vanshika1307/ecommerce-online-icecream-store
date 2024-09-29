import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import IceCreamAnimation from './IceCreamAnimation';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setFormData({ name: '', email: '' });
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <IceCreamAnimation />
      <Container component="main" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" color="primary" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
          Contact Us
        </Typography>
        <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          {submitStatus === 'success' && (
            <Alert severity="success" sx={{ mb: 4 }}>Thank you for your message. We'll get back to you soon!</Alert>
          )}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                />
              </Box>
              <Box mb={4}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                />
              </Box>
              <Button type="submit" variant="contained" color="primary">Send Message</Button>
            </form>
          </motion.div>
        </Paper>
      </Container>
    </Box>
  );
}

export default Contact;