import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Wrapper from "./components/wrapper/Wrapper";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Navbar />
        </Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Wrapper>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
