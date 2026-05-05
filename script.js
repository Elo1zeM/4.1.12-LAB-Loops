let contatos = [
  { nome: "Luna Mel", telefone: "(15) 99719 6495", email: "luna.docemel39@gmail.com" },
  { nome: "Guilherme Batista", telefone: "(15) 99398 2895", email: "guilherme.batista@gmail.com" },
  { nome: "Jaqueline Batista", telefone: "(15)99800 1111", email: "jaqueline.batista@gmail.com" }
];

let ativo = true;

function mostrarContato(contato) {
  return `
    <p><strong>Nome:</strong> ${contato.nome}</p>
    <p><strong>Telefone:</strong> ${contato.telefone}</p>
    <p><strong>Email:</strong> ${contato.email}</p>
    <hr>
  `;
}

function executar(opcao) {
  const saida = document.getElementById("saida");
  saida.innerHTML = "";

  if (!ativo) {
    saida.innerHTML = "<p>Programa encerrado.</p>";
    return;
  }

  switch(opcao) {
    case "primeiro":
      if (contatos.length > 0) {
        saida.innerHTML = mostrarContato(contatos[0]);
      }
      break;

    case "ultimo":
      if (contatos.length > 0) {
        saida.innerHTML = mostrarContato(contatos[contatos.length - 1]);
      }
      break;

    case "todos":
      // LOOP FOR
      for (let i = 0; i < contatos.length; i++) {
        saida.innerHTML += mostrarContato(contatos[i]);
      }
      break;

    case "encerrar":
      ativo = false;
      saida.innerHTML = "<p>Programa encerrado.</p>";
      break;
  }
}

// ADICIONAR CONTATO SEM PROMPT
function adicionarContato() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const saida = document.getElementById("saida");

  if (nome && telefone && email) {
    contatos.push({ nome, telefone, email });

    saida.innerHTML = "<p>Contato adicionado com sucesso!</p>";

    // limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
  } else {
    saida.innerHTML = "<p>Preencha todos os campos!</p>";
  }
}