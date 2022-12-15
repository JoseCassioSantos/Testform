
formInc = (evento) => {
    evento.preventDefault();

    const dados = document.querySelector("#formNotas");

    const iform = new FormData(dados);

    let incidente = iform.get("incidente");
    let site = iform.get("site");
    let operação = iform.get("operação");
    let assunto = iform.get("assunto");
    let ferramenta = iform.get("ferramenta");

   

}
