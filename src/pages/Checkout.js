import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Prepare the order data
    const orderData = { ...formData, iceCreams: cart };
  
    try {
      // Submit order data to backend
      await axios.post('http://localhost:5000/orders/add', orderData);
  
      console.log('Order submitted:', orderData);
  
      // Clear cart from localStorage
      localStorage.removeItem('cart');
    } catch (err) {
      console.error('Error submitting order:', err);
      // Optionally show an alert or message to the user
      alert('Error submitting order, but proceeding to payment page.');
    }
  
    // Navigate to payment page regardless of the Axios request outcome
    navigate('/payment');
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-pink-800 mb-6">Checkout</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-pink-800 mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-pink-800 mb-2">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-pink-800 mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-pink-800 mb-2">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-pink-800 mb-2">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;