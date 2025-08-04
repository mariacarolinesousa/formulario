const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//Criando transportador para o nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail.com',
    auth: {
        user: 'caroline@gmail.com',
        pass: 'xxxx xxxx xxxx xxxx'
    }
});

// Middleware para permitir requisições de outros domínios e processar JSON 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para receber os dados do formulário
app.post('/enviar', (req, res) => {
  const { nome, email, telefone } = req.body;

  // Verificação simples
  if (!nome || !email || !telefone) {
    return res.status(400).json({ erro: 'Preencha todos os campos.' });
  }

  console.log('Dados Recebidos:');
  console.log('Nome:', nome);
  console.log('Email:', email);
  console.log('Telefone:', telefone);

  // Enviando resposta para o navegador
  res.status(200).json({ mensagem: 'Formulário enviado com sucesso!' });
});

// Iniciando o Servidor
app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
