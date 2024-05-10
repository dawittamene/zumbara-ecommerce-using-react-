import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Dummy cart items data
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 49.99,
      quantity: 3,
    },
  ];

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-2">Price: ${item.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-2">Quantity: {item.quantity}</p>
            <p className="text-gray-700 mb-4">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300">Remove</button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Total Price: ${calculateTotalPrice().toFixed(2)}</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"><Link to="/checkout-page">Checkout</Link></button>
      </div>
    </div>
  );
};

export default Cart;
