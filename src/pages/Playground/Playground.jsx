import { motion } from "framer-motion";
import "./Playground.scss";

// Placeholder items — replace with real content
const items = [
  { id: "1"
   },
  { id: "2"
   },
  { id: "3"
   },
  { id: "4"
   },
  { id: "5"
   },
  { id: "6"
   }
];

export default function Playground() {
  return (
    <motion.div
      className="playground_cont"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.38, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="tag">Work In Progress</div>
      <div className="playground_grid">
        {items.map((item) => (
          // <div key={item.id} className="playground_tile" style={{ backgroundImage: `url(${item.src})` }} />
          <div key={item.id} className="playground_tile" />
        ))}
      </div>
    </motion.div>
  );
}
