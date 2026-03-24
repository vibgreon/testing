import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from "./components/hooks/ScrollToTop";
import CustomCursor from "./components/cursor/CustomCursor";
import useCursor from "./components/cursor/useCursor";
import { CursorContext } from "./components/cursor/CursorContext";

import Newnav from "./components/newnav/Newnav";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Wrapper from "./components/wrapper/Wrapper";

import Main from "./pages/Main/Main";
import Home from "./pages/Home/Home";
import Recap2024 from "./pages/Recap2024/Recap2024";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import OptionSeller from "./pages/OptionSeller/OptionSeller";

import Explaination from "./components/blog/Explaination/Explaination";
import Snack from "./components/blog/Snack/Snack";
import Breif from "./components/blog/Breif/Breif";

// import BlogReco from "./components/footer/BlogReco";

import WorkSamples from "./pages/WorkSamples.json";
var data = WorkSamples;

import "./App.scss";

function AppContent() {
  const { pos, label, cursorProps, resetLabel } = useCursor();

  const location = useLocation();
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    });
  }, []);

  useEffect(() => {
    resetLabel();
  }, [location.pathname]);

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
    <CursorContext.Provider value={cursorProps}>
      <ScrollToTop>
        <CustomCursor x={pos.x} y={pos.y} label={label} />
        {/* {installPrompt && <button onClick={installPWA}>Install App</button>} */}

        <Newnav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Main />} />
          <Route path="/recap-2024" element={<Recap2024 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {data
            .filter((item) => item.show === true)
            .map((item) => {
              return (
                <Route
                  key={item.id}
                  path={`recap-2024/${item.url}`}
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
          <Route path="/sahi/options-seller" element={<OptionSeller />} />
        </Routes>
        <div className="gradient-stripes">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Footer />
      </ScrollToTop>
    </CursorContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
