#  Formulário com Backend em Node.js

Este projeto é um formulário simples com os campos **nome**, **e-mail** e **telefone**, conectado a um backend em **Node.js**. Ao enviar, os dados são processados e enviados diretamente por e-mail usando o Nodemailer.

---

##  Tecnologias utilizadas

- HTML5 + CSS3 + JavaScript
- Node.js + Express
- Nodemailer
- dotenv
- body-parser
- cors

---

## Funcionalidades

 Validação de campos no backend  
 Envio de dados via `fetch` no frontend  
 Envio de e-mail automático ao receber um formulário 

---

## Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/mariacarolinesousa/Form.git

# 2. Entre na pasta do projeto
cd Form

# 3. Instale as dependências
npm install

# 4. Crie o arquivo .env com suas credenciais:

GMAIL_USER=seuemail@gmail.com
GMAIL_PASS=sua-senha-de-aplicativo
EMAIL_DESTINO=email-de-destino@gmail.com

# 5. Rode o servidor
node server.js

## Feito por: Maria Caroline Sousa

<picture>
<img src="/img/print_formulario.png" alt="Meu Primeiro Formulário">
</picture>

  
