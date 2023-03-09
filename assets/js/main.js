/* 
scrivere un programma che chieda all’utente:
1 Il numero di chilometri da percorrere
2 Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. 
*/
// creo una variabile per il pulsante in modo da assegnargli una funzione poi
const generaBtn = document.getElementById("submit");

// assegno il comportamento al pulsante "Genera"
generaBtn.addEventListener("click", function () {

  const km = document.getElementById("km").value;
  const age = document.getElementById("age").value;

  console.log(`km: ${km}, age: ${age}`);
  
  // calcolo il prezzo del biglietto
  let ticketPrice = km * 0.21;
  
  // calcolo e applico gli sconti nelle due casistiche principali
  if (age < 18) {
    const under18Sale = (ticketPrice * 20) / 100;
    console.log(under18Sale);
    ticketPrice = ticketPrice - under18Sale;
    console.log(`${ticketPrice}€`);
  } else if (age > 65) {
    const over65Sale = (ticketPrice * 40) / 100;
    console.log(over65Sale);
    ticketPrice = ticketPrice - over65Sale;
    console.log(`${ticketPrice}€`);
  }
  
  // mostro a schermo il prezzo del biglietto
  document.getElementById("price").innerHTML = ticketPrice.toFixed(2) + "€";
  
});

const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", function () {

    document.getElementById("age").value = "";
    document.getElementById("km").value = "";
    document.getElementById("name").value = "";
  
});