//logout
logout = () => {
  localStorage.setItem("estado", "");
  localStorage.setItem("perfil", "");
  localStorage.setItem("email", "");
  document.location.reload(true);
};

onload = () => {
  currentState = localStorage.getItem("estado");

  console.log(currentState);

  if (currentState === "logado") {
    console.log("ta de boa!");

    document.querySelector(
      "#conta_nome"
    ).innerHTML = `Nome: ${localStorage.getItem("perfil")}`;
    document.querySelector(
      "#conta_email"
    ).innerHTML = `Email: ${localStorage.getItem("email")}`;

    let pl = localStorage.getItem("perfil");

    document.querySelector("#perfil_content").innerHTML = pl[0].toUpperCase();
  } else {
    location = "login.html";
  }
};

setInterval(() => {
  let novaHora = new Date();
  let data = new Date();

  let hora = novaHora.getHours();
  let minuto = novaHora.getMinutes();
  let segundo = novaHora.getSeconds();

  let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Augosto",
    "Setembro",
    "Outubro",
    "Nov",
    "Dezembro",
  ];
  let semana = [
    "Domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "Sabado",
  ];

  let dia = data.getDate();
  let mes = meses[data.getMonth()];
  let ano = novaHora.getFullYear();
  let dsemana = semana[data.getDay()];

  minuto = zero(minuto);
  segundo = zero(segundo);

  document.getElementById(
    "hora"
  ).innerHTML = `<br>${hora}:${minuto}:${segundo} ${dsemana}<br> ${dia}/${mes}/${ano}`;
}, 1000);

zero = (x) => {
  if (x < 10) {
    x = "0" + x;
  }
  return x;
};
