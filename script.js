document.getElementById('formulario').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const dados = {
    nome: form.nome.value,
    email: form.email.value,
    telefone: form.telefone.value,
  };

  const resposta = await fetch('http://localhost:5500/enviar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });

  const resultado = await resposta.json();
  alert(resultado.mensagem || resultado.erro);
});
