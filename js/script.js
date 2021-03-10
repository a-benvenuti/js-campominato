//--------------------- LE FUNZIONI-----------------------------
// restituisce un numero random tra due estremi compresi
function random(min, max){
  var numero = Math.floor(Math.random() * (max - min + 1)) + min;
  return numero;
}
/*
restituisce "true" se l'elemento è presente nell'array
(si può fare con includes al posto di usare questa funzione)
*/
function inArray(array, elemento) {
  var i = 0;
  while(i < array.length){
    if(array[i] == elemento){
      return true;
    }
    i++;
  }
  return false;
}
//--------------------fine DELLE FUNZIONI------------------------
// SELEZIONE DEL LIVELLO DI DIFFICOLTA'
do {
  var livello = parseInt(prompt("inserisci il livello di difficolta: 0,1,2"));
} while (livello !=0 && livello !=1 && livello !=2);
var parametroDif;
switch (livello) {
  case 0:
    parametroDif = 100;
    break;
  case 1:
    parametroDif = 80;
    break;
  case 2:
    parametroDif = 50;
    break;
}

// GENERO L'ARRAY CONTENENTE I NUMERI "BOMBA" (univoci)
var arrayBombe = [];
var numBombe = 16;
while (arrayBombe.length < numBombe) {
  var numeroRandom = random(1, parametroDif);
  if (inArray(arrayBombe, numeroRandom) == false) {
    arrayBombe.push(numeroRandom);
  }
}

// CORPO DEL PROGRAMMA
var arrayUtente = [];
var bombaPresa = false;
var casiFavorevoli = parametroDif - numBombe;
// entriamo nel while se le 2 condizioni sono vere (AND)
while (arrayUtente.length < casiFavorevoli && bombaPresa == false) {
    var numeroUtente = parseInt(prompt("inserisci un numero"));
    /*
    validazioni:
    - deve esssere un numero e compreso tra 1 e 100 compresi
    - non posso inserire sempre lo stesso numero
    */
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > parametroDif) {
      alert("ATTENZIONE! devi inserire un numero tra 1 e " + parametroDif);
    } else if (inArray(arrayUtente, numeroUtente) == true) {
      alert("Non fare il furbetto");
    } else if (inArray(arrayBombe, numeroUtente) == true) {
      bombaPresa = true;
    }  else {
      arrayUtente.push(numeroUtente);
    }
}

// ESITO DELLA PARTITA
var variabileStampEsito = document.getElementById('stamp_esito_title');
var variabileStampBombe = document.getElementById('stamp_bombe');
var variabileStampUtente = document.getElementById('stamp_utente');
var variabileStampPunteggio = document.getElementById('stamp_punteggio');

if (bombaPresa == true) {
  alert("Hai perso, il tuo punteggio è: " + arrayUtente.length);
  variabileStampEsito.innerHTML = "Dati della partita:";
  variabileStampBombe.innerHTML = "I numeri bomba sono: " + arrayBombe;
  if (arrayUtente?.length > 0) {
    variabileStampUtente.innerHTML = "I numeri corretti da te inseriti, sono: " + arrayUtente;
  } else {
    variabileStampUtente.innerHTML = "CHE SFORTUNA! Non hai inserito nessun numero corretto";
  }
  variabileStampPunteggio.innerHTML = "Il tuo punteggio è: " + arrayUtente.length;
} else {
  alert("COMPLIMENTI! Hai Vinto.");
  variabileStampEsito.innerHTML = "Dati della partita:";
  variabileStampBombe.innerHTML = "I numeri bomba sono: " + arrayBombe;
  variabileStampUtente.innerHTML = "I numeri corretti da te inseriti, sono: " + arrayUtente;
  variabileStampPunteggio.innerHTML = "VITTORIA!";
}
