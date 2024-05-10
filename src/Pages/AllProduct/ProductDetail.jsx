import React, { useState } from 'react';
import Image1 from '../../assets/women/women.png';
import Image2 from '../../assets/women/women2.jpg';
import Image3 from '../../assets/women/women3.jpg';
import Image4 from '../../assets/women/women4.jpg';
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const product = {
    id: 1,
    name: 'Example Product',
    price: '$99.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  const images = [Image1, Image2, Image3, Image4];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className=' dark:bg-gray-950 bg-white '>
      <div className="container mx-auto px-4 py-14 ">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 relative">
          <img src={images[currentImageIndex]} alt="Product" className="w-full h-auto rounded-lg shadow-md" />
          <button onClick={handlePrevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full shadow-md">
            Prev
          </button>
          <button onClick={handleNextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full shadow-md">
            Next
          </button>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{product.name}</h1>
          <p className="text-gray-700 dark:text-white text-lg mb-4">{product.description}</p>
          <p className="text-gray-900 dark:text-white text-xl font-bold mb-4 ">{product.price}</p>
          <button className=" bg-green-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            <Link to='/cart-page'><FaCartPlus/></Link>
            </button>
          <button className=" bg-red-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ml-5"><Link to="/wishlist-page"><FaHeart/></Link></button>

        </div>
      </div>
    </div>

    </div>

<div className='bg-white dark:bg-gray-950 -mt-16 mb-10'>
<div className='flex justify-start ml-10 mt-14'>
    <h1  className='text-center mt-10 cursor-pointer bg-primary text-white rounded-md py-1 px-6 capitalize text-xl'>
          Related Product
    </h1>
  </div>
<div className='mt-14 mb-12 '>
<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 py-8'>
    <div  data-aos="fade-up" className='space-y-3'>
    <Link to="/product-detail/women-t-shirt/1">
        <img src={Image1} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
     </Link>   
      <div>
        <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold dark:text-white text-gray-900'>Women T-Shirt</h3></Link>
        <p className='text-sm dark:text-white text-gray-900'>50$</p>
        <div className='flex items-center gap-1'>
          <FaStar className='text-yellow-400' />
          <span className='dark:text-white text-gray-900'>5.0</span>
        </div>
      </div>
    </div>

    <div  data-aos="fade-up" className='space-y-3'>
    <Link to="/product-detail/women-t-shirt/1">
        <img src={Image3} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
     </Link>   
      <div>
        <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold dark:text-white text-gray-900'>Women T-Shirt</h3></Link>
        <p className='text-sm dark:text-white text-gray-900'>50$</p>
        <div className='flex items-center gap-1'>
          <FaStar className='text-yellow-400' />
          <span className='dark:text-white text-gray-900'>5.0</span>
        </div>
      </div>
    </div>

    <div  data-aos="fade-up" className='space-y-3'>
    <Link to="/product-detail/women-t-shirt/1">
        <img src={Image4} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
     </Link>   
      <div>
        <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold dark:text-white text-gray-900'>Women T-Shirt</h3></Link>
        <p className='text-sm dark:text-white text-gray-900'>50$</p>
        <div className='flex items-center gap-1'>
          <FaStar className='text-yellow-400' />
          <span className='dark:text-white text-gray-900'>5.0</span>
        </div>
      </div>
    </div>

    <div  data-aos="fade-up" className='space-y-3'>
    <Link to="/product-detail/women-t-shirt/1">
        <img src={Image2} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
     </Link>   
      <div>
        <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold dark:text-white text-gray-900'>Women T-Shirt</h3></Link>
        <p className='text-sm dark:text-white text-gray-900'>50$</p>
        <div className='flex items-center gap-1'>
          <FaStar className='text-yellow-400' />
          <span className='dark:text-white text-gray-900'>5.0</span>
        </div>
      </div>
    </div>


    <div  data-aos="fade-up" className='space-y-3'>
    <Link to="/product-detail/women-t-shirt/1">
        <img src={Image1} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
     </Link>   
      <div>
        <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold dark:text-white text-gray-900'>Women T-Shirt</h3></Link>
        <p className='text-sm dark:text-white text-gray-900'>50$</p>
        <div className='flex items-center gap-1'>
          <FaStar className='text-yellow-400' />
          <span className='dark:text-white text-gray-900'>5.0</span>
        </div>
      </div>
    </div>


    <div  data-aos="fade-up" className='space-y-3'>
    <Link to="/product-detail/women-t-shirt/1">
        <img src={Image4} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
     </Link>   
      <div>
        <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold dark:text-white text-gray-900'>Women T-Shirt</h3></Link>
        <p className='text-sm dark:text-white text-gray-900'>50$</p>
        <div className='flex items-center gap-1'>
          <FaStar className='text-yellow-400' />
          <span className='dark:text-white text-gray-900'>5.0</span>
        </div>
      </div>
    </div>


    <div  data-aos="fade-up" className='space-y-3'>
    <Link to="/product-detail/women-t-shirt/1">
        <img src={Image3} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
     </Link>   
      <div>
        <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold dark:text-white text-gray-900'>Women T-Shirt</h3></Link>
        <p className='text-sm dark:text-white text-gray-900'>50$</p>
        <div className='flex items-center gap-1'>
          <FaStar className='text-yellow-400' />
          <span className='dark:text-white text-gray-900'>5.0</span>
        </div>
      </div>
    </div>


    <div  data-aos="fade-up" className='space-y-3'>
    <Link to="/product-detail/women-t-shirt/1">
        <img src={Image2} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
     </Link>   
      <div>
        <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold dark:text-white text-gray-900'>Women T-Shirt</h3></Link>
        <p className='text-sm dark:text-white text-gray-900'>50$</p>
        <div className='flex items-center gap-1'>
          <FaStar className='text-yellow-400' />
          <span className='dark:text-white text-gray-900'>5.0</span>
        </div>
      </div>
    </div>



  </div>
</div>
</div>

    </>
    
  );
};

export default ProductDetail;
