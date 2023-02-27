// import { Button } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { HashLink as Link } from 'react-router-hash-link';
import { Button, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar({ colorMode }) {
  const openLink = (url) => {
    window.open(url);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <div id="nav-menu" className="navbar">
        <div
          id={styles.nav}
          style={{
            backgroundColor: colorMode === "light" ? "#4c3575" : "#BFACE0",
          }}
        >
          <Link smooth to="#Home">
            <img
              className={styles.logo}
              src="https://cdn.dribbble.com/users/72227/screenshots/2595118/media/f082e58bc3e3e99f76f044f9ac4cab43.gif"
              alt="logo"
            />
          </Link>
          <div id={styles.nav1}>
            <h3 className={styles.nav1H}>
              <Link smooth to="#home" className="nav-link home">
                Home
              </Link>
              {/* <a class="nav-link home" href="/#Home">
                Home
              </a> */}
            </h3>

            <h3 className={styles.nav1H}>
              <Link className="nav-link about" smooth to="#About">
                About
              </Link>
              {/* <a class="nav-link about" href="/#About">
                About
              </a> */}
            </h3>

            <h3 className={styles.nav1H}>
              <Link smooth to="#Skills" className="nav-link skills">
                Skills
              </Link>
              {/* <a class="nav-link skills" href="/#Skills">
                Skills
              </a> */}
            </h3>

            <h3 className={styles.nav1H}>
              <Link smooth to="#Projects" className="nav-link projects">
                Projects
              </Link>

              {/* <a class="nav-link projects" href="/#Projects">
                Projects
              </a> */}
            </h3>

            <h3 className={styles.nav1H}>
              <Link className="nav-link contact" smooth to="#contact">
                Contact
              </Link>
              {/* <a class="nav-link contact" href="/#Contact">
                Contact
              </a> */}
            </h3>

            <div className="nav-link resume" id="resume-link-1" style={{border:"1px solid red"}}>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  wordSpacing: "-.4ch",
                  border: "0px solid red",
                  marginTop: "0px",
                }}
                id="resume-button-1"
                className={styles.anchor}
                href="https://drive.google.com/uc?id=1kgIaKRXSAAvH_9y1JGGGAC6IyOOwqWAH&export=download"
                download="Suahil_Khan_Resume"
              >
                <div style={{marginRight:"10px"}}
                  onClick={() =>
                    openLink(
                      "https://drive.google.com/file/d/1kgIaKRXSAAvH_9y1JGGGAC6IyOOwqWAH/view?usp=share_link"
                    )
                  }
                  className="navbar-resume"
                  id="resume-button-1"
                >
                  Resume
                </div>
                <FaDownload />
              </a>
            </div>
          </div>

          <div id={styles.nav2}>
            <Menu>
              <MenuButton
                style={{
                  backgroundColor:
                    colorMode === "light" ? "##f6e7e6" : "#4C3575",
                  color: colorMode === "light" ? "#4C3575" : "#EBC7E8",
                }}
                as={Button}
                rightIcon={<HamburgerIcon />}
              />
              <MenuList
                style={{
                  backgroundColor:
                    colorMode === "light" ? "##f6e7e6" : "#4C3575",
                  color: colorMode === "light" ? "#4C3575" : "#EBC7E8",
                }}
              >
                <Link smooth to="#Home">
                  <MenuItem
                    fontSize={{ base: "20px", md: "25px", lg: "25px" }}
                    fontWeight="bold"
                    style={{
                      backgroundColor:
                        colorMode === "light" ? "##f6e7e6" : "#4C3575",
                      color: colorMode === "light" ? "#4C3575" : "#EBC7E8",
                    }}
                  >
                    Home
                  </MenuItem>
                </Link>

                <Link smooth to="#About">
                  <MenuItem
                    fontSize={{ base: "20px", md: "25px", lg: "25px" }}
                    fontWeight="bold"
                    style={{
                      backgroundColor:
                        colorMode === "light" ? "##f6e7e6" : "#4C3575",
                      color: colorMode === "light" ? "#4C3575" : "#EBC7E8",
                    }}
                  >
                    About
                  </MenuItem>
                </Link>
                <Link smooth to="#Skills">
                  <MenuItem
                    fontSize={{ base: "20px", md: "25px", lg: "25px" }}
                    fontWeight="bold"
                    style={{
                      backgroundColor:
                        colorMode === "light" ? "##f6e7e6" : "#4C3575",
                      color: colorMode === "light" ? "#4C3575" : "#EBC7E8",
                    }}
                  >
                    Skills
                  </MenuItem>
                </Link>
                <Link smooth to="#Projects">
                  <MenuItem
                    fontSize={{ base: "20px", md: "25px", lg: "25px" }}
                    fontWeight="bold"
                    style={{
                      backgroundColor:
                        colorMode === "light" ? "##f6e7e6" : "#4C3575",
                      color: colorMode === "light" ? "#4C3575" : "#EBC7E8",
                    }}
                  >
                    Projects
                  </MenuItem>
                </Link>
                <Link smooth to="#Contact">
                  <MenuItem
                    fontSize={{ base: "20px", md: "25px", lg: "25px" }}
                    fontWeight="bold"
                    style={{
                      backgroundColor:
                        colorMode === "light" ? "##f6e7e6" : "#4C3575",
                      color: colorMode === "light" ? "#4C3575" : "#EBC7E8",
                    }}
                  >
                    Contact
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    );
}
