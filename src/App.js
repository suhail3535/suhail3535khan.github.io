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

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
      <div
          className="App"
          style={{
              backgroundColor: colorMode === "light" ? "#FAFAFA" : "#121212",
          }}>
          <Button size="lg" id="themeButton" onClick={toggleColorMode}>
              {colorMode === "light" ? (
                  <FaMoon fontSize="20px" />
              ) : (
                  <FaSun fontSize="20px" />
              )}
          </Button>
          <Navbar colorMode={colorMode} />
          <Home colorMode={colorMode} />
          <About colorMode={colorMode} />
          <Skills colorMode={colorMode} />
          <Project colorMode={colorMode} />
          <Static colorMode={colorMode} />
          <GitHub colorMode={colorMode} />
          <Contact colorMode={colorMode} />
          <BackToTop />
          <Footer colorMode={colorMode} />
      </div>
  );
}

export default App;
