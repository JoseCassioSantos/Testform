localStorage.setItem(
  "usuarios",
  (dados = JSON.stringify([
    {
      nome: "cassio",
      senha: "102030",
      email: "cassio.santos@neobpo.com.br",
    },
    {
      nome: "emerson",
      senha: "102031",
      email: "emerson.spereira@neobpo.com.br",
    },
    {
      nome: "joão",
      senha: "102032",
      email: "exemplo@email.com.br",
    },
    {
      nome: "jefferson",
      senha: "102033",
      email: "exemplo@email.com.br",
    },
    {
      nome: "caio",
      senha: "102034",
      email: "exemplo@email.com.br",
    },
    {
      nome: "matheus",
      senha: "102035",
      email: "exemplo@email.com.br",
    },
    {
      nome: "fabiana",
      senha: "102036",
      email: "fabiana.souza@neobpo.com.br",
    },
    {
      nome: "carlos",
      senha: "102037",
      email: "carlos.cavalcante@neobpo.com.br",
    },
  ]))
);

pegarDados = (evento) => {
  evento.preventDefault();

  const login = document.querySelector("form");

  const form = new FormData(login);

  let res = localStorage.getItem("usuarios", dados);

  res = JSON.parse(res);

  const pUser = form.get("usuario");
  const pSenha = form.get("senha");

  res.forEach((nome) => {
    let dUser = nome.nome;
    let dSenha = nome.senha;
    let dEmail = nome.email;

    if (pUser !== dUser) {
      setTimeout(() => {
        document.querySelector("#reslt").style.color = "var(--cor2)";
        document.querySelector("#reslt").style.background = "#eea0a0";
        document.querySelector("#reslt").textContent = "Usuario ou senha Incorreto";
        document.querySelector("#reslt").style.display = "block";
      }, 1000);

      setTimeout(() => {
        document.querySelector("#reslt").style.display = "none";
      }, 4000);
    } else {
      if (pSenha !== dSenha) {
      } else if (pSenha == dSenha) {
        location = "index.html";
        localStorage.setItem("estado","logado");
        localStorage.setItem("perfil", dUser);
        localStorage.setItem("email", dEmail);
      }
    }
  });

  currentState = localStorage.getItem("estado");

};
