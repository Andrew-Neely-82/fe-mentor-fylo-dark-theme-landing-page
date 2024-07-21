import { fyloData } from "./data/data";
import Navbar from "./components/Navbar";
import "./App.scss";
import Hero from "./components/Hero";
import GridSection from "./components/GridSection";
import SeeHow from "./components/SeeHow";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Navbar data={fyloData} />
      <main>
        <Hero data={fyloData} />
        <GridSection data={fyloData} />
        <SeeHow data={fyloData} />
        <Reviews data={fyloData} />
      </main>
    </>
  );
}

export default App;
