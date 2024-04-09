import React from 'react'
import "./FooterBar.css"
import { CustomLink } from '../CustomLink/CustomLink'

export const FooterBar = () => {
  return (
    <>
        <div className="footer-bar-container">
    
          <CustomLink
            title={"Home"}
            path={"/"}
          />     
          <CustomLink
            title={"Crear Post"}
            path={"/create-post"}
          />  
          <CustomLink
            title={"Perfil"}
            path={"/profile"}
            />  
            </div>
    </>
  )
}
