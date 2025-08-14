import React from 'react'
import Hero from './Components/HeroSection/Hero'
import Navbar from './Components/Navbar/Navbar'
import Arrival from './Components/NewArrivals/Arrival'
import Selling from './Components/TopSelling/Selling'
import Customer from './Components/OurHappyCustomers/Customer'
import Contact from './Components/ContactUs/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Arrival/>
   <Selling/>
   <Customer/>
   <Contact/>
   <Footer/>
   
   </>
  )
}

export default App