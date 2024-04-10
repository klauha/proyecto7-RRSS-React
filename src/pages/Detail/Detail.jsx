import "./Detail.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../common/Card/Card'
import { getPostId } from '../../services/apiCalls'
import { useSelector } from 'react-redux'
import { userData } from '../../app/slices/userSlice'

export const Detail = () => {
    const params = useParams()
    const rdxUser = useSelector(userData)
    const [postDetail, setPostDetail]= useState({})
    const [zoom, setZoom] = useState(false);
    useEffect (()=>{
        const getPost = async()=>{
            const result = await getPostId(rdxUser.token, params.id)
            setPostDetail(result.data)
        }
        getPost()
    }, [])

  return (
    <div className='detailDesign'>
        <Card data={postDetail}
        onClick={() => setZoom(!zoom)} className={zoom ? 'zoom' : ''}
        />
    </div>
  )
}
