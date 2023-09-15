import airbnbLogo from '../assets/img/airbnb-logo.png'

function Navbar() {
    
    return(
        <nav className="navbar bg-white d-flex align-items-center">
            <div className="logo-div">
                <img className="logo-img" src={airbnbLogo}/>
            </div>
        </nav>
    )
}

export default Navbar