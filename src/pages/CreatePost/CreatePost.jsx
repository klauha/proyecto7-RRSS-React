import React, { useEffect, useState } from 'react'
import "./CreatePost.css"
import { useSelector } from "react-redux"
import { userData } from '../../app/slices/userSlice';
import { createPost } from '../../services/apiCalls';
import { Input } from '../../common/Input/Input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';

export const CreatePost = () => {
    const rdxUser = useSelector(userData)
    const navigate = useNavigate()

    const [newPost, setNewPost] = useState(
        {
            content: "",
            urlImg: ""
        }
    )
    const fetchPost = async () => {
        const result = await createPost(newPost)
        navigate("/home")
    }
    const inputHandler = (e) => {
        setNewPost((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }



    return (
        <>

        <div className='create-post-design'>
            <div className="container-post">
            <Input  
            className='inputForm'
            name="urlImg"
            onChange={inputHandler}
            type="text"
            />
              <textarea 
            className='textarea-post'
            name="content"
            onChange={inputHandler}
          
            />
             <Button
            title={"Crear"}
            className="ButtonDesign"
            onClick={createPost}
          />
        </div>
        </div>
        </>
    )
}
