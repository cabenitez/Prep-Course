// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  return x >= y ? x : y;    
}

function mayoriaDeEdad(edad) {
  return edad >=18 ? "Allowed" : "Not allowed";
}
  
function conection(status) {
  if (status == 1) {
    return "Online";
  } else if(status == 2) {
    return "Away";
  }else{
    return "Offline";
  }
}

function saludo(idioma) {
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
      break;
    case "mandarin":
      return "Ni Hao!";
      break;
    case "ingles":
      return "Hello!";
      break;
    case undefined:
        return "Hola!";
        break;
    default:
      return "Hola!";  
      break;
  }
}

function colors(color) {
  switch (color) {
    case "blue":
    case "red":
    case "green":
    case "orange":
      return "This is " + color;
      break;
    default:
      return "Color not found";  
      break;
  }
}

function esDiezOCinco(numero) {
  return numero == 10 || numero == 5 ? true : false;
}

function estaEnRango(numero) {
  return numero > 20 && numero < 50 ? true : false;

}

function esEntero(numero) {
  return Math.floor(numero) == numero ? true : false;
}

function fizzBuzz(numero) {
  let salida = '';
  if (numero % 3 == 0) {
    salida = 'fizz';
  }
  if (numero % 5  == 0) {
    salida += 'buzz';
  }
  if(salida == ''){
    salida = numero;
  }
  return salida;
}

function operadoresLogicos(num1, num2, num3) {
  if(num1 > num2 && num1 > num3 && num1 > 0 && num2 > 0 && num3 > 0){
      return "Número 1 es mayor y positivo";
  }
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  if(num3 > num1 && num3 > num2 && num1 != 0 && num2 != 0 && num3 != 0){
    return num3 + 1;
  }
  if (num1 == 0 || num2 == 0 || num3 == 0) {
    return "Error";
  }
  return false;
}

function esPrimo(numero) {
  if (numero == 0 || numero == 1){
    return false;
  }
  
  for (let i = 2; i < numero; i++) {
    if(numero % i == 0){
      return false;
    }
  }
  return true;
}

function esVerdadero(valor){
  return valor ? "Soy verdadero" : "Soy falso";
}

function tablaDelSeis(){
  let tabla = [];
  for (let i = 0; i <= 10; i++) {
    tabla.push(6 * i);
  }
  return tabla;
}

function tieneTresDigitos(numero){
  return numero.toString().length == 3 ? true : false;
}

function doWhile(numero) {
  let i = 0;
  do {
    i++;
    numero = numero + 5;
  } while (i < 8 );

  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
