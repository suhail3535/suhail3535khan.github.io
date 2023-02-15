import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from './Project.module.css'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import Aos from "aos"
import "aos/dist/aos.css"

export default function MajorProject({ colorMode }) {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
      <div className="project-card" id={style.majorMain}>
        <div data-aos="" className={style.major_projectDiv}>
          <Box className={style.major_project_imgDiv}>
            <Image
              className="project-skills-card-img"
              src="./2.png"
              alt="triphub"
            />
          </Box>

          <Box
            className={style.major_project_detailsDiv}
            color={colorMode === "light" ? "#4C3575" : "#371B58"}
          >
            <Heading
              className={style.major_project_detailsDiv_Heading}
              size={["md", "md", "md", "lg"]}
            >
              MakeMyTrip (Cloned)
            </Heading>
            <Heading
              className={style.major_project_detailsDiv_detail}
              fontWeight="500"
              size={["xs", "sm", "sm", "md"]}
            >
              TripHub is the clone of Makemytrip.com MakeMyTrip is a travel
              company that provides online travel services.
            </Heading>
            <Heading
              className={style.major_project_detailsDiv_tehcs}
              size={["sm", "sm", "sm", "sm"]}
            >
              Tech Stack: React | Chakra Ui | Material Icon UI|
              BootStrap|JavaScript|
            </Heading>
            <Box className={style.major_project_detailsDi_btnDiv}>
              <Button size={["xs", "sm", "sm", "sm"]}>
                <a
                  className={style.links}
                  rel="noreferrer"
                  href="https://github.com/suhail3535/agreeable-transport-9100/tree/main/agreeable-transport-9100"
                  target="_blank"
                >
                  Source Code
                </a>
                &nbsp;
                <FaGithub />
              </Button>
              <Button size={["xs", "sm", "sm", "sm"]}>
                <a
                  className={style.links}
                  rel="noreferrer"
                  href="https://elegant-custard-fc08fa.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
                &nbsp;
                <FaArrowRight />
              </Button>
            </Box>
          </Box>
        </div>

        <div
          data-aos=""
          className={style.major_projectDiv}
          id={style.major_projectDivId}
        >
          <Box
            className={style.major_project_detailsDiv}
            color={colorMode === "light" ? "#4C3575" : "#371B58"}
          >
            <Heading
              class="project-title"
              className={style.major_project_detailsDiv_Heading}
              size={["md", "md", "md", "lg"]}
            >
              GearBest.com (Cloned)
            </Heading>
            <Heading
              className={style.major_project_detailsDiv_detail}
              fontWeight="500"
              size={["xs", "sm", "sm", "md"]}
            >
              Shopper Korner is the clone of Gearbest.com it is a E-Commerce
              website.All the daily use products are available here.
            </Heading>
            <Heading
              className={style.major_project_detailsDiv_tehcs}
              size={["sm", "sm", "sm", "sm"]}
            >
              Tech Stack: HTML | CSS | JavaScript
            </Heading>
            <Box className={style.major_project_detailsDi_btnDiv}>
              <Button
                className="project-github-link"
                size={["xs", "sm", "sm", "sm"]}
              >
                <a
                  className={style.links}
                  rel="noreferrer"
                  href="https://github.com/suhail3535/Indigo-railway-8753"
                  target="_blank"
                >
                  Source Code
                </a>
                &nbsp;
                <FaGithub />
              </Button>
              <Button
                className="project-deployed-link"
                size={["xs", "sm", "sm", "sm"]}
              >
                <a
                  className={style.links}
                  rel="noreferrer"
                  href="https://vermillion-cendol-8a7209.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
                &nbsp;
                <FaArrowRight />
              </Button>
            </Box>
          </Box>
          <Box className={style.major_project_imgDiv}>
            <Image
              className="project-skills-card-img"
              src="./11.png"
              alt="shopper"
            />
          </Box>
        </div>

        <div data-aos="" className={style.major_projectDiv}>
          <Box className={style.major_project_imgDiv}>
            <Image
              className="project-skills-card-img"
              src="/3.png"
              alt="toptrip"
            />
          </Box>
          <Box
            className={style.major_project_detailsDiv}
            color={colorMode === "light" ? "#4C3575" : "#371B58"}
          >
            <Heading
              className={style.major_project_detailsDiv_Heading}
              size={["md", "md", "md", "lg"]}
            >
              Booking.com (Cloned)
            </Heading>
            <Heading
              className="project-title"
              id={style.major_project_detailsDiv_detail}
              fontWeight="500"
              size={["xs", "sm", "sm", "md"]}
            >
              Top Trip is the clone of Booking.com, it is a travel company that
              provides online travel services and hotel booking .
            </Heading>
            <Heading
              className={style.major_project_detailsDiv_tehcs}
              size={["sm", "sm", "sm", "sm"]}
            >
              Tech Stack: HTML | CSS | JavaScript
            </Heading>
            <Box className={style.major_project_detailsDi_btnDiv}>
              <Button size={["xs", "sm", "sm", "sm"]}>
                <a
                  className={style.links}
                  rel="noreferrer"
                  href="https://github.com/suhail3535/glad-airplane-61"
                  target="_blank"
                >
                  Source Code
                </a>
                &nbsp;
                <FaGithub />
              </Button>
              <Button size={["xs", "sm", "sm", "sm"]}>
                <a
                  className={style.links}
                  rel="noreferrer"
                  href="https://top-tripcom.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
                &nbsp;
                <FaArrowRight />
              </Button>
            </Box>
          </Box>
        </div>
       
        <div
          data-aos=""
          className={style.major_projectDiv}
          id={style.major_projectDivId}
        >
          <Box
            className={style.major_project_detailsDiv}
            color={colorMode === "light" ? "#4C3575" : "#371B58"}
          >
            <Heading
              class="project-title"
              className={style.major_project_detailsDiv_Heading}
              size={["md", "md", "md", "lg"]}
            >
              GearBest.com (Cloned)
            </Heading>
            <Heading
              className={style.major_project_detailsDiv_detail}
              fontWeight="500"
              size={["xs", "sm", "sm", "md"]}
            >
              Shopper Korner is the clone of Gearbest.com it is a E-Commerce
              website.All the daily use products are available here.
            </Heading>
            <Heading
              className={style.major_project_detailsDiv_tehcs}
              size={["sm", "sm", "sm", "sm"]}
            >
              Tech Stack: HTML | CSS | JavaScript
            </Heading>
            <Box className={style.major_project_detailsDi_btnDiv}>
              <Button
                className="project-github-link"
                size={["xs", "sm", "sm", "sm"]}
              >
                <a
                  className={style.links}
                  rel="noreferrer"
                  href="https://github.com/suhail3535/Indigo-railway-8753"
                  target="_blank"
                >
                  Source Code
                </a>
                &nbsp;
                <FaGithub />
              </Button>
              <Button
                className="project-deployed-link"
                size={["xs", "sm", "sm", "sm"]}
              >
                <a
                  className={style.links}
                  rel="noreferrer"
                  href="https://vermillion-cendol-8a7209.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
                &nbsp;
                <FaArrowRight />
              </Button>
            </Box>
          </Box>
          <Box className={style.major_project_imgDiv}>
            <Image
              className="project-skills-card-img"
              src="./11.png"
              alt="shopper"
            />
          </Box>
        </div>
      </div>
    );
}
