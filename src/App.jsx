import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from "./components/hooks/ScrollToTop";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Wrapper from "./components/wrapper/Wrapper";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import Explaination from "./components/blog/Explaination/Explaination";
import Snack from "./components/blog/Snack/Snack";

import WorkSamples from "./pages/WorkSamples.json";
var data = WorkSamples;

import "./App.scss";

function App() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    });
  }, []);

  const installPWA = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
          console.log("User installed the PWA");
        }
        setInstallPrompt(null);
      });
    }
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          {installPrompt && <button onClick={installPWA}>Install App</button>}
          <Wrapper>
            <Navbar />
          </Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {data.map((item) => {
              return (
                <Route
                  key={item.id}
                  path={`/${item.url}`}
                  element={
                    item.pageType == "explaination" ? (
                      <Explaination data={item} />
                    ) : (
                      <Snack data={item} />
                    )
                  }
                />
              );
            })}
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
