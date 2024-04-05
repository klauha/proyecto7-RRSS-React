import React from 'react'
import "./Header.css"
import { CustomLink } from '../CustomLink/CustomLink'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';


export const Header = () => {
  const navigate = useNavigate()

  const [token, setToken] = useState(localStorage.getItem('token'))
  const [role, setRole] = useState(localStorage.getItem('role'))

  const handleLogout = () => {
    // Eliminamos el token del localStorage y actualizamos el estado local
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    localStorage.removeItem("role")
    setToken(null)
    navigate("/login")
  }

  return (
    <>
      {
        token ? (<div className='headerDesign'>
          <div className="header-logout">
            { (role != "user") ? role : ""}
            {/* path={"/admin/users"} */}
            
          </div>
          <CustomLink
            title={"Home"}
            path={"/"}
          />
          <CustomLink
            title={"Services"}
            path={"/services"}
          />
          <CustomLink
            title={"Profile"}
            path={"/profile"}
          />
          <div className="header-logout" onClick={handleLogout}>
            Log Out
          </div>
        </div>

        ) : (
          <div className='headerDesign'>
            <CustomLink
            title={"Home"}
            path={"/"}
          />
            <CustomLink
              title={"Services"}
              path={"/services"}
            />
            <CustomLink
              title={"Registro"}
              path={"/register"}

            />
            <CustomLink
              title={"Login"}
              path={"/login"}
            />
          </div>
        )}
    </>
  )
}

