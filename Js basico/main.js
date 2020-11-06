/*var nome = "Yan Felipe"
var lista_de_frutas = [" Maçã", " Manga", " Banana"];

//Dicionario
var fruta = {nome: "Pêra", cor: "Verde"}

//Lista de Dicionários
var frutas = [{nome: "Pêra", cor: "Verde"}, {nome: "Uva", cor: "Roxa"}, {nome: "Morango", cor: "Vermelho"}]

//adiciona um elemento no final do array
lista_de_frutas.push("Kiwi");

//retira um elemento no final do array
lista_de_frutas.pop();

console.log(lista_de_frutas);
console.log(lista_de_frutas.toString());
console.log(lista_de_frutas[0]);
console.log(lista_de_frutas[1]);
console.log(lista_de_frutas[2]);
//console.log(lista_de_frutas[3]);

//Imprime o tamanho da lista numa string
console.log("A lista possui " + lista_de_frutas.length + " elementos");

//Inverte a ordem das posições dos elementos da lista 
console.log("A lista invertida fica assim: ");
console.log(lista_de_frutas.reverse().toString());

//Insere o que eu quiser entre os elementos da lista, inclusive espaço em branco
console.log(lista_de_frutas.join(" /"))
console.log(lista_de_frutas.join(" -"))
console.log(lista_de_frutas.join(""))

//imprime os elementos do dicionário:
console.log(fruta.nome);
console.log(fruta.cor);

console.log("A fruta é uma " + fruta.nome + " e é da cor " + fruta.cor);

//Imprime a lista de dicionarios
console.log(frutas);
console.log(frutas[2]);
*/

/*function soma (n1, n2){
    return n1 + n2;
}

alert(soma(5 , 10));*/

/*Função que troca os parâmentros
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil!"));

function validarIdade(idade){
    var validar;

    if(idade >=18){
        validar = "Acesso permitido"
    }
    else{
        validar = "Acesso negado!"
    }

    return validar;
}

var idade = prompt("Digite sua idade")
alert(validarIdade(idade));*/

function clicar(){
    document.getElementById("vlw").innerHTML = "Valeu pelo Clique!!!";
    //alert("Clicou ~.~");
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/yan-f-almeida/");
}

function trocar(elemento){
    elemento.innerHTML = "UUUUUIIIII!!!!!!";
    //document.getElementById("mousemove").innerHTML = "UUUUUIIIII!!!!!!";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
}