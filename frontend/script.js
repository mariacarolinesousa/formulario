document.getElementById('formulario').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  //pegando via names 
  const dados = {
    nome: form.nome.value.trim(),
    email: form.email.value.trim(),
    telefone: form.telefone.value.trim(),
  };

  const resposta = await fetch('api/enviar', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });

  if(!resposta.ok) {
    const err = await resposta.json().catch(() => ({ erro: 'Erro desconhecido'}));
    throw new Error(err.erro || 'Erro no envio');
  }

const resultado = await resposta.json();
alert(resultado.mensagem || 'Enviado com sucesso!');
form.reset();
} ,{catch (error) {
  console.error('Erro ao enviar:', error);
  alert('Não foi possível enviar o formulário. Veja o console para detalhes.')
}

});
