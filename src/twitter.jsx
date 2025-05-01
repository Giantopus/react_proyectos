export function Twitter ({usuario, name}){
    return(
      <article className='tw-card'>
        <header className='tw-card-header'>
          <img className='tw-perfil-img' src="https://unavatar.io/dribbble/omidnikrah" alt="avatar" />
          <div className='tw-header-div'>
            <strong className='tw-nombrePr'>{name}</strong>
            <span className='tw-nombreUs'>@{usuario}</span>
          </div>
        </header>
        <aside>
          <button className='tw-seguir'>
            Seguir
          </button>
        </aside>
      </article>
    )
  }