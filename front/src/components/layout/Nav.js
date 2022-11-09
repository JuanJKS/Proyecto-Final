import React from "react";

import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    /*const homePageEl = document.getElementById('home');
    const mathsPageEl = document.getElementById('matematica');
    const physicalPageEl = document.getElementById('fisica');
    const myClassesPageEl = document.getElementById('misclases');
    const aboutMePageEl = document.getElementById('sobremi');
    const contactPageEl = document.getElementById('contacto');*/

    const navSections = document.querySelectorAll('.nav-link');

    const isClickOnSection = (e) => {
        /*observer.disconnect();*/

        for (let i = 0; i < navSections.length; i++) {
            navSections[i].classList.remove('nav-active');
        }
        e.target.classList.add('nav-active');

        let navButton = document.querySelector("#navbarNav");
        navButton.classList.remove("show");

        console.log(navButton); //Me ayudas a entender porqué logré que esto funcione? Si le pongo un onlick al boton de despliegue para ver qué clase tiene cuando lo despliego y cuando lo guardo, tocando sobre él, me muestra la clase collapsing, no me muestra la clase show

        /*setTimeout(() => {
            observer.observe(homePageEl);
            observer.observe(mathsPageEl);
            observer.observe(physicalPageEl);
            observer.observe(myClassesPageEl);
            observer.observe(aboutMePageEl);
            observer.observe(contactPageEl);
        }, 1000);*/
    };

    /*const addActive = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                for (let i = 0; i < navSections.length; i++) {
                    if (entry.target.id === navSections[i].name) {
                        navSections[i].classList.add('nav-active');
                    } else {
                        navSections[i].classList.remove('nav-active');
                    }
                }
            }
        });
    };

    const observer = new IntersectionObserver(addActive, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5
    });

    observer.observe(homePageEl);
    observer.observe(mathsPageEl);
    observer.observe(physicalPageEl);
    observer.observe(myClassesPageEl);
    observer.observe(aboutMePageEl);
    observer.observe(contactPageEl);*/

    
    


        
    /*const isClickOnSection = (e) => {
        let navSections = document.querySelectorAll(".nav-link");
        for (let i = 0; i < navSections.length; i++) {
            navSections[i].classList.remove("nav-active");
        }
        e.target.classList.add("nav-active");

        let navButton = document.querySelector("#navbarNav");
        navButton.classList.remove("show");

        console.log(navButton); //Me ayudas a entender porqué logré que esto funcione? Si le pongo un onlick al boton de despliegue para ver qué clase tiene cuando lo despliego y cuando lo guardo, tocando sobre él, me muestra la clase collapsing, no me muestra la clase show
    };*/

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid nav-site">
                <img className="navbar-brand" src="img/logojuancruz44.png" alt="Clases Particulares" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" name="home" aria-current="page" href="#home" onClick={isClickOnSection}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="matematica" href="#matematica" onClick={isClickOnSection}>Matemática</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="fisica" href="#fisica" onClick={isClickOnSection}>Física</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="misclases" href="#misclases" onClick={isClickOnSection}>Mis Clases</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="sobremi" href="#sobremi" onClick={isClickOnSection}>Sobre Mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="contacto" href="#contacto" onClick={isClickOnSection}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;