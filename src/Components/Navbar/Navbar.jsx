import React from 'react';
import { GoSearch } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { FaSortDown } from "react-icons/fa";
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const DropdownMenu = [
  {
    id: 1,
    name: "Trending Products",
    link: "/"
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/bestselling"
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/toprated"
  },
];

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-950 dark:text-white duration-200 z-40'>
      {/* upper Navbar */}
      <div className='bg-primary/40 py-2 dark:bg-gray-950 dark:text-white duration-200'>
        <div className='container flex items-center justify-between'>
          <div>
            <Link to="/" className='font-bold text-2xl sm:text-3xl flex gap-2 font-serif'>
              <img className='w-10' src={Logo} alt="" />
              Zumbara E-commerce
            </Link>
          </div>
          {/* search bar */}
          <div className='flex justify-between gap-4 items-center'>
            <div className='group relative hidden sm:block'>
              <input
                type="text"
                placeholder='Search here...'
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300
                  rounded-full border border-gray-300 px-2 py-1 focus:outline-none
                  focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800'
              />
              <GoSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>
            {/* order button */}
            <button
              onClick={() => alert("not working yet")}
              className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1
                rounded-full transition-all duration-200 sm:flex items-center gap-3 group hidden'
            >
              <span
                className='group-hover:block hidden transition-all duration-200'
              >Order</span>
              <GiShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer' />
            </button>
            {/* DarkMode switch */}
            <div className='hidden sm:block'>
              {theme === "dark" ? (
                <IoSunny
                  onClick={() => setTheme("light")}
                  className='text-2xl cursor-pointer'
                />
              ) : (
                <IoIosMoon
                  onClick={() => setTheme("dark")}
                  className='text-2xl cursor-pointer'
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          <li>
            <Link to="/" className='inline-block px-4 hover:text-primary duration-200'>Home</Link>
          </li>
          <li>
            <Link to="/toprated" className='inline-block px-4 hover:text-primary duration-200'>Top Rated</Link>
          </li>
          <li>
            <Link to="/kidswear" className='inline-block px-4 hover:text-primary duration-200'>Kids Wear</Link>
          </li>
          <li>
            <Link to="/menswear" className='inline-block px-4 hover:text-primary duration-200'>Mens Wear</Link>
          </li>
          <li>
            <Link to="/womenwear" className='inline-block px-4 hover:text-primary duration-200'>Women Wear</Link>
          </li>
          <li>
            <Link to="/electronics" className='inline-block px-4 hover:text-primary duration-200'>Electronics</Link>
          </li>
          {/* simple drop down  */}
          <li className='relative group cursor-pointer'>
            <a href="/" className='flex items-center gap-[2px] py-2'>
              Trending Products
              <span className='group'>
                <FaSortDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block p-2 w-[150px] rounded-md text-black shadow-md bg-white'>
              <ul>
                {DropdownMenu.map((data) => (
                  <li key={data.id}>
                    <Link to={data.link} className='inline-block w-full p-2 rounded-md hover:bg-primary/20'>
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;