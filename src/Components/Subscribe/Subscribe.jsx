import React from 'react'
import Banner from '../../assets/website/orange-pattern.jpg'

const BannerImage = {
    backgroundImage:`url(${Banner})`,
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:"cover",
    height:'100%',
    width:'100%'
}

const Subscribe = () => {
  return (
    <div
    data-aos="zoom-in"
    className=' bg-gray-100 dark:bg-gray-800 text-white mb-20'
    style={BannerImage}
    >
        <div className=' container bg-blue-sm py-10'>
            <div
            className=' space-y-6 max-w-xl mx-auto'
            >
                <h1
                className=' text-2xl sm:text-4xl text-center font-[poppins] font-semibold sm:text-left'
                >Get Notified About New
                </h1>
                <input 
                data-aos="fade-up"
                type="text" placeholder='Enter Your Email' 
                className='w-full p-3' 
                />
            </div>

        </div>
    </div>
  )
}

export default Subscribe