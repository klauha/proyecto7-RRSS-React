import React from 'react'
import "./PrivateHome.css"

import { Header } from '../../common/Header/Header'



export const PrivateHome = () => {
    return (
        <>
            <Header />
            <div className='privateHomeDesign'>
                <div className="sidebar">
                    <div className="container-img">
                        <img src="" alt="profilImg" />
                    </div>
                    <div className="container-data">
                      <div className="data-style">Nombre</div>
                      <div className="data-style">Apellidos</div>
                      <div className="data-style">Nickname</div>

                    </div>
                </div>
                <div className="feed">h</div>
            </div>
        </>
    )
}

