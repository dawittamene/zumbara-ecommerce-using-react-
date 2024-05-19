import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 mb-20">
      <div className="w-full md:w-64 dark:bg-gray-950 bg-white dark:text-white text-gray-950">
        <div className="p-4 text-2xl font-bold">Dawit tamene</div>
        <nav className="mt-6">
          <ul>
            <li className={`p-4 ${activeLink === 0 ? 'dark:bg-gray-950 bg-slate-100 ' : 'dark:hover:bg-gray-800 hover:bg-slate-200'}`}>
              <Link exact to="/customer-dashbord" className="block active" onClick={() => handleLinkClick(0)}>Dashboard</Link>
            </li>
            <li className={`p-4 ${activeLink === 1 ? 'dark:bg-gray-950 bg-slate-100 ' : 'dark:hover:bg-gray-800 hover:bg-slate-200'}`}>
              <Link to="#" className="block" onClick={() => handleLinkClick(1)}>Orders</Link>
            </li>
            <li className={`p-4 ${activeLink === 2 ? 'dark:bg-gray-950 bg-slate-100 ' : 'dark:hover:bg-gray-800 hover:bg-slate-200'}`}>
              <Link to="#" className="block" onClick={() => handleLinkClick(2)}>Whishlist</Link>
            </li>
            <li className={`p-4 ${activeLink === 3 ? 'dark:bg-gray-950 bg-slate-100 ' : 'dark:hover:bg-gray-800 hover:bg-slate-200'}`}>
              <Link to="#" className="block" onClick={() => handleLinkClick(3)}>Profile</Link>
            </li>
            <li className={`p-4 ${activeLink === 4 ? 'dark:bg-gray-950 bg-slate-100 ' : 'dark:hover:bg-gray-800 hover:bg-slate-200'}`}>
              <Link to="/logout" className="block" onClick={() => handleLinkClick(4)}>Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-10 text-gray-900">

        
        </div>
       

      

      



    </div>
    </>
  );
 
};

export default Orders;
