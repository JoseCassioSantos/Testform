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
  } else {
    location = "login.html";

    alert("voce não esta logado");
  }
}

verStatus();

//persistir login

//criar logout
