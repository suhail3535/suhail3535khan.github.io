import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [data, setData] = useState("")
    const handleData = (newData) => {
        setData(newData)
    }
  return (
      <div>
          <Child handleData={handleData} />
          <h1>I am getting Data from child Componet:{data}</h1>


    </div>
  )
}

export default Parent