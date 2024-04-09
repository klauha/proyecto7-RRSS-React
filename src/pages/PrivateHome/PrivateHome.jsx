import React, { useEffect, useState } from 'react'
import "./PrivateHome.css"
import { getPosts } from '../../services/apiCalls'


export const PrivateHome = () => {
    const [userPosts, setUserPosts] = useState([{}])

    useEffect(() => {
        const getUsersPosts = async () => {
            const posts = await getPosts()
            console.log("postsp",posts);
            setUserPosts(posts)
        }
    
        getUsersPosts()
    }, [])

    return (
        <>
            <div className='privateHomeDesign'>
                private Home 
            </div>
        </>
    )

}
