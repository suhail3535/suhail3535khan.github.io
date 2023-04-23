import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./About.module.css";

import { FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { HiDownload } from "react-icons/hi";
// ..

AOS.init();
export default function About({ colorMode }) {
    const openLink = (url) => {
        window.open(url);
    };

    return (
        <div
            id="about"
            className="about section"
            data-aos-mirror="true"
            data-aos="fade-up"
            data-aos-duration="3000">
            <div
                id="About"
                style={{
                    height: "100px",
                    border: "0px solid blue",
                    padding: "10px",
                }}></div>
            <Heading
                size={["xl", "xl", "xl", "xl"]}
                textAlign="center"
                fontFamily="Bree Serif, serif"
                color={colorMode === "light" ? "#4C3575" : "#BFACE0"}>
                About Me
            </Heading>
            <div
                data-aos-mirror="true"
                data-aos="fade-up"
                data-aos-duration="3000">
                <div
                    id={style.aboutDiv}
                    color={colorMode === "light" ? "#4C3575" : "#BFACE0"}>
                    <div id={style.first}>
                        <Image
                            className="home-img"
                            src="profile new-modified.png"
                            // src="profile-modified.png"
                            alt="Suhail Khan"
                        />
                    </div>

                    <div className={style.aboutDetails}>
                        <p
                            id="user-detail-name"
                            fontFamily="Bree Serif, serif"
                            className={style.name}>
                            I am Suhail Khan
                        </p>
                        <p className={style.name}>Full Stack Web Developer</p>

                        <p className={style.name}>
                            I live in Hardoi,Uttar Pradesh,India
                        </p>

                        <div className="aboutMe" id="user-detail-intro">
                            <p className={style.namep}>
                                A passionate aspiring Full Stack Developer
                                skilled in MERN stack, NodeJS,Redux,MongoDb
                                molded and shaped by Masai School's numerous
                                training. Actively ready to join the great
                                living team of a good start-up to adapt me in
                                any situation and the environment with ease and
                                perform the best.
                            </p>
                        </div>

                        <div
                            id={style.resumeDiv}
                            backgroundColor={
                                colorMode === "light" ? "#4C3575" : "#BFACE0"
                            }>
                            <a
                                id="resume-link-2"
                                className={style.resumeButton}
                                href="https://drive.google.com/uc?id=1kgIaKRXSAAvH_9y1JGGGAC6IyOOwqWAH&export=download"
                                // download="Suahil_Khan_Resume"
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
                                    // className="home-resume"
                                    id="resume-button-2">
                                    Resume
                                </div>
                                <HiDownload />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
