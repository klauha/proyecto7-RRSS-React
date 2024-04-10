import React, { useEffect, useState } from 'react'
import "./Profile.css"
import { getMyPosts, getProfile } from '../../services/apiCalls'
import { Card } from '../../common/Card/Card'
import { useSelector } from 'react-redux'
import { userData } from '../../app/slices/userSlice'
import { Input } from '../../common/Input/Input'
import { Button } from '../../common/Button/Button'


export const Profile = () => {
    const [userPosts, setUserPosts] = useState([])
    const [userProfile, setUserProfile] = useState([])

    const rdxUser = useSelector(userData)

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
            console.log(result);

            setUserProfile(result.data);
        }
        getUserProfile()
    }, [])

    return (

        <div className='profileDesign'>
            <div className="userProfile">
                <div className="container-user-data">
                    <div className='profileImg'>
                        <img src="/img/imgprofile.jpg" alt="profilImg" />
                    </div>
                    <div className="container-data">
                        <Input
                            className="inputProfileDesign input-profile"
                            type="text"
                            name="first_name"
                        // value={userProfileData.first_name || ""}
                        // disabled={hadleInputDisable}
                        // onChangeFunction={inputHandler}
                        ></Input>
                        <Input
                            className="inputProfileDesign input-profile"
                            type="text"
                            name="last_name"
                        // value={userProfileData?.last_name ?? ""}
                        // disabled={hadleInputDisable}
                        // onChangeFunction={(e) => inputHandler(e)}
                        ></Input>
                        <Button
                            title={"Editar"}
                            className="button-profile"
                        //   onClick={LogMe}
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
