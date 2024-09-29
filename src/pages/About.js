import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <Container component="main" sx={{ py: 8 }}>
      <Typography variant="h3" color="primary" gutterBottom>About Frozen-Bites</Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Typography variant="body1" color="textSecondary" paragraph>
            Frozen-Bites has been serving smiles and scoops since 2010. Our passion is creating the perfect ice cream experience for every customer.
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            We use only the finest ingredients and craft our ice creams in small batches to ensure the highest quality and freshest taste.
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>Our Story</Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Founded by two ice cream enthusiasts, Sarah and Mike, Ice Cream Delight started as a small cart in the local farmer's market. Our unique flavors and commitment to quality quickly gained a loyal following, allowing us to open our first store in 2012.
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Today, we continue to innovate and create new flavors while staying true to our original mission: bringing joy through the perfect scoop of ice cream.
          </Typography>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default About;