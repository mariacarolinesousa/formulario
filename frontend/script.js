const form = document.getElementById('formulario');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); //impede o carregamento da página

  const dados = {
    nome: form.nome.value,
    email: form.email.value,
    telefone: form.telefone.value
  };

  try {
    const resposta = await fetch('http://localhost:3000/enviar', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();
    alert(resultado.mensagem);
    form.reset();
    } catch (erro) {
      alert('Erro ao enviar formulário.');
      console.error(erro);
    }
    });
