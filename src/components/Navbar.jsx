import { Link } from "react-router-dom";
import '../styles/Navbar.css';

export default function NavBar() {
    return (
        <nav>
            <div className="nav__links">    
                <Link to="/" className="home__link">
                    HOME
                </Link>
            </div>
        </nav>
    );
}