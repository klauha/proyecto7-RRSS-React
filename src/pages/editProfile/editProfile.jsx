import React, { useEffect, useState } from 'react'
import "./editProfile.css"
import { Input } from '../../common/Input/Input'
import { editProfiles, getProfile } from '../../services/apiCalls'
import { Header } from '../../common/Header/Header'
import { Button } from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'


export const editProfile = () => {

  const [userProfileData, setUserProfileData] = useState({})
  const [hadleInputDisable, setHandleInputDisable] = useState(true)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const navigate = useNavigate()


  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token])

  // Efecto para obtener los datos del perfil del usuario cuando el componente se monta
  useEffect(() => {
    const getUserProfile = async () => {
      const profile = await getProfile()
      setUserProfileData(profile.data)
    }
    getUserProfile()
  }, [])

  // Función para habilitar/deshabilitar la edición de datos
  const editData = () => {
    setHandleInputDisable(!hadleInputDisable)
  }

  // Función para editar el perfil de usuario
  const editProfileUser = async () => {
    try {

      const dataToUpdate = {
        firstName: userProfileData.first_name,
        lastName: userProfileData.last_name
      }
      // Llamamos a la función para editar el perfil utilizando la API

      const updateUserProfile = await editProfiles(dataToUpdate)

    } catch (error) {

      // / Cambiar el estado para habilitar/deshabilitar la edición después de actualizar
    } finally {
      setHandleInputDisable(!hadleInputDisable)
    }
  }
  // Función para manejar cambios en los inputs
  const inputHandler = (e) => {
    setUserProfileData((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  }

  return (
    <>
      <Header />
      <div className='profileDesign'>
        <div className='dataUser'>
          <div className='profileImg'>
            <img src="/img/imgprofile.jpg" alt="profilImg" />
          </div>
          <Input
            className="inputProfileDesign"
            type="text"
            name="first_name"
            value={userProfileData.first_name || ""}
            disabled={hadleInputDisable}
            onChangeFunction={inputHandler}
          ></Input>
          <Input
            className="inputProfileDesign"
            type="text"
            name="last_name"
            value={userProfileData?.last_name ?? ""}
            disabled={hadleInputDisable}
            onChangeFunction={(e) => inputHandler(e)}
          ></Input>
          <Input
            className="inputProfileDesign"
            type="text"
            name="email"
            value={userProfileData.email || ""}
            disabled={true}
          ></Input>
          <div className="buttons">
            <Button
              title={"Editar"}
              className="ButtonDesign"
              onClick={editData}
            />
            <Button
              title={"Actualizar"}
              className="ButtonDesign"
              onClick={editProfileUser}
            />
          </div>

        </div>
      </div>
    </>
  )
}