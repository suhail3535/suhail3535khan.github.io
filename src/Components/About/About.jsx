import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from "./About.module.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { FaDownload } from 'react-icons/fa'

export default function About({ colorMode }) {
    useEffect(() => {
        Aos.init() 
    }, [])
    return (
      <Box id="about" className="about section">
        <div id="About" style={{ height: "100px" }}></div>
        <Heading
          size={["xl", "xl", "xl", "xl"]}
          textAlign="center"
          color={colorMode === "light" ? "#4C3575" : "#BFACE0"}
        >
          About Me
        </Heading>
        <div data-aos="">
          <Box
            id={style.aboutDiv}
            color={colorMode === "light" ? "#4C3575" : "#BFACE0"}
          >
            <Image
              className="home-img"
              id={style.myImg}
              src="profilepic.JPG"
              alt="Suhail Khan"
            />
            <Box  className={style.aboutDetails}>
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
                  href="./Suhail.pdf"
                  download="Suhail's Resume"
                >
                  Resume &nbsp;
                  <FaDownload
                    id="resume-button-2"
                    className={style.resumeDownloadLogo}
                  />
                </a>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    );
}
