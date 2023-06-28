import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PostData = () => {
    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [updateId, setUpdateId] = useState(null);

    const newData = {
        name: name,
        age: age,
        course: course
    };
//Post Request
    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:8080/product", newData);
            console.log(response.data);
            clearForm();
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    //get request
    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/product");
            console.log("getuser", response.data);
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    };
//Delet Request
    const deleteData = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/product/${id}`);
            console.log(response.data);
            getData();
        } catch (error) {
            console.log(error);
        }
    };
//Upadte Request
    const updateData = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/product/${updateId}`, newData);
            console.log(response.data);
            clearForm();
            setUpdateId(null);
            getData();
        } catch (error) {
            console.log(error);
        }
    };
//for UpdateData
    const handleUpdate = (id) => {
        const selectedItem = user.find((item) => item.id === id);
        setName(selectedItem.name);
        setAge(selectedItem.age);
        setCourse(selectedItem.course);
        setUpdateId(id);
    };
///most important
    const handleSubmit = (e) => {
        e.preventDefault();
        if (updateId) {
            updateData();
        } else {
            postData();
        }
    };

    const clearForm = () => {
        setName("");
        setAge("");
        setCourse("");
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>UserData</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <label>Age:</label>
                <input type="text" placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} required /><br />
                <label>Course:</label>
                <input type="text" placeholder='course' value={course} onChange={(e) => setCourse(e.target.value)} required /><br />
                <input type="submit" value={updateId ? "Update" : "Submit"} />
            </form>
            <hr />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
                {user.map((item) => {
                    return (
                        <div key={item.id} style={{ border: "1px dotted gray", padding: "10px", textAlign: "center" }}>
                            <h1>{item.name}</h1>
                            <p>{item.age}</p>
                            <p>{item.course}</p>
                            <button onClick={() => handleUpdate(item.id)}>Edit</button>
                            <button onClick={() => deleteData(item.id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PostData;
