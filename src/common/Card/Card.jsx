import React, { useEffect, useState } from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
import { addLike } from '../../services/apiCalls'
import { useSelector } from 'react-redux';
import { userData } from '../../app/slices/userSlice';

export const Card = ({ data, likePost }) => {
  const navigate = useNavigate()
  //Instancia de conexion a modo lectura
  const rdxUser = useSelector(userData);


  const postDetail = (postId) => {
    navigate("/post-detail/" + postId)
  }

  return (
    <>
      <div className='card'>
        <img src={data.urlImg} onClick={() => postDetail(data._id)}/>
        <div className="like-icon" onClick={() => likePost(data._id)}>
          ❤️ {data.likes?.length}
        </div>
        <div className="info-card">
          <h4 className='nickname'>{data.userId && data.userId.nickname}</h4>
          <p className='content'> {data.content}</p>
        </div>
      </div>
    </>
  )
}