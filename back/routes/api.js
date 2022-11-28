var express = require('express');
var router = express.Router();
var opinionesModel = require('./../models/opinionesModel');
var nodemailer = require('nodemailer');

router.get('/opiniones', async function (req, res, next) {
    let opiniones = await opinionesModel.getOpiniones();

    opiniones = opiniones.map(opiniones => {
        return {...opiniones}
    });

    res.json(opiniones);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'bo_juancruz@hotmail.com',
        subject: 'Consulta Clases',
        html: `${req.body.nombre} te contactó para hacer una consulta. Su email es ${req.body.email} y su teléfono ${req.body.telefono}. <br> Su consulta es la siguiente: <br> ${req.body.mensaje}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail);

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado con éxito'
    });
});

module.exports = router;