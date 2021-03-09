// LE FUNZIONI
// genera numero random tra due estremi compresi
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//restituisce "true" se l'elemento è presente nell'array (la invoco una volta poi uso includes)
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

// imposto livello di dificoltà
var livello;
while (livello != 0 && livello != 1 && livello != 2){
  var livello = parseInt(prompt("Scegli il livello di difficoltà tra 0 e 2"));
}
if (livello == 0){
  max = 100;
} else if (livello == 1){
  max = 80;
} else if (livello == 2) {
  max = 50;
}
console.log("numero max: " , max);

// creo l'array contenente i numeri "bomba" CHE NON POSSONO RIPETERSI
var arrayBombe = [];
var numeroRandom = 0;
var doppione = false;
for (var i = 0; arrayBombe.length < 16; i++) {
  numeroRandom = random(1, 100)
  doppione = isInArray(arrayBombe, numeroRandom)
  if (doppione == false) {
    arrayBombe.push(numeroRandom)
  }
}
console.log("I numeri bomba sono: " + arrayBombe);

// CORPO DEL PROGRAMMA
var numeroBombe = 16;
var arrayGiocatore = [];
var numeroUtente;


while ( arrayGiocatore.length < (max - numeroBombe) && arrayBombe.includes(numeroUtente) == false ){
  numeroUtente = parseInt(prompt("inserisci un numero"));
  /*
  validazione del numero inserito:
  deve essere =  un numero | compreso tra 1 e 100 | non posso inserire sempre lo stesso valore
  */
  if (isNaN(numeroUtente))  {
    alert("devi inserire solo numeri");
  } else if (numeroUtente <= 0 || numeroUtente > 100 ){
    alert("deve essere compreso da 1 e 100");
  } else if ( arrayGiocatore.includes(numeroUtente) == false ){
    arrayGiocatore.push(numeroUtente);
  }
}

// ESITO DELLA PARTITA
if ( arrayGiocatore.length == (max - numeroBombe)){
  alert ("CONGRATULAZIONI Hai Vinto!");
} else{
  alert("Hai perso il tuo punteggio è: " + (arrayGiocatore.length - 1) );
}
