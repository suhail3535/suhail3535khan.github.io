import { Flex, VStack, Image, Box, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import style from "./Home.module.css"

export default function Home({ colorMode }) {

    const [isSmallScreen] = useMediaQuery('(min-width: 680px)')
    const [isMediumScreen] = useMediaQuery('(min-width: 1180px)')

    return (
      <div id="home">
        <VStack
          id={style.home}
          style={{ color: colorMode === "light" ? "#4C3575" : "#EBC7E8" }}
        >
          <Flex
            alignItems={isMediumScreen ? "end" : "start"}
            flexDirection={isSmallScreen ? "row" : "column"}
          >
            <Image
              id={style.myImg}
              src="https://i.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.webp"
              alt="logo"
            />
            <Box id={style.myDetailsDiv}>
              <Heading id={style.myName}>
                <span>
                  Hey,
                  <img
                    style={{ width: "15%", display: "inline" }}
                    src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                    alt=""
                  />
                </span>
                <br /> I am Suhail Khan
              </Heading>
              <Heading id={style.title}>Full Stack Web Developer</Heading>
            </Box>
          </Flex>
          <Box style={{ marginTop: "30px" }}>
            <img
              src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=light"
              alt=""
            />
          </Box>
        </VStack>
      </div>
    );
}
