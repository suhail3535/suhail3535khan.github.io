import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { store } from "./Store";
import {
    getRequest,
    getRequestfailure,
    getRequestsuccess,
    getpostuestsuccess,
} from "./Redux/Action";
import axios from "axios";

const Data = () => {
const [text, setText] = useState("");
const [price, setPrice] = useState("");

    const { product, isLoading } = useSelector((store) => {
        console.log(store,"store")
        return {
            product: store.product,
            isLoading: store.isLoading,
        };
    }, shallowEqual);
    console.log(store);
    const dispatch = useDispatch();
    const getData = () => {
        dispatch(getRequest());
        axios
            .get("http://localhost:8080/product")
            .then((res) => {
                dispatch(getRequestsuccess(res.data));
                console.log(res.data);
            })
            .catch((err) => {
                dispatch(getRequestfailure());
            });
    };


      const newData = {
          name: text,
          price: price,
      };
    const handleSubmit = (e) => {
        e.preventDefault()


        postData2(newData);
        

    }

    const postData = (payload) => {
        dispatch(getRequest())
        axios.post("http://localhost:8080/product", newData)
            .then((res) => {
                dispatch(getpostuestsuccess(res.data))
                console.log(res.data)
            })
            .catch((err) => {
            dispatch(getRequestfailure())
        })
 }

    const postData2 = () => {
        axios.post("http://localhost:8080/product", newData).then((res) => {
        console.log(res.data)
        }).catch((err) => {
        console.log(err)
    })
}





    useEffect(() => {
        getData();
    },[]);
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input type="submit" />
                </form>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                }}>
                {isLoading ? (
                    <h1>Loading......</h1>
                ) : (
                    product.length > 0 &&
                    product.map((ele) => (
                        <div key={ele.id}>

                            <h1>{ele.name}</h1>
                            <p>{ele.price}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Data;
