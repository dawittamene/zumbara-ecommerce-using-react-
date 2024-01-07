import React from 'react'
import Image1 from '../../assets/women/women.png'
import Image2 from '../../assets/women/women2.jpg'
import Image3 from '../../assets/women/women3.jpg'
import Image4 from '../../assets/women/women4.jpg'
import { FaStar } from 'react-icons/fa'


const ProductData = [
    {
        id:1,
        image:Image1,
        title:'Women Ethnic',
        rating:5.0,
        color:"white",
        aosDelay:'0'

    },
    {
        id:2,
        image:Image2,
        title:'Women Ethnic',
        rating:4.5,
        color:"yellow",
        aosDelay:'0'

    },
    {
        id:3,
        image:Image3,
        title:'Women Ethnic',
        rating:5.0,
        color:"red",
        aosDelay:'0'

    },
    {
        id:4,
        image:Image4,
        title:'Women Ethnic',
        rating:5.0,
        color:"green",
        aosDelay:'0'

    },
    {
        id:5,
        image:Image2,
        title:'Women Ethnic',
        rating:5.0,
        color:"yellow",
        aosDelay:'0'

    },
]

const Products = () => {
  return (
    <div className=' mt-14 mb-12'>
        <div className=' container'>
            
            {/* Header section */}
            <div className=' text-center max-w[600px] mx-auto mb-10'>
                <p 
                data-aos="fade-up"
                className=' text-sm text-primary'>Top Selling Products For You</p>
                <h1
                data-aos="fade-up"
                className=' text-3xl font-bold font-[poppins]'>Products</h1>
                <p
                data-aos="fade-up"
                 className=' text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Nihil enim adipisci deleniti?
                </p>
            </div>


            {/* Body section */}
            <div>
                <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* carts section */}
                   
                        {
                            ProductData.map((data) =>(
                                <div key={data.id}
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                className=' space-y-3'
                                >
                                    <img src={data.image} alt="" 
                                    className=' h-[220px] w-[150px] object-cover rounded-md'
                                    />
                                    <div>
                                        <h3 className=' font-semibold'>{data.title}</h3>
                                        <p className=' text-sm text-gray-500'>{data.color}</p>
                                        <div className=' flex items-center gap-1'>
                                            <FaStar className=' text-yellow-400' />
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    

                </div>
            </div>

        </div>
    </div>
  )
}

export default Products