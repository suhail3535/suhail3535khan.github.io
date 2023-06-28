import React from "react";
import Wave from "react-wavify";
import "./HomeSvg.css";

const HomeSvg = ({ dir }) => {
    return (
        <div className="root-home-svg">
            <Wave
                className="wave"
                // fill="#222222"
                fill="yellow"
                style={{
                    transform: dir === "up" ? "rotate(0deg)" : "rotate(180deg)",
                    marginTop: dir === "down" ? "-6px" : "0px",
                }}
                paused={false}
                options={{
                    height: 23,
                    amplitude: 45,
                    speed: 0.21,
                    points: 5,
                }}
            />
        </div>
    );
};

export default HomeSvg;
