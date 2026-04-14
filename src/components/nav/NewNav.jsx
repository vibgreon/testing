import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCursorProps } from "../cursor/CursorContext";
import "./NewNav.scss";

const slideUp = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function NewNav() {
  const cursorProps = useCursorProps();
  const location = useLocation();
  const isPlayground = location.pathname === "/playground";

  return (
    <motion.nav
      className="new_nav"
      layout
      transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
    >
      {/* Home > appears on playground, LinkedIn on home — same slot */}
      <AnimatePresence mode="wait">
        {isPlayground ? (
          <motion.div key="home" {...slideUp}>
            <Link {...cursorProps("Home >")} to="/" className="home">
              Home
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        ) : (
          <motion.div key="linkedin" {...slideUp}>
            <a
              {...cursorProps("Social link >")}
              href="https://www.linkedin.com/in/vibgreon/"
              target="_self"
            >
              LinkedIn
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Playground always stays mounted */}
      <Link {...cursorProps("Lab >")} to="/playground">
        Playground
      </Link>

      {/* Resume only on home */}
      <AnimatePresence>
        {!isPlayground && (
          <motion.div key="resume" {...slideUp}>
            <a
              {...cursorProps("Google drive >")}
              href="https://drive.google.com/file/d/1zhfRYTeu0HPbh-jrEcYlYnG5lXxdDChd/view?usp=sharing"
              target="_self"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
