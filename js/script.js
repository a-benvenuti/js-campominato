/*
Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire per 84 (100 -16) volte
un numero da 1 a 100, se il numero è presente nella lista dei numeri generati,
la partita termina, altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato”,
ovvero presente nella lista di numeri random, o raggiunge il numero massimo
possibile di tentativi consentiti. Al termine della partita il software deve
comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un
numero consentito.
I NUMERI SIA QUELLI "BOMBA" SIA QUELLI DIGITATI DALL'UTENTE NON POSSONO RIPETERSI
*/
/*
BONUS impostare 3 livelli di dificolta riducendo gli estremi e lasciando invariato il numero di "bombe"
*/

// LE FUNZIONI
// genera numero random tra due estremi compresi
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//restituisce "true" se l'elemento è presente nell'array
function isInArray(array, element) {
  var i = 0;
  while(i < array.length){
    if(array[i] == element){
      return true;
    }
    i++;
  }
  return false;
}
//  fine DELLE FUNZIONI


var estremoMin = 1;
var estremoMax = 100; // valore per il quale puo cambiare la difficoltà!

// creo l'array contenente i numeri "bomba" CHE NON POSSONO RIPETERSI
var arrayBombe = [];
var numeroRandom = 0;
var doppione = false;
for (var i = 0; arrayBombe.length < 16; i++) {
  numeroRandom = random(estremoMin, estremoMax)
  doppione = isInArray(arrayBombe, numeroRandom)
  if (doppione == false) {
    arrayBombe.push(numeroRandom)
  }
}
console.log("I numeri bomba sono: " + arrayBombe);
