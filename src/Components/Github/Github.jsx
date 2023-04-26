import { Box, color, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import style from './Github.module.css'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const GitHub = ({ colorMode }) => {


  return (
      <div
          className="github-main"
          data-aos-mirror="true"
          data-aos="fade-up"
          data-aos-duration="3000">
          <Heading
              textAlign="center"
              size={["2xl", "xl", "xl", "xl"]}
              color={colorMode === "light" ? "#4C3575" : "#BFACE0"}
              mb="50px"
              fontFamily="Bree Serif, serif">
              Github Calender
          </Heading>

          <Box w="100%" id={style.github}>
              <GitHubCalendar
                  class="react-activity-calendar"
                  fontFamily="Bree Serif, serif"
                  style={{ margin: "auto", color: "#4C3575" }}
                  username="suhail3535"
                  blockSize={20}
                  year={new Date().getFullYear()}>
                  <ReactTooltip delayShow={20} HTML />
              </GitHubCalendar>
          </Box>

          <div className="github-stats" id={style.stat}>
              <div
                  className={style.one}
                  fontFamily="Bree Serif, serif"
                  data-aos-mirror="true"
                  data-aos="fade-left"
                  data-aos-duration="3000">
                  <Image
                      id="github-streak-stats"
                      src="https://github-readme-streak-stats.herokuapp.com?user=suhail3535&theme=sea&hide_border=true&border_radius=10&date_format=j%20M%5B%20Y%5D&background=#a084ca"
                      alt="suhail-stats"
                  />
              </div>

              <div
                  className={style.two}
                  data-aos-mirror="true"
                  data-aos="fade-up"
                  fontFamily="Bree Serif, serif"
                  data-aos-duration="3000">
                  <Image
                      id="github-stats-card"
                      src="https://github-readme-stats.vercel.app/api?username=suhail3535&show_icons=true&title_color=#4c3575&text_color=#4c3575&icon_color=#4c3575&bg_color=red&border_radius=10&border_color=#4c3575"
                      alt="suhail-status"
                  />
              </div>

              <div
                  className={style.three}
                  data-aos-mirror="true"
                  data-aos="fade-right"
                  fontFamily="Bree Serif, serif"
                  data-aos-duration="3000">
                  <Image
                      id="github-top-langs"
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=suhail3535&layout=compact&title_color=4C3575&icon_color=#4c3575&text_color=#4c3575&bg_color=#a084ca&show_icons=true"

                      // https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact
                  />
              </div>
          </div>
      </div>
  );
};

export default GitHub;
