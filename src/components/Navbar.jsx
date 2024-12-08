import {Link} from "react-router-dom";
import navbarStyles from "../css/Navbar.module.css"

const Navbar = () => {
	return (
		<nav className={navbarStyles.navbar}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/movies">Peliculas</Link>
				</li>
				<li>
					<Link to="/series">Series</Link>
				</li>
                <li>
					<Link to="/actors">Actores</Link>
				</li>
				<li>
					<Link to="/contact">Contacto</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;