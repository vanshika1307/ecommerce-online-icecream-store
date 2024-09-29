import React, { useState } from 'react';

const initialIceCreams = [
  { id: 1, name: 'Vanilla Dream', price: 3.99, image: 'https://plus.unsplash.com/premium_photo-1661541172813-261776d4bde0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFuaWxsYSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fHww' },
  { id: 2, name: 'Chocolate Bliss', price: 4.49, image: 'https://media.istockphoto.com/id/1181806633/photo/chocolate-ice-cream.jpg?s=2048x2048&w=is&k=20&c=_8Rw6pkm9zscoPJe1lJxXrsYKDDYRBv6v0yh28nNFSE=' },
  { id: 3, name: 'Strawberry Sensation', price: 4.29, image: 'https://media.istockphoto.com/id/678771308/photo/strawberry-cream-ice-cream-in-white-bowl.webp?b=1&s=170667a&w=0&k=20&c=rWIcY5ikslmWwM9OqeWb3z3zZafYk137lAPwsN3eGaI=' },
  { id: 4, name: 'Mint Chip Madness', price: 4.79, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6-q4E5_2irayuASLmImDEnMSG6h5neX8tg&s' },
  { id: 5, name: 'Cookies & Cream Delight', price: 4.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1ClDOedY91yCd9tL_A84dEHoI87ZVbIzTw&s' },
  { id: 6, name: 'Salted Caramel Swirl', price: 5.19, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBC4mj0K58XYOg0dPt0_QzDlFrKhNWUhJrQ&s' },
]

function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (iceCream) => {
    setCart([...cart, iceCream]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-pink-800 mb-6">Our Ice Cream Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialIceCreams.map((iceCream) => (
          <div key={iceCream.id} className="bg-white rounded-lg shadow-md p-6">
            <img src={iceCream.image} alt={iceCream.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-pink-800 mb-2">{iceCream.name}</h2>
            <p className="text-pink-700 mb-4">${iceCream.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(iceCream)}
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
