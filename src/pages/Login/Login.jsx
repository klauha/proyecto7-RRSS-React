
import React, { useState } from 'react'
import { Input } from '../../common/Input/Input'
import "./Login.css"
import { login } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'
import { Header } from '../../common/Header/Header'
import { Button } from '../../common/Button/Button'

export const Login = () => {

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
      localStorage.setItem("token", responseApiLogin.token)
      localStorage.setItem('name', decoded.username)
      localStorage.setItem('role', decoded.roleName)
      navigate("/home")
      // window.location.href = "/home";
    } else {
      // Si el inicio de sesión es exitoso y el usuario es admin o superadmin
      localStorage.setItem("token", responseApiLogin.token)
      localStorage.setItem('name', decoded.username)
      localStorage.setItem('role', decoded.roleName)
      navigate("/admin/users")
      // window.location.href = "/admin/users";
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
      <Header />

      <div className='loginDesign'>
        <div className="formLogin">
        <h3> Inicia sesión</h3>
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
