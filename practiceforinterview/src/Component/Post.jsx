import React, { useEffect } from "react";
import { useState } from "react";

const update = JSON.parse(localStorage.getItem("data")) || [];
console.log(update);
const Post = () => {
    const [data, setData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };






    const handleData = () => {
        const newData = {
            email: data.email,
            password: data.password,
        };
        console.log(newData);
        localStorage.setItem("data", JSON.stringify(newData));
    };
    return (
        <div>
            <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            <br />
            <button onClick={handleData}>Submit</button>

            <hr />

            <div>
                <div>
                    <h1>{update.email}</h1>
                    <h2>{update.password}</h2>
                </div>
            </div>
        </div>
    );
};

export default Post;
