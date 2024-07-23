import { fyloData } from "./data/data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GridSection from "./components/GridSection";
import SeeHow from "./components/SeeHow";
import Reviews from "./components/Reviews";
import GetStarted from "./components/GetStarted";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar data={fyloData} />
      <Hero data={fyloData} />
      <GridSection data={fyloData} />
      <SeeHow data={fyloData} />
      <Reviews data={fyloData} />
      <GetStarted data={fyloData} />
      <Footer data={fyloData} />
    </>
  );
}

export default App;
