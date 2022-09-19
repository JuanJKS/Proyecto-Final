import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul className="holder">
                    <li><Link to="/"><input type="button" value="HOME"/></Link></li>
                    <li><Link to="/matematica"><input type="button" value="MATEMÁTICA"/></Link></li>
                    <li><Link to="/fisica"><input type="button" value="FÍSICA"/></Link></li>
                    <li><Link to="/misclases"><input type="button" value="MIS CLASES"/></Link></li>
                    <li><Link to="/sobremi"><input type="button" value="SOBRE MÍ"/></Link></li>
                    <li><Link to="/contacto"><input type="button" value="CONTACTO"/></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;