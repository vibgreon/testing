import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Wrapper from "./components/wrapper/Wrapper";

import Home from "./pages/Home/Home";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
