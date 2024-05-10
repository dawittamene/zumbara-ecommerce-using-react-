import React from 'react';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 flex justify-center items-center">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Checkout</h1>
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-gray-500 placeholder-opacity-50" placeholder="Enter your name" />
            </div>
            <div className="mb-6">
              <label htmlFor="address" className="block text-gray-800 font-bold mb-2">Address</label>
              <input type="text" id="address" name="address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-gray-500 placeholder-opacity-50" placeholder="Enter your address" />
            </div>
            <div className="mb-6">
              <label htmlFor="city" className="block text-gray-800 font-bold mb-2">City</label>
              <input type="text" id="city" name="city" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-gray-500 placeholder-opacity-50" placeholder="Enter your city" />
            </div>
            <div className="mb-6">
              <label htmlFor="country" className="block text-gray-800 font-bold mb-2">Country</label>
              <input type="text" id="country" name="country" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-gray-500 placeholder-opacity-50" placeholder="Enter your country" />
            </div>
            <div className="mb-8">
              <label htmlFor="zipcode" className="block text-gray-800 font-bold mb-2">Zip Code</label>
              <input type="text" id="zipcode" name="zipcode" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-gray-500 placeholder-opacity-50" placeholder="Enter your zip code" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Proceed to Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
