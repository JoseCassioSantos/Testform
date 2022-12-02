//criar login

//verificar login

function logout() {
  localStorage.setItem("estado", "");
  document.location.reload(true);
}

function verStatus() {
  currentState = localStorage.getItem("estado");

  console.log(currentState);

  if (currentState === "logado") {
    console.log("ta de boa!");



    document.querySelector("#conta_nome").innerHTML = `Nome: ${localStorage.getItem("perfil")}`;
    document.querySelector("#conta_email").innerHTML = `Email: ${localStorage.getItem("email")}`;

  

  } else {
    location = "login.html";
  }
}

verStatus();

//persistir login

//criar logout
