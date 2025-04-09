import { Link } from "react-router-dom"
import "../css/Navbar.css"
const NavBar = () =>{

    return(
        <nav className="navbar">
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