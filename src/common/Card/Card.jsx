import React, { useEffect, useState } from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
import { addLike } from '../../services/apiCalls'

export const Card = ({ data }) => {
  const navigate = useNavigate()

  const postDetail = (postId) => {
    console.log(postId);
    navigate("/post-detail/" + postId)
  }

  const likePost = async () => {
    const result = await addLike(rdxUser.token)
  }


  return (
    <>

      <div className='card' onClick={() => postDetail(data._id)}>

        <img src={data.urlImg} />
        <p> {data.content}</p>
        <div>{data.likes}</div>
        <div className="like-icon" onClick={likePost}>
          ❤️
        </div>

      </div>

    </>
  )
}