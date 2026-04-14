import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import ScrollToTop from "./components/hooks/ScrollToTop";
import CustomCursor from "./components/cursor/CustomCursor";
import useCursor from "./components/cursor/useCursor";
import { CursorContext } from "./components/cursor/CursorContext";

import New from "./pages/New/New";
import Playground from "./pages/Playground/Playground";

import NewNav from "./components/nav/NewNav";
import NewWrapper from "./components/wrapper/NewWrapper";

import "./App.scss";

// Routes where the persistent nav shell is shown
const NAV_ROUTES = ["/", "/playground"];

function AppContent() {
  const { pos, label, cursorProps, resetLabel, setLabel } = useCursor();
  const location = useLocation();
  const [installPrompt, setInstallPrompt] = useState(null);

  const showNavShell = NAV_ROUTES.includes(location.pathname);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    });
  }, []);

  useEffect(() => {
    resetLabel();
  }, [location.pathname]);

  return (
    <CursorContext.Provider value={{ cursorProps, setLabel }}>
      <ScrollToTop>
        <CustomCursor x={pos.x} y={pos.y} label={label} />
        {/*
          For the home + playground routes we render a persistent shell:
            NewWrapper (locked on home) > NewNav > [animated content]

          NewNav lives OUTSIDE AnimatePresence so it never unmounts or
          shifts position during route transitions. Only the content
          below it (CardStack / playground grid) fades in and out.
        */}
        {showNavShell ? (
          <NewWrapper locked={location.pathname === "/"}>
            {/* Nav is outside AnimatePresence — stays perfectly in place */}
            <NewNav />

            {/* Only the content area fades */}
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<New />} />
                <Route path="/playground" element={<Playground />} />
              </Routes>
            </AnimatePresence>
          </NewWrapper>
        ) : (
          /* All other routes render normally, unaffected */
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="*" element={<New />} />
            </Routes>
          </AnimatePresence>
        )}
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
