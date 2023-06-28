import React, { useEffect, useRef, useState } from "react";

const Ref2 = () => {
    const [data, setData] = useState("");
    // const[count,setCount]=useState(0)
    const count = useRef(1);

    const handleChange = (e) => {
        setData(e.target.value);

    };
    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <div>
            Ref2
            <br />
            <input ref={count} type="text" value={data} onChange={handleChange} />
            <h1>The number of times render:{count.current}</h1>
        </div>
    );
};

export default Ref2;
