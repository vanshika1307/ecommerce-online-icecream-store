import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IceCreamAnimation from "./IceCreamAnimation";
import icecream from "../images/choco.jpg";

const initialIceCreams = [
  {
    id: 1,
    name: "Vanilla Dream",
    price: 3.99,
    image:
      "https://plus.unsplash.com/premium_photo-1661541172813-261776d4bde0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFuaWxsYSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Chocolate Bliss",
    price: 4.49,
    image:
      icecream,
  },
  {
    id: 3,
    name: "Strawberry Sensation",
    price: 4.29,
    image:
      "https://media.istockphoto.com/id/678771308/photo/strawberry-cream-ice-cream-in-white-bowl.webp?b=1&s=170667a&w=0&k=20&c=rWIcY5ikslmWwM9OqeWb3z3zZafYk137lAPwsN3eGaI=",
  },
  {
    id: 4,
    name: "Mint Chip Madness",
    price: 4.79,
    image:
      "https://reallifedinner.com/wp-content/uploads/2021/05/Mint_Chocolate_Chip_Ice_Cream_Cake_6.jpg",
  },
  {
    id: 5,
    name: "Cookies & Cream Delight",
    price: 4.99,
    image:
      "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/cookies-and-cream-ice-cream_0422.jpg?itok=-gxLG1uG",
  },
  {
    id: 6,
    name: "Salted Caramel Swirl",
    price: 5.19,
    image:
      "https://i3.wp.com/lifecurrentsblog.com/wp-content/uploads/2018/05/MG_5435.jpg",
  },
];


function Menu() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (iceCream) => {
    const updatedCart = [...cart, iceCream];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#ffcb70]/40 to-[#ff7070]/40 overflow-hidden">
      <IceCreamAnimation />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold text-[#8B4513] mb-8 text-center drop-shadow-lg">
          Our Ice Cream Menu
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialIceCreams.map((iceCream) => (
            <div
              key={iceCream.id}
              className="group relative bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 p-6">
                <img
                  src={iceCream.image}
                  alt={iceCream.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-[#8B4513] mb-2">
                  {iceCream.name}
                </h2>
                <p className="text-[#4A2511] mb-4">${iceCream.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(iceCream)}
                  className="bg-[#D2691E]/80 hover:bg-[#D2691E] text-white px-4 py-2 rounded transition-colors w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/cart"
            className="inline-block bg-[#D2691E]/80 hover:bg-[#D2691E] text-white px-6 py-3 rounded-lg transition-colors"
          >
            Go to Cart ({cart.length} items)
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;