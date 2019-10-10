/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/


var time = 12560;
var secHours = 3600;

var hours = Math.round(time/secHours);
var secRemaining = time-(secHours*hours);
var minutes = Math.round(secRemaining/60);
var second = secRemaining-(minutes*60);

console.log(`${hours} ore, ${minutes} minuti, e ${second} secondi.`);
