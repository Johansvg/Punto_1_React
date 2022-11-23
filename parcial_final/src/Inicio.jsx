import React from 'react'
import ImagenPrueba from './images/imagen_prueba.png'
import Imagen2 from './images/imagen_prueba2.jpg'

export default function Inicio() {
  return (
    <div>
        <h1 className='text-center'>Carousel</h1>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={ImagenPrueba} className="d-block w-50 h-50" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src={Imagen2} className="d-block w-50 h-50" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src={ImagenPrueba} className="d-block w-50 h-50" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
            </div>
    </div>
  )
}
