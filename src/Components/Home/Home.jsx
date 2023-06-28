import { Flex, VStack, Image, Box, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import style from "./Home.module.css"

export default function Home({ colorMode }) {
return (
      <div id="home">
        <div
          id={style.home}
          style={{ color: colorMode === "light" ? "#4C3575" : "#EBC7E8" }}
        >
          <div className={style.img_txt_wrapper}

          >
            <img
              id={style.myImg}
              src="https://i.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.webp"
              alt="logo"
            />
            <div id={style.myDetailsDiv}>
              <h1 id={style.myName}>
                <span>
                  Hey,
                  <img
                    style={{ width: "10%", display: "inline" }}
                    src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                    alt=""
                  />
                </span>
                <br /> I am Suhail Khan
              </h1>
              <h3 id={style.title}>Full Stack Web Developer</h3>
            </div>
          </div>
          <div className={style.quote}>
            <img
              src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=light"
              alt=""
            />
          </div>
        </div>
      </div>
    );
}
