import { fyloData } from "./data/data";
import Navbar from "./components/Navbar";
import "./App.scss";
import Hero from "./components/Hero";
import GridSection from "./components/GridSection";

function App() {
  return (
    <>
      <Navbar data={fyloData} />
      <main>
        <Hero data={fyloData} />
        <GridSection data={fyloData} />
      </main>
    </>
  );
}

export default App;
