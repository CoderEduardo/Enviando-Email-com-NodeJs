# Enviando Email com NodeJs

# É muito fácil usar o node para enviar email, mas antes de entrar no código precisamos configurar o email responsável por isso.

1) Primeiramente você precisa ativar a autenticação de dois fatores do seu email, que você pode acessar por esse link: https://myaccount.google.com/security

2) Depois disso vamos acessar o App password, dentro da propria configuração de autenticação de dois fatores, dentro do app password você vai 
criar um projeto, pode ser qualquer um com qualquer nome, precisamos criar esse app apenas para pegar uma chave de pop-up para inserir depois no código.

3) Vamos precisar fazer os seguintes baixar as seguintes bibliotecas para poder rodar esse projeto localmente

        npm install express 
        npm install nodemailer

4)  Logo em seguida você vai entrar no arquivo sendEmail.js e fazer as alterações necessárias, como adicionar o seu email e a senha gerada pelo pop-up, e outras coisas informadas, depois no index você vai dentro da função sendEmail() e passar como primeiro parâmetro o email que vai receber a informação, e o segundo parâmetro é uma variável, que está declara em cima, onde você pode alterar o conteúdo que vai ser enviado para o destinatário 

5) E por último você vai acessar o seu terminal (já dentro da pasta onde você salvou esse repositório), e executar o seguinte comando

    node index 

Logo em seguida o console vai exibir uma mensagem de falha o sucesso.
