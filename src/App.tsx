import "./App.css";
import BlueCard from "./core/blue-card/blue-card";
import GreenCard from "./core/green-card/green-card";
import PinkCard from "./core/pink-card/pink-card";
import YellowCard from "./core/yellow-card/yellow-card";

function App() {
  return (
    <section className="w-full h-full bentoGrid max-2xl:flex ">
      <PinkCard />
      <GreenCard />
      <YellowCard />
      <BlueCard />
    </section>
  );
}

export default App;
