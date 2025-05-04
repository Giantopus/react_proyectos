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

    const users = [
      {
        name: 'JuanSv',
        usuario: 'Juan Sabaleta',
        isFollowing: false
      },
      {
        name: 'ElenaVP',
        usuario: 'Elena Pino',
        isFollowing: true
      },
      {
        name: 'DanielCC',
        usuario: 'Daniel casado',
        isFollowing: false
      }
    ]
    
  return(
    <>
    {/* EN LOS COMPONENTES SE PUEDEN PASAR FUNCIONES, NO SOLO DATOS */}
      <Twitter initialfollowing arroba={formatArroba} usuario="Daniel Felipe Vargas" name="DanielV"/> 
      <Twitter initialfollowing arroba={formatArroba} usuario="Daniel Felipe Vargass" name="DanielVs"/>
      <Twitter initialfollowing={false} arroba={formatArroba} usuario="Daniel Felipe Vargafs" name="DanielVf"/>
    
    { //OJO, LAS FUNCIONES DE JS, deben ir dentro de {}
      users.map(user => { //Users en un arreglo y .map una funcion para recorrer el arreglo y devuelve uno nuevo transformado, cada arreglo pequeño se llama user
        const {name, usuario, isFollowing} = user; //desestructura el arreglo principal: const name = user.name; const usuario = user.usuario;
        return(
          <Twitter key={name} initialfollowing={isFollowing} arroba={formatArroba} usuario={usuario} name={name}/> 
        )
       }) 
    }
    </>

  )
}