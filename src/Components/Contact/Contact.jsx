import { Box, Heading, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./Contact.module.css";
import emailjs from "emailjs-com";
export default function Contact({ colorMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const SendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ecppgw3",
        "template_mo11pxa",
        e.target,
        "wjPfQ26fgtlE20kou"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact">
      <div style={{ height: "100px" }}></div>
      <Heading
        size={["2xl", "2xl", "2xl", "3xl"]}
        textAlign="center"
        color={colorMode === "light" ? "#4C3575" : "#BFACE0"}
        mb="30px"
      >
        CONTACT ME
      </Heading>
      <Box
        id={style.contact_mainDiv}
        backgroundColor={colorMode === "light" ? "#A084CA" : "#BFACE0"}
      >
        <Box id={style.contact_leftDiv}>
          <Box>
            <form action="" onSubmit={SendMail}>
              <Heading id={style.contact_head}>YOUR NAME (required)</Heading>
              <input
                className={style.input}
                placeholder="Enter your Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Heading id={style.contact_head}>YOUR EMAIL (required)</Heading>
              <input
                className={style.input}
                placeholder="Enter your Email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Heading id={style.contact_head}>SUBJECT</Heading>
              <input
                className={style.input}
                placeholder="Enter your Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />

              <Heading id={style.contact_head}>YOUR MESSAGE</Heading>
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
          <Box id={style.contact_rightDiv}>
            <Box>
              <Heading id={style.contact_head1}>E-Mail</Heading>
              <p id="contact-email" style={{ color: "#DAE2B6" }}>
                khansohail015@gmail.com
              </p>
              <div className={style.line}></div>
              <Heading id={style.contact_head1}>Phone</Heading>
              <p id="contact-phone" style={{ color: "#DAE2B6" }}>
                9598125005
              </p>
              <div className={style.line}></div>
              <Heading id={style.contact_head1}>On The Web</Heading>
              <Box id="contact-linkedin">
                <Link
                  style={{ color: "#DAE2B6", textDecoration: "none" }}
                  href="https://www.linkedin.com/in/suhail-khan-6339a6127/"
                  isExternal
                >
                  LinkedIn |
                </Link>
              </Box>

              <Box id="contact-github">
                <Link
                  style={{ color: "#DAE2B6", textDecoration: "none" }}
                  href="https://github.com/suhail3535"
                  isExternal
                >
                  Github
                </Link>
              </Box>
              <div className={style.line}></div>
            </Box>
          </Box>
          ;
        </Box>
      </Box>
    </div>
  );
}