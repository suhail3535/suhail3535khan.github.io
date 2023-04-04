import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from './Project.module.css'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function MajorProject({ colorMode }) {

 

    return (
      <div id="projects" className={style.majorMain}>
        <div className="project-card" id={style.major_projectDiv}>
          <div
            className={style.major_project_imgDiv}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <Image
              className="project-skills-card-img"
              src="./rctproject.png"
              alt="aerowear"
            />
          </div>

          <div
            className={style.major_project_detailsDiv}
            color={colorMode === "light" ? "#4C3575" : "#371B58"}
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <Heading
              className="project-title"
              id={style.major_project_detailsDiv_Heading}
              size={["md", "md", "md", "lg"]}
            >
              AeroWear.com
            </Heading>
            <Heading
              className="project-description"
              id={style.major_project_detailsDiv_detail}
              fontWeight="500"
              size={["xs", "sm", "sm", "md"]}
            >
              Aerowear is known for its trendy and affordable clothing, with a
              focus on casual wear such as t-shirts, hoodies, and jeans. The
              brand also offers a range of accessories such as bags..
            </Heading>
            <Heading
              className="project-tech-stack"
              id={style.major_project_detailsDiv_tehcs}
              size={["sm", "sm", "sm", "sm"]}
            >
              Tech Stack: React| Redux | BootStrap | JavaScript | Chakra-UI |
              Material Icon-uI
            </Heading>
            <div
              className="project-card-btn"
              id={style.major_project_detailsDi_btnDiv}
            >
              <Button
                // id={style.btn_Prj}
                className="project-card-btn"
                size={["xs", "sm", "sm", "sm"]}
              >
                <a
                  className="project-github-link"
                  id={style.links}
                  rel="noreferrer"
                  href="https://github.com/suhail3535/thinkable-slope-4107/tree/main/thinkable-slope"
                  target="_blank"
                >
                  Source Code
                </a>
                &nbsp;
                <FaGithub id={style.links} />
              </Button>
              <Button
                className="project-deployed-link"
                size={["xs", "sm", "sm", "sm"]}
                // id={style.btn_Prj}
              >
                <a
                  id={style.links}
                  rel="noreferrer"
                  href="https://thinkable-slope.vercel.app/"
                  target="_blank"
                >
                  Live
                </a>
                &nbsp;
                <FaArrowRight id={style.links} />
              </Button>
            </div>
          </div>
        </div>

        <div
          className="project-card"
          // data-aos=""
          // data-aos-mirror="true"
          // data-aos="fade-left"
          // data-aos-duration="3000"
          id={style.major_projectDiv}
        >
          <Box
            className={style.major_project_imgDiv}
            data-aos-mirror="true"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <Image
              className="project-skills-card-img"
              src="./2.png"
              alt="triphub"
            />
          </Box>

          <Box
            className={style.major_project_detailsDiv}
            color={colorMode === "light" ? "#4C3575" : "#371B58"}
            data-aos-mirror="true"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <Heading
              className="project-title"
              id={style.major_project_detailsDiv_Heading}
              size={["sm", "sm", "sm", "lg"]}
            >
              TripHub.com
            </Heading>
            <Heading
              className="project-description"
              id={style.major_project_detailsDiv_detail}
              fontWeight="500"
              size={["xs", "sm", "sm", "md"]}
            >
              TripHub is the clone of Makemytrip.com MakeMyTrip is a travel
              company that provides online travel services.
            </Heading>
            <Heading
              className="project-tech-stack"
              id={style.major_project_detailsDiv_tehcs}
              size={["sm", "sm", "sm", "sm"]}
            >
              Tech Stack: React | Chakra Ui | Material Icon UI|
              BootStrap|JavaScript|
            </Heading>
            <Box
              className="project-card-btn"
              id={style.major_project_detailsDi_btnDiv}
            >
              <Button
                className="project-card-btn"
                size={["xs", "sm", "sm", "sm"]}
              >
                <a
                  className="project-github-link"
                  id={style.links}
                  rel="noreferrer"
                  href="https://github.com/suhail3535/agreeable-transport-9100/tree/main/agreeable-transport-9100"
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

        <div className="project-card" id={style.major_projectDiv}>
          <Box
            className={style.major_project_imgDiv}
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <Image
              className="project-skills-card-img"
              src="./main.png"
              alt="shopper"
            />
          </Box>

          <Box
            className={style.major_project_detailsDiv}
            color={colorMode === "light" ? "#4C3575" : "#371B58"}
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <Heading
              className="project-title"
              id={style.major_project_detailsDiv_Heading}
              size={["md", "md", "md", "lg"]}
            >
              Shopper Korner.com
            </Heading>
            <Heading
              className="project-description"
              id={style.major_project_detailsDiv_detail}
              fontWeight="500"
              size={["xs", "sm", "sm", "md"]}
            >
              Shopper Korner is the clone of Gearbest.com it is a E-Commerce
              website.All the daily use products are available here.
            </Heading>
            <Heading
              className="project-tech-stack"
              id={style.major_project_detailsDiv_tehcs}
              size={["sm", "sm", "sm", "sm"]}
            >
              Tech Stack: HTML| CSS | BootStrap |JavaScript
            </Heading>
            <Box
              className="project-card-btn"
              id={style.major_project_detailsDi_btnDiv}
            >
              <Button
                className="project-card-btn"
                size={["xs", "sm", "sm", "sm"]}
              >
                <a
                  className="project-github-link"
                  id={style.links}
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
        </div>

        <div className="project-card" id={style.major_projectDiv}>
          <Box
            className={style.major_project_imgDiv}
            data-aos-mirror="true"
            data-aos="flip-left"
            data-aos-duration="3000"
          >
            <Image
              className="project-skills-card-img"
              src="./3.png"
              alt="Toptrip"
            />
          </Box>

          <Box
            className={style.major_project_detailsDiv}
            color={colorMode === "light" ? "#4C3575" : "#371B58"}
            data-aos-mirror="true"
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <Heading
              className="project-title"
              id={style.major_project_detailsDiv_Heading}
              size={["md", "md", "md", "lg"]}
            >
              TopTrip.com
            </Heading>
            <Heading
              className="project-description"
              id={style.major_project_detailsDiv_detail}
              fontWeight="500"
              size={["xs", "sm", "sm", "md"]}
            >
              Top Trip is the clone of Booking.com, it is a travel company that
              provides online travel services and hotel booking .
            </Heading>
            <Heading
              className="project-tech-stack"
              id={style.major_project_detailsDiv_tehcs}
              size={["sm", "sm", "sm", "sm"]}
            >
              Tech Stack: HTML| CSS | BootStrap |JavaScript
            </Heading>
            <Box
              className="project-card-btn"
              id={style.major_project_detailsDi_btnDiv}
            >
              <Button
                className="project-card-btn"
                size={["xs", "sm", "sm", "sm"]}
              >
                <a
                  className="project-github-link"
                  id={style.links}
                  rel="noreferrer"
                  href="https://github.com/suhail3535/glad-airplane-61"
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
      </div>
    );
}
  
