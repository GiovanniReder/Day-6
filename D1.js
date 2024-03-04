/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* I principali datatype in javascript sono:
- i valori di tipo stringa, sono sostanzialmente formate da lettere (parole) e devono essere contenuti all'interno di 
  appendici (possono essere sia "doppie" che 'singole'), ci sono tuttavia delle keywords che non si possono utilizzare;
   esempio let stringaVariabile = 'esempio'
- i valori di tipo numerici, sono valori formati esclusivamente da numeri e a differenza dei valori di tipo stringa non
   richiedono appendici; esempio let numeroVariabile = 2
- i valori di tipo booleani; possono dare solo due valori come risultato, ovvero true o false, esempio let variabile = true
- i valori di tipo undefined, viene utilizzato sia nei valori di tipo numerico che di tipo stringa, si utilizza per dire 
  che il valore di una variabile non è stata appositamente non assegnata; esempio let variabile = undefined
- i valori di tipo null, simile a undefined ma diversamente da lui indica che una variabile non ha valore. 
  esempio let variabile = null */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Giovanni";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let firstNumber = 12;
let secondNumber = 20;
let total = firstNumber + secondNumber;
console.log(total); /* 32*/
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName =
  "Reder"; /* se nell'esercizio 2 avessi scritto const = 'Giovanni' non avrei potuto riassegnare un nuovo 
                        valore a myName, nel caso in cui avessi assegnato un altro valore, in console mi uscirebbe:
                        D1.js:54 Uncaught TypeError: Assignment to constant variable
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4;
let sottrazione = y - x;
console.log(sottrazione); /* -8
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
console.log(name1 === name2.toLowerCase());
