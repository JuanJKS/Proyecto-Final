import React from "react";
import { NavLink } from "react-router-dom";


import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul className="holder">
                    <li><NavLink to="/home" className={({ isActive }) => (isActive ? "activo" : "")}>HOME</NavLink></li>
                    <li><NavLink to="/matematica" className={({ isActive }) => (isActive ? "activo" : "")}>MATEMÁTICA</NavLink></li>
                    <li><NavLink to="/fisica" className={({ isActive }) => (isActive ? "activo" : "")}>FÍSICA</NavLink></li>
                    <li><NavLink to="/misclases" className={({ isActive }) => (isActive ? "activo" : "")}>MIS CLASES</NavLink></li>
                    <li><NavLink to="/sobremi" className={({ isActive }) => (isActive ? "activo" : "")}>SOBRE MÍ</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => (isActive ? "activo" : "")}>CONTACTO</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;