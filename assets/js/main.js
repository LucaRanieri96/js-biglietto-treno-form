/* 
scrivere un programma che chieda all’utente:
1 Il numero di chilometri da percorrere
2 Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. 
*/

const km = document.getElementById("km").value;
console.log(km);

const age = document.getElementById("age").value;
console.log(age);

let ticketPrice = km * 0.21; // prezzo base

if (age < 18) {
    const under18Sale = ticketPrice * 20 / 100;
    console.log(under18Sale);
    ticketPrice = ticketPrice - under18Sale;
    console.log(`${ticketPrice}€`);

} else if (age > 65) {
    const over65Sale = ticketPrice * 40 / 100;
    console.log(over65Sale);
    ticketPrice = ticketPrice - over65Sale;
    console.log(`${ticketPrice}€`);
}

document.getElementById("price").innerHTML =
  "Il prezzo del biglietto è di " + ticketPrice.toFixed(2) + "€";
