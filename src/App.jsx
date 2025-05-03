import './App.css'
import { Twitter } from './twitter.jsx'

export function App (){ 

  const formatArroba = (name) => `@${name}` //componente es una fabrica de elementos
  // componente = una funcion que al ejecutarse da un elemento
  // elemento = lo que renderiza react

    // Ej componente (PUEDE SER HTML, LOGICA, ESTILOS, PROPS, ESTADOS):
    // function Saludo() {
    //   return <h1>Hola, mundo</h1>;
    // }

    // function TarjetaUsuario(props) {
    //   return (
    //     <div>                     // ← elemento JSX (div)
    //       <h2>{props.nombre}</h2> // ← elemento JSX (h2)
    //       <p>Edad: {props.edad}</p> // ← elemento JSX (p)
    //     </div>
    //   );
    // }

    //Consejo 2:
    // Procurar que las props sean inmutables.
    
  return(
    <>
    {/* EN LOS COMPONENTES SE PUEDEN PASAR FUNCIONES, NO SOLO DATOS */}
      <Twitter arroba={formatArroba} usuario="Daniel Felipe Vargas" name="DanielV"/> 
      <Twitter arroba={formatArroba} usuario="Daniel Felipe Vargass" name="DanielVs"/>
      <Twitter arroba={formatArroba} usuario="Daniel Felipe Vargafs" name="DanielVf"/>
    </>
  )
}