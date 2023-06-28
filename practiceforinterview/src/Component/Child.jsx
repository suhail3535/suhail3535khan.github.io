import React from 'react'

const Child = ({ handleData }) => {
    const hanldestate = () => {
        const newData = "hello i from child componet 2nd time"
        handleData(newData)
    }


    return (
        <div>
            <button onClick={hanldestate}>I am child component</button>


        </div>
    )
}

export default Child