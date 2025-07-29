import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import Breif from "./components/blog/Breif/Breif";

import BlogReco from "./components/footer/BlogReco";

import WorkSamples from "./pages/WorkSamples.json";
var data = WorkSamples;

import "./App.scss";

function AppContent() {
  const location = useLocation();
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

  // Blog route matching logic
  const blogPaths = data
    .filter((item) => item.show === true)
    .map((item) => `/${item.url}`);
  const isBlogPage = blogPaths.includes(location.pathname);

  return (
    <ScrollToTop>
      {/* {installPrompt && <button onClick={installPWA}>Install App</button>} */}

      <div className="app-nav__container">
        <Wrapper>
          <Navbar />
        </Wrapper>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {data
          .filter((item) => item.show === true)
          .map((item) => {
            return (
              <Route
                key={item.id}
                path={`/${item.url}`}
                element={(() => {
                  switch (item.pageType) {
                    case "explaination":
                      return <Explaination data={item} />;
                    case "snack":
                      return <Snack data={item} />;
                    case "breif":
                      return <Breif data={item} />;
                    default:
                      return null;
                  }
                })()}
              />
            );
          })}
      </Routes>

      <Wrapper>
        {/* Only show BlogReco on blog pages */}
        {isBlogPage && <BlogReco data={data} />}
        <Footer />
      </Wrapper>
    </ScrollToTop>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}