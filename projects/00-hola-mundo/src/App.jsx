import './App.css'
export function App (){
    return(
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar" 
                alt="Avatar de usuario" 
                src="https://unavatar.io/DilianUs"/>
                <div className="tw-followCard-userData">
                    <strong className="tw-followCard-userName">Dilian Us Cachon</strong>
                    <span className="tw-followCard-userAlias">@dilanus</span>
                </div>
            </header>
            <aside className="tw-followCard-aside">
                <button className="tw-followCard-followButton">
                    Seguir
                </button>
            </aside>
            
        </article>
    )
}