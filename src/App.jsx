import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pricing from "./Pages/Pricing";
import Reseller from "./Pages/Reseller";
import Channel_manager from "./Pages/Channel_manager";






function App() {


  return (
    <>
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/reseller" element={<Reseller />} />
          <Route path="/channel_manager" element={<Channel_manager />} />
          
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
