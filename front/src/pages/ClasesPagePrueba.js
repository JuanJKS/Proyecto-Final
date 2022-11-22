import { React, useState, useEffect } from "react";
import axios from "axios";

import Testimonios from "../components/layout/Testimonios";
import TarjetaModalidades from "../components/layout/TarjetaModalidades";
import EspecialidadesColegios from "../components/layout/EspecialidadesColegios";

import '../styles/components/pages/MisClasesPage.css';

const ClasesPagePrueba = (props) => {
    const [loading, setLoading] = useState(false);
    const [opiniones, setOpiniones] = useState([]);

    useEffect(() => {
        const cargarOpiniones = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/opiniones');
            setOpiniones(response.data);
            setLoading(false);
        };

        cargarOpiniones();
    }, []);


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
                            texto="En mis clases virtuales también se le sacará provecho al poder que brinda el pizarrón a la hora de dar una clase, y fundamentalmente en esta modalidad disfrutarás de la comodidad que significa poder tomar una clase desde tu casa o en el lugar que mas te guste, a su vez que se evitarán los tiempos y molestias que conllevan los traslados, y así sacarle mas provecho a tu tiempo. En cuanto a la dinámica de la clase, propongo una metodología fuera de lo convencional, que hoy por hoy está muy asociada a plataformas como Zoom, Meet o distintos estilos de videollamadas, y de las cuales yo personalmente considero que no ofrecen el escenario necesario para una clase de matemática o física. Mi metodología es mucho mas fluida de lo que te puedas imaginar, y a su vez conserva ese 'espacio personal' de trabajo sin que la persona se sienta invadida/observada, y de ese modo puedas liberar toda tu capacidad sin miedo al error ni vergüenza. No dejes de consultar!"
                        />
                    </div>
                </div>
                <div className="col-12 secondary-title">
                    <h2 className="important-title">Especialidades</h2>
                </div>
    <EspecialidadesColegios />
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
                        {
                            loading ? (
                                <p>Cargando...</p>
                            ) : (
                                opiniones.map(item => 
                                    <div id="container-opinion-carrousel" key={item.id_op} className="carousel-item active">
                                        <Testimonios 
                                            key={item.id_op}
                                            opinion={item.opinion}
                                            autor={item.autor}
                                            zona={item.zona} />
                                    </div>)
                                )
                            } 
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
            </div>
        </div>
    );
}

export default ClasesPagePrueba;