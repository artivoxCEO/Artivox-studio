import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Serveices from './Pages/Serveices';
import Portfolio from './Pages/Portfolio';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer';
import PortfolioDetailPage from './Pages/PortfolioDetailPage';
import ScrollToTop from './Components/ScrollToTop';


const App = () => {

  return (
    <>
    <ScrollToTop/>
      <main>
        

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Portfolio_Data_page />} /> */}
          <Route path="/services" element={<Serveices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* PORTFOLIO ROUTES */}
          <Route
            path="/portfolio/:slug"
            element={<PortfolioDetailPage />}
            />
        </Routes>
           
            
      </main>

      <Footer />
    </>
  )
}

export default App
