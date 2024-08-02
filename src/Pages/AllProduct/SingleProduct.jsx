import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from '../../assets/women/women.png';
// import Image2 from '../../assets/women/women2.jpg';
// import Image3 from '../../assets/women/women3.jpg';
// import Image4 from '../../assets/women/women4.jpg';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';





const SingleProduct = (props) => {
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
    
    
          {/* Body section */}
          <div className='mt-14 mb-12'>
              <div  data-aos="fade-up" className='space-y-3'>
              <Link to={`/allProduct/product/${props.product.slug}/${props.product.id}`}>
                  <img src={Image1} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
               </Link>   
                <div>
                  <Link to={`product/${props.product.slug}/${props.product.id}`}><h3 className='font-semibold'>{props.product.name}</h3></Link>
                  <p className='text-sm text-gray-500'>{props.product.price}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>5.0</span>
                  </div>
                </div>
              

             

            

            

              



             
              </div>
          </div>
          {/* View All Product Button */}
          


          
          {/* View All Product Button */}
          
        
    </>
  )
}

export default SingleProduct;
