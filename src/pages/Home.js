import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import IceCreamAnimation from "./IceCreamAnimation";

function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <IceCreamAnimation />
      <Container
        component="main"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="h2" 
            color="primary" 
            gutterBottom
            sx={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              fontWeight: 'bold',
            }}
          >
            Welcome to Frozen-Bites
          </Typography>
          <Typography 
            variant="h5" 
            color="textSecondary" 
            paragraph
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              maxWidth: '600px',
              textAlign: 'center',
              margin: '0 auto',
            }}
          >
            Discover our delicious range of handcrafted ice creams!
          </Typography>
          <Box mt={4} sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/menu"
              size="large"
              sx={{
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
                },
              }}
            >
              Explore Menu
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Home;