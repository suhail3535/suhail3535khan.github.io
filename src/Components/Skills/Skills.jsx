import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./Skills.module.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function Skills ({ colorMode }) {
    const skillsArray = [
        {
            id: "1",
            name: "HTML",
            logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
        },
        {
            id: "2",
            name: "CSS",
            logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
        },
        {
            id: "3",
            name: "JavaScript",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        },
        {
            id: "4",
            name: "React",
            logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        },

        {
            id: "5",
            name: "Next jS",
            logo: "https://miro.medium.com/v2/resize:fit:1400/1*z1U7SJeqK_JJXUYei5uD8w.png",
        },
        {
            id: "5",
            name: "Redux",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNe3NYVlI0lgrZLMto86XvqTSkxKEs6XRF9JmjFA-XSH5j0QtWclwj-5NwP7z4CbYlNMQ&usqp=CAU",
        },
        {
            id: "5",
            name: "Redux ToolKit",
            logo: "https://media.licdn.com/dms/image/D4E12AQFGtCLzryEsvQ/article-cover_image-shrink_720_1280/0/1683961037831?e=2147483647&v=beta&t=ZCCnGgCZCv_v08kv8-JhZ0gnYdyq6aOi3NOBT8HEgDY",
        },
        {
            id: "6",
            name: "MongoDB",
            logo: "https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB",
        },

        {
            id: "8",
            name: "NodeJS",
            logo: "data:image/png;base64,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",
        },
        {
            id: "9",
            name: "Chakra UI",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAxlBMVEX///83QVJhyspcychBx784x7s9xr5pys5JxsItOEtxytF1ytJmzMxYycc1P1FFx8CtsbfW2Nw+SFlmbXrz8/WLkJq6vcJvdoLr7O58go0txrhIUmJPV2YpNUgkMUXp9/fe9PXDxszg4uVeZXIfLUKdoahDTFx0eoWztrzKzNCkqK/y+vuv4eTR7fBOw8Xv7/GSl59WXmyl4N6U3Nlgz8jF7eqW1t3D6OuL0dmz4uV60NNAwcGZ29x41NKr4uB619EAGDSH3dQH5en9AAAJZklEQVR4nO2aC1eqShuAwdScMpKLV0ARxWuWpnbfdfr/f+qbGzDAQOb6OrU773PW2cuYmRce5j6qKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/JUsB6vHu3PC3dXKW3734/x7LO/vHh7OYx4e7u7/G/qrq3MZV6vvfrAvZ3V3fiZ1Pzu/+932A3mdR3XvffcDfh2P8ioXKv/xl/b7wQtRPzsj/5+JH0XuBt/9mF+BJ3pmpaMU77sf9P/PfZ5sRv7IIc9qUW4+XdCn5ebH3fUQVk+Hup89eUfdQdcQQf90wUYfF+uPrKPuegDeaRKsGH04O306S1w79Y65hT7RVFVTj3BHKi5ofpX78uG0gKtB6sLTMaO9bmB39ee5vxSqK1fpSy9H3OOHut8Xq6erHXP/+Zv8TPflU7759au0VRzR6n+m+20pKVav10X1VSmdWq+ffL7V/0h3r54LUVeeSrKkT6/vfqT7S1SfpXqoWarjv0vXVzh5f00unOL/oneAc5euPnubn+i+rJdwoy4lYQ2e+C1P+d/p9M/2+J/o/nhSkvNMGrzyei1PPXn85H1+oPtym+NOa10Z5KiXSk9FUa2Orut+Yu0uulsd3+/IZFi5ZMpx7pInyODV5dXK1JXbPPeTupcb02+0N45tO6PurBNdjN31tblxnI258FPl9MDc2BNcbjoTkjLu8yGlhfP49BPJbOmLZjcIXcktbJtG6ii53F+cyLhmTdq7KEmTMRf7PPMm6iONgvpaEN6buRu+3w1TXbQWK3M+HbtaVG4dVVnafT3uE8Y2Vu6Sz+OmorRGYxchg/UofTpGcaQgt8W8SN25urJ9zlM/uciZ4hs2edYQDW100X3SEpI1NI2fq2Eky43Cqk+5B7T5qMgk6U2ShtZKgGgmm5aZpSKZ6fYV8kfm9czVV7WTC3m7wPyRxgvGmpoA2brgrhqJZLcbqbssAdcVL+dYMvcZy4ccKsTcFzNELzL3WSaSKVdfYrkMYa0r2wtxOZPOKpvl1m70ulEk4QvuyTRtPGTlhixVQxPHRqza3LXEvcGE0IZ1pSZL46Gp+1xlkdxspBR7iXstmr6WA5E/qWySpd1Q4wraaNq2NXZr1E2447Rud8Pt0ZQVNBF7TY25r7e6NApvwQn3oSrWOnfnsrhzkxIblmM0m+v6sInESCkes+bPOYPYSy2V0ctk6djsxkZA5inLZ7dW3bngjro0TWe2mkEPo+ZjlsQb9pC2HrROuw9ZPGSHA2gz7Nmaa4xME/fseZ/maIaVwe7ZkAm91jLq8kXLcpvJmT24C+gza5vocK2hRRXP3VGT+3VM9l7oYzX75FDHjMb2LklD7ZR7i4fYRNUYuiNnoVsYHgm140i09FSmdJuuzJxaX/6pXdQ4NB8mk/OGtrfEudQa4SpB7U7orhnRyD534xoKNobr9mdRsTl9YnZGF7nPw1qPWzB3F97GYjNx3XErytFitZHrzo3ov/JTicGOp3N1/FlS7y32IAvxdRjaKKDvgrs3oyTL0YQO7w8X03gZQhu35nQE93A4FDyj/u6ICxgSKc4yY4OgbI5PtfnnNy8BH8oHf8JstTj/s5cOxkbdSWIlFYSn0txdOGueorhh05cRvTB/pKlJdzSlZ51EQ9wRMHc3SD1IFMnikaTu+6R7rVZNwJq1V4shmVjWasbdFCsyTXYv0025k0X4fBY0TZvN0KK7avNJMPlmmXs/u261fBrJ4ZGk7t5lTQ65Xt2yPBfyHOn53aLdHaUrIeFu5Lv7re7Imah47g8nf9E9HM+NrHvGrNOapiJJ3ZVdjjuR21G7Vd7LSYe6oTOcK51PPqx3K5jQdb7oKXHH+UUNvrZJ3kkSSe7+VuBOB7N9NadpvKVDscHrOHffdMM6QsjVjHR/j0ks0pi72G2UTjsZqcD9llrK9Kq3VL0cvYpUpsxe5pA2n+fOVzpu33Xa69mcLl3T7nzNKHYbiXsYaYxwpMZ8YeS7r/I6fJXW62s1t1lkFwJmZvA61L3BVmObBT+30CX1rtlmZkbLui94pAaP1Cqo98HuUkqVLllvqzV58uXlLruc5yNP8rhmeID7DZuJom0rnt8z7po99/mSOV4jZNx5pHjbWjC/K8p7NetVLpcrpFq3sXo5/W4kW1jJ2gZP4puFsLaRu7O5243n/kXGXVNx6rDPXkO0AMy46/EGgrGWzgScfbUsobIlS/jqpSyNUpV8Dd9ha1pDWHjNyeGJ0faL3dlLc+MG46TbvDYZRia444d3yLjTtyNOhAVrG8xOZrbDCW/St8LZyUIFrLPFbVePJYrcZ6y2oidmm7GEO/fbsL1ueJKRcW+xknHnKVjbKNKKr+K9+WBXKVCvSrc8Nw7rkCods6xOwLbWLmmjRe5z2uajfjyfZNZ14dkF7/L9bo67nlzkhpHy3Je7jHxv/5H6Tv7VBN9ga5ozbTbbDp+VNtYH7qyzqNoav7IbPZjwYxiJu9JiB0NaS+7OI6mLDtkWBHZ4oJN3XilUfLVMPuPO7l2Svl4Nrx5W7QrZwXN58vuS8MYfjnV8ZlJdw2xvNBwit955KZwhPq+TzHGqa5umECnXHQ/1CSpvyv6yUi3iPS8UHqFTZ5V8lCp2tzbR+SJt/V0yRGm2zL0z4l3+RurOhskoktukkSa5X1J45YRpZeBV5erR1YJvYWeGaK+5RuKMOm9dpwvnypprWmR/q018iTuZOqj8Wu6uO0KkvnlDNpeJqSfFq6haed1XKtGFSkX4I7m1zaHTnPR5R8fm0XcMutZ33b74O6vp2HXdMd+IdKa8j+AyC5bWH9PMDZpN+J3Voo8juf1/cJdviiGUdCRkBIpl0kgtJZdtrxJzWSmmty1SJ5qLkUGanDFaxKo3md/XzRM/nLOGXVJI26xJGZ2m0Taf+X0d/6VeaxhmS/32DkeiTd5pxpHy6x3P5b0PhAX1zAZOguVnvlM8rFDB12dfFWl5sHzv7df9nvhQ+d7bb/w18fYg+Y/6+l/KvvKRfa/y+t0P+VUM3ntF9r3f2d5D9rueTB9fw9d3hdP6389yX+7J2e1/3fieZf+e1S+///I6jxistm+VyLuy265+cz+X4O1vt9vt7d777gcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgG/gf+zXKJZihLwKAAAAAElFTkSuQmCC",
        },
        {
            id: "9",
            name: "Ant Design",
            logo: "https://www.specbee.com/sites/default/files/inline-images/Ant.png",
        },
        {
            id: "10",
            name: "BootStrap",
            logo: "https://cdn.dribbble.com/users/595/screenshots/14417863/bootstrap-new-logo_4x.png",
        },
        {
            id: "10",
            name: "SASS",
            logo: "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg",
        },

        {
            id: "13",
            name: "Typescript",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        },
        {
            id: "14",
            name: "Material UI",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqqONFG6eDHvqXzF2HtmKQ3qDErVWjLTsSUpIiJGCtA&s",
        },

        {
            id: "14",
            name: "SQL",
            logo: "https://img.freepik.com/premium-vector/sql-structured-query-language-icon-label-internet-security-networking-vector-stock-illustration_100456-10733.jpg",
        },
        {
            id: "14",
            name: "MySQL",
            logo: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
        },


        {
            id: "14",
            name: "Express JS",
            logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
        },
    ];
    const toolsArray = [
        {
            id: "1",
            name: "Postman",
            logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
            id: "1",
            name: "Thunder Clint",
            logo: "https://pbs.twimg.com/profile_images/1376177684024340483/gB1sRr1__400x400.jpg",
        },

        {
            id: "2",
            name: "Github",
            logo: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
        },

        {
            id: "3",
            name: "vsCode",
            logo: "https://lh5.googleusercontent.com/5ES-Ty5oZV246Psq5ABbOGxOn3MN5piHduRfeQRlXNj3aAW32v7K9rHYaSqdvOjFFfQ=w2400",
        },
        {
            id: "4",
            name: "Netlify",
            logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
        },
        {
            id: "4",
            name: "GitLab",
            logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        },

        {
            id: "4",
            name: "Jira Softwere",
            logo: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
        },

        {
            id: "5",
            name: "Vercel",
            logo: "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png",
        },
        {
            id: "6",
            name: "Canva",
            
            logo: "https://logolook.net/wp-content/uploads/2021/07/Canva-Logo.png",
        },
        {
            id: "6",
            name: "Cyclic",
            logo: "https://www.cyclic.sh/og/summary_large_image.png",
        },
    ];
    return (
        <div id="skills">
            <div id="Skills" style={{ height: "20px" }}></div>
            <div className="skills-card-name" id={style.skill}>
                <Heading
                    size={["xl", "xl", "xl", "xl"]}
                    fontFamily="Bree Serif, serif"
                    style={{
                        color: colorMode === "light" ? "#4C3575" : "#BFACE0",
                    }}
                    textAlign="center"
                    color="#243D25">
                    Skills
                </Heading>
                <div
                    className="skills-card"
                    id={style.skillDiv}
                    data-aos-mirror="true"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    {skillsArray.map((skill) => (
                        <div key={skill.name} className={style.skill_in_div}>
                            <div className="skills-card-img" data-aos="">
                                <img
                                    className={style.logo}
                                    src={skill.logo}
                                    alt={skill.name}
                                />
                            </div>
                            <p
                                className="skills-card-name"
                                id={style.skillH3}
                                style={{
                                    color:
                                        colorMode === "light"
                                            ? "#4C3575"
                                            : "#BFACE0",
                                }}>
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div id="Skills" style={{ height: "20px" }}></div>
            <div className="skills-card-name" id={style.skill}>
                <Heading
                    size={["xl", "xl", "xl", "xl"]}
                    fontFamily="Bree Serif, serif"
                    style={{
                        color: colorMode === "light" ? "#4C3575" : "#BFACE0",
                    }}
                    textAlign="center"
                    color="#243D25">
                    Tools
                </Heading>
                <div
                    className="skills-card"
                    id={style.skillDiv}
                    data-aos-mirror="true"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    {toolsArray.map((skill) => (
                        <div key={skill.name} className={style.skill_in_div}>
                            <div className="skills-card-img" data-aos="">
                                <img
                                    className={style.logo}
                                    src={skill.logo}
                                    alt={skill.name}
                                />
                            </div>
                            <p
                                className="skills-card-name"
                                id={style.skillH3}
                                style={{
                                    color:
                                        colorMode === "light"
                                            ? "#4C3575"
                                            : "#BFACE0",
                                }}>
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
