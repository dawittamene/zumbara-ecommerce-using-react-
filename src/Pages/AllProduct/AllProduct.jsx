import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from '../../assets/women/women.png';
import Image2 from '../../assets/women/women2.jpg';
import Image3 from '../../assets/women/women3.jpg';
import Image4 from '../../assets/women/women4.jpg';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';





const AllProduct = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <div className='flex justify-start ml-10 mt-14'>
            <h1  className='text-center mt-10 cursor-pointer bg-primary text-white rounded-md py-1 px-6 capitalize text-xl'>
               All Product
            </h1>
          </div>
    <div className='mt-14 mb-12'>
        
      <div className='container flex flex-wrap'>
        {/* Side Filter */}
        <div className="w-full md:w-1/4 pr-8 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          {/* Example filter options */}
          <div className="border p-4 mb-4 rounded-md">
            <Link to="/"><h3 className="font-semibold mb-2">Price Range</h3></Link>
            {/* Your price range filter components */}
          </div>
          <div className="border p-4 rounded-md">
            <Link to="/categories"><h3 className="font-semibold mb-2">Category</h3></Link>
            {/* Your category filter components */}
          </div>
        </div>
        {/* Product Listing */}
        <div className='w-full md:w-3/4'>
          {/* Header section */}
          <div className='text-center max-w-[600px] mx-auto mb-10'>
            {/* Header content */}
          </div>
          {/* Body section */}
          <div className='mt-14 mb-12'>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
              <div  data-aos="fade-up" className='space-y-3'>
              <Link to="/product-detail/women-t-shirt/1">
                  <img src={Image1} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
               </Link>   
                <div>
                  <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold'>Women T-Shirt</h3></Link>
                  <p className='text-sm text-gray-500'>50$</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              <div  data-aos="fade-up" className='space-y-3'>
              <Link to="/product-detail/women-t-shirt/1">
                  <img src={Image2} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
               </Link>   
                <div>
                  <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold'>Women T-Shirt</h3></Link>
                  <p className='text-sm text-gray-500'>50$</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              <div  data-aos="fade-up" className='space-y-3'>
              <Link to="/product-detail/women-t-shirt/1">
                  <img src={Image3} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
               </Link>   
                <div>
                  <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold'>Women T-Shirt</h3></Link>
                  <p className='text-sm text-gray-500'>50$</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              <div  data-aos="fade-up" className='space-y-3'>
              <Link to="/product-detail/women-t-shirt/1">
                  <img src={Image4} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
               </Link>   
                <div>
                  <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold'>Women T-Shirt</h3></Link>
                  <p className='text-sm text-gray-500'>50$</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>5.0</span>
                  </div>
                </div>
              </div>



              <div  data-aos="fade-up" className='space-y-3'>
              <Link to="/product-detail/women-t-shirt/1">
                  <img src={Image1} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
               </Link>   
                <div>
                  <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold'>Women T-Shirt</h3></Link>
                  <p className='text-sm text-gray-500'>50$</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              <div  data-aos="fade-up" className='space-y-3'>
              <Link to="/product-detail/women-t-shirt/1">
                  <img src={Image2} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
               </Link>   
                <div>
                  <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold'>Women T-Shirt</h3></Link>
                  <p className='text-sm text-gray-500'>50$</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              <div  data-aos="fade-up" className='space-y-3'>
              <Link to="/product-detail/women-t-shirt/1">
                  <img src={Image3} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
               </Link>   
                <div>
                  <Link to="/product-detail/women-t-shirt/1"><h3 className='font-semibold'>Women T-Shirt</h3></Link>
                  <p className='text-sm text-gray-500'>50$</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              <div  data-aos="fade-up" className='space-y-3'>
              <Link to="/product-detail/women-t-shirt/1">
                  <img src={Image4} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
               </Link>   
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
        </div>


          
          {/* View All Product Button */}
          
        </div>
      </div>
    </>
  )
}

export default AllProduct;
