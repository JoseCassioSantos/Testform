
formInc = (evento) => {
    evento.preventDefault();

    const dados = document.querySelector("#formNotas");
    const form = new FormData(dados);

    const output = document.querySelector("#form_res")
    

    for (const [key, value] of form) {
        output.innerHTML += `*${key}:* ${value}<br>`;
      }
      console.log(output)

}


copy = () =>{
    const copyText = document.querySelector("#form_res").innerText

    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);

    console.log(copyText)
}