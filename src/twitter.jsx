import { useState } from "react"

export function Twitter ({initialfollowing, arroba, usuario, name}){ //se pueden dar valores preseteados, por ejemplo usuario='unknown'

  const [isFollowing, setIsFollowing] = useState(initialfollowing) // OJO, Cuando se renderiza un componente padre, tambien se renderiza el children
  //OJO, El estado inicial, solo se inicializa 1 vez, es decir, si se usa el isFollowing como prop solo se inicia una vez, asi cambie de estado en otro lado
  const manejarClick = () => { //Cuando no hay cambios en demas componentes, se renderiza pero no se actualiza el DOM
    setIsFollowing(!isFollowing)
  }

  const siguiendo = isFollowing ? 'Siguiendo' : 'Seguir' //If especial
  const siguiendoClass = isFollowing ? 'tw-seguir tw-siguiendo' : 'tw-seguir'
  
  return(
      <article className='tw-card'>
        <header className='tw-card-header'>
          <img className='tw-perfil-img' src="https://unavatar.io/dribbble/omidnikrah" alt="avatar" />
          <div className='tw-header-div'>
            <strong className='tw-nombrePr'>{usuario}</strong>
            <span className='tw-nombreUs'>{arroba(name)}</span>
          </div>
        </header>
        <aside>
          <button className={siguiendoClass} onClick={manejarClick}>
          {siguiendo}
          </button>
        </aside>
      </article>
    )
  }