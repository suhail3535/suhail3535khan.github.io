import React, { useEffect, useState } from 'react'
import axios from "axios"
const Test = () => {
    const [data, setData] = useState([])
    const [userPosts, setUserPosts] = useState([]);
    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
            setData(res.data)
            console.log(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }

    const fetchUserPosts = async () => {
        const userPostsData = data.filter((post) => post.id === 8);
        setUserPosts(userPostsData);
        console.log(userPosts)
    };
    useEffect(() => {
        getData()
        fetchUserPosts()
    }, [])
    console.log(data.data, "alldata")
    return (
        <div>

           <h1>Post of user have id 8</h1>
            {userPosts.map((ele) => {
                return <div>
                    <h3>userId:{ele.id}</h3>
                    <h4>Title:{ele.title}</h4>
                    <h5>Body:{ele.body}</h5>
                </div>
            })}

            <h1>Alluser Data</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
                {data.map((ele) => {
                    return <div style={{ border: "1px solid gray" }} key={ele.id}>
                        <h1>id:{ele.id}</h1>
                        <h4>title:{ele.title}</h4>
                        <h5>body:{ele.body}</h5></div>
                })}
            </div>

            <hr />




        </div>
    )
}

export default Test

// Problem Statement
// You are required to fetch data from the following APIs:

// 1. Fetch all the posts using "https://jsonplaceholder.typicode.com/posts/".
// 2. Show the posts which has an userId of 8.
// 3. Fetch the count of Emails for postID 8 from "https://jsonplaceholder.typicode.com/comments" that correspond to the userId of 8(which can be determined by checking the postId field).
