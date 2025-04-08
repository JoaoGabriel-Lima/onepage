import { motion } from "framer-motion";
import "./App.css";
import BlueCard from "./core/blue-card/blue-card";
import GreenCard from "./core/green-card/green-card";
import PinkCard from "./core/pink-card/pink-card";
import YellowCard from "./core/yellow-card/yellow-card";

function App() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1.5, delay: 0 }}
      className="w-full h-full bentoGrid grid max-2xl:flex flex-col"
    >
      <PinkCard />
      <GreenCard />
      <YellowCard />
      <BlueCard />
    </motion.section>
  );
}

export default App;
