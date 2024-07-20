import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const AllProduct = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);

  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 2; // Number of items per page
  const baseUrl = 'http://127.0.0.1:8000/api/products';

  useEffect(() => {
    fetchData(baseUrl, offset, limit);
  }, [offset]);

  const fetchData = (url, offset, limit) => {
    fetch(`${url}?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
        setTotalCount(data.count);
      });
  };

  const handlePageClick = (newOffset, page) => {
    setOffset(newOffset);
    navigate(`/allProduct?page=${page}`);
  };

  const totalPages = Math.ceil(totalCount / limit);
  const paginationLinks = [];
  for (let i = 0; i < totalPages; i++) {
    paginationLinks.push(
      <button
        key={i}
        className={`px-4 py-2 mx-1 ${offset / limit === i ? 'bg-secondary' : 'bg-primary'} text-white rounded-md`}
        onClick={() => handlePageClick(i * limit, i + 1)}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <>
      <div className='flex justify-start ml-10 mt-14'>
        <h1 className='text-center mt-10 cursor-pointer bg-primary text-white rounded-md py-1 px-6 capitalize text-xl'>
          All Product
        </h1>
      </div>
      <div className='mt-14 mb-12'>
        <div className='container flex flex-wrap'>
          {/* Side Filter */}
          <div className="w-full md:w-1/4 pr-8 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="border p-4 mb-4 rounded-md">
              <Link to="/"><h3 className="font-semibold mb-2">Price Range</h3></Link>
            </div>
            <div className="border p-4 rounded-md">
              <Link to="/categories"><h3 className="font-semibold mb-2">Category</h3></Link>
            </div>
          </div>
          {/* Product Listing */}
          <div className='w-full md:w-3/4'>
            <div className='text-center max-w-[600px] mx-auto mb-10'>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
              {products.map((product) => (
                <SingleProduct key={product.id} title={product.name} price={product.price} />
              ))}
            </div>
            <div className="flex justify-center mt-10">
              {paginationLinks}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProduct;
