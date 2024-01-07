import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App font-regular">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <TechStack />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
