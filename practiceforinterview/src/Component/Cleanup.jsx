import React, { useEffect, useState } from 'react'

const Cleanup = () => {

    useEffect(() => {
        console.log("component has mounted")
        
        return (() => {
            console.log("component has unmounted")
        })
    },[])
  return (
      <div style={{ width: "40%", margin: "auto" }}>
          <h1>Cleanup app</h1>


      </div>
  );
}

export default Cleanup