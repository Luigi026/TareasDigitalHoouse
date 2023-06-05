/*
¿Podemos ir al banco?
¡Sorprendente! Cada vez más vas manejando mucho mejor los condicionales. Pero ¿Nunca te pasó haber querido hacer
algún trámite en el banco y llegar sólo para darte cuenta de que estaba cerrado? A nosotros si, por lo que vamos 
a dejar nuestro aporte al mundo y vamos a definir una función que le ayude
a la gente despistada como nosotros a saber si nos conviene ir o no al banco.
Primero que todo tenemos que saber que un banco está abierto de Lunes a Viernes entre las 10 y las 15 horas.
Es tu turno. Define la función puedoIrAlBanco la cual, recibiendo dos parámetros,
el primero: diaDeLaSemana (string) y el segundo horaActual (number), deberá retornar true, 
solo si es posible ir al banco y que lo encontremos abierto. Por ejemplo:
puedoIrAlBanco('Lunes', 11);
// true, dado que es un día laboral y está dentro del horario de atención de los bancos (entre las 10 y las 15).
puedoIrAlBanco('Martes', 18);
// false, dado que es un día laboral pero no está dentro del horario de atención de los bancos (entre las 10 y las 15).
puedoIrAlBanco('Sábado', 14);
// false, dado que si bien el  horario está dentro del horario de atención de los bancos no es un día laboral.
Recordá que podés hacer lo necesario en la misma línea del return sin hacer uso de if/else.

*/

//   PRIMERA FORMA DE RESOLVER
/*
const puedoIrAlBanco = function(diaDeLaSemana, horaActual){
    return diaDeLaSemana != "sabado" && diaDeLaSemana != "domingo" && horaActual >= 10 && horaActual <= 15;
}

console.log(puedoIrAlBanco("luenes", 17));
*/

//   SEGUNDA FORMA DE RESOLVER

const puedoIrAlBanco = function(diaDeLaSemana,horaActual){
    let dias = ["lunes","martes","miercoles","jueves","viernes"]
    return dias.includes(diaDeLaSemana) && horaActual >= 10 && horaActual <= 15
 
}
console.log("lunes, 12");