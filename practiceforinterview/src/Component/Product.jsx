import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const fetchData = () => {
    //     try {
    //         axios.get("https://fakestoreapi.com/products").then((res) => {
    //             console.log(res.data)
    //             setData(res.data);
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(() => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
            ;
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading........</h1>
            ) : data.length > 0 ? (
                <div
                    style={{
                        border: "1px solid gray",
                        display: "grid",
                        gridTemplateColumns: "repeat(4,1fr)",
                        gap: "2rem",
                    }}>
                    {data.map((ele) => {
                        return <Card key={ele.id} {...ele} />;
                    })}
                </div>
            ) : (
                <h1>something went wrong.........</h1>
            )}
        </div>
    );
};

export default Product;
