import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer"
import Menwear from "./Pages/Menwear";
import Home from "./Pages/Home";
import Toprated from "./Pages/Toprated";
import Kidswear from "./Pages/Kidswear";
import WomenWear from "./Pages/WomenWear";
import Electronics from "./Pages/Electronics";
import AllProduct from "./Pages/AllProduct";



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
        <Route path="/menswear" element={<Menwear/>} />
        <Route path="/toprated" element={<Toprated/>} />
        <Route path="/kidswear" element={<Kidswear/>} />
        <Route path="/womenwear" element={<WomenWear/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/allProduct" element={<AllProduct/>} />





        


        




      </Routes>
    </Router>

      </div>
    </>
  )
}

export default App
