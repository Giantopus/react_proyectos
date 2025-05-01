import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

// Componentes, son PascalCase

const root = createRoot(document.getElementById('root'))

// const ButtonPrueba = ({text}) => { // Creacion de un componente
//     return(
//         <button>{text}</button>
//     )
// }

// root.render(
//     <React.Fragment>
//         <ButtonPrueba text="hola"></ButtonPrueba>
//         <ButtonPrueba text="hola"></ButtonPrueba>
//         <ButtonPrueba text="hola"></ButtonPrueba>
//     </React.Fragment>
// )

root.render(
    <App/>
)
