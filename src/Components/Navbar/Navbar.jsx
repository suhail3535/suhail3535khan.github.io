// import { Button } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { HashLink as Link } from 'react-router-hash-link';
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar({ colorMode }) {
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
              <Link smooth to="#Home" className="nav-link home">
                Home
              </Link>
            </h3>

            <h3 className={styles.nav1H}>
              {/* <Link className="nav-link about" smooth to="#About">
                About
              </Link> */}
              <a class="nav-link about" href="/#About">
                About
              </a>
            </h3>

            <h3 className={styles.nav1H}>
              <Link smooth to="#Skills" className="nav-link skills">
                Skills
              </Link>
            </h3>

            <h3 className={styles.nav1H}>
              <Link smooth to="#Projects" className="nav-link projects">
                Projects
              </Link>
            </h3>

            <h3 className={styles.nav1H}>
              <Link className="nav-link contact" smooth to="#Contact">
                Contact
              </Link>
            </h3>

            <h3 className="nav-link resume" id="resume-link-1">
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  wordSpacing: "-.4ch",
                }}
                id="resume-button-1"
                className={styles.anchor}
                href="./Suhail.pdf"
                download="Suahil_Khan_Resume"
              >
                Resume &nbsp; <FaDownload />
              </a>
            </h3>
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
