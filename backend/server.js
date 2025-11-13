const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//Permite receber dados JSON e aceitar requisições de outros domínios
app.use(cors({ origin: 'http://127.0.0.1:5500'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Rota para receber o formulário 
app.post('/enviar', (req, res) => {
  const {nome, email, telefone } = req.body;
  console.log(`Novo envio: ${nome}, ${email}, ${telefone}`);

  //salva no banco, manda por email, etc..
  res.json({ mensagem: 'Formulário recebido com sucesso!'});
});

//Iniciando o Servidor(no render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
})

