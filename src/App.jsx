import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from "./Components/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';


import Home from "./Pages/Home";
import Toprated from "./Pages/Toprated";

import AllProduct from "./Pages/AllProduct/AllProduct";
import BestSelling from "./Pages/BestSelling";
import Category from "./Pages/AllProduct/Category";
import CategoryProduct from "./Pages/AllProduct/CategoryProduct";
import ProductDetail from "./Pages/AllProduct/ProductDetail";
import CheckoutPage from "./Pages/AllProduct/Checkout";
import Cart from "./Pages/AllProduct/Cart";
import Wishlist from "./Customer/Wishlist";
import Register from "./Customer/Register";
import Login from "./Customer/Login";
import Dashbord from "./Customer/Dashboard";
import Orders from "./Customer/Orders";
import TagProduct from "./Pages/AllProduct/TagProduct";



function App() {

  useEffect(() =>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100
    });
    AOS.refresh()
  }, [])
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() =>{
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
      element.classList.remove("dark")
      localStorage.getItem("theme", "light");
    }
  }, [theme])

  return (
    <>
      <div>
        

     <Router>
     <Navbar theme={theme} setTheme={setTheme}/>
      
        
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/customer-register" element={<Register/>} />
        <Route path="/customer-login" element={<Login/>} />
        <Route path="/customer-dashbord" element={<Dashbord/>} />
        <Route path="/customer-orders" element={<Orders/>} />


        <Route path="/toprated" element={<Toprated/>} />
        <Route path="/allProduct" element={<AllProduct/>} />
        <Route path="/bestSelling" element={<BestSelling/>} />
        <Route path="/categories" element={<CategoryProduct/>} />
        <Route path="/category/:category_slug/:categoryId" element={<Category/>} />
        <Route path="/products/:tag" element={<TagProduct />} />
        <Route path="/allProduct/product/:product_slug/:productId" element={<ProductDetail/>}/>
        <Route path="/cart-page" element={<Cart/>}/>
        <Route path="/checkout-page" element={<CheckoutPage/>}/>
        <Route path="/wishlist-page" element={<Wishlist/>}/>










      </Routes>

    </Router>

      </div>
    </>
  )
}

export default App
