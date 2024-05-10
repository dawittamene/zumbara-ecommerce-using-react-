import React from 'react';

const Wishlist = () => {
  // Dummy wishlist items data
  const wishlistItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 39.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={item.imageUrl} alt={item.name} className="w-full h-auto mb-4" />
            <h2 className="text-lg font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-2">Price: ${item.price.toFixed(2)}</p>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300">Remove from Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
