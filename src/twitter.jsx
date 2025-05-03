import { useState } from "react"

export function Twitter ({arroba, usuario, name}){ //se pueden dar valores preseteados, por ejemplo usuario='unknown'

  const [isFollowing, setIsFollowing] = useState(false)
  const manejarClick = () => {
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