import React, { useEffect, useState } from 'react'
import "./Profile.css"
import { getMyPosts, getProfile } from '../../services/apiCalls'
import { Card } from '../../common/Card/Card'
import { useSelector } from 'react-redux'
import { userData } from '../../app/slices/userSlice'
import { Input } from '../../common/Input/Input'
import { Button } from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'


export const Profile = () => {
    const [userPosts, setUserPosts] = useState([])
    const [userProfile, setUserProfile] = useState({})

    const rdxUser = useSelector(userData)
    const navigate = useNavigate()

    useEffect(() => {
        const getUserPosts = async () => {
            const result = await getMyPosts(rdxUser.token)

            setUserPosts(result.data);
        }
        getUserPosts()
    }, [])

    useEffect(() => {
        const getUserProfile = async () => {
            const result = await getProfile(rdxUser.token)

            setUserProfile(result.data);
        }
        getUserProfile()
    }, [])
    const redirectToEditProfile = () => {
        navigate('/edit-profile')
    }
    return (

        <div className='profileDesign'>
            <div className="user-profile">
                <div className="container-user-data">
                    <div className='profileImg'>
                        <img src="/img/imgprofile.jpg" alt="profilImg" />
                    </div>
                    <div className="container-data">
                        <div className="data-user">{userProfile.firstName}</div>
                        <div className="data-user">{userProfile.lastName}</div>
                        <div className="data-user">{userProfile.nickname}</div>

                        <Button
                            title={"Editar"}
                            className="button-profile"
                            onClick={redirectToEditProfile}
                        ></Button>
                    </div>
                </div>
                </div>
           
                {
                    userPosts.map((userPost, index) => (
                        <Card key={index} data={userPost} />
                    ))
                }
                
        </div>
    )
}
