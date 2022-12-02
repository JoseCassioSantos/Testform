//criar login

//verificar login

function logout() {
  localStorage.setItem("estado", "");
  localStorage.setItem("perfil", "");
  localStorage.setItem("email", "");
  document.location.reload(true);
}

function verStatus() {
  currentState = localStorage.getItem("estado");

  console.log(currentState);

  if (currentState === "logado") {
    console.log("ta de boa!");



    document.querySelector("#conta_nome").innerHTML = `Nome: ${localStorage.getItem("perfil")}`;
    document.querySelector("#conta_email").innerHTML = `Email: ${localStorage.getItem("email")}`;

    let pl = localStorage.getItem("perfil")
   
   document.querySelector("#perfil_content").innerHTML = pl[0].toUpperCase();

    

  } else {
    location = "login.html";
  }
}

verStatus();

//persistir login

//criar logout
