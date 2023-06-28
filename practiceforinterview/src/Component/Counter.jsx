import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount((prev)=>prev + 1);
    };

    const handlereduce = () => {
        setCount((prev)=> prev- 1);
    };
    const handlereset = () => {
        setCount(0);
    };
    return (
        <div style={{ width: "40%", margin: "auto" }}>
            <h1>Counter app :{count} </h1>

            <button
                style={{ background: "green" }}
                disabled={count === 20}
                onClick={handleAdd}>
                Add
            </button>
            <button
                style={{ background: "teal" }}
                disabled={count === 0}
                onClick={handlereduce}>
                Reduce
            </button>
            <button style={{ background: "red" }} onClick={handlereset}>
                Reset
            </button>
        </div>
    );
};

export default Counter;
