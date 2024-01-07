import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";

function App() {
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
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Products />
      </div>
    </>
  )
}

export default App
