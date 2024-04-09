import React from 'react'
import "./Card.css"

export const Card = ({ data }) => {
  return (
    <>
     
     <div className='card'>
        
        <img src={data.urlImg}  />
        <p> {data.content}</p>
        <div>{data.likes}</div>

      </div>
     
    </>
  )
}