import React from 'react'

import { Link } from "react-router-dom";

import './styles/NotFound.css'


function NotFound() {

    const image_404 = 'https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png'

    return (
        <div className="_404_NotFound">
            <div className="message">
                <div className="titles">
                <h1 className="_404_title">Error 404 </h1>
                <h2 className="_404_subTitle">Página no encontrada</h2>
                </div>
                <Link to='/badges' className="btn btn-primary _404_btn">Volver</Link>
            </div>
            <div className="_404_image_container">
                <img src={image_404} alt="404 Not Found" className="_404_image"/>
            </div>
        </div>
    )

}

export default NotFound
