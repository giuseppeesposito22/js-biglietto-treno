// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del
// passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste
// regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare
//   centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// chiedo all' utente km che vuole percorrere ed età
const numKm = parseInt(prompt("Quanti Km vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));

console.log("numero chilometri " + numKm, "età " + eta);

// variabile per verificare il corretto inserimento dei dati
const datiCorretti = !isNaN(numKm) && !isNaN(eta);

// calcolo il prezzo del biglietto in base ai km scelti
const prezzoKm = 0.21;

const prezzoBiglietto = numKm * prezzoKm;

console.log("prezzo del biglietto " + prezzoBiglietto + "€");

// creo due variabili per il 20% e il 40% di sconto da applicare
let discount20 = prezzoBiglietto * 0.2;
console.log("sconto da applicare 20% " + discount20.toFixed(2));
let discount40 = prezzoBiglietto * 0.4;
console.log("sconto da applicare 40% " + discount40.toFixed(2));

let prezzoFinale;

// se i dati inseriti sono corretti entra all'interno della condizione e calcola il prezzo del biglietto in base all'età
if (datiCorretti) {
  // se l'età dell' utente è minore di 18 si applica il 20% di sconto
  if (eta < 18) {
    prezzoFinale = prezzoBiglietto - discount20;
    console.log(
      "prezzo finale con il 20% di sconto applicato " +
        prezzoFinale.toFixed(2) +
        "€"
    );
  }
  // se l'età dell' utente è maggiore di 65 si applica il 40% di sconto
  else if (eta > 65) {
    prezzoFinale = prezzoBiglietto - discount40;
    console.log(
      "prezzo finale con il 40% di sconto applicato " +
        prezzoFinale.toFixed(2) +
        "€"
    );
  }
  // se l'età dell' utente è compresa tra i 18 e i 65 non si applica nessuno sconto
  else {
    prezzoFinale = prezzoBiglietto;
    console.log(
      "prezzo finale senza sconto applicato " + prezzoFinale.toFixed(2) + "€"
    );

    // indico all'utente il prezzo da pagare
    alert("costo del biglietto " + prezzoFinale.toFixed(2) + "€");
  }
}
// se i dati non sono corretti segnala l'errore
else {
  alert("dati non corretti");
}
