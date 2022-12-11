
formInc = (evento) => {
    evento.preventDefault();

    const dados = document.querySelector("#formNotas");

    const iform = new FormData(dados);


    for (const value of iform.values()) {
        console.log(value)
      }

      

}