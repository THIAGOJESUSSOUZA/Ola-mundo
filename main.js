let nomeUsuario = ""
let elemento = document.querySelector("#nome-usuário");


while(nomeUsuario==""){
    nomeUsuario=prompt("Qual seu nome?");
}
if(nomeUsuario==null){
    elemento.textContent="Seja bem-vindo";
}else{
    elemento.textContent = nomeUsuario;
};

