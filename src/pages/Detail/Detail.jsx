import "./Detail.css"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from '../../common/Card/Card'
import { deletePostById, getPostId } from '../../services/apiCalls'
import { useSelector } from 'react-redux'
import { userData } from '../../app/slices/userSlice'
import { Button } from "../../common/Button/Button"

export const Detail = () => {
  const params = useParams()
  const rdxUser = useSelector(userData)
  const [postDetail, setPostDetail] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const getPost = async () => {
      const result = await getPostId(rdxUser.token, params.id)
      setPostDetail(result.data)
    }
    getPost()
  }, [])

  const deletePost = async () => {
    try {
      const postToDelete = await deletePostById(rdxUser.token, params.id)
      setPostDetail(result.data)
      navigate('/profile')
    } catch (error) {

    }
  }

  return (
    <div className='detailDesign '>
      <Card
        data={postDetail}
        className="card-detail"
      />
      <Button
        title={"Eliminar Post"}
        className="ButtonDesign"
        onClick={deletePost}
      ></Button>
    </div>

  )
}
