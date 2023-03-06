import React from "react";
import style from './Static.module.css'

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Static({ colorMode }) {

  return (
    <section
      className={style.services_experience}
      data-aos-mirror="true"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container" id="coding">
        <div className={style.experiences} id={style.experiences}>
          <div className={style.experience}>
            <h3>1200+</h3>
            <p>Hrs Coding</p>
          </div>
          <div className={style.portfolios}>
            <div
              data-aos-mirror="true"
              data-aos="flip-right"
              data-aos-duration="2000"
              className={style.portfolio}
              style={{
                backgroundColor: colorMode === "light" ? "#7858A6" : "#BFACE0",
                fontFamily: "Bree Serif, serif",
                borderRadius: "5px",
              }}
            >
              <h4>30+</h4>
              <h6>Mini Projects</h6>
            </div>
            <div
              data-aos-mirror="true"
              data-aos="flip-right"
              data-aos-duration="2000"
              className={style.portfolio}
              style={{
                backgroundColor: colorMode === "light" ? "#7858A6" : "#BFACE0",
                fontFamily: "Bree Serif, serif",
                borderRadius: "5px",
              }}
            >
              <h4>03+</h4>
              <h6>Major Projects</h6>
            </div>
            <div
              data-aos-mirror="true"
              data-aos="flip-right"
              data-aos-duration="2000"
              className={style.portfolio}
              style={{
                backgroundColor: colorMode === "light" ? "#7858A6" : "#BFACE0",
                fontFamily: "Bree Serif, serif",
                borderRadius: "5px",
              }}
            >
              <h4>300+</h4>
              <h6>DSA Problem</h6>
            </div>
            <div
              data-aos-mirror="true"
              data-aos="flip-left"
              data-aos-duration="2000"
              className={style.portfolio}
              style={{
                backgroundColor: colorMode === "light" ? "#7858A6" : "#BFACE0",
                fontFamily: "Bree Serif, serif",
                borderRadius: "5px",
              }}
            >
              <h4>200+</h4>
              <h6>Hrs Soft Skills</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Static;

 