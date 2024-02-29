const express = require('express');
const app = express();
const sendEmail = require("./controllers/sendEmail")

let texto = "conteudo que vai ser enviado"
//Função passando por parâmetro o email e conteúdo
sendEmail("email para quem vai ser enviado",texto)


const PORTA = 3000
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`)
})
