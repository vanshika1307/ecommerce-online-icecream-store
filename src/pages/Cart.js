import React from 'react';
import { Container, Typography, Paper, Box, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Cart({ cart = [] }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container component="main" sx={{ py: 8 }}>
      <Typography variant="h3" color="primary" gutterBottom>Your Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1" color="textSecondary">Your cart is empty.</Typography>
      ) : (
        <Paper elevation={3} sx={{ p: 4 }}>
          {cart.map((item, index) => (
            <Box key={index} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="body1" color="textPrimary">{item.name}</Typography>
              <Typography variant="body1" color="textSecondary">${item.price.toFixed(2)}</Typography>
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="primary">Total:</Typography>
            <Typography variant="h6" color="primary">${total.toFixed(2)}</Typography>
          </Box>
          <Box mt={4}>
            <Button variant="contained" color="primary" component={Link} to="/checkout">Proceed to Checkout</Button>
          </Box>
        </Paper>
      )}
    </Container>
  );
}

export default Cart;