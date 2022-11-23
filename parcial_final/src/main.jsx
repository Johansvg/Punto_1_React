import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './Inicio.jsx'
import Tabla from './Tabla.jsx'
import General from './General.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
  </React.StrictMode>
)
