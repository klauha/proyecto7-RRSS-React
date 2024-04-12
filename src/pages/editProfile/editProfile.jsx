import React, { useEffect, useState } from 'react'
import "./EditProfile.css"
import { Input } from '../../common/Input/Input'
import { editProfiles, getProfile } from '../../services/apiCalls'
import { Button } from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userData } from '../../app/slices/userSlice'

export const EditProfile = () => {
  const [userProfile, setUserProfile] = useState({})
  const [hadleInputDisable, setHandleInputDisable] = useState(true)
  const rdxUser = useSelector(userData)
  const navigate = useNavigate()


  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login')
  //   }
  // }, [token])

  // Efecto para obtener los datos del perfil del usuario cuando el componente se monta
  useEffect(() => {
    const getUserProfile = async () => {
      const result = await getProfile(rdxUser.token)

      setUserProfile(result.data);
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
        firstName: userProfile.first_name,
        lastName: userProfile.last_name
      }
      // Llamamos a la función para editar el perfil utilizando la API

      const updateUserProfile = await editProfiles(dataToUpdate,token)

    } catch (error) {

      // / Cambiar el estado para habilitar/deshabilitar la edición después de actualizar
    } finally {
      setHandleInputDisable(!hadleInputDisable)
    }
  }
  // Función para manejar cambios en los inputs
  const inputHandler = (e) => {
    setUserProfile((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  }

  return (
    <>
      <div className='profileDesign'>
        <div className='dataUser'>
          <div className='profileImg'>
            <img src="/img/imgprofile.jpg" alt="profilImg" />
          </div>
          <Input
            className="inputProfileDesign"
            type="text"
            name="first_name"
            value={userProfile.first_name || ""}
            disabled={hadleInputDisable}
            onChangeFunction={inputHandler}
          ></Input>
          <Input
            className="inputProfileDesign"
            type="text"
            name="last_name"
            value={userProfile?.last_name ?? ""}
            disabled={hadleInputDisable}
            onChangeFunction={(e) => inputHandler(e)}
          ></Input>
           {/* <Input
            className="inputProfileDesign"
            type="text"
            name="nickname"
            value={userProfile.nickname || ""}
            disabled={true}
          ></Input> */}
          
          <Input
            className="inputProfileDesign"
            type="text"
            name="email"
            value={userProfile.email || ""}
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