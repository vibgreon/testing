import { motion } from "framer-motion";
import "./Archive.scss";

export default function Archice() {
  return (
    <motion.div
      className="archive_cont"
      initial={{ opacity: 0 }}
      animate={{ opacity: `1` }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.38, ease: [0.33, 1, 0.68, 1] }}
    >   
    </motion.div>
  );
}
