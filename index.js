const express = require('express');
const app = express();
app.use(bodyParser.json());



const PORTA = 3000
app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta ${PORTA}`)
})
