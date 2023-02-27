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
  const github = {
    margin: "auto",
    width:"80%",
    padding: "20px",
    borderRadius: "10px",
    border:"2px solid #371B58",
  
  };

  return (
    <div
      className="github-main"
      data-aos-mirror="true"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <Heading
        textAlign="center"
        size={["2xl", "xl", "xl", "xl"]}
        color={colorMode === "light" ? "#4C3575" : "#BFACE0"}
        mb="50px"
      >
        Github Calender
      </Heading>

      <Box w="100%" style={github}>
        <GitHubCalendar
          class="react-activity-calendar"
          style={{ margin: "auto", color: "#4C3575" }}
          username="suhail3535"
          blockSize={20}
          year={new Date().getFullYear()}
        >
          <ReactTooltip delayShow={20} HTML />
        </GitHubCalendar>
      </Box>

      <div className="github-stats" id={style.stat}>
        <div
          className={style.one}
          data-aos-mirror="true"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=suhail3535&theme=sea&hide_border=true&border_radius=10&date_format=j%20M%5B%20Y%5D&background=4974a5"
            alt="suhail-stats"
          />
        </div>

        <div
          className={style.two}
          data-aos-mirror="true"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=suhail3535&show_icons=true&title_color=005685&text_color=005685&icon_color=005685&bg_color=ffffff&border_radius=10&border_color=005685"
            alt="suhail-status"
          />
        </div>

        <div
          className={style.three}
          data-aos-mirror="true"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=suhail3535&title_color=4C3575&icon_color=4C3575&text_color=4C3575&bg_color=00000000&show_icons=true"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHub;
