import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname]); // Trigger only on pathname changes, not on hash changes

  return <>{children}</>;
};

export default ScrollToTop;
