import React from "react";

import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Dejame tu consulta sin compromiso</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label className="message" for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar mensaje"/></p>
                </form>
            </div>
            <div>
                <h2>Zona: Colegiales - CABA -</h2>
                <div className="holder maps">
                    <img src="img/mapa.png" width="" height="" alt="Mapa"/>
                </div>
            </div>
    </main>
    );
}

export default ContactoPage;