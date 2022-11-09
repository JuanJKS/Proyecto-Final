import React from "react";
import Testimonios from "../components/layout/Testimonios";
import TarjetaModalidades from "../components/layout/TarjetaModalidades";
import EspecialidadesColegios from "../components/layout/EspecialidadesColegios";

import '../styles/components/pages/MisClasesPage.css';

const MisClasesPage = (props) => {
    return (
        <div className="section-myclasses">
            <div id="misclases" className="container-lg text-center total-container">
                <div className="col-12">
                    <h2 className="important-title">Modalidades de las clases</h2>
                </div>
                <div className="row">
                    <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" className="row row-cols-1 row-cols-md-2 g-4 container-cards">
                        <TarjetaModalidades
                            imagen="1"
                            titulo="Clases presenciales"
                            texto="Es importante remarcar que ambas modalidades son igual de efectivas, y en ambos casos dicha efectividad está muy atada al compromiso por parte del alumno/a para con el proceso (suelo decir que mi aporte es apenas el 30% del proceso, y que el otro 70% es el compromiso que asume la persona y/o grupo familiar que me contacta). Dicho esto, la modalidad presencial está enfocada en aquellas personas que sientan que de forma virtual no podrán asumir el mismo compromiso o tienen tendencia a la distracción. Te ofrezco mi espacio, que durante el proceso se transformará en tu espacio, para que te puedas desenvolver con total comodidad y puedas liberar toda tu capacidad. Dicho espacio cuenta con ambiente climatizado, pizarrón, mesa de estudio y elementos varios propios de la materia (de todos modos la persona debe concurrir a las clases con sus propios elementos de trabajo). No va a faltar el buen clima y la buena onda. No dejes de consultar!"
                        />
                        <TarjetaModalidades
                            imagen="2"
                            titulo="Clases virtuales"
                            texto="En mis clases virtuales también se le sacará provecho al poder que brinda el pizarrón a la hora de dar una clase, y fudamentalmente en esta modalidad disfrutarás de la comididad que significa poder tomar una clase desde tu casa o en el lugar que mas te guste, a su vez que se evitarán los tiempos y molestias que conllevan los traslados, y así sacarle mas provecho a tu tiempo. En cuanto a la dinámica de la clase, propongo una metodología fuera de lo convencional, que hoy por hoy está muy asociada a plataformas como Zoom, Meet o distintos estilos de videollamadas, y de las cuales yo personalmente considero que no ofrecen el escenario necesario para una clase de matemática o física. Mi metodología es mucho mas fluída de lo que te puedas imaginar, y a su vez conserva ese 'espacio personal' de trabajo sin que la persona se sienta invadida/observada, y de ese modo puedas liberar toda tu capacidad sin miedo al error ni vergüenza. No dejes de consultar!"
                        />
                    </div>
                </div>
                <div className="col-12 secondary-title">
                    <h2 className="important-title">Experiencias</h2>
                </div>
                <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Testimonios 
                                opinion="Quiero agardecer al profesor Juan Cruz, ya que Nicolás logró aprobar matemáticas. Se compromete al máximo con el objetivo y se preocupa por que aprenda."
                                autor="Graciela"
                                zona="Rosario"
                            />
                        </div>
                        <div className="carousel-item">
                        <Testimonios 
                                opinion="Lo recomiendo! Llevé a mi hijo de 11 años porque tenía problemas en matemáticas y supo explicarle. Gracias por tu gran paciencia Juan!!!"
                                autor="Nicolás"
                                zona="Colegiales"
                            />
                        </div>
                        <div className="carousel-item">
                        <Testimonios 
                                opinion="La primera vez que lo contacté casi no tenía tiempo de preparación y no aprobé, cosa que me dijo de entrada desde su sinceridad. Seguimos trabajando para la siguiente instancia y me fue genial. Sos un genio!"
                                autor="Antonella"
                                zona="San Telmo"
                            />
                        </div>
                        <div className="carousel-item">
                        <Testimonios 
                                opinion="A mis hijos siempre les costó mucho matemática, probé con muchos profes e igual les costaba. Juan los acompañó durante todo este año y no tuvieron que recuperar nada. Muchas gracias Juan."
                                autor="Fabiola"
                                zona="Caballito"
                            />
                        </div>
                        <div className="carousel-item">
                        <Testimonios 
                                opinion="La verdad que su clase virtual es un espectáculo, se le entiende bárbaro y es todo muy fluído. Logra que uno llegue a los resultados por sus propios medios..."
                                autor="Ezequiel"
                                zona="Neuquén"
                            />
                        </div>
                        <div className="carousel-item">
                        <Testimonios 
                                opinion="A pesar de la distancia, logra hacerse entender perfecto y las clases se te pasan volando. Muchas gracias Juan, pensé que no iba a poder, y por acá me resultaba re difícil conseguir profe."
                                autor="Valeria"
                                zona="Corrientes"
                            />
                        </div>
                        <div className="carousel-item">
                        <Testimonios 
                                opinion="Excelente profesor, es muy claro y práctico a la hora de enseñar y tiene buen método para captar la atención del alumno."
                                autor="Ariel"
                                zona="Flores"
                            />
                        </div>
                        <div className="carousel-item">
                        <Testimonios 
                                opinion="Soy una persona grande, tengo mas de 50 años y hacía una eternidad que no practicaba la matemática, tenía mucho miedo. Gracias por tu infinita paciencia, es increíble el don que tenés para explicar."
                                autor="Alejandra"
                                zona="Villa Urquiza"
                            />
                        </div>
                        <div className="carousel-item">
                        <Testimonios 
                                opinion="No te voy a decir que ahora me gusta matemática, pero la verdad que al menos no me molesta ir a tus clases jaja, sos groso Juan."
                                autor="Hernán"
                                zona="Saavedra"
                            />
                        </div>
                        <div className="carousel-item">
                        <Testimonios 
                                opinion="Es exigente, por momentos molesta que te corrija hasta el mas mínimo detalle, pero la verdad es que todo ese esfuerzo que conlleva su proceso luego se ve en las notas."
                                autor="Matías"
                                zona="Palermo"
                            />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon prev-testimony" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon next-testimony" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="col-12 secondary-title">
                    <h2 className="important-title">Especialidades</h2>
                </div>
                <EspecialidadesColegios />
            </div>
        </div>
    );
}

export default MisClasesPage;