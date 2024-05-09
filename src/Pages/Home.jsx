import React from 'react'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'
import TopProducts from '../Components/TopProducts/TopProducts'
import Banner from '../Components/Banner/Banner'
import Subscribe from '../Components/Subscribe/Subscribe'
import Testimonials from '../Components/Testimonials/Testimonials'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <Products />
        <TopProducts />
        <Banner />
        <Subscribe />
        <Products />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home