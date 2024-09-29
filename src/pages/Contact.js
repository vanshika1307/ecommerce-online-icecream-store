import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import IceCreamAnimation from "./IceCreamAnimation";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setFormData({ name: "", email: "" });
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to right, #ffcb70 0%, #ff7070 300%)",
      }}
    >
      <IceCreamAnimation />
      <Container
        component="main"
        sx={{ py: 8, position: "relative", zIndex: 1 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "#8B4513", // Chocolate brown for the title to contrast the background
            textShadow: "2px 2px 4px rgba(139, 69, 19, 0.3)", // Light shadow for better readability
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Typography>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: "rgba(255, 248, 240, 0.85)",
            borderRadius: 4,
          }}
        >
          {submitStatus === "success" && (
            <Alert severity="success" sx={{ mb: 4 }}>
              Thank you for your message. We'll get back to you soon!
            </Alert>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "4px",
                    "& label": { color: "#8B4513" }, // Matching label color
                    "& input": { color: "#4A2511" }, // Dark brown input text
                  }}
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
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "4px",
                    "& label": { color: "#8B4513" }, // Matching label color
                    "& input": { color: "#4A2511" }, // Dark brown input text
                  }}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#D2691E", // Chocolate color
                  "&:hover": { backgroundColor: "#C7611A" },
                  color: "#FFF",
                }}
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </Paper>
      </Container>
    </Box>
  );
}

export default Contact;
