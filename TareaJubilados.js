
/*
Escribí la función puedeJubilarse que recibe por parámetro la edad, el género y además,
 los años de aportes jubilatorios (en ese orden)que posee una persona, ejemplo:
puedeJubilarse(62, 'F', 34);
// Ésto da como resultado true ya que cumple con las tres condiciones.
Tené en cuenta que el mínimo de edad para realizar el trámite para las mujeres (género "F") es de 60 años,
mientras que para los hombres (género "M") es 65. En ambos casos, se deben contar con al menos 30 años de aportes jubilatorios.
Te recomendamos que primero trates de resolver el ejercicio, después fijate lo que sigue y si podes resolverlo de ésta otra manera, 
deberíamos usar funciones dentro de otra función, eso ya lo hicimos en funcionception , ¿Lo recordás?
¿Y si delegamos parte de la funcionalidad en otra función? Podríamos separar la lógica de la siguiente manera:
function puedeJubilarse(edad, genero, aniosAporte) {
    return  estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte);
}
Al delegar correctamente hay veces en las que no es necesario alterar el orden de precedencia 
(cómo usamos los || OR y los && AND), ¡otro punto a favor de la delegación! (editado) 
:marca_de_verificación_blanca:
1
*/

/*
//   PRIMERA FORMA DE RESOLVER


const puedeJubilarse = function(edad,genero,aniosAporte){
    return (edad >= 60 && genero === "femenino" && aniosAporte >=30) || (edad >= 65 && genero === "masculino" && aniosAporte >=30);
}
console.log(puedeJubilarse(25,"masculino",10));

*/

/*
//   SEGUNDA FORMA DE RESOLVER 

const estaEnEdad = function(edad,genero) {
  return (edad >=60 && genero === "F") || (edad >= 65 && genero === "M");
};
const tieneSuficientesAportes = function(aniosAportes) {
  return aniosAportes >= 30;
};
const puedeJubilrse = function(edad,genero,aniosAportes) {
  if (estaEnEdad(edad,genero) && tieneSuficientesAportes(aniosAportes)) {
        return "¡cumple con los requisitos para jubilarse!";
  } else {
    return "¡no cumple con los requisitos para jubilarse!";
  }
};
console.log(puedeJubilrse(66,"M",40));
*/
/*
//    TERCERA FORMA DE RESOLVER

const puedeJubilarse = function(e, g, ap){
    if (e >= 60 && g === "F" && ap >=30){
        return true 
    }else if (e >= 65 && g === "M" && ap>= 30){
        return true
    }else{
        return false
    }   
}
console.log(puedeJubilarse(56,"F",40));
*/
/*
//    CUARTA FORMA DE RESOLVER

const estaEnEdad = function(e,g){
    if (e >= 60 && g === "F"){
        return true
    }else if (e >= 60 && g ==="M") {
        return true 
    }else{
        return false
    }
}
const tieneSuficientesAportes = function(ap){
    if (ap >= 30){
        return true
    }else{
        return false
    }
}
const puedeJubilarse2 = function(e, g, ap) {
    return estaEnEdad(e, g) && tieneSuficientesAportes(ap);

}
console.log(puedeJubilarse2(65,"M",30));
*/
//    QUINTA FORMA DE RESOLVER

function puedeJubilarse(edad, genero,aniosAporte){
    if (genero == "F"){
        if (edad >= 60){
            if (aniosAporte >= 30){
                return "Usted esta apta para jubilarse"
            }
               return "Usted no cumple con los años de aporte para jubilarse"
        }           
               return "Usted no puede jubilarse porque no cumple con la edad de jubilacion"
    }else if(genero == "M"){
        if (edad >= 65){
            if (aniosAporte >= 30){
                return "Usted esta apto para jubilarse"
            }
        }       return "Usted no puedo jubilarse, no cumple con los años de aporte"
    }        
                return "Usted no puede jubilarse porque no cumple con la edad de jubilacion"
}
console.log(puedeJubilarse(68,"M",35))