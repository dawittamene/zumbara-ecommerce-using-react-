


import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from '../../assets/women/women.png';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoryProduct = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);

  const [categories, setCategories] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [offset, setOffset] = useState(0);
  const limit =1; // Number of items per page
  const baseUrl = 'http://127.0.0.1:8000/api/categories';

  useEffect(() => {
    fetchData(baseUrl, limit, offset);
  }, [limit, offset]);

  const fetchData = (url, limit, offset) => {
    fetch(`${url}?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.results);
        setTotalResult(data.count);
      });
  };

  const handlePageClick = (newOffset) => {
    setOffset(newOffset);
  };

  const totalPages = Math.ceil(totalResult / limit);
  const paginationLinks = [];
  for (let i = 0; i < totalPages; i++) {
    paginationLinks.push(
      <button
        key={i}
        className={`px-4 py-2 mx-1 ${offset / limit === i ? 'bg-secondary' : 'bg-primary'} text-white rounded-md`}
        onClick={() => handlePageClick(i * limit)}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <>
      <div className='flex justify-start ml-10 mt-14'>
        <h1 className='text-center mt-10 cursor-pointer bg-primary text-white rounded-md py-1 px-6 capitalize text-xl'>
          All Category Products
        </h1>
      </div>
      <div className='mt-14 mb-12'>
      
      <div className='container flex flex-wrap'>

      <div className="w-full md:w-1/4 pr-8 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="border p-4 mb-4 rounded-md">
              <Link to="/"><h3 className="font-semibold mb-2">Price Range</h3></Link>
            </div>
            <div className="border p-4 rounded-md">
              <Link to="/categories"><h3 className="font-semibold mb-2">Category</h3></Link>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
          {categories.map((category) => (
            <div key={category.id} data-aos="fade-up" className='space-y-3'>
              <Link to={`/category/${category.name}/${category.id}`}><img src={Image1} alt="" className='h-[220px] w-[150px] object-cover rounded-md' /></Link>
              <div>
                <Link to={`/category/${category.name}/${category.id}`}>
                  <h3 className='font-semibold'>{category.name}</h3>
                </Link>
                <p className='text-sm text-gray-500'>50$</p>
                <div className='flex items-center gap-1'>
                  <FaStar className='text-yellow-400' />
                  <span>5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>
          
          </div>


        

      <div className="flex justify-center mt-10">
        {paginationLinks}
      </div>
    </>
  );
}

export default CategoryProduct;
