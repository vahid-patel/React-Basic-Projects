import { Link } from "react-router-dom"

const NavBar = () =>{

    return(
        <nav className="nav-bar">
            <div className="navbar-brand">
                <Link to={"/"}>Movie Finder</Link>
            </div>
            <div className="navbar-links">
                <Link to = "/home">Home</Link>
                <Link to="/favourite">Favourites</Link>
            </div>
        </nav>
    )
}

export default NavBar;