import React, { useState } from 'react';
import { GoSearch } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { FaSortDown } from "react-icons/fa";
// import { FaCartPlus } from "react-icons/fa6";
import Logo from '../../assets/logo.png'
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className='shadow-md bg-white dark:bg-gray-950 dark:text-white duration-200 z-40'>
            {/* upper Navbar */}
            <div className='bg-primary/40 py-2 dark:bg-gray-950 dark:text-white duration-200'>
                <div className='container flex items-center justify-between'>
                    <div>
                        <Link to="/" className='font-bold text-2xl sm:text-3xl sm:flex gap-2 font-serif hidden '>
                            <img className='w-10' src={Logo} alt="" />
                            Zumbara E-commerce
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="sm:hidden ml-auto">
                        <button onClick={toggleMobileMenu} className="text-gray-500 focus:outline-none items-center text-center">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    {/* Search bar and other icons */}
                    <div className='flex justify-between gap-4 items-center sm:w-auto w-full'>
                        <div className='group relative hidden sm:block'>
                            <input type="text" placeholder='Search here...'
                                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300
                                rounded-full border border-gray-300 px-2 py-1 focus:outline-none
                                focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800'
                            />
                            <GoSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                        <button
                            onClick={() => alert(
                                "not work know"
                            )}
                            className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1
                            rounded-full transition-all duration-200 sm:flex items-center gap-3 group hidden'
                        >
                            <span
                                className='group-hover:block hidden transition-all duration-200 '
                            >Order</span>
                            <GiShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                        <div className='hidden sm:block'>
                            {
                                theme === "dark" ? (
                                    <IoSunny
                                        onClick={() => setTheme("light")}
                                        className='text-2xl cursor-pointer'
                                    />
                                ) : (
                                    <IoIosMoon
                                        onClick={() => setTheme("dark")}
                                        className='text-2xl cursor-pointer'
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile navbar */}
            {mobileMenuOpen && (
                <div className="sm:hidden">
                    <ul className="block">
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
                    </ul>
                </div>
            )}
            {/* lower Navbar */}
            <div className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    <li>
                        <Link to="/" className='inline-block px-4 hover:text-primary duration-200'>Home</Link>
                    </li>
                    
                    <li className='relative group cursor-pointer'>
                        <a href="/" className='flex items-center gap-[2px] py-2'>
                            My Account
                            <span className='group'>
                                <FaSortDown className='transition-all duration-200 group-hover:rotate-180' />
                            </span>
                            
                        </a>
                        
                        <div className='absolute z-[9999] hidden group-hover:block p-2 w-[150px] rounded-md text-black shadow-md bg-white'>
                            <ul>
                            <li>
                                <Link to="/customer-register" className='inline-block px-4 hover:text-primary duration-200'>Register</Link>
                            </li>   
                            <li>
                                <Link to="/customer-login" className='inline-block px-4 hover:text-primary duration-200'>Login</Link>
                            </li> 

                            <li>
                                <Link to="/customer-login" className='inline-block px-4 hover:text-primary duration-200'>Logout</Link>
                            </li> 
                            <li>
                                <Link to="/customer-dashbord" className='inline-block px-4 hover:text-primary duration-200'>Dashbord</Link>
                            </li> 
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/categories" className='inline-block px-4 hover:text-primary duration-200'>Categories</Link>
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
                            <li>
                                <Link to="/bestSelling" className='inline-block px-4 hover:text-primary duration-200'>Best Selling</Link>
                            </li>   
                            <li>
                                <Link to="/toprated" className='inline-block px-4 hover:text-primary duration-200'>Top Rated</Link>
                            </li> 
                             
                            </ul>
                        </div>
                    </li>
                    <li>
                    <Link to="/cart-page" className='inline-block px-4 hover:text-primary duration-200 relative'>
                    {/* Display cart item count */}
                    <span className='absolute -top-2 -right-2 bg-primary text-white px-2 py-1 rounded-full'>5</span>

                    {/* Cart icon */}
                    <GiShoppingCart className='text-4xl dark:text-white text-gray-900 drop-shadow-sm cursor-pointer' />
                    </Link>
                    </li> 
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
