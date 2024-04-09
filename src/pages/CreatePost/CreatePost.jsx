import React, { useEffect } from 'react'
import "./CreatePost.css"

export const CreatePost = () => {

    const [newPost, setNewPost] = useState(
        {
            content: "",
            urlImg: ""
        }
    )
    const fetchPost = async () => {
        const result = await createPost(newPost)
        navigate("/my-appointments")
      }
    









    return (
        <div className='create-post-design'>CreatePost</div>
    )
}
