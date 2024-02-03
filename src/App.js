import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Static from "./Components/Static/Static";
import GitHub from "./Components/Github/Github";

import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import BackToTop from "./Components/Home/BacktoTop";
import Animation from "./Components/Animation/Animation";
import Anima from "./Components/Animation/Anima";
import WhatsApp from "./Components/Home/What'sApp";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
      <div
          className="App"
        >
          {<Button size="lg" id="themeButton" onClick={toggleColorMode}>
              {colorMode === "light" ? (
                  <FaMoon fontSize="20px" />
              ) : (
                  <FaSun fontSize="20px" />
              )}
          </Button> }
          <Navbar colorMode={colorMode} />
          <Home colorMode={colorMode} />
          <Anima dir="up" />
          <About colorMode={colorMode} />


          <Skills colorMode={colorMode} />
          <Anima dir="up" />
          <Project colorMode={colorMode} />

          <Anima dir="down" />
          <Static colorMode={colorMode} />
          <Anima dir="up" />
          <GitHub colorMode={colorMode} />
          <Anima dir="down" />
          <Contact colorMode={colorMode} />

          <BackToTop />
          <WhatsApp />
          <Footer colorMode={colorMode} />
      </div>
  );
}

export default App;
