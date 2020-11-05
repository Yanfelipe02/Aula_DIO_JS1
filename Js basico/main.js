var nome = "Yan Felipe"
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