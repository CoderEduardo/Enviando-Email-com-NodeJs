const nodemailer = require("nodemailer")

//configurações de quem vai mandar o email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
     user: 'email responsavel por enviar ',
     pass: 'senha gerada pelo app',
    },
   });
 
   //função que vai mandar o email
   const sendEmail = (email, conteudo) => {
    //informações do email
    const mailOptions = {
     from: 'email que vai mandar',
     to: email,
     subject: 'Titulo do email',
     text:conteudo
   };
   
   //disparar email e verificar se tudo deu certo
   transporter.sendMail(mailOptions, function (error, info) {
     if (error) {
       console.log('Erro ao enviar o email:  ' + error);
       return true;
     } else {
      console.log('Email enviado com sucesso: ' + info.response);
      return false;
     }
    });
   };

   module.exports = sendEmail