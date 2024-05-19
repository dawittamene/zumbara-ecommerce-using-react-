import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="w-full md:w-64 bg-gray-800 text-white">
        <div className="p-4 text-2xl font-bold">Dawit tamene</div>
        <nav className="mt-6">
          <ul>
            <li className={`p-4 ${activeLink === 0 ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <Link exact to="/customer-dashbord" className="block active" onClick={() => handleLinkClick(0)}>Dashboard</Link>
            </li>
            <li className={`p-4 ${activeLink === 1 ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <Link to="#" className="block" onClick={() => handleLinkClick(1)}>Orders</Link>
            </li>
            <li className={`p-4 ${activeLink === 2 ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <Link to="#" className="block" onClick={() => handleLinkClick(2)}>Whishlist</Link>
            </li>
            <li className={`p-4 ${activeLink === 3 ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <Link to="#" className="block" onClick={() => handleLinkClick(3)}>Profile</Link>
            </li>
            <li className={`p-4 ${activeLink === 4 ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <Link to="/logout" className="block" onClick={() => handleLinkClick(4)}>Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-10 text-gray-900">
        <button className=' bg-gray-900 px-14 py-4 rounded-md hover:bg-gray-950 text-white capitalize text-2xl ml-5'>
          Total Orders
          <h4>100</h4>
        </button>
      </div>

      <div className="flex-1 p-10 text-gray-900">
        <button className=' bg-gray-900 px-14 py-4 rounded-md hover:bg-gray-950 text-white capitalize text-2xl ml-5'>
          Total Wishlist
          <h4>100</h4>
        </button>
      </div>

      <div className="flex-1 p-10 text-gray-900">
        <button className=' bg-gray-900 px-14 py-4 rounded-md hover:bg-gray-950 text-white capitalize text-2xl ml-5'>
          Total Addresses
          <h4>100</h4>
        </button>
      </div>



    </div>


    </>
  );
 
};

export default Dashboard;
