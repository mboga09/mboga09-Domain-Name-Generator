/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "my"];
let adj = ["great", "big", "beautiful"];
let noun = ["jogger", "racoon", "dog"];
let verb = ["runs", "flies", "eats"];

//loops for anidados:
//primero se debe recorrer todo el for del arreglo "verb"
//una vez recorrido, se pasa al próximo índice del arreglo "noun" (n++), y se recorre nuevamente el for de "verb"
//una vez recorrido todo el for de "noun", se pasa al próximo índice del arreglo "adj"
//se sigue la misma logica para recorrer "adj" y "pronoun"

let counter = 0; //counter se declara fuera de todos los for para que pueda contar el total de combinaciones

for (let p = 0; p < pronoun.length; ) {
  let pr = pronoun[p];

  for (let a = 0; a < adj.length; ) {
    let ad = adj[a];

    for (let n = 0; n < noun.length; ) {
      let no = noun[n]; //aqui se declara esta variable, ya que va a estar estatica hasta que se recorra por completo el for de "verb"

      for (let v = 0; v < verb.length; v++) {
        let ve = verb[v];

        let domain = pr + ad + no + ve + ".com"; //se concatenan todos lo arreglos junto con ".com"
        console.log(domain);

        counter++; //el counter se suma aqui, ya que el for de "verb" es el que siempre esta realizando iteraciones
      }

      n++; //una vez finalizado el for de "verb" se le suma 1 al indice para recorrer el arreglo de "noun"
    }

    a++;
  }

  p++;
}

console.log("Combinations: " + counter);
