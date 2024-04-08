import React, { useEffect } from 'react'
import "./Header.css"
import { CustomLink } from '../CustomLink/CustomLink'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { logoutRdx, userData } from '../../app/slices/userSlice';


export const Header = () => {
  //Instancia de conexion a modo lectura
  const rdxUser = useSelector(userData);

  //Instancia de conexion a modo escritura
  const dispatch = useDispatch();

  console.log(rdxUser.token);
  // useEffect(() => {
  //   console.log(rdxUser, " credenciales pasaporte");
  // }, [rdxUser]);

  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('hola');

    // Eliminamos el token del store y actualizamos el estado local
    dispatch(logoutRdx({ token: "" }))
    console.log(rdxUser);
    navigate("/login")
  }

  return (
    <>
      {
        rdxUser.token ? (<div className='headerDesign'>
          <div className="header-logout">
            {(rdxUser.role != "user") ? rdxUser.role : ""}
            {/* path={"/admin/users"} */}

          </div>
          <CustomLink
            title={"Home"}
            path={"/"}
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

