import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import IceCreamAnimation from "./IceCreamAnimation";

function About() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <IceCreamAnimation />
      <Container
        component="main"
        sx={{
          py: 8,
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(255, 248, 240, 0.7)", // Light cream color with transparency
          borderRadius: 4,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <Typography
          variant="h1" // Changed from h3 to h1 for the main heading
          gutterBottom
          sx={{
            color: "#8B4513", // Chocolate brown color
            paddingX: "15px",
            textShadow: "2px 2px 4px rgba(139, 69, 19, 0.1)",
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3rem" }, // Adjust for responsive font size
          }}
        >
          About Frozen-Bites
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            backgroundColor: "transparent",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="body1" sx={{ color: "#4A2511", mb: 2 }}>
              {" "}
              {/* Dark brown text */}
              Frozen-Bites has been serving smiles and scoops since 2010. Our
              passion is creating the perfect ice cream experience for every
              customer.
            </Typography>

            <Typography variant="body1" sx={{ color: "#4A2511", mb: 2 }}>
              We use only the finest ingredients and craft our ice creams in
              small batches to ensure the highest quality and freshest taste.
            </Typography>
            <br />

            <Typography
              variant="h1" // Changed from h3 to h1 for the main heading
              gutterBottom
              sx={{
                color: "#8B4513", // Chocolate brown color
                paddingX: "0px",
                textShadow: "2px 2px 4px rgba(139, 69, 19, 0.1)",
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", md: "3rem" }, // Adjust for responsive font size
              }}
            >
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ color: "#4A2511", mb: 2 }}>
              Founded by two ice cream enthusiasts, Sarah and Mike, Ice Cream
              Delight started as a small cart in the local farmer's market. Our
              unique flavors and commitment to quality quickly gained a loyal
              following, allowing us to open our first store in 2012.
            </Typography>
            <Typography variant="body1" sx={{ color: "#4A2511" }}>
              Today, we continue to innovate and create new flavors while
              staying true to our original mission: bringing joy through the
              perfect scoop of ice cream.
            </Typography>
          </motion.div>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;
