import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";

import style from "./Project.module.css";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function MajorProject ({ colorMode }) {
    return (
        <div id="projects" className={style.majorMain}>
            <div className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <Image
                        className="project-skills-card-img"
                        src="./fashion.png"
                        alt="fashionFrenzy"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "#4C3575" : "#371B58"}
                    data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        Fashion Frenzy
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Fashion Frenzy is ECommerce Website & is a clone of
                        Anthropologie. With a vast collection of products of
                        fashion and clothing, we offer a seamless shopping
                        experience.!
                    </Heading>

                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>React</div>
                        <div>Redux</div>
                        <div>JavaScript</div>
                        <div>Node Js</div>
                        <div>Express Js</div>
                        <div>MongoDB</div>
                        <div>Chakra-UI</div>
                    </div>

                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/alive-run-138"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://frontend-suhail3535.vercel.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>
            <div className="project-card" id={style.major_projectDiv}>
                <div
                    className={style.major_project_imgDiv}
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <Image
                        className="project-skills-card-img"
                        src="./rctproject.png"
                        alt="aerowear"
                    />
                </div>

                <div
                    className={style.major_project_detailsDiv}
                    color={
                        colorMode === "light" ? "rgb(121,114,232) " : "#371B58"
                    }
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        AeroWear
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Aerowear is known for its trendy and affordable
                        clothing, with a focus on casual wear such as t-shirts,
                        hoodies, and jeans. The brand also offers a range of
                        accessories such as bags.
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>React</div>
                        <div>Redux</div>
                        <div>Json Server</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>Chakra-UI</div>
                    </div>
                    <div
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            // id={style.btn_Prj}
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/thinkable-slope-4107/tree/main/thinkable-slope"
                                target="_blank">
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
                                href="https://thinkable-slope-suhail3535.vercel.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="project-card" id={style.major_projectDiv}>
                <div
                    className={style.major_project_imgDiv}
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <Image
                        className="project-skills-card-img"
                        src="./new111.jpg"
                        alt="typescript"
                    />
                </div>

                <div
                    className={style.major_project_detailsDiv}
                    color={
                        colorMode === "light" ? "rgb(121,114,232) " : "#371B58"
                    }
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        TypeScript Crud Application
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        A TypeScript CRUD application with essential features: adding new student data, retrieving student data, updating student records, and deleting student data.!
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>TypeScript</div>
                         <div>React</div>
                        <div>JavaScript</div>
                        <div>Node Js</div>
                        <div>Express Js</div>
                        <div>MongoDB</div>
                        <div>Chakra-UI</div>
                    </div>
                    <div
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            // id={style.btn_Prj}
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/TypeScriptCrudapp"
                                target="_blank">
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
                                href="https://649a4e10ce5a7628c1de0ffd--starlit-bublanina-a89a76.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                    data-aos-mirror="true"
                    data-aos="fade-left"
                    data-aos-duration="3000">
                    <Image
                        className="project-skills-card-img"
                        src="./final.png"
                        alt="masai"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "#4C3575" : "#371B58"}
                    data-aos-mirror="true"
                    data-aos="fade-right"
                    data-aos-duration="3000">
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["sm", "sm", "sm", "lg"]}>
                        Login Management System
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Masai School's student login management system allows
                        students to access upcoming lectures, assignments, and
                        the daily schedule.
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>React</div>
                        <div>Redux</div>
                        <div>Json Server</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>Chakra-UI</div>
                        <div>Material-UI</div>
                    </div>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/MasaiLms"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://masaiapp-suhail3535.vercel.app/"
                                target="_blank">
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
                    data-aos="fade-left"
                    data-aos-duration="3000">
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
                    data-aos-duration="3000">
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["sm", "sm", "sm", "lg"]}>
                        TripHub
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        TripHub is the clone of Makemytrip.com MakeMyTrip is a
                        travel company that provides online travel services.
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>

                        <div>Material-UI</div>
                        <div>Chakra-UI</div>
                    </div>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/agreeable-transport-9100/tree/main/agreeable-transport-9100"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://elegant-custard-fc08fa.netlify.app/"
                                target="_blank">
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
                    data-aos-duration="3000">
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
                    data-aos-duration="3000">
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        TopTrip
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Top Trip is the clone of Booking.com, it is a travel
                        company that provides online travel services and hotel
                        booking .
                    </Heading>

                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>BootStrap</div>
                        <div>JavaScript</div>
                    </div>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/glad-airplane-61"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://top-tripcom.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>
            {/* ***************minor project********* */}
            <div id={style.seceond_section}>
                <div id={style.card1}>
                    <img src="./todonew.png" alt="" />
                    <div id={style.dropdown}>
                        <Heading
                            id={style.title}
                            size={["md", "md", "md", "lg"]}>
                            Todo Application
                        </Heading>
                        <Heading
                            id={style.discription}
                            fontWeight="500"
                            size={["xs", "sm", "sm", "md"]}>
                            A JavaScript Todo app with essential features:
                            adding todos, retrieving todos, and deleting todos.
                            Streamline your task management effortlessly and
                            efficiently. Simplify your workflow with this
                            user-friendly application..!
                        </Heading>
                        <div
                            className="project-tech-stack"
                            id={style.major_project_detailsDiv_tehcs_part2}>
                            Tech Stack:
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>BootStrap</div>
                            <div>JavaScript</div>
                        </div>
                        <div className="project-card-btn" id={style.source_btn}>
                            <Button
                                className="project-card-btn"
                                size={["xs", "sm", "sm", "sm"]}>
                                <a
                                    className="project-github-link"
                                    id={style.links}
                                    rel="noreferrer"
                                    href="https://github.com/suhail3535/JavaScript_Todo-APP/tree/main/Todo-List-App-with-Javascript-main"
                                    target="_blank">
                                    Source Code
                                </a>
                                &nbsp;
                                <FaGithub id={style.links} />
                            </Button>
                            <Button
                                className="project-deployed-link"
                                size={["xs", "sm", "sm", "sm"]}>
                                <a
                                    id={style.links}
                                    rel="noreferrer"
                                    href="https://stellar-tanuki-bd576d.netlify.app/"
                                    target="_blank">
                                    Live
                                </a>
                                &nbsp;
                                <FaArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>

                <div id={style.card2}>
                    <img src="./shopper.png" alt="" />
                    <div id={style.dropdown}>
                        <Heading
                            id={style.title}
                            size={["md", "md", "md", "lg"]}>
                            Shopper Korner
                        </Heading>
                        <Heading
                            id={style.discription}
                            fontWeight="500"
                            size={["xs", "sm", "sm", "md"]}>
                            Shopper Korner is the clone of Gearbest.com it is a
                            E-Commerce website.All the daily use products are
                            available here.!
                        </Heading>
                        <div
                            className="project-tech-stack"
                            id={style.major_project_detailsDiv_tehcs_part2}>
                            Tech Stack:
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>BootStrap</div>
                            <div>JavaScript</div>
                        </div>
                        <div className="project-card-btn" id={style.source_btn}>
                            <Button
                                className="project-card-btn"
                                size={["xs", "sm", "sm", "sm"]}>
                                <a
                                    className="project-github-link"
                                    id={style.links}
                                    rel="noreferrer"
                                    href="https://github.com/suhail3535/Indigo-railway-8753"
                                    target="_blank">
                                    Source Code
                                </a>
                                &nbsp;
                                <FaGithub id={style.links} />
                            </Button>
                            <Button
                                className="project-deployed-link"
                                size={["xs", "sm", "sm", "sm"]}>
                                <a
                                    id={style.links}
                                    rel="noreferrer"
                                    href="https://vermillion-cendol-8a7209.netlify.app/"
                                    target="_blank">
                                    Live
                                </a>
                                &nbsp;
                                <FaArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
