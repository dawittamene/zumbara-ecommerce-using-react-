import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from '../../assets/women/women.png';

import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  return (
    <>
    <div className='flex justify-start ml-10 mt-14'>
            <h1  className='text-center mt-10 cursor-pointer bg-primary text-white rounded-md py-1 px-6 capitalize text-xl'>
               Women T-Shirt Product
            </h1>
          </div>
    <div className='mt-14 mb-12'>
        
      
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
              <div  data-aos="fade-up" className='space-y-3'>
                <img src={Image1} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                <div>
                  <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold'>Women T-Shirt</h3></Link>
                  <p className='text-sm text-gray-500'>50$</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

             
          </div>
          {/* View All Product Button */}
          
        </div>
      
    </>
  )
}

export default ProductDetail;
