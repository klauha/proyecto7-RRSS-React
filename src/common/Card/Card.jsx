import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'

export const Card = ({ data }) => {

  const navigate = useNavigate()

  const postDetail = (postId) => {
    console.log(postId);
    navigate("/post-detail/" + postId)
  }

  return (
    <>
     
     <div className='card' onClick={() => postDetail(data._id)}>
        
        <img src={data.urlImg}  />
        <p> {data.content}</p>
        <div>{data.likes}</div>

      </div>
     
    </>
  )
}