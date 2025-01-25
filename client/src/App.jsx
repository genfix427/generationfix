import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footerr'
import AboutUs from './pages/AboutUs'
import ServicesDetail from './pages/ServicesDetail'
import { onlineServices } from './assets/data/services'
import { repairServices } from './assets/data/repairServices'
import { itServices } from './assets/data/itServices'
import OnlineServices from './pages/OnlineServices'
import FAQ from './pages/FAQ'
import Appointment from './pages/Appointments'
import RepairServices from './pages/RepairServices'
import ItServices from './pages/ItServices'
import RepairServiceDetail from './pages/RepairServiceDetail'
import ItServiceDetail from './pages/ItServiceDetail'
import ScrollToTop from './components/Hero/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header onlineServices={onlineServices} repairServices={repairServices} itServices={itServices}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/digital-marketing-services" element={<OnlineServices />} />
        <Route path="/it-solutions" element={<ItServices />} />
        <Route path="/repair-services" element={<RepairServices />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/services/:id" element={<ServicesDetail onlineServices={onlineServices} />} />
        <Route path="/repair-services/:id" element={<RepairServiceDetail repairServices={repairServices} />} />
        <Route path="/it-services/:id" element={<ItServiceDetail itServices={itServices} />} />


        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
