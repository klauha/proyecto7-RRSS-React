import { Routes, Route } from "react-router-dom"
import { Home } from "../Home/Home"
import { Login } from "../Login/Login"
import { Register } from "../Register/Register"
import { PrivateHome } from "../PrivateHome/PrivateHome"
import { EditProfile } from "../EditProfile/EditProfile"
import { CreatePost } from "../CreatePost/CreatePost"
import { Profile } from "../Profile/Profile"
import { Detail } from "../Detail/Detail"
import { Admin } from "../Admin/Admin"

// import { Admin } from "../Admin/Admin"

export const Body = () => {
    return (
        <Routes> 
            <Route path="/" element={<Home />} />          
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateHome />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit-profile" element={<EditProfile />} /> 
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/post-detail/:id" element={<Detail />} /> 
            <Route path="/admin/users" element={<Admin />} />            
        </Routes>
    )
}