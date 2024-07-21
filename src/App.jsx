import { fyloData } from "./data/data";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar data={fyloData} />
    </>
  );
}

export default App;
