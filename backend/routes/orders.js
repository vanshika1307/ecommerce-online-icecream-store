const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a new order
router.post('/add', async (req, res) => {
  const { fullName, address, city, zipCode, country, iceCreams } = req.body;

  const newOrder = new Order({
    fullName,
    address,
    city,
    zipCode,
    country,
    iceCreams,
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;