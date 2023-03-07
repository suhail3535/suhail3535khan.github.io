import { Box, Heading, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./Contact.module.css";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Contact({colorMode}) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const SendMail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_ecppgw3',
            'template_mo11pxa',
            e.target,
            'wjPfQ26fgtlE20kou')
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    return (
      <Box
        id="contact"
        data-aos-mirror="true"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div style={{ height: "100px" }}></div>
        <Heading
          size={["2xl", "2xl", "2xl", "3xl"]}
          textAlign="center"
          fontFamily="Bree Serif, serif"
          color={colorMode === "light" ? "#4C3575" : "#BFACE0"}
          mb="30px"
        >
          Contact Me
        </Heading>
        <Box
          id={style.contact_mainDiv}
          backgroundColor={colorMode === "light" ? "#A084CA" : "#BFACE0"}
        >
          <Box id={style.contact_leftDiv}>
            <Box>
              <form action="" onSubmit={SendMail}>
                <Heading fontFamily="Bree Serif, serif" id={style.contact_head}>
                  YOUR NAME (required)
                </Heading>
                <input
                  className={style.input}
                  placeholder="Enter your Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Heading fontFamily="Bree Serif, serif" id={style.contact_head}>
                  YOUR EMAIL (required)
                </Heading>
                <input
                  className={style.input}
                  placeholder="Enter your Email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Heading fontFamily="Bree Serif, serif" id={style.contact_head}>
                  SUBJECT
                </Heading>
                <input
                  className={style.input}
                  placeholder="Enter your Subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />

                <Heading fontFamily="Bree Serif, serif" id={style.contact_head}>
                  YOUR MESSAGE
                </Heading>
                <input
                  className={style.input1}
                  placeholder="Enter you Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <br />
                <input id={style.btn} type="submit" value="Send" />
              </form>
            </Box>
          </Box>
          <Box id={style.contact_rightDiv}>
            <Box>
              <Heading fontFamily="Bree Serif, serif" id={style.contact_head1}>
                E-Mail
              </Heading>
              <div
                id="contact-email"
                style={{
                  border: "0px solid green",

                  fontSize: "20px",
                  color: "white",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                khansohail015@gmail.com
              </div>
              <div className={style.line}></div>
              <Heading fontFamily="Bree Serif, serif" id={style.contact_head1}>
                Phone
              </Heading>
              <p
                id="contact-phone"
                fontFamily="Bree Serif, serif"
                style={{
                  border: "0px solid green",

                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "white",
                  width: "100%",
                }}
              >
                9598125005
              </p>
              <div className={style.line}></div>
              <Heading fontFamily="Bree Serif, serif" id={style.contact_head1}>
                On The Web
              </Heading>
              <Box
                style={{
                  border: "0px solid green",
                  textAlign: "left",
                  color: "white",
                  width: "30%",
                  display: "flex",
                  fontSize: "20px",
                  fontFamily: "serif",
                  fontWeight: "bold",
                  justifyContent: "space-between",
                }}
              >
                <Box id="contact-linkedin">
                  <Link
                    style={{   color: "white", textDecoration: "none" }}
                    href="https://www.linkedin.com/in/suhail-khan-6339a6127/"
                    isExternal
                  >
                    LinkedIn
                  </Link>
                </Box>
                |
                <Box id="contact-github">
                  <Link
                    style={{  color: "white", textDecoration: "none" }}
                    href="https://github.com/suhail3535"
                    isExternal
                  >
                    Github
                  </Link>
                </Box>
              </Box>
              <div className={style.line}></div>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}




