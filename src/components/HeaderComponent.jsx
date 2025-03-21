import './HeaderComponent.css'

function HeaderComponent() {
    return (
        <>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li className='header-li'>Home</li>
                    <li className='header-li'>About Me</li>
                    <li className='header-li'>Experience</li>
                    <li className='header-li'>Contact me</li>
                </ul>
            </nav>        
        </>
    )
}

export default HeaderComponent