
formInc = (evento) => {
    evento.preventDefault();

    const dados = document.querySelector("#formNotas");

    const iform = new FormData(dados);

    for(var pair of iform.entries()) {
     
      console.log(`*${pair[0]}* : '${pair[1]}'`);

   }

   

}