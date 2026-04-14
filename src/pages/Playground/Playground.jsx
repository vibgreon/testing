import { motion } from "framer-motion";
import "./Playground.scss";

// Placeholder items — replace with real content
const items = [
  { id: "1",
    src: "/projects/ar-vr/scene-1.gif"
   },
  { id: "2",
    src: "/projects/ar-vr/scene-2.gif"
   },
  { id: "3",
    src: "/projects/ar-vr/scene-3.gif"
   },
  { id: "4",
    src: "/projects/pwa/cover.gif"
   },
  { id: "5",
    src: "/projects/pwa/implementation.gif"
   },
  { id: "6",
    src: "/projects/config/asset/1.gif"
   },
   { id: "7",
    src: "/projects/config/asset/2.png"
   },
   { id: "8",
    src: "/projects/config/asset/5.png"
   },
   { id: "9",
    src: "/projects/hs/2/1.png"
   },
   { id: "10",
    src: "/projects/hs/2/2.png"
   },
   { id: "11",
    src: "/projects/hs/2/3.png"
   },
   { id: "12",
    src: "/projects/hs/2/4.gif"
   },
   { id: "13",
    src: "/projects/hs/3/1.png"
   },
   { id: "14",
    src: "/projects/hs/3/2.gif"
   },
   { id: "15",
    src: "/projects/hs/3/3.gif"
   },
   { id: "16",
    src: "/projects/hs/3/4.png"
   },
   { id: "17",
    src: "/projects/hs/3/5.gif"
   },
   { id: "18",
    src: "/projects/hs/3/6.png"
   },
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
          <div key={item.id} className="playground_tile" style={{ backgroundImage: `url(${item.src})` }} />
        ))}
      </div>
    </motion.div>
  );
}
