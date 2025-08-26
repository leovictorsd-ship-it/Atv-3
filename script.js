// ARRAY DE LISTA DE COMPRAS
const listaCompras = ["Rapadura", "Cuscuz", "Farinha de Pipoca", "Tijolo"];

// FUNÇÃO INCLUDES / LISTA DE COMPRAS
function verificarItem(item) {
  if (listaCompras.includes(item)) {
    console.log("Item encontrado");
  } else {
    console.log("Item não está na lista");
  }
}

verificarItem("Cuscuz");  
verificarItem("Feijão"); 

// ARRAY DE SISTEMA DE LOGIN SIMPLES
const usuarios = ["Levi", "Joao", "Maria"];

//  FUNÇÃO INCLUDES / SISTEMA DE LOGIN SIMPLES
function login(nome) {
  if (usuarios.includes(nome)) {
    console.log("Bem-vindo, " + nome + "!");
  } else {
    console.log("Usuário não encontrado");
  }
}

login("Maria"); 
login("Ana"); 

// ARRAY DE IDADE DOS JOGADORES DO TIME
const idadesJogadores = [17, 16, 18, 18, 17];

// FUNÇÃO INCLUDES / MAIORES DE 18 ANOS
function maioresDe18(array) {
  return array.filter(idade => idade >= 18);
}

console.log(maioresDe18(idadesJogadores));

// ARRAY DE TIMES DE FUTEBOL
let times = ["Flamengo", "Cruzeiro", "Bahia", "Fortaleza", "Grêmio"];

// MOSTRAR OS TIMES
console.log(times);

// MOSTRAR QUANTIDADE DE TIMES
console.log(times.length);

// ADICIONAR MAIS 2 TIMES
times.push("Corinthians", "Internacional");

// MOSTRAR OS TIMES
console.log(times);

// MOSTRAR NOVO TAMANHO
console.log(times.length);

// ARRAY DE 1 À 10
const numeros = [1,2,3,4,5,6,7,8,9,10];

// VERIFICAR SE O NÚMERO 7 ESTÁ NO ARRAY
console.log(numeros.includes(7));

// FILTRAR NÚMEROS MAIORES QUE 5
const maioresQue5 = numeros.filter(num => num > 5);

// MOSTRAR RESULTADO
console.log(maioresQue5);