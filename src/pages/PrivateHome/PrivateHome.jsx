import React, { useEffect, useState } from 'react'
import "./PrivateHome.css"
import { addLike, getPosts } from '../../services/apiCalls'
import { useSelector } from "react-redux"
import { userData } from '../../app/slices/userSlice';
import { Card } from '../../common/Card/Card';


export const PrivateHome = () => {
    const [userPosts, setUserPosts] = useState([])

    const rdxUser = useSelector(userData)

    useEffect(() => {
        const getUsersPosts = async () => {

            const posts = await getPosts(rdxUser.token)

            setUserPosts(posts.data)
        }

        if(userPosts.length === 0) {
            getUsersPosts()
        }

    }, [userPosts])

    const likePost = async (postId) => {
        const result = await addLike(rdxUser.token, postId);

        setUserPosts([])

        // const updatedPosts = userPosts.map( post => {
        //     if(postId === post._id) {
        //         if(result.message.includes("dislike")) {
        //                 return { ...post, likes: [...post.likes, rdxUser.userId]}
        //             } else {
        //                 return { ...post, likes: post.likes.filter(userId => userId !== rdxUser.userId) }
        //         }
        //     }

        //     return post
        // })

        // setUserPosts(updatedPosts);
    }

    return (
        <>
            <div className='privateHomeDesign'>
                {
                    userPosts.map((post, index) => (
                        <Card key={index} data={post} likePost={likePost}/>
                    ))
                }
            </div>
        </>
    )
}
