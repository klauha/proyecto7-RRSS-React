import React, { useEffect, useState } from 'react'
import "./PrivateHome.css"
import { getPosts } from '../../services/apiCalls'
import { useSelector } from "react-redux"
import { userData } from '../../app/slices/userSlice';
import { Card } from '../../common/Card/Card';


export const PrivateHome = () => {
    const [userPosts, setUserPosts] = useState([{}])

    const rdxUser = useSelector(userData)

    useEffect(() => {
        const getUsersPosts = async () => {
            console.log("hola");
            const posts = await getPosts(rdxUser.token)
            console.log(posts);
            setUserPosts(posts.data)
        }

        getUsersPosts()
    }, [])

    return (
        <>
            {if (userPost.length > 0)
                <div className='privateHomeDesign'>
                    {
                        userPosts.map((post, index) => (
                            <Card key={index} data={post}/>
                        ))
                    }
                </div>
            }
            
        </>
    )

}
