import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const CategoryProduct = () => {
  const navigate = useNavigate();
  const { categoryId, category_slug } = useParams();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const limit = 8; // Number of items per page
  const baseUrl = categoryId
    ? `http://127.0.0.1:8000/api/products/?category=${categoryId}`
    : 'http://127.0.0.1:8000/api/products/';

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get('page')) || 1;
    const currentOffset = (currentPage - 1) * limit;
    setOffset(currentOffset);
    fetchData(baseUrl, currentOffset, limit);
  }, [categoryId, location.search]);

  const fetchData = (url, offset, limit) => {
    fetch(`${url}&limit=${limit}&offset=${offset}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.results);
        setTotalCount(data.count);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Handle error state here
      });
  };

  const handlePageClick = (newPage) => {
    navigate(`/category/${categoryId}/${category_slug}/?page=${newPage}`);
  };

  const totalPages = Math.ceil(totalCount / limit);
  const paginationLinks = [];
  for (let i = 0; i < totalPages; i++) {
    paginationLinks.push(
      <button
        key={i}
        className={`px-4 py-2 mx-1 ${offset / limit === i ? 'bg-secondary' : 'bg-primary'} text-white rounded-md`}
        onClick={() => handlePageClick(i + 1)}
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
        <div className='w-full md:w-3/4'>
          <div className='text-center max-w-[600px] mx-auto mb-10'>
            {/* Add any additional content here */}
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            {paginationLinks}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryProduct;
