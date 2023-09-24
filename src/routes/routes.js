const { Router } = require("express");

// PATH PARA ACCEDER A UN ARCHIVO QUE ESTE EN OTRA CARPETA
const path = require('path');

// MODULO PARA ENVIOS DE CORREOS
const nodemailer = require('nodemailer');

const router = Router();


const objeto = {

    
    
}



router.post('/send-email', async (req, res) => {
    

    const imagePath = path.join(__dirname, '../public/images/Untitled.jpg');
    //PARA VERIFICAR SI ESTA RECIBIENDO LOS DATOS
    console.log(req.body);
    const {email, message} = req.body;

    //HACIENDO UN HTML PARA EL CORREO

    contentHTML = `
        Informacion del usuario\n
        ESTOS SON LOS DATOS Y PRUEBA SI ESTA FUNCIONANDO\n
        CORREO: ${email}\n
        MENSAJE: ${message}
    `;

    const transporter = nodemailer.createTransport({

        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,

        auth: {

            user: 'projectarek@outlook.com',
            pass: 'qazedcwsxtgbrfv575'
        }
    });


    // UNA VEZ HECHA LA PETICION ESTO ENVIARA UNA RESPUESTA DONDE SE GUARDARA EN INFO
    
    const info_sendEmail = await transporter.sendMail({
    
        from: 'PRUEBA DE CORREO <projectarek@outlook.com>',
        to: 'projectarek@outlook.com',
        text: contentHTML
    })
    console.log('Mensahe enviado', info_sendEmail.messageId)
    res.sendFile(imagePath)

})


module.exports = router;