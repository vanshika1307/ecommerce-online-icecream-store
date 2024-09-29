import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <Container component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h2" color="primary" gutterBottom>Welcome to Frozen-Bites</Typography>
        <Typography variant="h5" color="textSecondary" paragraph>Discover our delicious range of handcrafted ice creams!</Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" component={Link} to="/menu">Explore Menu</Button>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Home;