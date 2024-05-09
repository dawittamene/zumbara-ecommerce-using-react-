import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from '../assets/women/women.png';
import Image2 from '../assets/women/women2.jpg';
import Image3 from '../assets/women/women3.jpg';
import Image4 from '../assets/women/women4.jpg';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductData = [
  {
    id: 1,
    image: Image1,
    title: 'Women Ethnic',
    rating: 5.0,
    color: "white",
    aosDelay: '0'
  },
  {
    id: 2,
    image: Image2,
    title: 'Women Ethnic',
    rating: 4.5,
    color: "yellow",
    aosDelay: '100'
  },
  {
    id: 3,
    image: Image3,
    title: 'Women Ethnic',
    rating: 5.0,
    color: "red",
    aosDelay: '200'
  },
  {
    id: 4,
    image: Image4,
    title: 'Women Ethnic',
    rating: 5.0,
    color: "green",
    aosDelay: '300'
  },
  {
    id: 5,
    image: Image2,
    title: 'Women Ethnic',
    rating: 5.0,
    color: "yellow",
    aosDelay: '400'
  },
];

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
    <div className='mt-14 mb-12'>
      <div className='container flex flex-wrap'>
        {/* Side Filter */}
        <div className="w-full md:w-1/4 pr-8 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          {/* Example filter options */}
          <div className="border p-4 mb-4 rounded-md">
            <h3 className="font-semibold mb-2">Price Range</h3>
            {/* Your price range filter components */}
          </div>
          <div className="border p-4 rounded-md">
            <h3 className="font-semibold mb-2">Category</h3>
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
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {ProductData.map((data) => (
              <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay} className='space-y-3'>
                <img src={data.image} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-500'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Product Button */}
          <div className='flex justify-center'>
            <Link to="/allProduct" className='text-center mt-10 cursor-pointer bg-primary text-white rounded-md py-1 px-4'>
              View All Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProduct;
