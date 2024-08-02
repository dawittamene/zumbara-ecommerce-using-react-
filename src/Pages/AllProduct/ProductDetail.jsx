import React, { useEffect, useState } from 'react';
import { FaCartPlus, FaHeart, FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId, product_slug } = useParams();
  const baseUrl = 'http://127.0.0.1:8000/api/';
  const [productData, setProductData] = useState(null);
  const [tagProduct, setTagProduct] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (productId) {
      fetchData(`${baseUrl}product/${productId}`);
    }
  }, [productId]);

  const fetchData = async (url) => {
    console.log('Fetching data from URL:', url);
    try {
      const response = await fetch(url);
      console.log('API Response:', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data received:', data);
      setProductData(data);
      setTagProduct(data.tag_list);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const tagLinks = tagProduct.map((tag, index) => (
    <Link key={index} className='text-white ml-5 bg-gray-500 p-1 rounded-sm' to={`/products/${tag.trim()}`}>
      {tag}
    </Link>
  ));

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? productData.product_image.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === productData.product_image.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className='dark:bg-gray-950 bg-white'>
        <div className="container mx-auto px-4 py-14">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              {productData && productData.product_image ? (
                productData.product_image.length >= 2 ? (
                  <div className="relative">
                    <img src={productData.product_image[currentImageIndex].image} alt="Product" className="w-full h-auto rounded-lg shadow-md" />
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full shadow-md"
                    >
                      Prev
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full shadow-md"
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <img src={productData.product_image[0].image} alt="Product" className="w-full h-auto rounded-lg shadow-md" />
                )
              ) : (
                <p>Loading images...</p>
              )}
            </div>
            <div className="md:w-1/2 md:pl-8">
              {productData ? (
                <>
                  <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{productData.name}</h1>
                  <p className="text-gray-700 dark:text-white text-lg mb-4">{productData.detail}</p>
                  <p className="text-gray-900 dark:text-white text-xl font-bold mb-4">${productData.price}</p>
                  <button className="bg-green-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                    <Link to='/cart-page'><FaCartPlus /></Link>
                  </button>
                  <button className="bg-red-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ml-5">
                    <Link to="/wishlist-page"><FaHeart /></Link>
                  </button>
                  <div className='m-8'>
                    {tagLinks}
                  </div>
                </>
              ) : (
                <p>Loading product details...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white dark:bg-gray-950 -mt-16 mb-10'>
        <div className='flex justify-start ml-10 mt-14'>
          <h1 className='text-center mt-10 cursor-pointer bg-primary text-white rounded-md py-1 px-6 capitalize text-xl'>
            Related Product
          </h1>
        </div>
        <div className='mt-14 mb-12'>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 py-8'>
            {productData && productData.product_image && productData.product_image.map((image, index) => (
              <div key={index} data-aos="fade-up" className='space-y-3'>
                <Link to={`/product-detail/${product_slug}/${productId}`}>
                  <img src={image.image} alt="Product" className='h-[220px] w-[150px] object-cover rounded-md' />
                </Link>
                <div>
                  <Link to={`/product-detail/${product_slug}/${productId}`}><h3 className='font-semibold dark:text-white text-gray-900'>{productData.name}</h3></Link>
                  <p className='text-sm dark:text-white text-gray-900'>${productData.price}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span className='dark:text-white text-gray-900'>5.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
