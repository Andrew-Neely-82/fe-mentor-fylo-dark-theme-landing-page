import { fyloData } from "./data/data";
import Navbar from "./components/Navbar";
import "./App.scss";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar data={fyloData} />
      <Hero data={fyloData}/>
    </>
  );
}

export default App;
