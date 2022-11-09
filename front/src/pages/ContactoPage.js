import React from "react";
import { Fragment } from "react";
import ColumnaHome from "../components/layout/ColumnaHome";
import { BsSmartwatch } from "react-icons/bs";
import { FcPhoneAndroid } from "react-icons/fc";
import { GrMail } from "react-icons/gr";

import '../styles/components/layout/ColumnaHome.css'
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <div className="section-contact">
            <div id="contacto" className="container-lg total-container">
                <div className="col-12">
                    <h2 className="important-title">Contacto</h2>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" className="container-form-maps">
                    <div className="col-xs-12 col-xl-7 container-form">
                        <form className="row g-3 needs-validation" novalidate>
                            <div className="col-12">
                                <h4>Dejame tu consulta sin compromiso</h4>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Ingrese su nombre" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustom02" className="form-label">Teléfono</label>
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Ingrese su número" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustomUsername" className="form-label">Correo electrónico</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" className="form-control" id="validationCustomUsername" placeholder="Ingrese su email" aria-describedby="inputGroupPrepend" required />
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="validationTextarea" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="validationTextarea" placeholder="¡No dudes en consultar!" required></textarea>
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary button-form" type="submit">Enviar mensaje</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-xl-5 container-maps">
                        <div className="col-12">
                            <h4>Zona Colegiales</h4>
                        </div>
                        <iframe title="Mapa" width="100%" scrolling="no" height="285" frameBorder="0" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.30815037800798!2d-58.45093486265529!3d-34.58062745359435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5e8857365fd%3A0x2cf64a92887846cb!2sAv.+%C3%81lvarez+Thomas+%26+Av.+Federico+Lacroze%2C+Buenos+Aires!5e0!3m2!1ses-419!2sar!4v1549754104006%20width=600%20height=450%20frameborder=0%20style=border:0%20allowfullscreen/iframe&amp;output=embed"></iframe>
                    </div>
                </div>
                <div className="container-lg container-final-contact">
                    <div className="col-12 col-xl-4 container-col-final-contact">
                        <ColumnaHome
                            icono={<BsSmartwatch />}
                            titulo={<Fragment><h3>Horario de atención</h3></Fragment>}
                            texto="Lunes a domingo de 8 a 22 hs"
                        />
                    </div>
                    <div className="col-12 col-xl-3 container-col-final-contact">
                        <ColumnaHome
                            icono={<FcPhoneAndroid />}
                            titulo={<Fragment><h3>Celular</h3></Fragment>}
                            texto="11-5062-9428"
                        />
                    </div>
                    <div className="col-12 col-xl-4 container-col-final-contact">
                        <ColumnaHome
                            icono={<GrMail />}
                            titulo={<Fragment><h3>E-Mail</h3></Fragment>}
                            texto="bo_juancruz@hotmail.com"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactoPage;