import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/hooks/ScrollToTop";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Wrapper from "./components/wrapper/Wrapper";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Wrapper>
            <Navbar />
          </Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
          <Wrapper>
            <Footer />
          </Wrapper>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
