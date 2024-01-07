import React from 'react'
import Image1 from '../../assets/shirt/shirt.png'
import Image2 from '../../assets/shirt/shirt2.png'
import Image3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa'



const ProductData = [
    {
        id:1,
        image:Image1,
        title:'Women Ethnic',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas cumque placeat possimus?"
        

    },
    {
        id:2,
        image:Image2,
        title:'Women Ethnic',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas cumque placeat possimus?"
        

    },
    {
        id:3,
        image:Image3,
        title:'Women Ethnic',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas cumque placeat possimus?"
        

    },
    
 
   
]

const TopProducts = () => {
  return (
    <div>
        <div className=' container'>
            {/* Header section */}
            <div className=' text-left  mb-24'>
                <p 
                data-aos="fade-up"
                className=' text-sm text-primary'>Top Rated Products For You</p>
                <h1
                data-aos="fade-up"
                className=' text-3xl font-bold font-[poppins]'>Best Products</h1>
                <p
                    data-aos="fade-up" className=' text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Nihil enim adipisci deleniti?
                </p>
                
            </div>

            {/* Body section */}
            <div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 place-items-center md:gap-5'>
                    {/* cart section */}

                    {
                        ProductData.map((data) =>(
                            <div 
                            data-aos="zoom-in"
                            className=' rounded-2xl text-black dark:bg-gray-800
                             hover:bg-black/40 dark:hover:bg-primary hover:text-white
                              relative shadow-xl duration-300 group max-w-[300px]
                             '>
                                {/* image section  */}
                                <div
                                className=' h-[100px]'>
                                    <img src={data.image} alt=""
                                    className=' max-w-[140px] block mx-auto transform -translate-y-20 
                                    group-hover:scale-105 duration-300 drop-shadow-md'
                                    />
                                </div>
                                {/* details section */}

                                <div className='p-4 text-center'>
                                    {/* star rating */}
                                    <div className=' w-full flex items-center justify-center gap-1'>
                                        <FaStar className=' text-yellow-500'/>
                                        <FaStar className=' text-yellow-500'/>
                                        <FaStar className=' text-yellow-500'/>
                                        <FaStar className=' text-yellow-500'/>
                                    </div>
                                    <h1 className=' text-xl font-bold '>{data.title}</h1>
                                    <p
                                     className=' text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'
                                    >{data.description}</p>

                                    <button 
                                    className=' bg-primary hover:scale-105 duration-300 text-white
                                     py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                                    //  onClick={handleOrderPopup}
                                    >
                                        Order Now

                                    </button>
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

export default TopProducts