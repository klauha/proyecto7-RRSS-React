import React, { useEffect, useState } from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
import { addLike } from '../../services/apiCalls'
import {  useSelector } from 'react-redux';
import {  userData } from '../../app/slices/userSlice';

export const Card = ({ data }) => {
  const navigate = useNavigate()
  //Instancia de conexion a modo lectura
  const rdxUser = useSelector(userData);


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
        <div className="like-icon" onClick={likePost}>
          ❤️ 
        </div>
        <div className="info-card">
        <h4 className='nickname'>{data.userId && data.userId.nickname}</h4>
        <p className='content'> {data.content}</p>
        </div>
        <div>{data.likes}</div>
      

      </div>

    </>
  )
}