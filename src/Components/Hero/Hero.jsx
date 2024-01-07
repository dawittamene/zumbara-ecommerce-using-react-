import React from 'react'
import Slider from 'react-slick';
import Image1 from '../../assets/hero/women.png';
import Image2 from '../../assets/hero/shopping.png';
import Image3 from '../../assets/hero/sale.png';
import { data } from 'autoprefixer';

const ImageList = [
    {
        id:1,
        image:Image1,
        title:"upto 50% off on all women wear",
        discrption:
        
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
        
    },

    {
        id:2,
        image:Image2,
        title:"upto 50% off on all women wear",
        discrption:
        
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
        
    },

    {
        id:3,
        image:Image3,
        title:"upto 50% off on all women wear",
        discrption:
        
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
        
    },
]

const Hero = () => {
        var settings = {
            dots:false,
            arrows:false,
            infinite:true,
            speed:800,
            slidesToScroll:1,
            autoplay:true,
            autoplayspeed:4000,
            cssEase: "ease-in-out",
            pushOnHover:false,
            pushOnFocus:true
        }
    
  return (
    <div className=' relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center 
    items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* background section */}
        <div className=' h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

        </div>
        {/* Hero section */}
        <div className=' container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {
                    ImageList.map((data) =>(
                        <div>
                <div className=' grid grid-cols-1 sm:grid-cols-2'>
                    {/* text section */}

                    <div className=' flex flex-col justify-center pt-12 sm:pt-0 sm:text-left text-center gap-4 order-2 sm:order-1 relative z-10'>
                    <h1 className=' text-5xl sm:text-6xl lg:text-7xl font-bold font-[poppins]'>{data.title}</h1>
                        <p className=' text-sm'>
                            {data.discrption}
                        </p>
                        <div>
                            <button
                            className=' bg-gradient-to-r from-primary to-secondary
                            text-white py-2 px-4 hover:scale-105 duration-200 rounded-full'
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                    {/* Image section */}
                    <div className=' order-1 sm:order-2 relative z-10'> 
                        <div>
                            <img src={data.image} alt="image1" 
                            className=' w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] sm:scale-125 lg:scale-125 object-contain mx-auto'
                            />
                        </div>
                    </div>



                </div>
            </div>


                    ))
                }
            

            </Slider>
            
        </div>
    </div>
  )
}

export default Hero