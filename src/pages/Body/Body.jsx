import { Routes, Route } from "react-router-dom"
import { Home } from "../Home/Home"
import { Login } from "../Login/Login"
import { Register } from "../Register/Register"
import { PrivateHome } from "../PrivateHome/PrivateHome"
import { editProfile } from "../editProfile/editProfile"

// import { Admin } from "../Admin/Admin"

export const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateHome />} />
            <Route path="/edit-profile" element={<editProfile />} /> 
            {/* <Route path="/admin/users" element={<Admin />} />             */}
        </Routes>
    )
}