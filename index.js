
function suma(x, y) {
  // suma(2,3) // Retorna 5
  return x+y
}

function multiplica(x, y) {
  // multiplica(2,3) // Retorna 6
  return x*y
}

function mayorQueTreinta(num) {
  // mayorQueTreinta(50) // Retorna true
  if (num > 30){
    return true
  }
  if ( num < 30){
    return false
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"

  if ( idioma == 'aleman' ){
    tx = 'Guten Tag!'
    return tx
  }

  if ( idioma == 'mandarin' ){
    tx = 'Ni Hao!'
    return tx
  }
  if ( idioma == 'ingles' ){
    tx = 'Hello!'
    return tx
  }
  else if ( idioma != 'mandarin' || idioma != 'aleman' || idioma != 'ingles' || idioma == undefined){
    tx = 'Hola!'
    return tx
  }

}

function esEntero(numero) {
  // esEntero(50) // Retorna true
  // esEntero(0.8) // Retorna false
  tx = numero%1
  if (  tx == 0){
    return true
  }
  if ( tx != 0 ){
    return false
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  tx1 = numero%3
  tx2 = numero%5

  if(tx1 == 0 && tx2 == 0){
    return 'fizzbuzz'
  }
  if(tx1 == 0){
    return 'fizz'
  }
  else if(tx2 == 0){
    return 'buzz'
  }
  else if (tx1 == 1 || tx2 == 1){
    return numero
  }
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  tx = array.length
  return tx
  
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  txt = palabras.join(' ')
  return txt

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  var add = 0
  var div = resultadosTest.length
  
  for ( var i= 0; div; i++){
    add += resultadosTest[i];
  }
  return res = add/div
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  txr = numero%2

  if ( txr == 1){
    return true
  }
  if (txr == 0){
    return false
  }

}


module.exports = {
  suma,
  multiplica,
  mayorQueTreinta,
  saludo,
  esEntero,
  fizzBuzz,
  obtenerLargoDelArray,
  dePalabrasAFrase,
  promedioResultadosTest,
  esPrimo
}
