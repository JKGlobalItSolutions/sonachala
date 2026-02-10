import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pricing from "./Pages/Pricing";
import Reseller from "./Pages/Reseller";
import Channel_manager from "./Pages/Channel_manager";
import Pms from "./Pages/Pms";
import Pos from "./Pages/Pos";
import BookingEngine from "./Pages/BookingEngine";
import WebsiteBuilder from "./Pages/websiteBuilder";
import Ota from "./Pages/Ota";
import B2b from "./Pages/B2b";
import Revenue from "./Pages/Revenue"
import API from "./Pages/API"
import Paymentgateway from "./Pages/Paymentgateway"
import Contact from "./Pages/Contact"
import Googleads from "./Pages/Googleads"
import ScrollToTop from "./Components/ScrollToTop"; 


function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/reseller" element={<Reseller />} />
        <Route path="/channel_manager" element={<Channel_manager />} />
        <Route path="/Pms" element={<Pms />} />
        <Route path="/Pos" element={<Pos />} />
        <Route path="/BookingEngine" element={<BookingEngine />} />
        <Route path="/WebsiteBuilder" element={<WebsiteBuilder />} />
        <Route path="/Ota" element={<Ota/>} />
        <Route path="/B2b" element={<B2b />} />
        <Route path="/Revenue" element={<Revenue />} />
        <Route path="/API" element={<API />} />
        <Route path="/Paymentgateway" element={<Paymentgateway />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Googleads" element={<Googleads />} />
        
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
