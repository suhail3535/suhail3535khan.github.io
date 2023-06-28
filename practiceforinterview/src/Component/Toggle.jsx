import React, { useState } from 'react'

const Toggle = () => {
    const [istoggle, setIstoggle] = useState(true)

    const handleTheme = () => {
        setIstoggle(!istoggle)
    }

    return (
        <div>
            <div style={{width:"40%",margin:"auto"}}>
            <h1>status is :{istoggle ? "ON" : "OFF"}</h1>
            <button onClick={handleTheme} style={{backgroundColor:istoggle?"green":"red",width:"50%", margin:"auto",height:"50px",border:"none"}}>
                {istoggle ? "ON" : "OFF"}
            </button>
            </div>


        </div>
    )
}

export default Toggle