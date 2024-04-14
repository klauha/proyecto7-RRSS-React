
import React, { useState } from 'react'
import { Input } from '../../common/Input/Input'
import "./Login.css"
import { login } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'
import { Header } from '../../common/Header/Header'
import { Button } from '../../common/Button/Button'

import { useDispatch } from "react-redux";
import { loginRdx } from "../../app/slices/userSlice";


export const Login = () => {
  //Instancia de Redux para escritura
  const dispatch = useDispatch();

  const [bodyCredentials, setBodyCredentials] = useState(
    {
      email: "",
      password: ""
    }
  )

  const navigate = useNavigate()

  const LogMe = async () => {
    // Llamar a la función de inicio de sesión proporcionando las credenciales
    const responseApiLogin = await login(bodyCredentials)
    const decoded = decodeToken(responseApiLogin.token)

    console.log(decoded);
    // Si el inicio de sesión es exitoso y el usuario tiene rol user
    if (responseApiLogin.success && decoded.roleName === "user") {
      dispatch(loginRdx({
        token: responseApiLogin.token,
        userId: decoded.userId,
        // name: decoded.username,
        role: decoded.roleName
      }))

      navigate("/home")
    } else {
      // Si el inicio de sesión es exitoso y el usuario es admin o superadmin
      dispatch(loginRdx({
          token: responseApiLogin.token,
          userId: decoded.userId,
          // name: decoded.username,
          role: decoded.roleName
      }))

      navigate("/home")
    }
  }

  const inputHandler = (e) => {
    setBodyCredentials((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))

  }
  return (
    <>
      <div className='loginDesign'>
        <div className="formLogin">
          <h5> Accede a tu cuenta</h5>
          <Input
            className="inputDesign"
            type="email"
            placeHolder="email"
            name="email"
            onChangeFunction={(e) => inputHandler(e)}
          />
          <Input
            className="inputDesign"
            type="password"
            placeHolder="password"
            name="password"
            onChangeFunction={(e) => inputHandler(e)}
          />

          <Button
            title={"Entrar"}
            className="ButtonDesign"
            onClick={LogMe}
          />
        </div>
      </div>
    </>
  )
}
