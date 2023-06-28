import React, { useState } from "react";
import "./Toggler.css"
const Toggler = () => {
    const [toggle, setIstoggle] = useState(false);

    const handleToggle = () => {
        setIstoggle(!toggle);
    };

    return (
        <div style={{width:"50%",margin:"auto"}}>
            <h1>Toggler app </h1>
            <button
                onClick={handleToggle}
                className={toggle ? "tog1":"tog2"}>
                {toggle ? "ON" : "OFF"}
            </button>
        </div>
    );
};

export default Toggler;
