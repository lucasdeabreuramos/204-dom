const maisa = document.querySelector("img");
const lista = document.querySelector("ul");
const roleta = document.querySelector("main img");

function abrirMenu(){

    /*if(lista.classList.contains("ativo")){
        lista.classList.remove("ativo");
    }else{
        lista.classList.add("ativo");*/
        lista.classList.toggle("ativo");
    }

function rodaRoda(){
    roleta.classList.toggle("roda-jequiti");
}

maisa.onclick = abrirMenu;
roleta.onclick = rodaRoda;