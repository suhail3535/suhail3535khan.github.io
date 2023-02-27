import { Box, Heading, Image, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from "./About.module.css"

import { FaDownload } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function About({ colorMode }) {
  const openLink = (url) => {
    window.open(url);
  };


    return (
      <Box id="about" className="about section">
        <div id="About" style={{ height: "50px", border:"1px solid blue",padding:"10px" }}></div>
        <Heading
          size={["xl", "xl", "xl", "xl"]}
          textAlign="center"
          color={colorMode === "light" ? "#4C3575" : "#BFACE0"}
        >
          About Me
        </Heading>
        <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="3000">
          <Box
            id={style.aboutDiv}
            color={colorMode === "light" ? "#4C3575" : "#BFACE0"}
          >
            <Box id={style.first}>
              <Image
                className="home-img"
                src="mycropimg.png"
                alt="Suhail Khan"
              />
            </Box>

            <Box className={style.aboutDetails}>
              <span id="user-detail-name" className={style.name}>
                I am Suhail Khan
              </span>
              <p className={style.name}>Full Stack Web Developer</p>

              <p className={style.name}>I live in Hardoi,Uttar Pradesh,India</p>

              <Box className="aboutMe" id="user-detail-intro">
                <p className={style.namep}>
                  A passionate aspiring Full Stack Developer skilled in MERN
                  stack, NodeJS,Redux,MongoDb molded and shaped by Masai
                  School's numerous training. Actively ready to join the great
                  living team of a good start-up to adapt me in any situation
                  and the environment with ease and perform the best.
                </p>
              </Box>

              <Box
                id={style.resumeDiv}
                backgroundColor={colorMode === "light" ? "#4C3575" : "#BFACE0"}
              >
                <a
                  id="resume-link-2"
                  class={style.resumeButton}
                  href="https://drive.google.com/uc?id=1kgIaKRXSAAvH_9y1JGGGAC6IyOOwqWAH&export=download"
                  download="Suahil_Khan_Resume"
                >
                  <div
                    style={{
                      border: "0px solid green",
                      padding: "5px",
                      marginRight: "5px",
                    }}
                    onClick={() =>
                      openLink(
                        "https://drive.google.com/file/d/1kgIaKRXSAAvH_9y1JGGGAC6IyOOwqWAH/view?usp=share_link"
                      )
                    }
                    className="navbar-resume"
                    id="resume-button-2"
                  >
                    Resume
                  </div>
                  <FaDownload />
                </a>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    );
}
