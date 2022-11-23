import React from 'react'
import Tabla from './Tabla'
import Inicio from './Inicio'
// importar rutas
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function General() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <h1 className="text-center">Menu General</h1>
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id='navbarNav'>
                <ul className="navbar-nav">
                    <Link to='/Inicio' className='btn btn-outline-primary mx-3'>Inicio</Link>
                    <Link to='/Lanzapollo' className='btn btn-outline-primary mx-3'>Tabla</Link>
                </ul>
            </div>
        </nav>
        <Routes>
            <Route path="/Inicio" element={<Inicio />} />
        </Routes>
        <Routes>
            <Route path="Lanzapollo" element={<Tabla />} />
        </Routes>
    </Router>
            </div>
        </div>
    </div>
  )
}
