import React from 'react';
import Sidebar from './Sidebar';

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
   

<>
<div className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-950  mb-20">
  <Sidebar/>
    
  

  

  <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 dark:text-white text-gray-950 ">Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-4">
            <img src={item.imageUrl} alt={item.name} className="w-full  mb-4" />
            <h2 className="text-lg font-bold mb-2 dark:text-white text-gray-950">{item.name}</h2>
            <p className="text-gray-700 mb-2 dark:text-white ">Price: ${item.price.toFixed(2)}</p>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300">Remove from Wishlist</button>
          </div>
        ))}
      </div>
    </div>



</div>
</>

  );
    
    
};

export default Wishlist;
