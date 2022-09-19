import React from "react";

const SobreMiPage = (props) => {
    return (
        <div>
            <div className="mifoto">
                <div className="holder">
                    <div id="prueba">
                        <img src="img/juanbo.jpg" width="113" height="113" alt="Juan Bo"/>
                        <h1>Prof. Juan Cruz Bo</h1>
                    </div>
                </div>
            </div>
            <main>
                <div className="columnas holder">
                    <div className="formacion">
                        <h2>Formación</h2>
                        <h3>Universidad Tecnológica Nacional (Ingeniería Industrial)</h3>
                        <div>
                            <ul className="holder">
                                <li>Marzo de 2006 a Diciembre de 2011.</li>
                                <li>54/54 Materias aprobadas.</li>
                                <li>Promedio: 8,29.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="descripcion">
                        <h2>Acerca de mí</h2>
                        <p>Me especializo desde hace años dictando clases de apoyo de Matemática y Física a niños, adolescentes y adultos de todos los niveles.<hr/> Mi modalidad de trabajo es especial para aprender y comprender de manera práctica y fácil los temas y procedimientos que la materia requiera.</p>  
                    </div>
                </div>
            <div id="imagen">
                <img src="img/juan-cruz-bo.jpg" alt="Clases Particulares"/>
            </div>
        </main>
    </div>
    );
}

export default SobreMiPage;