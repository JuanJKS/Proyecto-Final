import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div>
                <img src="img/clasesdeapoyo1b.jpg" alt="Clases Particulares"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos a mi espacio</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet totam, architecto maxime quidem accusantium nobis ab eos, ipsa a quisquam dolor autem velit libero pariatur laborum tempore, voluptatibus molestiae alias!</p>
                </div>
                <div className="testimonios">
                    <h2>Opiniones de mi clases</h2>
                    <h3>Lean lo que dicen alumnos y padres:</h3>
                    <div className="testimonio">
                        <span className="cita">Base de datos</span>
                        <span className="autor">Base de datos</span>
                    </div>
                </div>
            </div>
    </main>
    );
}

export default HomePage;