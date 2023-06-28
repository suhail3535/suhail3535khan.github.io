import React, { useRef, useState } from "react";

const Ref = () => {
    const [data, setData] = useState("");
    const inputRef = useRef(null);

    const handleChange = () => {
        setData(data);
        // inputRef.current.style.backgroundColor = "red"
        inputRef.current.focus()
        inputRef.current.style.border="2px solid green"
        console.log(inputRef.current.value);
    };
    return (
        <div>
            <h1>UseRef hook</h1>

            <input
                type="text"
                ref={inputRef}
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <button onClick={handleChange}>click me</button>
        </div>
    );
};

export default Ref;
