import React from 'react'
import { GoSearch } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";




import Logo from '../../assets/logo.png'
// import DarkMode from './DarkMode';

const Navbar = ({theme, setTheme}) => {
  return (
    <div className=' shadow-md bg-white dark:bg-gray-950 dark:text-white duration-200 z-40'>
        {/* upper Navbar */}

        <div className=' bg-primary/40 py-2  dark:bg-gray-950 dark:text-white duration-200 '>
            <div className=' container flex items-center justify-between'>
                <div >
                <a className=' font-bold text-2xl sm:text-3xl flex gap-2 font-serif' href="/">
                    <img className='w-10' src={Logo} alt="" />
                    Zumbara E-commerce
                </a>
                </div>
                {/* search bar */}
                <div className=' flex justify-between gap-4 items-center'>
                    <div className='group relative hidden sm:block'>
                        <input type="text"  placeholder='Search here...'
                        className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300
                         rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'
                        />
                        <GoSearch className=' text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                    {/* order button */}
                <button 
                onClick={()=>alert(
                    "not work know"
                )}
                className=' bg-gradient-to-r from-primary to-secondary text-white px-4 py-1
                 rounded-full transition-all duration-200 flex items-center gap-3 group '
                >
                    <span
                    
                    className=' group-hover:block hidden transition-all duration-200 '
                    >Order</span>
                    <GiShoppingCart
                    className=' text-xl text-white drop-shadow-sm cursor-pointer'
                    />
                </button>
                {/* DarkMode switch */}
                <div className=' hidden sm:block'>
                    {
                        theme === "dark" ? (
                        <IoSunny 
                        onClick={() =>setTheme
                            ("light")}
                        className=' text-2xl'/>) :
                         (
                         <IoIosMoon 
                         onClick={() =>setTheme
                        ("dark")}
                        className=' text-2xl'/>)

                    }
                    
                </div>
                </div>
                
            </div>
        </div>
        {/* lower Navbar */}
        <div>

        </div>
    </div>
  )
}

export default Navbar