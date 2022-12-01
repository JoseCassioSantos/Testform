localStorage.setItem(
  "usuarios",
  (dados = JSON.stringify([
    {
      nome: "cassio",
      senha: "102030",
      nivel: 2,
    },
    {
      nome: "emerson",
      senha: "102031",
    },
    {
      nome: "joão",
      senha: "102032",
    },
    {
      nome: "jefferson",
      senha: "102033",
    },
    {
      nome: "caio",
      senha: "102034",
    },
    {
      nome: "matheus",
      senha: "102035",
    },
  ]))
);

let res;

function pegarDados(evento) {
  evento.preventDefault();

  const login = document.querySelector("form");

  const form = new FormData(login);

  let res = localStorage.getItem("usuarios", dados);

  res = JSON.parse(res);

  //console.log(res)

  const pUser = form.get("usuario");
  const pSenha = form.get("senha");

  res.forEach((nome) => {
    let dUser = nome.nome;
    let dSenha = nome.senha;

    if (pUser !== dUser) {
      console.log(`${pUser} não encontrado`);
    } else {
      console.log(`${pUser} é igual ${dUser} `);

      if (pSenha !== dSenha) {
        console.log("Senha incorreta");
      } else if (pSenha == dSenha) {
        console.log("Tudo ok");
        location = "index.html";
        localStorage.setItem("estado", "logado");
      }
    }
  });

  currentState = localStorage.getItem("estado");

  console.log(currentState);
}
