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
        console.log(newPost);
        const result = await createPost(rdxUser.token,newPost)
        console.log('Response:', result);
        navigate("/home")
    }

    const inputHandler = (e) => {
        console.log(e.target.value);
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
                    <label htmlFor="">Añada la URL de la imagen:</label>
                    <Input
                        className='inputForm'
                        name="urlImg"
                        onChangeFunction={(e) => inputHandler(e)}
                        type="text"
                    />
                    <label htmlFor="">Escriba la información:</label>
                    <textarea
                        className='textarea-post'
                        name="content"
                        onChange={inputHandler}
                    />
                    <Button
                        title={"Crear"}
                        className="ButtonDesign"
                        onClick={fetchPost}
                    />
                </div>
            </div>
        </>
    )
}
