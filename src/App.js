import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <SocialLinks />
    </div>
  );
}

export default App;
