import React from 'react'

const Card = ({image,title,price}) => {
  return (
      <div style={{border:"1px solid black",padding:"1rem"}}>
          <img style={{width:"50%"}} src={image} alt="" />
          <h1>Title:{title}</h1>
          <p>Price:${price}</p>

    </div>
  )
}

export default Card