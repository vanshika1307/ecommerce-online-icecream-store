import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IceCreamAnimation from './IceCreamAnimation';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch the cart from localStorage when the component mounts
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      // Clear the cart in localStorage after loading it
      localStorage.removeItem('cart');
    }
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <IceCreamAnimation />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-3xl font-bold text-pink-800 mb-6 text-shadow">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-pink-700 text-shadow">Your cart is empty.</p>
        ) : (
          <>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-6 mb-6">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4">
                  <span className="text-pink-800">{item.name}</span>
                  <span className="text-pink-700">${item.price.toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-pink-800">Total:</span>
                  <span className="font-semibold text-pink-800">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Link
                to="/"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}

export default Cart;