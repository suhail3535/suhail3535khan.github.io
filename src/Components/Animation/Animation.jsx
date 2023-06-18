import React from "react";
import Wave from "react-wavify";
import "./Animation.css";

const Animation = ({ dir }) => {
    return (
        <div className="root-home-svg">
            <Wave
                className="wave"

                fill="#7858a6"
                style={{
                    transform: dir === "up" ? "rotate(0deg)" : "rotate(180deg)",
                    marginTop: dir === "down" ? "-6px" : "0px",
                }}
                paused={false}
                options={{
                    height: 10,
                    amplitude: 25,

                    speed: 0.21,
                    points: 6,
                }}
            />
        </div>
    );
};

export default Animation;
